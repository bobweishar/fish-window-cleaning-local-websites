export type FAQ = { question: string; answer: string };
export type ContentBlock = { title: string; copy: string };

export type ServicePage = {
  slug: string;
  name: string;
  title: string;
  description: string;
  heroHeadline: string;
  heroCopy: string;
  heroImage: string;
  heroAlt: string;
  heroFit?: 'cover' | 'contain';
  scopeHeading: string;
  scope: ContentBlock[];
  featureHeading: string;
  featureCopy?: string;
  featureImage: string;
  featureAlt: string;
  checks: string[];
  localHeading: string;
  localCopy: string;
  localImage: string;
  localAlt: string;
  faqs: FAQ[];
  closeHeading: string;
};

export const services: ServicePage[] = [
  {
    slug: 'residential-window-cleaning',
    name: 'Residential window cleaning',
    title: 'Residential Window Cleaning in Hinsdale, IL | Local FISH Team',
    description: 'Residential window cleaning for Hinsdale homes from a locally owned FISH Window Cleaning team.',
    heroHeadline: 'Window cleaning for the whole house.',
    heroCopy: 'Interior and exterior care for older divided-light windows, tall entries, sunrooms, skylights, and the glass that is hardest to reach.',
    heroImage: '/images/jobs/4312.jpg',
    heroAlt: 'Local FISH technician cleaning upper-story windows on a brick Chicago-area home',
    scopeHeading: 'Choose the clean your home needs.',
    scope: [
      { title: 'Exterior glass', copy: 'Clear away the grime, pollen, and weather that collect outside.' },
      { title: 'Inside + outside', copy: 'A complete clean when you want the view clear from both sides.' },
      { title: 'Details + add-ons', copy: 'Ask about screens, tracks, sills, skylights, gutters, and exterior fixtures.' },
    ],
    featureHeading: 'Care around the things you care about.',
    featureImage: '/images/jobs/4260.jpg',
    featureAlt: 'Uniformed FISH team member cleaning an exterior coach light',
    checks: ['Uniformed professionals', 'Background-checked team members', 'Protection for interior work', 'Free on-site estimate'],
    localHeading: 'From Robbins Park to The Woodlands, the scope changes.',
    localCopy: 'Older windows and divided panes call for different care than tall entries, broad modern glass, or landscaped access. The team confirms the method at the property.',
    localImage: '/images/jobs/4305.jpg',
    localAlt: 'Red FISH vans on a mature tree-lined suburban street',
    faqs: [
      { question: 'Do I need to be home?', answer: 'Interior access requires coordination. Exterior-only work may be possible without you home, depending on the property and confirmed scope.' },
      { question: 'Can you clean screens, tracks, or skylights?', answer: 'Yes. Include those details in the estimate so the written scope matches what you want cleaned.' },
      { question: 'What happens if weather changes the plan?', answer: 'The local team will confirm scheduling and contact you if conditions affect the appointment.' },
      { question: 'Do you also clean gutters or exterior fixtures?', answer: 'Yes. Both are available locally and can be evaluated with the window-cleaning request.' },
    ],
    closeHeading: 'Let the local team handle the ladder.',
  },
  {
    slug: 'commercial-window-cleaning',
    name: 'Commercial window cleaning',
    title: 'Commercial Window Cleaning in Hinsdale, IL | Local FISH Team',
    description: 'Commercial window cleaning for Hinsdale storefronts, offices, restaurants, and local businesses from a locally owned FISH team.',
    heroHeadline: 'Clean storefront glass for downtown.',
    heroCopy: 'One-time or recurring window cleaning for storefronts, offices, restaurants, and customer-facing glass around Washington Street, Hinsdale Avenue, and the wider village.',
    heroImage: '/images/jobs/4542.jpg',
    heroAlt: 'FISH professional cleaning the door and glass of a local storefront',
    scopeHeading: 'A cleaner first impression, on your schedule.',
    scope: [
      { title: 'Storefronts + restaurants', copy: 'Entry doors, customer-facing glass, and recurring care around operating hours.' },
      { title: 'Offices + showrooms', copy: 'Interior and exterior glass for workplaces where presentation matters.' },
      { title: 'Multi-site operators', copy: 'A consistent scope and schedule across approved local properties.' },
    ],
    featureHeading: 'Set the route. Keep the glass handled.',
    featureCopy: 'One-time cleaning or a recurring route built around your hours.',
    featureImage: '/images/jobs/4382.jpg',
    featureAlt: 'Local FISH technician cleaning tall interior facility windows',
    checks: ['Property walkthrough', 'Written scope', 'Recurring scheduling', 'One local operation to call'],
    localHeading: 'Ready for downtown business hours.',
    localCopy: 'Road film, salt, fingerprints, and seasonal weather show quickly on customer-facing glass. The local team builds access, customer hours, and recurring timing into the estimate.',
    localImage: '/images/jobs/4486.jpg',
    localAlt: 'Red FISH van outside a Chicago-area commercial job in winter',
    faqs: [
      { question: 'Can service happen around business hours?', answer: 'Share opening hours and access constraints during the estimate so the team can confirm a workable schedule.' },
      { question: 'Can you provide recurring service?', answer: 'Yes. Recurring service is available for storefronts and other commercial properties where the route is a fit.' },
      { question: 'What information helps with an estimate?', answer: 'Property address, number of stories, interior or exterior scope, preferred frequency, operating hours, and access requirements.' },
      { question: 'Do you handle every building height?', answer: 'The local team confirms access and scope after reviewing the property.' },
    ],
    closeHeading: 'Put clean glass on the schedule.',
  },
  {
    slug: 'gutter-cleaning',
    name: 'Gutter cleaning',
    title: 'Gutter Cleaning in Hinsdale, IL | Local FISH Team',
    description: 'Seasonal gutter cleaning for Hinsdale homes from the local FISH Window Cleaning team.',
    heroHeadline: 'Clear the gutters before leaf season piles up.',
    heroCopy: 'Seasonal gutter cleaning for homes under a mature canopy, with roofline and access confirmed before the crew gets to work.',
    heroImage: '/images/jobs/4504.jpg',
    heroAlt: 'Local FISH technician clearing gutters on a Chicago-area home',
    scopeHeading: 'Get the water moving the right way.',
    scope: [
      { title: 'Debris removal', copy: 'Leaves and accumulated material cleared from accessible gutter runs.' },
      { title: 'Seasonal timing', copy: 'Schedule around fall leaf drop, spring buildup, and the needs of the property.' },
      { title: 'Combined exterior visit', copy: 'Ask about pairing gutters with window cleaning or exterior fixture care.' },
    ],
    featureHeading: 'See what came out—not just what went up.',
    featureCopy: 'The estimate confirms roofline, access, and the gutter runs included in the job.',
    featureImage: '/images/jobs/4503.jpg',
    featureAlt: 'Before and after photographs of a gutter cleaned by the local FISH team',
    checks: ['Free on-site estimate', 'Scope confirmed before work', 'Local uniformed crew', 'Window-cleaning add-on available'],
    localHeading: 'Made for heavy leaf season.',
    localCopy: 'Mature trees are part of what makes the village feel established. They also make gutter timing matter. Book before the first hard freeze narrows the window.',
    localImage: '/images/jobs/4305.jpg',
    localAlt: 'Tree-lined Chicago suburban street with local FISH vans',
    faqs: [
      { question: 'When should gutters be cleaned?', answer: 'Timing depends on tree cover and the property. Fall after major leaf drop and spring after winter buildup are common windows.' },
      { question: 'Can I combine gutters and windows?', answer: 'Yes. Ask for both when requesting the estimate so the team can review the combined scope.' },
      { question: 'Do you clean every roofline?', answer: 'Access and building height are confirmed during the estimate.' },
      { question: 'Do I need to be home?', answer: 'The team will confirm access and whether anyone needs to be present for the scheduled work.' },
    ],
    closeHeading: 'Get ahead of the next downpour.',
  },
  {
    slug: 'pressure-washing',
    name: 'Pressure washing',
    title: 'Pressure Washing in Hinsdale, IL | Local FISH Team',
    description: 'Local pressure washing for approved exterior surfaces at Hinsdale homes and businesses.',
    heroHeadline: 'Four seasons leave a mark.',
    heroCopy: 'Pressure washing for approved exterior surfaces, estimated around the material, buildup, brick or stone details, landscaping, and access.',
    heroImage: '/images/jobs/4101.jpg',
    heroAlt: 'Pressure washing work performed by the local FISH team',
    heroFit: 'contain',
    scopeHeading: 'Start with the surface—not a one-setting-fits-all promise.',
    scope: [
      { title: 'Property review', copy: 'The team reviews the material, access, staining, and nearby landscaping.' },
      { title: 'Defined scope', copy: 'Know which exterior surfaces are included before scheduling.' },
      { title: 'Exterior pairing', copy: 'Ask about combining pressure washing with windows, gutters, or fixtures.' },
    ],
    featureHeading: 'A better reset for exterior surfaces.',
    featureCopy: 'The right approach depends on what is being cleaned. Final method and availability are confirmed at the estimate.',
    featureImage: '/images/jobs/4066.jpg',
    featureAlt: 'Local FISH team pressure washing an exterior surface',
    checks: ['Surface-specific estimate', 'Local uniformed crew', 'Clear written scope', 'Exterior service coordination'],
    localHeading: 'Road film, shade, moisture, and four seasons.',
    localCopy: 'Local exteriors collect a mix of seasonal residue. A property review keeps the recommendation tied to the actual surface instead of a generic package.',
    localImage: '/images/jobs/4280.jpg',
    localAlt: 'Local FISH technician working on a commercial exterior',
    faqs: [
      { question: 'Which surfaces can be pressure washed?', answer: 'Availability depends on the material and condition. The local team confirms an appropriate scope after reviewing the property.' },
      { question: 'Can pressure washing be combined with windows?', answer: 'Yes. Include both services in the estimate request so sequencing and scope can be planned together.' },
      { question: 'Is commercial pressure washing available?', answer: 'Ask the local team to review the property, surface, access, and operating constraints.' },
      { question: 'Will every stain come out?', answer: 'Results vary by surface, age, and the type of buildup. The estimate is the right time to set expectations.' },
    ],
    closeHeading: 'Start with a walk around the property.',
  },
];

