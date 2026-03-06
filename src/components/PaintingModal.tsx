import { AnimatePresence, motion } from 'framer-motion';
import type { Painting } from '@/data/paintings';

interface Props {
  painting: Painting | null;
  onClose: () => void;
}

const PaintingModal = ({ painting, onClose }: Props) => (
  <AnimatePresence>
    {painting && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/60 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-card rounded-2xl overflow-hidden max-w-lg w-full shadow-2xl"
        >
          <div className="relative">
            <img src={painting.image} alt={painting.title} className="w-full aspect-square object-cover" />
            <button
              onClick={onClose}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 flex items-center justify-center text-foreground hover:bg-background transition-colors"
            >
              <i className="fas fa-times" />
            </button>
          </div>
          <div className="p-6">
            <h3 className="font-display text-2xl font-bold text-foreground">{painting.title}</h3>
            <p className="text-muted-foreground font-body mt-2">{painting.description}</p>
            <div className="flex items-center gap-3 mt-4">
              <span className="text-muted-foreground line-through">₹{painting.originalPrice}</span>
              <span className="text-primary font-bold text-xl">₹{painting.discountPrice}</span>
            </div>
            <div className="flex gap-3 mt-5">
              <a
                href={`https://wa.me/919999999999?text=I want to buy "${painting.title}" for ₹${painting.discountPrice}`}
                target="_blank"
                rel="noreferrer"
                className="btn-glow flex-1 bg-primary text-primary-foreground py-3 rounded-lg font-body font-semibold text-sm text-center"
              >
                <i className="fas fa-shopping-cart mr-2" />Buy Now
              </a>
              <a
                href="#contact"
                onClick={onClose}
                className="btn-glow flex-1 border-2 border-primary text-primary py-3 rounded-lg font-body font-semibold text-sm text-center"
              >
                <i className="fas fa-envelope mr-2" />Contact
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default PaintingModal;
