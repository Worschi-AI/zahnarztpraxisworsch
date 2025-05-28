
import React from 'react';
import { Link } from 'react-router-dom';

const Copyright = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="border-t border-white/20 mt-10 pt-8 pb-20 flex flex-col md:flex-row justify-between items-center">
      <p className="text-sm">&copy; {currentYear} Zahnarztpraxis Worsch. Alle Rechte vorbehalten.</p>
      <div className="mt-4 md:mt-0 space-x-4">
        <Link to="/impressum" className="text-sm hover:underline">Impressum</Link>
        <Link to="/datenschutz" className="text-sm hover:underline">Datenschutzerklärung</Link>
      </div>
    </div>
  );
};

export default Copyright;
