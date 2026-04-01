import React, { useState } from "react";

interface Props {
  theme: "light" | "dark";
  setTheme: (t: "light" | "dark") => void;
  color: string;
  setColor: (c: string) => void;
}

const colorOptions = [
  { name: "purple", hsl: "270 60% 50%", hex: "#7c3aed" },
  { name: "orange", hsl: "25 95% 53%", hex: "#f97316" },
  { name: "blue", hsl: "210 100% 50%", hex: "#0080ff" },
  { name: "pink", hsl: "330 80% 60%", hex: "#ec4899" },
];

export default function ThemeSwitcher({ theme, setTheme, color, setColor }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[90]">
      {/* Panel */}
      {open && (
        <div className="mb-3 p-4 rounded-2xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] shadow-2xl w-48 animate-[zoomIn_0.3s_ease]">
          <p className="text-xs font-semibold mb-3 text-[hsl(var(--muted-foreground))]">THEME MODE</p>
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setTheme("light")}
              className={`flex-1 py-2 rounded-lg text-xs font-medium transition-all ${theme === "light" ? "bg-[hsl(var(--primary))] text-white" : "bg-[hsl(var(--muted))]"}`}
            >
              <span className="material-icons text-sm align-middle mr-1">light_mode</span>Light
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={`flex-1 py-2 rounded-lg text-xs font-medium transition-all ${theme === "dark" ? "bg-[hsl(var(--primary))] text-white" : "bg-[hsl(var(--muted))]"}`}
            >
              <span className="material-icons text-sm align-middle mr-1">dark_mode</span>Dark
            </button>
          </div>
          <p className="text-xs font-semibold mb-3 text-[hsl(var(--muted-foreground))]">ACCENT COLOR</p>
          <div className="flex gap-3 justify-center">
            {colorOptions.map((c) => (
              <button
                key={c.name}
                onClick={() => setColor(c.name)}
                className={`w-8 h-8 rounded-full border-2 transition-all hover:scale-110 ${color === c.name ? "border-white shadow-lg scale-110" : "border-transparent"}`}
                style={{ background: c.hex }}
                title={c.name}
              />
            ))}
          </div>
        </div>
      )}
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-[hsl(var(--primary))] text-white shadow-xl flex items-center justify-center hover:scale-110 transition-all duration-300"
        style={{ animation: "floatSplash 3s ease-in-out infinite" }}
      >
        <span className="material-icons text-2xl">{open ? "close" : "color_lens"}</span>
      </button>
    </div>
  );
}
