"use client";

import { motion } from 'framer-motion';

export default function SalonTemplate({ businessName }) {
  return (
    <div className="bg-stone-50 font-sans text-stone-900">
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-stone-900/50 z-10"></div>
        
        {/* Elegant Spa Background Image */}
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"
        ></div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-serif text-amber-50 mb-4 drop-shadow-md">
            {businessName}
          </h1>
          <p className="text-sm md:text-base text-amber-200 mb-10 uppercase tracking-[0.3em]">
            Luxury Salon & Wellness Spa
          </p>
          <button className="bg-amber-600 hover:bg-amber-500 text-white font-semibold py-4 px-10 rounded-none transition-all tracking-wider border border-amber-600 hover:border-amber-500 shadow-lg">
            Book Appointment
          </button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif mb-4 text-stone-800">Our Premium Services</h2>
          <div className="h-px w-24 bg-amber-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 text-center bg-white shadow-sm border border-stone-100"
          >
            <div className="text-4xl mb-4">✂️</div>
            <h3 className="text-xl font-serif mb-3 text-stone-800">Hair Couture</h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              Precision cuts, expert coloring, and nourishing treatments by master stylists.
            </p>
          </motion.div>

          {/* Service 2 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 text-center bg-white shadow-sm border border-stone-100"
          >
            <div className="text-4xl mb-4">🧖‍♀️</div>
            <h3 className="text-xl font-serif mb-3 text-stone-800">Wellness Spa</h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              Rejuvenating massages and holistic therapies to melt your stress away.
            </p>
          </motion.div>

          {/* Service 3 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 text-center bg-white shadow-sm border border-stone-100"
          >
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-serif mb-3 text-stone-800">Skin Clinic</h3>
            <p className="text-stone-500 text-sm leading-relaxed">
              Advanced facials and bespoke skincare routines for a radiant, youthful glow.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}