import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const contactLinks = [
  { icon: 'fa-brands fa-whatsapp', label: 'WhatsApp', href: 'https://wa.me/917708704523?text=Hi, I am interested in your paintings!', color: 'bg-green-500' },
  { icon: 'fa-brands fa-instagram', label: 'Instagram', href: 'https://instagram.com/rathii__selva', color: 'bg-pink-500' },
  { icon: 'fas fa-envelope', label: 'Email', href: 'mailto:ratthikas29@gmail.com', color: 'bg-primary' },
  { icon: 'fas fa-sms', label: 'SMS', href: 'sms:+917708704523?body=Hi, I am interested in your paintings!', color: 'bg-blue-500' },
];

const ContactSection = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <section id="contact" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Want one of my paintings?</h2>
          <p className="text-muted-foreground font-body mb-10">
            If you love my artwork and want to own one, feel free to contact me.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {contactLinks.map(c => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="btn-glow flex items-center gap-2 px-6 py-3 rounded-lg bg-card text-foreground font-body font-medium shadow-md hover:shadow-lg transition-all"
              >
                <i className={`${c.icon} text-lg`} />
                {c.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setFormOpen(true)}
            className="btn-glow bg-primary text-primary-foreground px-8 py-3 rounded-lg font-body font-semibold text-sm uppercase tracking-wider"
          >
            <i className="fas fa-paper-plane mr-2" />Send a Message
          </button>
        </motion.div>
      </div>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {formOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/60 backdrop-blur-sm p-4"
            onClick={() => setFormOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-2xl p-8 max-w-md w-full shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-2xl font-bold text-foreground">Get in Touch</h3>
                <button onClick={() => setFormOpen(false)} className="text-muted-foreground hover:text-foreground">
                  <i className="fas fa-times text-lg" />
                </button>
              </div>
              <form onSubmit={(e) => { e.preventDefault(); setFormOpen(false); }} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground font-body resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="btn-glow w-full bg-primary text-primary-foreground py-3 rounded-lg font-body font-semibold"
                >
                  <i className="fas fa-paper-plane mr-2" />Send Message
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactSection;
