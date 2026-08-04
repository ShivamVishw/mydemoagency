"use client";

import { motion } from 'framer-motion';
import Watermark from '../components/Watermark';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans relative pb-24 selection:bg-blue-500/30">
      
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 md:px-12 max-w-7xl mx-auto border-b border-white/5">
        <div className="text-xl font-bold tracking-tighter">SV.</div>
        <a 
          href="mailto:shivamvishwakarma1432@gmail.com" 
          className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
        >
          shivamvishwakarma1432@gmail.com
        </a>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-32 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-8 border border-blue-500/20"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Available for freelance projects
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
            I build websites that <br className="hidden md:block" /> drive business growth.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Hi, I'm Shivam Vishwakarma. I engineer high-performance, dynamic, and responsive digital experiences for local businesses looking to scale their revenue.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a 
            href="https://wa.me/917275453956" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-8 rounded-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
          >
            Discuss Your Project
          </a>
          <a 
            href="mailto:shivamvishwakarma1432@gmail.com" 
            className="bg-slate-800 hover:bg-slate-700 text-white font-semibold py-4 px-8 rounded-lg transition-all border border-slate-700"
          >
            Email Me
          </a>
        </motion.div>
      </main>

      <Watermark />
    </div>
  );
}