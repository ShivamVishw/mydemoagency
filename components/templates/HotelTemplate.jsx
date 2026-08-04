"use client";

import { motion } from 'framer-motion';

export default function HotelTemplate({ businessName }) {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="bg-zinc-50 font-sans text-zinc-900 relative selection:bg-amber-600/30">
      
      {/* Floating WhatsApp CTA */}
      <motion.a 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/917275453956?text=Hi! I would like to check room availability." 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ bottom: '130px', zIndex: 9999 }}
        className="fixed right-6 md:right-10 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] flex items-center justify-center group"
      >
        <span className="absolute right-16 bg-white text-zinc-900 text-sm font-bold py-2 px-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          WhatsApp Front Desk
        </span>
        <svg className="w-7 h-7 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z"/>
        </svg>
      </motion.a>

      {/* Navigation Bar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-between items-center p-4 md:p-6 max-w-7xl mx-auto bg-zinc-900/80 backdrop-blur-md sticky top-0 z-40 border-b border-zinc-800 shadow-lg mb-[-89px]"
      >
        <div className="text-xl md:text-2xl font-serif font-light text-amber-50 tracking-wide truncate max-w-[150px] md:max-w-none">{businessName}</div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-300 uppercase tracking-widest">
          <a href="#about" className="hover:text-amber-500 transition-colors">Experience</a>
          <a href="#rooms" className="hover:text-amber-500 transition-colors">Rooms</a>
          <a href="#amenities" className="hover:text-amber-500 transition-colors">Amenities</a>
        </div>
        <a href="#book" className="bg-amber-600 text-white px-5 py-2 md:px-6 md:py-2.5 rounded-none text-xs md:text-sm uppercase tracking-widest hover:bg-amber-500 transition-all shadow-md whitespace-nowrap active:scale-95">
          Reserve
        </a>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] md:h-screen flex items-center justify-center text-center px-4 overflow-hidden pt-22">
        
        {/* Bulletproof Image Wrapper */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80" 
            alt="Luxury Hotel" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-zinc-900/50 z-10"></div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="relative z-20 max-w-4xl mt-16"
        >
          <div className="flex justify-center mb-6 text-amber-400 text-xl md:text-2xl tracking-[0.5em]">
            ★★★★★
          </div>
          <h1 className="text-4xl md:text-7xl font-light font-serif text-white mb-8 drop-shadow-2xl leading-tight px-2">
            A World of Luxury Awaits at {businessName}
          </h1>
          <p className="text-zinc-200 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto drop-shadow-md">
            Experience world-class hospitality, exquisite dining, and unparalleled comfort in the heart of the city.
          </p>
          <div className="flex justify-center">
            <a href="#book" className="bg-amber-600 hover:bg-amber-500 text-white font-medium py-3 md:py-4 px-10 md:px-12 tracking-widest uppercase transition-all shadow-[0_0_30px_rgba(217,119,6,0.5)] active:scale-95 hover:scale-105">
              Check Availability
            </a>
          </div>
        </motion.div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 md:py-32 px-4 max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="md:w-1/2 w-full text-center md:text-left"
          >
            <p className="text-amber-600 font-medium tracking-[0.2em] uppercase mb-4 text-xs md:text-sm">Welcome</p>
            <h2 className="text-3xl md:text-5xl font-serif mb-6 text-zinc-900 leading-tight">Your perfect urban sanctuary.</h2>
            <p className="text-zinc-600 mb-6 leading-relaxed text-sm md:text-base">
              Step into {businessName} and leave the bustling city behind. From our meticulously designed suites to our personalized concierge service, every detail has been thoughtfully curated to provide an unforgettable stay.
            </p>
            <p className="text-zinc-600 mb-8 leading-relaxed text-sm md:text-base">
              Whether you are here for business, leisure, or a special celebration, our commitment is to make your experience nothing short of extraordinary.
            </p>
            <a href="#amenities" className="text-zinc-900 font-medium uppercase tracking-widest text-sm border-b border-zinc-900 pb-1 hover:text-amber-600 hover:border-amber-600 transition-colors">Explore Amenities</a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="md:w-1/2 w-full"
          >
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=500&q=80" alt="Lobby" className="w-full h-64 object-cover rounded-sm shadow-lg mt-8" />
              <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=500&q=80" alt="Restaurant" className="w-full h-64 object-cover rounded-sm shadow-lg" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rooms Showcase Section */}
      <section id="rooms" className="py-20 md:py-32 bg-zinc-900 text-zinc-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-amber-500 font-medium tracking-[0.2em] uppercase mb-4 text-xs md:text-sm">Accommodations</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-white">Rooms & Suites</h2>
            <div className="h-px w-24 bg-amber-600 mx-auto"></div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { name: "Deluxe City Room", price: "₹6,500", size: "350 sq.ft", bed: "King Bed", img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80" },
              { name: "Premium Ocean View", price: "₹9,200", size: "450 sq.ft", bed: "King Bed", img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80" },
              { name: "Executive Suite", price: "₹18,000", size: "850 sq.ft", bed: "Master Suite", img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80" }
            ].map((room, index) => (
              <motion.div variants={itemVariants} key={index} className="bg-zinc-800 rounded-sm overflow-hidden group border border-zinc-700 shadow-xl">
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={room.img} alt={room.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-end mb-4">
                    <h3 className="text-2xl font-serif text-amber-50">{room.name}</h3>
                    <p className="text-amber-500 font-medium">From {room.price}<span className="text-zinc-400 text-xs font-normal">/nt</span></p>
                  </div>
                  <div className="flex gap-4 text-sm text-zinc-400 border-t border-zinc-700 pt-4 mb-6">
                    <span className="flex items-center gap-1">🛏️ {room.bed}</span>
                    <span className="flex items-center gap-1">📐 {room.size}</span>
                  </div>
                  <a href="#book" className="block text-center border border-amber-600 text-amber-500 hover:bg-amber-600 hover:text-white py-3 uppercase tracking-widest text-xs transition-colors">
                    Reserve Room
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-zinc-900">Exceptional Amenities</h2>
            <div className="h-px w-24 bg-amber-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div whileHover={{ y: -10 }} className="text-center p-8 bg-zinc-50 border border-zinc-100 shadow-sm rounded-sm">
              <span className="text-4xl mb-4 block">🍽️</span>
              <h3 className="text-xl font-serif text-zinc-900 mb-3">Fine Dining</h3>
              <p className="text-sm text-zinc-600">Award-winning culinary experiences curated by global master chefs.</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="text-center p-8 bg-zinc-50 border border-zinc-100 shadow-sm rounded-sm">
              <span className="text-4xl mb-4 block">🏊‍♂️</span>
              <h3 className="text-xl font-serif text-zinc-900 mb-3">Infinity Pool</h3>
              <p className="text-sm text-zinc-600">Temperature-controlled rooftop pool overlooking the city skyline.</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="text-center p-8 bg-zinc-50 border border-zinc-100 shadow-sm rounded-sm">
              <span className="text-4xl mb-4 block">💆‍♀️</span>
              <h3 className="text-xl font-serif text-zinc-900 mb-3">Wellness Spa</h3>
              <p className="text-sm text-zinc-600">Holistic therapies and treatments to rejuvenate your mind and body.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Form Section - SEPARATED & HOVER ANIMATED */}
      <section id="book" className="py-12 md:py-24 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          
          {/* Image Side - Separated Card with Hover */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="w-full md:w-1/2 min-h-[400px] md:min-h-[600px] bg-cover bg-center rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] cursor-pointer overflow-hidden"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80')" }}
          >
            <div className="w-full h-full bg-gradient-to-t from-zinc-900/80 to-transparent flex flex-col justify-end p-10">
              <h3 className="text-white text-3xl font-serif mb-2">Best Rate Guarantee</h3>
              <p className="text-zinc-300">Book directly with us to receive exclusive perks and the lowest available rates.</p>
            </div>
          </motion.div>

          {/* Form Side - Separated Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4 }}
            className="w-full md:w-1/2 bg-zinc-900 p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.15)] text-zinc-100 flex flex-col justify-center rounded-2xl border border-zinc-800"
          >
            <p className="text-amber-500 font-medium tracking-[0.2em] uppercase mb-2 md:mb-4 text-xs md:text-sm">Secure Your Stay</p>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 md:mb-8">Reservation Request</h2>
            
            <form action="https://formsubmit.co/shivamvishwakarma1432@gmail.com" method="POST" className="space-y-4 md:space-y-6">
              <input type="hidden" name="_subject" value={`New Booking Request from ${businessName} Hotel Demo!`} />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-xs font-medium tracking-widest uppercase text-zinc-400 mb-2">First Name</label>
                  <input type="text" name="First Name" required className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-amber-500 focus:bg-zinc-700 transition-all rounded-lg" />
                </div>
                <div>
                  <label className="block text-xs font-medium tracking-widest uppercase text-zinc-400 mb-2">Last Name</label>
                  <input type="text" name="Last Name" required className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-amber-500 focus:bg-zinc-700 transition-all rounded-lg" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-xs font-medium tracking-widest uppercase text-zinc-400 mb-2">Phone / Email</label>
                  <input type="text" name="Contact Info" required className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-amber-500 focus:bg-zinc-700 transition-all rounded-lg" />
                </div>
                <div>
                  <label className="block text-xs font-medium tracking-widest uppercase text-zinc-400 mb-2">Room Type</label>
                  <select name="Room Type" defaultValue="" required className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-amber-500 focus:bg-zinc-700 transition-all appearance-none rounded-lg cursor-pointer">
                    <option value="" disabled>Select Room</option>
                    <option value="Deluxe City Room">Deluxe City Room</option>
                    <option value="Premium Ocean View">Premium Ocean View</option>
                    <option value="Executive Suite">Executive Suite</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-xs font-medium tracking-widest uppercase text-zinc-400 mb-2">Check-in Date</label>
                  <input type="date" name="Check In" required className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-amber-500 focus:bg-zinc-700 text-zinc-400 transition-all rounded-lg cursor-pointer" />
                </div>
                <div>
                  <label className="block text-xs font-medium tracking-widest uppercase text-zinc-400 mb-2">Check-out Date</label>
                  <input type="date" name="Check Out" required className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-amber-500 focus:bg-zinc-700 text-zinc-400 transition-all rounded-lg cursor-pointer" />
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full bg-amber-600 text-white font-medium py-4 uppercase tracking-widest text-sm hover:bg-amber-500 transition-all mt-4 shadow-[0_4px_14px_0_rgb(217,119,6,0.39)] rounded-lg"
              >
                Check Availability
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Business Footer - Extended background to remove white gap and clear watermark */}
      <footer className="bg-zinc-950 text-zinc-400 pt-16 md:pt-20 pb-40 text-center md:text-left border-t border-zinc-900 mt-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-8 border-b border-zinc-800 pb-10 md:pb-12">
          <div>
            <h3 className="text-xl md:text-2xl font-serif text-amber-50 mb-4">{businessName}</h3>
            <p className="text-sm leading-relaxed max-w-xs mx-auto md:mx-0">Experience uncompromising luxury and impeccable service in the premier destination for discerning travelers.</p>
          </div>
          <div>
            <h4 className="text-amber-500 font-medium mb-4 uppercase tracking-widest text-xs md:text-sm">Location</h4>
            <p className="text-sm mb-2 hover:text-amber-100 transition-colors cursor-pointer">One Luxury Avenue</p>
            <p className="text-sm mb-2 hover:text-amber-100 transition-colors cursor-pointer">Mumbai, Maharashtra 400021</p>
            <a href="#" className="text-xs uppercase tracking-widest border-b border-zinc-600 pb-1 hover:border-amber-500 hover:text-amber-100 transition-colors mt-4 inline-block">Get Directions</a>
          </div>
          <div>
            <h4 className="text-amber-500 font-medium mb-4 uppercase tracking-widest text-xs md:text-sm">Reservations</h4>
            <p className="text-sm mb-2 hover:text-amber-100 transition-colors cursor-pointer">+91 98765 43210</p>
            <p className="text-sm mb-4 hover:text-amber-100 transition-colors cursor-pointer">reservations@{businessName.toLowerCase().replace(/\s+/g, '')}.com</p>
            <div className="flex gap-4 justify-center md:justify-start">
              <span className="w-8 h-8 border border-zinc-700 flex items-center justify-center rounded-full hover:bg-amber-600 hover:border-amber-600 hover:text-white cursor-pointer transition-all hover:scale-110 text-xs">IG</span>
              <span className="w-8 h-8 border border-zinc-700 flex items-center justify-center rounded-full hover:bg-amber-600 hover:border-amber-600 hover:text-white cursor-pointer transition-all hover:scale-110 text-xs">FB</span>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-[10px] md:text-xs tracking-widest uppercase text-zinc-600 text-center">
          © 2026 {businessName} Hotels & Resorts. All rights reserved.
        </div>
      </footer>

    </div>
  );
}