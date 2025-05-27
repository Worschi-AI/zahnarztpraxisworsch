
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Star, Users, Shield, Sparkles, Target, Award, CheckCircle } from 'lucide-react';

const AboutPhilosophy = () => {
  const youngPatientFeatures = [
    {
      icon: <Star className="w-6 h-6 text-dental-turquoise" />,
      title: "Individuelle Ästhetik-Beratung",
      description: "Wir nehmen uns Zeit, Ihre Vorstellungen zu verstehen und gemeinsam mit Ihnen die optimale Lösung für Ihr Wunschergebnis zu finden – von dezenten Korrekturen bis zum kompletten Smile Makeover."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-dental-turquoise" />,
      title: "Innovative Behandlungsmethoden",
      description: "Wir nutzen fortschrittliche digitale Verfahren wie 3D-Planung für Implantate, CAD/CAM-gefertigten Zahnersatz und schonende Lasertherapien, um präzise, vorhersagbare und ästhetisch überzeugende Ergebnisse zu erzielen."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-dental-turquoise" />,
      title: "Transparenz und Aufklärung",
      description: "Wir erklären Ihnen jeden Behandlungsschritt verständlich und zeigen Ihnen die Möglichkeiten moderner Zahnästhetik auf."
    },
    {
      icon: <Heart className="w-6 h-6 text-dental-turquoise" />,
      title: "Angenehmes Ambiente",
      description: "Unsere Praxisräume in Dresden Laubegast sind modern und hell gestaltet, um Ihnen eine entspannte Atmosphäre zu bieten, in der Sie sich von Anfang an wohlfühlen."
    }
  ];

  const coreValues = [
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: "Ästhetische Perfektion",
      description: "Wir streben nach Ergebnissen, die nicht nur gesund, sondern auch natürlich schön sind und Ihre Persönlichkeit unterstreichen."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-white" />,
      title: "Innovation & Präzision",
      description: "Durch kontinuierliche Fortbildung und den Einsatz neuester Technologien garantieren wir Behandlungen auf höchstem Niveau."
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Patientenorientierung",
      description: "Ihre Bedürfnisse und Wünsche stehen im Mittelpunkt unserer Arbeit. Wir möchten, dass Sie sich bei uns bestens aufgehoben fühlen."
    },
    {
      icon: <Award className="w-8 h-8 text-white" />,
      title: "Nachhaltige Qualität",
      description: "Wir verwenden ausschließlich hochwertige, biokompatible Materialien für langlebige und gesunde Ergebnisse."
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
                In der <strong className="text-dental-blue">Zahnarztpraxis Worsch in Dresden Laubegast</strong> verstehen wir Zahnmedizin als eine Verbindung aus höchster Präzision, modernster Technologie und einem tiefen Verständnis für die individuellen Wünsche unserer Patienten.
              </p>
              
              <p className="text-lg text-dental-gray leading-relaxed">
                Besonders wichtig ist uns die <strong className="text-dental-turquoise">Ästhetik Ihres Lächelns</strong> – denn wir wissen, wie sehr ein selbstbewusstes Lächeln Ihre Lebensqualität steigern kann.
              </p>
            </div>
          </div>

          {/* Modern Patient Focus */}
          <div className="mb-20 animate-on-scroll">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold text-dental-blue mb-4">
                Der moderne Patient im Fokus – Besonders für unsere junge Zielgruppe
              </h3>
              <p className="text-lg text-dental-gray max-w-3xl mx-auto">
                Wir wissen, dass gerade junge Menschen hohe Ansprüche an Ästhetik und Lebensqualität stellen. 
                Ein selbstbewusstes Lächeln spielt dabei eine entscheidende Rolle.
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

          {/* Core Values */}
          <div className="mb-16 animate-on-scroll">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold text-dental-blue mb-4">
                Unsere Kernwerte für Ihre Zufriedenheit
              </h3>
              <p className="text-lg text-dental-gray max-w-3xl mx-auto">
                Diese Werte prägen unsere tägliche Arbeit und garantieren Ihnen eine Behandlung auf höchstem Niveau.
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
                wir sind Ihre Partner für ein gesundes und strahlend schönes Lächeln, das Ihnen Selbstvertrauen schenkt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPhilosophy;
