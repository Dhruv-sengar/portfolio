'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedText, FadeInText } from '@/components/ui/AnimatedText';

const projects = [
  {
    id: 1,
    title: 'readIt — Literary Platform',
    description: 'A modern social platform combining book discovery with long-form intellectual writing and thesis publishing.',
    problem: 'Traditional reading apps focus only on tracking, lacking a space for deep intellectual engagement and structured philosophical expression.',
    features: [
      'Real-time book search & trending via Open Library API',
      'Publish structured, long-form thoughts (Thesis Publishing)',
      'Editorial UI design inspired by literature & typography',
      'User authentication and session management via Supabase',
    ],
    tech: ['Next.js', 'Tailwind CSS', 'Supabase', 'Open Library API', 'Vercel'],
    liveUrl: 'https://read-it-mauve.vercel.app/',
    icon: '01',
  },
  {
    id: 2,
    title: 'Heart Health Predictor',
    description: 'Machine learning model and interactive web application to assess heart disease risk using tabular clinical data with ~87% accuracy.',
    problem: 'Early detection of heart disease risks can save lives but requires complex analysis of multiple health parameters.',
    features: [
      'Designed and deployed ML model to assess disease risk',
      'Optimized data preprocessing & feature selection',
      'Real-time inference via interactive web application',
      'Achieved ~87% accuracy using Scikit-Learn classifiers',
    ],
    tech: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Flask', 'Netlify'],
    liveUrl: 'https://heart-health-predictor.netlify.app',
    icon: '02',
  },
  {
    id: 3,
    title: 'Moral Compass Classifier',
    description: 'A full-stack machine learning application that categorizes user-provided scenarios into Utilitarian, Ethical, or Selfish with a dynamic 3D Cyber-Oracle UI.',
    problem: 'People often struggle to objectively evaluate the moral alignment of their actions or scenarios in a structured, unbiased way.',
    features: [
      'Real-time text classification using custom-trained ML models',
      'Dynamic 3D Ethereal Cyber-Oracle UI reacting to predictions',
      'FastAPI backend integrated with a React frontend',
      'Explainable AI providing confidence percentages for predictions',
    ],
    tech: ['React', 'FastAPI', 'Scikit-Learn', 'Vercel', 'Render'],
    liveUrl: 'https://moral-compass.vercel.app/',
    icon: '03',
  }
];

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="relative min-h-screen bg-transparent px-4 py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <AnimatedText 
            text="Selected Works"
            className="text-sm md:text-base font-semibold tracking-[0.3em] text-white/50 uppercase mb-4"
          />
          <AnimatedText 
            text="Projects."
            className="text-5xl md:text-7xl font-bold tracking-tight text-white"
            delay={0.2}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer relative"
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              whileHover={{ scale: 1.02, y: -10 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Animated Glow Behind Card */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 blur-2xl transition-colors duration-500 rounded-3xl" />
              
              <div className="relative h-full bg-white/5 backdrop-blur-2xl border border-white/10 p-8 flex flex-col hover:bg-white/10 hover:border-white/30 transition-all duration-500 ease-out z-10 shadow-2xl overflow-hidden rounded-2xl">
                <div className="mb-12 flex justify-between items-start">
                  <motion.div 
                    className="text-4xl font-black text-white/40 group-hover:text-white transition-colors duration-500"
                    whileHover={{ rotate: 10, scale: 1.2 }}
                  >
                    {project.icon}
                  </motion.div>
                  <motion.div 
                    className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-500"
                    whileHover={{ scale: 1.2, rotate: 90 }}
                  >
                    <svg className="w-3 h-3 transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </motion.div>
                </div>

                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight text-white transform group-hover:translate-x-2 transition-transform duration-500">
                  {project.title}
                </h3>

                <p className="text-white/60 group-hover:text-white mb-8 leading-relaxed flex-grow transition-colors duration-500">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-8 border-t border-white/10 group-hover:border-white/30 transition-colors duration-500">
                  {project.tech.slice(0, 3).map((tech, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.1, backgroundColor: "#fff", color: "#000" }}
                      className="px-3 py-1 bg-white/10 text-white/80 text-xs font-semibold tracking-wider uppercase transition-colors duration-500 rounded-full"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {projects.map(
                (project) =>
                  project.id === selectedProject && (
                    <div
                      key={project.id}
                      className="bg-white/5 backdrop-blur-3xl border border-white/10 p-8 md:p-16 rounded-3xl shadow-2xl"
                    >
                      <div className="grid md:grid-cols-2 gap-16">
                        <div>
                          <h4 className="text-sm font-semibold tracking-[0.2em] text-white/50 uppercase mb-4">
                            The Challenge
                          </h4>
                          <p className="text-lg text-white leading-relaxed mb-12">
                            {project.problem}
                          </p>

                          <h4 className="text-sm font-semibold tracking-[0.2em] text-white/50 uppercase mb-4">
                            Core Capabilities
                          </h4>
                          <ul className="space-y-4">
                            {project.features.map((feature, index) => (
                              <motion.li 
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                key={index} 
                                className="flex items-start gap-4 text-white/80"
                              >
                                <span className="w-1.5 h-1.5 mt-2.5 rounded-full bg-white flex-shrink-0" />
                                <span>{feature}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-col">
                          <h4 className="text-sm font-semibold tracking-[0.2em] text-white/50 uppercase mb-4">
                            Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-2 mb-12">
                            {project.tech.map((tech, index) => (
                              <span
                                key={index}
                                className="px-4 py-2 bg-white text-black text-xs font-bold uppercase tracking-wider"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          <div className="mt-auto">
                            <a
                              href={project.liveUrl}
                              className="group relative inline-flex items-center justify-center gap-4 px-8 py-5 bg-white text-black font-bold uppercase tracking-widest text-sm overflow-hidden w-full md:w-auto"
                            >
                              <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Launch Project</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
