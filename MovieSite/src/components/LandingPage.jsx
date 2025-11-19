import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setIsVisible(true), 50); // Reduced delay for smoother transition
    }, 2000); // Reduced loading time
    
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
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center justify-center">
      <div className={`text-center px-6 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 drop-shadow-2xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent transition-all duration-700 delay-300">
          Discover Movies Instantly!
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-500">
          Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime.
        </p>
        <Link to="/movielist" className="inline-block">
          <button className="px-10 py-5 bg-red-600 hover:bg-red-700 rounded-xl text-xl md:text-2xl font-bold transition-all duration-300 hover:scale-110 transform shadow-2xl hover:shadow-red-500/30">
            Explore Movies
          </button>
        </Link>
        
        {/* Additional decorative elements */}
        {/* <div className="mt-16 opacity-50 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center mx-auto">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
          <p className="text-sm mt-2 text-gray-400">Scroll to discover</p>
        </div> */}
      </div>

      {/* Background overlay for better contrast */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>
    </div>
  );
}