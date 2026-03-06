import { motion } from 'framer-motion';
import artistImg from '@/assets/artist-profile.png';

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Floating paint splashes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 animate-paint-splash" />
        <div className="absolute top-40 right-20 w-48 h-48 rounded-full bg-accent/10 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-1/4 w-24 h-24 rounded-full bg-gallery-gold/15 animate-paint-splash" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-20 right-1/3 w-40 h-40 rounded-full bg-gallery-rose/10 animate-float" style={{ animationDelay: '1s' }} />
        {/* Paint brush strokes */}
        <div className="absolute top-1/3 left-5 text-primary/15 animate-float" style={{ fontSize: '80px', animationDelay: '3s' }}>
          <i className="fas fa-paint-brush" />
        </div>
        <div className="absolute bottom-1/4 right-10 text-accent/15 animate-paint-splash" style={{ fontSize: '60px', animationDelay: '5s' }}>
          <i className="fas fa-palette" />
        </div>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left order-2 md:order-1"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Every painting tells a <span className="text-primary italic">story</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0">
              Welcome to my world of colors and creativity. Each canvas holds a piece of my soul.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button onClick={() => scrollTo('gallery')} className="btn-glow bg-primary text-primary-foreground px-8 py-3 rounded-lg font-body font-semibold text-sm uppercase tracking-wider">
                <i className="fas fa-images mr-2" />View My Gallery
              </button>
              <button onClick={() => scrollTo('contact')} className="btn-glow border-2 border-primary text-primary px-8 py-3 rounded-lg font-body font-semibold text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground">
                <i className="fas fa-envelope mr-2" />Contact Me
              </button>
            </div>
          </motion.div>

          {/* Right - Artist Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center order-1 md:order-2"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-500" />
              <img
                src={artistImg}
                alt="Artist portrait"
                className="relative w-64 md:w-80 lg:w-96 rounded-2xl shadow-2xl img-zoom"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
