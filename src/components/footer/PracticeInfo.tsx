
import React from 'react';

const PracticeInfo = () => {
  const phoneNumber = "0351 2522709";
  
  return (
    <div>
      <h3 className="text-xl font-bold text-white">Zahnarztpraxis Worsch</h3>
      <p className="mb-2 text-sm">
        <a 
          href="https://maps.app.goo.gl/8FQz7SawJR9QrXdh7" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:underline hover:scale-105 transform transition-all duration-300"
        >
          Österreicher Str. 38
          <br />01279 Dresden
        </a>
      </p>
      <p className="text-sm">Tel: <a 
            href={`tel:+49${phoneNumber.replace(/\s/g, '')}`}
            className="text-white hover:text-dental-beige hover:underline"
          >
            {phoneNumber}
          </a>
      </p>
    </div>
  );
};

export default PracticeInfo;
