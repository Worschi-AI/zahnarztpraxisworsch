
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const TeamCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-dental-turquoise to-dental-blue text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto animate-on-scroll">
          <h2 className="mb-4">Lernen Sie uns persönlich kennen und lassen Sie sich umfassend beraten!</h2>
          <p className="text-lg mb-8">
            Das gesamte Team der <strong>Zahnarztpraxis Worsch in Dresden-Laubegast</strong> freut sich darauf, Sie bald persönlich willkommen zu heißen! Wir möchten Sie individuell betreuen und Ihnen die besten Lösungen für Ihre Zahngesundheit und ästhetischen Wünsche anbieten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-dental-blue hover:bg-dental-beige">
              <Link to="/appointment">Termin vereinbaren</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white hover:bg-white hover:text-dental-blue">
              <Link to="/contact">Kontakt & Anfahrt</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCTA;
