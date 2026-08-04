"use client";

import { motion } from 'framer-motion';
import Watermark from '../components/Watermark';

export default function Home() {
  const demos = [
    {
      title: "Nivom Realty",
      category: "Real Estate & Property",
      description: "High-end luxury real estate landing page with property grids and inquiry forms.",
      link: "https://mydemoagency.vercel.app/demo/nivom-realty",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      tag: "Live Demo"
    },
    {
      title: "Richy Salon and Spa",
      category: "Beauty & Wellness",
      description: "Elegant salon website featuring curated service menus and appointment booking.",
      link: "https://mydemoagency.vercel.app/demo/richy-salon-and-spa",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
      tag: "Live Demo"
    },
    {
      title: "The Best Hotel Mumbai",
      category: "Hospitality & Hotels",
      description: "Cinematic hotel website with room showcases and direct reservation request forms.",
      link: "https://mydemoagency.vercel.app/demo/the-best-hotel-mumbai",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      tag: "Live Demo"
    },
    {
      title: "Livetechindia Andheri",
      category: "EdTech & Coaching",
      description: "Trustworthy educational platform with course breakdowns and student inquiry capture.",
      link: "https://mydemoagency.vercel.app/demo/livetechindia-andheri",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      tag: "Live Demo"
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-slate-300 font-sans relative selection:bg-blue-600/30 pb-24 overflow-hidden">
      
      {/* Abstract Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[30%] h-[40%] rounded-full bg-indigo-900/20 blur-[120px] pointer-events-none"></div>

      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 md:px-12 max-w-7xl mx-auto border-b border-white/5 sticky top-0 bg-[#030712]/80 backdrop-blur-xl z-50">
        <div className="text-2xl font-extrabold tracking-tighter text-white">SV<span className="text-blue-500">.</span></div>
        <div className="hidden md:flex gap-8 text-sm font-semibold tracking-wide">
          <a href="#work" className="hover:text-white transition-colors">Portfolio</a>
          <a href="#process" className="hover:text-white transition-colors">Process</a>
        </div>
        <a 
          href="https://wa.me/917275453956" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-500 text-white text-xs md:text-sm font-bold px-6 py-2.5 rounded-full transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)]"
        >
          Hire Me
        </a>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-20 flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/30 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8 border border-blue-500/20 shadow-inner"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Accepting New Projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-white leading-tight"
        >
          Websites built to <br className="hidden md:block" /> 
          <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">drive local business growth.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Hi, I'm Shivam Vishwakarma. I engineer high-performance, conversion-optimized digital experiences. Explore my production-ready industry templates below.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#work" className="bg-white text-[#030712] font-bold py-4 px-8 rounded-full transition-all hover:bg-slate-200">
            View Live Demos
          </a>
          <a href="#process" className="bg-transparent border border-slate-700 text-white font-bold py-4 px-8 rounded-full transition-all hover:bg-slate-800">
            How I Work
          </a>
        </motion.div>
      </main>

      {/* Value Props Section */}
      <section className="border-y border-white/5 bg-white/[0.02] py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-10 text-center">
          <div>
            <div className="w-12 h-12 bg-blue-900/50 text-blue-400 rounded-xl flex items-center justify-center text-xl mx-auto mb-4 border border-blue-500/20">⚡</div>
            <h3 className="text-white font-bold mb-2">Lightning Fast</h3>
            <p className="text-sm text-slate-400 leading-relaxed">Built on Next.js for instant load times, keeping your bounce rates practically non-existent.</p>
          </div>
          <div>
            <div className="w-12 h-12 bg-blue-900/50 text-blue-400 rounded-xl flex items-center justify-center text-xl mx-auto mb-4 border border-blue-500/20">📱</div>
            <h3 className="text-white font-bold mb-2">Mobile Optimized</h3>
            <p className="text-sm text-slate-400 leading-relaxed">Flawless responsive design ensuring your business looks premium on every device.</p>
          </div>
          <div>
            <div className="w-12 h-12 bg-blue-900/50 text-blue-400 rounded-xl flex items-center justify-center text-xl mx-auto mb-4 border border-blue-500/20">🎯</div>
            <h3 className="text-white font-bold mb-2">Conversion Focused</h3>
            <p className="text-sm text-slate-400 leading-relaxed">Strategic layouts, WhatsApp integrations, and lead forms designed to turn visitors into clients.</p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section id="work" className="max-w-7xl mx-auto px-6 md:px-12 py-24 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Industry Templates</h2>
          <p className="text-slate-400">Click any card to launch a fully functional, live interactive demo.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {demos.map((demo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-[#0a0f1c] border border-slate-800 rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex flex-col group cursor-pointer"
            >
              {/* Bulletproof Background Image Implementation */}
              <div 
                className="h-64 md:h-72 w-full relative border-b border-slate-800 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${demo.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] to-transparent opacity-80"></div>
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] uppercase tracking-widest font-bold px-4 py-1.5 rounded-full z-10 shadow-lg">
                  {demo.tag}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow justify-between relative z-20 bg-[#0a0f1c]">
                <div>
                  <p className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-3">{demo.category}</p>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{demo.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">{demo.description}</p>
                </div>
                <a 
                  href={demo.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full bg-slate-900 border border-slate-700 group-hover:bg-blue-600 group-hover:border-blue-500 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-md"
                >
                  Launch Live Demo <span>→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The Process Section */}
      <section id="process" className="py-24 bg-white/[0.02] border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-slate-400">A streamlined process from concept to deployment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Discovery", desc: "We discuss your business goals, target audience, and required features." },
              { num: "02", title: "Design", desc: "I customize a premium template or build a bespoke design to match your brand." },
              { num: "03", title: "Development", desc: "Building the site with Next.js, ensuring peak performance and mobile responsiveness." },
              { num: "04", title: "Launch", desc: "We deploy the site live, connect your domain, and start capturing leads." }
            ].map((step, i) => (
              <div key={i} className="bg-[#030712] p-8 rounded-2xl border border-slate-800 relative overflow-hidden group hover:border-blue-500/50 transition-colors">
                <div className="text-6xl font-extrabold text-white/[0.03] absolute -top-4 -right-4 group-hover:text-blue-500/10 transition-colors">{step.num}</div>
                <h3 className="text-xl font-bold text-white mb-3 relative z-10">{step.title}</h3>
                <p className="text-sm text-slate-400 relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="max-w-5xl mx-auto px-6 text-center py-24 relative z-10">
        <div className="bg-gradient-to-br from-blue-900/40 via-[#0a0f1c] to-indigo-900/20 border border-blue-500/30 p-12 md:p-20 rounded-[3rem] shadow-[0_0_50px_rgba(37,99,235,0.15)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Ready to upgrade your business?</h2>
          <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">Let's build a high-performance digital presence that puts you miles ahead of your local competition.</p>
          <a 
            href="https://wa.me/917275453956?text=Hi Shivam, I saw your agency portfolio and want to discuss a project." 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-[#030712] hover:bg-slate-200 font-bold py-4 px-10 rounded-full transition-all shadow-xl hover:scale-105"
          >
            <span>Let's Talk on WhatsApp</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z"/></svg>
          </a>
        </div>
      </section>

      {/* Very Bottom Footer Text */}
      <div className="text-center text-slate-600 text-sm pb-8 relative z-10">
        © 2026 Shivam Vishwakarma. All Rights Reserved.
      </div>

      <Watermark />
    </div>
  );
}