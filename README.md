# Local FISH Window Cleaning Site

Astro marketing site for the Hinsdale-focused microsite of a locally owned FISH Window Cleaning franchise.

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
- Production defaults to the Chicagoland Window Cleaning GA4 property (`G-P57R8XEBFL`). Set `PUBLIC_GTM_ID` to use a Google Tag Manager container instead, or `PUBLIC_GA4_ID` to override the direct GA4 Measurement ID. If both are present, GTM takes precedence to prevent duplicate measurement.

Estimate CTAs first visit a local `/go/estimate/` route, which records the handoff and redirects to the official local FISH franchise estimate form. Landing-page UTMs and ad click IDs are retained for the browser session and passed to that handoff. Phone CTAs call `(630) 757-3474`.

The analytics layer emits:

- `site_page_view` (translated to `page_view` in direct GA4 mode)
- `estimate_click`, `phone_click`, and `form_redirect`
- `google_reviews_click` and other external `outbound_click` events
- `service_navigation`, `service_area_navigation`, and `campaign_navigation`
- `comparison_engaged` for the homepage dirty/clean slider
- `scroll_depth` at 50% and 90%

Events include page type, path, link placement, destination, a session-scoped identifier, and available campaign attribution. No form fields or other personally identifying information are collected by the site code.

All franchise-owned forms have local handoff routes so future links never need to point straight at a form:

- `/go/estimate/`
- `/go/contact/`
- `/go/feedback/`
- `/go/residential-survey/`
- `/go/commercial-survey/`

## Current pages

- `/`
- `/hinsdale/` (canonical local homepage; `/` shows the same launch experience)
- `/hinsdale/residential-window-cleaning/`
- `/hinsdale/commercial-window-cleaning/`
- `/hinsdale/gutter-cleaning/`
- `/hinsdale/pressure-washing/`
- `/campaigns/fall-exterior-cleaning/`
- `/team/`
- `/llms.txt`
- `/robots.txt`

Services and campaigns are published from `src/data/content.ts`. Legacy regional routes remain available but are excluded from the sitemap and point search engines toward the canonical Hinsdale microsite. See `CONTENT_SYSTEM.md` for the routing model and page-quality rules.

Current photography and the FISH mark are sourced from the official local franchise page. Replace them with higher-resolution originals when available without changing the file-level content model.
