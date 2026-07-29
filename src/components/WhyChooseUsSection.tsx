import { motion } from 'framer-motion';
import { whyChooseUs } from '@/data/business';

const WhyChooseUsSection = () => (
  <section id="why-choose-us" className="py-20">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Why Choose Us</h2>
        <p className="text-muted-foreground font-body max-w-md mx-auto">Every order is treated like a personal gift.</p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {whyChooseUs.map((w, i) => (
          <motion.div
            key={w.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-gallery bg-card p-6 flex items-center gap-4 group cursor-default"
          >
            <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              <i className={`fas ${w.icon}`} />
            </div>
            <h3 className="font-display text-base font-semibold text-foreground">{w.title}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
