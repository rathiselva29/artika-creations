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
  "Golden Sunset Waves", "Pink Peony Dreams", "Misty Mountain Lake",
  "Colorful Soul Portrait", "Royal Peacock", "Coastal Breakers",
  "Aurora Night Forest", "Crimson Horizon", "Whisper of Roses", "Emerald Valley",
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
];

export const paintings: Painting[] = images.map((img, i) => {
  const origPrice = 399 + Math.floor(Math.random() * 100);
  return {
    id: i + 1,
    title: titles[i],
    description: descriptions[i],
    originalPrice: origPrice,
    discountPrice: 150 + Math.floor(Math.random() * 100),
    image: img,
  };
});
