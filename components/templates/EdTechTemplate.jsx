"use client";

import { motion } from 'framer-motion';

export default function EdTechTemplate({ businessName }) {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="bg-slate-50 font-sans text-slate-900 relative selection:bg-blue-600/30">
      
      {/* Floating WhatsApp CTA */}
      <motion.a 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/917275453956?text=Hi! I would like to inquire about your courses." 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ bottom: '130px', zIndex: 9999 }}
        className="fixed right-6 md:right-10 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] flex items-center justify-center group"
      >
        <span className="absolute right-16 bg-white text-slate-900 text-sm font-bold py-2 px-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Chat with an Advisor
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
        className="flex justify-between items-center p-4 md:p-6 max-w-7xl mx-auto bg-white/90 backdrop-blur-md sticky top-0 z-40 border-b border-slate-200 shadow-sm mb-[-89px]"
      >
        <div className="flex items-center gap-4">
          <a href="https://mydemoagency.vercel.app" className="text-xs font-bold bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-1.5 rounded-lg transition-colors">
            ← Agency Hub
          </a>
          <div className="text-xl md:text-2xl font-bold text-blue-700 tracking-tight truncate max-w-[150px] md:max-w-none">{businessName}</div>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-bold text-slate-600">
          <a href="#about" className="hover:text-blue-600 transition-colors">Why Us</a>
          <a href="#courses" className="hover:text-blue-600 transition-colors">Courses</a>
          <a href="#success" className="hover:text-blue-600 transition-colors">Success Stories</a>
        </div>
        <a href="#enroll" className="bg-blue-600 text-white px-5 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-bold hover:bg-blue-700 transition-all shadow-md whitespace-nowrap active:scale-95">
          Enroll Now
        </a>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 text-center md:text-left relative z-20"
          >
            <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-6 inline-block">
              Shape Your Future
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
              Master New Skills with <span className="text-blue-600">{businessName}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 font-light max-w-lg mx-auto md:mx-0">
              Empowering the next generation of leaders with expert-led courses, hands-on projects, and industry-recognized certifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#enroll" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all shadow-[0_4px_20px_rgba(37,99,235,0.4)] active:scale-95 hover:-translate-y-1 text-center">
                Start Learning Today
              </a>
              <a href="#courses" className="bg-white border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 text-slate-700 font-bold py-4 px-8 rounded-full transition-all active:scale-95 hover:-translate-y-1 text-center">
                Explore Courses
              </a>
            </div>
          </motion.div>

          {/* Hero Image - Bulletproof <img /> tag */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 relative z-20"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80" 
                alt="Students collaborating" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl hidden md:flex items-center gap-4 animate-bounce">
                <div className="bg-green-100 text-green-600 p-3 rounded-full text-xl">🎓</div>
                <div>
                  <p className="font-bold text-slate-900">10,000+</p>
                  <p className="text-xs text-slate-500 font-bold">Students Enrolled</p>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
        
        {/* Background Decorative Blob */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4"></div>
      </section>

      {/* Features/Stats Section */}
      <section id="about" className="py-16 bg-blue-700 relative z-30 mx-4 md:mx-auto max-w-6xl rounded-3xl shadow-2xl overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-blue-500/50 text-white"
        >
          <motion.div variants={itemVariants} className="px-4">
            <h3 className="text-4xl font-extrabold mb-1">98%</h3>
            <p className="text-blue-200 text-sm font-medium">Placement Rate</p>
          </motion.div>
          <motion.div variants={itemVariants} className="px-4">
            <h3 className="text-4xl font-extrabold mb-1">50+</h3>
            <p className="text-blue-200 text-sm font-medium">Expert Mentors</p>
          </motion.div>
          <motion.div variants={itemVariants} className="px-4">
            <h3 className="text-4xl font-extrabold mb-1">24/7</h3>
            <p className="text-blue-200 text-sm font-medium">Doubt Support</p>
          </motion.div>
          <motion.div variants={itemVariants} className="px-4">
            <h3 className="text-4xl font-extrabold mb-1">4.9</h3>
            <p className="text-blue-200 text-sm font-medium">Average Rating</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-24 px-4 max-w-7xl mx-auto mt-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-900">Our Top Programs</h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">Future-proof your career with our industry-vetted curriculum.</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { title: "Full Stack Development", duration: "6 Months", level: "Beginner to Pro", icon: "💻", tag: "POPULAR" },
            { title: "Data Science & AI", duration: "8 Months", level: "Intermediate", icon: "📊", tag: "NEW" },
            { title: "UI/UX Product Design", duration: "4 Months", level: "All Levels", icon: "🎨", tag: "TRENDING" }
          ].map((course, i) => (
            <motion.div 
              variants={itemVariants} 
              key={i} 
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 relative group cursor-pointer"
            >
              <div className="absolute top-6 right-6 bg-slate-100 text-slate-600 text-xs font-bold px-3 py-1 rounded-full group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors">
                {course.tag}
              </div>
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform">
                {course.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{course.title}</h3>
              <div className="flex flex-col gap-2 mb-8 border-b border-slate-100 pb-6">
                <p className="text-slate-500 flex items-center gap-2 font-medium">⏱️ {course.duration}</p>
                <p className="text-slate-500 flex items-center gap-2 font-medium">📈 {course.level}</p>
              </div>
              <a href="#enroll" className="text-blue-600 font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                View Syllabus <span>→</span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Booking/Enrollment Form Section - SPLIT LAYOUT & FUNCTIONAL */}
      <section id="enroll" className="py-12 md:py-24 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          
          {/* Image Side - Separated Card with Hover */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="w-full md:w-1/2 min-h-[400px] md:min-h-[600px] bg-cover bg-center rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] cursor-pointer overflow-hidden"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80')" }}
          >
            <div className="w-full h-full bg-gradient-to-t from-slate-900/90 to-slate-900/20 flex flex-col justify-end p-10">
              <h3 className="text-white text-3xl font-bold mb-3">Take the First Step</h3>
              <p className="text-slate-300 text-lg">Join thousands of students who have transformed their careers through our programs.</p>
            </div>
          </motion.div>

          {/* Form Side - Separated Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4 }}
            className="w-full md:w-1/2 bg-white p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-slate-800 flex flex-col justify-center rounded-3xl border border-slate-100"
          >
            <p className="text-blue-600 font-bold tracking-[0.2em] uppercase mb-2 md:mb-4 text-xs md:text-sm">Free Consultation</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 md:mb-8 text-slate-900">Request a Callback</h2>
            
            <form action="https://formsubmit.co/shivamvishwakarma1432@gmail.com" method="POST" className="space-y-4 md:space-y-6">
              <input type="hidden" name="_subject" value={`New Enrollment Inquiry from ${businessName} Demo!`} />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                  <input type="text" name="First Name" required className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all rounded-xl" placeholder="First Name" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                  <input type="text" name="Last Name" required className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all rounded-xl" placeholder="Last Name" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                  <input type="tel" name="Phone" required className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all rounded-xl" placeholder="+91 00000 00000" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Program of Interest</label>
                  <select name="Program" defaultValue="" required className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none rounded-xl cursor-pointer">
                    <option value="" disabled>Select Program</option>
                    <option value="Full Stack Development">Full Stack Development</option>
                    <option value="Data Science & AI">Data Science & AI</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Other/Not Sure">Other / Not Sure</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Current Status</label>
                <select name="Status" defaultValue="" className="w-full bg-slate-50 border border-slate-200 text-slate-900 px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none rounded-xl cursor-pointer">
                  <option value="" disabled>Select Status</option>
                  <option value="College Student">College Student</option>
                  <option value="Working Professional">Working Professional</option>
                  <option value="Looking for Job">Looking for Job</option>
                </select>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="w-full bg-blue-600 text-white font-bold py-4 uppercase tracking-wider text-sm hover:bg-blue-700 transition-all mt-4 shadow-[0_4px_14px_0_rgb(37,99,235,0.39)] rounded-xl"
              >
                Submit Inquiry
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Business Footer - Deep & Flush */}
      <footer className="bg-slate-950 text-slate-400 pt-16 md:pt-20 pb-40 text-center md:text-left border-t border-slate-900 mt-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-8 border-b border-slate-800 pb-10 md:pb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{businessName}</h3>
            <p className="text-sm leading-relaxed max-w-sm mx-auto md:mx-0">Bridging the gap between traditional education and industry requirements. We build the tech leaders of tomorrow.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs md:text-sm">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#courses" className="hover:text-blue-400 transition-colors">All Courses</a></li>
              <li><a href="#success" className="hover:text-blue-400 transition-colors">Alumni Success</a></li>
              <li><a href="#enroll" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs md:text-sm">Contact Info</h4>
            <p className="text-sm mb-2 hover:text-blue-400 transition-colors cursor-pointer">+91 98765 43210</p>
            <p className="text-sm mb-4 hover:text-blue-400 transition-colors cursor-pointer">admissions@{businessName.toLowerCase().replace(/\s+/g, '')}.edu</p>
            <div className="flex gap-4 justify-center md:justify-start">
              <span className="w-8 h-8 bg-slate-800 flex items-center justify-center rounded-full hover:bg-blue-600 hover:text-white cursor-pointer transition-all hover:scale-110 text-xs">LI</span>
              <span className="w-8 h-8 bg-slate-800 flex items-center justify-center rounded-full hover:bg-blue-600 hover:text-white cursor-pointer transition-all hover:scale-110 text-xs">YT</span>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-[10px] md:text-xs tracking-widest uppercase text-slate-600 text-center">
          © 2026 {businessName} Education. All rights reserved.
        </div>
      </footer>

    </div>
  );
}