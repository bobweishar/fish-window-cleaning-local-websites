import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const configuredSite = process.env.PUBLIC_SITE_URL || 'https://chicagolandwindowcleaning.com';

export default defineConfig({
  site: configuredSite,
  output: 'static',
  integrations: [sitemap({ filter: (page) => {
    const path = new URL(page).pathname;
    return !path.startsWith('/go/') && !path.startsWith('/services/') && !path.startsWith('/service-areas/');
  } })],
  build: { format: 'directory' },
});
