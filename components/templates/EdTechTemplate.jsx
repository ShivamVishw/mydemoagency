"use client";

import { motion } from 'framer-motion';

export default function EdTechTemplate({ businessName }) {
  return (
    <div className="bg-white font-sans text-slate-800">
      
      {/* Hero Section */}
      <section className="relative bg-blue-700 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col lg:flex-row items-center relative z-10">
          
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-center lg:text-left pr-0 lg:pr-12 mb-12 lg:mb-0"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {businessName}
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 font-light max-w-2xl mx-auto lg:mx-0">
              Empowering the next generation of leaders. Gain industry-relevant skills with expert-led courses and interactive learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-50 transition-colors">
                Explore Courses
              </button>
              <button className="bg-blue-600 border border-blue-400 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-500 transition-colors">
                Try for Free
              </button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80" 
                alt="Students learning" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
        
        {/* Background Decorative Graphic */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] rounded-full bg-blue-600 blur-3xl opacity-50 z-0"></div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Why Choose Us?</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Our platform is designed to give you the most engaging and effective learning experience possible.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            { icon: "👨‍🏫", title: "Expert Instructors", desc: "Learn directly from industry professionals with years of real-world experience." },
            { icon: "💻", title: "Flexible Learning", desc: "Access course materials anytime, anywhere, and learn at your own pace." },
            { icon: "🎓", title: "Recognized Certification", desc: "Earn certificates that are highly valued by top employers across the globe." }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-slate-100 text-center"
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}