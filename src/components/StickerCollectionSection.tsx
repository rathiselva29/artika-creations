import { motion } from 'framer-motion';

const collections = [
  { icon: '✨', title: 'Anime Collection', desc: 'Bold lines, soft palettes, your favorite characters.', gradient: 'from-pink-500/20 to-purple-500/20' },
  { icon: '🟦', title: 'Pixel Art Collection', desc: 'Retro 8-bit charm for playful walls.', gradient: 'from-blue-500/20 to-cyan-500/20' },
  { icon: '🌸', title: 'Floral Collection', desc: 'Delicate botanicals to bring the garden indoors.', gradient: 'from-rose-500/20 to-orange-500/20' },
  { icon: '⚪', title: 'Minimal Collection', desc: 'Clean shapes and quiet lines for modern spaces.', gradient: 'from-gray-400/20 to-zinc-500/20' },
  { icon: '🔤', title: 'Custom Name Stickers', desc: 'Your name, your style — handcrafted typography.', gradient: 'from-amber-500/20 to-yellow-500/20' },
  { icon: '💜', title: 'Aesthetic Room Decor', desc: 'Curated kits to style your whole vibe.', gradient: 'from-violet-500/20 to-fuchsia-500/20' },
];

const StickerCollectionSection = () => (
  <section id="stickers" className="py-20 bg-secondary/50 relative overflow-hidden">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-4xl pointer-events-none opacity-20"
        style={{ top: `${10 + i * 18}%`, left: `${(i * 23) % 90}%` }}
        animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 6 + i, repeat: Infinity, delay: i * 0.5 }}
        aria-hidden
      >
        ✨
      </motion.div>
    ))}

    <div className="container mx-auto px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Sticker &amp; Decor Collection</h2>
        <p className="text-muted-foreground font-body max-w-md mx-auto">Peel-and-stick artistry to refresh any corner.</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {collections.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: 'spring', bounce: 0.4 }}
            whileHover={{ rotate: [-2, 2, 0], scale: 1.05, transition: { duration: 0.4 } }}
            className={`card-gallery bg-gradient-to-br ${c.gradient} bg-card p-6 text-center cursor-default hover:shadow-glow`}
          >
            <motion.div
              className="text-4xl mb-3 inline-block"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              {c.icon}
            </motion.div>
            <h3 className="font-display text-base font-semibold text-foreground mb-1">{c.title}</h3>
            <p className="font-body text-muted-foreground text-xs">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StickerCollectionSection;
