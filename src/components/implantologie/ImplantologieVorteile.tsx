
import React from 'react';
import { Shield, Smile, Heart, Bone, Euro } from 'lucide-react';

const ImplantologieVorteile = () => {
  const vorteile = [
    {
      icon: Shield,
      title: "Biokompatible Titan-Implantate",
      description: "Hochwertige Titan-Zahnimplantate für maximale Verträglichkeit und optimale Integration in den Kieferknochen. Lebensdauer von 20+ Jahren durch Osseointegration."
    },
    {
      icon: Smile,
      title: "Natürliches Kaugefühl & perfekte Ästhetik",
      description: "Natürliches Kaugefühl ohne Druckstellen oder Wackeln. Vollkeramikkronen sind optisch nicht von natürlichen Zähnen zu unterscheiden."
    },
    {
      icon: Heart,
      title: "Schonung der Nachbarzähne",
      description: "Keine Beschädigung gesunder Nachbarzähne wie bei Brücken. Ihr natürlicher Zahnbestand bleibt vollständig erhalten."
    },
    {
      icon: Bone,
      title: "Knochenerhalt & Gesichtsästhetik",
      description: "Stimulation des Kieferknochens verhindert Knochenabbau und erhält Ihre natürlichen Gesichtskonturen langfristig."
    },
    {
      icon: Euro,
      title: "Langfristige Wirtschaftlichkeit",
      description: "Höhere Anfangsinvestition amortisiert sich durch Langlebigkeit. Erspart kostspielige Reparaturen und Neuanfertigungen."
    }
  ];

  return (
    <section className="py-20 bg-dental-beige">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
          <h2 className="mb-6 text-dental-blue">Die Vorteile von Zahnimplantaten in unserer Dresdner Praxis</h2>
          <p className="text-lg text-dental-gray">
            Entdecken Sie, warum Zahnimplantate die beste Lösung für dauerhaft schöne und funktionelle Zähne sind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vorteile.map((vorteil, index) => {
            const IconComponent = vorteil.icon;
            return (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-dental-turquoise/10 rounded-full mb-6 group-hover:bg-dental-turquoise/20 transition-colors">
                  <IconComponent className="w-8 h-8 text-dental-turquoise" />
                </div>
                <h3 className="text-xl font-semibold text-dental-blue mb-4">{vorteil.title}</h3>
                <p className="text-dental-gray leading-relaxed">{vorteil.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImplantologieVorteile;
