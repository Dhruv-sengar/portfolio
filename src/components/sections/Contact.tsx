'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ContactGeometry } from '@/components/3d/ContactGeometry';
import { AnimatedText, FadeInText } from '@/components/ui/AnimatedText';

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative min-h-screen bg-transparent px-4 py-32 border-t border-white/10 overflow-hidden">
      <ContactGeometry />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-32">
          
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <AnimatedText 
              text="Initiate"
              className="text-sm md:text-base font-semibold tracking-[0.3em] text-white/50 uppercase mb-4"
            />
            <AnimatedText 
              text="Contact."
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-none mb-12"
              delay={0.2}
            />

            <FadeInText 
              text="Currently open for new opportunities. Let's build the next generation of digital tools together."
              className="text-xl text-white/60 font-light leading-relaxed max-w-md mb-16"
              delay={0.6}
            />

            <div className="mt-auto space-y-6">
              {[
                { icon: <MailIcon />, label: 'Email', value: 'dhruvsengar453@gmail.com', href: 'mailto:dhruvsengar453@gmail.com' },
                { icon: <PhoneIcon />, label: 'Phone', value: '+91 7417208182', href: 'tel:+917417208182' },
                { icon: <LinkedInIcon />, label: 'LinkedIn', value: '/in/dhruv-sengar', href: 'https://www.linkedin.com/in/dhruv-sengar-b8370530b/' },
                { icon: <GitHubIcon />, label: 'GitHub', value: 'Dhruv-sengar', href: 'https://github.com/Dhruv-sengar' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="group flex items-center justify-between border-b border-white/10 pb-6 hover:border-white transition-colors duration-500"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-white/50 group-hover:text-white transition-colors duration-500">
                      {social.icon}
                    </span>
                    <span className="text-sm font-semibold tracking-widest uppercase text-white/50 group-hover:text-white transition-colors duration-500">
                      {social.label}
                    </span>
                  </div>
                  <span className="text-lg font-bold text-white group-hover:pl-4 transition-all duration-500">
                    {social.value}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-8 bg-white/5 backdrop-blur-3xl p-8 md:p-12 border border-white/10 rounded-3xl shadow-2xl">
              
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="peer w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-transparent focus:border-white focus:outline-none transition-colors"
                  placeholder="Name"
                />
                <label 
                  htmlFor="name"
                  className="absolute left-0 -top-3 text-xs font-semibold tracking-widest uppercase text-white/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/30 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-white"
                >
                  Your Name
                </label>
              </div>

              <div className="relative group pt-4">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="peer w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-transparent focus:border-white focus:outline-none transition-colors"
                  placeholder="Email"
                />
                <label 
                  htmlFor="email"
                  className="absolute left-0 top-1 text-xs font-semibold tracking-widest uppercase text-white/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/30 peer-placeholder-shown:top-8 peer-focus:top-1 peer-focus:text-xs peer-focus:text-white"
                >
                  Your Email
                </label>
              </div>

              <div className="relative group pt-4">
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="peer w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-transparent focus:border-white focus:outline-none transition-colors resize-none"
                  placeholder="Message"
                />
                <label 
                  htmlFor="message"
                  className="absolute left-0 top-1 text-xs font-semibold tracking-widest uppercase text-white/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/30 peer-placeholder-shown:top-8 peer-focus:top-1 peer-focus:text-xs peer-focus:text-white"
                >
                  Message
                </label>
              </div>

              <button
                type="submit"
                className="group relative w-full px-8 py-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-bold uppercase tracking-widest text-sm overflow-hidden mt-8 transition-all hover:border-white/50 hover:bg-white/20"
              >
                <span className="relative z-10 transition-colors duration-300">
                  {isSubmitted ? 'Transmitting...' : 'Send Message'}
                </span>
              </button>

              {isSubmitted && (
                <div className="text-sm font-bold tracking-widest uppercase text-white text-center mt-4 border border-white/20 py-3 rounded-full backdrop-blur-md">
                  Message Sent
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
