
import React from 'react';

const OpeningHours = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Öffnungszeiten</h3>
      <div className="text-white space-y-1.5">
        <div className="flex items-start">
          <span className="font-semibold inline-block w-12 shrink-0">Mo:</span>
          <span>07:30 – 13:00 Uhr</span>
        </div>
        <div className="flex items-start">
          <span className="font-semibold inline-block w-12 shrink-0 align-top">Di:</span>
          <span className="inline-block">
            08:00 – 12:00 Uhr<br />
            14:00 – 18:00 Uhr
          </span>
        </div>
        <div className="flex items-start">
          <span className="font-semibold inline-block w-12 shrink-0 align-top">Mi:</span>
          <span className="inline-block">
            07:30 – 12:00 Uhr<br />
            14:00 – 18:00 Uhr
          </span>
        </div>
        <div className="flex items-start">
          <span className="font-semibold inline-block w-12 shrink-0 align-top">Do:</span>
          <span className="inline-block">
            07:30 – 12:00 Uhr<br />
            14:00 – 18:00 Uhr
          </span>
        </div>
        <div className="flex items-start">
          <span className="font-semibold inline-block w-12 shrink-0">Fr:</span>
          <span>07:30 – 13:00 Uhr</span>
        </div>
        <div className="flex items-start">
          <span className="font-semibold inline-block w-12 shrink-0">Sa:</span>
          <span>Geschlossen</span>
        </div>
        <div className="flex items-start">
          <span className="font-semibold inline-block w-12 shrink-0">So:</span>
          <span>Geschlossen</span>
        </div>
      </div>
    </div>
  );
};

export default OpeningHours;
