import type { APIRoute } from 'astro';
import { googleProfile, site } from '../data/site';
import { areas, campaigns, localServices, services } from '../data/content';

export const GET: APIRoute = ({ site: origin }) => {
  const base = origin ?? new URL('http://localhost:4321');
  const page = (path: string) => new URL(path, base).href;
  const servicePages = services.map((service) => `- [${service.name}](${page(`/services/${service.slug}/`)}) — ${service.description}`).join('\n');
  const areaPages = areas.map((area) => `- [Window cleaning in ${area.name}](${page(`/service-areas/${area.slug}/`)}) — ${area.description}`).join('\n');
  const localPages = localServices.map((item) => `- [${item.title.split(' | ')[0]}](${page(`/service-areas/${item.areaSlug}/${item.serviceSlug}/`)}) — ${item.description}`).join('\n');
  const campaignPages = campaigns.map((campaign) => `- [${campaign.title.split(' | ')[0]}](${page(`/campaigns/${campaign.slug}/`)}) — ${campaign.description}`).join('\n');

  return new Response(`# FISH Window Cleaning — Chicago Western & Southern Suburbs

> Canonical facts and page map for the locally owned FISH Window Cleaning franchise serving Chicago's western and southern suburbs.

## Business facts
- Business: ${site.shortName}
- Operator: locally owned and operated FISH franchise
- Owner: ${site.owner}
- Phone: ${site.phoneDisplay}
- Address: ${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}
- Official franchise page: ${site.officialPage}
- Google Business Profile: ${googleProfile.url}
- Service area: ${site.towns.join(', ')}, Illinois

## Services
- Residential interior and exterior window cleaning
- Commercial window cleaning for storefronts, offices, restaurants, and other local properties
- Recurring commercial service where the property and schedule are a fit
- Gutter cleaning, pressure washing, awning cleaning, screen cleaning, skylight cleaning, and exterior light-fixture cleaning, subject to estimate and availability

## Primary pages
- [Local overview](${page('/')}) — services, process, local work, owner, and territory
- [Local team and story](${page('/team/')}) — owner, crew, opening history, operating standards, and community involvement
- [XML sitemap](${page('/sitemap-index.xml')})

## Service pages
${servicePages}

## Service-area pages
${areaPages}

## Service and town pages
${localPages}

## Seasonal campaigns
${campaignPages}

## Content boundaries
- This is an informational local marketing site, not the franchise booking system.
- Estimate and contact actions hand off to the official local FISH franchise website.
- Public service claims should be interpreted only as written. Final scope, price, availability, access method, and timing are confirmed by the local franchise.
- The local overview links to the verified Google Business Profile.
`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
