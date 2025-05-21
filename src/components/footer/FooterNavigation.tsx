
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const FooterNavigation = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Navigation</h3>
      <ul className="space-y-2">
        <li>
          <Link to="/" className="hover:underline hover:scale-105 transform transition-all duration-300">Startseite</Link>
        </li>
        <li>
          <Link to="/about" className="hover:underline hover:scale-105 transform transition-all duration-300">Über uns</Link>
        </li>
        <li>
          <Link to="/team" className="hover:underline hover:scale-105 transform transition-all duration-300">Unser Team</Link>
        </li>
        <li>
          <Link to="/services" className="hover:underline hover:scale-105 transform transition-all duration-300">Leistungen</Link>
        </li>
        <li>
          <Link to="/appointment" className="hover:underline hover:scale-105 transform transition-all duration-300">Termine</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:underline hover:scale-105 transform transition-all duration-300">Kontakt & Anfahrt</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterNavigation;
