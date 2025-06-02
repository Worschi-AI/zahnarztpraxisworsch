
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Award, Heart, CheckCircle, Sparkles } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const HeroIntroSection = () => {
  const highlights = [
    {
      icon: <CheckCircle className="w-6 h-6 text-dental-turquoise transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />,
      text: "Modernste Zahnmedizin"
    },
    {
      icon: <Heart className="w-6 h-6 text-dental-turquoise transition-transform duration-300 group-hover:scale-110 group-hover:pulse" />,
      text: "Persönliche Betreuung"
    },
    {
      icon: <Award className="w-6 h-6 text-dental-turquoise transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />,
      text: "Ästhetische Expertise"
    }
  ];

  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-br from-dental-white via-dental-beige/30 to-dental-white overflow-hidden">
      {/* Floating Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-dental-turquoise/5 to-dental-blue/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-dental-blue/5 to-dental-turquoise/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-dental-turquoise/3 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content */}
          <div className="lg:w-1/2 animate-on-scroll">
            <div className="mb-6 lg:mb-8">
              <h2 className="mb-4 lg:mb-6 text-dental-blue leading-tight text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold relative">
                Willkommen in Ihrer modernen Zahnarztpraxis in Dresden-Laubegast
                <div className="absolute -top-1 -right-8 animate-bounce">
                  <Sparkles className="w-5 h-5 text-dental-turquoise opacity-60" />
                </div>
              </h2>
              
              {/* Enhanced Highlight-Badges */}
              <div className="flex flex-wrap gap-3 lg:gap-4 mb-6 lg:mb-8">
                {highlights.map((highlight, index) => (
                  <div 
                    key={index}
                    className="group flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-full shadow-lg border border-dental-turquoise/20 hover:shadow-xl hover:border-dental-turquoise/40 transition-all duration-500 hover:scale-105 cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative">
                      {highlight.icon}
                      <div className="absolute inset-0 bg-dental-turquoise/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
                    </div>
                    <span className="text-sm lg:text-base font-medium text-dental-gray group-hover:text-dental-blue transition-colors duration-300">{highlight.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none text-dental-gray space-y-4 lg:space-y-6">
              <p className="text-base lg:text-lg leading-relaxed hover:text-dental-blue/80 transition-colors duration-300">
                Herzlich willkommen in der <strong className="text-dental-blue bg-gradient-to-r from-dental-blue to-dental-turquoise bg-clip-text text-transparent">Zahnarztpraxis Worsch</strong>! Als Ihr Zahnarzt Dresden-Laubegast verbinden wir modernste Zahnmedizin mit einer persönlichen, entspannten Atmosphäre.
              </p>
              
              <p className="text-base lg:text-lg leading-relaxed hover:text-dental-blue/80 transition-colors duration-300">
                Unser Fokus liegt auf ästhetischer Zahnheilkunde und innovativen Behandlungsmethoden, die Ihnen zu einem strahlend schönen Lächeln verhelfen. Mit digitaler Diagnostik, schonenden Behandlungsverfahren und höchsten Qualitätsstandards sorgen wir dafür, dass Sie sich bei uns rundum wohlfühlen.
              </p>
              
              <p className="text-base lg:text-lg leading-relaxed hover:text-dental-blue/80 transition-colors duration-300">
                Ob professionelles Bleaching, unsichtbare Zahnkorrektur mit Invisalign oder ästhetische Restaurationen – wir begleiten Sie als Zahnarzt in Dresden auf dem Weg zu Ihren Traumzähnen. Vertrauen Sie auf unsere Expertise und erleben Sie Zahnmedizin, die Spaß macht.
              </p>
            </div>
            
            <div className="mt-8 lg:mt-10">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-dental-turquoise to-dental-blue hover:from-dental-blue hover:to-dental-turquoise transform transition-all duration-500 hover:scale-105 text-white shadow-lg hover:shadow-2xl hover:shadow-dental-turquoise/25 relative overflow-hidden group"
              >
                <Link to="/about">
                  <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full transition-transform duration-700 group-hover:translate-x-full"></span>
                  <span className="relative z-10">Mehr über uns erfahren</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Enhanced Image */}
          <div className="lg:w-1/2 animate-on-scroll">
            <div className="relative group">
              {/* Enhanced Decorative background */}
              <div className="absolute -inset-6 bg-gradient-to-r from-dental-turquoise/20 via-dental-blue/20 to-dental-turquoise/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-dental-blue/10 to-dental-turquoise/10 rounded-2xl animate-pulse"></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 lg:border-8 border-white group-hover:shadow-3xl transition-all duration-700 transform group-hover:scale-102">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1968&auto=format&fit=crop" 
                  alt="Moderne Praxisräume der Zahnarztpraxis Worsch in Dresden Laubegast" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-1000"
                />
                
                {/* Enhanced Overlay badge */}
                <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-xl border border-dental-turquoise/20 transform group-hover:scale-105 transition-transform duration-500">
                  <p className="text-sm lg:text-base font-semibold text-dental-blue">
                    Praxis Dresden-Laubegast
                  </p>
                  <div className="w-full h-0.5 bg-gradient-to-r from-dental-turquoise to-dental-blue mt-1 rounded-full"></div>
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
