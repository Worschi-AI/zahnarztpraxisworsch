
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { IconSparkles, IconMoodSmile, IconEyeOff, IconTool } from '@tabler/icons-react';

const FeaturedServices = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden" style={{ backgroundColor: '#edf2fa' }}>
      {/* Dezente Eck-Dekorationen */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-24 h-24 bg-dental-turquoise/20 rounded-full blur-[60px] animate-float"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-dental-blue/18 rounded-full blur-[70px] animate-float animate-delay-200"></div>
        <div className="absolute bottom-0 left-0 w-28 h-28 bg-dental-turquoise/15 rounded-full blur-[65px] animate-float animate-delay-300"></div>
        <div className="absolute bottom-0 right-0 w-36 h-36 bg-dental-blue/20 rounded-full blur-[75px] animate-float animate-delay-100"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Desktop: Two-column layout, Mobile: Single column */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
          
          {/* Text section - left column on desktop, top on mobile */}
          <div className="animate-on-scroll mb-8 lg:mb-0 lg:sticky lg:top-8">
            <div className="mb-4 lg:mb-6">
              <span className="text-dental-turquoise font-medium text-sm md:text-base hover-text-highlight">Unsere Leistungen</span>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-dental-blue mb-4 lg:mb-6 leading-tight hover-text-highlight">
              Unsere Behandlungsschwerpunkte – Für Ihr schönstes Lächeln
            </h2>
            <p className="text-base lg:text-lg text-dental-gray mb-6 lg:mb-8 leading-relaxed">
              Entdecken Sie bei uns spezialisierte Behandlungen, die modernste Zahnmedizin mit höchsten ästhetischen Ansprüchen vereinen. Gemeinsam gestalten wir Ihr schönstes und gesündestes Lächeln.
            </p>
            
            {/* Button - in text section on desktop */}
            <div className="hidden lg:block">
              <Button asChild className="btn-premium text-white shadow-premium hover:shadow-luxury">
                <Link to="/services">Alle Leistungen ansehen</Link>
              </Button>
            </div>
          </div>

          {/* Services section - right column on desktop */}
          <div>
            {/* Services grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mb-8 lg:mb-0">
              {/* Service 1 - Ästhetische Zahnmedizin */}
              <Link 
                to="/services/aesthetische-zahnheilkunde"
                className="animate-on-scroll bg-white rounded-2xl p-4 lg:p-6 hover-premium shadow-layered block group"
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-dental-turquoise/10 rounded-xl flex items-center justify-center mb-3 lg:mb-4 icon-interactive">
                  <IconSparkles className="text-dental-turquoise icon-glow" size={20} />
                </div>
                <h3 className="text-base lg:text-lg font-semibold text-dental-blue mb-2 hover-text-highlight">
                  Ästhetische Zahnmedizin
                </h3>
                <p className="text-sm lg:text-base text-dental-gray leading-relaxed mb-3 lg:mb-4">
                  Veneers, Vollkeramikkronen und ästhetische Füllungen für ein natürlich schönes Lächeln. Mit modernster Technologie erschaffen wir Zähne, die perfekt zu Ihnen passen und jahrelang strahlen.
                </p>
                <div className="inline-flex items-center gap-2 text-dental-turquoise group-hover:text-dental-blue transition-colors font-medium text-sm">
                  Mehr erfahren <ArrowRight size={14} className="icon-rotate" />
                </div>
              </Link>

              {/* Service 2 - Professionelles Bleaching */}
              <Link 
                to="/services/aesthetische-zahnheilkunde"
                className="animate-on-scroll bg-white rounded-2xl p-4 lg:p-6 hover-premium shadow-layered block group"
                style={{ animationDelay: '100ms' }}
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-dental-turquoise/10 rounded-xl flex items-center justify-center mb-3 lg:mb-4 icon-interactive">
                  <IconMoodSmile className="text-dental-turquoise icon-glow" size={20} />
                </div>
                <h3 className="text-base lg:text-lg font-semibold text-dental-blue mb-2 hover-text-highlight">
                  Professionelles Bleaching
                </h3>
                <p className="text-sm lg:text-base text-dental-gray leading-relaxed mb-3 lg:mb-4">
                  Schonende Zahnaufhellung für bis zu 8 Nuancen hellere Zähne. Unser In-Office-Bleaching dauert nur 60 Minuten und sorgt für sofort sichtbare Ergebnisse – ganz ohne Schmerzen.
                </p>
                <div className="inline-flex items-center gap-2 text-dental-turquoise group-hover:text-dental-blue transition-colors font-medium text-sm">
                  Mehr erfahren <ArrowRight size={14} className="icon-rotate" />
                </div>
              </Link>

              {/* Service 3 - Invisalign */}
              <Link 
                to="/services/aesthetische-zahnheilkunde"
                className="animate-on-scroll bg-white rounded-2xl p-4 lg:p-6 hover-premium shadow-layered block group"
                style={{ animationDelay: '200ms' }}
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-dental-turquoise/10 rounded-xl flex items-center justify-center mb-3 lg:mb-4 icon-interactive">
                  <IconEyeOff className="text-dental-turquoise icon-glow" size={20} />
                </div>
                <h3 className="text-base lg:text-lg font-semibold text-dental-blue mb-2 hover-text-highlight">
                  Invisalign – Unsichtbare Zahnkorrektur
                </h3>
                <p className="text-sm lg:text-base text-dental-gray leading-relaxed mb-3 lg:mb-4">
                  Gerade Zähne ohne Metallspangen! Mit transparenten Alignern korrigieren wir Zahnfehlstellungen diskret und komfortabel. Ideal für Beruf und Alltag.
                </p>
                <div className="inline-flex items-center gap-2 text-dental-turquoise group-hover:text-dental-blue transition-colors font-medium text-sm">
                  Mehr erfahren <ArrowRight size={14} className="icon-rotate" />
                </div>
              </Link>

              {/* Service 4 - Moderne Implantologie */}
              <Link 
                to="/services/implantologie"
                className="animate-on-scroll bg-white rounded-2xl p-4 lg:p-6 hover-premium shadow-layered block group"
                style={{ animationDelay: '300ms' }}
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-dental-turquoise/10 rounded-xl flex items-center justify-center mb-3 lg:mb-4 icon-interactive">
                  <IconTool className="text-dental-turquoise icon-glow" size={20} />
                </div>
                <h3 className="text-base lg:text-lg font-semibold text-dental-blue mb-2 hover-text-highlight">
                  Moderne Implantologie
                </h3>
                <p className="text-sm lg:text-base text-dental-gray leading-relaxed mb-3 lg:mb-4">
                  Festsitzender Zahnersatz, der sich anfühlt wie Ihre eigenen Zähne. Mit 3D-Planung und schonenden Verfahren erhalten Sie Implantate höchster Qualität.
                </p>
                <div className="inline-flex items-center gap-2 text-dental-turquoise group-hover:text-dental-blue transition-colors font-medium text-sm">
                  Mehr erfahren <ArrowRight size={14} className="icon-rotate" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Button - below cards on mobile only */}
        <div className="text-center lg:hidden">
          <Button asChild className="btn-premium text-white shadow-premium hover:shadow-luxury">
            <Link to="/services">Alle Leistungen ansehen</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