export type AreaPage = {
  slug: string;
  name: string;
  title: string;
  description: string;
  heroHeadline: string;
  heroCopy: string;
  details: ContentBlock[];
  noteHeadline: string;
  noteCopy: string;
  faqs: FAQ[];
};

export const areas: AreaPage[] = [
  {
    slug: 'hinsdale-il', name: 'Hinsdale', title: 'Window Cleaning in Hinsdale, IL | Local FISH Team',
    description: 'Residential and commercial window cleaning in Hinsdale, Illinois from a locally owned FISH Window Cleaning franchise.',
    heroHeadline: 'Window cleaning for Hinsdale homes and businesses.',
    heroCopy: 'Local service for windows, gutters, fixtures, and exterior surfaces across the seasons.',
    details: [
      { title: 'Homes with details worth protecting.', copy: 'Historic or divided-light windows, tall entries, mature landscaping, brick, stone, and larger interiors all affect access and the right cleaning method.' },
      { title: 'Downtown glass customers notice.', copy: 'Storefront doors and street-facing glass collect fingerprints, traffic film, and weather quickly. A recurring route keeps them handled.' },
    ],
    noteHeadline: 'Clean windows. Clear gutters. Da game.',
    noteCopy: 'Get the outside list handled before Chicago football, leaf season, or the next house full of people.',
    faqs: [
      { question: 'Can you work with divided panes or older windows?', answer: 'Point out the window type during the estimate so the team can review construction, condition, and access.' },
      { question: 'Can I combine windows and gutters?', answer: 'Yes. Ask for both in the estimate so the team can review the combined scope.' },
      { question: 'Do you clean downtown storefronts?', answer: 'Yes. Share the address, operating hours, and preferred frequency with the local team.' },
      { question: 'Do you only serve Hinsdale?', answer: 'No. The territory also includes Oak Brook, Burr Ridge, Clarendon Hills, Downers Grove, La Grange, and additional western and southern suburbs.' },
    ],
  },
  {
    slug: 'oak-brook-il', name: 'Oak Brook', title: 'Window Cleaning in Oak Brook, IL | Local FISH Team',
    description: 'Residential and commercial window cleaning in Oak Brook, Illinois from the local FISH Window Cleaning team.',
    heroHeadline: 'Clearer glass for Oak Brook homes and businesses.',
    heroCopy: 'Professional window cleaning, recurring commercial routes, gutters, and approved exterior services from the local franchise.',
    details: [
      { title: 'Large homes need a clear scope.', copy: 'Tall glass, multi-story access, sunrooms, skylights, and interior protection are reviewed before the work is scheduled.' },
      { title: 'Business glass runs on a schedule.', copy: 'Offices, showrooms, restaurants, and customer-facing entries can be estimated for one-time or recurring service.' },
    ],
    noteHeadline: 'The property is polished. The glass should be too.',
    noteCopy: 'One local team for residential visits and recurring business routes.',
    faqs: [
      { question: 'Do you clean large residential properties?', answer: 'Yes. The estimate confirms the glass, access, interior scope, and time required.' },
      { question: 'Is recurring commercial service available?', answer: 'Yes, where the property and requested cadence fit the local route.' },
      { question: 'Can I request windows and gutters together?', answer: 'Yes. Include both in the estimate request.' },
      { question: 'Does this team serve nearby towns?', answer: 'Yes. The same franchise serves Hinsdale, Burr Ridge, La Grange, Downers Grove, and other western and southern suburbs.' },
    ],
  },
  {
    slug: 'burr-ridge-il', name: 'Burr Ridge', title: 'Window Cleaning in Burr Ridge, IL | Local FISH Team',
    description: 'Residential and commercial window cleaning in Burr Ridge, Illinois from the local FISH Window Cleaning team.',
    heroHeadline: 'Window cleaning built around the Burr Ridge property.',
    heroCopy: 'Interior and exterior glass, gutters, fixtures, and approved exterior services with the scope confirmed on site.',
    details: [
      { title: 'More glass changes the job.', copy: 'Tall entries, broad window walls, specialty panes, and landscaped access all belong in the estimate.' },
      { title: 'Care inside and out.', copy: 'The local crew uses uniforms, protective practices, and a written scope for work around the home.' },
    ],
    noteHeadline: 'Big view. Clear view.',
    noteCopy: 'Let the local team handle the glass and the ladder work.',
    faqs: [
      { question: 'Can you clean tall or difficult windows?', answer: 'The team reviews access and the appropriate method during the estimate.' },
      { question: 'Do you offer interior and exterior cleaning?', answer: 'Yes. Request either exterior-only or a complete interior-and-exterior scope.' },
      { question: 'Can gutters be added?', answer: 'Yes, subject to property access and the confirmed estimate.' },
      { question: 'Do I need to prepare the home?', answer: 'The local team will explain access and preparation once the scope is confirmed.' },
    ],
  },
  {
    slug: 'la-grange-il', name: 'La Grange', title: 'Window Cleaning in La Grange, IL | Local FISH Team',
    description: 'Residential and commercial window cleaning in La Grange, Illinois from the local FISH Window Cleaning team.',
    heroHeadline: 'Local window cleaning for La Grange.',
    heroCopy: 'Professional care for neighborhood homes, downtown storefronts, gutters, and approved exterior surfaces.',
    details: [
      { title: 'Established homes, individual details.', copy: 'Older windows, divided panes, porches, mature trees, and close landscaping affect access and scope.' },
      { title: 'Storefronts live at sidewalk level.', copy: 'Doors and street-facing glass can be placed on a recurring route around customer hours.' },
    ],
    noteHeadline: 'From the front windows to the downtown glass.',
    noteCopy: 'One local operation for home visits and business routes.',
    faqs: [
      { question: 'Can you clean older or divided-light windows?', answer: 'Yes. Show the team the window type during the estimate so the correct scope can be prepared.' },
      { question: 'Do you serve La Grange storefronts?', answer: 'Yes. Recurring commercial service is available where the property and schedule fit the route.' },
      { question: 'Can I combine seasonal services?', answer: 'Yes. Ask about windows, gutters, fixtures, and approved exterior work in one request.' },
      { question: 'Is the estimate free?', answer: 'Yes. The local franchise provides free on-site estimates.' },
    ],
  },
];

