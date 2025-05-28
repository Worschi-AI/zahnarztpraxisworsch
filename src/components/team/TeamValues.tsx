
import React from 'react';
import { Stethoscope, Users, Award, Heart } from 'lucide-react';

const TeamValues = () => {
  return (
    <section className="py-20 bg-dental-beige">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="mb-6 text-dental-blue">Unsere gemeinsamen Werte: Das Fundament Ihrer individuellen Betreuung.</h2>
            <p className="text-lg text-dental-gray">
              Diese tief verwurzelten Werte prägen unsere tägliche Arbeit und bilden die entscheidende Grundlage für Ihre 
              optimale Betreuung in der Zahnarztpraxis Worsch – denn Ihr Wohlbefinden ist unser Ansporn.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md animate-on-scroll flex">
              <div className="bg-dental-turquoise/10 p-3 rounded-full mr-4 flex items-center justify-center">
                <Heart className="text-dental-turquoise" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-dental-turquoise">Leidenschaft für Ästhetik</h3>
                <p className="text-dental-gray">
                  Wir lieben es, mit Ihnen zusammen Ihr ganz persönliches, perfektes Lächeln zu gestalten und Ihre individuellen ästhetischen Wünsche in die Realität umzusetzen.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md animate-on-scroll flex" style={{ animationDelay: "100ms" }}>
              <div className="bg-dental-turquoise/10 p-3 rounded-full mr-4 flex items-center justify-center">
                <Award className="text-dental-turquoise" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-dental-turquoise">Höchste Präzision</h3>
                <p className="text-dental-gray">
                  Dank modernster Technik und unserem umfangreichen Know-how erzielen wir stets exakte, präzise und langlebige Ergebnisse, auf die Sie sich verlassen können.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md animate-on-scroll flex" style={{ animationDelay: "200ms" }}>
              <div className="bg-dental-turquoise/10 p-3 rounded-full mr-4 flex items-center justify-center">
                <Users className="text-dental-turquoise" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-dental-turquoise">Individuelle Betreuung</h3>
                <p className="text-dental-gray">
                  Ihre persönlichen Wünsche und Bedürfnisse sind unser oberster Maßstab. Wir hören Ihnen genau zu und entwickeln maßgeschneiderte Behandlungskonzepte, die perfekt auf Sie zugeschnitten sind.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md animate-on-scroll flex" style={{ animationDelay: "300ms" }}>
              <div className="bg-dental-turquoise/10 p-3 rounded-full mr-4 flex items-center justify-center">
                <Stethoscope className="text-dental-turquoise" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-dental-turquoise">Kontinuierliche Innovation</h3>
                <p className="text-dental-gray">
                  Um Ihnen stets die bestmögliche Versorgung zu bieten, sind wir immer am Puls der Zeit und bilden uns kontinuierlich in den neuesten, innovativsten Verfahren fort.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md animate-on-scroll mt-6" style={{ animationDelay: "400ms" }}>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-dental-turquoise">Echte Wohlfühlatmosphäre</h3>
              <p className="text-dental-gray">
                Damit Sie entspannt und ohne Sorgen zu uns kommen können, schaffen wir in unserer Praxis in Dresden-Laubegast eine einladende, angenehme und moderne Atmosphäre, in der Sie sich von Anfang an wohlfühlen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamValues;
