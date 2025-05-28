import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Car, Train } from 'lucide-react';

const LocationMap = () => {
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2424.5199999253077!2d13.833839076489305!3d51.02582317170782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709c7d96d21fce9%3A0xe0acd2eb962737a1!2sZahnarztpraxis%20Dipl.med%20dent.%20Ute%20Worsch%20%26%20Peik%20Worsch!5e1!3m2!1sde!2sde!4v1748461375252!5m2!1sde!2sde";
  const googleMapsShareLink = "https://maps.app.goo.gl/zYMPy4MjAHRvKtti7";

  return (
    <div className="md:w-1/2 animate-on-scroll">
      <h2 className="text-3xl font-semibold mb-8 text-dental-blue">Ihr Weg zu uns nach Dresden Laubegast</h2>
      <p className="text-lg mb-6 text-dental-gray">
        Unsere Zahnarztpraxis befindet sich verkehrsgünstig gelegen in Dresden Laubegast und ist sowohl mit öffentlichen Verkehrsmitteln als auch mit dem Auto bequem zu erreichen.
      </p>
      
      {/* Google Maps Embed */}
      <div className="rounded-lg h-[400px] mb-6 overflow-hidden shadow-md">
        <iframe 
          src={googleMapsEmbedUrl} 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade" 
          title="Zahnarztpraxis Worsch Dresden - Standort auf Google Maps"
          className="rounded-lg"
          aria-label="Interaktive Karte mit dem Standort der Zahnarztpraxis Worsch in Dresden"
        />
      </div>
      
      <Button asChild variant="outline" className="w-full border-dental-turquoise text-dental-turquoise hover:bg-dental-turquoise hover:text-white">
        <a href={googleMapsShareLink} target="_blank" rel="noopener noreferrer">
          <MapPin className="mr-2 h-4 w-4" aria-hidden="true" /> In Google Maps öffnen
        </a>
      </Button>
      
      <div className="mt-8 space-y-6">
        <div className="flex items-start">
          <Train className="h-6 w-6 mr-3 text-dental-turquoise flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-medium mb-2">Mit öffentlichen Verkehrsmitteln</h3>
            <p className="text-dental-gray">
              Erreichen Sie uns entspannt mit Bus und Bahn. Unsere <strong>Zahnarztpraxis in Dresden</strong> ist gut mit öffentlichen Verkehrsmitteln erreichbar:
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
              Parkmöglichkeiten finden Sie direkt vor der Praxis und in den umliegenden Straßen.
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
        
        
      </div>
    </div>
  );
};

export default LocationMap;
