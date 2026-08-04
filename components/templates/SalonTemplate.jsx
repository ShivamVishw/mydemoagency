export default function SalonTemplate({ businessName }) {
    return (
      <div className="min-h-screen bg-stone-900 text-amber-50 font-sans">
        <header className="p-8 border-b border-stone-800 text-center">
          <h1 className="text-4xl font-serif text-amber-400">{businessName}</h1>
          <p className="text-stone-400 mt-2 uppercase tracking-widest text-sm">Luxury Salon & Spa Experience</p>
        </header>
        
        <main className="max-w-4xl mx-auto py-16 px-4 text-center">
          <h2 className="text-3xl font-serif mb-4">Rejuvenate Your Mind & Body</h2>
          <p className="text-stone-300 max-w-xl mx-auto mb-8">
            Premium hair styling, skincare treatments, and wellness therapies designed for relaxation.
          </p>
          <button className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold py-3 px-8 rounded-full transition">
            Book Appointment Now
          </button>
        </main>
      </div>
    );
  }