export type LocalServicePage = {
  areaSlug: string;
  serviceSlug: string;
  title: string;
  description: string;
  headline: string;
  copy: string;
  image: string;
  imageAlt: string;
  reasons: ContentBlock[];
  faqs: FAQ[];
  closeHeading: string;
};

export const localServices: LocalServicePage[] = [
  {
    areaSlug: 'hinsdale-il', serviceSlug: 'gutter-cleaning',
    title: 'Gutter Cleaning in Hinsdale, IL | Local FISH Team',
    description: 'Seasonal gutter cleaning in Hinsdale, Illinois from the local FISH Window Cleaning crew.',
    headline: 'Hinsdale gutter cleaning before leaves become ice.',
    copy: 'Mature trees make the neighborhood. They also make fall timing matter. The local team confirms roofline, access, and included gutter runs before scheduling.',
    image: '/images/jobs/4504.jpg', imageAlt: 'Local FISH technician clearing gutters on a suburban home',
    reasons: [
      { title: 'Plan around leaf drop', copy: 'Book after the heavy fall drop and before freezing weather closes the window.' },
      { title: 'Confirm the roofline', copy: 'Height, access, and included runs are reviewed at the estimate.' },
      { title: 'Pair the exterior work', copy: 'Ask about windows or coach lights during the same estimate.' },
    ],
    faqs: [
      { question: 'When should Hinsdale gutters be cleaned?', answer: 'Timing depends on the trees around the property. Late fall after major leaf drop is a common window.' },
      { question: 'Can window cleaning be added?', answer: 'Yes. Request both services so the team can review the combined scope.' },
      { question: 'Do you clean every home height?', answer: 'The team confirms safe access and scope at the estimate.' },
    ],
    closeHeading: 'Get the gutters handled before the freeze.',
  },
  {
    areaSlug: 'oak-brook-il', serviceSlug: 'residential-window-cleaning',
    title: 'Residential Window Cleaning in Oak Brook, IL | Local FISH Team',
    description: 'Interior and exterior residential window cleaning for Oak Brook homes from the local FISH Window Cleaning team.',
    headline: 'Oak Brook window cleaning for the whole view.',
    copy: 'Tall entries, broad panes, sunrooms, skylights, and interior glass deserve a scope built around the actual home.',
    image: '/images/jobs/4312.jpg', imageAlt: 'Local FISH technician cleaning upper-story windows on a brick home',
    reasons: [
      { title: 'Interior + exterior', copy: 'Choose exterior-only service or a complete clean from both sides.' },
      { title: 'Details included by choice', copy: 'Add screens, tracks, sills, skylights, or fixtures to the estimate.' },
      { title: 'Care around the home', copy: 'Uniforms, shoe covers, protective pads, and cleanup are part of the local process.' },
    ],
    faqs: [
      { question: 'Can you clean tall residential windows?', answer: 'The team reviews access and method during the on-site estimate.' },
      { question: 'Can screens and skylights be included?', answer: 'Yes. Add them to the request so they appear in the written scope.' },
      { question: 'Do you offer recurring residential visits?', answer: 'Ask the local team about timing that fits the property and season.' },
    ],
    closeHeading: 'Bring the Oak Brook view back.',
  },
];

