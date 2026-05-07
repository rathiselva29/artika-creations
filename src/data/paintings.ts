import p1 from '@/assets/paintings/painting-1.jpg';
import p2 from '@/assets/paintings/painting-2.jpg';
import p3 from '@/assets/paintings/painting-3.jpg';
import p4 from '@/assets/paintings/painting-4.jpg';
import p5 from '@/assets/paintings/painting-5.jpg';
import p6 from '@/assets/paintings/painting-6.jpg';
import p7 from '@/assets/paintings/painting-7.jpg';
import p8 from '@/assets/paintings/painting-8.jpg';
import p9 from '@/assets/paintings/painting-9.jpg';
import p10 from '@/assets/paintings/painting-10.jpg';
import p11 from '@/assets/paintings/painting-11.jpg';
import p12 from '@/assets/paintings/painting-12.jpg';
import p13 from '@/assets/paintings/painting-13.jpg';
import p14 from '@/assets/paintings/painting-14.jpg';
import p15 from '@/assets/paintings/painting-15.jpg';
import p16 from '@/assets/paintings/painting-16.jpg';
import p17 from '@/assets/paintings/painting-17.jpg';
import p18 from '@/assets/paintings/painting-18.jpg';
import p19 from '@/assets/paintings/painting-19.jpg';
import p20 from '@/assets/paintings/painting-20.jpg';
import p21 from '@/assets/paintings/painting-21.jpg';
import p22 from '@/assets/paintings/painting-22.jpg';
import p23 from '@/assets/paintings/painting-23.jpg';
import p24 from '@/assets/paintings/painting-24.jpg';
import p25 from '@/assets/paintings/painting-25.jpg';
import p26 from '@/assets/paintings/painting-26.jpg';
import p27 from '@/assets/paintings/painting-27.jpg';
import p28 from '@/assets/paintings/painting-28.jpg';
import p29 from '@/assets/paintings/painting-29.jpg';
import p30 from '@/assets/paintings/painting-30.jpg';
import p31 from '@/assets/paintings/painting-31.jpg';
import p32 from '@/assets/paintings/painting-32.jpg';
import p33 from '@/assets/paintings/painting-33.jpg';
import p34 from '@/assets/paintings/painting-34.jpg';
import p35 from '@/assets/paintings/painting-35.jpg';
import p36 from '@/assets/paintings/painting-36.jpg';
import p37 from '@/assets/paintings/painting-37.jpg';
import p38 from '@/assets/paintings/painting-38.jpg';
import p39 from '@/assets/paintings/painting-39.jpg';
import p40 from '@/assets/paintings/painting-40.jpg';
import p41 from '@/assets/paintings/painting-41.jpg';
import p42 from '@/assets/paintings/painting-42.jpg';
import p43 from '@/assets/paintings/painting-43.jpg';
import p44 from '@/assets/paintings/painting-44.jpg';

export type Category = 'Nature' | 'Comic' | 'Portrait' | 'Poster' | 'Unique';

export const categories: Category[] = ['Nature', 'Comic', 'Portrait', 'Poster', 'Unique'];

export interface Painting {
  id: number;
  title: string;
  description: string;
  originalPrice: number;
  discountPrice: number;
  image: string;
  category: Category;
}

