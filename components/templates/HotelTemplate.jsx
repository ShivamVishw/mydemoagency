export default function HotelTemplate({ businessName }) {
    return (
      <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans">
        <header className="bg-zinc-900 text-zinc-100 p-16 text-center">
          <h1 className="text-5xl font-light mb-4 text-amber-500">{businessName}</h1>
          <p className="text-lg text-zinc-400 uppercase tracking-widest">Luxury Stay & Experience</p>
        </header>
        
        <main className="max-w-4xl mx-auto py-16 px-4 text-center">
          <h2 className="text-3xl font-light mb-4">Welcome to Your Perfect Getaway</h2>
          <p className="text-zinc-600 max-w-xl mx-auto mb-8">
            Experience world-class hospitality, exquisite dining, and unparalleled comfort in the heart of the city.
          </p>
          <button className="bg-amber-600 hover:bg-amber-500 text-white font-semibold py-3 px-8 rounded transition">
            Book Your Stay
          </button>
        </main>
      </div>
    );
  }