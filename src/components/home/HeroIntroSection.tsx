
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const HeroIntroSection = () => {
  const features = [
    "Personalized Treatment Plans",
    "Gentle Care for Kids and Adults",
    "State-of-the-Art Technology", 
    "Flexible Appointment Scheduling"
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-dental-white to-dental-beige/30 relative overflow-hidden">
      {/* Dezente Eck-Dekorationen mit Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-32 bg-dental-turquoise/15 rounded-full blur-[80px] animate-float"></div>
        <div className="absolute top-0 right-0 w-40 h-40 bg-dental-blue/12 rounded-full blur-[90px] animate-float animate-delay-300"></div>
        <div className="absolute bottom-0 left-0 w-36 h-36 bg-dental-turquoise/10 rounded-full blur-[85px] animate-float animate-delay-200"></div>
        <div className="absolute bottom-0 right-0 w-28 h-28 bg-dental-blue/15 rounded-full blur-[75px] animate-float animate-delay-400"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Images */}
          <div className="lg:w-1/2 animate-on-scroll">
            <div className="relative flex gap-4">
              {/* Erstes Bild - größer */}
              <div className="relative flex-1">
                <div className="absolute -inset-2 bg-gradient-to-r from-dental-turquoise/20 to-dental-blue/20 rounded-2xl blur-lg"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-layered border-4 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1000&auto=format&fit=crop" 
                    alt="Glückliche Patientin beim Zahnarzt" 
                    className="w-full h-[300px] lg:h-[400px] object-cover"
                  />
                </div>
              </div>
              
              {/* Zweites Bild - etwas kleiner und versetzt */}
              <div className="relative flex-1 mt-8">
                <div className="absolute -inset-2 bg-gradient-to-r from-dental-blue/20 to-dental-turquoise/20 rounded-2xl blur-lg"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-layered border-4 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1609840114035-3c981e9cd8e1?q=80&w=1000&auto=format&fit=crop" 
                    alt="Zahnarzt mit Patientin - professionelle Betreuung" 
                    className="w-full h-[250px] lg:h-[320px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 animate-on-scroll">
            <div className="mb-6 lg:mb-8">
              <h2 className="mb-6 lg:mb-8 text-dental-blue leading-tight text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
                Herzlich willkommen bei Ihrem Zahnarzt in Dresden-Laubegast!
              </h2>
              
              <p className="text-base lg:text-lg leading-relaxed text-dental-gray mb-6">
                Die Zahnarztpraxis Worsch verbindet moderne Zahnheilkunde mit persönlicher Betreuung in entspannter Atmosphäre.
              </p>
              
              <p className="text-base lg:text-lg leading-relaxed text-dental-gray mb-6">
                Als spezialisierte Zahnarztpraxis in Dresden liegt unser Fokus auf ästhetischer Zahnmedizin und schonenden Behandlungsverfahren. Digitale Diagnostik und höchste Qualitätsstandards garantieren Ihnen optimale Ergebnisse für Ihre Zahngesundheit.
              </p>
              
              <p className="text-base lg:text-lg leading-relaxed text-dental-gray mb-8">
                Von hochwertigen Zahnimplantaten über Invisalign bis zu professionellem Bleaching – Wir bieten Ihnen das komplette Spektrum moderner Zahnheilkunde. Vereinbaren Sie noch heute Ihren Termin in unserer Praxis in Dresden-Laubegast.
              </p>
            </div>
            
            <div className="mt-8 lg:mt-10">
              <Button asChild size="lg" className="bg-gradient-to-r from-dental-turquoise to-dental-blue text-white hover:from-dental-blue hover:to-dental-turquoise transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-3">
                <Link to="/about">
                  Mehr über uns erfahren
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroIntroSection;
