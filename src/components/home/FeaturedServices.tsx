
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import IconRenderer from '@/components/IconRenderer';
import { ArrowRight, Sparkles } from 'lucide-react';

const FeaturedServices = () => {
  const services = [
    {
      id: 1,
      title: "Ästhetische Zahnmedizin",
      description: "Veneers, Vollkeramikkronen und ästhetische Füllungen für ein natürlich schönes Lächeln. Mit modernster Technologie erschaffen wir Zähne, die perfekt zu Ihnen passen und jahrelang strahlen.",
      icon: "sparkles" as const,
      iconBg: "bg-dental-turquoise/10",
      iconColor: "text-dental-turquoise",
      link: "/services/aesthetische-zahnheilkunde",
      gradient: "from-dental-turquoise/5 to-dental-blue/5"
    },
    {
      id: 2,
      title: "Professionelles Bleaching",
      description: "Schonende Zahnaufhellung für bis zu 8 Nuancen hellere Zähne. Unser In-Office-Bleaching dauert nur 60 Minuten und sorgt für sofort sichtbare Ergebnisse – ganz ohne Schmerzen.",
      icon: "star" as const,
      iconBg: "bg-dental-blue/10",
      iconColor: "text-dental-blue",
      link: "/services/aesthetische-zahnheilkunde",
      gradient: "from-dental-blue/5 to-dental-turquoise/5"
    },
    {
      id: 3,
      title: "Invisalign – Unsichtbare Zahnkorrektur",
      description: "Gerade Zähne ohne Metallspangen! Mit transparenten Alignern korrigieren wir Zahnfehlstellungen diskret und komfortabel. Ideal für Beruf und Alltag.",
      icon: "eye-off" as const,
      iconBg: "bg-dental-turquoise/10",
      iconColor: "text-dental-turquoise",
      link: "/services/aesthetische-zahnheilkunde",
      gradient: "from-dental-turquoise/5 to-dental-blue/5"
    },
    {
      id: 4,
      title: "Moderne Implantologie",
      description: "Festsitzender Zahnersatz, der sich anfühlt wie Ihre eigenen Zähne. Mit 3D-Planung und schonenden Verfahren erhalten Sie Implantate höchster Qualität.",
      icon: "heart" as const,
      iconBg: "bg-dental-blue/10",
      iconColor: "text-dental-blue",
      link: "/services/implantologie",
      gradient: "from-dental-blue/5 to-dental-turquoise/5"
    }
  ];

  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-br from-dental-beige via-dental-white to-dental-beige overflow-hidden">
      {/* Enhanced Floating Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-dental-turquoise/8 to-dental-blue/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-br from-dental-blue/8 to-dental-turquoise/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-dental-turquoise/4 to-dental-blue/4 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '6s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Desktop: Two-column layout, Mobile: Single column */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
          
          {/* Enhanced Text section */}
          <div className="animate-on-scroll mb-8 lg:mb-0 lg:sticky lg:top-8">
            <div className="mb-4 lg:mb-6">
              <span className="relative text-dental-turquoise font-medium text-sm md:text-base px-3 py-1 bg-dental-turquoise/10 rounded-full">
                Unsere Leistungen
                <div className="absolute -top-1 -right-1 animate-pulse">
                  <Sparkles className="w-3 h-3 text-dental-turquoise" />
                </div>
              </span>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-dental-blue mb-4 lg:mb-6 leading-tight relative">
              Unsere Behandlungsschwerpunkte – Für Ihr schönstes Lächeln
              <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-dental-turquoise to-dental-blue rounded-full"></div>
            </h2>
            <p className="text-base lg:text-lg text-dental-gray mb-6 lg:mb-8 leading-relaxed hover:text-dental-blue/80 transition-colors duration-300">
              Entdecken Sie bei uns spezialisierte Behandlungen, die modernste Zahnmedizin mit höchsten ästhetischen Ansprüchen vereinen. Gemeinsam gestalten wir Ihr schönstes und gesündestes Lächeln.
            </p>
            
            {/* Enhanced Button */}
            <div className="hidden lg:block">
              <Button 
                asChild 
                className="bg-gradient-to-r from-dental-turquoise to-dental-blue hover:from-dental-blue hover:to-dental-turquoise transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-dental-turquoise/25 relative overflow-hidden group"
              >
                <Link to="/services">
                  <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full transition-transform duration-700 group-hover:translate-x-full"></span>
                  <span className="relative z-10">Alle Leistungen ansehen</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Enhanced Services section */}
          <div>
            {/* Services grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mb-8 lg:mb-0">
              {services.map((service, index) => (
                <Link 
                  key={service.id}
                  to={service.link}
                  className="group animate-on-scroll bg-white/80 backdrop-blur-sm rounded-2xl p-4 lg:p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 block border border-white/50 hover:border-dental-turquoise/30 relative overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className={`w-12 h-12 lg:w-14 lg:h-14 ${service.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 relative`}>
                      <IconRenderer iconName={service.icon} className={`${service.iconColor} group-hover:rotate-12 transition-transform duration-500`} size={24} />
                      <div className="absolute inset-0 bg-white/20 rounded-xl scale-0 group-hover:scale-110 transition-transform duration-500"></div>
                    </div>
                    <h3 className="text-base lg:text-lg font-semibold text-dental-blue mb-2 group-hover:text-dental-turquoise transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm lg:text-base text-dental-gray leading-relaxed mb-4 group-hover:text-dental-blue/80 transition-colors duration-300">
                      {service.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-dental-turquoise group-hover:text-dental-blue transition-colors font-medium text-sm">
                      <span>Mehr erfahren</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Button - mobile only */}
        <div className="text-center lg:hidden mt-8">
          <Button 
            asChild 
            className="bg-gradient-to-r from-dental-turquoise to-dental-blue hover:from-dental-blue hover:to-dental-turquoise transform transition-all duration-500 hover:scale-105 hover:shadow-xl relative overflow-hidden group"
          >
            <Link to="/services">
              <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full transition-transform duration-700 group-hover:translate-x-full"></span>
              <span className="relative z-10">Alle Leistungen ansehen</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
