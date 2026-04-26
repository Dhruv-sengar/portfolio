'use client';

import dynamic from 'next/dynamic';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';

// Dynamically import all sections that use Three.js with SSR disabled
const Hero     = dynamic(() => import('@/components/sections/Hero').then(m => ({ default: m.Hero })),     { ssr: false });
const About    = dynamic(() => import('@/components/sections/About').then(m => ({ default: m.About })),    { ssr: false });
const Skills   = dynamic(() => import('@/components/sections/Skills').then(m => ({ default: m.Skills })),   { ssr: false });
const Projects = dynamic(() => import('@/components/sections/Projects').then(m => ({ default: m.Projects })), { ssr: false });
const Journey  = dynamic(() => import('@/components/sections/Journey').then(m => ({ default: m.Journey })),  { ssr: false });
const Contact  = dynamic(() => import('@/components/sections/Contact').then(m => ({ default: m.Contact })),  { ssr: false });

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Contact />
      <Footer />
    </main>
  );
}
