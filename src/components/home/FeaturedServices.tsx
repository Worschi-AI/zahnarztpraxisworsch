
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import IconRenderer from '@/components/IconRenderer';
import { ArrowRight } from 'lucide-react';

const FeaturedServices = () => {
  return (
    <section className="py-20 bg-dental-beige">
      <div className="container mx-auto px-4">
        {/* Desktop: Two-column layout, Mobile: Single column */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
          
          {/* Text section - left column on desktop, top on mobile */}
          <div className="animate-on-scroll mb-12 lg:mb-0 lg:sticky lg:top-8">
            <div className="mb-6">
              <span className="text-dental-turquoise font-medium">Unsere Leistungen</span>
            </div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-dental-blue mb-6 leading-tight">
              Unsere Behandlungsschwerpunkte – Für Ihr schönstes Lächeln
            </h2>
            <p className="text-lg text-dental-gray mb-8 leading-relaxed">
              Entdecken Sie bei uns spezialisierte Behandlungen, die modernste Zahnmedizin mit höchsten ästhetischen Ansprüchen vereinen. Gemeinsam gestalten wir Ihr schönstes und gesündestes Lächeln.
            </p>
            
            {/* Button - in text section on desktop */}
            <div className="hidden lg:block">
              <Button asChild className="bg-dental-turquoise hover:bg-dental-blue">
                <Link to="/services">Alle Leistungen ansehen</Link>
              </Button>
            </div>
          </div>

          {/* Services section - right column on desktop */}
          <div>
            {/* Services grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mb-12 lg:mb-0">
              {/* Service 1 - Ästhetische Zahnmedizin */}
              <Link 
                to="/services/aesthetische-zahnheilkunde"
                className="animate-on-scroll bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 block group"
              >
                <div className="w-12 h-12 bg-dental-turquoise/10 rounded-xl flex items-center justify-center mb-4">
                  <IconRenderer iconName="sparkles" className="text-dental-turquoise" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-dental-blue mb-2">
                  Ästhetische Zahnmedizin
                </h3>
                <p className="text-sm text-dental-gray leading-relaxed mb-4">
                  Veneers, Vollkeramikkronen und ästhetische Füllungen für ein natürlich schönes Lächeln. Mit modernster Technologie erschaffen wir Zähne, die perfekt zu Ihnen passen und jahrelang strahlen.
                </p>
                <div className="inline-flex items-center gap-2 text-dental-turquoise group-hover:text-dental-blue transition-colors font-medium text-sm">
                  Mehr erfahren <ArrowRight size={14} />
                </div>
              </Link>

              {/* Service 2 - Professionelles Bleaching */}
              <Link 
                to="/services/aesthetische-zahnheilkunde"
                className="animate-on-scroll bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 block group"
                style={{ animationDelay: '100ms' }}
              >
                <div className="w-12 h-12 bg-dental-blue/10 rounded-xl flex items-center justify-center mb-4">
                  <IconRenderer iconName="star" className="text-dental-blue" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-dental-blue mb-2">
                  Professionelles Bleaching
                </h3>
                <p className="text-sm text-dental-gray leading-relaxed mb-4">
                  Schonende Zahnaufhellung für bis zu 8 Nuancen hellere Zähne. Unser In-Office-Bleaching dauert nur 60 Minuten und sorgt für sofort sichtbare Ergebnisse – ganz ohne Schmerzen.
                </p>
                <div className="inline-flex items-center gap-2 text-dental-turquoise group-hover:text-dental-blue transition-colors font-medium text-sm">
                  Mehr erfahren <ArrowRight size={14} />
                </div>
              </Link>

              {/* Service 3 - Invisalign */}
              <Link 
                to="/services/aesthetische-zahnheilkunde"
                className="animate-on-scroll bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 block group"
                style={{ animationDelay: '200ms' }}
              >
                <div className="w-12 h-12 bg-dental-turquoise/10 rounded-xl flex items-center justify-center mb-4">
                  <IconRenderer iconName="eye-off" className="text-dental-turquoise" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-dental-blue mb-2">
                  Invisalign – Unsichtbare Zahnkorrektur
                </h3>
                <p className="text-sm text-dental-gray leading-relaxed mb-4">
                  Gerade Zähne ohne Metallspangen! Mit transparenten Alignern korrigieren wir Zahnfehlstellungen diskret und komfortabel. Ideal für Beruf und Alltag.
                </p>
                <div className="inline-flex items-center gap-2 text-dental-turquoise group-hover:text-dental-blue transition-colors font-medium text-sm">
                  Mehr erfahren <ArrowRight size={14} />
                </div>
              </Link>

              {/* Service 4 - Moderne Implantologie */}
              <Link 
                to="/services/implantologie"
                className="animate-on-scroll bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 block group"
                style={{ animationDelay: '300ms' }}
              >
                <div className="w-12 h-12 bg-dental-blue/10 rounded-xl flex items-center justify-center mb-4">
                  <IconRenderer iconName="heart" className="text-dental-blue" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-dental-blue mb-2">
                  Moderne Implantologie
                </h3>
                <p className="text-sm text-dental-gray leading-relaxed mb-4">
                  Festsitzender Zahnersatz, der sich anfühlt wie Ihre eigenen Zähne. Mit 3D-Planung und schonenden Verfahren erhalten Sie Implantate höchster Qualität.
                </p>
                <div className="inline-flex items-center gap-2 text-dental-turquoise group-hover:text-dental-blue transition-colors font-medium text-sm">
                  Mehr erfahren <ArrowRight size={14} />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Button - below cards on mobile only */}
        <div className="text-center lg:hidden">
          <Button asChild className="bg-dental-turquoise hover:bg-dental-blue">
            <Link to="/services">Alle Leistungen ansehen</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
