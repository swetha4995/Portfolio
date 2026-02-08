
import React from 'react';
import { motion } from 'framer-motion';

const socials = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/swethalatha-s-10298b2a2/',
    color: 'accentCyan',
    hoverBg: 'rgba(0, 242, 255, 0.12)',
    hoverBorder: 'rgba(0, 242, 255, 0.4)',
    hoverShadow: '0 0 30px rgba(0, 242, 255, 0.3)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/swetha4995/',
    color: 'white',
    hoverBg: 'rgba(255, 255, 255, 0.08)',
    hoverBorder: 'rgba(255, 255, 255, 0.3)',
    hoverShadow: '0 0 30px rgba(255, 255, 255, 0.15)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    name: 'Email',
    href: 'mailto:swetha010206@gmail.com',
    color: 'accentViolet',
    hoverBg: 'rgba(112, 0, 255, 0.12)',
    hoverBorder: 'rgba(112, 0, 255, 0.4)',
    hoverShadow: '0 0 30px rgba(112, 0, 255, 0.3)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M22 4l-10 8L2 4"/>
      </svg>
    ),
  },
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 relative">
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 40, 0], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 right-[20%] w-[500px] h-[500px] bg-accentCyan rounded-full blur-[180px]"
        />
        <motion.div
          animate={{ x: [0, -30, 0], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-0 left-[20%] w-[400px] h-[400px] bg-accentViolet rounded-full blur-[160px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <motion.span initial={{ width: 0 }} whileInView={{ width: 48 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="block h-[1px] bg-gradient-to-r from-transparent to-accentCyan" />
              <span className="text-accentCyan text-xs font-bold tracking-[0.4em] uppercase">Connect</span>
              <motion.span initial={{ width: 0 }} whileInView={{ width: 48 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="block h-[1px] bg-gradient-to-l from-transparent to-accentCyan" />
            </div>
            <h3 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Let's Build{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accentCyan to-accentViolet">
                Together
              </span>
            </h3>
            <p className="text-white/35 text-lg font-light max-w-lg mx-auto">
              Open to research collaborations, internships, and interesting projects.
            </p>
          </motion.div>

          {/* Social Links — Large branded cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14"
          >
            {socials.map((s, i) => (
              <motion.a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{
                  y: -6,
                  scale: 1.03,
                  backgroundColor: s.hoverBg,
                  borderColor: s.hoverBorder,
                  boxShadow: s.hoverShadow,
                }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-4 p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-md transition-all duration-500 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/50 group-hover:text-white transition-colors duration-300">
                  {s.icon}
                </div>
                <div>
                  <p className="font-bold text-sm group-hover:text-white transition-colors">{s.name}</p>
                  <p className="text-[11px] text-white/25 mt-0.5 truncate max-w-[180px]">
                    {s.href.replace('mailto:', '').replace('https://', '').replace('www.', '')}
                  </p>
                </div>
                <motion.svg
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-4 h-4 ml-auto text-white/20 group-hover:text-white/60 transition-colors"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </motion.svg>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-md overflow-hidden"
          >
            {/* Top gradient bar */}
            <div className="h-[2px] bg-gradient-to-r from-accentCyan via-accentViolet to-accentCyan" />

            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 rounded-full bg-accentCyan animate-pulse" />
                <h4 className="text-lg font-bold">Send a Message</h4>
              </div>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-5">
                  <div className="relative group">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-5 py-4 text-sm focus:border-accentCyan/50 focus:shadow-[0_0_20px_rgba(0,242,255,0.1)] outline-none transition-all duration-500 placeholder:text-white/20"
                    />
                  </div>
                  <div className="relative group">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-5 py-4 text-sm focus:border-accentCyan/50 focus:shadow-[0_0_20px_rgba(0,242,255,0.1)] outline-none transition-all duration-500 placeholder:text-white/20"
                    />
                  </div>
                  <div className="relative group">
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-5 py-4 text-sm focus:border-accentCyan/50 focus:shadow-[0_0_20px_rgba(0,242,255,0.1)] outline-none transition-all duration-500 placeholder:text-white/20"
                    />
                  </div>
                </div>

                <div className="space-y-5">
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-5 py-4 text-sm focus:border-accentViolet/50 focus:shadow-[0_0_20px_rgba(112,0,255,0.1)] outline-none transition-all duration-500 resize-none placeholder:text-white/20 h-[calc(100%-68px)]"
                  />
                  <motion.button
                    whileHover={{
                      scale: 1.02,
                      boxShadow: '0 0 40px rgba(0, 242, 255, 0.4)',
                      y: -2,
                    }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-accentCyan to-accentCyan/80 text-background font-bold rounded-xl transition-all duration-300 text-sm uppercase tracking-widest"
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Bottom info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-10 text-center text-white/20 text-xs tracking-[0.2em] uppercase"
          >
            swetha010206@gmail.com &bull; Coimbatore, India
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
