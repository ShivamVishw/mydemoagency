"use client"; // This tells Next.js we are using animations on the user's browser

import { motion } from 'framer-motion';

export default function RealEstateTemplate({ businessName }) {
  return (
    <div className="bg-white font-sans text-slate-800">
      
      {/* Hero Section with Background Image */}
      <section className="relative h-[80vh] flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-slate-900/60 z-10"></div>
        
        {/* Placeholder background image from Unsplash */}
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"
        ></div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            {businessName}
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-10 font-light">
            Discover premium properties and luxury living spaces tailored to your lifestyle.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            Explore Properties
          </button>
        </motion.div>
      </section>

      {/* Services/Features Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-900">Our Expertise</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm"
          >
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 text-2xl">
              🏢
            </div>
            <h3 className="text-xl font-bold mb-3">Commercial Spaces</h3>
            <p className="text-slate-600 leading-relaxed">
              Find the perfect office or retail space to scale your business in prime locations.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm"
          >
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 text-2xl">
              🏡
            </div>
            <h3 className="text-xl font-bold mb-3">Luxury Residences</h3>
            <p className="text-slate-600 leading-relaxed">
              Exclusive villas and penthouses offering unmatched comfort and privacy.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm"
          >
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 text-2xl">
              🤝
            </div>
            <h3 className="text-xl font-bold mb-3">Property Management</h3>
            <p className="text-slate-600 leading-relaxed">
              End-to-end management services ensuring your investments are well protected.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}