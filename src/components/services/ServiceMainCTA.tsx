
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ServiceMainCTA: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-dental-turquoise to-dental-blue text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto animate-on-scroll">
          <h2 className="mb-4">Vereinbaren Sie einen Beratungstermin</h2>
          <p className="text-lg mb-8">
            Sie haben Interesse an dieser Behandlung oder benötigen weitere Informationen? 
            Wir beraten Sie gerne ausführlich in unserer Praxis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-dental-blue hover:bg-dental-beige">
              <Link to="/appointment">Termin vereinbaren</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white hover:bg-white hover:text-dental-blue">
              <Link to="/contact">Kontakt aufnehmen</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceMainCTA;
