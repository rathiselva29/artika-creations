import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const colorThemes = [
  { name: 'Orange', class: '', color: 'hsl(24 80% 55%)' },
  { name: 'Purple', class: 'theme-purple', color: 'hsl(270 60% 55%)' },
  { name: 'Blue', class: 'theme-blue', color: 'hsl(210 70% 50%)' },
  { name: 'Pink', class: 'theme-pink', color: 'hsl(340 65% 55%)' },
];

const ThemeSwitcher = () => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [activeTheme, setActiveTheme] = useState('');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  useEffect(() => {
    // Remove all theme classes then add active
    colorThemes.forEach(t => {
      if (t.class) document.documentElement.classList.remove(t.class);
    });
    if (activeTheme) document.documentElement.classList.add(activeTheme);
  }, [activeTheme]);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-[90] w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Theme Switcher"
      >
        <i className="fas fa-palette text-lg" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-20 right-6 z-[90] bg-card rounded-xl shadow-2xl p-5 w-56 border border-border"
          >
            <h4 className="font-display text-sm font-semibold text-foreground mb-3">Theme Settings</h4>

            {/* Dark/Light toggle */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
              <span className="text-sm text-muted-foreground font-body">Dark Mode</span>
              <button
                onClick={() => setDark(!dark)}
                className={`w-10 h-5 rounded-full relative transition-colors ${dark ? 'bg-primary' : 'bg-muted'}`}
              >
                <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-card shadow transition-transform ${dark ? 'translate-x-5' : 'translate-x-0.5'}`} />
              </button>
            </div>

            {/* Color themes */}
            <p className="text-xs text-muted-foreground font-body mb-2">Color Theme</p>
            <div className="grid grid-cols-4 gap-2">
              {colorThemes.map(t => (
                <button
                  key={t.name}
                  onClick={() => setActiveTheme(t.class)}
                  className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 ${activeTheme === t.class ? 'border-foreground scale-110' : 'border-transparent'}`}
                  style={{ backgroundColor: t.color }}
                  title={t.name}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ThemeSwitcher;
