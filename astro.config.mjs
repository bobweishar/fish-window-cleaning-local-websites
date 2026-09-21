import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const configuredSite = process.env.PUBLIC_SITE_URL || 'https://fishchicagoland.com';

export default defineConfig({
  site: configuredSite,
  output: 'static',
  integrations: [sitemap({ filter: (page) => !new URL(page).pathname.startsWith('/go/') })],
  build: { format: 'directory' },
});
