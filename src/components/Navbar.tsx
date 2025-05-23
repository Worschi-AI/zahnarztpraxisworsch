
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { X, Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
          <Button asChild className="bg-dental-turquoise hover:bg-dental-blue text-white hover:scale-105 transform transition-all duration-300">
            <Link to="/appointment">Termin buchen</Link>
          </Button>
        </div>

        {/* Mobile Menu with Sheet Component */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="md:hidden p-2 rounded-md hover:bg-dental-beige hover:scale-105 transform transition-all duration-300">
              <Menu className="h-6 w-6 text-dental-blue" />
            </button>
          </SheetTrigger>
          <SheetContent className="w-full pt-16 bg-white">
            <div className="flex flex-col space-y-6 px-2">
              <Link 
                to="/" 
                className="py-3 px-4 text-lg font-medium hover:bg-dental-beige rounded-md transition-all hover:text-dental-blue flex items-center"
              >
                Startseite
              </Link>
              <Link 
                to="/about" 
                className="py-3 px-4 text-lg font-medium hover:bg-dental-beige rounded-md transition-all hover:text-dental-blue flex items-center"
              >
                Praxis
              </Link>
              <Link 
                to="/team" 
                className="py-3 px-4 text-lg font-medium hover:bg-dental-beige rounded-md transition-all hover:text-dental-blue flex items-center"
              >
                Team
              </Link>
              <Link 
                to="/services" 
                className="py-3 px-4 text-lg font-medium hover:bg-dental-beige rounded-md transition-all hover:text-dental-blue flex items-center"
              >
                Leistungen
              </Link>
              <Link 
                to="/contact" 
                className="py-3 px-4 text-lg font-medium hover:bg-dental-beige rounded-md transition-all hover:text-dental-blue flex items-center"
              >
                Kontakt
              </Link>
              <Button asChild className="mt-4 w-full bg-dental-turquoise hover:bg-dental-blue text-white">
                <Link to="/appointment">Termin buchen</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
