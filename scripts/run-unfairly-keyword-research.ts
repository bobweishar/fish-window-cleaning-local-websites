import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

import { fetchKeywordIdeas, type KeywordIdea } from "../../unfairly-app/src/lib/connectors/dataforseo";

const measuredAt = new Date().toISOString();
const outDir = resolve(__dirname, "../research");

const towns = [
  "hinsdale",
  "oak lawn",
  "oak brook",
  "downers grove",
  "la grange",
  "lagrange",
  "hickory hills",
  "bridgeview",
  "oak forest",
  "midlothian",
  "flossmoor",
  "burr ridge",
  "clarendon hills",
];

const batches: Array<{ theme: string; seeds: string[] }> = [
  {
    theme: "residential-window",
    seeds: [
      "window cleaning",
      "window washing",
      "window cleaning near me",
      "residential window cleaning",
      "exterior window cleaning",
      "interior window cleaning",
      "house window cleaning",
      "professional window cleaners",
    ],
  },
  {
    theme: "commercial-window",
    seeds: [
      "commercial window cleaning",
      "storefront window cleaning",
      "office window cleaning",
      "restaurant window cleaning",
      "retail window cleaning",
      "recurring window cleaning service",
    ],
  },
  {
    theme: "adjacent-services",
    seeds: [
      "gutter cleaning",
      "gutter cleaning near me",
      "pressure washing",
      "pressure washing near me",
      "awning cleaning",
      "exterior light fixture cleaning",
      "ceiling fan cleaning",
    ],
  },
  {
    theme: "western-suburbs",
    seeds: towns.flatMap((town) => [
      `window cleaning ${town}`,
      `window washing ${town}`,
      `gutter cleaning ${town}`,
    ]),
  },
  {
    theme: "local-commercial",
    seeds: towns.flatMap((town) => [
      `commercial window cleaning ${town}`,
      `storefront window cleaning ${town}`,
    ]),
  },
];

type Row = KeywordIdea & {
  source_themes: string[];
  intent: string;
  service: string;
  town: string | null;
  measured_at: string;
  source: "Unfairly DataForSEO connector";
  unmeasured_reason?: string;
};

function serviceFor(keyword: string): string {
  if (/gutter/.test(keyword)) return "gutter cleaning";
  if (/pressure wash|power wash|soft wash/.test(keyword)) return "pressure washing";
  if (/awning/.test(keyword)) return "awning cleaning";
  if (/light fixture|coach light/.test(keyword)) return "exterior light fixtures";
  if (/ceiling fan/.test(keyword)) return "ceiling fan cleaning";
  if (/commercial|storefront|office|restaurant|retail/.test(keyword)) return "commercial window cleaning";
  return "residential window cleaning";
}

function townFor(keyword: string): string | null {
  return towns.find((town) => keyword.includes(town)) ?? null;
}

function intentFor(keyword: string): string {
  if (/jobs?|salary|career|training|equipment|supplies|tools?|machine|robot|diy|how to|homemade|windex|home depot|lowes|amazon|electric|ryobi|sun joe|greenworks|dewalt|harbor freight|karcher|simpson|microfiber|cloth|solution|kit|squeegee|soap|concentrate|liquid|spray|magnetic|resource|software|logo|youtube|reddit|calculator|template|repair|replacement|vinegar|brush|pictures?|flyers?|before and after|best .*cleaner|products?|water fed pole/.test(keyword)) return "exclude";
  if (/near me|company|companies|service|professional|residential|commercial|storefront|office|restaurant|retail|house|exterior|interior|quote|estimate|cost|price/.test(keyword)) return "commercial";
  if (/^(window cleaning|window washing|gutter cleaning|pressure washing|power washing|awning cleaning)$/.test(keyword)) return "commercial";
  return "informational";
}

function relevant(keyword: string): boolean {
  return /window clean|window wash|window cleaner|gutter clean|pressure wash|power wash|soft wash|awning clean|light fixture clean|coach light clean|ceiling fan clean|storefront window|office window|restaurant window|retail window/.test(keyword);
}

