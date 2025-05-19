
import React from 'react';
import { Button } from '@/components/ui/button';

const LocationMap = () => {
  return (
    <div className="md:w-1/2 animate-on-scroll">
      <h2 className="text-3xl font-semibold mb-8 text-dental-blue">Anfahrt</h2>
      
      {/* Google Maps Embed */}
      <div className="rounded-lg h-96 mb-6 overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2502.6318072074173!2d13.817999876482352!3d51.13372923728572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709c8d874ed29ed%3A0x1e858f72dd623fa2!2sSt.%20Bruno-Weg%201%2C%2001920%20Haselbachtal!5e0!3m2!1sen!2sde!4v1716366845480!5m2!1sen!2sde" 
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
        <a href="https://maps.app.goo.gl/8FitwDcfzfTJCJ5H6" target="_blank" rel="noopener noreferrer">
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
