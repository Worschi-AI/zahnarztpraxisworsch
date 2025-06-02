
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Award, Heart, CheckCircle } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const HeroIntroSection = () => {
  const highlights = [
    {
      icon: <CheckCircle className="w-6 h-6 text-dental-turquoise" />,
      text: "Modernste Zahnmedizin"
    },
    {
      icon: <Heart className="w-6 h-6 text-dental-turquoise" />,
      text: "Persönliche Betreuung"
    },
    {
      icon: <Award className="w-6 h-6 text-dental-turquoise" />,
      text: "Ästhetische Expertise"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-dental-white to-dental-beige/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content */}
          <div className="lg:w-1/2 animate-on-scroll">
            <div className="mb-6 lg:mb-8">
              <h2 className="mb-4 lg:mb-6 text-dental-blue leading-tight text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                Willkommen in Ihrer modernen Zahnarztpraxis in Dresden-Laubegast
              </h2>
              
              {/* Highlight-Badges */}
              <div className="flex flex-wrap gap-3 lg:gap-4 mb-6 lg:mb-8">
                {highlights.map((highlight, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 bg-white px-3 py-2 lg:px-4 rounded-full shadow-sm border border-dental-turquoise/20 hover:shadow-md transition-all duration-300"
                  >
                    {highlight.icon}
                    <span className="text-sm lg:text-base font-medium text-dental-gray">{highlight.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none text-dental-gray space-y-4 lg:space-y-6">
              <p className="text-base lg:text-lg leading-relaxed">
                Herzlich willkommen in der <strong className="text-dental-blue">Zahnarztpraxis Worsch</strong>! Als Ihr Zahnarzt Dresden-Laubegast verbinden wir modernste Zahnmedizin mit einer persönlichen, entspannten Atmosphäre.
              </p>
              
              <p className="text-base lg:text-lg leading-relaxed">
                Unser Fokus liegt auf ästhetischer Zahnheilkunde und innovativen Behandlungsmethoden, die Ihnen zu einem strahlend schönen Lächeln verhelfen. Mit digitaler Diagnostik, schonenden Behandlungsverfahren und höchsten Qualitätsstandards sorgen wir dafür, dass Sie sich bei uns rundum wohlfühlen.
              </p>
              
              <p className="text-base lg:text-lg leading-relaxed">
                Ob professionelles Bleaching, unsichtbare Zahnkorrektur mit Invisalign oder ästhetische Restaurationen – wir begleiten Sie als Zahnarzt in Dresden auf dem Weg zu Ihren Traumzähnen. Vertrauen Sie auf unsere Expertise und erleben Sie Zahnmedizin, die Spaß macht.
              </p>
            </div>
            
            <div className="mt-8 lg:mt-10">
              <Button asChild size="lg" className="bg-dental-turquoise hover:bg-dental-blue hover:scale-105 transition-all duration-300 text-white shadow-lg">
                <Link to="/about">
                  Mehr über uns erfahren
                </Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 animate-on-scroll">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-dental-turquoise/20 to-dental-blue/20 rounded-2xl blur-xl"></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 lg:border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1968&auto=format&fit=crop" 
                  alt="Moderne Praxisräume der Zahnarztpraxis Worsch in Dresden Laubegast" 
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay badge */}
                <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 bg-white/95 backdrop-blur-sm px-3 py-2 lg:px-4 rounded-lg shadow-lg">
                  <p className="text-sm lg:text-base font-semibold text-dental-blue">
                    Praxis Dresden-Laubegast
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroIntroSection;
