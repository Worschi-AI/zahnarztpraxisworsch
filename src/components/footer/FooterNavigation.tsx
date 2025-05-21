
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const FooterNavigation = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Navigation</h3>
      <ul className="space-y-2">
        <li>
          <Link to="/" className="hover:underline">Startseite</Link>
        </li>
        <li>
          <Link to="/about" className="hover:underline">Über uns</Link>
        </li>
        <li>
          <Link to="/team" className="hover:underline">Unser Team</Link>
        </li>
        <li>
          <Link to="/services" className="hover:underline">Leistungen</Link>
        </li>
        <li>
          <Link to="/appointment" className="hover:underline">Termine</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:underline">Kontakt & Anfahrt</Link>
        </li>
      </ul>
      <Button asChild className="mt-4 bg-white text-dental-blue hover:bg-dental-beige hover:scale-105 transition-all">
        <Link to="/appointment">Termin buchen</Link>
      </Button>
    </div>
  );
};

export default FooterNavigation;
