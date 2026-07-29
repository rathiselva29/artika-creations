import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import FrameOptionsSection from '@/components/FrameOptionsSection';
import SizeGuideSection from '@/components/SizeGuideSection';
import ShopCategoriesSection from '@/components/ShopCategoriesSection';
import { pricingGroups, waLink } from '@/data/business';

const Pricing = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-28 md:pt-32">
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-14"
          >
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Pricing</h1>
            <p className="text-muted-foreground font-body max-w-md mx-auto">
              Simple, affordable pricing for handmade art and design work.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingGroups.map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.12 }}
                className="card-gallery bg-card p-8 group flex flex-col"
              >
                <div className="w-14 h-14 mb-5 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <i className={`fas ${g.icon}`} />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">{g.title}</h3>
                <ul className="space-y-2 mb-6">
                  {g.items.map(it => (
                    <li key={it.label} className="flex items-baseline justify-between gap-3 font-body text-sm">
                      <span className="text-muted-foreground">{it.label}</span>
                      {it.price !== '—' && <span className="font-semibold text-foreground">{it.price}</span>}
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink(`Hi, I'd like to know more about your ${g.title} pricing.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-glow mt-auto inline-block text-center bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-body font-semibold text-xs uppercase tracking-wider"
                >
                  <i className="fa-brands fa-whatsapp mr-2" />Order on WhatsApp
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <FrameOptionsSection />
      <SizeGuideSection />
      <ShopCategoriesSection />
    </main>
    <FooterSection />
    <ThemeSwitcher />
  </div>
);

export default Pricing;
