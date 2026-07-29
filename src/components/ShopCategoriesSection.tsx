import { motion } from 'framer-motion';
import { shopCategories, waLink } from '@/data/business';

const ShopCategoriesSection = () => (
  <section id="shop-categories" className="py-20">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Shop Categories</h2>
        <p className="text-muted-foreground font-body max-w-md mx-auto">Browse everything Artika creates, all in one place.</p>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {shopCategories.map((c, i) => (
          <motion.a
            key={c.title}
            href={waLink(`Hi, I'd like to see your ${c.title} collection.`)}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="card-gallery bg-card p-6 text-center group"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              <i className={`fas ${c.icon}`} />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground">{c.title}</h3>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default ShopCategoriesSection;
