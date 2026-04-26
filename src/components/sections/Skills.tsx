'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SkillCubeCanvas } from '@/components/3d/SkillCube';
import { AnimatedText } from '@/components/ui/AnimatedText';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative h-screen w-full bg-transparent overflow-hidden flex flex-col items-center justify-center">
      {/* 3D Canvas Background */}
      <SkillCubeCanvas />

      {/* Overlay Content */}
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col items-center justify-between py-24">
        
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white/90 drop-shadow-2xl flex flex-col items-center">
            <AnimatedText text="Technical" />
            <AnimatedText text="Orbit" className="text-white/40" delay={0.4} />
          </h2>
        </motion.div>

        {/* Footer/Stats */}
        <motion.div 
          className="flex gap-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div>
            <div className="text-4xl font-black text-white">10+</div>
            <div className="text-xs font-bold uppercase tracking-widest text-white/40 mt-1">Core Tech</div>
          </div>
          <div>
            <div className="text-4xl font-black text-white">360°</div>
            <div className="text-xs font-bold uppercase tracking-widest text-white/40 mt-1">Perspective</div>
          </div>
        </motion.div>
      </div>
      
      {/* Vignette Overlay to blend edges */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_20%,#000_100%)] z-0" />
    </section>
  );
};
