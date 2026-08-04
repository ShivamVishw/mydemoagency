"use client";

import { motion } from 'framer-motion';

export default function RealEstateTemplate({ businessName }) {
  return (
    <div className="bg-slate-50 font-sans text-slate-800">
      
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto bg-white/80 backdrop-blur-md sticky top-0 z-50 rounded-b-2xl shadow-sm mb-[-88px]">
        <div className="text-2xl font-extrabold text-slate-900 tracking-tight">{businessName}</div>
        <div className="hidden md:flex gap-8 text-sm font-bold text-slate-700">
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#properties" className="hover:text-blue-600 transition-colors">Properties</a>
          <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
          Schedule Viewing
        </button>
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
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Explore Properties
            </button>
            <button className="bg-white hover:bg-slate-50 text-slate-900 font-semibold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Sell Your Property
            </button>
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
          <button className="hidden md:block text-blue-600 font-semibold hover:text-blue-800 transition-colors">
            View All Properties →
          </button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Property 1 */}
          <motion.div whileHover={{ y: -10 }} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group cursor-pointer">
            <div className="h-64 overflow-hidden relative">
              <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">FOR SALE</div>
              <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" alt="Villa" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">₹12.5 Cr</h3>
              <p className="text-lg font-semibold text-slate-700 mb-1">Sea View Modern Villa</p>
              <p className="text-slate-500 text-sm mb-4">Worli Sea Face, Mumbai</p>
              <div className="flex justify-between items-center text-sm text-slate-600 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1">🛏️ 4 Beds</span>
                <span className="flex items-center gap-1">🛁 4 Baths</span>
                <span className="flex items-center gap-1">📐 4,500 sqft</span>
              </div>
            </div>
          </motion.div>

          {/* Property 2 */}
          <motion.div whileHover={{ y: -10 }} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group cursor-pointer">
            <div className="h-64 overflow-hidden relative">
              <div className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">NEW LAUNCH</div>
              <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80" alt="Apartment" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">₹5.2 Cr</h3>
              <p className="text-lg font-semibold text-slate-700 mb-1">Luxury Penthouse</p>
              <p className="text-slate-500 text-sm mb-4">Bandra West, Mumbai</p>
              <div className="flex justify-between items-center text-sm text-slate-600 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1">🛏️ 3 Beds</span>
                <span className="flex items-center gap-1">🛁 3 Baths</span>
                <span className="flex items-center gap-1">📐 2,200 sqft</span>
              </div>
            </div>
          </motion.div>

          {/* Property 3 */}
          <motion.div whileHover={{ y: -10 }} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group cursor-pointer">
            <div className="h-64 overflow-hidden relative">
              <div className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">COMMERCIAL</div>
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" alt="Office" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">₹18.0 Cr</h3>
              <p className="text-lg font-semibold text-slate-700 mb-1">Premium Office Space</p>
              <p className="text-slate-500 text-sm mb-4">BKC, Mumbai</p>
              <div className="flex justify-between items-center text-sm text-slate-600 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1">🏢 Grade A</span>
                <span className="flex items-center gap-1">🚗 12 Parking</span>
                <span className="flex items-center gap-1">📐 8,000 sqft</span>
              </div>
            </div>
          </motion.div>
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
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm"
              >
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

      {/* Client Testimonials Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Don't just take our word for it. Here is what people are saying about {businessName}.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "They found us our dream home in under a month. The team's professionalism and knowledge of the Mumbai market is simply unmatched.", name: "Rajesh Sharma", role: "Homeowner" },
              { text: "Sold my commercial property at 15% above asking price. Their negotiation skills and network of verified buyers made all the difference.", name: "Anita Desai", role: "Investor" },
              { text: "Managing my rental properties used to be a nightmare. Since handing it over to them, I haven't had to worry about a single thing.", name: "Vikram Mehta", role: "NRI Investor" }
            ].map((review, index) => (
              <div key={index} className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                <div className="text-yellow-400 mb-4 text-xl">★★★★★</div>
                <p className="text-slate-300 italic mb-6 leading-relaxed">"{review.text}"</p>
                <div>
                  <h4 className="font-bold text-white">{review.name}</h4>
                  <p className="text-sm text-slate-400">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 flex flex-col md:flex-row">
          
          <div className="md:w-1/2 p-12 bg-blue-600 text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <h2 className="text-4xl font-bold mb-6 relative z-10">Let's discuss your next move.</h2>
            <p className="text-blue-100 mb-10 text-lg relative z-10">
              Leave your details below and one of our senior property consultants will reach out to you within 24 hours.
            </p>
            
            <div className="space-y-8 relative z-10">
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

          <div className="md:w-1/2 p-12 bg-white">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                  <input type="text" className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-slate-50" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                  <input type="text" className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-slate-50" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                <input type="tel" className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-slate-50" placeholder="+91 00000 00000" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">I am looking to...</label>
                <select className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-slate-50">
                  <option>Buy a property</option>
                  <option>Sell a property</option>
                  <option>Rent a property</option>
                  <option>Consulting</option>
                </select>
              </div>
              <button type="button" className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-colors shadow-lg mt-4">
                Request Callback
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Business Footer (Standalone from your Watermark) */}
      <footer className="bg-slate-950 text-slate-400 py-16 text-center md:text-left">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">{businessName}</h3>
            <p className="text-slate-500 max-w-sm">Elevating the standards of real estate in Mumbai through transparency, trust, and premium service.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="#properties" className="hover:text-blue-500 transition-colors">Properties</a></li>
              <li><a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">RERA Disclaimers</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 border-t border-slate-800 pt-8 text-sm text-slate-600 text-center">
          © 2026 {businessName}. All rights reserved.
        </div>
      </footer>

    </div>
  );
}