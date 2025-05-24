
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ContactCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-dental-turquoise to-dental-blue text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto animate-on-scroll">
          <h2 className="mb-4">Haben Sie Fragen oder möchten Sie direkt einen Termin vereinbaren?</h2>
          <p className="text-lg mb-8">
            Das Team der Zahnarztpraxis Worsch in Dresden Laubegast ist gerne für Sie da. 
            Wir freuen uns darauf, Sie kennenzulernen und Ihnen zu einem gesunden und schönen Lächeln zu verhelfen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-dental-blue hover:bg-dental-beige">
              <Link to="/appointment">Termin vereinbaren</Link>
            </Button>
            <Button 
              size="lg" 
              className="bg-dental-beige text-dental-blue hover:bg-white transition-all hover:scale-105"
              onClick={() => window.open('https://www.doctolib.de/zahnarzt/dresden/thomas-worsch', '_blank')}
            >
              Online buchen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
