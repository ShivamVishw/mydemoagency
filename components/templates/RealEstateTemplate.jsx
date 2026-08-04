export default function RealEstateTemplate({ businessName }) {
    return (
      <div className="min-h-screen bg-slate-900 text-white font-sans">
        <header className="p-8 border-b border-slate-800 text-center">
          <h1 className="text-4xl font-bold text-blue-400">{businessName}</h1>
          <p className="text-slate-400 mt-2">Premium Real Estate & Property Management</p>
        </header>
        
        <main className="max-w-4xl mx-auto py-16 px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Find Your Dream Property in Mumbai</h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8">
            Exclusive residential apartments, luxury villas, and commercial spaces tailored to your lifestyle.
          </p>
          <button className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg transition">
            Schedule a Consultation
          </button>
        </main>
      </div>
    );
  }