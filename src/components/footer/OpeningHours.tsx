
import React from 'react';

const OpeningHours = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 text-dental-turquoise">Öffnungszeiten</h3>
      <div className="text-white space-y-1.5">
        <div className="flex">
          <span className="font-semibold w-12 shrink-0">Mo:</span>
          <span>07:30 – 13:00 Uhr</span>
        </div>
        <div className="flex">
          <span className="font-semibold w-12 shrink-0">Di:</span>
          <span className="flex flex-col">
            <span>08:00 – 12:00 Uhr</span>
            <span>14:00 – 18:00 Uhr</span>
          </span>
        </div>
        <div className="flex">
          <span className="font-semibold w-12 shrink-0">Mi:</span>
          <span className="flex flex-col">
            <span>07:30 – 12:00 Uhr</span>
            <span>14:00 – 18:00 Uhr</span>
          </span>
        </div>
        <div className="flex">
          <span className="font-semibold w-12 shrink-0">Do:</span>
          <span className="flex flex-col">
            <span>07:30 – 12:00 Uhr</span>
            <span>14:00 – 18:00 Uhr</span>
          </span>
        </div>
        <div className="flex">
          <span className="font-semibold w-12 shrink-0">Fr:</span>
          <span>07:30 – 13:00 Uhr</span>
        </div>
        <div className="flex">
          <span className="font-semibold w-12 shrink-0">Sa:</span>
          <span>Geschlossen</span>
        </div>
        <div className="flex">
          <span className="font-semibold w-12 shrink-0">So:</span>
          <span>Geschlossen</span>
        </div>
      </div>
    </div>
  );
};

export default OpeningHours;
