import p1 from "@/assets/paintings/painting-1.jpg";
import p2 from "@/assets/paintings/painting-2.jpg";
import p3 from "@/assets/paintings/painting-3.jpg";
import p4 from "@/assets/paintings/painting-4.jpg";
import p5 from "@/assets/paintings/painting-5.jpg";
import p6 from "@/assets/paintings/painting-6.jpg";
import p7 from "@/assets/paintings/painting-7.jpg";
import p8 from "@/assets/paintings/painting-8.jpg";
import p9 from "@/assets/paintings/painting-9.jpg";
import p10 from "@/assets/paintings/painting-10.jpg";

export interface Painting {
  id: number;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  medium: string;
  size: string;
}

export const paintings: Painting[] = [
  { id: 1, title: "Golden Horizon", description: "A warm golden sunset painting capturing the beauty of nature's twilight moments with rich amber and ochre tones.", price: 3500, originalPrice: 5000, image: p1, category: "Landscape", medium: "Acrylic on Canvas", size: "24 x 18 inches" },
  { id: 2, title: "Serene Blossoms", description: "Delicate floral composition with soft pastel hues, evoking a sense of calm and natural elegance.", price: 2800, originalPrice: 4000, image: p2, category: "Floral", medium: "Oil on Canvas", size: "20 x 16 inches" },
  { id: 3, title: "Mystic Waters", description: "An enchanting waterscape with deep blues and greens reflecting the mysterious beauty of still waters.", price: 4200, originalPrice: 6000, image: p3, category: "Landscape", medium: "Acrylic on Canvas", size: "30 x 24 inches" },
  { id: 4, title: "Crimson Dreams", description: "A bold abstract piece featuring vibrant reds and deep crimsons that stir passion and emotion.", price: 3000, originalPrice: 4500, image: p4, category: "Abstract", medium: "Mixed Media", size: "24 x 20 inches" },
  { id: 5, title: "Ethereal Garden", description: "A dreamy garden scene with soft light filtering through leaves, creating a magical atmosphere.", price: 3800, originalPrice: 5500, image: p5, category: "Nature", medium: "Oil on Canvas", size: "28 x 22 inches" },
  { id: 6, title: "Twilight Whispers", description: "Soft twilight colors blending together in a harmonious composition that speaks of peaceful evenings.", price: 2500, originalPrice: 3500, image: p6, category: "Abstract", medium: "Watercolor", size: "18 x 14 inches" },
  { id: 7, title: "Emerald Forest", description: "A lush forest painting with rich greens and dappled sunlight, bringing nature's serenity indoors.", price: 4500, originalPrice: 6500, image: p7, category: "Nature", medium: "Oil on Canvas", size: "36 x 24 inches" },
  { id: 8, title: "Azure Reflections", description: "Cool blue tones reflecting off a tranquil surface, creating a meditative and calming visual experience.", price: 3200, originalPrice: 4800, image: p8, category: "Landscape", medium: "Acrylic on Canvas", size: "24 x 18 inches" },
  { id: 9, title: "Autumn Melody", description: "Warm autumn colors dance across the canvas in this celebration of the season's most beautiful palette.", price: 2900, originalPrice: 4200, image: p9, category: "Landscape", medium: "Oil on Canvas", size: "22 x 18 inches" },
  { id: 10, title: "Moonlit Petals", description: "Flowers bathed in moonlight, rendered with delicate brushstrokes and a subtle luminous quality.", price: 3600, originalPrice: 5200, image: p10, category: "Floral", medium: "Acrylic on Canvas", size: "26 x 20 inches" },
];
