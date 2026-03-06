import p1 from '@/assets/paintings/painting-1.jpg';
import p2 from '@/assets/paintings/painting-2.jpg';
import p3 from '@/assets/paintings/painting-3.jpg';
import p4 from '@/assets/paintings/painting-4.jpg';
import p5 from '@/assets/paintings/painting-5.jpg';
import p6 from '@/assets/paintings/painting-6.jpg';
import p7 from '@/assets/paintings/painting-7.jpg';

const images = [p1, p2, p3, p4, p5, p6, p7];

export interface Painting {
  id: number;
  title: string;
  description: string;
  originalPrice: number;
  discountPrice: number;
  image: string;
}

const titles = [
  "Golden Sunset Waves", "Pink Peony Dreams", "Misty Mountain Lake",
  "Colorful Soul Portrait", "Royal Peacock", "Coastal Breakers", "Aurora Night Forest",
  "Crimson Horizon", "Whisper of Roses", "Emerald Valley",
  "Splash of Emotions", "Twilight Feathers", "Ocean's Melody", "Starlit Pines",
  "Amber Glow", "Lavender Fields", "Mountain Mist",
  "Abstract Harmony", "Nature's Crown", "Sapphire Tides", "Midnight Bloom",
  "Fire & Water", "Blossom Rain", "Silent Lake",
  "Portrait in Colors", "Jade Forest", "Sunset Cliffs", "Dancing Lights"
];

const descriptions = [
  "Soft sunset colors blending emotion and imagination.",
  "Delicate petals captured in gentle brush strokes.",
  "Serene waters reflecting nature's quiet beauty.",
  "Bold colors revealing the depth of human expression.",
  "Majestic beauty painted with intricate detail.",
  "The raw power of ocean meets golden light.",
  "A magical sky dancing above silent forests.",
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
  "A face painted with the palette of life.",
  "Ancient trees in a mystical green forest.",
  "Dramatic cliffs bathed in sunset's final glow.",
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
