import React from "react";
import { Link } from "react-router-dom";
import { paintings } from "@/data/paintings";
import { whatsappUrl } from "@/lib/contact";

export default function PaintingCard({ painting }: { painting: typeof paintings[0] }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-border bg-card shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <Link to={`/painting/${painting.id}`} className="block overflow-hidden">
        <img
          src={painting.image}
          alt={painting.title}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </Link>
      <div className="p-4">
        <Link to={`/painting/${painting.id}`}>
          <h3 className="mb-1 text-lg font-semibold text-foreground transition hover:text-primary">{painting.title}</h3>
        </Link>
        <p className="mb-3 text-sm text-muted-foreground line-clamp-2">{painting.description}</p>
        <div className="mb-3 flex items-center gap-2">
          <span className="text-lg font-bold text-primary">₹{painting.price.toLocaleString()}</span>
          <span className="text-sm text-muted-foreground line-through">₹{painting.originalPrice.toLocaleString()}</span>
        </div>
        <div className="flex gap-2">
          <Link
            to={`/painting/${painting.id}`}
            className="flex-1 rounded-lg border border-primary bg-transparent py-2 text-center text-sm font-medium text-primary transition hover:bg-primary hover:text-primary-foreground"
          >
            View Details
          </Link>
          <a
            href={whatsappUrl(`Hi, I'm interested in buying "${painting.title}" (₹${painting.price.toLocaleString()})`)}
            target="_blank"
            rel="noreferrer"
            className="flex-1 rounded-lg bg-primary py-2 text-center text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
}
