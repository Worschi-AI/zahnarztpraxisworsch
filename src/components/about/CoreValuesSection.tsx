
import React from 'react';
import { Target, Zap, Users, Shield } from 'lucide-react';

const CoreValuesSection = () => {
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

  return (
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
  );
};

export default CoreValuesSection;
