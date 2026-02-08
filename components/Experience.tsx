
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  const accolades = [
    {
      icon: '★',
      title: 'Best All-Girls Team Award',
      event: 'PEC HACKS 3.0 — Hackathon',
      color: 'violet' as const,
    },
    {
      icon: '2',
      title: '2nd Place — Coding Contest',
      event: 'MIT Chennai Symposium',
      color: 'cyan' as const,
    },
  ];

  return (
    <section id="experience" className="py-32 bg-background relative overflow-hidden">
      {/* Cinematic ambient lights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-accentCyan/[0.04] rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 right-[10%] w-[400px] h-[400px] bg-accentViolet/[0.04] rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* ─── Section Header ─── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="block h-[1px] bg-gradient-to-r from-transparent to-accentCyan"
              />
              <span className="text-accentCyan text-xs font-bold tracking-[0.4em] uppercase">
                Experience
              </span>
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="block h-[1px] bg-gradient-to-l from-transparent to-accentCyan"
              />
            </div>
            <h3 className="text-4xl md:text-6xl font-display font-bold leading-tight">
              Where I've{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accentCyan to-accentViolet">
                Contributed
              </span>
            </h3>
          </motion.div>

          {/* ─── Experience Cards ─── */}
          <div className="grid gap-8 mb-20">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="group relative"
                >
                  {/* Hover glow */}
                  <div className={`absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${idx % 2 === 0 ? 'bg-gradient-to-r from-accentCyan/20 via-accentCyan/5 to-transparent' : 'bg-gradient-to-r from-accentViolet/20 via-accentViolet/5 to-transparent'} blur-xl`} />

                  <div className={`relative rounded-3xl border backdrop-blur-md overflow-hidden transition-all duration-700 ${idx % 2 === 0 ? 'border-white/[0.06] hover:border-accentCyan/25' : 'border-white/[0.06] hover:border-accentViolet/25'} bg-white/[0.02]`}>
                    
                    {/* Top accent bar */}
                    <div className={`h-[2px] ${idx % 2 === 0 ? 'bg-gradient-to-r from-accentCyan via-accentCyan/40 to-transparent' : 'bg-gradient-to-r from-accentViolet via-accentViolet/40 to-transparent'}`} />

                    <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                      
                      {/* Left: Number / index */}
                      <div className="flex-shrink-0 flex items-center gap-6">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-2xl md:text-3xl font-display font-black ${idx % 2 === 0 ? 'bg-accentCyan/[0.08] text-accentCyan border border-accentCyan/15' : 'bg-accentViolet/[0.08] text-accentViolet border border-accentViolet/15'}`}
                        >
                          0{idx + 1}
                        </motion.div>

                        {/* Vertical divider — desktop only */}
                        <div className={`hidden md:block w-[1px] h-16 ${idx % 2 === 0 ? 'bg-gradient-to-b from-accentCyan/30 to-transparent' : 'bg-gradient-to-b from-accentViolet/30 to-transparent'}`} />
                      </div>

                      {/* Center: Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                          <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-white transition-colors duration-300 leading-snug">
                            {exp.title}
                          </h4>
                          <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] whitespace-nowrap w-fit ${idx % 2 === 0 ? 'bg-accentCyan/10 text-accentCyan/80 border border-accentCyan/15' : 'bg-accentViolet/10 text-accentViolet/80 border border-accentViolet/15'}`}>
                            <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${idx % 2 === 0 ? 'bg-accentCyan' : 'bg-accentViolet'}`} />
                            {exp.period}
                          </span>
                        </div>

                        <p className={`text-sm font-semibold mb-3 ${idx % 2 === 0 ? 'text-accentCyan/70' : 'text-accentViolet/70'}`}>
                          @ {exp.company}
                        </p>

                        <p className="text-white/35 text-sm leading-relaxed max-w-2xl">
                          {exp.details}
                        </p>
                      </div>

                      {/* Right: Arrow indicator */}
                      <div className="hidden md:flex items-center">
                        <motion.div
                          animate={{ x: [0, 6, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                          className={`w-10 h-10 rounded-full flex items-center justify-center border ${idx % 2 === 0 ? 'border-accentCyan/15 text-accentCyan/40 group-hover:border-accentCyan/40 group-hover:text-accentCyan' : 'border-accentViolet/15 text-accentViolet/40 group-hover:border-accentViolet/40 group-hover:text-accentViolet'} transition-all duration-500`}
                        >
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 8h10M9 4l4 4-4 4" />
                          </svg>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* ─── Accolades Section ─── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Background glow */}
            <motion.div
              animate={{ opacity: [0.03, 0.08, 0.03] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-accentViolet/10 via-accentCyan/5 to-accentViolet/10 rounded-3xl blur-2xl"
            />

            <div className="relative rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-md overflow-hidden">
              {/* Top gradient bar */}
              <div className="h-[2px] bg-gradient-to-r from-accentViolet via-accentCyan to-accentViolet" />

              <div className="p-8 md:p-12">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10">
                  <motion.div
                    animate={{ rotate: [0, -8, 8, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 4 }}
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accentViolet/20 to-accentCyan/10 border border-accentViolet/15 flex items-center justify-center text-2xl"
                  >
                    🏆
                  </motion.div>
                  <div>
                    <h4 className="text-2xl md:text-3xl font-bold">
                      Accolades &{' '}
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-accentCyan to-accentViolet">
                        Recognition
                      </span>
                    </h4>
                    <p className="text-white/25 text-xs uppercase tracking-[0.3em] mt-1">
                      Milestones achieved
                    </p>
                  </div>
                </div>

                {/* Awards grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {accolades.map((award, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.15 }}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className={`group/award relative p-6 rounded-2xl border transition-all duration-500 cursor-default ${award.color === 'violet' ? 'border-accentViolet/10 hover:border-accentViolet/30 bg-accentViolet/[0.03]' : 'border-accentCyan/10 hover:border-accentCyan/30 bg-accentCyan/[0.03]'}`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold flex-shrink-0 transition-shadow duration-500 ${award.color === 'violet' ? 'bg-accentViolet/15 text-accentViolet group-hover/award:shadow-[0_0_25px_rgba(112,0,255,0.25)]' : 'bg-accentCyan/15 text-accentCyan group-hover/award:shadow-[0_0_25px_rgba(0,242,255,0.25)]'}`}>
                          {award.icon}
                        </div>
                        <div className="min-w-0">
                          <p className={`font-bold text-base leading-snug transition-colors duration-300 ${award.color === 'violet' ? 'group-hover/award:text-accentViolet' : 'group-hover/award:text-accentCyan'}`}>
                            {award.title}
                          </p>
                          <p className="text-[11px] text-white/25 uppercase tracking-[0.15em] mt-2 font-medium">
                            {award.event}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
