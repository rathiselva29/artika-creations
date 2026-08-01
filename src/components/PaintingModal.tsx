import { AnimatePresence, motion } from 'framer-motion';
import type { Painting } from '@/data/paintings';
import { serviceOptionsFor } from '@/data/paintingServices';

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
          className="bg-card rounded-2xl overflow-hidden max-w-lg w-full shadow-2xl max-h-[90vh] overflow-y-auto"
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

            <h4 className="font-display text-base font-semibold text-foreground mt-6 mb-3">
              Available Services & Pricing
            </h4>
            <div className="space-y-2">
              {serviceOptionsFor(painting).map((s) => (
                <a
                  key={s.title}
                  href={`https://wa.me/917708704523?text=${encodeURIComponent(
                    `Hi, I want to order "${painting.title}" as ${s.title} (${s.price}). Please confirm.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 p-3 rounded-lg border border-border hover:border-primary transition-colors duration-300 group"
                >
                  <i className={`fas ${s.icon} text-primary mt-0.5`} />
                  <span className="flex-1">
                    <span className="block font-body text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {s.title}
                    </span>
                    <span className="block text-muted-foreground text-xs mt-0.5">{s.note}</span>
                  </span>
                  <span className="text-primary font-bold text-sm whitespace-nowrap">{s.price}</span>
                </a>
              ))}
            </div>

            <div className="flex gap-3 mt-6">
              <a
                href={`https://wa.me/917708704523?text=${encodeURIComponent(
                  `Hi, I am interested in "${painting.title}". Please help me choose a service.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-glow flex-1 bg-primary text-primary-foreground py-3 rounded-lg font-body font-semibold text-sm text-center"
              >
                <i className="fab fa-whatsapp mr-2" />Order on WhatsApp
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
