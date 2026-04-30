'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HeroSculpture } from '@/components/3d/HeroSculpture';
import { AnimatedText, FadeInText } from '@/components/ui/AnimatedText';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-transparent flex flex-col items-center justify-center">
      
      {/* Abstract Gradient Glows (Luxurious) */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* 3D Glass Sculpture Layer */}
      <HeroSculpture />

      <div className="relative z-10 w-full max-w-7xl px-4 mx-auto flex flex-col items-center text-center">
        {/* Intro Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-semibold tracking-widest text-white/80 uppercase"
        >
          Dhruv Sengar • Software Engineer
        </motion.div>

        {/* Huge Title (Professional) */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-tight flex flex-col items-center mb-8">
          <div className="pb-2">
            <AnimatedText text="Engineering Intelligent" delay={0.2} />
          </div>
          <div className="text-white/70 pb-2">
            <AnimatedText text="Web Systems." delay={0.6} />
          </div>
        </h1>

        {/* Subtitle */}
        <div className="mt-4 text-lg md:text-xl text-white/60 max-w-2xl font-normal leading-relaxed">
          <FadeInText 
            text="Specializing in scalable full-stack development, cloud-native architectures, and predictive machine learning integrations."
            delay={1.2}
          />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all duration-300 transform hover:scale-105 text-center"
          >
            Explore Work
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 border border-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 backdrop-blur-md transform hover:scale-105 text-center"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-white/0 via-white to-white/0 overflow-hidden relative">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-white blur-[2px]"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </motion.div>
    </section>
  );
};
