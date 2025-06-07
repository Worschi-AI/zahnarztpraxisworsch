
import React from 'react';
import { Search, ClipboardList, Zap, Clock, Crown, UserCheck } from 'lucide-react';

const ImplantologieProzess = () => {
  const schritte = [
    {
      icon: Search,
      nummer: "01",
      title: "Erstberatung & 3D-Diagnostik",
      description: "Ausführliche Beratung und dreidimensionale DVT-Aufnahmen für millimetergenaue Planung der Implantatposition."
    },
    {
      icon: ClipboardList,
      nummer: "02", 
      title: "Individuelle Behandlungsplanung",
      description: "Detaillierter Behandlungsplan basierend auf 3D-Diagnostik mit transparenter Kostenaufklärung."
    },
    {
      icon: Zap,
      nummer: "03",
      title: "Schonende Implantation",
      description: "Minimalinvasiver Eingriff unter örtlicher Betäubung. Optional Sofortimplantation direkt nach Zahnentfernung."
    },
    {
      icon: Clock,
      nummer: "04",
      title: "Einheilungsphase & Nachsorge",
      description: "3-6 Monate Einheilung mit regelmäßigen Kontrollterminen. Hochwertiges Provisorium bei Bedarf."
    },
    {
      icon: Crown,
      nummer: "05",
      title: "Prothetische Versorgung",
      description: "Anfertigung Ihres individuellen Zahnersatzes aus hochwertigen Vollkeramik-Materialien."
    },
    {
      icon: UserCheck,
      nummer: "06",
      title: "Langfristige Betreuung",
      description: "Regelmäßige Recall-Termine und professionelle Implantatreinigungen für maximale Langlebigkeit."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
          <h2 className="mb-6 text-dental-blue">Unser bewährter Implantologie-Prozess in Dresden</h2>
          <p className="text-lg text-dental-gray">
            Von der ersten Beratung bis zur langfristigen Betreuung – so läuft Ihre Implantat-Behandlung ab.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {schritte.map((schritt, index) => {
              const IconComponent = schritt.icon;
              return (
                <div 
                  key={index}
                  className="relative bg-gradient-to-br from-dental-beige to-white p-8 rounded-lg shadow-lg animate-on-scroll group hover:shadow-xl transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Schritt Nummer */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-dental-turquoise rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {schritt.nummer}
                  </div>
                  
                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 bg-dental-blue/10 rounded-full mb-6 group-hover:bg-dental-blue/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-dental-blue" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-dental-blue mb-4">{schritt.title}</h3>
                  <p className="text-dental-gray leading-relaxed">{schritt.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplantologieProzess;
