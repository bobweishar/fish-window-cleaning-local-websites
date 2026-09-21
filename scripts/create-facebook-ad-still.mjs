import sharp from 'sharp';
import path from 'node:path';

const root = process.cwd();
const width = 1080;
const height = 1350;
const photoHeight = 765;
const red = '#e51837';
const ink = '#141617';
const photoPath = path.join(root, 'public/images/jobs/4305.jpg');
const logoPath = path.join(root, 'public/images/brand/fish-logo-square.jpg');
const outputPath = path.join(root, 'public/images/ads/facebook-da-windows-local-crew-v3-hierarchy.png');
const beefsOutputPath = path.join(root, 'public/images/ads/facebook-beefs-dipped-windows-spotless-v1.png');
const beefsScorecardOutputPath = path.join(root, 'public/images/ads/facebook-beefs-dipped-windows-spotless-v2-scorecard.png');
const displayFont = path.join(root, 'public/fonts/BarlowCondensed-Bold.ttf');
const bodyFont = path.join(root, 'public/fonts/DMSans-Regular.ttf');

const photo = await sharp(photoPath)
  .resize(width, photoHeight, { fit: 'cover', position: 'west' })
  .modulate({ saturation: 1.05 })
  .toBuffer();

const logoSize = 126;
const logo = await sharp(logoPath).resize(logoSize, logoSize).toBuffer();

const typography = Buffer.from(`
  <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <style>
      @font-face { font-family: FishCondensed; src: url('file://${displayFont}'); }
      @font-face { font-family: FishBody; src: url('file://${bodyFont}'); }
    </style>
    <rect x="0" y="${photoHeight}" width="${width}" height="${height - photoHeight}" fill="${red}"/>
    <text x="64" y="870" fill="#ffffff" font-family="FishBody, sans-serif" font-size="47" font-weight="700" letter-spacing="3">DA WINDOWS.  DA GUTTERS.</text>
    <text x="60" y="1040" fill="#ffffff" font-family="FishCondensed, Impact, sans-serif" font-size="170" font-weight="700" letter-spacing="-2">DA LOCAL</text>
    <text x="60" y="1240" fill="#ffffff" font-family="FishCondensed, Impact, sans-serif" font-size="198" font-weight="700" letter-spacing="-3">CREW.</text>
  </svg>`);

await sharp({ create: { width, height, channels: 3, background: red } })
  .composite([
    { input: photo, left: 0, top: 0 },
    { input: typography, left: 0, top: 0 },
    { input: logo, left: width - logoSize - 54, top: height - logoSize - 42 },
  ])
  .png()
  .toFile(outputPath);

const beefsTypography = Buffer.from(`
  <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <style>
      @font-face { font-family: FishCondensed; src: url('file://${displayFont}'); }
      @font-face { font-family: FishBody; src: url('file://${bodyFont}'); }
    </style>
    <rect x="0" y="${photoHeight}" width="${width}" height="${height - photoHeight}" fill="${red}"/>
    <text x="64" y="880" fill="#ffffff" font-family="FishBody, sans-serif" font-size="66" font-weight="700" letter-spacing="3">BEEFS: DIPPED.</text>
    <text x="60" y="1058" fill="#ffffff" font-family="FishCondensed, Impact, sans-serif" font-size="184" font-weight="700" letter-spacing="-2">WINDOWS:</text>
    <text x="60" y="1242" fill="#ffffff" font-family="FishCondensed, Impact, sans-serif" font-size="194" font-weight="700" letter-spacing="-3">SPOTLESS.</text>
  </svg>`);

await sharp({ create: { width, height, channels: 3, background: red } })
  .composite([
    { input: photo, left: 0, top: 0 },
    { input: beefsTypography, left: 0, top: 0 },
    { input: logo, left: width - logoSize - 54, top: height - logoSize - 42 },
  ])
  .png()
  .toFile(beefsOutputPath);

const proofStrip = await sharp(photoPath)
  .resize(width, 350, { fit: 'cover', position: 'west' })
  .modulate({ saturation: 1.03 })
  .toBuffer();

const scorecardTypography = Buffer.from(`
  <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <style>
      @font-face { font-family: FishCondensed; src: url('file://${displayFont}'); }
      @font-face { font-family: FishBody; src: url('file://${bodyFont}'); }
    </style>
    <rect width="${width}" height="${height}" fill="#f4f3f1"/>
    <rect width="${width}" height="166" fill="${red}"/>
    <text x="204" y="73" fill="#ffffff" font-family="FishBody, sans-serif" font-size="27" font-weight="700" letter-spacing="5">CHICAGO HOUSE RULES</text>
    <text x="204" y="125" fill="#ffffff" font-family="FishBody, sans-serif" font-size="25" font-weight="700" letter-spacing="2">WESTERN + SOUTHERN SUBURBS</text>

    <text x="62" y="275" fill="${red}" font-family="FishBody, sans-serif" font-size="31" font-weight="700" letter-spacing="4">01</text>
    <text x="132" y="390" fill="${ink}" font-family="FishCondensed, Impact, sans-serif" font-size="162" font-weight="700" letter-spacing="-2">BEEFS:</text>
    <text x="132" y="525" fill="${red}" font-family="FishCondensed, Impact, sans-serif" font-size="170" font-weight="700" letter-spacing="-2">DIPPED.</text>
    <line x1="62" y1="576" x2="1018" y2="576" stroke="#d7d1ca" stroke-width="4"/>

    <text x="62" y="660" fill="${red}" font-family="FishBody, sans-serif" font-size="31" font-weight="700" letter-spacing="4">02</text>
    <text x="132" y="775" fill="${ink}" font-family="FishCondensed, Impact, sans-serif" font-size="150" font-weight="700" letter-spacing="-2">WINDOWS:</text>
    <text x="132" y="918" fill="${red}" font-family="FishCondensed, Impact, sans-serif" font-size="154" font-weight="700" letter-spacing="-2">SPOTLESS.</text>

  </svg>`);

const proofOverlay = Buffer.from(`
  <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <style>@font-face { font-family: FishBody; src: url('file://${bodyFont}'); }</style>
    <rect x="0" y="1257" width="${width}" height="93" fill="#141617" fill-opacity="0.88"/>
    <text x="62" y="1319" fill="#ffffff" font-family="FishBody, sans-serif" font-size="36" font-weight="700" letter-spacing="4">DA LOCAL CREW.</text>
  </svg>`);

const headerLogo = await sharp(logoPath).resize(118, 118).toBuffer();
await sharp({ create: { width, height, channels: 3, background: '#f4f3f1' } })
  .composite([
    { input: scorecardTypography, left: 0, top: 0 },
    { input: proofStrip, left: 0, top: 1000 },
    { input: proofOverlay, left: 0, top: 0 },
    { input: headerLogo, left: 58, top: 24 },
  ])
  .png()
  .toFile(beefsScorecardOutputPath);

console.log(outputPath);
console.log(beefsOutputPath);
console.log(beefsScorecardOutputPath);
