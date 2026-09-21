export type CustomerLogo = {
  name: string;
  logo: string;
  width: number;
  height: number;
  className?: string;
};

// Verified against Dave's "Customer Spreadsheet" email from December 31, 2025.
// Keep this list to businesses shown as active without a "Not Active" note.
export const customerLogos: CustomerLogo[] = [
  {
    name: 'Amy Rooney Interiors',
    logo: '/images/customer-logos/amy-rooney-interiors.png',
    width: 887,
    height: 285,
  },
  {
    name: 'Burt & Will Plastic Surgery and Dermatology',
    logo: '/images/customer-logos/burt-and-will.png',
    width: 232,
    height: 95,
    className: 'customer-logo--burt-will',
  },
  {
    name: 'Complete Vision Care',
    logo: '/images/customer-logos/complete-vision-care.png',
    width: 856,
    height: 352,
  },
  {
    name: 'Athletico Physical Therapy',
    logo: '/images/customer-logos/athletico.svg',
    width: 193,
    height: 77,
  },
  {
    name: 'Color Me Mine',
    logo: '/images/customer-logos/color-me-mine.png',
    width: 600,
    height: 200,
  },
];
