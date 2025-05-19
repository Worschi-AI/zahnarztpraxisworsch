
import React from 'react';

const FAQSection = () => {
  return (
    <section className="py-16 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-on-scroll">
          <h2 className="mb-4 text-dental-blue">Häufig gestellte Fragen</h2>
          <p className="text-lg text-dental-gray">
            Antworten auf die wichtigsten Fragen zu unseren zahnmedizinischen Leistungen
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto animate-on-scroll">
          <div className="space-y-6">
            <div className="bg-dental-beige p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-dental-blue">Werden die Kosten für Zahnimplantate von der Krankenkasse übernommen?</h3>
              <p className="text-dental-gray">
                Gesetzliche Krankenkassen übernehmen in der Regel einen Festzuschuss für Zahnersatz, der auch bei Implantaten gewährt wird. 
                Die Höhe richtet sich nach dem Befund. Bei privaten Versicherungen variiert die Erstattung je nach Tarif. 
                In unserer Praxis erstellen wir transparente Kostenvoranschläge und beraten Sie zu Finanzierungsmöglichkeiten.
              </p>
            </div>
            
            <div className="bg-dental-beige p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-dental-blue">Wie lange halten Veneers und aus welchen Materialien bestehen sie?</h3>
              <p className="text-dental-gray">
                Moderne Keramikveneers haben eine durchschnittliche Haltbarkeit von 10-15 Jahren, bei guter Pflege auch länger. 
                Wir verwenden ausschließlich hochwertige Keramiken, die sich durch Farbbeständigkeit, Biokompatibilität und natürliche Ästhetik auszeichnen. 
                In der Beratung zeigen wir Ihnen verschiedene Materialoptionen und deren Vor- und Nachteile.
              </p>
            </div>
            
            <div className="bg-dental-beige p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2 text-dental-blue">Ist die professionelle Zahnreinigung schmerzhaft?</h3>
              <p className="text-dental-gray">
                Unsere professionelle Zahnreinigung ist in der Regel schmerzfrei. Wir arbeiten mit modernsten Ultraschall- und Pulverstrahlgeräten, 
                die besonders schonend sind. Bei empfindlichen Zähnen können wir zusätzlich eine lokale Betäubung anbieten, 
                dies ist jedoch selten notwendig.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
