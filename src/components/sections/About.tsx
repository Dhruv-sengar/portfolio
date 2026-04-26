'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AboutGeometry } from '@/components/3d/AboutGeometry';
import { AnimatedText, FadeInText } from '@/components/ui/AnimatedText';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen bg-transparent px-4 py-32 border-t border-white/10 overflow-hidden">
      <AboutGeometry />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left - Massive Title */}
          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <AnimatedText 
              text="Background"
              className="text-sm md:text-base font-semibold tracking-[0.3em] text-white/50 uppercase mb-4"
            />
            <div className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-none mb-8 flex flex-col">
              <AnimatedText text="About" delay={0.2} />
              <AnimatedText 
                text="Me." 
                delay={0.6} 
                className="text-transparent italic" 
                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }} 
              />
            </div>
            
            <div className="w-full h-[1px] bg-white/20 mb-8" />
            
            <FadeInText 
              text="Passionate about leveraging technology to build intelligent, scalable systems that solve complex problems."
              className="text-xl md:text-2xl text-white/70 font-light leading-relaxed"
              delay={0.8}
            />
          </motion.div>

          {/* Right - Details */}
          <motion.div
            className="md:col-span-7 space-y-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            {[
              {
                title: 'Full Stack & Cloud',
                description: 'Earned IBM Full Stack Software Developer Professional Certificate. Experienced with modern web technologies, React, Node.js, and cloud-native deployments.',
                number: '01'
              },
              {
                title: 'Machine Learning Models',
                description: 'Built and deployed predictive models like the Heart Health Predictor using Scikit-Learn, Pandas, and NumPy. Deep understanding of ML fundamentals and data preprocessing.',
                number: '02'
              },
              {
                title: 'Problem Solving & Communication',
                description: 'Strong foundation in analytical thinking, pragmatic problem-solving, and effective communication, supplemented by studies in Creative Writing and Critical Reading.',
                number: '03'
              },
            ].map((section, index) => (
              <div key={index} className="group relative pl-8 md:pl-12 border-l border-white/10 hover:border-white transition-colors duration-500">
                <span className="absolute -left-3 top-0 text-xs font-bold text-white/30 group-hover:text-white transition-colors duration-500 bg-black py-2">
                  {section.number}
                </span>
                <AnimatedText 
                  text={section.title}
                  className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight uppercase"
                  delay={0.2 + (index * 0.1)}
                />
                <FadeInText 
                  text={section.description}
                  className="text-white/50 leading-relaxed text-lg"
                  delay={0.4 + (index * 0.1)}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
