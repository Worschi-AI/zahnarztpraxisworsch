
import React from 'react';

const PracticeInfo = () => {
  const phoneNumber = "0351 2522709";
  
  return (
    <div>
      <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">
        Zahnarztpraxis Dipl.med dent.<br />Ute Worsch & Peik Worsch
      </h3>
      <div className="space-y-3">
        <p className="leading-relaxed">
          <a 
            href="https://maps.app.goo.gl/8FQz7SawJR9QrXdh7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline hover:scale-105 transform transition-all duration-300 block"
          >
            Österreicher Str. 38
            <br />01279 Dresden
          </a>
        </p>
        <p className="leading-relaxed">
          Tel: <a 
                href={`tel:+49${phoneNumber.replace(/\s/g, '')}`}
                className="text-white hover:text-dental-beige hover:underline transition-colors duration-300"
              >
                {phoneNumber}
              </a>
        </p>
      </div>
    </div>
  );
};

export default PracticeInfo;
