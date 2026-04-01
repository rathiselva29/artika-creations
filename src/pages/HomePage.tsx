import React from "react";
import { Link } from "react-router-dom";
import { paintings } from "@/data/paintings";
import PaintingCard from "@/components/PaintingCard";

export default function HomePage() {
  const featured = paintings.slice(0, 6);

  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Paint splash bg */}
        <div className="paint-splash absolute -left-20 -top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="paint-splash absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl" style={{ animationDelay: "3s" }} />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">Welcome to</p>
          <h1 className="mb-6 text-5xl font-bold leading-tight sm:text-7xl">
            Artika <span className="text-primary">Gallery</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground" style={{ fontFamily: "'Lora', serif" }}>
            Discover handcrafted paintings that capture emotion, beauty, and the essence of artistic expression. Each piece is a unique creation made with passion and love.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/gallery"
              className="rounded-lg bg-primary px-8 py-3 font-medium text-primary-foreground shadow-lg transition hover:opacity-90 hover:shadow-xl"
            >
              🎨 View My Gallery
            </Link>
            <Link
              to="/contact"
              className="rounded-lg border-2 border-primary px-8 py-3 font-medium text-primary transition hover:bg-primary hover:text-primary-foreground"
            >
              ✉️ Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">Featured Collection</p>
          <h2 className="text-3xl font-bold sm:text-4xl">Recent Artworks</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map(p => <PaintingCard key={p.id} painting={p} />)}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/gallery"
            className="inline-block rounded-lg bg-primary px-8 py-3 font-medium text-primary-foreground transition hover:opacity-90"
          >
            View All Paintings →
          </Link>
        </div>
      </section>

      {/* About teaser */}
      <section className="border-t border-border bg-card py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">The Artist</p>
          <h2 className="mb-6 text-3xl font-bold">About Rathi Selva</h2>
          <p className="mb-8 text-muted-foreground" style={{ fontFamily: "'Lora', serif" }}>
            A passionate artist dedicated to creating beautiful paintings that evoke deep emotions. Every brushstroke tells a story, every color speaks a language of its own.
          </p>
          <Link to="/about" className="inline-block rounded-lg border-2 border-primary px-6 py-2.5 font-medium text-primary transition hover:bg-primary hover:text-primary-foreground">
            Learn More About Me →
          </Link>
        </div>
      </section>
    </div>
  );
}
