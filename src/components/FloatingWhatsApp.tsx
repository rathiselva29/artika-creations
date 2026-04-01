import React from "react";
import { whatsappUrl } from "@/lib/contact";

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl("Hi, I'd like to order a painting from Artika Gallery!")}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 animate-float items-center justify-center rounded-full bg-green-500 text-2xl text-white shadow-xl transition-transform hover:scale-110"
      aria-label="Order on WhatsApp"
    >
      💬
    </a>
  );
}
