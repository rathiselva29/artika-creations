import { motion } from 'framer-motion';
import { sizeGuide } from '@/data/business';

const SizeGuideSection = () => (
  <section id="size-guide" className="py-20 bg-secondary/50">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Size Guide</h2>
        <p className="text-muted-foreground font-body max-w-md mx-auto">Available sizes for paintings and prints.</p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {sizeGuide.map((s, i) => (
          <motion.div
            key={s.size}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-gallery bg-card p-6 text-center"
          >
            <p className="font-display text-2xl font-bold text-primary mb-1">{s.size}</p>
            <p className="font-body text-sm text-foreground mb-2">{s.dims}</p>
            <p className="font-body text-xs text-muted-foreground">{s.note}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SizeGuideSection;
