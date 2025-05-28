
import React from 'react';
import { Link } from 'react-router-dom';

const Copyright = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="border-t border-white/20 mt-12 pt-8 mb-8 md:mb-0">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-center md:text-left leading-relaxed">
          &copy; {currentYear} Zahnarztpraxis Worsch. Alle Rechte vorbehalten.
        </p>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-center">
          <Link 
            to="/impressum" 
            className="hover:underline hover:text-dental-beige transition-colors duration-300 py-2 md:py-0"
          >
            Impressum
          </Link>
          <Link 
            to="/datenschutz" 
            className="hover:underline hover:text-dental-beige transition-colors duration-300 py-2 md:py-0"
          >
            Datenschutzerklärung
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
