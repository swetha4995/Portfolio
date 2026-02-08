
import React from 'react';
import { motion } from 'framer-motion';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-background overflow-hidden">
      {/* Primary mesh gradients — larger & softer */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 right-0 w-[700px] h-[700px] bg-accentCyan/[0.06] blur-[160px] rounded-full translate-x-1/3 -translate-y-1/3"
      />
      <motion.div
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-accentViolet/[0.06] blur-[180px] rounded-full -translate-x-1/3 translate-y-1/3"
      />

      {/* Secondary accent orbs */}
      <motion.div
        animate={{ y: [0, -50, 0], opacity: [0.02, 0.05, 0.02] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-accentCyan/[0.03] blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 0.5px, transparent 0.5px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Horizontal scan lines (cinematic feel) */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
        }}
      />

      {/* Top-left corner vignette */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-accentCyan/[0.02] to-transparent pointer-events-none" />

      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay">
        <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>
    </div>
  );
};

export default Background;
