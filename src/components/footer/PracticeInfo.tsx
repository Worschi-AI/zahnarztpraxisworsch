
import React from 'react';
import PhoneButton from '@/components/PhoneButton';

const PracticeInfo = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">
        Zahnarztpraxis Dipl.med dent.<br />
        Ute Worsch & Peik Worsch
      </h3>
      <p className="mb-2">
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
      <p>Tel: <PhoneButton 
        variant="link" 
        showIcon={false} 
        className="p-0 h-auto text-white hover:text-dental-beige hover:scale-105 transform transition-all duration-300" 
      /></p>
    </div>
  );
};

export default PracticeInfo;
