import { motion } from 'framer-motion';

const offerings = [
  {
    icon: '🎨',
    title: 'Custom Paintings',
    description: 'Turn your ideas into hand-crafted artwork.',
  },
  {
    icon: '🖼️',
    title: 'Framed Wall Art',
    description: 'Choose from multiple frame styles and sizes.',
  },
  {
    icon: '✨',
    title: 'Premium Wall Stickers',
    description: 'Transform your walls with unique artistic designs.',
  },
  {
    icon: '💜',
    title: 'Aesthetic Room Decor',
    description: 'Create beautiful personalized spaces.',
  },
  {
    icon: '🎁',
    title: 'Personalized Gifts',
    description: 'Custom art pieces for special occasions.',
  },
];

const CraftedForYourSpaceSection = () => (
  <section id="crafted" className="py-20 bg-background relative overflow-hidden">
    <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-paint-splash" aria-hidden />
    <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-accent/10 blur-3xl animate-paint-splash" aria-hidden />
    <div className="container mx-auto px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Crafted Just For Your Space</h2>
        <p className="text-muted-foreground font-body max-w-md mx-auto">Handmade artistry tailored to the corners of your home.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {offerings.map((o, i) => (
          <motion.div
            key={o.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10, scale: 1.03 }}
            className="card-gallery bg-card p-6 text-center cursor-default animate-float"
            style={{ animationDelay: `${i * 0.4}s` }}
          >
            <div className="text-5xl mb-4 drop-shadow-lg">{o.icon}</div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{o.title}</h3>
            <p className="font-body text-muted-foreground text-xs leading-relaxed">{o.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CraftedForYourSpaceSection;
