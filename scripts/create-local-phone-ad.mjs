import sharp from 'sharp';
import path from 'node:path';

const root = process.cwd();
const width = 1080;
const height = 1350;
const photoHeight = 720;
const red = '#e51837';
const ink = '#141617';
const photoPath = path.join(root, 'public/images/jobs/4305.jpg');
const logoPath = path.join(root, 'public/images/brand/fish-logo-square.jpg');
const outputPath = path.join(root, 'public/images/ads/facebook-da-windows-local-crew-local-phone-v1.png');
const displayFont = path.join(root, 'public/fonts/BarlowCondensed-Bold.ttf');
const bodyFont = path.join(root, 'public/fonts/DMSans-Regular.ttf');

const photo = await sharp(photoPath)
  .resize(width, photoHeight, { fit: 'cover', position: 'west' })
  .modulate({ saturation: 1.05 })
  .toBuffer();

const logoSize = 118;
const logo = await sharp(logoPath).resize(logoSize, logoSize).toBuffer();

const layout = Buffer.from(`
  <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <style>
      @font-face { font-family: FishCondensed; src: url('file://${displayFont}'); }
      @font-face { font-family: FishBody; src: url('file://${bodyFont}'); }
    </style>
    <rect x="0" y="${photoHeight}" width="${width}" height="630" fill="${red}"/>
    <text x="54" y="867" fill="#ffffff" font-family="FishCondensed, Impact, sans-serif" font-size="144" font-weight="700" letter-spacing="-2">DA WINDOWS.</text>
    <text x="54" y="1007" fill="#ffffff" font-family="FishCondensed, Impact, sans-serif" font-size="144" font-weight="700" letter-spacing="-2">DA GUTTERS.</text>
    <text x="54" y="1147" fill="#ffffff" font-family="FishCondensed, Impact, sans-serif" font-size="144" font-weight="700" letter-spacing="-2">DA LOCAL CREW.</text>
    <rect x="0" y="1207" width="${width}" height="143" fill="${ink}"/>
    <text x="54" y="1254" fill="#ffffff" font-family="FishBody, sans-serif" font-size="27" font-weight="700" letter-spacing="2.4">DAVE WEISHAR • WESTERN + SOUTHERN SUBURBS</text>
    <text x="54" y="1317" fill="#ffffff" font-family="FishCondensed, Impact, sans-serif" font-size="64" font-weight="700" letter-spacing="1">(630) 757-3474</text>
  </svg>`);

await sharp({ create: { width, height, channels: 3, background: red } })
  .composite([
    { input: photo, left: 0, top: 0 },
    { input: layout, left: 0, top: 0 },
    { input: logo, left: width - logoSize - 47, top: height - logoSize - 13 },
  ])
  .png()
  .toFile(outputPath);

console.log(outputPath);
