import React from "react";
import { useParams, Link } from "react-router-dom";
import { paintings } from "@/data/paintings";
import { whatsappUrl } from "@/lib/contact";
import { useWishlist } from "@/hooks/useWishlist";
import { showToast } from "@/components/Toast";

export default function PaintingDetailPage() {
  const { id } = useParams();
  const painting = paintings.find(p => p.id === Number(id));
  const { isInWishlist, toggleWishlist } = useWishlist();

  if (!painting) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-bold">Painting Not Found</h1>
          <Link to="/gallery" className="text-primary hover:underline">← Back to Gallery</Link>
        </div>
      </div>
    );
  }

  const inWishlist = isInWishlist(painting.id);

  const handleShare = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      showToast("🔗 Link copied to clipboard!");
    } catch {
      showToast("Could not copy link");
    }
  };

  const handleWishlist = () => {
    toggleWishlist(painting.id);
    showToast(inWishlist ? "💔 Removed from wishlist" : "❤️ Added to wishlist!");
  };

  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6">
      <Link to="/gallery" className="mb-6 inline-block text-sm text-muted-foreground hover:text-primary transition">
        ← Back to Gallery
      </Link>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Image */}
        <div className="overflow-hidden rounded-xl shadow-xl">
          <img
            src={painting.image}
            alt={painting.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center">
          <span className="mb-2 text-xs font-medium uppercase tracking-widest text-primary">{painting.category}</span>
          <h1 className="mb-4 text-4xl font-bold">{painting.title}</h1>
          <p className="mb-6 text-muted-foreground" style={{ fontFamily: "'Lora', serif" }}>{painting.description}</p>

          <div className="mb-6 space-y-2 text-sm text-muted-foreground">
            <p><span className="font-medium text-foreground">Medium:</span> {painting.medium}</p>
            <p><span className="font-medium text-foreground">Size:</span> {painting.size}</p>
          </div>

          <div className="mb-8 flex items-baseline gap-3">
            <span className="text-3xl font-bold text-primary">₹{painting.price.toLocaleString()}</span>
            <span className="text-lg text-muted-foreground line-through">₹{painting.originalPrice.toLocaleString()}</span>
            <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">
              {Math.round(((painting.originalPrice - painting.price) / painting.originalPrice) * 100)}% OFF
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={whatsappUrl(`Hi, I'm interested in buying "${painting.title}" (₹${painting.price.toLocaleString()})`)}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground shadow transition hover:opacity-90"
            >
              💬 Buy Now
            </a>
            <button
              onClick={handleWishlist}
              className={`rounded-lg border-2 px-6 py-3 font-medium transition ${inWishlist ? "border-red-400 bg-red-50 text-red-500 dark:bg-red-500/10" : "border-border text-foreground hover:border-primary hover:text-primary"}`}
            >
              {inWishlist ? "❤️ In Wishlist" : "🤍 Add to Wishlist"}
            </button>
            <button
              onClick={handleShare}
              className="rounded-lg border-2 border-border px-6 py-3 font-medium text-foreground transition hover:border-primary hover:text-primary"
            >
              📤 Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
