# Local growth content system

The site is one Astro application driven by structured records in `src/data/content.ts`. New pages inherit the existing layout, analytics events, estimate redirect, metadata, structured data, sitemap inclusion, and responsive behavior.

## Page families

### Services

Add a record to `services`. Astro publishes it at `/services/{slug}/` through `src/pages/services/[service].astro`.

Use a service page when the service is genuinely available across the territory and deserves its own search or advertising destination.

### Service areas

Add a record to `areas`. Astro publishes it at `/service-areas/{slug}/` through `src/pages/service-areas/[area].astro`.

An area page should contain facts that materially distinguish the town: property types, access considerations, seasonal conditions, business corridors, or route context. Do not change only the place name.

### Service and town intersections

Add a record to `localServices`. Astro publishes it at `/service-areas/{areaSlug}/{serviceSlug}/`.

Create these only when at least one of the following is true:

- Search or advertising data shows meaningful local intent.
- The service has distinctive local conditions.
- The page will receive paid traffic.
- The franchise has local work, reviews, or photography to support it.

Do not generate every theoretical combination. A small set of useful pages is stronger than a doorway-page matrix.

### Campaigns

Add a record to `campaigns`. Astro publishes it at `/campaigns/{slug}/`.

Campaign pages organize multiple services around a seasonal or customer need. Keep durable seasonal pages live year-round; update copy and promotion timing rather than creating a new URL every season.

## Publishing checklist

1. Confirm the service is available from the local franchise.
2. Confirm the town belongs to the official territory.
3. Use current local photography where possible.
4. Write information specific to the service, town, or campaign.
5. Add internal links from a service page, area page, homepage, or campaign.
6. Use the shared estimate redirect so UTMs and click events are preserved.
7. Run `npm run check` and a production build with `PUBLIC_SITE_URL` set.

## North-star metrics

- Qualified calls and estimate requests from non-branded searches
- Cost per qualified lead by service and town
- Landing-page conversion rate
- Search impressions and clicks for service-town queries
- Repeat commercial inquiries and recurring-route opportunities

Page count and raw traffic are diagnostic metrics, not the goal.
