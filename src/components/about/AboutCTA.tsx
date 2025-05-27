
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AboutCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-dental-turquoise to-dental-blue text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto animate-on-scroll">
          <h2 className="mb-4 animate-on-scroll">Überzeugt? Lernen Sie uns persönlich kennen!</h2>
          <p className="text-lg mb-8 animate-on-scroll">
            Wir freuen uns darauf, Sie in unserer modernen <strong>Zahnarztpraxis in Dresden Laubegast</strong> begrüßen zu dürfen und Ihnen die Möglichkeiten für Ihr perfektes Lächeln aufzuzeigen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-dental-blue hover:bg-dental-beige transition-all hover:scale-105 animate-on-scroll">
              <Link to="/appointment">Termin vereinbaren</Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-dental-blue hover:bg-dental-beige transition-all hover:scale-105 animate-on-scroll">
              <Link to="/team">Unser Team kennenlernen</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
