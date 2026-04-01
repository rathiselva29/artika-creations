import React, { useState } from "react";
import { CONTACT, whatsappUrl } from "@/lib/contact";
import { showToast } from "@/components/Toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    // Send via WhatsApp as there's no backend
    const msg = `New Contact Message:\nName: ${result.data.name}\nEmail: ${result.data.email}\nMessage: ${result.data.message}`;
    window.open(whatsappUrl(msg), "_blank");
    showToast("✅ Message sent via WhatsApp!");
    setForm({ name: "", email: "", message: "" });
  };

  const contactMethods = [
    { icon: "💬", label: "WhatsApp", sub: CONTACT.whatsappDisplay, href: `https://wa.me/${CONTACT.whatsapp}`, external: true },
    { icon: "📷", label: "Instagram", sub: `@${CONTACT.instagram}`, href: `https://www.instagram.com/${CONTACT.instagram}`, external: true },
    { icon: "✉️", label: "Email", sub: CONTACT.email, href: `mailto:${CONTACT.email}`, external: false },
    { icon: "📱", label: "SMS", sub: CONTACT.whatsappDisplay, href: `sms:${CONTACT.sms}`, external: false },
    { icon: "📞", label: "Call", sub: CONTACT.phone, href: `tel:${CONTACT.phone}`, external: false },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6">
      <div className="mb-12 text-center">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">Get In Touch</p>
        <h1 className="text-4xl font-bold">Contact Me</h1>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Contact Methods */}
        <div className="space-y-4">
          <h2 className="mb-4 text-xl font-semibold">Reach Me Directly</h2>
          {contactMethods.map(m => (
            <a
              key={m.label}
              href={m.href}
              target={m.external ? "_blank" : undefined}
              rel={m.external ? "noreferrer" : undefined}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition hover:border-primary hover:shadow-md"
              onClick={() => showToast(`Opening ${m.label}...`)}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-xl">{m.icon}</span>
              <div>
                <p className="font-medium text-foreground">{m.label}</p>
                <p className="text-sm text-muted-foreground">{m.sub}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Form */}
        <div>
          <h2 className="mb-4 text-xl font-semibold">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-border bg-card p-6">
            <div>
              <label className="mb-1 block text-sm font-medium">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-ring"
                placeholder="Your name"
              />
              {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-ring"
                placeholder="your@email.com"
              />
              {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">Message</label>
              <textarea
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                rows={4}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-ring"
                placeholder="Tell me about the painting you'd like..."
              />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-primary py-3 font-medium text-primary-foreground transition hover:opacity-90"
            >
              Send Message via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
