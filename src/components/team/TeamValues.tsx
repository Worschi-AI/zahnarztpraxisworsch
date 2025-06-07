
import React from 'react';
import { Heart, Target, Users, Zap, Smile } from 'lucide-react';

const TeamValues = () => {
  const values = [
    {
      icon: Heart,
      title: "Leidenschaft für Ästhetik",
      description: "Wir lieben es, mit Ihnen zusammen Ihr ganz persönliches, perfektes Lächeln zu gestalten und Ihre individuellen ästhetischen Wünsche in die Realität umzusetzen."
    },
    {
      icon: Target,
      title: "Höchste Präzision",
      description: "Dank modernster Technik und unserem umfangreichen Know-how erzielen wir stets exakte, präzise und langlebige Ergebnisse, auf die Sie sich verlassen können."
    },
    {
      icon: Users,
      title: "Individuelle Betreuung",
      description: "Ihre persönlichen Wünsche und Bedürfnisse sind unser oberster Maßstab. Wir hören Ihnen genau zu und entwickeln maßgeschneiderte Behandlungskonzepte."
    },
    {
      icon: Zap,
      title: "Kontinuierliche Innovation",
      description: "Um Ihnen stets die bestmögliche Versorgung zu bieten, sind wir immer am Puls der Zeit und bilden uns kontinuierlich in den neuesten, innovativsten Verfahren fort."
    },
    {
      icon: Smile,
      title: "Echte Wohlfühlatmosphäre",
      description: "Damit Sie entspannt und ohne Sorgen zu uns kommen können, schaffen wir in unserer Praxis in Dresden-Laubegast eine einladende, angenehme und moderne Atmosphäre."
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 lg:mb-12 animate-on-scroll">
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-dental-blue mb-4 lg:mb-6">
              Unsere gemeinsamen Werte: Das Fundament Ihrer individuellen Betreuung
            </h2>
            <p className="text-base lg:text-lg text-dental-gray max-w-4xl mx-auto leading-relaxed">
              Diese tief verwurzelten Werte prägen unsere tägliche Arbeit und bilden die entscheidende Grundlage für Ihre optimale Betreuung in der Zahnarztpraxis Worsch – denn Ihr Wohlbefinden ist unser Ansporn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-dental-turquoise/10 rounded-full">
                    <value.icon className="h-12 w-12 text-dental-turquoise" />
                  </div>
                  <h3 className="text-lg font-bold text-dental-blue mb-3">
                    {value.title}
                  </h3>
                  <p className="text-dental-gray text-sm lg:text-base leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamValues;
