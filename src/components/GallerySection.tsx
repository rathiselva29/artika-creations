import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { paintings, categories, type Painting, type Category } from '@/data/paintings';
import PaintingModal from './PaintingModal';

type Filter = 'All' | Category;

const GallerySection = () => {
  const [selected, setSelected] = useState<Painting | null>(null);
  const [filter, setFilter] = useState<Filter>('All');

  const filtered = useMemo(
    () => (filter === 'All' ? paintings : paintings.filter(p => p.category === filter)),
    [filter]
  );

  const filters: Filter[] = ['All', ...categories];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Painting Collections</h2>
          <p className="text-muted-foreground font-body max-w-md mx-auto">Each piece is a handcrafted journey through color and emotion.</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-xs md:text-sm font-body font-medium transition-all duration-300 border ${
                filter === f
                  ? 'bg-primary text-primary-foreground border-primary shadow-md'
                  : 'bg-card text-foreground border-border hover:border-primary hover:text-primary'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 8) * 0.05 }}
              className="card-gallery bg-card group"
            >
              <div className="overflow-hidden aspect-square">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover img-zoom" loading="lazy" />
              </div>
              <div className="p-3 md:p-4">
                <h3 className="font-display text-sm md:text-base font-semibold text-foreground truncate">{p.title}</h3>
                <p className="text-muted-foreground text-xs mt-1 line-clamp-2">{p.description}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-muted-foreground line-through text-xs">₹{p.originalPrice}</span>
                  <span className="text-primary font-bold text-sm">₹{p.discountPrice}</span>
                </div>
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => setSelected(p)}
                    className="btn-glow flex-1 text-xs bg-primary text-primary-foreground py-1.5 rounded-md font-body font-medium"
                  >
                    View
                  </button>
                  <a
                    href={`https://wa.me/917708704523?text=Hi, I want to buy "${p.title}" for ₹${p.discountPrice}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-glow flex-1 text-xs border border-primary text-primary py-1.5 rounded-md font-body font-medium text-center"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <PaintingModal painting={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default GallerySection;
