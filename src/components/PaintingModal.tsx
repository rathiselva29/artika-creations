import React from "react";
import type { Painting } from "../data/paintings";

interface Props {
  painting: Painting;
  onClose: () => void;
}

export default function PaintingModal({ painting, onClose }: Props) {
  return (
    <div className="modal-overlay fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="modal-content bg-[hsl(var(--card))] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition">
          <span className="material-icons">close</span>
        </button>
        <img src={painting.image} alt={painting.title} className="w-full h-72 sm:h-96 object-cover" />
        <div className="p-6">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[hsl(var(--primary)/0.15)] text-[hsl(var(--primary))] mb-3 inline-block">{painting.category}</span>
          <h3 className="text-2xl font-bold mt-2 mb-2">{painting.title}</h3>
          <p className="text-[hsl(var(--muted-foreground))] mb-4">{painting.description}</p>
          <p className="text-3xl font-bold text-[hsl(var(--primary))] mb-6">{painting.price}</p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`https://wa.me/917708704523?text=Hi! I want to buy "${painting.title}" (${painting.price}). Is it available?`}
              target="_blank"
              rel="noreferrer"
              className="flex-1 min-w-[140px] text-center px-6 py-3 rounded-full bg-[hsl(var(--primary))] text-white font-semibold hover:shadow-lg hover:scale-105 transition-all"
            >
              <span className="material-icons align-middle mr-1 text-lg">shopping_cart</span>
              Buy Now
            </a>
            <a
              href={`https://wa.me/917708704523?text=Hi! I'd like to inquire about "${painting.title}".`}
              target="_blank"
              rel="noreferrer"
              className="flex-1 min-w-[140px] text-center px-6 py-3 rounded-full border-2 border-[hsl(var(--primary))] text-[hsl(var(--primary))] font-semibold hover:bg-[hsl(var(--primary))] hover:text-white transition-all"
            >
              <span className="material-icons align-middle mr-1 text-lg">chat</span>
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
