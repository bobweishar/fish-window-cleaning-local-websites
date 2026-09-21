import puppeteer from '/Users/bob/Documents/unfairly-site/node_modules/puppeteer-core/lib/esm/puppeteer/puppeteer-core.js';
import { mkdir } from 'node:fs/promises';

const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true,
  args: ['--no-sandbox'],
});

await mkdir('.impeccable/review', { recursive: true });

for (const capture of [
  { name: 'desktop', width: 1440, height: 960 },
  { name: 'mobile', width: 390, height: 844 },
]) {
  const page = await browser.newPage();
  await page.setViewport({ width: capture.width, height: capture.height, deviceScaleFactor: 1 });
  await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
  await page.goto('http://127.0.0.1:4321/', { waitUntil: 'networkidle0' });
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += Math.max(320, window.innerHeight * .75)) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 40));
    }
    window.scrollTo(0, 0);
    await new Promise((resolve) => setTimeout(resolve, 120));
  });
  await page.screenshot({ path: `.impeccable/review/${capture.name}.png`, fullPage: true });
  await page.close();
}

await browser.close();