// Keyword-based auto-tagging. Order matters: first match wins.
const CATEGORY_KEYWORDS: { category: Category; keywords: string[] }[] = [
  {
    category: 'Comic',
    keywords: [
      'cartoon', 'comic', 'anime', 'spiderman', 'spider-man', 'superhero',
      'dragon', 'fury', 'toothless', 'hiccup', 'zootopia', 'judy', 'nick',
      'koi', 'fish', 'pixar', 'disney', 'mickey',
    ],
  },
  {
    category: 'Portrait',
    keywords: [
      'shiva', 'krishna', 'radha', 'ganesh', 'buddha', 'devotional', 'divine',
      'lord', 'goddess', 'deity', 'meditation', 'spiritual',
      'man', 'woman', 'face', 'portrait', 'self', 'people', 'human',
    ],
  },
  {
    category: 'Nature',
    keywords: [
      'mountain', 'river', 'lake', 'sea', 'ocean', 'wave', 'waterfall',
      'forest', 'tree', 'valley', 'sunset', 'sunrise', 'horizon', 'sky',
      'cloud', 'flower', 'rose', 'peony', 'bloom', 'blossom', 'lily',
      'peacock', 'bird', 'aurora', 'coast', 'countryside', 'pond', 'garden',
      'nature', 'landscape', 'green',
    ],
  },
  {
    category: 'Unique',
    keywords: [
      'galaxy', 'cosmic', 'cosmos', 'planet', 'universe', 'space', 'star',
      'surreal', 'abstract', 'mind', 'dream', 'mystic', 'mystical',
      'book', 'heart', 'bokeh', 'cat', 'voyage', 'twilight divide',
      'day and night', 'aerial',
    ],
  },
  {
    category: 'Poster',
    keywords: [
      'love', 'dad', 'mom', 'family', 'together', 'couple', 'romance',
      'romantic', 'paris', 'eiffel', 'walk', 'fireside', 'swing',
      'motivation', 'motivational', 'quote', 'inspiration',
    ],
  },
];

export const autoCategory = (title: string, description: string, fallback: Category): Category => {
  const text = `${title} ${description}`.toLowerCase();
  for (const { category, keywords } of CATEGORY_KEYWORDS) {
    if (keywords.some(k => text.includes(k))) return category;
  }
  return fallback;
};


