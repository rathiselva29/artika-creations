import React, { useState } from "react";
import { paintings, type Painting } from "../data/paintings";

interface Props {
  onSelect: (p: Painting) => void;
}

const categories = ["All", "Landscape", "Floral", "Abstract", "Portrait"];

export default function GallerySection({ onSelect }: Props) {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? paintings : paintings.filter((p) => p.category === filter);

  return (
    <section id="gallery" className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="material-icons text-[hsl(var(--primary))] align-middle mr-2">photo_library</span>
          My <span className="text-[hsl(var(--primary))]">Gallery</span>
        </h2>
        <p className="text-center text-[hsl(var(--muted-foreground))] mb-10">Explore my collection of handmade paintings</p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? "bg-[hsl(var(--primary))] text-white shadow-lg"
                  : "bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--primary)/0.15)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((painting) => (
            <div
              key={painting.id}
              className="gallery-card rounded-2xl overflow-hidden bg-[hsl(var(--card))] shadow-lg cursor-pointer border border-[hsl(var(--border))]"
              onClick={() => onSelect(painting)}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={painting.image}
                  alt={painting.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-[hsl(var(--primary))] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {painting.category}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-1">{painting.title}</h3>
                <p className="text-sm text-[hsl(var(--muted-foreground))] mb-3">{painting.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[hsl(var(--primary))] font-bold text-lg">{painting.price}</span>
                  <a
                    href={`https://wa.me/917708704523?text=Hi! I'm interested in buying "${painting.title}" (${painting.price}). Is it available?`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="px-4 py-2 rounded-full bg-[hsl(var(--primary))] text-white text-sm font-medium hover:shadow-lg hover:scale-105 transition-all"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
