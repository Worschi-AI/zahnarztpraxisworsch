
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Award, Heart, Sparkles } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const HeroIntroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-dental-white via-gray-50 to-dental-beige relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-dental-turquoise/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-dental-blue/10 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 animate-on-scroll">
            <div className="inline-flex items-center gap-2 bg-dental-turquoise/10 px-4 py-2 rounded-full mb-6">
              <Sparkles className="text-dental-turquoise w-4 h-4" />
              <span className="text-dental-turquoise font-medium text-sm">Über 32 Jahre Erfahrung</span>
            </div>
            
            <h2 className="mb-6 text-dental-blue bg-gradient-to-r from-dental-blue to-dental-turquoise bg-clip-text text-transparent">
              Willkommen bei Zahnarzt Worsch: Ihr strahlendes Lächeln beginnt hier!
            </h2>
            
            <p className="text-lg mb-6 text-dental-gray">
              Herzlich willkommen in der <strong>Zahnarztpraxis Worsch</strong> – Ihrem modernen Zentrum für umfassende Zahngesundheit und ästhetische Zahnheilkunde im Herzen von <strong>Dresden-Laubegast</strong>. 
            </p>
            
            <div className="bg-gradient-to-br from-dental-turquoise via-dental-blue to-dental-turquoise rounded-[20px] text-white my-10 mx-5 px-5 py-[30px] animate-slide-up shadow-2xl hover:shadow-3xl transition-shadow duration-300 relative overflow-hidden" 
                 style={{ 
                   animationDuration: '0.6s',
                   animationTimingFunction: 'ease-out',
                   animationDelay: '0.1s'
                 }}>
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full animate-pulse"></div>
              
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="mb-[15px] relative">
                  <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-lg animate-pulse"></div>
                  <svg 
                    width="60" 
                    height="60" 
                    viewBox="0 0 60 60" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto relative z-10 hover:scale-110 transition-transform duration-300"
                  >
                    <circle cx="30" cy="30" r="28" fill="#FFD700" stroke="#FFD700" strokeWidth="2" className="drop-shadow-lg"/>
                    <circle cx="30" cy="30" r="20" fill="none" stroke="#2271b9" strokeWidth="2"/>
                    <path d="M30 15L33.5 25H44L35.5 32L39 42L30 35L21 42L24.5 32L16 25H26.5L30 15Z" fill="#2271b9"/>
                  </svg>
                </div>
                <h3 className="font-bold text-white mb-4 text-lg">
                  Mehr als 32 Jahre Leidenschaft für Ihr Lächeln
                </h3>
                <p className="text-white/90 leading-relaxed">
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
            
            <Button asChild className="bg-gradient-to-r from-dental-turquoise to-dental-blue hover:from-dental-blue hover:to-dental-turquoise hover:scale-105 transform transition-all duration-300 text-white px-8 py-4 shadow-lg hover:shadow-xl">
              <Link to="/about" className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Mehr über uns erfahren
              </Link>
            </Button>
          </div>
          <div className="md:w-1/2 animate-on-scroll">
            <div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500 transform hover:-translate-y-2 transition-transform">
              <div className="relative group">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1968&auto=format&fit=crop" 
                  alt="Moderne Praxisräume der Zahnarztpraxis Worsch in Dresden Laubegast" 
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dental-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroIntroSection;
