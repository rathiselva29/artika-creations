import React from "react";
import { Link } from "react-router-dom";
import { CONTACT } from "@/lib/contact";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 pb-20 pt-28 sm:px-6">
      <div className="mb-12 text-center">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">The Artist</p>
        <h1 className="text-4xl font-bold">About Rathi Selva</h1>
      </div>

      <div className="space-y-8 text-muted-foreground" style={{ fontFamily: "'Lora', serif" }}>
        <p className="text-lg leading-relaxed">
          Welcome to Artika Gallery! I'm Rathi Selva, a passionate artist who believes that art has the power to transform spaces and touch souls. Each painting I create is a reflection of my emotions, experiences, and the beauty I see in the world around me.
        </p>
        <p className="text-lg leading-relaxed">
          My journey in art began at a young age, and over the years, I have honed my skills across various mediums — from oil and acrylic paintings to watercolors and mixed media. I draw inspiration from nature, human emotions, and the vibrant colors of everyday life.
        </p>
        <p className="text-lg leading-relaxed">
          Every brushstroke is intentional, every color is chosen with care, and every piece tells its own unique story. I believe that art should not just be seen — it should be felt. My goal is to create paintings that resonate with people and bring warmth, beauty, and inspiration to their homes and hearts.
        </p>

        <div className="rounded-xl border border-border bg-card p-8 text-center">
          <h3 className="mb-4 text-xl font-semibold text-foreground">Let's Connect</h3>
          <p className="mb-6 text-muted-foreground">I'd love to hear from you! Whether you want to commission a custom painting or just say hello.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={`https://www.instagram.com/${CONTACT.instagram}`} target="_blank" rel="noreferrer" className="rounded-lg bg-secondary px-4 py-2 text-sm font-medium transition hover:bg-primary hover:text-primary-foreground">📷 Instagram</a>
            <a href={`mailto:${CONTACT.email}`} className="rounded-lg bg-secondary px-4 py-2 text-sm font-medium transition hover:bg-primary hover:text-primary-foreground">✉️ Email</a>
            <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer" className="rounded-lg bg-secondary px-4 py-2 text-sm font-medium transition hover:bg-primary hover:text-primary-foreground">💬 WhatsApp</a>
            <Link to="/contact" className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90">Contact Me →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
