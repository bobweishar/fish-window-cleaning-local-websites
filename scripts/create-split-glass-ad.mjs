import sharp from 'sharp';
import path from 'node:path';

const root = process.cwd();
const width = 1080;
const height = 1350;
const backgroundPath = path.join(root, 'public/images/ads/split-glass-dirty-clean-background-v1.png');
const logoPath = path.join(root, 'public/images/brand/fish-logo-square.jpg');
const outputPath = path.join(root, 'public/images/ads/facebook-dirty-clean-split-logo-v1.png');

const background = await sharp(backgroundPath)
  .resize(width, height, { fit: 'cover', position: 'centre' })
  .toBuffer();

const logoSize = 226;
const border = 10;
const logo = await sharp(logoPath).resize(logoSize, logoSize).toBuffer();
const plate = Buffer.from(`
  <svg width="${logoSize + border * 2}" height="${logoSize + border * 2}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="shadow" x="-40%" y="-40%" width="180%" height="180%">
        <feDropShadow dx="0" dy="10" stdDeviation="13" flood-color="#141617" flood-opacity="0.34"/>
      </filter>
    </defs>
    <rect x="${border}" y="${border}" width="${logoSize}" height="${logoSize}" rx="12" fill="#ffffff" stroke="#ffffff" stroke-width="${border * 2}" filter="url(#shadow)"/>
  </svg>`);

const plateSize = logoSize + border * 2;
const left = Math.round((width - plateSize) / 2);
const top = Math.round((height - plateSize) / 2);

await sharp(background)
  .composite([
    { input: plate, left, top },
    { input: logo, left: left + border, top: top + border },
  ])
  .png()
  .toFile(outputPath);

console.log(outputPath);
