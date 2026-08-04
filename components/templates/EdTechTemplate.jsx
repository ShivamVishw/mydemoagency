export default function EdTechTemplate({ businessName }) {
    return (
      <div className="min-h-screen bg-white text-slate-900 font-sans">
        <header className="bg-blue-700 text-white p-12 text-center">
          <h1 className="text-4xl font-bold mb-2">{businessName}</h1>
          <p className="text-blue-200 text-lg">Empowering the Next Generation</p>
        </header>
        
        <main className="max-w-4xl mx-auto py-16 px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Unlock Your Potential</h2>
          <p className="text-slate-600 max-w-xl mx-auto mb-8">
            Expert-led courses, interactive learning, and proven methodologies to help you achieve your academic and career goals.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition">
            Explore Courses
          </button>
        </main>
      </div>
    );
  }