export type CampaignPage = {
  slug: string;
  title: string;
  description: string;
  headline: string;
  copy: string;
  image: string;
  imageAlt: string;
  services: { label: string; href: string; copy: string }[];
  closeHeading: string;
};

export const campaigns: CampaignPage[] = [
  {
    slug: 'fall-exterior-cleaning',
    title: 'Fall Exterior Cleaning | Chicago Western & Southern Suburbs',
    description: 'Fall window, gutter, and exterior cleaning from the local FISH team serving Chicago’s western and southern suburbs.',
    headline: 'The Chicago fall exterior checklist—handled.',
    copy: 'Clear the glass, move the leaves out of the gutters, and finish the exterior details before freezing weather arrives.',
    image: '/images/jobs/4305.jpg',
    imageAlt: 'Local FISH vans on a tree-lined Chicago suburban street in fall',
    services: [
      { label: 'Window cleaning', href: '/services/residential-window-cleaning/', copy: 'Interior, exterior, or both before the house fills up.' },
      { label: 'Gutter cleaning', href: '/services/gutter-cleaning/', copy: 'Clear seasonal debris before the first hard freeze.' },
      { label: 'Pressure washing', href: '/services/pressure-washing/', copy: 'Ask what exterior surfaces are a fit before winter.' },
      { label: 'Exterior fixtures', href: '/go/estimate/?source=fall-fixtures', copy: 'Coach lights and exterior details that finish the clean.' },
    ],
    closeHeading: 'Get the outside list done before kickoff.',
  },
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);
export const getArea = (slug: string) => areas.find((area) => area.slug === slug);