function csvCell(value: unknown): string {
  const text = value == null ? "" : String(value);
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

async function main() {
const byKeyword = new Map<string, Row>();
const missingSeeds: string[] = [];

for (const batch of batches) {
  const ideas = await fetchKeywordIdeas(
    batch.seeds,
    { location_code: 2840, language_code: "en" },
    { limit: 200 },
  );

  const returned = new Set(ideas.map((idea) => idea.keyword.toLowerCase().trim()));
  for (const seed of batch.seeds) {
    if (!returned.has(seed.toLowerCase())) missingSeeds.push(seed.toLowerCase());
  }

  for (const idea of ideas) {
    const keyword = idea.keyword.toLowerCase().trim();
    const existing = byKeyword.get(keyword);
    if (existing) {
      if (!existing.source_themes.includes(batch.theme)) existing.source_themes.push(batch.theme);
      continue;
    }
    byKeyword.set(keyword, {
      ...idea,
      keyword,
      source_themes: [batch.theme],
      intent: intentFor(keyword),
      service: serviceFor(keyword),
      town: townFor(keyword),
      measured_at: measuredAt,
      source: "Unfairly DataForSEO connector",
    });
  }
}

for (const seed of [...new Set(missingSeeds)]) {
  if (byKeyword.has(seed)) continue;
  byKeyword.set(seed, {
    keyword: seed,
    volume: null,
    cpc: null,
    competition: null,
    difficulty: null,
    source_themes: ["seed-not-returned"],
    intent: intentFor(seed),
    service: serviceFor(seed),
    town: townFor(seed),
    measured_at: measuredAt,
    source: "Unfairly DataForSEO connector",
    unmeasured_reason: "Seed was submitted but DataForSEO keyword_ideas returned no row.",
  });
}

const allRows = [...byKeyword.values()].sort((a, b) => (b.volume ?? -1) - (a.volume ?? -1));
const relevantRows = allRows.filter((row) => relevant(row.keyword) && row.intent !== "exclude");

const headers = [
  "keyword",
  "volume",
  "cpc",
  "competition",
  "difficulty",
  "intent",
  "service",
  "town",
  "source_themes",
  "measured_at",
  "source",
  "unmeasured_reason",
];
const csv = [
  headers.join(","),
  ...relevantRows.map((row) =>
    headers.map((header) => csvCell((row as Record<string, unknown>)[header] ?? (header === "source_themes" ? row.source_themes.join("|") : ""))).join(","),
  ),
].join("\n");

const genericLeadWords = /^(window|residential|professional|exterior|interior|house|commercial|storefront|office|restaurant|retail|high rise|post construction|construction|solar panel|gutter|pressure|power|soft|awning|exterior light|ceiling fan)\b/;
const looksBranded = (keyword: string) =>
  /(?:window cleaning|window washing|power washing)$/.test(keyword) && !genericLeadWords.test(keyword);
const usefulCommercialRows = relevantRows.filter((row) => row.intent === "commercial" && !looksBranded(row.keyword));

const serviceRollup = [...new Set(relevantRows.map((row) => row.service))]
  .map((service) => {
    const rows = usefulCommercialRows.filter((row) => row.service === service && row.volume != null);
    return {
      service,
      measured_keywords: rows.length,
      summed_volume_directional: rows.reduce((sum, row) => sum + (row.volume ?? 0), 0),
      highest_cpc: rows.reduce((max, row) => Math.max(max, row.cpc ?? 0), 0),
    };
  })
  .sort((a, b) => b.summed_volume_directional - a.summed_volume_directional);

const obviousBrand = /pink's|clearview|window genie|squeegee squad|fish window cleaning|shack shine|men in kilts|labor pan[e]?s|window gang/;
const top = usefulCommercialRows
  .filter((row) => row.volume != null && !obviousBrand.test(row.keyword))
  .slice(0, 60);
const geo = relevantRows.filter((row) => row.town != null).sort((a, b) => (b.volume ?? -1) - (a.volume ?? -1));

const markdown = `# FISH local keyword research — DataForSEO\n\n` +
  `Measured: ${measuredAt}\n\n` +
  `Source: Unfairly's hosted DataForSEO connector (Google, United States, English).\n\n` +
  `## Coverage\n\n` +
  `- Seed batches: ${batches.length}\n` +
  `- Unique ideas returned or preserved: ${allRows.length}\n` +
  `- Relevant non-job/service terms retained: ${relevantRows.length}\n` +
  `- Submitted seeds with no returned row: ${[...new Set(missingSeeds)].length}\n\n` +
  `Volumes are per-keyword Google Ads search-volume estimates. Rollup sums are directional only because related phrases overlap and should not be treated as unique people.\n\n` +
  `## Service-theme rollup\n\n` +
  `| Service | Measured terms | Directional summed volume | Highest CPC |\n|---|---:|---:|---:|\n` +
  serviceRollup.map((row) => `| ${row.service} | ${row.measured_keywords} | ${row.summed_volume_directional.toLocaleString()} | $${row.highest_cpc.toFixed(2)} |`).join("\n") +
  `\n\n## Top relevant keywords\n\n` +
  `| Keyword | Volume | CPC | Difficulty | Service | Town |\n|---|---:|---:|---:|---|---|\n` +
  top.map((row) => `| ${row.keyword} | ${row.volume ?? "—"} | ${row.cpc == null ? "—" : `$${row.cpc.toFixed(2)}`} | ${row.difficulty ?? "—"} | ${row.service} | ${row.town ?? "—"} |`).join("\n") +
  `\n\n## Geo-modified terms returned\n\n` +
  (geo.length
    ? `| Keyword | Volume | CPC | Difficulty |\n|---|---:|---:|---:|\n` + geo.map((row) => `| ${row.keyword} | ${row.volume ?? "—"} | ${row.cpc == null ? "—" : `$${row.cpc.toFixed(2)}`} | ${row.difficulty ?? "—"} |`).join("\n")
    : `No geo-modified terms were returned with measured rows; preserved submitted seeds remain in the CSV with null metrics.`) +
  `\n`;

await mkdir(outDir, { recursive: true });
await Promise.all([
  writeFile(resolve(outDir, "dataforseo-keyword-map.csv"), csv + "\n"),
  writeFile(resolve(outDir, "dataforseo-keyword-raw.json"), JSON.stringify({ measured_at: measuredAt, batches, rows: allRows }, null, 2) + "\n"),
  writeFile(resolve(outDir, "dataforseo-keyword-summary.md"), markdown),
]);

console.log(JSON.stringify({ measuredAt, batches: batches.length, allRows: allRows.length, relevantRows: relevantRows.length, geoRows: geo.length, top: top.slice(0, 20) }, null, 2));
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
