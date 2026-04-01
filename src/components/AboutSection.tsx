import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 relative z-10 bg-[hsl(var(--muted))]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          <span className="material-icons text-[hsl(var(--primary))] align-middle mr-2">person</span>
          About <span className="text-[hsl(var(--primary))]">Me</span>
        </h2>
        <p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed mb-8">
          I'm a passionate artist who believes that every canvas is a window to the soul. My paintings blend traditional techniques with modern artistic expression, creating pieces that evoke emotion and tell stories. Each brushstroke is crafted with love, patience, and deep passion for art.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { icon: "palette", label: "Acrylic Art", value: "Specialty" },
            { icon: "brush", label: "Handmade", value: "100%" },
            { icon: "favorite", label: "With Love", value: "Always" },
            { icon: "local_shipping", label: "Delivery", value: "Available" },
          ].map((item) => (
            <div key={item.label} className="p-4 rounded-xl bg-[hsl(var(--card))] shadow-md">
              <span className="material-icons text-3xl text-[hsl(var(--primary))] mb-2">{item.icon}</span>
              <p className="font-bold text-sm">{item.value}</p>
              <p className="text-xs text-[hsl(var(--muted-foreground))]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
