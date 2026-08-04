"use client";

import { motion } from 'framer-motion';

export default function SalonTemplate({ businessName }) {
  
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
    <div className="bg-stone-50 font-sans text-stone-900 relative selection:bg-amber-600/30">
      
      {/* Floating WhatsApp CTA */}
      <motion.a 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/917275453956?text=Hi! I would like to book an appointment." 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ bottom: '130px', zIndex: 9999 }}
        className="fixed right-6 md:right-10 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] flex items-center justify-center group"
      >
        <span className="absolute right-16 bg-white text-stone-900 text-sm font-bold py-2 px-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Book via WhatsApp
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
        className="flex justify-between items-center p-4 md:p-6 max-w-7xl mx-auto bg-stone-50/90 backdrop-blur-md sticky top-0 z-40 border-b border-stone-200 shadow-sm mb-[-89px]"
      >
        <div className="flex items-center gap-4">
          <a href="https://mydemoagency.vercel.app" className="text-xs font-bold uppercase tracking-wider bg-stone-200 hover:bg-stone-300 text-stone-800 px-3 py-1.5 transition-colors">
            ← Agency Hub
          </a>
          <div className="text-xl md:text-2xl font-serif font-bold text-stone-900 tracking-tight truncate max-w-[150px] md:max-w-none">{businessName}</div>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-stone-600 uppercase tracking-widest">
          <a href="#about" className="hover:text-amber-600 transition-colors">About</a>
          <a href="#services" className="hover:text-amber-600 transition-colors">Services</a>
          <a href="#reviews" className="hover:text-amber-600 transition-colors">Reviews</a>
        </div>
        <a href="#book" className="bg-stone-900 text-white px-5 py-2 md:px-6 md:py-2.5 rounded-none text-xs md:text-sm uppercase tracking-widest hover:bg-amber-600 transition-all shadow-md whitespace-nowrap active:scale-95">
          Book Now
        </a>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] md:h-screen flex items-center justify-center text-center px-4 overflow-hidden pt-22">
        <div className="absolute inset-0 bg-stone-900/40 z-10"></div>
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1920&q=80')" }}
          className="absolute inset-0 bg-cover bg-center"
        ></motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="relative z-20 max-w-3xl mt-16"
        >
          <p className="text-amber-300 font-medium tracking-[0.2em] md:tracking-[0.3em] uppercase mb-4 md:mb-6 text-xs md:text-base drop-shadow-md">
            Unwind • Refresh • Transform
          </p>
          <h1 className="text-4xl md:text-7xl font-serif text-white mb-8 drop-shadow-lg leading-tight px-2">
            Elevate Your Beauty at {businessName}
          </h1>
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <a href="#book" className="bg-amber-600 hover:bg-amber-500 text-white font-medium py-3 md:py-4 px-8 md:px-10 tracking-widest uppercase transition-colors shadow-xl active:scale-95 hover:scale-105">
              Book Appointment
            </a>
            <a href="#services" className="bg-white/10 backdrop-blur-sm border border-white/50 hover:bg-white hover:text-stone-900 text-white font-medium py-3 md:py-4 px-8 md:px-10 tracking-widest uppercase transition-colors shadow-xl active:scale-95 hover:scale-105">
              View Menu
            </a>
          </div>
        </motion.div>
      </section>

      {/* Animated Highlights Banner */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="bg-stone-900 py-10 relative z-30 -mt-8 mx-4 md:mx-auto max-w-5xl shadow-2xl border-t-4 border-amber-600"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-stone-300">
          <motion.div variants={itemVariants} className="px-4">
            <span className="text-3xl mb-2 block animate-pulse">✨</span>
            <h3 className="font-serif text-lg text-amber-50 mb-1">Premium Products</h3>
            <p className="text-sm">We only use top-tier, cruelty-free brands.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="px-4 md:border-x md:border-stone-700">
            <span className="text-3xl mb-2 block hover:rotate-12 transition-transform cursor-pointer">🏆</span>
            <h3 className="font-serif text-lg text-amber-50 mb-1">Master Stylists</h3>
            <p className="text-sm">Highly trained experts in modern aesthetics.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="px-4">
            <span className="text-3xl mb-2 block hover:-rotate-12 transition-transform cursor-pointer">🌿</span>
            <h3 className="font-serif text-lg text-amber-50 mb-1">Serene Atmosphere</h3>
            <p className="text-sm">A relaxing oasis in the heart of the city.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 px-4 max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="md:w-1/2 w-full"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-amber-600/20 translate-x-4 translate-y-4 transition-transform group-hover:translate-x-6 group-hover:translate-y-6 rounded-lg"></div>
              <img src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80" alt="Spa interior" className="w-full h-auto shadow-2xl relative z-10 rounded-lg" />
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-amber-600 text-white p-6 md:p-8 shadow-xl hidden md:block z-20 rounded-lg cursor-pointer"
              >
                <p className="text-3xl md:text-4xl font-serif">10+</p>
                <p className="uppercase tracking-widest text-xs md:text-sm">Years of<br/>Excellence</p>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="md:w-1/2 w-full text-center md:text-left"
          >
            <p className="text-amber-600 font-medium tracking-[0.2em] uppercase mb-4 text-xs md:text-sm">Our Philosophy</p>
            <h2 className="text-3xl md:text-5xl font-serif mb-6 text-stone-900 leading-tight">Beauty is a reflection of inner wellness.</h2>
            <p className="text-stone-600 mb-6 leading-relaxed text-sm md:text-base">
              At {businessName}, we believe that self-care is not a luxury, but a necessity. Our dedicated team of professionals is committed to providing you with a personalized experience that leaves you feeling rejuvenated, confident, and utterly pampered.
            </p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/13/Signature_placeholder.png" alt="Founder Signature" className="h-10 md:h-12 mx-auto md:mx-0 opacity-60 mix-blend-multiply" />
          </motion.div>
        </div>
      </section>

      {/* Services Menu Section */}
      <section id="services" className="py-20 md:py-32 bg-white border-y border-stone-200 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-stone-900">Curated Services</h2>
            <div className="h-px w-24 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-stone-500 max-w-2xl mx-auto text-sm md:text-base">Explore our range of premium treatments tailored to your unique needs.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h3 className="text-2xl font-serif text-stone-800 mb-8 flex items-center justify-center md:justify-start gap-3">
                <span className="text-amber-600 text-3xl">✂️</span> Hair Couture
              </h3>
              <div className="space-y-6">
                {[
                  { name: "Precision Cut & Style", price: "₹1,200+", desc: "Includes wash, consultation, and professional styling." },
                  { name: "Balayage & Color Melting", price: "₹4,500+", desc: "Customized color application for a seamless, natural blend." },
                  { name: "Keratin Smoothing", price: "₹5,000+", desc: "Frizz-free, glossy hair lasting up to 3 months." }
                ].map((item, i) => (
                  <motion.div variants={itemVariants} key={i} className="border-b border-stone-100 pb-4 group cursor-pointer hover:bg-stone-50 p-2 rounded-lg transition-colors">
                    <div className="flex justify-between items-baseline mb-1 group-hover:text-amber-600 transition-colors">
                      <h4 className="font-medium">{item.name}</h4>
                      <span className="font-serif text-amber-700">{item.price}</span>
                    </div>
                    <p className="text-sm text-stone-500">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h3 className="text-2xl font-serif text-stone-800 mb-8 flex items-center justify-center md:justify-start gap-3">
                <span className="text-amber-600 text-3xl">🧖‍♀️</span> Skin & Spa
              </h3>
              <div className="space-y-6">
                {[
                  { name: "Signature Glow Facial", price: "₹2,500+", desc: "Deep cleansing, exfoliation, and hydration for radiant skin." },
                  { name: "Aromatherapy Massage", price: "₹3,000", desc: "Full body relaxation using essential oils to relieve tension." },
                  { name: "Luxury Bridal Package", price: "₹15,000+", desc: "Complete head-to-toe prep for your special day." }
                ].map((item, i) => (
                  <motion.div variants={itemVariants} key={i} className="border-b border-stone-100 pb-4 group cursor-pointer hover:bg-stone-50 p-2 rounded-lg transition-colors">
                    <div className="flex justify-between items-baseline mb-1 group-hover:text-amber-600 transition-colors">
                      <h4 className="font-medium">{item.name}</h4>
                      <span className="font-serif text-amber-700">{item.price}</span>
                    </div>
                    <p className="text-sm text-stone-500">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <a href="#book" className="inline-block border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white px-8 py-3 uppercase tracking-widest text-sm transition-all active:scale-95 hover:shadow-lg">
              Book a Service
            </a>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-20 md:py-32 px-4 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-stone-900">Client Love</h2>
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
            { text: "Absolutely incredible experience. The staff is so welcoming, and my balayage turned out exactly how I wanted it. I won't go anywhere else!", name: "Priya S." },
            { text: "The aromatherapy massage was exactly what I needed after a long work week. The ambiance is so peaceful and luxurious.", name: "Neha M." },
            { text: "Got my bridal makeup and hair done here. They made me feel like an absolute queen on my wedding day. Highly recommended!", name: "Ananya R." }
          ].map((review, index) => (
            <motion.div variants={itemVariants} whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }} key={index} className="bg-white p-8 md:p-10 shadow-sm border border-stone-100 text-center transition-all rounded-xl cursor-default">
              <div className="text-amber-500 mb-6 text-lg md:text-xl tracking-widest">★★★★★</div>
              <p className="text-stone-600 italic mb-8 leading-relaxed text-sm md:text-base">"{review.text}"</p>
              <h4 className="font-serif text-stone-900 text-lg">{review.name}</h4>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Booking Form Section - SEPARATED & HOVER ANIMATED */}
      <section id="book" className="py-12 md:py-24 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          
          {/* Image Side - Separated Card with Hover */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="w-full md:w-1/2 min-h-[350px] md:min-h-[500px] bg-cover bg-center rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] cursor-pointer"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1000&q=80')" }}
          ></motion.div>

          {/* Form Side - Separated Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4 }}
            className="w-full md:w-1/2 bg-stone-900 p-8 md:p-12 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-stone-100 flex flex-col justify-center border border-stone-800"
          >
            <p className="text-amber-500 font-medium tracking-[0.2em] uppercase mb-2 md:mb-4 text-xs md:text-sm">Reserve Your Time</p>
            <h2 className="text-3xl md:text-4xl font-serif mb-6 md:mb-8">Book an Appointment</h2>
            
            <form action="https://formsubmit.co/shivamvishwakarma1432@gmail.com" method="POST" className="space-y-4 md:space-y-6">
              <input type="hidden" name="_subject" value={`New Booking Request from ${businessName} Demo Site!`} />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <input type="text" name="First Name" required className="w-full bg-stone-800 border border-stone-700 text-white px-4 py-3 text-sm md:text-base focus:outline-none focus:border-amber-500 focus:bg-stone-700 placeholder-stone-500 transition-all rounded-md" placeholder="First Name" />
                </div>
                <div>
                  <input type="text" name="Last Name" required className="w-full bg-stone-800 border border-stone-700 text-white px-4 py-3 text-sm md:text-base focus:outline-none focus:border-amber-500 focus:bg-stone-700 placeholder-stone-500 transition-all rounded-md" placeholder="Last Name" />
                </div>
              </div>
              <div>
                <input type="tel" name="Phone" required className="w-full bg-stone-800 border border-stone-700 text-white px-4 py-3 text-sm md:text-base focus:outline-none focus:border-amber-500 focus:bg-stone-700 placeholder-stone-500 transition-all rounded-md" placeholder="Phone Number" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <select name="Service" defaultValue="" required className="w-full bg-stone-800 border border-stone-700 text-white px-4 py-3 text-sm md:text-base focus:outline-none focus:border-amber-500 focus:bg-stone-700 transition-all appearance-none rounded-md cursor-pointer">
                    <option value="" disabled>Select Service</option>
                    <option value="Haircut & Styling">Haircut & Styling</option>
                    <option value="Hair Coloring">Hair Coloring</option>
                    <option value="Facial / Skincare">Facial / Skincare</option>
                    <option value="Massage / Spa">Massage / Spa</option>
                    <option value="Bridal Makeup">Bridal Makeup</option>
                  </select>
                </div>
                <div>
                  <input type="date" name="Preferred Date" required className="w-full bg-stone-800 border border-stone-700 text-white px-4 py-3 text-sm md:text-base focus:outline-none focus:border-amber-500 focus:bg-stone-700 text-stone-400 transition-all rounded-md cursor-pointer" />
                </div>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full bg-amber-600 text-white font-medium py-4 uppercase tracking-widest text-sm hover:bg-amber-500 transition-all mt-4 shadow-[0_4px_14px_0_rgb(217,119,6,0.39)] rounded-md"
              >
                Confirm Request
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Business Footer - Flush & Deep */}
      <footer className="bg-stone-950 text-stone-400 pt-16 pb-32 text-center md:text-left border-t border-stone-900">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-8 border-b border-stone-800 pb-10 md:pb-12">
          <div>
            <h3 className="text-xl md:text-2xl font-serif text-amber-50 mb-4">{businessName}</h3>
            <p className="text-sm leading-relaxed max-w-xs mx-auto md:mx-0">Where luxury meets wellness. Discover your best self in our serene, state-of-the-art studio.</p>
          </div>
          <div>
            <h4 className="text-amber-500 font-medium mb-4 uppercase tracking-widest text-xs md:text-sm">Visit Us</h4>
            <p className="text-sm mb-2 hover:text-amber-100 transition-colors cursor-pointer">123 Wellness Boulevard</p>
            <p className="text-sm mb-2 hover:text-amber-100 transition-colors cursor-pointer">Mumbai, Maharashtra 400001</p>
            <p className="text-sm mt-4 text-amber-50">Mon-Sat: 10AM - 8PM</p>
          </div>
          <div>
            <h4 className="text-amber-500 font-medium mb-4 uppercase tracking-widest text-xs md:text-sm">Contact</h4>
            <p className="text-sm mb-2 hover:text-amber-100 transition-colors cursor-pointer">+91 98765 43210</p>
            <p className="text-sm mb-4 hover:text-amber-100 transition-colors cursor-pointer">hello@{businessName.toLowerCase().replace(/\s+/g, '')}.com</p>
            <div className="flex gap-4 justify-center md:justify-start">
              <span className="w-8 h-8 bg-stone-800 flex items-center justify-center rounded-full hover:bg-amber-600 hover:text-white cursor-pointer transition-all hover:scale-110 text-xs">IG</span>
              <span className="w-8 h-8 bg-stone-800 flex items-center justify-center rounded-full hover:bg-amber-600 hover:text-white cursor-pointer transition-all hover:scale-110 text-xs">FB</span>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-[10px] md:text-xs tracking-widest uppercase text-stone-600 text-center">
          © 2026 {businessName}. All rights reserved.
        </div>
      </footer>

    </div>
  );
}