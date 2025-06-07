
import React from 'react';
import { Award, Monitor, Users, Shield } from 'lucide-react';

const ImplantologieExpertise = () => {
  const expertise = [
    {
      icon: Award,
      title: "Spezialisierte Expertise",
      description: "Dr. med. dent. Thomas Worsch ist Spezialist für Implantologie mit über 15 Jahren Berufserfahrung und regelmäßigen Fortbildungen."
    },
    {
      icon: Monitor,
      title: "Modernste Technologie",
      points: [
        "3D-Röntgen (DVT) für präzise Planung",
        "Digitale Intraoralscanner",
        "Computergestützte Implantatplanung", 
        "Minimalinvasive Operationstechniken"
      ]
    },
    {
      icon: Users,
      title: "Persönliche Betreuung",
      description: "Individuelle Betreuung von der ersten Beratung bis zur Nachsorge. Unser eingespieltes Team nimmt sich Zeit für Ihre Fragen und Sorgen."
    },
    {
      icon: Shield,
      title: "Qualitätsgarantie",
      description: "Garantie auf unsere Implantat-Behandlungen. Wir verwenden ausschließlich Implantatsysteme renommierter Hersteller mit langjähriger Bewährung."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
          <h2 className="mb-6 text-dental-blue">Warum Zahnimplantate bei Dr. Worsch in Dresden?</h2>
          <p className="text-lg text-dental-gray">
            Vertrauen Sie auf jahrelange Erfahrung, modernste Technologie und persönliche Betreuung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {expertise.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index}
                className="bg-dental-beige p-8 rounded-lg animate-on-scroll hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-dental-turquoise rounded-full mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-dental-blue mb-4">{item.title}</h3>
                {item.description && (
                  <p className="text-dental-gray leading-relaxed">{item.description}</p>
                )}
                {item.points && (
                  <ul className="space-y-2">
                    {item.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-center text-dental-gray">
                        <div className="w-2 h-2 bg-dental-turquoise rounded-full mr-3 flex-shrink-0"></div>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImplantologieExpertise;
