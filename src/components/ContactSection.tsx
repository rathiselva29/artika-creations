import React from "react";

const contacts = [
  {
    icon: "fa-brands fa-whatsapp",
    label: "WhatsApp",
    value: "+91 7708704523",
    href: "https://wa.me/917708704523?text=Hi! I'm interested in your paintings.",
    color: "#25D366",
  },
  {
    icon: "fa-solid fa-comment-sms",
    label: "SMS / Message",
    value: "7708704523",
    href: "sms:+917708704523?body=Hi! I'm interested in your paintings.",
    color: "#FF6B6B",
  },
  {
    icon: "fa-solid fa-envelope",
    label: "Email",
    value: "ratthikas29@gmail.com",
    href: "mailto:ratthikas29@gmail.com?subject=Painting Inquiry&body=Hi! I'm interested in your paintings.",
    color: "#EA4335",
  },
  {
    icon: "fa-brands fa-instagram",
    label: "Instagram",
    value: "@rathii__selva",
    href: "https://www.instagram.com/rathii__selva",
    color: "#E1306C",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          <span className="material-icons text-[hsl(var(--primary))] align-middle mr-2">call</span>
          Get In <span className="text-[hsl(var(--primary))]">Touch</span>
        </h2>
        <p className="text-[hsl(var(--muted-foreground))] mb-12">Want to buy a painting or commission a custom piece? Reach out!</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl shrink-0" style={{ background: c.color }}>
                <i className={c.icon}></i>
              </div>
              <div className="text-left">
                <p className="font-bold group-hover:text-[hsl(var(--primary))] transition-colors">{c.label}</p>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">{c.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
