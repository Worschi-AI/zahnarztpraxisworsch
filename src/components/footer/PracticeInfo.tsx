
import React from 'react';

const PracticeInfo = () => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Zahnarztpraxis Worsch</h3>
      <p className="mb-2">
        <a 
          href="https://maps.app.goo.gl/8FQz7SawJR9QrXdh7" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Österreicher Str. 38
          <br />01279 Dresden
        </a>
      </p>
      <p>Tel: <a href="tel:+4935125227099" className="hover:underline">0351 2522709</a></p>
    </div>
  );
};

export default PracticeInfo;
