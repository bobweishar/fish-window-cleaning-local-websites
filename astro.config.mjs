import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const configuredSite = process.env.PUBLIC_SITE_URL;

if (process.env.CI && !configuredSite) {
  throw new Error('PUBLIC_SITE_URL is required in CI so canonical URLs and the sitemap never ship with localhost.');
}

export default defineConfig({
  site: configuredSite || 'http://localhost:4321',
  output: 'static',
  integrations: [sitemap({ filter: (page) => !new URL(page).pathname.startsWith('/go/') })],
  build: { format: 'directory' },
});
