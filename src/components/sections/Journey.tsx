'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { JourneyGeometry } from '@/components/3d/JourneyGeometry';
import { AnimatedText } from '@/components/ui/AnimatedText';

const timeline = [
  {
    year: '2027',
    title: 'B.Tech in Computer Science',
    description: 'Pursuing Bachelor of Technology at GLA University, Mathura. Building strong foundations in algorithms, data structures, and core computer science principles.',
    number: '04'
  },
  {
    year: '2025',
    title: 'IBM Full Stack Developer',
    description: 'Completed Professional Certificate covering modern web technologies, cloud deployment, DevOps, and microservices architectures.',
    number: '03'
  },
  {
    year: '2023',
    title: 'Intermediate Education',
    description: 'Completed intermediate studies at St Francis Inter College, Hathras, building a solid foundation in mathematics and sciences.',
    number: '02'
  },
  {
    year: '2021',
    title: 'High School',
    description: 'Completed high school at St Francis Inter School, Hathras, discovering an early passion for technology and logical problem-solving.',
    number: '01'
  },
];

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="relative min-h-screen bg-transparent px-4 py-32 border-t border-white/10 overflow-hidden">
      <JourneyGeometry />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24">
          <AnimatedText 
            text="Timeline"
            className="text-sm md:text-base font-semibold tracking-[0.3em] text-white/50 uppercase mb-4"
          />
          <AnimatedText 
            text="Journey."
            className="text-5xl md:text-7xl font-bold tracking-tight text-white"
            delay={0.2}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-b border-white/10">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              className="group relative p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 last:border-r-0 hover:bg-white transition-colors duration-500 ease-out"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-black text-white/20 group-hover:text-black/20 mb-16 transition-colors duration-500">
                {item.number}
              </div>
              
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-white/50 group-hover:text-black/50 mb-2 transition-colors duration-500">
                {item.year}
              </div>
              
              <h3 className="text-2xl font-bold text-white group-hover:text-black mb-6 uppercase tracking-tight transition-colors duration-500">
                {item.title}
              </h3>
              
              <p className="text-white/60 group-hover:text-black/70 leading-relaxed transition-colors duration-500">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
