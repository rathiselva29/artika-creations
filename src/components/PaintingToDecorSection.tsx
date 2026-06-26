import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import pixelStickers from '@/assets/decor-pixel-stickers.jpg';
import photoCollage from '@/assets/decor-photo-collage.jpg';
import framedLiving from '@/assets/decor-framed-livingroom.jpg';
import wallSticker from '@/assets/decor-wall-sticker.jpg';
import postcard from '@/assets/decor-postcard.jpg';

const variants = [
  {
    icon: '🖼️',
    label: 'Framed Canvas',
    location: 'Above the living room sofa',
    image: framedLiving,
  },
  {
    icon: '🟦',
    label: 'Pixel Sticker Wall',
    location: 'Cozy reading nook',
    image: pixelStickers,
  },
  {
    icon: '💜',
    label: 'Photo Collage Heart',
    location: 'Bedroom corner wall',
    image: photoCollage,
  },
  {
    icon: '✨',
    label: 'Wall Decal Mural',
    location: 'Kids room / study desk',
    image: wallSticker,
  },
  {
    icon: '📮',
    label: 'Art Postcard Set',
    location: 'Desk & gifting flat-lay',
    image: postcard,
  },
];

const PaintingToDecorSection = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % variants.length), 3500);
    return () => clearInterval(t);
  }, []);

  const current = variants[idx];

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
          <p className="text-muted-foreground font-body max-w-md mx-auto">One artwork, reimagined into the format that fits your space.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          <div className="relative aspect-square max-w-md mx-auto w-full rounded-2xl overflow-hidden ring-1 ring-border shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 1.05, filter: 'blur(8px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <img src={current.image} alt={current.label} className="w-full h-full object-cover" loading="lazy" width={1024} height={1024} />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="text-white font-display font-semibold">{current.label}</div>
                  <div className="text-white/80 text-xs font-body">{current.location}</div>
                </div>
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
                  <div className="text-xs text-muted-foreground font-body">{v.location}</div>
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
