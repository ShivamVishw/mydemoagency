"use client";

import { motion } from 'framer-motion';

export default function RealEstateTemplate({ businessName }) {
  return (
    <div className="bg-slate-50 font-sans text-slate-800 relative">
      
      {/* Floating WhatsApp CTA */}
      <a 
        href="https://wa.me/917275453956?text=Hi! I am interested in your real estate services." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-28 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:bg-[#20bd5a] hover:scale-110 transition-all z-50 flex items-center justify-center group"
      >
        <span className="absolute right-16 bg-white text-slate-900 text-sm font-bold py-2 px-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Chat with us
        </span>
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z"/>
        </svg>
      </a>

      {/* Navigation Bar */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto bg-white/80 backdrop-blur-md sticky top-0 z-40 rounded-b-2xl shadow-sm mb-[-88px]">
        <div className="flex items-center gap-4">
          <a href="https://mydemoagency.vercel.app" className="text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-lg transition-colors">
            ← Agency Hub
          </a>
          <span className="text-2xl font-extrabold text-slate-900 tracking-tight">{businessName}</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-bold text-slate-700">
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#properties" className="hover:text-blue-600 transition-colors">Properties</a>
          <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>
        <a href="#contact" className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap">
          Schedule Viewing
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-center px-4 overflow-hidden pt-22">
        <div className="absolute inset-0 bg-slate-900/50 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 max-w-4xl mt-16"
        >
          <span className="bg-blue-600/90 text-white px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mb-6 inline-block">
            Premium Real Estate
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            Find Your Dream Home with {businessName}
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-10 font-light drop-shadow-md">
            Exclusive residential estates, luxury apartments, and prime commercial spaces tailored to your lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#properties" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-center">
              Explore Properties
            </a>
            <a href="#contact" className="bg-white hover:bg-slate-50 text-slate-900 font-semibold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-center">
              Sell Your Property
            </a>
          </div>
        </motion.div>
      </section>

      {/* Trust Statistics Banner */}
      <section className="bg-blue-700 py-12 relative z-30 -mt-8 mx-4 md:mx-auto max-w-6xl rounded-2xl shadow-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-blue-500/50 text-white">
          <div className="px-4">
            <h3 className="text-4xl font-bold mb-1">10+</h3>
            <p className="text-blue-200 text-sm font-medium">Years Experience</p>
          </div>
          <div className="px-4">
            <h3 className="text-4xl font-bold mb-1">₹500Cr+</h3>
            <p className="text-blue-200 text-sm font-medium">Property Sold</p>
          </div>
          <div className="px-4">
            <h3 className="text-4xl font-bold mb-1">1,200+</h3>
            <p className="text-blue-200 text-sm font-medium">Happy Families</p>
          </div>
          <div className="px-4">
            <h3 className="text-4xl font-bold mb-1">45</h3>
            <p className="text-blue-200 text-sm font-medium">Expert Agents</p>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section id="properties" className="py-24 px-4 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Featured Listings</h2>
            <p className="text-slate-500 text-lg">Handpicked luxury properties available right now.</p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { tag: "FOR SALE", color: "bg-blue-600", price: "₹12.5 Cr", name: "Sea View Modern Villa", loc: "Worli Sea Face, Mumbai", beds: "4", baths: "4", sqft: "4,500", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" },
            { tag: "NEW LAUNCH", color: "bg-emerald-500", price: "₹5.2 Cr", name: "Luxury Penthouse", loc: "Bandra West, Mumbai", beds: "3", baths: "3", sqft: "2,200", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80" },
            { tag: "COMMERCIAL", color: "bg-amber-500", price: "₹18.0 Cr", name: "Premium Office Space", loc: "BKC, Mumbai", beds: "A", baths: "12", sqft: "8,000", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" }
          ].map((prop, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group cursor-pointer">
              <div className="h-64 overflow-hidden relative">
                <div className={`absolute top-4 left-4 ${prop.color} text-white text-xs font-bold px-3 py-1 rounded-full z-10`}>{prop.tag}</div>
                <img src={prop.img} alt={prop.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{prop.price}</h3>
                <p className="text-lg font-semibold text-slate-700 mb-1">{prop.name}</p>
                <p className="text-slate-500 text-sm mb-4">{prop.loc}</p>
                <div className="flex justify-between items-center text-sm text-slate-600 border-t border-slate-100 pt-4">
                  <span className="flex items-center gap-1">🛏️ {prop.beds} Beds</span>
                  <span className="flex items-center gap-1">🛁 {prop.baths} Baths</span>
                  <span className="flex items-center gap-1">📐 {prop.sqft} sqft</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Comprehensive Services</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">We offer end-to-end real estate solutions to make your property journey entirely seamless.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🔑", title: "Buying & Selling", desc: "Expert negotiation and market analysis to ensure you get the absolute best value for your transaction." },
              { icon: "📜", title: "Legal Assistance", desc: "In-house legal experts to handle documentation, registration, and title verification securely." },
              { icon: "🛠️", title: "Property Management", desc: "From tenant screening to maintenance, we manage your investment so you don't have to." }
            ].map((service, index) => (
              <motion.div key={index} whileHover={{ y: -5 }} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
                <div className="w-14 h-14 bg-white shadow-sm text-blue-600 rounded-xl flex items-center justify-center mb-6 text-2xl">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80" alt="Modern interior" className="w-full h-auto" />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h2 className="text-4xl font-bold mb-6 text-slate-900">About {businessName}</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              For over a decade, we have been the trusted name in Mumbai's real estate market. We don't just sell properties; we match people with spaces where they can thrive, build wealth, and create lasting memories.
            </p>
            <blockquote className="border-l-4 border-blue-600 pl-4 italic text-slate-500 font-medium">
              "Our mission is to make real estate transactions seamless, secure, and highly rewarding for our clients."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - SEPARATED & HOVER ANIMATED */}
      <section id="contact" className="py-12 md:py-24 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          
          {/* Left Side - Separated Card with Hover & Image Overlay */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="w-full md:w-1/2 min-h-[400px] md:min-h-[500px] bg-cover bg-center rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] relative overflow-hidden cursor-pointer"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80')" }}
          >
            <div className="absolute inset-0 bg-blue-900/85 flex flex-col justify-center p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's discuss your next move.</h2>
              <p className="text-blue-100 mb-10 text-lg">
                Leave your details below and one of our senior property consultants will reach out to you within 24 hours.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-xl">📍</div>
                  <div>
                    <p className="font-semibold text-lg">Visit Our Office</p>
                    <p className="text-blue-100">Bandra Kurla Complex, Mumbai</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-xl">📞</div>
                  <div>
                    <p className="font-semibold text-lg">Call Us Directly</p>
                    <p className="text-blue-100">+91 98765 43210</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side - Separated Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4 }}
            className="w-full md:w-1/2 bg-white p-8 md:p-12 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col justify-center border border-slate-100"
          >
            <form action="https://formsubmit.co/shivamvishwakarma1432@gmail.com" method="POST" className="space-y-6">
              <input type="hidden" name="_subject" value={`New Lead from ${businessName} Demo Site!`} />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                  <input type="text" name="First Name" required className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-slate-50 transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                  <input type="text" name="Last Name" required className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-slate-50 transition-all" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                <input type="tel" name="Phone" required className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-slate-50 transition-all" placeholder="+91 00000 00000" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">I am looking to...</label>
                <select name="Service Requested" defaultValue="" className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-slate-50 transition-all cursor-pointer">
                  <option value="" disabled>Select Option</option>
                  <option value="Buy a property">Buy a property</option>
                  <option value="Sell a property">Sell a property</option>
                  <option value="Rent a property">Rent a property</option>
                  <option value="Consulting">Consulting</option>
                </select>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-all shadow-lg mt-4"
              >
                Request Callback
              </motion.button>
            </form>
          </motion.div>

        </div>
      </section>

      {/* Business Footer - 3-Column Layout */}
      <footer className="bg-slate-950 text-slate-400 pt-16 md:pt-20 pb-40 text-center md:text-left border-t border-slate-900 mt-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-8 border-b border-slate-800 pb-10 md:pb-12">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{businessName}</h3>
            <p className="text-sm leading-relaxed max-w-xs mx-auto md:mx-0">Elevating the standards of real estate in Mumbai through transparency, trust, and premium service.</p>
          </div>
          <div>
            <h4 className="text-blue-500 font-bold mb-4 uppercase tracking-widest text-xs md:text-sm">Visit Us</h4>
            <p className="text-sm mb-2 hover:text-slate-200 transition-colors cursor-pointer">Bandra Kurla Complex</p>
            <p className="text-sm mb-2 hover:text-slate-200 transition-colors cursor-pointer">Mumbai, Maharashtra 400051</p>
            <p className="text-sm mt-4 text-white">Mon-Sat: 9:30 AM - 7 PM</p>
          </div>
          <div>
            <h4 className="text-blue-500 font-bold mb-4 uppercase tracking-widest text-xs md:text-sm">Contact</h4>
            <p className="text-sm mb-2 hover:text-slate-200 transition-colors cursor-pointer">+91 98765 43210</p>
            <p className="text-sm mb-4 hover:text-slate-200 transition-colors cursor-pointer">contact@{businessName.toLowerCase().replace(/[^a-z0-9]/g, '')}.com</p>
            <div className="flex gap-4 justify-center md:justify-start">
              <span className="w-8 h-8 bg-slate-800 flex items-center justify-center rounded-full hover:bg-blue-600 hover:text-white cursor-pointer transition-all hover:scale-110 text-xs">IN</span>
              <span className="w-8 h-8 bg-slate-800 flex items-center justify-center rounded-full hover:bg-blue-600 hover:text-white cursor-pointer transition-all hover:scale-110 text-xs">FB</span>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-[10px] md:text-xs tracking-widest uppercase text-slate-600 text-center">
          © 2026 {businessName}. All rights reserved.
        </div>
      </footer>

    </div>
  );
}