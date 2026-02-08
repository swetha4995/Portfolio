
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { SKILLS } from '../constants';

const iconMap: Record<string, JSX.Element> = {
  Frontend: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
    </svg>
  ),
  Backend: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><circle cx="6" cy="6" r="1"/><circle cx="6" cy="18" r="1"/>
    </svg>
  ),
  'IoT & Embedded': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>
    </svg>
  ),
  'AI / ML': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a4 4 0 014 4c0 1.5-.8 2.8-2 3.5v1h-4v-1A4 4 0 0112 2z"/><path d="M8 14h8M9 18h6M10 22h4"/><path d="M8 10.5C6 11.5 5 13 5 15M16 10.5c2 1 3 2.5 3 4.5"/>
    </svg>
  ),
};

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any },
    },
  };

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 20, 0], opacity: [0.02, 0.06, 0.02] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accentCyan rounded-full blur-[180px] -translate-y-1/2"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <motion.div initial={{ width: 0 }} whileInView={{ width: 32 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-[1px] bg-accentCyan" />
            <span className="text-accentCyan font-display text-xs font-bold tracking-[0.4em] uppercase">Skills</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-display font-bold leading-tight">
            Mastering the stack from{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accentCyan to-accentViolet">
              circuits to cloud.
            </span>
          </h3>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SKILLS.map((skill, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Hover glow */}
              <div className={`absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl ${idx % 2 === 0 ? 'bg-accentCyan/10' : 'bg-accentViolet/10'}`} />

              <div className={`relative p-8 rounded-3xl border backdrop-blur-md transition-all duration-700 bg-white/[0.02] ${idx % 2 === 0 ? 'border-white/[0.06] hover:border-accentCyan/25' : 'border-white/[0.06] hover:border-accentViolet/25'}`}>
                {/* Top accent line */}
                <div className={`absolute top-0 left-6 right-6 h-[1px] ${idx % 2 === 0 ? 'bg-gradient-to-r from-transparent via-accentCyan/20 to-transparent' : 'bg-gradient-to-r from-transparent via-accentViolet/20 to-transparent'}`} />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: -10, scale: 1.1 }}
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${idx % 2 === 0 ? 'bg-accentCyan/[0.08] text-accentCyan border border-accentCyan/15 group-hover:shadow-[0_0_25px_rgba(0,242,255,0.2)]' : 'bg-accentViolet/[0.08] text-accentViolet border border-accentViolet/15 group-hover:shadow-[0_0_25px_rgba(112,0,255,0.2)]'}`}
                >
                  {iconMap[skill.category] || <span className="font-display font-bold text-xl">{skill.category[0]}</span>}
                </motion.div>

                {/* Title */}
                <h4 className={`text-xl font-bold mb-5 tracking-tight transition-colors duration-500 ${idx % 2 === 0 ? 'group-hover:text-accentCyan' : 'group-hover:text-accentViolet'}`}>
                  {skill.category}
                </h4>

                {/* Skill items */}
                <ul className="space-y-3">
                  {skill.items.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.08 }}
                      className="flex items-center gap-3 text-white/35 group-hover:text-white/60 transition-colors duration-500"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + i * 0.08, type: 'spring' }}
                        className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${idx % 2 === 0 ? 'bg-accentCyan/50' : 'bg-accentViolet/50'}`}
                      />
                      <span className="text-sm font-medium">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Bottom corner decoration */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`w-6 h-[1px] ${idx % 2 === 0 ? 'bg-accentCyan/30' : 'bg-accentViolet/30'} ml-auto mb-[1px]`} />
                  <div className={`w-[1px] h-6 ${idx % 2 === 0 ? 'bg-accentCyan/30' : 'bg-accentViolet/30'} ml-auto`} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
