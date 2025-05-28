
import React from 'react';
import { Link } from 'react-router-dom';

const FooterNavigation = () => {
  return (
    <div>
      <h3 className="text-xl md:text-2xl font-bold mb-6 text-dental-turquoise">Navigation</h3>
      <ul className="space-y-3">
        <li>
          <Link to="/" className="block py-1 hover:underline hover:scale-105 transform transition-all duration-300">Startseite</Link>
        </li>
        <li>
          <Link to="/about" className="block py-1 hover:underline hover:scale-105 transform transition-all duration-300">Über uns</Link>
        </li>
        <li>
          <Link to="/team" className="block py-1 hover:underline hover:scale-105 transform transition-all duration-300">Unser Team</Link>
        </li>
        <li>
          <Link to="/services" className="block py-1 hover:underline hover:scale-105 transform transition-all duration-300">Leistungen</Link>
        </li>
        <li>
          <Link to="/appointment" className="block py-1 hover:underline hover:scale-105 transform transition-all duration-300">Termine</Link>
        </li>
        <li>
          <Link to="/contact" className="block py-1 hover:underline hover:scale-105 transform transition-all duration-300">Kontakt & Anfahrt</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterNavigation;
