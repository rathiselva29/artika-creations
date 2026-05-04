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

export type Category = 'Nature' | 'Portrait' | 'Comic' | 'Poster' | 'Unique' | 'Divine';

export const categories: Category[] = ['Nature', 'Portrait', 'Comic', 'Poster', 'Unique', 'Divine'];

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
  { id: 1, title: "Golden Sunset Waves", description: "Soft sunset colors blending emotion and imagination.", originalPrice: 499, discountPrice: 199, image: p1, category: 'Nature' },
  { id: 2, title: "Pink Peony Dreams", description: "Delicate petals captured in gentle brush strokes.", originalPrice: 449, discountPrice: 179, image: p2, category: 'Nature' },
  { id: 3, title: "Misty Mountain Lake", description: "Serene waters reflecting nature's quiet beauty.", originalPrice: 479, discountPrice: 189, image: p3, category: 'Nature' },
  { id: 4, title: "Colorful Soul Portrait", description: "Bold colors revealing the depth of human expression.", originalPrice: 529, discountPrice: 219, image: p4, category: 'Portrait' },
  { id: 5, title: "Royal Peacock", description: "Majestic beauty painted with intricate detail.", originalPrice: 459, discountPrice: 199, image: p5, category: 'Nature' },
  { id: 6, title: "Coastal Breakers", description: "The raw power of ocean meets golden light.", originalPrice: 489, discountPrice: 209, image: p6, category: 'Nature' },
  { id: 7, title: "Aurora Night Forest", description: "A magical sky dancing above silent forests.", originalPrice: 469, discountPrice: 189, image: p7, category: 'Nature' },
  { id: 8, title: "Crimson Horizon", description: "Warm hues spreading across a peaceful horizon.", originalPrice: 439, discountPrice: 179, image: p8, category: 'Nature' },
  { id: 9, title: "Whisper of Roses", description: "Romantic florals whispering stories of love.", originalPrice: 419, discountPrice: 169, image: p9, category: 'Nature' },
  { id: 10, title: "Emerald Valley", description: "Lush green valleys painted with soothing tones.", originalPrice: 459, discountPrice: 189, image: p10, category: 'Nature' },
  { id: 11, title: "Mountain Mirror Lake", description: "Majestic peaks reflecting in calm blue waters under a dreamy sky.", originalPrice: 549, discountPrice: 229, image: p11, category: 'Nature' },
  { id: 12, title: "Autumn Walk", description: "A solitary figure strolling through a vibrant autumn forest path.", originalPrice: 499, discountPrice: 209, image: p12, category: 'Poster' },
  { id: 13, title: "Sunset by the Sea", description: "A peaceful moment watching the golden sun dip below the ocean.", originalPrice: 519, discountPrice: 219, image: p13, category: 'Nature' },
  { id: 14, title: "I Love You Dad", description: "A heartfelt tribute to fatherhood under a grand old tree.", originalPrice: 459, discountPrice: 189, image: p14, category: 'Poster' },
  { id: 15, title: "Together at Dusk", description: "Two souls sharing a beautiful sunset by the riverside.", originalPrice: 489, discountPrice: 199, image: p15, category: 'Poster' },
  { id: 16, title: "Day and Night Tree", description: "A striking contrast of warm sunset and cool twilight in one frame.", originalPrice: 559, discountPrice: 239, image: p16, category: 'Unique' },
  { id: 17, title: "Purple Waterfall Paradise", description: "A dreamy purple landscape with cascading waterfalls and lush flora.", originalPrice: 579, discountPrice: 249, image: p17, category: 'Nature' },
  { id: 18, title: "Divine Shiva", description: "A powerful portrayal of Lord Shiva in deep meditation.", originalPrice: 599, discountPrice: 259, image: p18, category: 'Divine' },
  { id: 19, title: "Countryside Bliss", description: "A charming countryside scene with a red barn, flowers, and waterfall.", originalPrice: 529, discountPrice: 219, image: p19, category: 'Nature' },
  { id: 20, title: "Cherry Blossom Falls", description: "Pink cherry blossoms framing a majestic waterfall in spring.", originalPrice: 539, discountPrice: 229, image: p20, category: 'Nature' },
  { id: 21, title: "Emerald Voyage", description: "A lone ship sailing through mystical green waters under a glowing moon.", originalPrice: 469, discountPrice: 199, image: p21, category: 'Unique' },
  { id: 22, title: "Fireside Solitude", description: "A cozy evening by the fireplace with warm light and quiet reflection.", originalPrice: 509, discountPrice: 219, image: p22, category: 'Poster' },
  { id: 23, title: "Love in Moonlight", description: "Two lovers embraced under a radiant moon surrounded by petals.", originalPrice: 549, discountPrice: 239, image: p23, category: 'Poster' },
  { id: 24, title: "Peacock Pair in Bloom", description: "Two graceful peacocks perched on a cherry blossom branch at sunset.", originalPrice: 589, discountPrice: 249, image: p24, category: 'Nature' },
  { id: 25, title: "Scarlet Swing", description: "A woman in a flowing red gown on a swing between ancient trees.", originalPrice: 569, discountPrice: 239, image: p25, category: 'Poster' },
  { id: 26, title: "Paris in Pink", description: "The Eiffel Tower framed by blooming cherry blossoms at golden hour.", originalPrice: 579, discountPrice: 249, image: p26, category: 'Poster' },
  { id: 27, title: "Family of Colors", description: "A loving family silhouette against a vibrant rainbow waterfall.", originalPrice: 559, discountPrice: 229, image: p27, category: 'Poster' },
  { id: 28, title: "Twilight Divide", description: "A dramatic split between fiery sunset and starlit night sky.", originalPrice: 539, discountPrice: 229, image: p28, category: 'Unique' },
  { id: 29, title: "Cosmic Wonders", description: "Colorful planets floating in a deep purple galaxy of stars.", originalPrice: 599, discountPrice: 259, image: p29, category: 'Unique' },
  { id: 30, title: "Stairway of the Mind", description: "A surreal journey of ambition climbing stairs within the human mind.", originalPrice: 619, discountPrice: 269, image: p30, category: 'Unique' },
  { id: 31, title: "Waterfall Koi Pond", description: "Golden koi swimming in a cascading waterfall surrounded by lush greenery.", originalPrice: 549, discountPrice: 229, image: p31, category: 'Nature' },
  { id: 32, title: "Aerial Acrobats", description: "Two silhouette figures performing a graceful aerial dance in bold purple.", originalPrice: 399, discountPrice: 169, image: p32, category: 'Unique' },
  { id: 33, title: "Midnight Lily Pads", description: "Luminous green lily pads floating on a dark, tranquil water surface.", originalPrice: 459, discountPrice: 189, image: p33, category: 'Nature' },
  { id: 34, title: "Star Portrait", description: "A striking watercolor portrait capturing charisma and quiet confidence.", originalPrice: 699, discountPrice: 299, image: p34, category: 'Portrait' },
  { id: 35, title: "Dancing Koi Duo", description: "Two colorful koi fish gliding through vivid blue waters.", originalPrice: 419, discountPrice: 179, image: p35, category: 'Nature' },
  { id: 36, title: "Bokeh Heart Book", description: "A heart formed from book pages against a dreamy bokeh-lit background.", originalPrice: 439, discountPrice: 189, image: p36, category: 'Unique' },
  { id: 37, title: "Radha Krishna Divine", description: "A beautiful depiction of Radha and Krishna adorned with peacock feathers and flowers.", originalPrice: 649, discountPrice: 279, image: p37, category: 'Divine' },
  { id: 38, title: "Little Light Fury", description: "An adorable white dragon hatchling with sparkling blue eyes and floating hearts.", originalPrice: 449, discountPrice: 189, image: p38, category: 'Comic' },
  { id: 39, title: "Hiccup & Toothless Bond", description: "A heartfelt moment between rider and night fury glowing in golden light.", originalPrice: 599, discountPrice: 249, image: p39, category: 'Comic' },
  { id: 40, title: "Curious Night Fury", description: "A playful baby Toothless peeking out with bright green eyes and a tiny heart.", originalPrice: 469, discountPrice: 199, image: p40, category: 'Comic' },
  { id: 41, title: "Blushing Sweethearts", description: "A charming couple portrait full of warmth, soft blushes and tender love.", originalPrice: 519, discountPrice: 219, image: p41, category: 'Portrait' },
  { id: 42, title: "Judy & Nick Duo", description: "The iconic Zootopia partners painted with bold colors and lively expression.", originalPrice: 559, discountPrice: 229, image: p42, category: 'Comic' },
  { id: 43, title: "Forever Yours", description: "An elegant tuxedo and red-dress couple capturing a timeless romantic mood.", originalPrice: 579, discountPrice: 239, image: p43, category: 'Portrait' },
  { id: 44, title: "Cosmic Black Cat", description: "A mystical galaxy cat soaring through a starry night — signed Artika original.", originalPrice: 629, discountPrice: 269, image: p44, category: 'Unique' },
];
