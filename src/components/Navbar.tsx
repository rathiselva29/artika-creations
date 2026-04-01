import React, { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[hsl(var(--background)/0.85)] border-b border-[hsl(var(--border))] transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" onClick={() => scrollTo("#home")} className="text-2xl font-bold font-['Playfair_Display'] text-[hsl(var(--primary))]">
          <span className="material-icons mr-1 align-middle text-xl">palette</span>
          Artika Gallery
        </a>
        {/* Desktop nav */}
        <div className="hidden md:flex gap-8">
          {links.map((l) => (
            <button key={l.href} onClick={() => scrollTo(l.href)} className="text-sm font-medium hover:text-[hsl(var(--primary))] transition-colors">
              {l.label}
            </button>
          ))}
        </div>
        {/* Mobile toggle */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          <span className="material-icons">{open ? "close" : "menu"}</span>
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 bg-[hsl(var(--background)/0.95)] backdrop-blur-md">
          {links.map((l) => (
            <button key={l.href} onClick={() => scrollTo(l.href)} className="text-left py-2 text-sm font-medium hover:text-[hsl(var(--primary))] transition-colors">
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
