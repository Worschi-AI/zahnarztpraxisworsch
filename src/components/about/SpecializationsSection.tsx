
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Award } from 'lucide-react';

const SpecializationsSection = () => {
  const specializations = [
    {
      title: "Implantologie Dresden",
      subtitle: "Fester Zahnersatz für ein Leben lang",
      description: "Als DGI-zertifizierter Implantologe bietet Dr. Worsch in Dresden-Laubegast das komplette Spektrum der Implantologie: von Einzelzahnimplantaten bis zum All-on-4-Konzept. Modernste 3D-Planung garantiert präzise und sichere Zahnimplantate.",
      featured: true,
      badge: "Premium-Leistung",
      icon: <Award className="w-6 h-6" />,
      backgroundImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop",
      highlights: ["DGI-zertifiziert", "3D-Planung", "All-on-4-Konzept"]
    },
    {
      title: "Invisalign Dresden", 
      subtitle: "Unsichtbare Zahnkorrektur",
      description: "Gerade Zähne ohne sichtbare Spange: Als zertifizierte Invisalign-Anwender korrigieren wir Zahnfehlstellungen in Dresden diskret und komfortabel. Die transparenten Aligner sind nahezu unsichtbar.",
      featured: true,
      badge: "Beliebt",
      icon: <Star className="w-6 h-6" />,
      backgroundImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1000&auto=format&fit=crop",
      highlights: ["Unsichtbar", "Komfortabel", "Zertifiziert"]
    },
    {
      title: "Veneers Dresden",
      subtitle: "Perfektion in Keramik", 
      description: "Hauchdünne Keramikschalen für Ihr Hollywood-Lächeln. Unsere Veneers in Dresden korrigieren Verfärbungen, Lücken und Formfehler für natürlich schöne Zähne.",
      featured: false,
      badge: "Ästhetik",
      icon: <Star className="w-6 h-6" />,
      backgroundImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop",
      highlights: ["Hollywood-Lächeln", "Natürlich schön", "Hauchdünn"]
    },
    {
      title: "Bleaching Dresden",
      subtitle: "Strahlend weiße Zähne",
      description: "Professionelle Zahnaufhellung in nur einer Sitzung. Unser schonendes Bleaching in Dresden-Laubegast hellt Ihre Zähne um bis zu 8 Nuancen auf.",
      featured: false,
      badge: "Schnell",
      icon: <Star className="w-6 h-6" />,
      backgroundImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop",
      highlights: ["Eine Sitzung", "8 Nuancen", "Schonend"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <Badge variant="secondary" className="mb-4 bg-dental-turquoise/10 text-dental-turquoise border-dental-turquoise/20">
              Unsere Spezialisierungen
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dental-blue mb-6">
              Expertise, die begeistert
            </h2>
            <p className="text-lg text-dental-gray max-w-3xl mx-auto leading-relaxed">
              Als Experten für ästhetische Zahnmedizin und Implantologie bieten wir Ihnen das komplette Spektrum moderner Zahnheilkunde mit höchsten Qualitätsstandards.
            </p>
          </div>

          {/* Neue Grid-Darstellung */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {specializations.map((spec, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 animate-on-scroll ${
                  spec.featured ? 'lg:scale-105 ring-2 ring-dental-turquoise/20' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Header mit Icon und Badge */}
                <div className="relative p-6 pb-0">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-dental-turquoise/10 rounded-xl text-dental-turquoise">
                        {spec.icon}
                      </div>
                      <div>
                        <Badge 
                          variant={spec.featured ? "default" : "secondary"}
                          className={spec.featured ? "bg-dental-turquoise text-white" : "bg-gray-100 text-dental-gray"}
                        >
                          {spec.badge}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-dental-blue mb-2 group-hover:text-dental-turquoise transition-colors">
                    {spec.title}
                  </h3>
                  <h4 className="text-lg font-medium text-dental-turquoise mb-4">
                    {spec.subtitle}
                  </h4>
                </div>

                {/* Content */}
                <div className="px-6 pb-6">
                  <p className="text-dental-gray leading-relaxed mb-6">
                    {spec.description}
                  </p>
                  
                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {spec.highlights.map((highlight, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-dental-blue/5 text-dental-blue text-sm rounded-full border border-dental-blue/10"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button 
                    asChild 
                    className="w-full bg-dental-blue hover:bg-dental-turquoise text-white group-hover:scale-105 transition-all duration-300"
                  >
                    <Link to="/services" className="flex items-center justify-center gap-2">
                      Mehr erfahren
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-dental-turquoise/5 to-transparent rounded-bl-full"></div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center animate-on-scroll">
            <div className="bg-gradient-to-r from-dental-blue/5 to-dental-turquoise/5 rounded-2xl p-8 border border-dental-blue/10">
              <h3 className="text-2xl font-bold text-dental-blue mb-4">
                Bereit für Ihr schönstes Lächeln?
              </h3>
              <p className="text-dental-gray mb-6 max-w-2xl mx-auto">
                Entdecken Sie alle unsere Leistungen und finden Sie die perfekte Behandlung für Ihre Bedürfnisse.
              </p>
              <Button asChild size="lg" className="bg-dental-turquoise hover:bg-dental-blue text-white">
                <Link to="/services" className="flex items-center gap-2">
                  Alle Leistungen entdecken
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecializationsSection;
