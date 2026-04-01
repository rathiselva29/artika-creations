import React from "react";
import { CONTACT } from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="mb-3 text-xl font-bold text-primary">🎨 Artika Gallery</h3>
            <p className="text-sm text-muted-foreground">Handcrafted paintings that bring beauty and emotion to your space.</p>
          </div>
          <div>
            <h4 className="mb-3 font-semibold">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="/" className="hover:text-primary transition">Home</a>
              <a href="/gallery" className="hover:text-primary transition">Gallery</a>
              <a href="/about" className="hover:text-primary transition">About</a>
              <a href="/contact" className="hover:text-primary transition">Contact</a>
            </div>
          </div>
          <div>
            <h4 className="mb-3 font-semibold">Connect</h4>
            <div className="flex gap-3">
              <a href={`https://www.instagram.com/${CONTACT.instagram}`} target="_blank" rel="noreferrer" className="rounded-full bg-secondary p-2.5 text-secondary-foreground transition hover:bg-primary hover:text-primary-foreground" aria-label="Instagram">📷</a>
              <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer" className="rounded-full bg-secondary p-2.5 text-secondary-foreground transition hover:bg-primary hover:text-primary-foreground" aria-label="WhatsApp">💬</a>
              <a href={`mailto:${CONTACT.email}`} className="rounded-full bg-secondary p-2.5 text-secondary-foreground transition hover:bg-primary hover:text-primary-foreground" aria-label="Email">✉️</a>
              <a href={`tel:${CONTACT.phone}`} className="rounded-full bg-secondary p-2.5 text-secondary-foreground transition hover:bg-primary hover:text-primary-foreground" aria-label="Call">📞</a>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{CONTACT.email}</p>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Artika Gallery. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
