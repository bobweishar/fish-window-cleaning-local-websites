import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const outDir = process.env.REEL_FRAME_DIR
  ? path.resolve(process.env.REEL_FRAME_DIR)
  : path.join(root, 'public/images/ads/reel-frames');
await mkdir(outDir, { recursive: true });

const W = 1080;
const H = 1920;
const red = '#e51837';
const ink = '#141617';
const white = '#ffffff';
const displayFont = path.join(root, 'public/fonts/BarlowCondensed-Bold.ttf');
const bodyFont = path.join(root, 'public/fonts/DMSans-Regular.ttf');
const logo = path.join(root, 'public/images/brand/fish-logo-square.jpg');

const esc = (s) => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

function svg({ headline, kicker = '', footer = '', bg = red, align = 'left', headlineY = 1290, size = 188, logoSize = 170 }) {
  const lines = headline.split('\n');
  const x = align === 'center' ? W / 2 : 70;
  const anchor = align === 'center' ? 'middle' : 'start';
  const tspans = lines.map((line, i) => `<tspan x="${x}" dy="${i === 0 ? 0 : size * 0.84}">${esc(line)}</tspan>`).join('');
  return Buffer.from(`
    <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      <style>
        @font-face { font-family: FishCondensed; src: url('file://${displayFont}'); }
        @font-face { font-family: FishBody; src: url('file://${bodyFont}'); }
      </style>
      <rect x="0" y="1120" width="${W}" height="800" fill="${bg}"/>
      ${kicker ? `<text x="${x}" y="1215" text-anchor="${anchor}" fill="${bg === white ? red : white}" font-family="FishBody, sans-serif" font-size="42" font-weight="700" letter-spacing="5">${esc(kicker)}</text>` : ''}
      <text x="${x}" y="${headlineY}" text-anchor="${anchor}" fill="${bg === white ? ink : white}" font-family="FishCondensed, Impact, sans-serif" font-size="${size}" font-weight="700" letter-spacing="-2">${tspans}</text>
      ${footer ? `<text x="${x}" y="1818" text-anchor="${anchor}" fill="${bg === white ? ink : white}" font-family="FishBody, sans-serif" font-size="38" font-weight="700" letter-spacing="2">${esc(footer)}</text>` : ''}
      <rect x="${W - logoSize - 54}" y="${H - logoSize - 50}" width="${logoSize}" height="${logoSize}" rx="10" fill="${red}"/>
    </svg>`);
}

async function makeFrame(name, photo, opts = {}) {
  const photoHeight = opts.photoHeight ?? 1120;
  const position = opts.position ?? 'attention';
  const photoLayer = await sharp(photo)
    .resize(W, photoHeight, { fit: 'cover', position })
    .modulate({ saturation: opts.saturation ?? 1.06 })
    .toBuffer();

  const markSize = opts.logoSize ?? 170;
  const mark = await sharp(logo).resize(markSize, markSize).toBuffer();
  await sharp({ create: { width: W, height: H, channels: 3, background: opts.bg ?? red } })
    .composite([
      { input: photoLayer, left: 0, top: 0 },
      { input: svg(opts), left: 0, top: 0 },
      { input: mark, left: W - markSize - 54, top: H - markSize - 50 },
    ])
    .png()
    .toFile(path.join(outDir, `${name}.png`));
}

const jobs = (n) => path.join(root, `public/images/jobs/${n}.jpg`);

await makeFrame('clean-01-windows', jobs('4305'), {
  headline: 'DA WINDOWS.', kicker: '', footer: '', position: 'west', size: 160, headlineY: 1460,
});
await makeFrame('clean-02-gutters', jobs('4503'), {
  headline: 'DA GUTTERS.', kicker: '', footer: '', position: 'centre', size: 196, headlineY: 1460,
});
await makeFrame('clean-03-crew', jobs('4542'), {
  headline: 'DA LOCAL\nCREW.', kicker: '', footer: '', position: 'centre', size: 204, headlineY: 1380,
});
await makeFrame('clean-04-cta', jobs('4305'), {
  headline: 'GET A FREE\nESTIMATE.', kicker: '', footer: '(630) 757-3474', position: 'west', size: 174, headlineY: 1410,
});

await makeFrame('shuffle-01', jobs('4305'), {
  headline: 'DA WINDOWS.\nDA GUTTERS.', kicker: 'DA LOCAL CREW', bg: ink, position: 'west', size: 162, headlineY: 1410,
});
await makeFrame('shuffle-02', jobs('4542'), {
  headline: 'COMING\nTHROUGH.', kicker: 'FISH WINDOW CLEANING', bg: red, position: 'centre', size: 180, headlineY: 1410,
});
await makeFrame('shuffle-03', jobs('4504'), {
  headline: 'STOREFRONTS.\nHOMES.', kicker: 'REAL LOCAL WORK', bg: ink, position: 'centre', size: 156, headlineY: 1410,
});
await makeFrame('shuffle-04', jobs('4542'), {
  headline: 'WE WORK\nNEAR YOU.', kicker: 'CHICAGO SUBURBS', bg: red, position: 'centre', size: 180, headlineY: 1410,
});
await makeFrame('shuffle-05', jobs('4305'), {
  headline: 'DA SQUEEGEE\nSHUFFLE.', kicker: 'FISH WINDOW CLEANING', footer: 'GET A FREE ESTIMATE', bg: ink, position: 'west', size: 164, headlineY: 1410,
});

console.log(outDir);
