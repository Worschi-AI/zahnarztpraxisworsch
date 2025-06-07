
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PhoneButton from '@/components/PhoneButton';

const ServiceContentImplantologie = () => {
  return (
    <>
      <h2 className="mb-6 text-dental-blue animate-slide-up">Zahnimplantate Dresden – Festsitzender Zahnersatz in der Zahnarztpraxis Worsch</h2>
      <div className="prose prose-lg max-w-none text-dental-gray">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
          <div className="animate-slide-right">
            <p className="animate-on-scroll">
              Sie suchen nach hochwertigen <strong>Zahnimplantaten in Dresden</strong>? Der Verlust eines oder mehrerer Zähne kann die Lebensqualität erheblich einschränken – sowohl funktionell als auch ästhetisch. In unserer <strong>Zahnarztpraxis Worsch in Dresden-Laubegast</strong> erhalten Sie modernste Implantologie mit 3D-Planung und schonenden Verfahren. Dr. med. dent. Thomas Worsch, Spezialist für Implantologie und ästhetische Zahnmedizin, bietet Ihnen festsitzenden Zahnersatz, der sich anfühlt wie Ihre eigenen Zähne. Mit über 500 erfolgreich gesetzten Zahnimplantaten und jahrelanger Erfahrung sind Sie bei uns in den besten Händen.
            </p>
            <p className="animate-on-scroll">
              Ein <strong>Zahnimplantat</strong> ist eine künstliche Zahnwurzel aus biokompatiblem Titan, die schonend in den Kieferknochen eingesetzt wird. Dort verwächst es fest mit dem Knochen (Osseointegration) und bildet eine stabile Basis für den eigentlichen <strong>festsitzenden Zahnersatz</strong> – sei es eine einzelne Krone, eine Brücke oder sogar eine Prothese. Das Ergebnis: Zähne, die sich anfühlen und aussehen wie Ihre natürlichen Zähne.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg image-hover animate-slide-left">
            <img 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1770&auto=format&fit=crop"
              alt="Zahnimplantat Modell - Zahnarztpraxis Worsch Dresden"
              className="w-full h-auto"
            />
          </div>
        </div>
        
        <h3 className="text-2xl font-medium mt-8 mb-4 text-dental-blue animate-slide-up">Warum Zahnimplantate von Ihrem Spezialisten in Dresden?</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-dental-beige rounded-lg p-6 card-hover animate-scale-in">
            <h4 className="text-xl font-medium mb-3 text-dental-blue">Natürliches Aussehen und perfekte Ästhetik</h4>
            <p>Implantatgetragener Zahnersatz mit Vollkeramikkronen ist von Ihren natürlichen Zähnen optisch nicht zu unterscheiden. Unsere hochwertigen Materialien und präzise Anpassung sorgen für ein strahlendes, selbstbewusstes Lächeln, das perfekt zu Ihnen passt.</p>
          </div>
          
          <div className="bg-dental-beige rounded-lg p-6 card-hover animate-scale-in">
            <h4 className="text-xl font-medium mb-3 text-dental-blue">Fester Halt ohne Kompromisse</h4>
            <p>Kein Verrutschen, kein Wackeln – Sie können wieder unbeschwert lachen, sprechen und essen. Zahnimplantate bieten die Sicherheit und den Komfort, den Sie von Ihren natürlichen Zähnen gewohnt sind. Selbst feste Nahrung können Sie wieder ohne Bedenken genießen.</p>
          </div>
          
          <div className="bg-dental-beige rounded-lg p-6 card-hover animate-scale-in">
            <h4 className="text-xl font-medium mb-3 text-dental-blue">Schonung der Nachbarzähne</h4>
            <p>Anders als bei herkömmlichen Brücken müssen für Zahnimplantate keine gesunden Nachbarzähne beschliffen werden. Ihr natürlicher Zahnbestand bleibt vollständig erhalten, was langfristig zu besserer Mundgesundheit führt.</p>
          </div>
          
          <div className="bg-dental-beige rounded-lg p-6 card-hover animate-scale-in">
            <h4 className="text-xl font-medium mb-3 text-dental-blue">Erhalt des Kieferknochens und der Gesichtsästhetik</h4>
            <p>Zahnimplantate stimulieren den Kieferknochen wie natürliche Zahnwurzeln und verhindern so den Knochenabbau. Dies erhält Ihre Gesichtskonturen und verhindert das typische "eingefallene" Aussehen, das bei längerem Zahnverlust entstehen kann.</p>
          </div>
          
          <div className="bg-dental-beige rounded-lg p-6 card-hover animate-scale-in">
            <h4 className="text-xl font-medium mb-3 text-dental-blue">Langlebigkeit und Wirtschaftlichkeit</h4>
            <p>Bei guter Pflege können Zahnimplantate ein Leben lang halten. Studien zeigen Erfolgsraten von über 95% nach 10 Jahren. Obwohl die Anfangsinvestition höher ist, amortisieren sich Implantate durch ihre Langlebigkeit und ersparen Ihnen kostspielige Reparaturen.</p>
          </div>
          
          <div className="bg-dental-beige rounded-lg p-6 card-hover animate-scale-in">
            <h4 className="text-xl font-medium mb-3 text-dental-blue">Verbesserte Lebensqualität</h4>
            <p>Gewinnen Sie Ihr selbstsicheres Auftreten zurück. Zahnimplantate geben Ihnen die Freiheit, unbeschwert zu lachen, zu sprechen und zu essen – für ein neues Lebensgefühl ohne Einschränkungen.</p>
          </div>
        </div>

        <h3 className="text-2xl font-medium mt-8 mb-4 text-dental-blue animate-slide-up">Der Behandlungsablauf für Ihre Zahnimplantate in Dresden-Laubegast</h3>
        
        <div className="bg-dental-beige rounded-lg p-6 mb-8 card-hover animate-scale-in">
          <ol className="list-decimal list-inside space-y-6 stagger-children">
            <li className="font-medium text-dental-blue animate-slide-up">
              <span className="text-lg">Ausführliche Beratung & 3D-Diagnostik</span>
              <p className="font-normal text-dental-gray mt-2 ml-4">Ihr Weg zu neuen Zähnen beginnt mit einer ausführlichen Beratung in unserer Praxis. Wir analysieren Ihre individuelle Situation, besprechen Ihre Wünsche und klären alle Fragen rund um Zahnimplantate in Dresden. Mittels digitaler Volumentomographie (DVT) erstellen wir dreidimensionale Aufnahmen Ihres Kiefers für eine millimetergenaue Planung.</p>
            </li>
            <li className="font-medium text-dental-blue animate-slide-up">
              <span className="text-lg">Individuelle Behandlungsplanung</span>
              <p className="font-normal text-dental-gray mt-2 ml-4">Basierend auf der 3D-Diagnostik erstellen wir einen detaillierten Behandlungsplan, der optimal auf Ihre anatomischen Gegebenheiten abgestimmt ist. Sie erhalten eine transparente Aufklärung über alle Behandlungsschritte und Kosten – ohne versteckte Zusatzkosten.</p>
            </li>
            <li className="font-medium text-dental-blue animate-slide-up">
              <span className="text-lg">Schonende Implantation</span>
              <p className="font-normal text-dental-gray mt-2 ml-4">Der Eingriff erfolgt in unserer Praxis in Dresden-Laubegast ambulant und schmerzfrei unter lokaler Betäubung. Dank modernster Techniken und langjähriger Erfahrung ist die Implantation minimalinvasiv und schonend. Auf Wunsch sind auch Behandlungen in Sedierung (Dämmerschlaf) möglich.</p>
            </li>
            <li className="font-medium text-dental-blue animate-slide-up">
              <span className="text-lg">Einheilungsphase mit provisorischer Versorgung</span>
              <p className="font-normal text-dental-gray mt-2 ml-4">Das Implantat benötigt 3-6 Monate, um fest mit dem Kieferknochen zu verwachsen (Osseointegration). Während dieser Zeit erhalten Sie bei Bedarf einen hochwertigen provisorischen Zahnersatz. Regelmäßige Kontrolltermine gewährleisten eine optimale Heilung.</p>
            </li>
            <li className="font-medium text-dental-blue animate-slide-up">
              <span className="text-lg">Freilegung & präzise Abdrucknahme</span>
              <p className="font-normal text-dental-gray mt-2 ml-4">Nach erfolgreicher Einheilung wird das Implantat freigelegt und ein präziser digitaler Abdruck für Ihren individuellen Zahnersatz genommen. Moderne Intraoralscanner machen unangenehme Abdruckmassen überflüssig.</p>
            </li>
            <li className="font-medium text-dental-blue animate-slide-up">
              <span className="text-lg">Anfertigung des hochwertigen Zahnersatzes</span>
              <p className="font-normal text-dental-gray mt-2 ml-4">In unserem deutschen Meisterlabor wird Ihr festsitzender Zahnersatz (Krone, Brücke oder Prothese) aus hochwertiger Vollkeramik passgenau gefertigt. Jedes Stück ist ein Unikat, das perfekt zu Ihren natürlichen Zähnen passt.</p>
            </li>
            <li className="font-medium text-dental-blue animate-slide-up">
              <span className="text-lg">Eingliederung und Funktionsprüfung</span>
              <p className="font-normal text-dental-gray mt-2 ml-4">Der fertige Zahnersatz wird präzise auf dem Implantat befestigt und die Kaufunktion sowie Ästhetik überprüft. Sie verlassen unsere Praxis mit festen, schönen Zähnen und einem strahlenden Lächeln.</p>
            </li>
            <li className="font-medium text-dental-blue animate-slide-up">
              <span className="text-lg">Langfristige Nachsorge</span>
              <p className="font-normal text-dental-gray mt-2 ml-4">Regelmäßige Kontrollen und professionelle Implantatreinigungen sichern den langfristigen Erfolg Ihrer Implantate. Unser Recall-System erinnert Sie automatisch an wichtige Vorsorgetermine.</p>
            </li>
          </ol>
        </div>

        <h3 className="text-2xl font-medium mt-8 mb-4 text-dental-blue animate-slide-up">Kosten für Zahnimplantate in Dresden – Transparente Preise</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm card-hover animate-scale-in">
            <h4 className="text-xl font-medium mb-4 text-dental-blue">Richtwerte für Zahnimplantate</h4>
            <ul className="space-y-2">
              <li><strong>Einzelzahnimplantat mit Vollkeramikkrone:</strong> ab 1.800 Euro</li>
              <li><strong>Implantatgetragene Brücke (3 Zähne):</strong> ab 4.500 Euro</li>
              <li><strong>Vollständige implantatgetragene Versorgung:</strong> ab 12.000 Euro</li>
              <li><strong>Knochenaufbau (falls erforderlich):</strong> ab 400 Euro</li>
            </ul>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm card-hover animate-scale-in">
            <h4 className="text-xl font-medium mb-4 text-dental-blue">Finanzierung & Zuschüsse</h4>
            <ul className="space-y-2">
              <li>• Individuelle Ratenzahlungspläne</li>
              <li>• 0%-Finanzierung über Partnerbanken</li>
              <li>• Krankenkassen-Festzuschuss auch bei Implantaten</li>
              <li>• Private Zusatzversicherungen: oft 50-90% Kostenübernahme</li>
              <li>• Beihilfe für Beamte möglich</li>
            </ul>
          </div>
        </div>

        <h3 className="text-2xl font-medium mt-8 mb-4 text-dental-blue animate-slide-up">Unser Einzugsbereich für Zahnimplantate – Dresden und Umgebung</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-dental-beige rounded-lg p-6 card-hover animate-scale-in">
            <h4 className="text-xl font-medium mb-3 text-dental-blue">Dresden Stadtteile</h4>
            <ul className="grid grid-cols-2 gap-1 text-sm">
              <li>• Dresden-Laubegast (vor Ort)</li>
              <li>• Dresden-Striesen</li>
              <li>• Dresden-Blasewitz</li>
              <li>• Dresden-Loschwitz</li>
              <li>• Dresden-Neustadt</li>
              <li>• Dresden-Altstadt</li>
              <li>• Dresden-Prohlis</li>
              <li>• Dresden-Reick</li>
              <li>• Dresden-Gorbitz</li>
              <li>• Dresden-Cotta</li>
            </ul>
          </div>
          
          <div className="bg-dental-beige rounded-lg p-6 card-hover animate-scale-in">
            <h4 className="text-xl font-medium mb-3 text-dental-blue">Umland und weitere Gebiete</h4>
            <ul className="grid grid-cols-2 gap-1 text-sm">
              <li>• Pirna</li>
              <li>• Heidenau</li>
              <li>• Freital</li>
              <li>• Bannewitz</li>
              <li>• Radebeul</li>
              <li>• Coswig</li>
              <li>• Meißen</li>
              <li>• Riesa</li>
              <li>• Radeberg</li>
              <li>• Dippoldiswalde</li>
            </ul>
            <p className="text-sm mt-3 text-dental-gray">Optimale Verkehrsanbindung mit Straßenbahn Linie 2 und kostenlosen Parkplätzen direkt vor der Praxis.</p>
          </div>
        </div>

        <h3 className="text-2xl font-medium mt-8 mb-4 text-dental-blue animate-slide-up">Häufig gestellte Fragen zu Zahnimplantaten</h3>
        
        <div className="grid grid-cols-1 gap-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm card-hover animate-scale-in">
            <h4 className="text-lg font-medium mb-2 text-dental-blue">Sind Zahnimplantate schmerzhaft?</h4>
            <p>Die Implantation erfolgt unter örtlicher Betäubung und ist in der Regel völlig schmerzfrei. Nach dem Eingriff können leichte Schwellungen und Beschwerden auftreten, die sich gut mit Schmerzmitteln behandeln lassen und nach wenigen Tagen abklingen.</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm card-hover animate-scale-in">
            <h4 className="text-lg font-medium mb-2 text-dental-blue">Wie lange halten Zahnimplantate?</h4>
            <p>Bei guter Pflege und regelmäßigen Kontrollen können Zahnimplantate 20 Jahre und länger halten. Studien zeigen Erfolgsraten von über 95% nach 10 Jahren. Die Langlebigkeit hängt wesentlich von Ihrer Mundhygiene und regelmäßigen Prophylaxe ab.</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm card-hover animate-scale-in">
            <h4 className="text-lg font-medium mb-2 text-dental-blue">Welche Kosten kommen auf mich zu?</h4>
            <p>Die Kosten variieren je nach Ausgangssituation. Ein Einzelimplantat mit Krone kostet ab 1.800 Euro. Ihre Krankenkasse gewährt einen Festzuschuss, private Zusatzversicherungen übernehmen oft den Großteil der Kosten. Wir erstellen Ihnen gerne einen individuellen Kostenvoranschlag.</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm card-hover animate-scale-in">
            <h4 className="text-lg font-medium mb-2 text-dental-blue">Wer ist für Zahnimplantate geeignet?</h4>
            <p>Die meisten Patienten sind für Zahnimplantate geeignet. Wichtige Voraussetzungen sind: ausreichend Kieferknochen, abgeschlossenes Kieferwachstum (ab ca. 18 Jahren), gute Mundhygiene und allgemeine Gesundheit. Auch bei Knochenabbau können wir mit speziellen Aufbau-Verfahren helfen.</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm card-hover animate-scale-in">
            <h4 className="text-lg font-medium mb-2 text-dental-blue">Kann ich auch bei Angst vor dem Zahnarzt Implantate bekommen?</h4>
            <p>Selbstverständlich! Wir sind spezialisiert auf die Behandlung von Angstpatienten. Neben einfühlsamer Betreuung bieten wir auch Sedierung (Dämmerschlaf) an, bei der Sie die Behandlung entspannt und angstfrei erleben.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-dental-turquoise to-dental-blue text-white rounded-lg p-8 mt-12 text-center animate-scale-in">
          <h3 className="text-2xl font-bold mb-4">Feste Zähne, neues Lebensgefühl – Vereinbaren Sie Ihren Beratungstermin!</h3>
          <p className="text-lg mb-6">
            Träumen Sie von festsitzenden Zähnen, die sich anfühlen wie Ihre eigenen? Dr. med. dent. Thomas Worsch und sein erfahrenes Team in Dresden-Laubegast freuen sich darauf, Sie persönlich zu beraten und Ihnen zu einem neuen, selbstbewussten Lächeln zu verhelfen.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Kontaktieren Sie uns jetzt:</h4>
              <ul className="text-left space-y-1 text-sm">
                <li>• Online-Termin: Rund um die Uhr über Doctolib</li>
                <li>• Telefonisch: 0351 2522709 (Mo-Fr 7:30-18:00)</li>
                <li>• Persönlich: Österreicher Str. 38, 01279 Dresden</li>
              </ul>
            </div>
            
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Ihre Vorteile bei uns:</h4>
              <ul className="text-left space-y-1 text-sm">
                <li>✓ Über 500 erfolgreich gesetzte Implantate</li>
                <li>✓ 3D-Planung für maximale Sicherheit</li>
                <li>✓ Modernste Technologie und Materialien</li>
                <li>✓ Transparente Kosten ohne Zusatzkosten</li>
                <li>✓ Flexible Finanzierungsmöglichkeiten</li>
                <li>✓ Spezialisierung auf Angstpatienten</li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-dental-blue hover:bg-dental-beige hover:scale-105 transform transition-all duration-300">
              <Link to="/appointment">Termin vereinbaren</Link>
            </Button>
            <PhoneButton 
              phoneNumber="0351 2522709"
              buttonText="Jetzt anrufen"
              size="lg"
              className="bg-dental-turquoise hover:bg-dental-blue hover:scale-105 transform transition-all duration-300"
            />
          </div>
          
          <p className="mt-4 text-sm opacity-90">
            Ihre Zahngesundheit liegt uns am Herzen – vereinbaren Sie noch heute Ihren persönlichen Beratungstermin für Zahnimplantate in Dresden!
          </p>
        </div>
      </div>
    </>
  );
};

export default ServiceContentImplantologie;
