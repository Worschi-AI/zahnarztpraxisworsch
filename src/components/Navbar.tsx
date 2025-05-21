
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-xl md:text-2xl font-heading font-bold text-dental-blue">
            Zahnarztpraxis Worsch
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-medium hover:text-dental-blue transition-colors hover:scale-105 transform transition-all duration-300">
            Startseite
          </Link>
          <Link to="/about" className="font-medium hover:text-dental-blue transition-colors hover:scale-105 transform transition-all duration-300">
            Praxis
          </Link>
          <Link to="/team" className="font-medium hover:text-dental-blue transition-colors hover:scale-105 transform transition-all duration-300">
            Team
          </Link>
          <Link to="/services" className="font-medium hover:text-dental-blue transition-colors hover:scale-105 transform transition-all duration-300">
            Leistungen
          </Link>
          <Link to="/contact" className="font-medium hover:text-dental-blue transition-colors hover:scale-105 transform transition-all duration-300">
            Kontakt
          </Link>
          <Button asChild className="bg-white text-dental-blue hover:bg-dental-beige hover:scale-105 transform transition-all duration-300">
            <Link to="/appointment">Termin buchen</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-dental-gray hover:text-dental-blue hover:scale-105 transform transition-all duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="font-medium hover:text-dental-blue transition-colors py-2 hover:scale-105 transform transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Startseite
            </Link>
            <Link 
              to="/about" 
              className="font-medium hover:text-dental-blue transition-colors py-2 hover:scale-105 transform transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Praxis
            </Link>
            <Link 
              to="/team" 
              className="font-medium hover:text-dental-blue transition-colors py-2 hover:scale-105 transform transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Team
            </Link>
            <Link 
              to="/services" 
              className="font-medium hover:text-dental-blue transition-colors py-2 hover:scale-105 transform transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Leistungen
            </Link>
            <Link 
              to="/contact" 
              className="font-medium hover:text-dental-blue transition-colors py-2 hover:scale-105 transform transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Kontakt
            </Link>
            <Button asChild className="w-full bg-white text-dental-blue hover:bg-dental-beige hover:scale-105 transform transition-all duration-300">
              <Link to="/appointment" onClick={() => setIsMobileMenuOpen(false)}>Termin buchen</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
