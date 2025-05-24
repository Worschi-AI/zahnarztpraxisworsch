
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const HeroIntroSection = () => {
  return (
    <section className="py-20 bg-dental-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 animate-on-scroll">
            <h2 className="mb-6">Willkommen in unserer Praxis in Dresden</h2>
            <p className="text-lg mb-6 text-dental-gray">
              In unserer modernen <strong>Zahnarztpraxis in Dresden</strong> steht Ihr Wohlbefinden an erster Stelle. Mit einem erfahrenen Team, 
              modernsten Technologien und einem ganzheitlichen Behandlungsansatz sorgen wir für Ihre Zahngesundheit 
              in angenehmer Atmosphäre.
            </p>
            <p className="text-lg mb-8 text-dental-gray">
              Unser Ziel ist es, Ihnen zu einem strahlenden Lächeln zu verhelfen und Ihre Zähne ein Leben lang 
              gesund zu erhalten. Als <strong>Zahnarzt in Dresden</strong> setzen wir auf präventive Maßnahmen, 
              schonende Behandlungsmethoden und eine vertrauensvolle Zusammenarbeit.
            </p>
            <Button asChild className="bg-dental-turquoise hover:bg-dental-blue hover:scale-105 transition-all duration-300 text-white px-6 py-3">
              <Link to="/about">Mehr über uns erfahren</Link>
            </Button>
          </div>
          <div className="md:w-1/2 animate-on-scroll">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1968&auto=format&fit=crop" 
                alt="Moderne Praxisräume der Zahnarztpraxis Worsch in Dresden" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroIntroSection;
