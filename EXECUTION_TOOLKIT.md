# Execution Toolkit

Use with [AGENCY_IMPLEMENTATION_BLUEPRINT.md](./AGENCY_IMPLEMENTATION_BLUEPRINT.md).

## 1. Corporate pilot-approval request

**Subject:** Request for written approval — local conversion and measurement pilot for location 3277

> We would like written approval for a 90-day local digital-marketing pilot for Dave Weishar's independently owned FISH Window Cleaning franchise, location 3277. The purpose is to improve local conversion, attribution, and reporting without changing or replacing the official FISH location page.
>
> Please confirm whether FISH approves:
>
> 1. The destination architecture: [official subdomain/path preferred; proposed standalone domain only if approved].
> 2. Exact use of the FISH name, logo, uniforms, trucks, franchise disclosure, and links to/from the official location page.
> 3. Locally created service, project, and town content using original photographs and permissioned customer proof.
> 4. Google Search, Local Services/pay-per-lead, Meta retargeting, call tracking, GA4, Tag Manager, Search Console, and enhanced-conversion/offline-outcome tracking.
> 5. Services we may advertise, specifically residential windows, commercial windows, gutter cleaning, pressure washing, and any excluded services.
> 6. Offers/claims we may test: written scope, response-time standard, arrival notification, touch-up/rain policy, seasonal scheduling, and same-visit bundles.
> 7. Campaign ownership by geography and keyword type, including whether corporate currently bids on branded or nonbranded searches in our territory.
> 8. Ownership and portability of the domain, analytics, ad accounts, tracking numbers, creative, and first-party lead data.
> 9. Review/approval turnaround and the person authorized to approve each item.
>
> The pilot will maintain one legitimate Business Profile and business identity. It will not create town profiles, fake addresses, separate brands, or misleading affiliations. We will share page mockups and claims before launch.
>
> Please also provide read-only access or exports for the last 12 months of campaigns serving location 3277: spend, search terms, geographies, calls/forms, conversion definitions, destination URLs, and outcome data where available.

Do not send until Dave/Bob insert the preferred authorized hosting option and review the executed franchise agreement.

## 2. Customer proof request

**Subject:** May we feature the work our local FISH team performs for you?

> We are creating a local page showing real work by our Hinsdale-area team. Would you be comfortable allowing us to:
>
> - identify [Business] as a customer;
> - use one or two photographs taken by our team during service; and
> - include a short comment from you about the experience?
>
> We will send the exact text and images for approval before publishing. This would not imply an exclusive relationship, and you may ask us to remove the feature later. It is completely fine to decline.

Record separate yes/no approval for name, logo, photograph, quote, and paid-ad use. Do not treat one approval as universal.

## 3. Claims ledger

| Claim | Source | Owner | Approved? | Review date | Public wording |
|---|---|---|---:|---|---|
| Local owner is Dave Weishar | Official FISH page | Corporate |  |  |  |
| Phone/address/hours | GBP + official records | Operations |  |  |  |
| Licensed/bonded/insured | Current documents | Operations |  |  |  |
| Background-checked technicians | Current FISH policy | Corporate/HR |  |  |  |
| 12+ Hinsdale commercial clients | CRM/customer list | Dave |  |  |  |
| Dozens of Hinsdale-area homes | CRM/customer list | Dave |  |  |  |
| Five-star rating / review count | Live local GBP | Marketing |  |  |  |
| Response-time promise | Four-week operational baseline | Sales/office |  |  |  |
| Rain/touch-up policy | Written operating policy | Dave |  |  |  |
| Customer name/logo/quote/photo | Written client permission | Marketing |  |  |  |
| Pressure washing availability | Franchise + operating approval | Corporate/Dave |  |  |  |

No claim goes live without a source, owner, and review date.

## 4. Data import specification

One row per lead/estimate/job. Use stable IDs so stages can be updated without creating duplicates.

```text
lead_id
customer_id
created_at
first_response_at
source
medium
campaign
ad_group
keyword
search_term
landing_page
gclid
wbraid
gbraid
utm_source
utm_medium
utm_campaign
utm_content
call_or_form_or_text
new_or_existing_customer
residential_storefront_commercial
service
address_zip
town
qualified_yes_no
disqualification_reason
estimate_sent_at
estimate_value
status
lost_reason
booked_at
completed_at
collected_revenue
labor_hours
variable_cost
contribution_profit
next_service_date
review_requested_at
review_received_at
referral_customer_id
nearby_job_customer_id
permission_status
```

