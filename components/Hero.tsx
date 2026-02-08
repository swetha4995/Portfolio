
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: 0.6 + i * 0.04,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const titleWord1 = 'Engineering';
  const titleWord2 = 'Intelligence.';

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Cinematic light streaks */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: '200%', opacity: [0, 0.3, 0] }}
          transition={{ duration: 3, delay: 1.5, ease: 'easeInOut' }}
          className="absolute top-1/3 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-accentCyan to-transparent"
        />
        <motion.div
          initial={{ x: '200%', opacity: 0 }}
          animate={{ x: '-100%', opacity: [0, 0.2, 0] }}
          transition={{ duration: 4, delay: 2, ease: 'easeInOut' }}
          className="absolute top-2/3 w-[400px] h-[1px] bg-gradient-to-r from-transparent via-accentViolet to-transparent"
        />
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="z-10"
        >
          {/* Status badge with typing effect */}
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accentCyan/[0.08] border border-accentCyan/20 mb-8"
          >
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-accentCyan"
            />
            <span className="text-accentCyan text-xs font-bold tracking-[0.2em] uppercase">B.E CSE (IoT) Student</span>
          </motion.div>

          {/* Cinematic Title — letter by letter reveal */}
          <h1 className="font-display text-5xl md:text-8xl font-bold leading-[1.05] mb-6 tracking-tighter">
            <span className="block overflow-hidden">
              {titleWord1.split('').map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                  style={{ transformOrigin: 'bottom' }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
            <span className="block overflow-hidden">
              {titleWord2.split('').map((char, i) => (
                <motion.span
                  key={i}
                  custom={i + titleWord1.length}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-accentCyan to-accentViolet"
                  style={{ transformOrigin: 'bottom' }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Subtitle with staggered line reveal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-3">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="h-[1px] bg-accentCyan/40"
              />
              <p className="text-lg md:text-xl text-white/40 font-light">
                Full-Stack &bull; IoT &bull; AI &bull; Research-Driven
              </p>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.8 }}
              className="text-white/25 text-base md:text-lg font-light max-w-md pl-[52px]"
            >
              Shaping the future through smart systems and scalable solutions.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 50px rgba(0, 242, 255, 0.5)',
                y: -3,
              }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="group relative px-8 py-4 rounded-xl bg-accentCyan text-background font-bold transition-all duration-300 overflow-hidden"
            >
              <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="absolute inset-0 w-1/3 bg-white/20 skew-x-12 blur-sm"
              />
              <span className="relative">View My Work</span>
            </motion.a>
            <motion.a
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(112, 0, 255, 0.15)',
                boxShadow: '0 0 35px rgba(112, 0, 255, 0.4)',
                borderColor: 'rgba(112, 0, 255, 0.5)',
                y: -3,
              }}
              whileTap={{ scale: 0.95 }}
              href="/Swethalatha-Resume.pdf"
              download="Swethalatha-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 transition-all duration-300 font-bold inline-flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="flex items-center gap-5 mt-12"
          >
            <div className="h-[1px] w-8 bg-white/10" />
            {[
              { href: 'https://www.linkedin.com/in/swethalatha-s-10298b2a2/', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
              { href: 'https://github.com/swetha4995/', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg> },
              { href: 'mailto:swetha010206@gmail.com', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4l-10 8L2 4"/></svg> },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3, color: '#00f2ff' }}
                whileTap={{ scale: 0.9 }}
                className="text-white/30 hover:text-accentCyan transition-colors duration-300"
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Visual — Enhanced Orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          className="relative hidden md:flex justify-center items-center h-full"
        >
          <div className="relative w-96 h-96 flex items-center justify-center">
            {/* Ambient glow */}
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 bg-accentViolet rounded-full blur-[120px]"
            />

            {/* Particle orbits */}
            {[0, 1, 2].map((ring) => (
              <motion.div
                key={ring}
                animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
                transition={{ duration: 15 + ring * 5, repeat: Infinity, ease: 'linear' }}
                className="absolute rounded-full border border-white/[0.04]"
                style={{
                  inset: `${ring * 40}px`,
                  transform: `rotateX(${60 + ring * 15}deg) rotateZ(${ring * 30}deg)`,
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Orbiting dot */}
                <motion.div
                  className={`absolute w-2 h-2 rounded-full ${ring === 0 ? 'bg-accentCyan shadow-[0_0_10px_rgba(0,242,255,0.8)]' : ring === 1 ? 'bg-accentViolet shadow-[0_0_10px_rgba(112,0,255,0.8)]' : 'bg-white/50 shadow-[0_0_10px_rgba(255,255,255,0.5)]'}`}
                  style={{ top: '-4px', left: '50%', transform: 'translateX(-50%)' }}
                />
              </motion.div>
            ))}

            {/* Dashed inner ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-20 border border-dashed border-white/[0.06] rounded-full"
            />

            {/* Core */}
            <motion.div
              animate={{
                rotate: [45, 405],
                scale: [1, 1.08, 1],
                boxShadow: [
                  '0 0 40px rgba(0, 242, 255, 0.3), inset 0 0 40px rgba(0, 242, 255, 0.1)',
                  '0 0 60px rgba(112, 0, 255, 0.5), inset 0 0 40px rgba(112, 0, 255, 0.1)',
                  '0 0 40px rgba(0, 242, 255, 0.3), inset 0 0 40px rgba(0, 242, 255, 0.1)',
                ],
              }}
              transition={{
                rotate: { duration: 12, repeat: Infinity, ease: 'linear' },
                scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                boxShadow: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
              }}
              className="relative w-28 h-28 bg-gradient-to-br from-accentCyan via-accentViolet to-accentCyan rounded-3xl flex items-center justify-center overflow-hidden"
            >
              <motion.div
                animate={{ scale: [1, 1.8, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-3 h-3 bg-white rounded-full shadow-[0_0_20px_#fff]"
              />
              <motion.div
                animate={{ top: ['-100%', '200%'] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                className="absolute left-0 right-0 h-[2px] bg-white/30 blur-[1px]"
              />
            </motion.div>
          </div>

          {/* Floating info cards */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 -right-2 z-20"
          >
            <motion.div
              whileHover={{ scale: 1.08, borderColor: 'rgba(0, 242, 255, 0.3)' }}
              className="p-4 rounded-2xl border border-white/[0.06] bg-background/80 backdrop-blur-xl"
            >
              <p className="text-[10px] font-bold text-accentCyan uppercase tracking-widest mb-1">Latest Project</p>
              <p className="text-sm font-medium">Smart Speed Breaker</p>
            </motion.div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute bottom-1/4 -left-6 z-20"
          >
            <motion.div
              whileHover={{ scale: 1.08, borderColor: 'rgba(112, 0, 255, 0.3)' }}
              className="p-4 rounded-2xl border border-white/[0.06] bg-background/80 backdrop-blur-xl"
            >
              <p className="text-[10px] font-bold text-accentViolet uppercase tracking-widest mb-1">Status</p>
              <p className="text-sm font-medium">IEEE Author | Patent Holder</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/30">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/15 flex justify-center pt-1.5"
        >
          <motion.div
            animate={{ opacity: [1, 0], y: [0, 10] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1.5 rounded-full bg-accentCyan"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
