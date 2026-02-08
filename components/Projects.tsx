
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Ambient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -40, 0], opacity: [0.02, 0.06, 0.02] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-0 right-[10%] w-[500px] h-[500px] bg-accentViolet rounded-full blur-[180px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div initial={{ width: 0 }} whileInView={{ width: 32 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-[1px] bg-accentCyan" />
              <span className="text-accentCyan font-display text-xs font-bold tracking-[0.4em] uppercase">Projects</span>
            </div>
            <h3 className="text-4xl md:text-6xl font-display font-bold tracking-tight">
              Featured{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white/20 to-white/5 italic">Output.</span>
            </h3>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-white/30 max-w-sm text-base font-light leading-relaxed"
          >
            A curated index of research papers, IoT systems, and full-stack implementations.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.9,
                delay: (idx % 2) * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative"
            >
              {/* Hover glow */}
              <div className={`absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl ${idx % 2 === 0 ? 'bg-accentCyan/8' : 'bg-accentViolet/8'}`} />

              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-white/[0.06] hover:border-accentCyan/20 transition-all duration-700 bg-[#0a0a0a]">
                {/* Background Image */}
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  className="absolute inset-0"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/60 to-transparent" />
                </motion.div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{
                          scale: 1.08,
                          backgroundColor: 'rgba(0, 242, 255, 0.12)',
                          borderColor: 'rgba(0, 242, 255, 0.4)',
                          color: '#00f2ff',
                        }}
                        className="px-3 py-1 bg-white/[0.04] border border-white/[0.08] rounded-full text-[10px] font-bold tracking-widest uppercase text-white/30 cursor-pointer transition-colors duration-300"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Title */}
                  <h4 className="text-2xl md:text-3xl font-display font-bold mb-3 group-hover:translate-x-1 transition-transform duration-500">
                    {project.title}
                  </h4>

                  {/* Description */}
                  <p className="text-white/30 text-sm leading-relaxed mb-6 max-w-md group-hover:text-white/50 transition-colors duration-500">
                    {project.description}
                  </p>

                  {/* Links */}
                  <div className="flex items-center gap-6">
                    {project.links.github && (
                      <motion.a
                        whileHover={{ scale: 1.08, x: 4 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.links.github}
                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-white/40 hover:text-accentCyan transition-colors duration-300"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                        Source Code
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                      </motion.a>
                    )}
                    {project.links.demo && (
                      <motion.a
                        whileHover={{ scale: 1.08, x: 4 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.links.demo}
                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-white/40 hover:text-accentViolet transition-colors duration-300"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
                        Live Demo
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project number watermark */}
                <div className="absolute top-6 right-8 text-white/[0.03] font-display font-black text-7xl select-none group-hover:text-white/[0.06] transition-colors duration-700">
                  0{idx + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
