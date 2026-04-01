import React from "react";

const socials = [
  { icon: "fa-brands fa-instagram", href: "https://www.instagram.com/rathii__selva", color: "#E1306C" },
  { icon: "fa-brands fa-whatsapp", href: "https://wa.me/917708704523", color: "#25D366" },
  { icon: "fa-solid fa-envelope", href: "mailto:ratthikas29@gmail.com", color: "#EA4335" },
];

export default function FooterSection() {
  return (
    <footer className="py-10 px-6 bg-[hsl(var(--muted))] border-t border-[hsl(var(--border))] relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-xl font-bold mb-4 font-['Playfair_Display']">
          <span className="text-[hsl(var(--primary))]">Artika</span> Gallery
        </h3>
        <div className="flex justify-center gap-5 mb-6">
          {socials.map((s) => (
            <a
              key={s.icon}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="social-icon w-11 h-11 rounded-full flex items-center justify-center text-white text-lg"
              style={{ background: s.color }}
            >
              <i className={s.icon}></i>
            </a>
          ))}
        </div>
        <p className="text-sm text-[hsl(var(--muted-foreground))]">
          © {new Date().getFullYear()} Artika Gallery. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
