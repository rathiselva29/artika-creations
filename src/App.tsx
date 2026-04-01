import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import GallerySection from "./components/GallerySection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import PaintingModal from "./components/PaintingModal";
import ThemeSwitcher from "./components/ThemeSwitcher";
import type { Painting } from "./data/paintings";

export default function App() {
  const [selectedPainting, setSelectedPainting] = useState<Painting | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [color, setColor] = useState<string>("purple");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    const colors: Record<string, string> = {
      purple: "270 60% 50%",
      orange: "25 95% 53%",
      blue: "210 100% 50%",
      pink: "330 80% 60%",
    };
    document.documentElement.style.setProperty("--primary", colors[color] || colors.purple);
  }, [color]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Floating paint splashes */}
      <div className="paint-splash" style={{ width: 300, height: 300, top: "10%", left: "-5%", background: "hsl(var(--primary))" }} />
      <div className="paint-splash" style={{ width: 200, height: 200, top: "60%", right: "-3%", background: "hsl(var(--primary))", animationDelay: "2s" }} />
      <div className="paint-splash" style={{ width: 150, height: 150, bottom: "10%", left: "20%", background: "hsl(var(--primary))", animationDelay: "4s" }} />

      <Navbar />
      <HeroSection />
      <GallerySection onSelect={setSelectedPainting} />
      <AboutSection />
      <ContactSection />
      <FooterSection />
      <ThemeSwitcher theme={theme} setTheme={setTheme} color={color} setColor={setColor} />
      {selectedPainting && (
        <PaintingModal painting={selectedPainting} onClose={() => setSelectedPainting(null)} />
      )}
    </div>
  );
}
