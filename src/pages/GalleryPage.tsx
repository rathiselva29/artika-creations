import React, { useState } from "react";
import { paintings } from "@/data/paintings";
import PaintingCard from "@/components/PaintingCard";

const CATEGORIES = ["All", ...Array.from(new Set(paintings.map(p => p.category)))];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? paintings : paintings.filter(p => p.category === filter);

  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6">
      <div className="mb-10 text-center">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">My Collection</p>
        <h1 className="text-4xl font-bold">Painting Gallery</h1>
      </div>

      {/* Filter */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {CATEGORIES.map(c => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${filter === c ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(p => <PaintingCard key={p.id} painting={p} />)}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-muted-foreground">No paintings found in this category.</p>
      )}
    </div>
  );
}
