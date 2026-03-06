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

const images = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];

export interface Painting {
  id: number;
  title: string;
  description: string;
  originalPrice: number;
  discountPrice: number;
  image: string;
}

const titles = [
  "Divine Flute Player", "Autumn Forest Path", "Serene Boat on Lake",
  "Moonlit Red Tree", "Rose Door Garden", "Daisy Meadow", "Radha Krishna Portrait",
  "Rainy Riverside Walk", "Sunset Companions", "Golden Lake Sunset",
  "Crimson Horizon", "Whisper of Roses", "Emerald Valley",
  "Splash of Emotions", "Twilight Feathers", "Ocean's Melody", "Starlit Pines",
  "Amber Glow", "Lavender Fields", "Mountain Mist",
  "Abstract Harmony", "Nature's Crown", "Sapphire Tides", "Midnight Bloom",
  "Fire & Water", "Blossom Rain", "Silent Lake", "Dancing Lights"
];

const descriptions = [
  "Watercolor Krishna playing flute amidst flowing waves.",
  "Vivid autumn foliage along a peaceful forest trail.",
  "A lone boat drifting under lush green canopy.",
  "A crimson tree glowing under a radiant full moon.",
  "Old blue door framed by cascading pink roses.",
  "Bright daisies dancing in a lush green field.",
  "Traditional Radha Krishna painted in vibrant watercolors.",
  "A couple walking by the river under gentle rain.",
  "Two friends watching a warm sunset together.",
  "Peaceful lake reflecting a breathtaking sunset sky.",
  "Warm hues spreading across a peaceful horizon.",
  "Romantic florals whispering stories of love.",
  "Lush green valleys painted with soothing tones.",
  "Vibrant splashes capturing fleeting emotions.",
  "Ethereal feathers in twilight's gentle glow.",
  "Rhythmic waves singing nature's timeless song.",
  "Stars illuminating ancient forest pathways.",
  "Golden warmth radiating through canvas textures.",
  "Purple blooms swaying in a gentle breeze.",
  "Fog embracing peaks in a mystical dance.",
  "Colors and shapes in perfect artistic balance.",
  "Nature's grandeur crowned in vivid detail.",
  "Deep blue waters shimmering with life.",
  "Dark blooms under a moonlit sky.",
  "Opposing elements merging in beautiful chaos.",
  "Petals falling like colorful raindrops.",
  "Still waters holding infinite reflections.",
  "Northern lights creating a celestial ballet."
];

export const paintings: Painting[] = Array.from({ length: 28 }, (_, i) => {
  const origPrice = 399 + Math.floor(Math.random() * 100);
  return {
    id: i + 1,
    title: titles[i],
    description: descriptions[i],
    originalPrice: origPrice,
    discountPrice: 150 + Math.floor(Math.random() * 100),
    image: images[i % images.length],
  };
});
