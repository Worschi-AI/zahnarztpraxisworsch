
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Shield, Users, Award, Heart } from 'lucide-react';

const QualityPromiseSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Höchste Qualitätsstandards",
      description: "Modernste Technologie und bewährte Behandlungsmethoden für Ihre optimale Zahngesundheit in Dresden-Laubegast."
    },
    {
      icon: Users,
      title: "Persönliche Betreuung",
      description: "Individuelle Behandlungspläne und einfühlsame Beratung – bei uns stehen Sie im Mittelpunkt."
    },
    {
      icon: Award,
      title: "Langjährige Expertise",
      description: "Vertrauen Sie auf über 15 Jahre Erfahrung in der modernen Zahnmedizin und ästhetischen Zahnheilkunde."
    },
    {
      icon: Heart,
      title: "Transparente Beratung",
      description: "Ehrliche Aufklärung, faire Preise und keine versteckten Kosten – Vertrauen ist die Basis unserer Zusammenarbeit."
    }
  ];

  return (
    <section className="py-16 bg-dental-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl font-bold text-dental-blue mb-4">
            Unser Qualitätsversprechen
          </h2>
          <p className="text-dental-gray max-w-3xl mx-auto text-lg">
            In der Zahnarztpraxis Worsch steht Ihre Zufriedenheit an erster Stelle. 
            Entdecken Sie, was uns als Zahnarzt in Dresden-Laubegast auszeichnet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center animate-on-scroll bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-dental-turquoise/10 rounded-full mb-4">
                <feature.icon className="h-8 w-8 text-dental-turquoise" />
              </div>
              <h3 className="text-xl font-semibold text-dental-blue mb-3">{feature.title}</h3>
              <p className="text-dental-gray">{feature.description}</p>
              
              {/* Add button only under "Transparente Beratung" card */}
              {feature.title === "Transparente Beratung" && (
                <div className="mt-6">
                  <Button asChild className="bg-dental-turquoise hover:bg-dental-blue text-white">
                    <Link to="/team">
                      Lernen Sie unser Team kennen
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityPromiseSection;
