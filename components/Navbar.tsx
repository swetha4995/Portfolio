
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'py-3' : 'py-6'}`}
    >
      <div className={`container mx-auto px-6 transition-all duration-700 ${scrolled ? 'max-w-5xl' : ''}`}>
        <div className={`flex justify-between items-center transition-all duration-700 ${scrolled ? 'bg-background/70 backdrop-blur-2xl border border-white/[0.06] rounded-2xl px-6 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.4)]' : ''}`}>
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-display text-xl font-bold tracking-tighter relative"
          >
            <span className="text-accentCyan">S</span>
            <span>WETHA</span>
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-accentViolet"
            >.</motion.span>
          </motion.a>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.toLowerCase();
              return (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-4 py-2 text-xs font-medium tracking-[0.15em] uppercase transition-all duration-300 rounded-lg ${isActive ? 'text-accentCyan' : 'text-white/40 hover:text-white/80'}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-accentCyan/[0.08] border border-accentCyan/15 rounded-lg"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item}</span>
                </motion.a>
              );
            })}
          </div>

          {/* Hire Me CTA */}
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 25px rgba(0, 242, 255, 0.35)',
            }}
            whileTap={{ scale: 0.95 }}
            className="relative px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accentCyan/20 to-accentViolet/20 border border-accentCyan/20 rounded-full transition-all duration-500 group-hover:from-accentCyan/30 group-hover:to-accentViolet/30" />
            <span className="relative text-accentCyan">Hire Me</span>
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
