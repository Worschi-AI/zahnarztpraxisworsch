
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Award, Heart, CheckCircle, Sparkles, Star, Users } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const HeroIntroSection = () => {
  const highlights = [
    {
      icon: <CheckCircle className="w-6 h-6 text-dental-turquoise" />,
      text: "Modernste Zahnmedizin"
    },
    {
      icon: <Heart className="w-6 h-6 text-dental-turquoise animate-pulse" />,
      text: "Persönliche Betreuung"
    },
    {
      icon: <Award className="w-6 h-6 text-dental-turquoise" />,
      text: "Ästhetische Expertise"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-dental-white via-dental-beige/30 to-dental-beige/50 relative overflow-hidden">
      {/* Floating background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-dental-turquoise/10 to-dental-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-dental-blue/8 to-dental-turquoise/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-dental-turquoise/5 to-dental-blue/5 rounded-full blur-3xl"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Sparkles className="absolute top-20 left-1/4 w-4 h-4 text-dental-turquoise/30 animate-pulse" />
        <Star className="absolute bottom-32 right-1/4 w-3 h-3 text-dental-blue/25 animate-pulse delay-1000" />
        <Users className="absolute top-1/3 left-1/6 w-5 h-5 text-dental-turquoise/20 animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content */}
          <div className="lg:w-1/2 animate-on-scroll">
            <div className="mb-6 lg:mb-8">
              <h2 className="mb-4 lg:mb-6 text-dental-blue leading-tight text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-dental-blue via-dental-blue to-dental-turquoise bg-clip-text text-transparent">
                Willkommen in Ihrer modernen Zahnarztpraxis in Dresden-Laubegast
              </h2>
              
              {/* Enhanced Highlight-Badges */}
              <div className="flex flex-wrap gap-3 lg:gap-4 mb-6 lg:mb-8">
                {highlights.map((highlight, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 lg:px-4 rounded-full shadow-soft border border-dental-turquoise/20 hover:shadow-lg hover:scale-105 transition-all duration-300 hover:bg-gradient-to-r hover:from-white hover:to-dental-turquoise/5"
                  >
                    {highlight.icon}
                    <span className="text-sm lg:text-base font-medium text-dental-gray">{highlight.text}</span>
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
              <Button asChild size="lg" className="bg-gradient-to-r from-dental-turquoise via-dental-turquoise to-dental-blue hover:from-dental-blue hover:to-dental-turquoise hover:scale-105 transition-all duration-300 text-white shadow-lg hover:shadow-xl btn-hover-effect">
                <Link to="/about" className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 animate-pulse" />
                  Mehr über uns erfahren
                </Link>
              </Button>
            </div>
          </div>

          {/* Enhanced Image */}
          <div className="lg:w-1/2 animate-on-scroll">
            <div className="relative group">
              {/* Multiple decorative backgrounds */}
              <div className="absolute -inset-6 bg-gradient-to-r from-dental-turquoise/20 via-dental-blue/15 to-dental-turquoise/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <div className="absolute -inset-4 bg-gradient-to-br from-dental-blue/10 to-dental-turquoise/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 lg:border-8 border-white group-hover:shadow-3xl transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1968&auto=format&fit=crop" 
                  alt="Moderne Praxisräume der Zahnarztpraxis Worsch in Dresden Laubegast" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700 brightness-110"
                />
                
                {/* Enhanced overlay badge */}
                <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-sm px-3 py-2 lg:px-4 rounded-lg shadow-lg border border-dental-turquoise/20 hover:shadow-xl transition-all duration-300">
                  <p className="text-sm lg:text-base font-semibold bg-gradient-to-r from-dental-blue to-dental-turquoise bg-clip-text text-transparent">
                    Praxis Dresden-Laubegast
                  </p>
                </div>

                {/* Floating quality indicators */}
                <div className="absolute top-4 right-4 lg:top-6 lg:right-6 flex flex-col gap-2">
                  <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-md">
                    <Award className="w-4 h-4 text-dental-turquoise" />
                  </div>
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
