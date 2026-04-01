import { motion } from 'framer-motion';

const services = [
  {
    icon: 'fa-paintbrush',
    title: 'Custom Acrylic Paintings',
    description: 'Handmade acrylic paintings created with passion and detailed artistic work.',
  },
  {
    icon: 'fa-user',
    title: 'Portrait Painting',
    description: 'Personalized portrait paintings made from photos with realistic detail.',
  },
  {
    icon: 'fa-image',
    title: 'Canvas Art Design',
    description: 'Creative canvas art perfect for home decor and gifting.',
  },
];

const ServicesSection = () => (
  <section id="services" className="py-20 bg-secondary/50">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">What I Offer</h2>
        <p className="text-muted-foreground font-body max-w-md mx-auto">Bringing your artistic visions to life through hand-crafted masterpieces.</p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="card-gallery bg-card p-8 text-center group cursor-default"
          >
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              <i className={`fas ${s.icon}`} />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">{s.title}</h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
