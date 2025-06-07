
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SpecializationsSection = () => {
  const specializations = [
    {
      title: "Implantologie Dresden",
      subtitle: "Fester Zahnersatz für ein Leben lang",
      description: "Als DGI-zertifizierter Implantologe bietet Dr. Worsch in Dresden-Laubegast das komplette Spektrum der Implantologie: von Einzelzahnimplantaten bis zum All-on-4-Konzept. Modernste 3D-Planung garantiert präzise und sichere Zahnimplantate.",
      featured: true,
      badge: "Premium-Leistung",
      backgroundImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Invisalign Dresden",
      subtitle: "Unsichtbare Zahnkorrektur",
      description: "Gerade Zähne ohne sichtbare Spange: Als zertifizierte Invisalign-Anwender korrigieren wir Zahnfehlstellungen in Dresden diskret und komfortabel. Die transparenten Aligner sind nahezu unsichtbar.",
      featured: true,
      badge: "Beliebt",
      backgroundImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Veneers Dresden",
      subtitle: "Perfektion in Keramik",
      description: "Hauchdünne Keramikschalen für Ihr Hollywood-Lächeln. Unsere Veneers in Dresden korrigieren Verfärbungen, Lücken und Formfehler für natürlich schöne Zähne.",
      featured: false,
      backgroundImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Bleaching Dresden",
      subtitle: "Strahlend weiße Zähne",
      description: "Professionelle Zahnaufhellung in nur einer Sitzung. Unser schonendes Bleaching in Dresden-Laubegast hellt Ihre Zähne um bis zu 8 Nuancen auf.",
      featured: false,
      backgroundImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dental-blue mb-6">
              Unsere Spezialisierungen in Dresden-Laubegast
            </h2>
            <p className="text-lg text-dental-gray max-w-3xl mx-auto">
              Als Experten für ästhetische Zahnmedizin und Implantologie bieten wir Ihnen das komplette Spektrum moderner Zahnheilkunde.
            </p>
          </div>

          {/* Spezialisierungen-Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {specializations.map((spec, index) => (
              <div
                key={index}
                className={`specialization-card relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll ${
                  spec.featured ? 'ring-2 ring-dental-turquoise' : ''
                }`}
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  height: '320px'
                }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={spec.backgroundImage} 
                    alt={spec.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
                </div>

                {/* Card Content */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
                  <div>
                    <div className="mb-3">
                      <span className={`inline-block px-3 py-1 text-xs rounded-full ${
                        spec.featured 
                          ? 'bg-dental-turquoise text-white' 
                          : 'bg-white/20 text-white'
                      }`}>
                        {spec.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      {spec.title}
                    </h3>
                    <h4 className="text-dental-turquoise font-medium mb-3">
                      {spec.subtitle}
                    </h4>
                    <p className="text-sm leading-relaxed opacity-90">
                      {spec.description}
                    </p>
                  </div>
                  
                  <div className="mt-4">
                    <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-dental-blue">
                      <Link to="/services">Mehr erfahren</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center animate-on-scroll">
            <Button asChild variant="outline" size="lg" className="border-dental-blue text-dental-blue hover:bg-dental-blue hover:text-white">
              <Link to="/services">Alle Leistungen entdecken</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecializationsSection;
