
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Heart, Star, Users, Shield, Sparkles, Target, Award, CheckCircle, Monitor, Zap, Scan, Calendar, Phone } from 'lucide-react';

const AboutPhilosophy = () => {
  const philosophyHighlights = [
    "Höchste Präzision durch modernste Technologie",
    "Tiefstes Verständnis für individuelle Bedürfnisse", 
    "Besonderer Fokus auf Ästhetik Ihres Lächelns",
    "Nachhaltige Steigerung Ihrer Lebensqualität"
  ];

  const coreValues = [
    {
      icon: <Target className="w-12 h-12 text-dental-turquoise" />,
      title: "Ästhetische Perfektion",
      description: "Wir streben nach Ergebnissen, die nicht nur gesund sind, sondern Ihr Lächeln auch natürlich schön erstrahlen lassen."
    },
    {
      icon: <Zap className="w-12 h-12 text-dental-turquoise" />,
      title: "Innovation & Präzision", 
      description: "Durch kontinuierliche Fortbildung und neueste Technologien gewährleisten wir höchste Qualität."
    },
    {
      icon: <Users className="w-12 h-12 text-dental-turquoise" />,
      title: "Patientenorientierung",
      description: "Ihre individuellen Bedürfnisse und Wünsche stehen jederzeit im Mittelpunkt unserer Arbeit."
    },
    {
      icon: <Shield className="w-12 h-12 text-dental-turquoise" />,
      title: "Nachhaltige Qualität",
      description: "Für langlebige Ergebnisse verwenden wir ausschließlich hochwertige, biokompatible Materialien."
    }
  ];

  const technologyFeatures = [
    {
      icon: <Monitor className="w-16 h-16 text-dental-turquoise" />,
      title: "Digitale Volumentomographie (DVT)",
      description: "Unsere 3D-Diagnostik ermöglicht die exakte Planung von Zahnimplantaten in Dresden-Laubegast. Besonders bei komplexen Implantologie-Fällen bietet diese Technologie höchste Sicherheit und Präzision.",
      badge: "Neueste Generation"
    },
    {
      icon: <Sparkles className="w-16 h-16 text-dental-turquoise" />,
      title: "Digitales Smile Design",
      description: "Mit modernster Software planen wir Ihr perfektes Lächeln digital. Ob Veneers, Bleaching oder Invisalign in Dresden – Sie sehen das Ergebnis bereits vor der Behandlung.",
      badge: "Premium-Technologie"
    },
    {
      icon: <Scan className="w-16 h-16 text-dental-turquoise" />,
      title: "Intraoralscanner",
      description: "Schluss mit unangenehmen Abdrücken! Unser digitaler Scanner erstellt präzise 3D-Modelle für Invisalign-Behandlungen und hochwertigen Zahnersatz in Dresden.",
      badge: "Komfort+"
    },
    {
      icon: <Zap className="w-16 h-16 text-dental-turquoise" />,
      title: "Laserzahnheilkunde",
      description: "Schonende Behandlung von Zahnfleischerkrankungen und unterstützend bei Implantologie. Der Laser arbeitet berührungslos, reduziert Schmerzen und beschleunigt die Heilung.",
      badge: "Schmerzarm"
    },
    {
      icon: <CheckCircle className="w-16 h-16 text-dental-turquoise" />,
      title: "CAD/CAM-Technologie",
      description: "Hochpräzise Fertigung von Kronen, Veneers und Zahnersatz direkt in unserer Praxis in Dresden-Laubegast. Weniger Termine, perfekte Passform.",
      badge: "Direkt vor Ort"
    }
  ];

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
    <>
      {/* Philosophie Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Linke Spalte: Text-Content */}
              <div className="content-column animate-on-scroll">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dental-blue mb-6">
                  Unsere Philosophie: Ihr Lächeln ist unsere Leidenschaft
                </h2>
                
                <div className="space-y-6 text-lg text-dental-gray leading-relaxed">
                  <p>
                    In der <strong className="text-dental-blue">Zahnarztpraxis Worsch in Dresden-Laubegast</strong> verstehen wir unsere Arbeit als eine harmonische Verbindung aus höchster Präzision, modernster Technologie und einem tiefen, menschlichen Verständnis für Ihre individuellen Wünsche und Bedürfnisse.
                  </p>
                  
                  <p>
                    Ganz besonders wichtig ist uns dabei die <strong className="text-dental-turquoise">Ästhetik Ihres Lächelns</strong> – denn wir wissen aus Erfahrung, wie sehr ein selbstbewusstes Lächeln Ihre Lebensqualität positiv beeinflussen kann.
                  </p>
                  
                  <p>
                    Wir wissen, dass insbesondere die junge Generation und alle anspruchsvollen Patienten hohe Erwartungen an Ästhetik und Lebensqualität haben. Ein selbstbewusstes Lächeln ist dabei oft der Schlüssel.
                  </p>
                </div>

                {/* Highlights-Liste */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-dental-blue mb-4">Das zeichnet uns aus:</h3>
                  <ul className="space-y-3">
                    {philosophyHighlights.map((highlight, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-dental-turquoise mr-3 flex-shrink-0" />
                        <span className="text-dental-gray">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Rechte Spalte: Bild und Werte-Cards */}
              <div className="image-column animate-on-scroll">
                <div className="mb-8">
                  <img 
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop" 
                    alt="Dr. Worsch - Zahnarzt Dresden Laubegast" 
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                
                {/* Kompakte Werte-Cards */}
                <div className="grid grid-cols-2 gap-4">
                  {coreValues.slice(0, 4).map((value, index) => (
                    <Card key={index} className="text-center p-4 hover:shadow-md transition-shadow duration-300">
                      <CardContent className="p-0">
                        <div className="flex justify-center mb-2">
                          <div className="p-2 bg-dental-beige rounded-full">
                            {React.cloneElement(value.icon, { className: "w-6 h-6 text-dental-turquoise" })}
                          </div>
                        </div>
                        <h4 className="font-semibold text-dental-blue text-sm mb-1">
                          {value.title}
                        </h4>
                        <p className="text-xs text-dental-gray leading-relaxed">
                          {value.description.substring(0, 60)}...
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologie Section */}
      <section className="py-20" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dental-blue mb-6">
                Modernste Technologie für Ihre Zahngesundheit
              </h2>
              <p className="text-lg text-dental-gray max-w-3xl mx-auto">
                Mit innovativer Technik und digitalen Verfahren bieten wir Ihnen Behandlungen auf höchstem Niveau für präzise und ästhetisch überzeugende Ergebnisse.
              </p>
            </div>

            {/* Tech-Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {technologyFeatures.map((tech, index) => (
                <div
                  key={index}
                  className="tech-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-on-scroll"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-dental-beige rounded-full">
                      {tech.icon}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 bg-dental-turquoise text-white text-xs rounded-full">
                        {tech.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-dental-blue mb-3">
                      {tech.title}
                    </h3>
                    <p className="text-sm text-dental-gray leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center animate-on-scroll">
              <Button asChild size="lg" className="bg-dental-turquoise hover:bg-dental-blue hover:scale-105 transform transition-all duration-300 text-white shadow-lg hover:shadow-xl">
                <Link to="/appointment">
                  <Calendar className="w-5 h-5 mr-2" />
                  Technik erleben - Termin buchen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Spezialisierungen Section */}
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

      {/* Kernwerte Section */}
      <section className="py-20" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dental-blue mb-6">
                Unsere Kernwerte: Das Fundament Ihrer Zufriedenheit
              </h2>
              <p className="text-lg text-dental-gray max-w-3xl mx-auto">
                Diese fundamentalen Werte prägen unsere tägliche Arbeit und sind unser Versprechen an Sie für eine Behandlung auf höchstem Niveau.
              </p>
            </div>

            {/* Werte-Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => (
                <div 
                  key={index}
                  className="value-card text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-on-scroll"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-dental-blue mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-dental-gray leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPhilosophy;