## 5. Event and conversion taxonomy

| Event | Analytics | Ads bidding | Definition |
|---|---:|---:|---|
| `view_quote_start` | Yes | No | Quote form opened |
| `submit_raw_lead` | Yes | Temporary/secondary | Valid form submitted |
| `call_connected` | Yes | Temporary/secondary | Connected tracked call |
| `lead_qualified` | Yes + offline import | Primary after validation | Serviceable, real opportunity |
| `estimate_issued` | Offline | Secondary | Written estimate sent/site walk completed |
| `customer_booked` | Offline | Primary when volume permits | Customer accepts and schedules |
| `job_completed` | Offline | Reporting/value | Work completed |
| `revenue_collected` | Offline | Value bidding only after QA | Collected revenue or contribution value |

Do not count navigation taps, email clicks, or unconnected short calls as business conversions.

## 6. Lead-response templates

### Immediate acknowledgement

> Thanks for contacting Dave's local FISH Window Cleaning team. We received your request for [service] in [town]. [Name] will review it and respond by [specific truthful time]. If you have photos, reply here and attach them—they may help us prepare the estimate faster.

### Missed call

> Hi [name], this is [person] with Dave Weishar's local FISH Window Cleaning team. Sorry we missed you. Are you looking for residential or commercial service, and what town is the property in? You can reply by text or call us at 630-757-3474.

### Estimate follow-up

> Hi [name], I wanted to make sure you received the written scope for [service]. Is anything unclear about what is included, timing, or price? If you are comparing estimates, I am happy to explain the scope line by line so you can compare the same work.

### Review request

> Thank you for trusting our local team with your [service]. If you have a moment, would you share an honest review of your experience? [review link] Feedback—positive or critical—helps us improve and helps neighbors know what to expect.

Never offer a discount, gift, or entry in exchange for a review, and do not ask only customers expected to leave five stars.

## 7. Job proof capture

Complete in five minutes after a suitable job:

- town, date/season, residential/commercial, property type;
- customer goal and initial condition;
- unusual access/window/material issue;
- exact work performed and exclusions;
- duration/crew where useful;
- outcome;
- next recommended service;
- 6–10 original photos: wide, action, care protocol, detail, fixed-angle before/after;
- 10–20 second vertical video;
- permission: name / logo / property / quote / organic / paid;
- review URL;
- related route or nearby opportunity.

Privacy check: faces, house numbers, license plates, security systems, children, interiors, valuables, and medical/resident information.

## 8. Weekly growth meeting

Thirty minutes. One page only.

1. What spent and what completed?
2. Which ZIP/service/customer type created contribution profit?
3. Which leads were unqualified, missed, or lost—and why?
4. Did response and estimate SLAs hold?
5. What search terms or placements should be excluded?
6. Which job created a review, project, referral, repeat, or nearby opportunity?
7. What single experiment changes next week?
8. Where is crew capacity available?

End with four decisions: **scale, hold, fix, stop**.

## 9. Pre-launch QA

### Authority and identity

- [ ] Written FISH approval is archived.
- [ ] Domain/name/disclosure exactly match approval.
- [ ] One legitimate GBP; no new town profiles.
- [ ] Official site and owned experience do not show conflicting NAP/services.
- [ ] Corporate/local ad overlap is documented.

### Conversion

- [ ] Every call/text/form works on mobile.
- [ ] Form confirmation explains next step and time.
- [ ] Live owner receives every lead.
- [ ] Test leads appear once in CRM with source data.
- [ ] Missed-call workflow fires.

### Measurement

- [ ] Consent/privacy text approved.
- [ ] GA4/GTM/Search Console owned by Dave/business.
- [ ] Click IDs and UTMs persist through submission.
- [ ] Call tracking preserves canonical public number appropriately.
- [ ] Qualified/booked/completed test imports succeed.
- [ ] Dashboard reconciles to CRM—not platform self-report alone.

### Content

- [ ] Every image is owned/licensed and permission-safe.
- [ ] Every review is attributable.
- [ ] Every numerical claim has a source/review date.
- [ ] No empty project or fake local module.
- [ ] Services and service area match fulfillment and territory.
- [ ] Pages are fast, accessible, crawlable, canonicalized, and included/excluded from sitemap correctly.

