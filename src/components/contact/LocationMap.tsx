
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Car, Train } from 'lucide-react';

const LocationMap = () => {
  return (
    <div className="md:w-1/2 animate-on-scroll">
      <h2 className="text-3xl font-semibold mb-8 text-dental-blue">Anfahrt</h2>
      
      {/* Google Maps Embed */}
      <div className="rounded-lg h-[400px] mb-6 overflow-hidden shadow-md">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2509.780573326115!2d13.7989226!3d51.0043052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s2RGP%2B8H%20Dresden%2C%20Germany!5e0!3m2!1sen!2sus!4v1716509292708!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Zahnarztpraxis Worsch Dresden"
          className="rounded-lg"
        ></iframe>
      </div>
      
      <Button asChild variant="outline" className="w-full border-dental-turquoise text-dental-turquoise hover:bg-dental-turquoise hover:text-white">
        <a href="https://maps.app.goo.gl/DnBXcjLJpxxcPdx47" target="_blank" rel="noopener noreferrer">
          <MapPin className="mr-2 h-4 w-4" /> In Google Maps öffnen
        </a>
      </Button>
      
      <div className="mt-8 space-y-6">
        <div className="flex items-start">
          <Train className="h-6 w-6 mr-3 text-dental-turquoise flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-medium mb-2">Mit öffentlichen Verkehrsmitteln</h3>
            <p className="text-dental-gray">
              Unsere <strong>Zahnarztpraxis in Dresden</strong> erreichen Sie gut mit öffentlichen Verkehrsmitteln:
            </p>
            <ul className="list-disc pl-5 mt-2 text-dental-gray">
              <li>Straßenbahnhaltestelle: Linie 4, 10 (Haltestelle Altenberger Straße)</li>
              <li>Bushaltestelle: Linie 64, 66 (Haltestelle Österreicher Straße)</li>
            </ul>
          </div>
        </div>
        
        <div className="flex items-start">
          <Car className="h-6 w-6 mr-3 text-dental-turquoise flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-medium mb-2">Mit dem Auto</h3>
            <p className="text-dental-gray">
              Parkplätze finden Sie direkt vor der Praxis und in den umliegenden Straßen.
              Von der Autobahn A4 nehmen Sie die Ausfahrt Dresden-Altstadt und folgen den Schildern Richtung Leuben/Niedersedlitz.
            </p>
            <p className="mt-2 text-dental-gray">
              <strong>Parkmöglichkeiten:</strong>
            </p>
            <ul className="list-disc pl-5 mt-1 text-dental-gray">
              <li>Praxiseigene Parkplätze direkt vor dem Eingang (begrenzte Anzahl)</li>
              <li>Öffentliche Parkplätze in den angrenzenden Straßen</li>
              <li>Parkhaus "Center Niedersedlitz" in 5 Minuten Fußweg</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-dental-turquoise/10 rounded-md text-center">
          <p className="text-dental-blue font-medium">
            Unsere Praxisräume sind vollständig barrierefrei zugänglich
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
