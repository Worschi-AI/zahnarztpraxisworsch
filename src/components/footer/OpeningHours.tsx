
import React from 'react';

const OpeningHours = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Öffnungszeiten</h3>
      <div className="grid grid-cols-2 gap-y-3">
        <p>Montag:</p>
        <p>07:30 - 13:00 Uhr</p>
        
        <p>Dienstag:</p>
        <div>
          <p>08:00 - 12:00 Uhr</p>
          <p>14:00 - 18:00 Uhr</p>
        </div>
        
        <p>Mittwoch:</p>
        <div>
          <p>07:30 - 12:00 Uhr</p>
          <p>14:00 - 18:00 Uhr</p>
        </div>
        
        <p>Donnerstag:</p>
        <div>
          <p>07:30 - 12:00 Uhr</p>
          <p>14:00 - 18:00 Uhr</p>
        </div>
        
        <p>Freitag:</p>
        <p>07:30 - 13:00 Uhr</p>
        
        <p>Samstag, Sonntag:</p>
        <p>Geschlossen</p>
      </div>
    </div>
  );
};

export default OpeningHours;
