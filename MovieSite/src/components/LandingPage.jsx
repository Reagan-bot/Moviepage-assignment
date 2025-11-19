import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setIsVisible(true), 50);
    }, 2000);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
        <div className="relative w-16 h-16 mb-4">
          <div className="absolute inset-0 rounded-full border-4 border-gray-700 border-t-red-600 animate-spin"></div>
        </div>
        <p className="text-gray-300 text-lg font-medium tracking-wide animate-pulse">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-x-hidden">
      <div className="min-h-screen flex flex-col">
        <header className={`w-full py-6 px-8 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
        }`}>
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-red-600">MOVIEPAGE</div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#trending" className="text-gray-300 hover:text-white transition-colors">Trending</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            </nav>
          </div>
        </header>

        <main className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-24">
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold drop-shadow-2xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Discover Movies<br />Instantly!
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl leading-relaxed">
              Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mt-12">
              <Link to="/movielist" className="inline-block">
                <button className="w-full sm:w-auto px-12 py-5 bg-red-600 hover:bg-red-700 rounded-xl text-xl md:text-2xl font-bold transition-all duration-300 hover:scale-105 transform shadow-2xl hover:shadow-red-500/30">
                  Explore Movies
                </button>
              </Link>
              <Link to="#" className="inline-block">
                <button className="w-full sm:w-auto px-12 py-5 bg-transparent border-2 border-gray-600 hover:border-white rounded-xl text-xl md:text-2xl font-bold transition-all duration-300 hover:scale-105 transform">
                  Watch Trailer
                </button>
              </Link>
            </div>
          </div>
        </main>


        <section className={`w-full py-12 px-6 md:px-12 lg:px-24 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="text-center p-6 rounded-lg bg-gray-800/30 backdrop-blur-sm">
              <div className="text-3xl mb-4">🎬</div>
              <h3 className="text-xl font-bold mb-2">Thousands of Titles</h3>
              <p className="text-gray-400">From classic films to latest releases</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-800/30 backdrop-blur-sm">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-2">Watch Anywhere</h3>
              <p className="text-gray-400">On your phone, tablet, or computer</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-800/30 backdrop-blur-sm">
              <div className="text-3xl mb-4">⭐</div>
              <h3 className="text-xl font-bold mb-2">Curated Collections</h3>
              <p className="text-gray-400">Handpicked recommendations just for you</p>
            </div>
          </div>
        </section>

        {/* Footer - Very bottom */}
        <footer className="w-full py-8 px-6 border-t border-gray-800">
          <div className="text-center text-gray-500">
            <p>© 2024 MoviePage. All rights reserved.</p>
          </div>
        </footer>
      </div>

      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}