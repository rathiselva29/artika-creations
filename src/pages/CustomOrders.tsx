import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import FrameOptionsSection from '@/components/FrameOptionsSection';
import SizeGuideSection from '@/components/SizeGuideSection';
import { orderSteps, waLink, INSTAGRAM_URL, EMAIL_URL } from '@/data/business';

const CustomOrders = () => (
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
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Custom Orders</h1>
            <p className="text-muted-foreground font-body max-w-md mx-auto">
              From your first idea to the artwork on your wall — here is how it works.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-14">
            {orderSteps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.12 }}
                className="card-gallery bg-card p-5 text-center"
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

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={waLink('Hi, I would like to place a custom order!')}
              target="_blank"
              rel="noreferrer"
              className="btn-glow flex items-center gap-2 px-6 py-3 rounded-lg bg-card text-foreground font-body font-medium shadow-md hover:shadow-lg transition-all"
            >
              <i className="fa-brands fa-whatsapp text-lg" />WhatsApp Order
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-glow flex items-center gap-2 px-6 py-3 rounded-lg bg-card text-foreground font-body font-medium shadow-md hover:shadow-lg transition-all"
            >
              <i className="fa-brands fa-instagram text-lg" />Instagram
            </a>
            <a
              href={EMAIL_URL}
              className="btn-glow flex items-center gap-2 px-6 py-3 rounded-lg bg-card text-foreground font-body font-medium shadow-md hover:shadow-lg transition-all"
            >
              <i className="fas fa-envelope text-lg" />Email
            </a>
          </div>
        </div>
      </section>
      <SizeGuideSection />
      <FrameOptionsSection />
    </main>
    <FooterSection />
    <ThemeSwitcher />
  </div>
);

export default CustomOrders;
