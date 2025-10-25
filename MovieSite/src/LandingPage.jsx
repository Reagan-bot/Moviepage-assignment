import { useState, useEffect } from 'react';

export default function LandingPage() {
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setIsVisible(true), 100);
    }, 2500);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-gray-700 border-t-red-600 animate-spin"></div>
        </div>
        <p className="mt-4 text-gray-300 text-lg font-medium tracking-wide animate-pulse">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center justify-center overflow-hidden">
      <div className={`text-center px-4 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg transition-all duration-700 delay-300">
          Discover Movies Instantly!
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto transition-all duration-700 delay-500">
          Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime.
        </p>
        <button className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-lg text-xl font-semibold transition-all duration-300 hover:scale-105 transform">
          Watch More
        </button>
      </div>

      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/50 to-transparent animate-pulse-slow"></div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}