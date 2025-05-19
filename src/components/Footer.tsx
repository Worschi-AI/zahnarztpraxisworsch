
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dental-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Practice Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Zahnarztpraxis Worsch</h3>
            <p className="mb-2">
              <a 
                href="https://g.co/kgs/8A24h8o" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Österreicher Str. 38
                <br />01279 Dresden
              </a>
            </p>
            <p className="mb-1">Tel: <a href="tel:+4935125227099" className="hover:underline">0351 2522709</a></p>
            <p>Email: <a href="mailto:info@zahnarzt-worsch.de" className="hover:underline">info@zahnarzt-worsch.de</a></p>
          </div>

          {/* Öffnungszeiten */}
          <div>
            <h3 className="text-xl font-bold mb-4">Öffnungszeiten</h3>
            <div className="grid grid-cols-2 gap-2">
              <p>Montag:</p>
              <p>07:30 - 13:00 Uhr</p>
              
              <p>Dienstag:</p>
              <p>08:00 - 12:00, 14:00 - 18:00 Uhr</p>
              
              <p>Mittwoch:</p>
              <p>07:30 - 12:00, 14:00 - 18:00 Uhr</p>
              
              <p>Donnerstag:</p>
              <p>07:30 - 12:00, 14:00 - 18:00 Uhr</p>
              
              <p>Freitag:</p>
              <p>07:30 - 13:00 Uhr</p>
              
              <p>Samstag, Sonntag:</p>
              <p>Geschlossen</p>
            </div>
            <p className="mt-4 text-sm">
              Notfallnummer außerhalb der Öffnungszeiten: <a href="tel:+4935125227099" className="hover:underline">0351 2522709</a>
            </p>
          </div>

          {/* Navigation */}
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
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Zahnarztpraxis Worsch. Alle Rechte vorbehalten.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link to="/impressum" className="hover:underline">Impressum</Link>
            <Link to="/datenschutz" className="hover:underline">Datenschutzerklärung</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
