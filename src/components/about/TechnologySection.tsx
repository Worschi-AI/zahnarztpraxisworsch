
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Monitor, Sparkles, Scan, Zap, CheckCircle, Calendar, Users, Heart, MessageCircle, Home } from 'lucide-react';

const TechnologySection = () => {
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

  const patientFocusFeatures = [
    {
      icon: <Users className="w-12 h-12 text-dental-turquoise" />,
      title: "Individuelle Ästhetik-Beratung",
      description: "Wir nehmen uns umfassend Zeit, um Ihre persönlichen Vorstellungen zu verstehen. Gemeinsam finden wir die optimale Lösung für Ihr Wunschergebnis – von dezenten, aber wirkungsvollen Korrekturen bis zum kompletten Smile Makeover."
    },
    {
      icon: <Heart className="w-12 h-12 text-dental-turquoise" />,
      title: "Innovative Behandlungsmethoden",
      description: "Um präzise, vorhersagbare und ästhetisch überzeugende Ergebnisse zu erzielen, setzen wir auf fortschrittlichste digitale Verfahren wie detaillierte 3D-Planung für Implantate, passgenauen CAD/CAM-gefertigten Zahnersatz und schonende Lasertherapien."
    },
    {
      icon: <MessageCircle className="w-12 h-12 text-dental-turquoise" />,
      title: "Transparenz und verständliche Aufklärung",
      description: "Jeder Behandlungsschritt wird Ihnen von uns persönlich und absolut verständlich erklärt. Wir zeigen Ihnen alle Möglichkeiten moderner Zahnästhetik auf, damit Sie fundierte Entscheidungen treffen können."
    },
    {
      icon: <Home className="w-12 h-12 text-dental-turquoise" />,
      title: "Angenehmes Ambiente",
      description: "Unsere Praxisräume in Dresden-Laubegast sind bewusst modern, hell und freundlich gestaltet, um Ihnen eine entspannte Atmosphäre zu bieten. Wir möchten, dass Sie sich von dem Moment an, in dem Sie eintreten, rundum wohlfühlen."
    }
  ];

  return (
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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

          {/* New Patient Focus Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg animate-on-scroll">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-dental-blue mb-6">
                Der moderne Patient im Fokus – Ihre Bedürfnisse stehen im Mittelpunkt
              </h3>
              <p className="text-lg text-dental-gray max-w-4xl mx-auto leading-relaxed">
                Wir wissen, dass insbesondere die junge Generation und alle anspruchsvollen Patienten hohe Erwartungen an Ästhetik und Lebensqualität haben. Ein selbstbewusstes Lächeln ist dabei oft der Schlüssel.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {patientFocusFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 bg-dental-beige/30 rounded-xl hover:bg-dental-beige/50 transition-colors animate-on-scroll"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-dental-blue mb-3">
                      {feature.title}
                    </h4>
                    <p className="text-dental-gray leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12 animate-on-scroll">
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
  );
};

export default TechnologySection;
