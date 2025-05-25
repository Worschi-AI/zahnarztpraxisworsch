
import React, { useEffect } from 'react';
import { Star } from 'lucide-react';

const PatientReviewTeaser = () => {
  useEffect(() => {
    // Load Elfsight script if not already loaded
    if (!document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://static.elfsight.com/platform/platform.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section className="py-8 bg-dental-beige">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg p-5 shadow-sm animate-on-scroll">
          <div className="flex items-center mb-4">
            <Star className="h-8 w-8 text-yellow-400 fill-yellow-400 mr-3" aria-hidden="true" />
            <div>
              <p className="font-bold text-dental-blue text-lg mb-1">Über 95% zufriedene Patienten – Ihre Zahnarztpraxis in Dresden Laubegast</p>
              <p className="text-dental-gray">Das Vertrauen unserer Patienten ist unser größter Ansporn. Lesen Sie, warum junge und anspruchsvolle Patienten aus Dresden und Umgebung auf die Expertise der Zahnarztpraxis Worsch setzen.</p>
            </div>
          </div>
          
          {/* Elfsight Google Reviews Widget */}
          <div className="elfsight-app-b5dcc0c0-695c-4bfe-94b2-fc196730a66b" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>
  );
};

export default PatientReviewTeaser;
