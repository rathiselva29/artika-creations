import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const { dark, toggle } = useTheme();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur shadow-lg" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="font-['Playfair_Display'] text-2xl font-bold text-primary">
          🎨 Artika Gallery
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === l.to ? "text-primary" : "text-foreground/70"}`}
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={toggle}
            className="rounded-full bg-secondary p-2 text-secondary-foreground transition hover:bg-secondary/80"
            aria-label="Toggle theme"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button onClick={toggle} className="rounded-full bg-secondary p-2 text-sm" aria-label="Toggle theme">
            {dark ? "☀️" : "🌙"}
          </button>
          <button onClick={() => setMobileOpen(o => !o)} className="rounded-lg bg-secondary p-2 text-secondary-foreground" aria-label="Menu">
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur md:hidden">
          {NAV_LINKS.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`block px-6 py-3 text-sm font-medium transition hover:bg-secondary ${location.pathname === l.to ? "text-primary" : "text-foreground/70"}`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
