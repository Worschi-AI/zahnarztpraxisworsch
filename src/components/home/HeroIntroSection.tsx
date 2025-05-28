
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
            <h2 className="mb-6 text-dental-blue">Willkommen bei Zahnarzt Worsch: Ihr strahlendes Lächeln beginnt hier!</h2>
            
            <p className="text-lg mb-6 text-dental-gray">
              Herzlich willkommen in der <strong>Zahnarztpraxis Worsch</strong> – Ihrem modernen Zentrum für umfassende Zahngesundheit und ästhetische Zahnheilkunde im Herzen von <strong>Dresden-Laubegast</strong>. 
            </p>
            
            <div className="bg-gradient-to-br from-dental-turquoise to-dental-blue p-6 rounded-xl text-white mb-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-white/20 rounded-full">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2 text-lg">
                    Mehr als 32 Jahre Leidenschaft für Ihr Lächeln
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    Mit über 32 Jahren Erfahrung sind wir mit Herz und Seele für unsere Patienten da. Wir verbinden bewährte Expertise mit modernster Innovation, denn wir wissen: Ein gesundes, strahlendes Lächeln ist mehr als nur schöne Zähne – es ist ein tiefgreifender Ausdruck Ihrer Persönlichkeit, Ihres Wohlbefindens und Ihrer Lebensfreude.
                  </p>
                </div>
              </div>
            </div>
            
            <p className="text-lg mb-4 text-dental-gray">
              Unser Anspruch ist es, zahnmedizinische Exzellenz zu liefern und dabei stets den besonderen Fokus auf ästhetische Ergebnisse zu legen, die Sie begeistern und Ihr Selbstvertrauen stärken werden.
            </p>
            
            <p className="text-lg mb-8 text-dental-gray">
              Unser engagiertes Team, geprägt von Fachwissen und Einfühlungsvermögen, nutzt innovative Technologien und entwickelt individuelle Behandlungskonzepte. Ob Sie eine ausführliche Beratung wünschen, sich für ästhetische Verbesserungen interessieren oder eine erstklassige zahnmedizinische Versorgung suchen – bei uns finden Sie stets die beste Betreuung.
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
