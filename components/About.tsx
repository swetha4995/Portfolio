
import React from 'react';
import { motion, Variants } from 'framer-motion';

const About: React.FC = () => {
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1] as any,
      },
    }),
  };

  const stats = [
    { value: '8.9', label: 'Academic CGPA', color: 'accentCyan' },
    { value: 'Patent', label: 'Published Innovation', color: 'accentViolet' },
    { value: 'IEEE', label: 'Research Author', color: 'accentCyan' },
    { value: '5+', label: 'Major Projects', color: 'accentViolet' },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, 30, 0], opacity: [0.03, 0.07, 0.03] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-accentViolet rounded-full blur-[200px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 md:order-1">
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-[1px] bg-accentCyan"
              />
              <span className="text-accentCyan font-display text-xs font-bold tracking-[0.4em] uppercase">About Me</span>
            </motion.div>

            {/* Title */}
            <motion.h3
              custom={1}
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-10 leading-[1.1]"
            >
              Architecting{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white/30 to-white/10 italic">intelligent</span>
              <br />
              solutions from the{' '}
              <motion.span
                animate={{ textShadow: ['0 0 0px rgba(112,0,255,0)', '0 0 20px rgba(112,0,255,0.5)', '0 0 0px rgba(112,0,255,0)'] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-accentViolet"
              >
                edge
              </motion.span>{' '}
              to the cloud.
            </motion.h3>

            {/* Paragraphs */}
            <div className="space-y-5">
              {[
                "I am a Computer Science & IoT engineer driven by the intersection of hardware and high-level software. My approach blends rigorous research with agile development.",
                "From building GPS-integrated retractable speed breakers to designing context-aware AI chatbots, I focus on systems that solve tangible, real-world problems through data-driven intelligence."
              ].map((paragraph, i) => (
                <motion.p
                  key={i}
                  custom={i + 2}
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-base md:text-lg text-white/40 leading-relaxed font-light"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-10 border-t border-white/[0.05]"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="cursor-default text-center md:text-left"
                >
                  <motion.p
                    whileHover={{ textShadow: stat.color === 'accentCyan' ? '0 0 20px rgba(0,242,255,0.6)' : '0 0 20px rgba(112,0,255,0.6)' }}
                    className={`text-3xl font-display font-bold ${stat.color === 'accentCyan' ? 'text-accentCyan' : 'text-accentViolet'} mb-1 transition-all`}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-[9px] text-white/25 uppercase tracking-[0.15em] font-bold leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 md:order-2 relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group">
              {/* Image overlay */}
              <motion.div
                whileHover={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0 bg-accentViolet/20 mix-blend-color z-10 opacity-60"
              />
              <img
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800"
                alt="Engineering Innovation"
                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              {/* Inner border frame */}
              <div className="absolute inset-0 border border-white/[0.06] m-5 rounded-2xl z-20 pointer-events-none group-hover:border-accentCyan/20 group-hover:m-4 transition-all duration-700" />

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 z-30 hidden md:block"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="p-5 rounded-2xl border border-white/[0.08] bg-background/90 backdrop-blur-xl"
                >
                  <p className="text-accentCyan font-bold text-2xl uppercase leading-none tracking-tight">IoT</p>
                  <p className="text-[8px] text-white/30 uppercase font-bold tracking-widest mt-1">Specialization</p>
                </motion.div>
              </motion.div>

              {/* Corner scanning animation */}
              <motion.div
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-5 left-5 z-20 pointer-events-none"
              >
                <div className="w-6 h-[1px] bg-accentCyan" />
                <div className="w-[1px] h-6 bg-accentCyan" />
              </motion.div>
              <motion.div
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="absolute bottom-5 right-5 z-20 pointer-events-none"
              >
                <div className="w-6 h-[1px] bg-accentViolet ml-auto" />
                <div className="w-[1px] h-6 bg-accentViolet ml-auto" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
