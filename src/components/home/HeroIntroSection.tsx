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
            
            <div className="bg-gradient-to-br from-dental-turquoise to-dental-blue rounded-[20px] text-white my-10 mx-5 px-5 py-[30px] animate-slide-up" 
                 style={{ 
                   boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
                   animationDuration: '0.6s',
                   animationTimingFunction: 'ease-out',
                   animationDelay: '0.1s'
                 }}>
              <div className="flex flex-col items-center text-center">
                <div className="mb-[15px]">
                  <svg 
                    width="60" 
                    height="60" 
                    viewBox="0 0 60 60" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto"
                  >
                    <circle cx="30" cy="30" r="28" fill="#FFD700" stroke="#FFD700" strokeWidth="2"/>
                    <circle cx="30" cy="30" r="20" fill="none" stroke="#2271b9" strokeWidth="2"/>
                    <path d="M30 15L33.5 25H44L35.5 32L39 42L30 35L21 42L24.5 32L16 25H26.5L30 15Z" fill="#2271b9"/>
                  </svg>
                </div>
                <h3 className="font-bold text-white mb-4 text-lg">
                  Mehr als 32 Jahre Leidenschaft für Ihr Lächeln
                </h3>
                <p className="text-white leading-relaxed">
                  Mit über 32 Jahren Erfahrung sind wir mit Herz und Seele für unsere Patienten da. Wir verbinden bewährte Expertise mit modernster Innovation, denn wir wissen: Ein gesundes, strahlendes Lächeln ist mehr als nur schöne Zähne – es ist ein tiefgreifender Ausdruck Ihrer Persönlichkeit, Ihres Wohlbefindens und Ihrer Lebensfreude.
                </p>
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