const rawPaintings: (Omit<Painting, 'category'> & { category: Category })[] = [
  { id: 1, title: "Sunset Over Golden Waves", description: "Warm golden light melts into rolling waves, capturing a calm, dreamy seaside evening.", originalPrice: 499, discountPrice: 199, image: p1, category: 'Nature' },
  { id: 2, title: "Blushing Peony Bloom", description: "Soft pink peony petals unfold gently, a delicate celebration of springtime romance.", originalPrice: 449, discountPrice: 179, image: p2, category: 'Nature' },
  { id: 3, title: "Misty Mountain Reflections", description: "Snow-capped mountains mirrored on a glassy alpine lake under a quiet morning haze.", originalPrice: 479, discountPrice: 189, image: p3, category: 'Nature' },
  { id: 4, title: "Spectrum of the Soul", description: "An expressive burst of colors capturing the many shades of human emotion.", originalPrice: 529, discountPrice: 219, image: p4, category: 'Unique' },
  { id: 5, title: "Royal Peacock in Bloom", description: "A regal peacock spreading its iridescent feathers in a vibrant garden of colors.", originalPrice: 459, discountPrice: 199, image: p5, category: 'Nature' },
  { id: 6, title: "Roar of the Coastal Tide", description: "Powerful ocean waves crash against the shore as golden sunlight breaks through.", originalPrice: 489, discountPrice: 209, image: p6, category: 'Nature' },
  { id: 7, title: "Aurora Above the Pines", description: "Northern lights dance gracefully across the sky over a silent evergreen forest.", originalPrice: 469, discountPrice: 189, image: p7, category: 'Nature' },
  { id: 8, title: "Crimson Horizon Glow", description: "Fiery red and orange skies stretch endlessly across a serene twilight horizon.", originalPrice: 439, discountPrice: 179, image: p8, category: 'Nature' },
  { id: 9, title: "Whispers of Red Roses", description: "Lush red roses bloom with passion, telling timeless tales of love and longing.", originalPrice: 419, discountPrice: 169, image: p9, category: 'Nature' },
  { id: 10, title: "Emerald Valley Calm", description: "Rolling green valleys stretch into the distance under a soft, peaceful sky.", originalPrice: 459, discountPrice: 189, image: p10, category: 'Nature' },
  { id: 11, title: "Crystal Mountain Lake", description: "Towering peaks reflect perfectly on still blue waters in this dreamy mountain scene.", originalPrice: 549, discountPrice: 229, image: p11, category: 'Nature' },
  { id: 12, title: "Lonely Walk in Autumn", description: "A solitary figure wanders down a glowing path of red and orange autumn leaves.", originalPrice: 499, discountPrice: 209, image: p12, category: 'Poster' },
  { id: 13, title: "Golden Sunset by the Sea", description: "A peaceful coastal moment where the sun melts into a calm, glowing ocean.", originalPrice: 519, discountPrice: 219, image: p13, category: 'Nature' },
  { id: 14, title: "Forever Father — I Love You Dad", description: "A heartfelt tribute to a father's love, framed beneath a strong, sheltering tree.", originalPrice: 459, discountPrice: 189, image: p14, category: 'Poster' },
  { id: 15, title: "Two Hearts at Dusk", description: "A loving couple watching the sun set together by a calm riverside.", originalPrice: 489, discountPrice: 199, image: p15, category: 'Poster' },
  { id: 16, title: "Tree of Day and Night", description: "One tree, two worlds — a glowing sunrise on one side and a starry night on the other.", originalPrice: 559, discountPrice: 239, image: p16, category: 'Unique' },
  { id: 17, title: "Purple Paradise Falls", description: "A magical purple landscape with cascading waterfalls and glowing exotic flora.", originalPrice: 579, discountPrice: 249, image: p17, category: 'Nature' },
  { id: 18, title: "Lord Shiva — The Eternal", description: "A divine portrayal of Lord Shiva in deep meditation, radiating peace and power.", originalPrice: 599, discountPrice: 259, image: p18, category: 'Portrait' },
  { id: 19, title: "Countryside Cottage Charm", description: "A picture-perfect countryside scene with a red barn, blooming flowers and a quiet stream.", originalPrice: 529, discountPrice: 219, image: p19, category: 'Unique' },
  { id: 20, title: "Cherry Blossom Waterfall", description: "Soft pink cherry blossoms frame a graceful waterfall in this dreamy spring view.", originalPrice: 539, discountPrice: 229, image: p20, category: 'Nature' },
  { id: 21, title: "Voyage Through Emerald Seas", description: "A lonely ship glides through mystical green waters under the glow of a silver moon.", originalPrice: 469, discountPrice: 199, image: p21, category: 'Unique' },
  { id: 22, title: "Quiet Night by the Fireplace", description: "A cozy winter evening glowing with the warmth of a softly crackling fire.", originalPrice: 509, discountPrice: 219, image: p22, category: 'Poster' },
  { id: 23, title: "Lovers Beneath the Moon", description: "Two souls embrace under a glowing moon, surrounded by a shower of soft petals.", originalPrice: 549, discountPrice: 239, image: p23, category: 'Poster' },
  { id: 24, title: "Peacocks of Cherry Spring", description: "A graceful pair of peacocks resting on a cherry blossom branch in golden sunset light.", originalPrice: 589, discountPrice: 249, image: p24, category: 'Nature' },
  { id: 25, title: "Lady on the Scarlet Swing", description: "A woman in a flowing red gown swings between ancient trees in an enchanted forest.", originalPrice: 569, discountPrice: 239, image: p25, category: 'Poster' },
  { id: 26, title: "Paris in Cherry Bloom", description: "The Eiffel Tower stands tall, framed by soft pink cherry blossoms at golden hour.", originalPrice: 579, discountPrice: 249, image: p26, category: 'Poster' },
  { id: 27, title: "Family Beneath the Rainbow", description: "A loving family silhouette glows against a vibrant rainbow waterfall of colors.", originalPrice: 559, discountPrice: 229, image: p27, category: 'Poster' },
  { id: 28, title: "Sunset Meets Starlight", description: "A breathtaking split between a fiery sunset and a deep, starlit night sky.", originalPrice: 539, discountPrice: 229, image: p28, category: 'Unique' },
  { id: 29, title: "Galaxy of Wonders", description: "Bright, colorful planets float gently in a deep purple cosmic sky filled with stars.", originalPrice: 599, discountPrice: 259, image: p29, category: 'Unique' },
  { id: 30, title: "Stairway Within the Mind", description: "A surreal climb through the human mind, symbolizing dreams, growth and ambition.", originalPrice: 619, discountPrice: 269, image: p30, category: 'Unique' },
  { id: 31, title: "Koi Garden Waterfall", description: "Golden koi swim peacefully through a tranquil waterfall surrounded by lush greenery.", originalPrice: 549, discountPrice: 229, image: p31, category: 'Nature' },
  { id: 32, title: "Aerial Dance in Purple", description: "Two graceful silhouettes perform a mesmerizing aerial dance against a bold purple sky.", originalPrice: 399, discountPrice: 169, image: p32, category: 'Unique' },
  { id: 33, title: "Glowing Lily Pads at Midnight", description: "Luminous green lily pads float quietly on dark, mirror-like midnight waters.", originalPrice: 459, discountPrice: 189, image: p33, category: 'Nature' },
  { id: 34, title: "The Star Gaze Portrait", description: "A vivid watercolor portrait that captures quiet confidence, charm and inner light.", originalPrice: 699, discountPrice: 299, image: p34, category: 'Portrait' },
  { id: 35, title: "Dancing Koi Twins", description: "Two vibrant koi fish glide playfully through clear blue waters in a graceful dance.", originalPrice: 419, discountPrice: 179, image: p35, category: 'Comic' },
  { id: 36, title: "Heart of a Thousand Pages", description: "A glowing heart formed from open book pages, set against a soft bokeh-lit dream.", originalPrice: 439, discountPrice: 189, image: p36, category: 'Unique' },
  { id: 37, title: "Radha Krishna — Divine Love", description: "A radiant depiction of Radha and Krishna adorned with peacock feathers and blossoms.", originalPrice: 649, discountPrice: 279, image: p37, category: 'Portrait' },
  { id: 38, title: "Baby Light Fury", description: "An adorable little white dragon hatchling with sparkling blue eyes and floating hearts.", originalPrice: 449, discountPrice: 189, image: p38, category: 'Comic' },
  { id: 39, title: "Hiccup & Toothless — Best Friends", description: "A heartfelt golden-hour moment between Hiccup and Toothless, glowing with friendship.", originalPrice: 599, discountPrice: 249, image: p39, category: 'Comic' },
  { id: 40, title: "Curious Little Toothless", description: "A playful baby Toothless peeks out with bright green eyes and a tiny floating heart.", originalPrice: 469, discountPrice: 199, image: p40, category: 'Comic' },
  { id: 41, title: "Blushing Sweethearts", description: "A charming couple portrait full of warmth, soft blushes and tender first-love magic.", originalPrice: 519, discountPrice: 219, image: p41, category: 'Portrait' },
  { id: 42, title: "Judy & Nick — Zootopia Duo", description: "The iconic Zootopia partners painted with bold colors and lively, playful expressions.", originalPrice: 559, discountPrice: 229, image: p42, category: 'Comic' },
  { id: 43, title: "Forever Yours — Romantic Duo", description: "An elegant tuxedo and red-dress couple captured in a timeless, cinematic romance.", originalPrice: 579, discountPrice: 239, image: p43, category: 'Portrait' },
  { id: 44, title: "Galaxy Cat — Cosmic Dreamer", description: "A mystical black cat soars through a starry galaxy — a signed Artika original.", originalPrice: 629, discountPrice: 269, image: p44, category: 'Unique' },
];

// Auto-tag every painting using keyword detection; manual category serves as fallback.
export const paintings: Painting[] = rawPaintings.map(p => ({
  ...p,
  category: autoCategory(p.title, p.description, p.category),
}));
