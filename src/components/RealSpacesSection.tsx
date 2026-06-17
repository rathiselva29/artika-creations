import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import livingRoom from '@/assets/mockups/living-room.jpg';
import bedroom from '@/assets/mockups/bedroom.jpg';
import studyRoom from '@/assets/mockups/study-room.jpg';
import office from '@/assets/mockups/office.jpg';
import cafe from '@/assets/mockups/cafe.jpg';
import { paintings } from '@/data/paintings';

const mockups = [
  { label: 'Living Room', bg: livingRoom, painting: paintings[0], frame: { top: '14%', left: '24%', width: '52%', height: '34%' } },
  { label: 'Bedroom', bg: bedroom, painting: paintings[3] || paintings[0], frame: { top: '12%', left: '26%', width: '48%', height: '38%' } },
  { label: 'Study Room', bg: studyRoom, painting: paintings[5] || paintings[0], frame: { top: '20%', left: '36%', width: '32%', height: '32%' } },
  { label: 'Office', bg: office, painting: paintings[7] || paintings[0], frame: { top: '24%', left: '36%', width: '32%', height: '26%' } },
  { label: 'Café', bg: cafe, painting: paintings[9] || paintings[0], frame: { top: '20%', left: '32%', width: '36%', height: '44%' } },
];

const BeforeAfter = ({ mockup }: { mockup: typeof mockups[number] }) => {
  const [pct, setPct] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = (clientX: number) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = ((clientX - r.left) / r.width) * 100;
    setPct(Math.max(0, Math.min(100, x)));
  };

  useEffect(() => {
    const up = () => { dragging.current = false; };
    const mv = (e: MouseEvent) => dragging.current && move(e.clientX);
    const tmv = (e: TouchEvent) => dragging.current && move(e.touches[0].clientX);
    window.addEventListener('mouseup', up);
    window.addEventListener('mousemove', mv);
    window.addEventListener('touchend', up);
    window.addEventListener('touchmove', tmv);
    return () => {
      window.removeEventListener('mouseup', up);
      window.removeEventListener('mousemove', mv);
      window.removeEventListener('touchend', up);
      window.removeEventListener('touchmove', tmv);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative w-full aspect-[3/2] overflow-hidden rounded-lg select-none group cursor-ew-resize bg-muted"
      onMouseDown={e => { dragging.current = true; move(e.clientX); }}
      onTouchStart={e => { dragging.current = true; move(e.touches[0].clientX); }}
    >
      <img src={mockup.bg} alt={`${mockup.label} before`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />

      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}>
        <img src={mockup.bg} alt={`${mockup.label} after`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <motion.img
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          src={mockup.painting.image}
          alt={mockup.painting.title}
          className="absolute object-cover shadow-2xl ring-2 ring-foreground/10 img-zoom"
          style={mockup.frame}
        />
      </div>

      <div className="absolute top-0 bottom-0 w-1 bg-primary shadow-glow pointer-events-none" style={{ left: `${pct}%`, transform: 'translateX(-50%)' }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shadow-xl">
          <i className="fas fa-arrows-left-right" />
        </div>
      </div>

      <div className="absolute top-3 left-3 bg-background/80 backdrop-blur px-3 py-1 rounded-full text-xs font-body font-semibold">Before</div>
      <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-body font-semibold">After</div>
    </div>
  );
};

const RealSpacesSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="real-spaces" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">See Artika In Your Home</h2>
          <p className="text-muted-foreground font-body max-w-md mx-auto">Drag the slider to watch a blank wall transform into a personal gallery.</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {mockups.map((m, i) => (
            <button
              key={m.label}
              onClick={() => setActive(i)}
              className={`px-4 py-1.5 rounded-full text-xs md:text-sm font-body font-medium transition-all duration-300 border ${
                active === i
                  ? 'bg-primary text-primary-foreground border-primary shadow-md'
                  : 'bg-card text-foreground border-border hover:border-primary hover:text-primary'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto card-gallery bg-card p-3"
        >
          <BeforeAfter mockup={mockups[active]} />
          <p className="text-center text-sm font-body text-muted-foreground mt-3">
            <span className="font-display font-semibold text-foreground">{mockups[active].painting.title}</span> in your {mockups[active].label.toLowerCase()}.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RealSpacesSection;
