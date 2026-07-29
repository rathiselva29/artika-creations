import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import { services, waLink } from '@/data/business';

const Services = () => (
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
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Services</h1>
            <p className="text-muted-foreground font-body max-w-md mx-auto">
              Hand-crafted art and design work, made to order for you.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.12 }}
                className="card-gallery bg-card p-8 text-center group flex flex-col"
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <i className={`fas ${s.icon}`} />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{s.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">{s.description}</p>
                {s.price && (
                  <p className="font-body text-sm font-semibold text-primary mb-5">{s.price}</p>
                )}
                <a
                  href={waLink(`Hi, I'd like to request a custom order for: ${s.title}`)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-glow mt-auto inline-block bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-body font-semibold text-xs uppercase tracking-wider"
                >
                  <i className="fa-brands fa-whatsapp mr-2" />Request Custom Order
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <WhyChooseUsSection />
    </main>
    <FooterSection />
    <ThemeSwitcher />
  </div>
);

export default Services;
