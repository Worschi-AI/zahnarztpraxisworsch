
import React from 'react';
import { Button } from '@/components/ui/button';

const LocationMap = () => {
  return (
    <div className="md:w-1/2 animate-on-scroll">
      <h2 className="text-3xl font-semibold mb-8 text-dental-blue">Anfahrt</h2>
      
      {/* Google Maps Embed */}
      <div className="rounded-lg h-96 mb-6 overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.676150654196!2d13.82136837704312!3d51.02483317200493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709cf7a221d4919%3A0xc3bfeb4989337d32!2sZahnarztpraxis%20Dipl.med%20dent.%20Ute%20Worsch%20%26%20Peik%20Worsch!5e0!3m2!1sen!2sus!4v1716143269998!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Praxisstandort"
          className="rounded-lg"
        ></iframe>
      </div>
      
      <Button asChild variant="outline" className="w-full border-dental-turquoise text-dental-turquoise hover:bg-dental-turquoise hover:text-white">
        <a href="https://maps.app.goo.gl/8FQz7SawJR9QrXdh7" target="_blank" rel="noopener noreferrer">
          In Google Maps öffnen
        </a>
      </Button>
      
      <div className="mt-8 space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-2">Mit öffentlichen Verkehrsmitteln</h3>
          <p className="text-dental-gray">
            Unsere Praxis erreichen Sie gut mit öffentlichen Verkehrsmitteln:
            <ul className="list-disc pl-5 mt-2">
              <li>Straßenbahnhaltestelle: Linie 4, 10 (Haltestelle Altenberger Straße)</li>
              <li>Bushaltestelle: Linie 64, 66 (Haltestelle Österreicher Straße)</li>
            </ul>
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-2">Mit dem Auto</h3>
          <p className="text-dental-gray">
            Parkplätze finden Sie direkt vor der Praxis und in den umliegenden Straßen.
            Von der Autobahn A4 nehmen Sie die Ausfahrt Dresden-Altstadt und folgen den Schildern Richtung Leuben/Niedersedlitz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
