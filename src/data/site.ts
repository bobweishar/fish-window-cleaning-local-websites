export const site = {
  name: 'FISH Window Cleaning — Chicago Western & Southern Suburbs',
  shortName: 'FISH Window Cleaning',
  owner: 'Dave Weishar',
  phoneDisplay: '(630) 757-3474',
  phoneHref: 'tel:+16307573474',
  officialPage: 'https://www.fishwindowcleaning.com/Chicago-Western-Southern-Suburbs-3277/',
  address: {
    street: '9824 Industrial Unit B',
    city: 'Bridgeview',
    state: 'IL',
    zip: '60455',
  },
  towns: [
    'Hinsdale',
    'Oak Brook',
    'Burr Ridge',
    'Clarendon Hills',
    'Downers Grove',
    'La Grange',
    'Oak Lawn',
    'Bridgeview',
    'Hickory Hills',
    'Oak Forest',
    'Midlothian',
    'Flossmoor',
  ],
};

export const googleProfile = {
  url: 'https://share.google/lSqIoWPB0V9ENHIdp',
};

export const estimateLink = (source: string) =>
  `/go/estimate/?source=${encodeURIComponent(source)}`;

export const formRedirects = {
  estimate: {
    label: 'estimate request',
    destination: `${site.officialPage}contact/window-cleaning-estimate`,
  },
  contact: {
    label: 'contact form',
    destination: `${site.officialPage}contact`,
  },
  feedback: {
    label: 'feedback form',
    destination: `${site.officialPage}contact/feedback`,
  },
  'residential-survey': {
    label: 'residential customer survey',
    destination: `${site.officialPage}contact/residential-survey`,
  },
  'commercial-survey': {
    label: 'commercial customer survey',
    destination: `${site.officialPage}contact/commercial-survey`,
  },
} as const;
