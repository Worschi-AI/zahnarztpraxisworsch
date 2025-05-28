
import React from 'react';

const OpeningHours = () => {
  return (
    <div>
      <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">Öffnungszeiten</h3>
      <div className="text-white space-y-3">
        <div className="flex justify-between items-start min-h-[1.5rem]">
          <span className="font-semibold w-8 shrink-0">Mo:</span>
          <span className="text-right flex-1">07:30 – 13:00 Uhr</span>
        </div>
        <div className="flex justify-between items-start min-h-[3rem]">
          <span className="font-semibold w-8 shrink-0">Di:</span>
          <div className="text-right flex-1 leading-6">
            08:00 – 12:00 Uhr<br />
            14:00 – 18:00 Uhr
          </div>
        </div>
        <div className="flex justify-between items-start min-h-[3rem]">
          <span className="font-semibold w-8 shrink-0">Mi:</span>
          <div className="text-right flex-1 leading-6">
            07:30 – 12:00 Uhr<br />
            14:00 – 18:00 Uhr
          </div>
        </div>
        <div className="flex justify-between items-start min-h-[3rem]">
          <span className="font-semibold w-8 shrink-0">Do:</span>
          <div className="text-right flex-1 leading-6">
            07:30 – 12:00 Uhr<br />
            14:00 – 18:00 Uhr
          </div>
        </div>
        <div className="flex justify-between items-start min-h-[1.5rem]">
          <span className="font-semibold w-8 shrink-0">Fr:</span>
          <span className="text-right flex-1">07:30 – 13:00 Uhr</span>
        </div>
        <div className="flex justify-between items-start min-h-[1.5rem]">
          <span className="font-semibold w-8 shrink-0">Sa:</span>
          <span className="text-right flex-1">Geschlossen</span>
        </div>
        <div className="flex justify-between items-start min-h-[1.5rem]">
          <span className="font-semibold w-8 shrink-0">So:</span>
          <span className="text-right flex-1">Geschlossen</span>
        </div>
      </div>
    </div>
  );
};

export default OpeningHours;
