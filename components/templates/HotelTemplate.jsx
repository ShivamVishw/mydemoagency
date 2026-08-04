"use client";

import { motion } from 'framer-motion';

export default function HotelTemplate({ businessName }) {
  return (
    <div className="bg-zinc-50 font-sans text-zinc-900">
      
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-zinc-900/40 z-10"></div>
        
        {/* Luxury Hotel Background Image */}
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542314831-c6a421192af4?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"
        ></div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-20 max-w-4xl"
        >
          <p className="text-amber-400 font-medium tracking-[0.2em] uppercase mb-4 text-sm md:text-base drop-shadow-md">
            A World of Luxury Awaits
          </p>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-10 drop-shadow-lg">
            {businessName}
          </h1>
          <button className="bg-amber-600 hover:bg-amber-500 text-white font-semibold py-4 px-12 rounded transition-all shadow-xl hover:-translate-y-1">
            Reserve Your Stay
          </button>
        </motion.div>
      </section>

      {/* Amenities Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-light mb-4 text-zinc-800">Exceptional Amenities</h2>
          <div className="h-0.5 w-16 bg-amber-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Amenity 1 */}
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="group relative h-80 overflow-hidden rounded-lg shadow-md cursor-pointer"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618773928120-2c742c665449?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-2xl font-light text-white mb-2">Luxury Suites</h3>
              <p className="text-zinc-300 text-sm">Spacious, elegantly designed rooms with breathtaking city views.</p>
            </div>
          </motion.div>

          {/* Amenity 2 */}
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="group relative h-80 overflow-hidden rounded-lg shadow-md cursor-pointer"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-2xl font-light text-white mb-2">Fine Dining</h3>
              <p className="text-zinc-300 text-sm">Award-winning culinary experiences curated by global master chefs.</p>
            </div>
          </motion.div>

          {/* Amenity 3 */}
          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="group relative h-80 overflow-hidden rounded-lg shadow-md cursor-pointer"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571775301495-5d0511415008?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-2xl font-light text-white mb-2">Infinity Pool</h3>
              <p className="text-zinc-300 text-sm">Unwind in our temperature-controlled pool overlooking the skyline.</p>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}