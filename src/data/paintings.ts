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
import p45 from '@/assets/paintings/painting-45.jpg';
import p46 from '@/assets/paintings/painting-46.jpg';
import p47 from '@/assets/paintings/painting-47.jpg';
import p48 from '@/assets/paintings/painting-48.jpg';
import p49 from '@/assets/paintings/painting-49.jpg';
import p50 from '@/assets/paintings/painting-50.jpg';
import p51 from '@/assets/paintings/painting-51.jpg';

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

export const paintings: Painting[] = [
  // ============ NATURE ============
  { id: 3, title: "Roses on the Old Blue Door", description: "Pink climbing roses cascade over a sunlit rustic wall and weathered blue door.", originalPrice: 479, discountPrice: 189, image: p3, category: 'Nature' },
  { id: 4, title: "Wild Daisy Meadow", description: "A lush patch of white daisies blooming bright against deep green grass.", originalPrice: 449, discountPrice: 179, image: p4, category: 'Nature' },
  { id: 7, title: "Twilight Lake Whisper", description: "A lone boat drifts on a glowing lake as the sun sinks behind a quiet forest.", originalPrice: 469, discountPrice: 189, image: p7, category: 'Nature' },
  { id: 10, title: "Whispering Willow Lake", description: "A wooden boat rests under cascading willow branches over a calm green pond.", originalPrice: 459, discountPrice: 189, image: p10, category: 'Nature' },
  { id: 11, title: "Moonlit Mountain Mirror", description: "A glowing full moon rises behind a rugged peak reflected on still blue water.", originalPrice: 549, discountPrice: 229, image: p11, category: 'Nature' },
  { id: 17, title: "Purple Paradise Falls", description: "A magical dreamscape of violet trees and a glowing waterfall at pink dusk.", originalPrice: 579, discountPrice: 249, image: p17, category: 'Nature' },
  { id: 19, title: "Riverside Countryside Cottage", description: "A cheerful red cottage beside a flowing river, framed by blossoms and birds.", originalPrice: 529, discountPrice: 219, image: p19, category: 'Nature' },
  { id: 20, title: "Cherry Blossom Falls", description: "Soft pink cherry blossoms lean over a graceful waterfall flowing into a quiet stream.", originalPrice: 539, discountPrice: 229, image: p20, category: 'Nature' },
  { id: 24, title: "Royal Peacocks of Spring", description: "Two majestic peacocks rest on a cherry blossom branch in glowing sunset light.", originalPrice: 589, discountPrice: 249, image: p24, category: 'Nature' },
  { id: 31, title: "Koi & Peacock Falls", description: "A serene waterfall scene with golden koi swimming and a peacock perched nearby.", originalPrice: 549, discountPrice: 229, image: p31, category: 'Nature' },
  { id: 33, title: "Midnight Lily Pads", description: "Glowing green lily pads float on dark rippling water under a quiet moonless sky.", originalPrice: 459, discountPrice: 189, image: p33, category: 'Nature' },
  { id: 46, title: "Rainy Night Garden Glow", description: "A warm glowing lantern and lit window beside red flowers in a heavy night rain.", originalPrice: 559, discountPrice: 229, image: p46, category: 'Nature' },
  { id: 51, title: "Lavender Fields at Dusk", description: "Endless rows of purple lavender stretch toward a cottage under a moonlit sky.", originalPrice: 599, discountPrice: 259, image: p51, category: 'Nature' },

  // ============ COMIC ============
  { id: 1, title: "Best Friends Forever", description: "Two cute baby monkeys hugging tight with a floating pink heart — pure friendship.", originalPrice: 419, discountPrice: 169, image: p1, category: 'Comic' },
  { id: 35, title: "Twin Koi Dance", description: "A tiny watercolor of two playful koi fish swimming gracefully in clear blue water.", originalPrice: 299, discountPrice: 129, image: p35, category: 'Comic' },
  { id: 38, title: "Baby Light Fury", description: "An adorable little white dragon hatchling with sparkling blue eyes and floating hearts.", originalPrice: 449, discountPrice: 189, image: p38, category: 'Comic' },
  { id: 39, title: "Hiccup & Toothless — Soul Bond", description: "A heartfelt moment between Hiccup and Toothless glowing in warm yellow light.", originalPrice: 599, discountPrice: 249, image: p39, category: 'Comic' },
  { id: 40, title: "Curious Little Toothless", description: "A playful baby Toothless peeks out with bright green eyes and a tiny floating heart.", originalPrice: 469, discountPrice: 199, image: p40, category: 'Comic' },
  { id: 42, title: "Judy & Nick — Zootopia Duo", description: "The iconic Zootopia partners painted with bold colors and lively, playful expressions.", originalPrice: 559, discountPrice: 229, image: p42, category: 'Comic' },

  // ============ PORTRAIT ============
  { id: 8, title: "Krishna's Soft Melody", description: "A dreamy watercolor of Lord Krishna playing the flute amid swirling pastel waves.", originalPrice: 599, discountPrice: 259, image: p8, category: 'Portrait' },
  { id: 18, title: "Lord Shiva — The Eternal", description: "A divine portrayal of Lord Shiva in deep meditation with cobra, trishul and moon.", originalPrice: 649, discountPrice: 279, image: p18, category: 'Portrait' },
  { id: 34, title: "Thalapathy — The Star Gaze", description: "A vivid watercolor portrait capturing quiet charisma, charm and inner strength.", originalPrice: 699, discountPrice: 299, image: p34, category: 'Portrait' },
  { id: 37, title: "Radha Krishna — Divine Love", description: "A radiant depiction of Radha and Krishna adorned with peacock feathers and blossoms.", originalPrice: 649, discountPrice: 279, image: p37, category: 'Portrait' },
  { id: 41, title: "Blushing Sweethearts", description: "A charming couple portrait full of warmth, soft blushes and tender first-love magic.", originalPrice: 519, discountPrice: 219, image: p41, category: 'Portrait' },
  { id: 43, title: "Prom Night Sweethearts", description: "An elegant tuxedo and red-dress couple captured in a timeless cinematic moment.", originalPrice: 579, discountPrice: 239, image: p43, category: 'Portrait' },
  { id: 47, title: "Hands of Krishna", description: "Delicate hands holding a bamboo flute crowned by a vibrant peacock feather.", originalPrice: 629, discountPrice: 269, image: p47, category: 'Portrait' },

  // ============ POSTER ============
  { id: 6, title: "Lakeside Walk in the Rain", description: "A couple walks under a red umbrella along a tree-lined lake on a soft rainy day.", originalPrice: 519, discountPrice: 219, image: p6, category: 'Poster' },
  { id: 12, title: "Girl Beneath the Maple Tunnel", description: "A small girl with a blue umbrella walking quietly through a glowing maple path.", originalPrice: 459, discountPrice: 189, image: p12, category: 'Poster' },
  { id: 13, title: "Red Umbrella by the Sea", description: "A girl rests on a driftwood branch watching the golden sun melt into the sea.", originalPrice: 489, discountPrice: 199, image: p13, category: 'Poster' },
  { id: 14, title: "I Love You Dad", description: "A heartfelt tribute to a father's love, framed beneath a strong, sheltering tree.", originalPrice: 459, discountPrice: 189, image: p14, category: 'Poster' },
  { id: 15, title: "Together at Sunset", description: "A loving couple stands hand in hand watching a soft pink sunset over the river.", originalPrice: 489, discountPrice: 199, image: p15, category: 'Poster' },
  { id: 22, title: "Quiet Night by the Fireplace", description: "A cozy winter evening glowing with the warmth of a softly crackling fire.", originalPrice: 509, discountPrice: 219, image: p22, category: 'Poster' },
  { id: 23, title: "Lovers Inside the Heart", description: "A romantic silhouette of two lovers wrapped inside a heart of white blossoms.", originalPrice: 549, discountPrice: 239, image: p23, category: 'Poster' },
  { id: 25, title: "Lady on the Scarlet Swing", description: "A woman in a flowing red gown swings between ancient trees in an enchanted forest.", originalPrice: 569, discountPrice: 239, image: p25, category: 'Poster' },
  { id: 26, title: "Paris in Cherry Bloom", description: "The Eiffel Tower stands tall, framed by soft pink cherry blossoms at golden hour.", originalPrice: 579, discountPrice: 249, image: p26, category: 'Poster' },
  { id: 27, title: "Family Beneath the Rainbow", description: "A loving family silhouette glows against a vibrant rainbow waterfall of colors.", originalPrice: 559, discountPrice: 229, image: p27, category: 'Poster' },
  { id: 50, title: "Need for Speed", description: "A bold BMW painted in moody watercolor with neon lights and a 'Need for Speed' tag.", originalPrice: 559, discountPrice: 239, image: p50, category: 'Poster' },

  // ============ UNIQUE ============
  { id: 2, title: "Crimson Tree Under the Moon", description: "A glowing red tree on a tiny island lit by a full moon and a quiet little boat.", originalPrice: 559, discountPrice: 239, image: p2, category: 'Unique' },
  { id: 5, title: "Spectrum of a Woman", description: "An expressive multicolor face celebrating the many shades and strength of women.", originalPrice: 529, discountPrice: 219, image: p5, category: 'Unique' },
  { id: 9, title: "Two Black Cats in Autumn Woods", description: "Two black cats stroll through a glowing tunnel of red and yellow autumn leaves.", originalPrice: 499, discountPrice: 209, image: p9, category: 'Unique' },
  { id: 16, title: "Tree of Day & Night", description: "One tree, two worlds — a glowing sunrise on one side and a starry night on the other.", originalPrice: 559, discountPrice: 239, image: p16, category: 'Unique' },
  { id: 21, title: "Voyage on Emerald Sea", description: "A mysterious black sailboat drifts across glowing green waters under a soft sun.", originalPrice: 469, discountPrice: 199, image: p21, category: 'Unique' },
  { id: 28, title: "Where Sunset Meets Stars", description: "A breathtaking split between a fiery orange cliff sunset and a deep starlit sky.", originalPrice: 539, discountPrice: 229, image: p28, category: 'Unique' },
  { id: 29, title: "Cosmic Wonders", description: "Bright, colorful planets float gently in a deep purple cosmic sky full of stars.", originalPrice: 599, discountPrice: 259, image: p29, category: 'Unique' },
  { id: 30, title: "Stairway Within the Mind", description: "A surreal climb through the human mind, symbolizing dreams, growth and ambition.", originalPrice: 619, discountPrice: 269, image: p30, category: 'Unique' },
  { id: 32, title: "Aerial Silk Dancer", description: "A bold ink silhouette of a graceful aerial silk dancer mid-pose, full of motion.", originalPrice: 399, discountPrice: 169, image: p32, category: 'Unique' },
  { id: 36, title: "Heart in the Open Book", description: "A glowing heart resting on the pages of an open book under magical bokeh lights.", originalPrice: 439, discountPrice: 189, image: p36, category: 'Unique' },
  { id: 44, title: "Galaxy Cat — Artika Signature", description: "A mystical black cat soars through a starry galaxy — a signed Artika original.", originalPrice: 629, discountPrice: 269, image: p44, category: 'Unique' },
  { id: 45, title: "Bloom in the Blue Whirl", description: "A white blossom and a quiet silhouette swirl together in a deep blue dreamscape.", originalPrice: 489, discountPrice: 209, image: p45, category: 'Unique' },
  { id: 48, title: "Voyage of the Pirate Ship", description: "A grand pirate ship sails through wild stormy seas under a moody dramatic sky.", originalPrice: 619, discountPrice: 269, image: p48, category: 'Unique' },
  { id: 49, title: "Cutting Chai Comfort", description: "A steaming glass of hot Indian chai painted with cozy detail on lined paper.", originalPrice: 379, discountPrice: 159, image: p49, category: 'Unique' },
];
