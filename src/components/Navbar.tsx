import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    scrollToTop();
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center" onClick={scrollToTop}>
              <Scissors className="h-8 w-8 text-rose-600 transition-transform duration-300 hover:rotate-12" />
              <span className="ml-2 text-xl font-bold text-gray-900">Anchor Hair Salon</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-rose-600 focus:outline-none transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-300 hover:scale-110" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link to="/services" onClick={handleLinkClick} className="text-gray-700 hover:text-rose-600 px-3 py-2 transition-colors duration-300">Services</Link>
            <Link to="/booking" onClick={handleLinkClick} className="text-gray-700 hover:text-rose-600 px-3 py-2 transition-colors duration-300">Book Now</Link>
            <Link to="/stylists" onClick={handleLinkClick} className="text-gray-700 hover:text-rose-600 px-3 py-2 transition-colors duration-300">Our Team</Link>
            <Link to="/gallery" onClick={handleLinkClick} className="text-gray-700 hover:text-rose-600 px-3 py-2 transition-colors duration-300">Gallery</Link>
            <Link to="/contact" onClick={handleLinkClick} className="text-gray-700 hover:text-rose-600 px-3 py-2 transition-colors duration-300">Contact</Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pt-2 pb-4 space-y-1">
            <Link 
              to="/services" 
              className="block px-3 py-2 text-gray-700 hover:text-rose-600 hover:bg-gray-50 transition-colors duration-300"
              onClick={handleLinkClick}
            >
              Services
            </Link>
            <Link 
              to="/booking" 
              className="block px-3 py-2 text-gray-700 hover:text-rose-600 hover:bg-gray-50 transition-colors duration-300"
              onClick={handleLinkClick}
            >
              Book Now
            </Link>
            <Link 
              to="/stylists" 
              className="block px-3 py-2 text-gray-700 hover:text-rose-600 hover:bg-gray-50 transition-colors duration-300"
              onClick={handleLinkClick}
            >
              Our Team
            </Link>
            <Link 
              to="/gallery" 
              className="block px-3 py-2 text-gray-700 hover:text-rose-600 hover:bg-gray-50 transition-colors duration-300"
              onClick={handleLinkClick}
            >
              Gallery
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-gray-700 hover:text-rose-600 hover:bg-gray-50 transition-colors duration-300"
              onClick={handleLinkClick}
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