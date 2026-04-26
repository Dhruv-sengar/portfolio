'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent border-t border-white/10 pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          
          {/* Logo / Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-black uppercase tracking-widest text-white mb-2">DS.</h2>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/40">
              Digital Systems & Architecture
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex gap-8">
            {['About', 'Skills', 'Projects'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs font-bold tracking-widest uppercase text-white/50 hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs font-semibold tracking-widest uppercase text-white/30">
          <p>© {new Date().getFullYear()} DHRUV SENGAR.</p>
          <p className="mt-4 md:mt-0">DESIGNED & ENGINEERED FOR THE FUTURE.</p>
        </div>
      </div>
    </footer>
  );
};
