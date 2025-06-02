
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { TextGradientScroll } from '@/components/ui/text-gradient-scroll';

const HeroIntroSection = () => {
  const features = [
    "Personalized Treatment Plans",
    "Gentle Care for Kids and Adults",
    "State-of-the-Art Technology", 
    "Flexible Appointment Scheduling"
  ];

  const gradientScrollText = "Herzlich willkommen in der Zahnarztpraxis Worsch! Als Ihr Zahnarzt Dresden-Laubegast verbinden wir modernste Zahnmedizin mit einer persönlichen, entspannten Atmosphäre. Unser Fokus liegt auf ästhetischer Zahnheilkunde und innovativen Behandlungsmethoden, die Ihnen zu einem strahlend schönen Lächeln verhelfen. Mit digitaler Diagnostik, schonenden Behandlungsverfahren und höchsten Qualitätsstandards sorgen wir dafür, dass Sie sich bei uns rundum wohlfühlen. Ob professionelles Bleaching, unsichtbare Zahnkorrektur mit Invisalign oder ästhetische Restaurationen – wir begleiten Sie als Zahnarzt in Dresden auf dem Weg zu Ihren Traumzähnen. Vertrauen Sie auf unsere Expertise und erleben Sie Zahnmedizin, die Spaß macht.";

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-dental-white to-dental-beige/30 relative overflow-hidden">
      {/* Dezente Eck-Dekorationen */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-32 bg-dental-turquoise/15 rounded-full blur-[80px]"></div>
        <div className="absolute top-0 right-0 w-40 h-40 bg-dental-blue/12 rounded-full blur-[90px]"></div>
        <div className="absolute bottom-0 left-0 w-36 h-36 bg-dental-turquoise/10 rounded-full blur-[85px]"></div>
        <div className="absolute bottom-0 right-0 w-28 h-28 bg-dental-blue/15 rounded-full blur-[75px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Images */}
          <div className="lg:w-1/2 animate-on-scroll">
            <div className="relative flex gap-4">
              {/* Erstes Bild - größer */}
              <div className="relative flex-1">
                <div className="absolute -inset-2 bg-gradient-to-r from-dental-turquoise/20 to-dental-blue/20 rounded-2xl blur-lg"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white">
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
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white">
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
                Willkommen in Ihrer modernen Zahnarztpraxis in Dresden-Laubegast
              </h2>
              
              <div className="min-h-[400px] lg:min-h-[500px]">
                <TextGradientScroll 
                  text={gradientScrollText}
                  type="word"
                  textOpacity="soft"
                  className="text-base lg:text-lg leading-relaxed text-dental-gray"
                />
              </div>
            </div>
            
            <div className="mt-8 lg:mt-10">
              <Button asChild size="lg" className="bg-dental-turquoise hover:bg-dental-blue hover:scale-105 transition-all duration-300 text-white shadow-lg px-8 py-3">
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
