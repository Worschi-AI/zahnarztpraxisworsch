
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Award, Heart } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const HeroIntroSection = () => {
  return (
    <section className="py-20 bg-dental-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 animate-on-scroll">
            <h2 className="mb-6 text-dental-blue">Willkommen in Ihrer modernen Zahnarztpraxis in Dresden-Laubegast</h2>
            
            <p className="text-lg mb-6 text-dental-gray">
              Herzlich willkommen in der <strong>Zahnarztpraxis Worsch</strong>! Als Ihr Zahnarzt Dresden-Laubegast verbinden wir modernste Zahnmedizin mit einer persönlichen, entspannten Atmosphäre. Unser Fokus liegt auf ästhetischer Zahnheilkunde und innovativen Behandlungsmethoden, die Ihnen zu einem strahlend schönen Lächeln verhelfen.
            </p>
            
            <p className="text-lg mb-6 text-dental-gray">
              Mit digitaler Diagnostik, schonenden Behandlungsverfahren und höchsten Qualitätsstandards sorgen wir dafür, dass Sie sich bei uns rundum wohlfühlen. Ob professionelles Bleaching, unsichtbare Zahnkorrektur mit Invisalign oder ästhetische Restaurationen – wir begleiten Sie als Zahnarzt in Dresden auf dem Weg zu Ihren Traumzähnen.
            </p>
            
            <p className="text-lg mb-8 text-dental-gray">
              Vertrauen Sie auf unsere Expertise und erleben Sie Zahnmedizin, die Spaß macht. Als führende Zahnarztpraxis in Dresden-Laubegast stehen Ihre Zahngesundheit und Ihr Wohlbefinden bei uns im Mittelpunkt.
            </p>
            
            <Button asChild className="bg-dental-turquoise hover:bg-dental-blue hover:scale-105 transition-all duration-300 text-white px-6 py-3">
              <Link to="/about">Mehr über uns erfahren</Link>
            </Button>
          </div>
          <div className="md:w-1/2 animate-on-scroll">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1968&auto=format&fit=crop" 
                alt="Moderne Praxisräume der Zahnarztpraxis Worsch in Dresden Laubegast" 
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
