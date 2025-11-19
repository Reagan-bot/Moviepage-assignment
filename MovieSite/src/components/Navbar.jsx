import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar display-flex justify-between items-center p-4 bg-gray-900 text-white shadow-md">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/home">MovieSearch</Link>
        </div>
        <div className="nav-links">
          <Link 
            to="/home" 
            className={location.pathname === '/home' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </Link>
          <Link 
            to="/favorites" 
            className={location.pathname === '/favorites' ? 'nav-link active' : 'nav-link'}
          >
            Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;