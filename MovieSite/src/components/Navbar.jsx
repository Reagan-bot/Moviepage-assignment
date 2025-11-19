import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="w-full bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <div className="nav-logo">
            <Link 
              to="/home" 
              className="text-2xl font-extrabold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent hover:from-red-500 hover:to-red-300 transition-all duration-300"
            >
              MOVIEPAGE
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link 
              to="/home" 
              className={`relative px-4 py-2 font-semibold text-lg transition-all duration-300 group ${
                location.pathname === '/home' 
                  ? 'text-red-500' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Home
              {/* Active indicator */}
              {location.pathname === '/home' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 rounded-full"></span>
              )}
              {/* Hover effect */}
              <span className="absolute inset-0 bg-red-600/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </Link>
            
            <Link 
              to="/favorites" 
              className={`relative px-4 py-2 font-semibold text-lg transition-all duration-300 group ${
                location.pathname === '/favorites' 
                  ? 'text-red-500' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Favorites
              {/* Active indicator */}
              {location.pathname === '/favorites' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 rounded-full"></span>
              )}
              {/* Hover effect */}
              <span className="absolute inset-0 bg-red-600/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </Link>

            {/* Additional decorative element */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="w-1 h-8 bg-gray-600/50 rounded-full"></div>
              <span className="text-gray-400 text-sm">Welcome</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle glow effect */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/30 to-transparent"></div>
    </nav>
  );
};

export default Navbar;