import type { Painting } from './paintings';

export interface ServiceOption {
  icon: string;
  title: string;
  price: string;
  note: string;
}

const base = (p: Painting) => Math.max(99, p.discountPrice);

// Core options every artwork can be ordered as
const coreOptions = (p: Painting): ServiceOption[] => {
  const b = base(p);
  return [
    { icon: 'fa-file', title: 'A5 Hand-Painted (148 × 210 mm)', price: `₹${b}`, note: 'Small desk or shelf piece.' },
    { icon: 'fa-palette', title: 'A4 Hand-Painted (210 × 297 mm)', price: `₹${b + 150}`, note: 'Most popular everyday size.' },
    { icon: 'fa-border-all', title: 'A4 with Frame', price: `₹${b + 350}`, note: 'Black, white, wooden or premium frame.' },
    { icon: 'fa-expand', title: 'A3 Hand-Painted (297 × 420 mm)', price: `₹${b + 400}`, note: 'Statement wall artwork.' },
  ];
};

// Category-specific services chosen to suit what the artwork actually is
const categoryOptions = (p: Painting): ServiceOption[] => {
  const b = base(p);
  switch (p.category) {
    case 'Nature':
      return [
        { icon: 'fa-image', title: 'Canvas Painting', price: `₹${b + 500}`, note: 'Gallery-style canvas for living rooms.' },
        { icon: 'fa-brush', title: 'Wall Mural of this scene', price: 'On quotation', note: 'Painted directly on your wall, any size.' },
        { icon: 'fa-bookmark', title: 'Bookmark Set (Pack of 5)', price: '₹50', note: 'Mini painted versions of this artwork.' },
      ];
    case 'Comic':
      return [
        { icon: 'fa-shapes', title: 'Wall Sticker / Decal', price: `₹${b + 100}`, note: 'Peel-and-stick cartoon panel for kids rooms.' },
        { icon: 'fa-bookmark', title: 'Bookmark Set (Pack of 5)', price: '₹50', note: 'Cute painted bookmarks of this character.' },
        { icon: 'fa-envelope-open-text', title: 'Greeting Card with this art', price: '₹99', note: 'Personalised handmade card.' },
        { icon: 'fa-gift', title: 'Gift Set (art + card + bookmark)', price: `₹${b + 250}`, note: 'Ready-to-gift bundle.' },
      ];
    case 'Portrait':
      return [
        { icon: 'fa-user', title: 'Custom Portrait from your photo', price: `₹${Math.max(499, b + 400)}`, note: 'Same style, painted from your picture.' },
        { icon: 'fa-image', title: 'Canvas Painting', price: `₹${b + 500}`, note: 'Framed-ready canvas finish.' },
        { icon: 'fa-tv', title: 'Digital Frame Design', price: '₹199', note: 'High-resolution digital file for screens.' },
      ];
    case 'Poster':
      return [
        { icon: 'fa-rectangle-ad', title: 'Poster Print (A3 / custom)', price: `₹${b + 150}`, note: 'Event, decor or fandom poster.' },
        { icon: 'fa-tv', title: 'Digital Poster File', price: '₹199', note: 'Print-ready high-resolution download.' },
        { icon: 'fa-share-nodes', title: 'Social Media Post Version', price: '₹149', note: 'Resized for feed and story.' },
      ];
    case 'Unique':
      return [
        { icon: 'fa-image', title: 'Canvas Painting', price: `₹${b + 500}`, note: 'Bold statement piece on canvas.' },
        { icon: 'fa-brush', title: 'Wall Painting', price: 'On quotation', note: 'Hand-painted on your wall, any size.' },
        { icon: 'fa-shapes', title: 'Wall Sticker / Decal', price: `₹${b + 100}`, note: 'Easy-to-apply decor version.' },
        { icon: 'fa-gift', title: 'Gift Set (art + card)', price: `₹${b + 200}`, note: 'Packed and ready to gift.' },
      ];
    default:
      return [];
  }
};

// Artwork-specific extras where the piece clearly suits a particular service
const specialOptions = (p: Painting): ServiceOption[] => {
  // Kolam / wall art pieces are made for walls and entrances
  if (p.id === 56 || p.id === 57) {
    return [
      { icon: 'fa-brush', title: 'Kolam Wall Painting at your home', price: 'On quotation', note: 'Painted on site, entrance or corner wall.' },
      { icon: 'fa-ring', title: 'Festival / Wedding Wall Decor', price: 'On quotation', note: 'Traditional kolam for functions.' },
    ];
  }
  // Devotional pieces suit invitation and card work
  if ([8, 18, 37, 47].includes(p.id)) {
    return [
      { icon: 'fa-ring', title: 'Wedding Invitation Design', price: '₹199', note: 'This artwork styled into your invite.' },
    ];
  }
  // Love / couple pieces suit cards and invitations
  if ([15, 23, 41, 43, 60, 36].includes(p.id)) {
    return [
      { icon: 'fa-envelope-open-text', title: 'Greeting Card Design', price: '₹99', note: 'Anniversary or love-note card.' },
      { icon: 'fa-ring', title: 'Wedding Invitation Design', price: '₹199', note: 'Romantic invite using this art.' },
    ];
  }
  // Birthday-friendly cheerful pieces
  if ([1, 14, 27, 38, 40, 42].includes(p.id)) {
    return [
      { icon: 'fa-cake-candles', title: 'Birthday Invitation Design', price: '₹149', note: 'Fun invite featuring this artwork.' },
    ];
  }
  // Brand / bold graphic pieces suit logo & business work
  if ([50, 53, 55, 44].includes(p.id)) {
    return [
      { icon: 'fa-pen-nib', title: 'Logo Design in this style', price: '₹499', note: 'Custom hand-crafted brand mark.' },
      { icon: 'fa-id-card', title: 'Business Card Design', price: '₹199', note: 'Matching card design.' },
    ];
  }
  return [];
};

export const serviceOptionsFor = (p: Painting): ServiceOption[] => [
  ...coreOptions(p),
  ...categoryOptions(p),
  ...specialOptions(p),
];
