import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Star, Users, Shield, Sparkles, Target, Award, CheckCircle, Monitor, Zap, Scan } from 'lucide-react';

const AboutPhilosophy = () => {
  const youngPatientFeatures = [
    {
      icon: <Star className="w-6 h-6 text-dental-turquoise" />,
      title: "Individuelle Ästhetik-Beratung",
      description: "Wir nehmen uns umfassend Zeit, um Ihre persönlichen Vorstellungen zu verstehen. Gemeinsam finden wir die optimale Lösung für Ihr Wunschergebnis – von dezenten, aber wirkungsvollen Korrekturen bis zum kompletten Smile Makeover."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-dental-turquoise" />,
      title: "Innovative Behandlungsmethoden",
      description: "Um präzise, vorhersagbare und ästhetisch überzeugende Ergebnisse zu erzielen, setzen wir auf fortschrittlichste digitale Verfahren wie detaillierte 3D-Planung für Implantate, passgenauen CAD/CAM-gefertigten Zahnersatz und schonende Lasertherapien."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-dental-turquoise" />,
      title: "Transparenz und verständliche Aufklärung",
      description: "Jeder Behandlungsschritt wird Ihnen von uns persönlich und absolut verständlich erklärt. Wir zeigen Ihnen alle Möglichkeiten moderner Zahnästhetik auf, damit Sie fundierte Entscheidungen treffen können."
    },
    {
      icon: <Heart className="w-6 h-6 text-dental-turquoise" />,
      title: "Angenehmes Ambiente",
      description: "Unsere Praxisräume in Dresden-Laubegast sind bewusst modern, hell und freundlich gestaltet, um Ihnen eine entspannte Atmosphäre zu bieten. Wir möchten, dass Sie sich von dem Moment an, in dem Sie eintreten, rundum wohlfühlen."
    }
  ];

  const technologyFeatures = [
    {
      icon: <Monitor className="w-6 h-6 text-dental-turquoise" />,
      title: "Digitale Volumentomographie (DVT) für präzise Implantologie",
      description: "Unsere 3D-Diagnostik ermöglicht die exakte Planung von Zahnimplantaten in Dresden-Laubegast. Besonders bei komplexen Implantologie-Fällen bietet diese Technologie höchste Sicherheit und Präzision für Ihre Zahnimplantate."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-dental-turquoise" />,
      title: "Digitale Smile Design für Veneers und ästhetische Zahnmedizin",
      description: "Mit modernster Software planen wir Ihr perfektes Lächeln digital. Ob Veneers, Bleaching oder Invisalign in Dresden – Sie sehen das Ergebnis bereits vor der Behandlung."
    },
    {
      icon: <Scan className="w-6 h-6 text-dental-turquoise" />,
      title: "Intraoralscanner für Invisalign und Zahnersatz",
      description: "Schluss mit unangenehmen Abdrücken! Unser digitaler Scanner erstellt präzise 3D-Modelle für Invisalign-Behandlungen und hochwertigen Zahnersatz in Dresden."
    },
    {
      icon: <Zap className="w-6 h-6 text-dental-turquoise" />,
      title: "Laserzahnheilkunde",
      description: "Schonende Behandlung von Zahnfleischerkrankungen und unterstützend bei Implantologie. Der Laser arbeitet berührungslos, reduziert Schmerzen und beschleunigt die Heilung."
    },
    {
      icon: <Zap className="w-6 h-6 text-dental-turquoise" />,
      title: "CAD/CAM-Technologie",
      description: "Hochpräzise Fertigung von Kronen, Veneers und Zahnersatz direkt in unserer Praxis in Dresden-Laubegast. Weniger Termine, perfekte Passform."
    }
  ];

  const specializations = [
    {
      title: "Implantologie Dresden – Fester Zahnersatz für ein Leben lang",
      description: "Als DGI-zertifizierter Implantologe bietet Dr. Worsch in Dresden-Laubegast das komplette Spektrum der Implantologie: von Einzelzahnimplantaten bis zum All-on-4-Konzept. Modernste 3D-Planung garantiert präzise und sichere Zahnimplantate."
    },
    {
      title: "Invisalign Dresden – Unsichtbare Zahnkorrektur",
      description: "Gerade Zähne ohne sichtbare Spange: Als zertifizierte Invisalign-Anwender korrigieren wir Zahnfehlstellungen in Dresden diskret und komfortabel. Die transparenten Aligner sind nahezu unsichtbar."
    },
    {
      title: "Veneers Dresden – Perfektion in Keramik",
      description: "Hauchdünne Keramikschalen für Ihr Hollywood-Lächeln. Unsere Veneers in Dresden korrigieren Verfärbungen, Lücken und Formfehler für natürlich schöne Zähne."
    },
    {
      title: "Bleaching Dresden – Strahlend weiße Zähne",
      description: "Professionelle Zahnaufhellung in nur einer Sitzung. Unser schonendes Bleaching in Dresden-Laubegast hellt Ihre Zähne um bis zu 8 Nuancen auf."
    }
  ];

  const coreValues = [
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: "Ästhetische Perfektion",
      description: "Wir streben nach Ergebnissen, die nicht nur gesund sind, sondern Ihr Lächeln auch natürlich schön erstrahlen lassen und Ihre einzigartige Persönlichkeit perfekt unterstreichen."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-white" />,
      title: "Innovation & Präzision",
      description: "Durch unsere kontinuierliche Fortbildung und den konsequenten Einsatz neuester Technologien gewährleisten wir Behandlungen von höchster Präzision und Qualität."
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Patientenorientierung",
      description: "Ihre individuellen Bedürfnisse und Wünsche stehen jederzeit im Mittelpunkt unserer Arbeit. Wir möchten, dass Sie sich bei uns bestens aufgehoben und verstanden fühlen."
    },
    {
      icon: <Award className="w-8 h-8 text-white" />,
      title: "Nachhaltige Qualität",
      description: "Für langlebige, gesunde und biokompatible Ergebnisse verwenden wir ausschließlich sorgfältig ausgewählte, hochwertige Materialien, denen Sie vertrauen können."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="mb-6 text-dental-blue">Unsere Philosophie: Ihr Lächeln ist unsere Leidenschaft</h2>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-lg mb-8 text-dental-gray leading-relaxed">
                In der <strong className="text-dental-blue">Zahnarztpraxis Worsch in Dresden-Laubegast</strong> verstehen wir unsere Arbeit als eine harmonische Verbindung aus höchster Präzision, modernster Technologie und einem tiefen, menschlichen Verständnis für Ihre individuellen Wünsche und Bedürfnisse.
              </p>
              
              <p className="text-lg text-dental-gray leading-relaxed">
                Ganz besonders wichtig ist uns dabei die <strong className="text-dental-turquoise">Ästhetik Ihres Lächelns</strong> – denn wir wissen aus Erfahrung, wie sehr ein selbstbewusstes Lächeln Ihre Lebensqualität positiv beeinflussen kann.
              </p>
            </div>
          </div>

          {/* Modern Patient Focus */}
          <div className="mb-20 animate-on-scroll">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold text-dental-blue mb-4">
                Der moderne Patient im Fokus – Ihre Bedürfnisse stehen im Mittelpunkt
              </h3>
              <p className="text-lg text-dental-gray max-w-3xl mx-auto">
                Wir wissen, dass insbesondere die junge Generation und alle anspruchsvollen Patienten hohe Erwartungen an Ästhetik und Lebensqualität haben. Ein selbstbewusstes Lächeln ist dabei oft der Schlüssel.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {youngPatientFeatures.map((feature, index) => (
                <Card key={index} className="border border-dental-beige hover:shadow-lg transition-all duration-300 hover:border-dental-turquoise/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 bg-dental-beige rounded-lg">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-dental-blue mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-dental-gray text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Technology Section */}
          <div className="mb-20 animate-on-scroll">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold text-dental-blue mb-4">
                Modernste Technologie für Ihre Zahngesundheit
              </h3>
              <p className="text-lg text-dental-gray max-w-3xl mx-auto">
                Mit innovativer Technik und digitalen Verfahren bieten wir Ihnen Behandlungen auf höchstem Niveau für präzise und ästhetisch überzeugende Ergebnisse.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologyFeatures.map((feature, index) => (
                <Card key={index} className="border border-dental-beige hover:shadow-lg transition-all duration-300 hover:border-dental-turquoise/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 bg-dental-beige rounded-lg">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-dental-blue mb-2 text-sm">
                          {feature.title}
                        </h4>
                        <p className="text-dental-gray text-xs leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Specializations */}
          <div className="mb-20 animate-on-scroll">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold text-dental-blue mb-4">
                Unsere Spezialisierungen in Dresden-Laubegast
              </h3>
              <p className="text-lg text-dental-gray max-w-3xl mx-auto">
                Als Experten für ästhetische Zahnmedizin und Implantologie bieten wir Ihnen das komplette Spektrum moderner Zahnheilkunde.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {specializations.map((spec, index) => (
                <Card key={index} className="border border-dental-beige hover:shadow-lg transition-all duration-300 hover:border-dental-turquoise/20">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-dental-blue mb-3">
                      {spec.title}
                    </h4>
                    <p className="text-dental-gray text-sm leading-relaxed">
                      {spec.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-16 animate-on-scroll">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold text-dental-blue mb-4">
                Unsere Kernwerte: Das Fundament Ihrer Zufriedenheit
              </h3>
              <p className="text-lg text-dental-gray max-w-3xl mx-auto">
                Diese fundamentalen Werte prägen unsere tägliche Arbeit und sind unser Versprechen an Sie für eine Behandlung auf höchstem Niveau.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-dental-turquoise to-dental-blue p-6 rounded-xl text-white text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-white/20 rounded-full">
                        {value.icon}
                      </div>
                    </div>
                    <h4 className="font-semibold mb-3 text-lg">
                      {value.title}
                    </h4>
                    <p className="text-sm leading-relaxed opacity-90">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Closing Statement */}
          <div className="text-center animate-on-scroll">
            <div className="bg-dental-beige rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-dental-turquoise rounded-full">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>
              <p className="text-lg text-dental-gray leading-relaxed">
                Wir sind mehr als nur Ihr <strong className="text-dental-blue">Zahnarzt in Dresden</strong> – 
                wir sind Ihre verlässlichen Partner für ein gesundes und strahlend schönes Lächeln, das Ihnen neues Selbstvertrauen schenkt und Ihre Lebensfreude steigert.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPhilosophy;
