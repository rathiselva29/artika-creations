import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { paintings } from '@/data/paintings';

const variants = [
  { icon: '🎨', label: 'Original Painting', style: 'rounded-md ring-1 ring-border' },
  { icon: '🖼️', label: 'Framed Art', style: 'rounded-sm ring-[10px] ring-amber-900/80 shadow-2xl' },
  { icon: '✨', label: 'Wall Sticker', style: 'rounded-[40%] shadow-lg' },
  { icon: '📮', label: 'Postcard', style: 'rounded-md shadow-md rotate-2 ring-4 ring-background' },
  { icon: '🎁', label: 'Gift Print', style: 'rounded-2xl shadow-xl ring-2 ring-primary/40' },
];

const PaintingToDecorSection = () => {
  const [idx, setIdx] = useState(0);
  const featured = paintings[2] || paintings[0];

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % variants.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="painting-to-decor" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">From Painting To Decor</h2>
          <p className="text-muted-foreground font-body max-w-md mx-auto">One artwork, transformed into the format that fits your space.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          <div className="relative aspect-square max-w-sm mx-auto w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.85, rotate: -8, filter: 'blur(8px)' }}
                animate={{ opacity: 1, scale: 1, rotate: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.1, rotate: 8, filter: 'blur(8px)' }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className={`absolute inset-0 overflow-hidden ${variants[idx].style}`}
              >
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover" loading="lazy" />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="space-y-3">
            {variants.map((v, i) => (
              <button
                key={v.label}
                onClick={() => setIdx(i)}
                className={`w-full flex items-center gap-4 p-4 rounded-lg border transition-all duration-300 text-left ${
                  idx === i
                    ? 'border-primary bg-primary/10 shadow-md scale-[1.02]'
                    : 'border-border bg-card hover:border-primary/50'
                }`}
              >
                <div className="text-3xl">{v.icon}</div>
                <div className="flex-1">
                  <div className="font-display font-semibold text-foreground">{v.label}</div>
                  <div className="text-xs text-muted-foreground font-body">
                    {idx === i ? 'Now showing' : 'Tap to morph'}
                  </div>
                </div>
                {idx === i && <motion.i layoutId="dot" className="fas fa-circle text-primary text-[8px]" />}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaintingToDecorSection;
