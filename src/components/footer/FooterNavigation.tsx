
import React from 'react';
import { Link } from 'react-router-dom';

const FooterNavigation = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-6 text-white">Navigation</h3>
      <ul className="space-y-0">
        <li>
          <Link to="/" className="flex items-center py-2 text-white text-sm">
            <span className="mr-2">{'>'}</span>
            <span>Startseite</span>
          </Link>
        </li>
        <li>
          <Link to="/about" className="flex items-center py-2 text-white text-sm">
            <span className="mr-2">{'>'}</span>
            <span>Über uns</span>
          </Link>
        </li>
        <li>
          <Link to="/team" className="flex items-center py-2 text-white text-sm">
            <span className="mr-2">{'>'}</span>
            <span>Unser Team</span>
          </Link>
        </li>
        <li>
          <Link to="/services" className="flex items-center py-2 text-white text-sm">
            <span className="mr-2">{'>'}</span>
            <span>Leistungen</span>
          </Link>
        </li>
        <li>
          <Link to="/appointment" className="flex items-center py-2 text-white text-sm">
            <span className="mr-2">{'>'}</span>
            <span>Termine</span>
          </Link>
        </li>
        <li>
          <Link to="/contact" className="flex items-center py-2 text-white text-sm">
            <span className="mr-2">{'>'}</span>
            <span>Kontakt & Anfahrt</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterNavigation;
