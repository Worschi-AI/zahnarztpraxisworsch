
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Award } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const HeroIntroSection = () => {
  return (
    <section className="py-0 bg-gradient-to-b from-[#F8FBFD] to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            {/* H1 Überschrift */}
            <h1 className="mb-4 text-[#004080] font-semibold px-5 pt-7 pb-5">
              Willkommen bei Zahnarzt Worsch: Ihr strahlendes Lächeln beginnt hier!
            </h1>
            
            {/* Einleitungstext */}
            <p className="text-lg mb-6 text-[#4A4A4A] font-normal px-5 pt-5 pb-7">
              Herzlich willkommen in der <strong>Zahnarztpraxis Worsch</strong> – Ihrem modernen Zentrum für umfassende Zahngesundheit und ästhetische Zahnheilkunde im Herzen von <strong className="font-bold">Dresden-Laubegast</strong>. 
            </p>
            
            {/* Blauer Infoblock */}
            <div className="bg-[#2196F3] p-8 rounded-[20px] text-white mb-10 mx-5 my-10 shadow-[0px_8px_20px_rgba(0,0,0,0.2)] animate-on-scroll">
              <div className="flex flex-col items-center text-center">
                {/* Qualitätssiegel Icon */}
                <div className="w-[60px] h-[60px] mb-4 flex items-center justify-center">
                  <Award className="w-full h-full text-[#FFD700]" />
                </div>
                
                {/* Titel im Infoblock */}
                <h3 className="font-bold text-white mb-4 text-lg text-center">
                  Mehr als 32 Jahre Leidenschaft für Ihr Lächeln
                </h3>
                
                {/* Fließtext im Infoblock */}
                <p className="text-white font-normal text-center mb-7 leading-relaxed">
                  Mit über 32 Jahren Erfahrung sind wir mit Herz und Seele für unsere Patienten da. Wir verbinden bewährte Expertise mit modernster Innovation, denn wir wissen: Ein gesundes, strahlendes Lächeln ist mehr als nur schöne Zähne – es ist ein tiefgreifender Ausdruck Ihrer Persönlichkeit, Ihres Wohlbefindens und Ihrer Lebensfreude.
                </p>
              </div>
            </div>
            
            {/* Weiterer Fließtext nach dem blauen Block */}
            <p className="text-lg mb-4 text-[#4A4A4A] font-normal px-5 pb-7">
              Unser Anspruch ist es, zahnmedizinische Exzellenz zu liefern und dabei stets den besonderen Fokus auf ästhetische Ergebnisse zu legen, die Sie begeistern und Ihr Selbstvertrauen stärken werden.
            </p>
            
            <p className="text-lg mb-8 text-[#4A4A4A] font-normal px-5">
              Unser engagiertes Team, geprägt von Fachwissen und Einfühlungsvermögen, nutzt innovative Technologien und entwickelt individuelle Behandlungskonzepte. Ob Sie eine ausführliche Beratung wünschen, sich für ästhetische Verbesserungen interessieren oder eine erstklassige zahnmedizinische Versorgung suchen – bei uns finden Sie stets die beste Betreuung.
            </p>
            
            <div className="px-5">
              <Button asChild className="bg-dental-turquoise hover:bg-dental-blue hover:scale-105 transition-all duration-300 text-white px-6 py-3">
                <Link to="/about">Mehr über uns erfahren</Link>
              </Button>
            </div>
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
