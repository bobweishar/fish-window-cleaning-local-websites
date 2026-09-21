import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('http://localhost:4321');
  return new Response(`# Public search and answer-engine discovery
User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: GPTBot
Allow: /

User-agent: OAI-AdsBot
Allow: /

User-agent: *
Allow: /

Sitemap: ${new URL('sitemap-index.xml', base).href}
`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
