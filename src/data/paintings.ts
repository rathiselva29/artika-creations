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

export interface Painting {
  id: number;
  title: string;
  description: string;
  originalPrice: number;
  discountPrice: number;
  image: string;
}

export const paintings: Painting[] = [
  { id: 1, title: "Golden Sunset Waves", description: "Soft sunset colors blending emotion and imagination.", originalPrice: 499, discountPrice: 199, image: p1 },
  { id: 2, title: "Pink Peony Dreams", description: "Delicate petals captured in gentle brush strokes.", originalPrice: 449, discountPrice: 179, image: p2 },
  { id: 3, title: "Misty Mountain Lake", description: "Serene waters reflecting nature's quiet beauty.", originalPrice: 479, discountPrice: 189, image: p3 },
  { id: 4, title: "Colorful Soul Portrait", description: "Bold colors revealing the depth of human expression.", originalPrice: 529, discountPrice: 219, image: p4 },
  { id: 5, title: "Royal Peacock", description: "Majestic beauty painted with intricate detail.", originalPrice: 459, discountPrice: 199, image: p5 },
  { id: 6, title: "Coastal Breakers", description: "The raw power of ocean meets golden light.", originalPrice: 489, discountPrice: 209, image: p6 },
  { id: 7, title: "Aurora Night Forest", description: "A magical sky dancing above silent forests.", originalPrice: 469, discountPrice: 189, image: p7 },
  { id: 8, title: "Crimson Horizon", description: "Warm hues spreading across a peaceful horizon.", originalPrice: 439, discountPrice: 179, image: p8 },
  { id: 9, title: "Whisper of Roses", description: "Romantic florals whispering stories of love.", originalPrice: 419, discountPrice: 169, image: p9 },
  { id: 10, title: "Emerald Valley", description: "Lush green valleys painted with soothing tones.", originalPrice: 459, discountPrice: 189, image: p10 },
  { id: 11, title: "Mountain Mirror Lake", description: "Majestic peaks reflecting in calm blue waters under a dreamy sky.", originalPrice: 549, discountPrice: 229, image: p11 },
  { id: 12, title: "Autumn Walk", description: "A solitary figure strolling through a vibrant autumn forest path.", originalPrice: 499, discountPrice: 209, image: p12 },
  { id: 13, title: "Sunset by the Sea", description: "A peaceful moment watching the golden sun dip below the ocean.", originalPrice: 519, discountPrice: 219, image: p13 },
  { id: 14, title: "I Love You Dad", description: "A heartfelt tribute to fatherhood under a grand old tree.", originalPrice: 459, discountPrice: 189, image: p14 },
  { id: 15, title: "Together at Dusk", description: "Two souls sharing a beautiful sunset by the riverside.", originalPrice: 489, discountPrice: 199, image: p15 },
  { id: 16, title: "Day and Night Tree", description: "A striking contrast of warm sunset and cool twilight in one frame.", originalPrice: 559, discountPrice: 239, image: p16 },
  { id: 17, title: "Purple Waterfall Paradise", description: "A dreamy purple landscape with cascading waterfalls and lush flora.", originalPrice: 579, discountPrice: 249, image: p17 },
  { id: 18, title: "Divine Shiva", description: "A powerful portrayal of Lord Shiva in deep meditation.", originalPrice: 599, discountPrice: 259, image: p18 },
  { id: 19, title: "Countryside Bliss", description: "A charming countryside scene with a red barn, flowers, and waterfall.", originalPrice: 529, discountPrice: 219, image: p19 },
  { id: 20, title: "Cherry Blossom Falls", description: "Pink cherry blossoms framing a majestic waterfall in spring.", originalPrice: 539, discountPrice: 229, image: p20 },
];
