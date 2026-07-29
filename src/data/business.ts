export const WHATSAPP_BASE = 'https://wa.me/917708704523';
export const INSTAGRAM_URL = 'https://instagram.com/rathii__selva';
export const EMAIL_URL = 'mailto:ratthikas29@gmail.com';

export const waLink = (message: string) =>
  `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;

export const services = [
  { icon: 'fa-paintbrush', title: 'Handmade Paintings', description: 'Original hand-painted artworks made with love and detail.', price: 'From ₹250' },
  { icon: 'fa-user', title: 'Custom Portrait Paintings', description: 'Portraits painted from your favourite photograph.', price: 'From ₹499' },
  { icon: 'fa-brush', title: 'Wall Paintings', description: 'Large wall murals designed for your space.', price: 'On quotation' },
  { icon: 'fa-image', title: 'Canvas Paintings', description: 'Gallery-style canvas art for home and office decor.', price: 'From ₹399' },
  { icon: 'fa-border-all', title: 'Framed Paintings', description: 'Any artwork finished with the frame style you pick.', price: 'From ₹450' },
  { icon: 'fa-envelope-open-text', title: 'Greeting Card Design', description: 'Personalised hand-made and digital greeting cards.', price: 'From ₹99' },
  { icon: 'fa-ring', title: 'Wedding Invitation Design', description: 'Elegant custom wedding invites, print or digital.', price: 'From ₹199' },
  { icon: 'fa-cake-candles', title: 'Birthday Invitation Design', description: 'Fun, colourful birthday invitations for all ages.', price: 'From ₹149' },
  { icon: 'fa-id-card', title: 'Business Card Design', description: 'Clean professional cards that represent your brand.', price: 'From ₹199' },
  { icon: 'fa-share-nodes', title: 'Social Media Post Design', description: 'Scroll-stopping posts and story creatives.', price: 'From ₹149' },
  { icon: 'fa-rectangle-ad', title: 'Poster Design', description: 'Event, promo and decor posters in any size.', price: 'From ₹199' },
  { icon: 'fa-award', title: 'Certificate Design', description: 'Formal certificates and appreciation templates.', price: 'From ₹149' },
  { icon: 'fa-pen-nib', title: 'Logo Design', description: 'Unique hand-crafted logos for your brand identity.', price: 'From ₹499' },
  { icon: 'fa-bookmark', title: 'Bookmark Design', description: 'Hand-painted and printed bookmarks, singles or packs.', price: 'From ₹12' },
  { icon: 'fa-tv', title: 'Digital Frame Design', description: 'Digital artwork framed and ready for display screens.', price: 'From ₹199' },
];

export const pricingGroups = [
  {
    icon: 'fa-palette',
    title: 'Paintings',
    items: [
      { label: 'A4 Painting', price: '₹250' },
      { label: 'A4 Painting with Frame', price: '₹450' },
    ],
  },
  {
    icon: 'fa-bookmark',
    title: 'Bookmarks',
    items: [
      { label: 'Single', price: '₹12' },
      { label: 'Pack of 5', price: '₹50' },
      { label: 'Pack of 10', price: '₹90' },
    ],
  },
  {
    icon: 'fa-envelope-open-text',
    title: 'Greeting Cards',
    items: [{ label: 'Starting from', price: '₹99' }],
  },
  {
    icon: 'fa-desktop',
    title: 'Digital Designs',
    items: [{ label: 'Starting from', price: '₹199' }],
  },
  {
    icon: 'fa-brush',
    title: 'Wall Paintings',
    items: [
      { label: 'Price depends on size', price: '—' },
      { label: 'Contact for quotation', price: '—' },
    ],
  },
];

export const frameOptions = [
  { icon: 'fa-square', title: 'Black Frame', description: 'Bold, modern edge that suits every artwork.' },
  { icon: 'fa-square-full', title: 'White Frame', description: 'Light and minimal, perfect for soft palettes.' },
  { icon: 'fa-tree', title: 'Wooden Frame', description: 'Warm natural wood with a classic finish.' },
  { icon: 'fa-gem', title: 'Premium Frame', description: 'Detailed premium moulding for a gallery look.' },
];

export const orderSteps = [
  { num: '1', icon: 'fa-image', title: 'Choose Artwork', desc: 'Pick from the collection or share your own idea.' },
  { num: '2', icon: 'fa-ruler-combined', title: 'Choose Size', desc: 'A5, A4, A3 or a fully custom size.' },
  { num: '3', icon: 'fa-border-all', title: 'Choose Frame (Optional)', desc: 'Black, white, wooden or premium frame.' },
  { num: '4', icon: 'fa-circle-check', title: 'Confirm Order', desc: 'We confirm details, timeline and final price.' },
  { num: '5', icon: 'fa-indian-rupee-sign', title: 'Payment', desc: 'Simple and secure payment to begin the work.' },
  { num: '6', icon: 'fa-paintbrush', title: 'Artwork Creation', desc: 'Your piece is hand-crafted with progress updates.' },
  { num: '7', icon: 'fa-truck', title: 'Delivery', desc: 'Safely packed and delivered to your doorstep.' },
];

export const shopCategories = [
  { icon: 'fa-palette', title: 'Paintings' },
  { icon: 'fa-border-all', title: 'Frames' },
  { icon: 'fa-bookmark', title: 'Bookmarks' },
  { icon: 'fa-envelope-open-text', title: 'Greeting Cards' },
  { icon: 'fa-gift', title: 'Gift Sets' },
  { icon: 'fa-desktop', title: 'Digital Designs' },
];

export const sizeGuide = [
  { size: 'A5', dims: '148 × 210 mm', note: 'Small desk or shelf pieces.' },
  { size: 'A4', dims: '210 × 297 mm', note: 'Most popular everyday size.' },
  { size: 'A3', dims: '297 × 420 mm', note: 'Statement wall artwork.' },
  { size: 'Custom Size', dims: 'Your dimensions', note: 'Tell us the size you need.' },
];

export const whyChooseUs = [
  { icon: 'fa-hand-holding-heart', title: '100% Handmade' },
  { icon: 'fa-star', title: 'Premium Materials' },
  { icon: 'fa-wand-magic-sparkles', title: 'Custom Designs' },
  { icon: 'fa-tags', title: 'Affordable Pricing' },
  { icon: 'fa-box-open', title: 'Secure Packaging' },
  { icon: 'fa-headset', title: 'Fast Customer Support' },
];
