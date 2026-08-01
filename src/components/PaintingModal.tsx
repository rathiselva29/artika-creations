import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Painting } from '@/data/paintings';
import {
  serviceOptionsFor,
  sizeChoices,
  formatChoicesFor,
  basePriceOf,
  type ConfigOption,
} from '@/data/paintingServices';

interface Props {
  painting: Painting | null;
  onClose: () => void;
}

const ChoiceButton = ({
  option,
  active,
  onSelect,
}: {
  option: ConfigOption;
  active: boolean;
  onSelect: () => void;
}) => (
  <button
    type="button"
    onClick={onSelect}
    className={`text-left px-3 py-2 rounded-lg border transition-all duration-300 ${
      active
        ? 'bg-primary text-primary-foreground border-primary shadow-md'
        : 'bg-card text-foreground border-border hover:border-primary hover:text-primary'
    }`}
  >
    <span className="block font-body text-xs font-semibold">{option.label}</span>
    <span className={`block text-[10px] mt-0.5 ${active ? 'opacity-80' : 'text-muted-foreground'}`}>
      {option.note}
    </span>
  </button>
);

const PaintingConfigurator = ({ painting }: { painting: Painting }) => {
  const formats = formatChoicesFor(painting);
  const [size, setSize] = useState(sizeChoices[1]);
  const [format, setFormat] = useState(formats[0]);
  const [notes, setNotes] = useState('');

  useEffect(() => {
    setSize(sizeChoices[1]);
    setFormat(formatChoicesFor(painting)[0]);
    setNotes('');
  }, [painting]);

  const basePrice = basePriceOf(painting);
  const onQuote = size.delta === null || format.delta === null;
  const total = onQuote ? null : basePrice + (size.delta ?? 0) + (format.delta ?? 0);

  const message = `Hi, I want to order "${painting.title}".
Size: ${size.label} (${size.note})
Format: ${format.label}
${notes.trim() ? `Notes: ${notes.trim()}\n` : ''}Total: ${total !== null ? `₹${total}` : 'On quotation'}`;

  return (
    <div className="mt-6 rounded-xl border border-border p-4">
      <h4 className="font-display text-base font-semibold text-foreground mb-3">Build Your Order</h4>

      <p className="font-body text-xs font-medium text-muted-foreground mb-2">Choose Size</p>
      <div className="grid grid-cols-2 gap-2">
        {sizeChoices.map((o) => (
          <ChoiceButton key={o.id} option={o} active={o.id === size.id} onSelect={() => setSize(o)} />
        ))}
      </div>

      <p className="font-body text-xs font-medium text-muted-foreground mt-4 mb-2">Choose Format</p>
      <div className="grid grid-cols-2 gap-2">
        {formats.map((o) => (
          <ChoiceButton key={o.id} option={o} active={o.id === format.id} onSelect={() => setFormat(o)} />
        ))}
      </div>

      <p className="font-body text-xs font-medium text-muted-foreground mt-4 mb-2">
        Custom Space — names, dates or special requests
      </p>
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        rows={3}
        maxLength={400}
        placeholder='e.g. Add "Happy Anniversary Selva & Priya" in gold at the bottom'
        className="w-full rounded-lg border border-border bg-background text-foreground font-body text-xs p-3 outline-none focus:border-primary transition-colors resize-none"
      />

      <div className="mt-4 pt-3 border-t border-border font-body text-xs space-y-1">
        <div className="flex justify-between text-muted-foreground">
          <span>Artwork base</span>
          <span>₹{basePrice}</span>
        </div>
        <div className="flex justify-between text-muted-foreground">
          <span>Size — {size.label}</span>
          <span>{size.delta === null ? 'On quotation' : size.delta ? `+₹${size.delta}` : 'Included'}</span>
        </div>
        <div className="flex justify-between text-muted-foreground">
          <span>Format — {format.label}</span>
          <span>
            {format.delta === null
              ? 'On quotation'
              : format.delta
              ? `${format.delta > 0 ? '+' : '−'}₹${Math.abs(format.delta)}`
              : 'Included'}
          </span>
        </div>
        <div className="flex justify-between items-center pt-2 mt-1 border-t border-border">
          <span className="font-display text-sm font-semibold text-foreground">Total</span>
          <motion.span
            key={total ?? 'quote'}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-bold text-lg"
          >
            {total !== null ? `₹${total}` : 'On quotation'}
          </motion.span>
        </div>
      </div>

      <a
        href={`https://wa.me/917708704523?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noreferrer"
        className="btn-glow block w-full mt-4 bg-primary text-primary-foreground py-3 rounded-lg font-body font-semibold text-sm text-center"
      >
        <i className="fab fa-whatsapp mr-2" />
        Order this configuration
      </a>
    </div>
  );
};

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

            <PaintingConfigurator painting={painting} />

            <h4 className="font-display text-base font-semibold text-foreground mt-6 mb-3">
              Other Services for this Artwork
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
