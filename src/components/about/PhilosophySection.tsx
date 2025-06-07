
import React from 'react';
import { CheckCircle } from 'lucide-react';

const PhilosophySection = () => {
  const philosophyHighlights = [
    "Höchste Präzision durch modernste Technologie",
    "Tiefstes Verständnis für individuelle Bedürfnisse", 
    "Besonderer Fokus auf Ästhetik Ihres Lächelns",
    "Nachhaltige Steigerung Ihrer Lebensqualität"
  ];

  const coreValues = [
    {
      icon: <CheckCircle className="w-6 h-6 text-dental-turquoise" />,
      title: "Ästhetische Perfektion",
      description: "Wir streben nach Ergebnissen, die nicht nur gesund sind, sondern Ihr Lächeln auch natürlich schön erstrahlen lassen."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-dental-turquoise" />,
      title: "Innovation & Präzision", 
      description: "Durch kontinuierliche Fortbildung und neueste Technologien gewährleisten wir höchste Qualität."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-dental-turquoise" />,
      title: "Patientenorientierung",
      description: "Ihre individuellen Bedürfnisse und Wünsche stehen jederzeit im Mittelpunkt unserer Arbeit."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-dental-turquoise" />,
      title: "Nachhaltige Qualität",
      description: "Für langlebige Ergebnisse verwenden wir ausschließlich hochwertige, biokompatible Materialien."
    }
  ];

  return (
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
                  <div key={index} className="text-center p-4 bg-white border border-gray-100 rounded-lg hover:shadow-md transition-shadow duration-300">
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
