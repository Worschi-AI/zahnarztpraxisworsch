
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const FooterNavigation = () => {
  return (
    <div>
      <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">Navigation</h3>
      <ul className="space-y-4">
        <li>
          <Link 
            to="/" 
            className="block py-2 hover:underline hover:scale-105 transform transition-all duration-300 hover:text-dental-beige"
          >
            Startseite
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            className="block py-2 hover:underline hover:scale-105 transform transition-all duration-300 hover:text-dental-beige"
          >
            Über uns
          </Link>
        </li>
        <li>
          <Link 
            to="/team" 
            className="block py-2 hover:underline hover:scale-105 transform transition-all duration-300 hover:text-dental-beige"
          >
            Unser Team
          </Link>
        </li>
        <li>
          <Link 
            to="/services" 
            className="block py-2 hover:underline hover:scale-105 transform transition-all duration-300 hover:text-dental-beige"
          >
            Leistungen
          </Link>
        </li>
        <li>
          <Link 
            to="/appointment" 
            className="block py-2 hover:underline hover:scale-105 transform transition-all duration-300 hover:text-dental-beige"
          >
            Termine
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
            className="block py-2 hover:underline hover:scale-105 transform transition-all duration-300 hover:text-dental-beige"
          >
            Kontakt & Anfahrt
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterNavigation;
