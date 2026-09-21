# Local FISH Window Cleaning Site

Astro marketing site for the locally owned FISH Window Cleaning franchise serving Chicago's western and southern suburbs.

## Local development

```sh
npm install
npm run dev
```

## Verification

```sh
npm run check
npm run build
npm audit --omit=dev --audit-level=high
```

## Production configuration

Copy `.env.example` to the deployment environment and set:

- `PUBLIC_SITE_URL` to the final production origin. This controls canonical URLs, structured data, the sitemap, and social preview URLs.
- `PUBLIC_GTM_ID` to the Google Tag Manager container ID. Analytics are omitted when it is unset.

Estimate CTAs first visit a local `/go/estimate/` route, which records the handoff and redirects to the official local FISH franchise estimate form while preserving supported ad and UTM parameters. Phone CTAs call `(630) 757-3474`. Both emit `dataLayer` events when Tag Manager is configured.

All franchise-owned forms have local handoff routes so future links never need to point straight at a form:

- `/go/estimate/`
- `/go/contact/`
- `/go/feedback/`
- `/go/residential-survey/`
- `/go/commercial-survey/`

## Current pages

- `/`
- `/services/residential-window-cleaning/`
- `/services/commercial-window-cleaning/`
- `/services/gutter-cleaning/`
- `/services/pressure-washing/`
- `/service-areas/hinsdale-il/`
- `/service-areas/oak-brook-il/`
- `/service-areas/burr-ridge-il/`
- `/service-areas/la-grange-il/`
- `/service-areas/hinsdale-il/gutter-cleaning/`
- `/service-areas/oak-brook-il/residential-window-cleaning/`
- `/campaigns/fall-exterior-cleaning/`
- `/team/`
- `/llms.txt`
- `/robots.txt`

Services, areas, service-area intersections, and campaigns are published from `src/data/content.ts`. See `CONTENT_SYSTEM.md` for the routing model and page-quality rules.

Current photography and the FISH mark are sourced from the official local franchise page. Replace them with higher-resolution originals when available without changing the file-level content model.
