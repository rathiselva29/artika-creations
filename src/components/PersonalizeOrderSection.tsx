import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { z } from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

const productTypes = ['Canvas Painting', 'Framed Artwork', 'Wall Sticker', 'Comic Portrait', 'Anime Portrait', 'Wall Collage'];
const sizes = ['Small', 'Medium', 'Large', 'Custom Size'];
const frameStyles = ['Classic', 'Modern', 'Premium', 'Floating Frame'];

const orderSchema = z.object({
  customer_name: z.string().trim().min(1, 'Name is required').max(100),
  contact: z.string().trim().min(5, 'Contact required').max(120),
  product_type: z.string().min(1),
  size: z.string().min(1),
  frame_style: z.string().optional(),
  description: z.string().trim().max(1000).optional(),
});

const steps = [
  { num: '1', icon: 'fa-upload', title: 'Upload Your Photo or Idea', desc: 'Share an image, inspiration, or describe your requirements.' },
  { num: '2', icon: 'fa-palette', title: 'Select Product Type', desc: 'Canvas, framed art, sticker, comic, anime portrait, or wall collage.' },
  { num: '3', icon: 'fa-ruler-combined', title: 'Choose Size & Style', desc: 'From small to custom — paired with the frame style you love.' },
  { num: '4', icon: 'fa-paintbrush', title: 'Artwork Creation Begins', desc: 'Digital sketch, painting process, and design preparation.' },
  { num: '5', icon: 'fa-truck', title: 'Packaging & Delivery', desc: 'Secure packaging, gift wrapping option, and delivery tracking.' },
];

const PersonalizeOrderSection = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [productType, setProductType] = useState(productTypes[0]);
  const [size, setSize] = useState(sizes[0]);
  const [frame, setFrame] = useState(frameStyles[0]);
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const parsed = orderSchema.safeParse({
      customer_name: name,
      contact,
      product_type: productType,
      size,
      frame_style: frame,
      description,
    });

    if (!parsed.success) {
      toast({ title: 'Please check your inputs', description: parsed.error.errors[0].message, variant: 'destructive' });
      return;
    }

    setSubmitting(true);
    try {
      let photo_url: string | null = null;

      if (file) {
        if (file.size > 10 * 1024 * 1024) {
          toast({ title: 'Image too large', description: 'Please upload an image under 10MB.', variant: 'destructive' });
          setSubmitting(false);
          return;
        }
        const ext = file.name.split('.').pop() || 'jpg';
        const path = `${crypto.randomUUID()}.${ext}`;
        const { error: upErr } = await supabase.storage.from('order-uploads').upload(path, file);
        if (upErr) throw upErr;
        photo_url = path;
      }

      const { error } = await supabase.from('orders').insert({
        ...parsed.data,
        photo_url,
      });
      if (error) throw error;

      toast({ title: 'Order request sent!', description: 'Artika will reach out to you shortly.' });
      setName(''); setContact(''); setDescription(''); setFile(null);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Something went wrong';
      toast({ title: 'Could not submit', description: message, variant: 'destructive' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="personalize" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Create Your Perfect Artwork</h2>
          <p className="text-muted-foreground font-body max-w-md mx-auto">Five simple steps from your idea to a piece on your wall.</p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-4 max-w-6xl mx-auto mb-14">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="card-gallery bg-card p-5 text-center relative"
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold">
                {s.num}
              </div>
              <i className={`fas ${s.icon} text-primary text-xl mb-2`} />
              <h3 className="font-display text-sm font-semibold text-foreground mb-1">{s.title}</h3>
              <p className="text-muted-foreground text-xs leading-snug">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-gallery bg-card p-6 md:p-8 max-w-3xl mx-auto space-y-4"
        >
          <h3 className="font-display text-xl font-bold text-foreground text-center mb-2">Start Your Order</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-body text-muted-foreground mb-1 block">Your Name</label>
              <input
                value={name}
                onChange={e => setName(e.target.value)}
                required
                maxLength={100}
                className="w-full px-3 py-2 rounded-md bg-background border border-border focus:border-primary outline-none text-sm"
              />
            </div>
            <div>
              <label className="text-xs font-body text-muted-foreground mb-1 block">Phone / Email</label>
              <input
                value={contact}
                onChange={e => setContact(e.target.value)}
                required
                maxLength={120}
                className="w-full px-3 py-2 rounded-md bg-background border border-border focus:border-primary outline-none text-sm"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="text-xs font-body text-muted-foreground mb-1 block">Product Type</label>
              <select value={productType} onChange={e => setProductType(e.target.value)} className="w-full px-3 py-2 rounded-md bg-background border border-border focus:border-primary outline-none text-sm">
                {productTypes.map(p => <option key={p}>{p}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-body text-muted-foreground mb-1 block">Size</label>
              <select value={size} onChange={e => setSize(e.target.value)} className="w-full px-3 py-2 rounded-md bg-background border border-border focus:border-primary outline-none text-sm">
                {sizes.map(p => <option key={p}>{p}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-body text-muted-foreground mb-1 block">Frame Style</label>
              <select value={frame} onChange={e => setFrame(e.target.value)} className="w-full px-3 py-2 rounded-md bg-background border border-border focus:border-primary outline-none text-sm">
                {frameStyles.map(p => <option key={p}>{p}</option>)}
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-body text-muted-foreground mb-1 block">Describe Your Idea</label>
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              rows={3}
              maxLength={1000}
              className="w-full px-3 py-2 rounded-md bg-background border border-border focus:border-primary outline-none text-sm"
              placeholder="Colors, mood, subject, inspiration..."
            />
          </div>

          <div>
            <label className="text-xs font-body text-muted-foreground mb-1 block">Upload Reference Photo (optional)</label>
            <input
              type="file"
              accept="image/*"
              onChange={e => setFile(e.target.files?.[0] || null)}
              className="w-full text-sm file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:bg-primary file:text-primary-foreground file:cursor-pointer"
            />
            <AnimatePresence>
              {file && (
                <motion.p
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="text-xs text-muted-foreground mt-1"
                >
                  Selected: {file.name}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="btn-glow w-full bg-primary text-primary-foreground font-body font-semibold py-3 rounded-md disabled:opacity-60"
          >
            {submitting ? 'Sending...' : 'Submit Order Request'}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default PersonalizeOrderSection;
