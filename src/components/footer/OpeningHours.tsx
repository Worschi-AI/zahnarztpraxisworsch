
import React from 'react';

const OpeningHours = () => {
  return (
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
  );
};

export default OpeningHours;
