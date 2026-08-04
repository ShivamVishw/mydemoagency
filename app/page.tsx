import Watermark from '../components/Watermark';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-8 text-center font-sans relative pb-24">
      <h1 className="text-5xl font-bold mb-4">Shivam Vishwakarma</h1>
      <p className="text-xl text-blue-400 mb-8">Freelance Full Stack Developer</p>
      
      <p className="text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
        I build high-performance, dynamic, and responsive websites that help local businesses attract more customers and increase their revenue.
      </p>
      
      <div className="flex justify-center gap-6">
        <a 
          href="mailto:shivamvishwakarma1432@gmail.com" 
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg transition"
        >
          Hire Me
        </a>
      </div>
      
      {/* Here is where we add your footer! */}
      <Watermark />
    </div>
  );
}