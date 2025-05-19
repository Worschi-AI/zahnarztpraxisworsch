import React from 'react';
import { Button } from '@/components/ui/button';
// Link von react-router-dom wird hier nicht mehr benötigt, wenn es ein externer Link ist.
// Stattdessen verwenden wir ein normales <a> Tag.
// import { Link } from 'react-router-dom'; 
import { Star } from 'lucide-react';

const PatientReviewTeaser = () => {
  const googleReviewsLink = "https://maps.app.goo.gl/DnBXcjLJpxxcPdx473";

  return (
    <section className="py-8 bg-dental-beige">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg p-5 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 animate-on-scroll">
          <div className="flex items-center">
            <Star className="h-8 w-8 text-yellow-400 fill-yellow-400 mr-3" aria-hidden="true" />
            <div>
              <p className="font-bold text-dental-blue text-lg mb-1">Über 95% zufriedene Patienten</p>
              <p className="text-dental-gray">Unsere Patienten in Dresden vertrauen uns seit Jahren.</p>
            </div>
          </div>
          {/* Button wird jetzt als <a> Tag gerendert, da es ein externer Link ist.
            'asChild' wird hier nicht benötigt, wenn wir direkt ein <a> Tag stylen oder der Button ein <a> sein kann.
            Wenn Ihre Button-Komponente ein 'href'-Prop direkt unterstützt und als <a> rendert, 
            können Sie das beibehalten. Andernfalls ist ein einfaches <a>-Tag mit Button-Styling besser.
            Ich gehe davon aus, dass Ihre Button-Komponente ein `href` verarbeiten kann oder wir ein `<a>` stylen.
            Die einfachste Lösung für externe Links ist oft ein direktes <a>-Tag.
          */}
          <Button asChild variant="outline" className="border-dental-blue text-dental-blue hover:bg-dental-blue hover:text-white whitespace-nowrap">
            <a href={googleReviewsLink} target="_blank" rel="noopener noreferrer">
              Erfahrungsberichte lesen
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PatientReviewTeaser;
