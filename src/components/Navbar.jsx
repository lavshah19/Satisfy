// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-indigo-600 text-white py-6 px-2 md:p-6 shadow-md sticky top-0 w-full z-20">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <h1 className="sm:text-md md:text-2xl font-bold">
          <span className="text-yellow-500">Satisfy</span> Trading & Services W.L.L
        </h1>
        <button
          className="text-white md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="navbar-menu"
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
        <div 
          id="navbar-menu" 
          className={`w-full md:flex md:items-center md:w-auto ${isOpen ? '' : 'hidden'}`}
        >
          <div className={`flex flex-col md:flex-row md:space-x-6 text-md md:text-xl ${isOpen ? 'mt-4 gap-3' : ''}`}>
            <Link 
              to="/" 
              className={`hover:text-indigo-200 relative ${location.pathname === '/' ? 'text-indigo-200 border-b-2 border-yellow-400' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`hover:text-indigo-200 relative ${location.pathname === '/about' ? 'text-indigo-200 border-b-2 border-yellow-400' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`hover:text-indigo-200 relative ${location.pathname === '/services' ? 'text-indigo-200 border-b-2 border-yellow-400' : ''}`}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className={`hover:text-indigo-200 relative ${location.pathname === '/contact' ? 'text-indigo-200 border-b-2 border-yellow-400' : ''}`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
