import type { APIRoute } from 'astro';
import { googleProfile, site } from '../data/site';
import { services } from '../data/content';

export const GET: APIRoute = ({ site: origin }) => {
  const base = origin ?? new URL('http://localhost:4321');
  const page = (path: string) => new URL(path, base).href;
  const servicePages = services.map((service) => `- [${service.name} in Hinsdale](${page(`/hinsdale/${service.slug}/`)}) — ${service.description}`).join('\n');

  return new Response(`# FISH Window Cleaning — Hinsdale

> Canonical facts and page map for the locally owned FISH Window Cleaning team serving Hinsdale, Illinois.

## Business facts
- Business: ${site.shortName}
- Operator: locally owned and operated FISH franchise
- Owner: ${site.owner}
- Phone: ${site.phoneDisplay}
- Address: ${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}
- Official franchise page: ${site.officialPage}
- Google Business Profile: ${googleProfile.url}
- Primary market: Hinsdale, Illinois
- Official franchise territory: ${site.towns.join(', ')}, Illinois

## Services
- Residential interior and exterior window cleaning
- Commercial window cleaning for storefronts, offices, restaurants, and other local properties
- Recurring commercial service where the property and schedule are a fit
- Gutter cleaning, pressure washing, awning cleaning, screen cleaning, skylight cleaning, and exterior light-fixture cleaning, subject to estimate and availability

## Primary pages
- [Hinsdale local overview](${page('/hinsdale/')}) — services, process, local work, owner, and local property context
- [Local team and story](${page('/team/')}) — owner, crew, opening history, operating standards, and community involvement
- [XML sitemap](${page('/sitemap-index.xml')})

## Service pages
${servicePages}

## Content boundaries
- This is an informational local marketing site, not the franchise booking system.
- Estimate and contact actions hand off to the official local FISH franchise website.
- Public service claims should be interpreted only as written. Final scope, price, availability, access method, and timing are confirmed by the local franchise.
- The Hinsdale overview links to the verified Google Business Profile.
`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
