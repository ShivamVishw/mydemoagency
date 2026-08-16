export default function Watermark() {
    return (
      <footer className="fixed bottom-0 left-0 w-full bg-black/90 text-white p-4 border-t border-blue-500/50 backdrop-blur-md z-50 text-center">
        <p className="text-xs text-slate-400 uppercase tracking-wider">Designed & Developed by</p>
        <h3 className="text-lg font-bold text-white">Shivam Vishwakarma | Freelance Developer</h3>
        <div className="flex justify-center gap-6 mt-1 text-sm text-blue-400">
          <a href="mailto:shivamvishwakarma1432@gmail.com" className="hover:underline">
            📧 shivamvishwakarma1432@gmail.com
          </a>
          {/* <a href="tel:+917275453956" className="hover:underline">
            📞 +91 72754 53956
          </a> */}
        </div>
      </footer>
    );
  }