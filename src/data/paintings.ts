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
  price: string;
  image: string;
  category: string;
}

export const paintings: Painting[] = [
  { id: 1, title: "Golden Sunset Dreams", description: "A vibrant acrylic painting capturing the golden hues of a setting sun.", price: "₹2,500", image: p1, category: "Landscape" },
  { id: 2, title: "Floral Elegance", description: "Delicate flowers painted with soft brushstrokes on canvas.", price: "₹3,000", image: p2, category: "Floral" },
  { id: 3, title: "Abstract Harmony", description: "Bold abstract composition with striking color contrasts.", price: "₹3,500", image: p3, category: "Abstract" },
  { id: 4, title: "Serene Waters", description: "Calm waterscape reflecting peaceful skies.", price: "₹2,800", image: p4, category: "Landscape" },
  { id: 5, title: "Portrait of Grace", description: "An expressive portrait capturing inner beauty.", price: "₹4,000", image: p5, category: "Portrait" },
  { id: 6, title: "Mystic Garden", description: "Enchanting garden scene with vivid colors and detail.", price: "₹3,200", image: p6, category: "Floral" },
  { id: 7, title: "Canvas of Emotions", description: "A deeply personal abstract expression on canvas.", price: "₹2,700", image: p7, category: "Abstract" },
  { id: 8, title: "Morning Bliss", description: "Early morning light captured in soft pastel tones.", price: "₹2,600", image: p8, category: "Landscape" },
  { id: 9, title: "Divine Colors", description: "A spiritual painting with rich, divine color palette.", price: "₹3,800", image: p9, category: "Abstract" },
  { id: 10, title: "Eternal Beauty", description: "Timeless beauty expressed through masterful brushwork.", price: "₹3,500", image: p10, category: "Portrait" },
];
