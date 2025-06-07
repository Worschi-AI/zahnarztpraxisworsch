
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PhoneButton from '@/components/PhoneButton';

const ServiceContentImplantologie = () => {
  return (
    <div className="w-full max-w-none">
      <div className="prose prose-lg max-w-none text-dental-gray">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-dental-blue animate-slide-up">
          Zahnimplantate Dresden – Festsitzender Zahnersatz in der Zahnarztpraxis Worsch
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
          <div className="animate-slide-right">
            <p className="text-lg mb-4 animate-on-scroll">
              Sie suchen nach hochwertigen <strong>Zahnimplantaten in Dresden</strong>? Der Verlust eines oder mehrerer Zähne kann die Lebensqualität erheblich einschränken – sowohl funktionell als auch ästhetisch. In unserer <strong>Zahnarztpraxis Worsch in Dresden-Laubegast</strong> erhalten Sie modernste Implantologie mit 3D-Planung und schonenden Verfahren. Dr. med. dent. Thomas Worsch, Spezialist für Implantologie und ästhetische Zahnmedizin, bietet Ihnen festsitzenden Zahnersatz, der sich anfühlt wie Ihre eigenen Zähne. Mit über 500 erfolgreich gesetzten Zahnimplantaten und jahrelanger Erfahrung sind Sie bei uns in den besten Händen.
            </p>
            <p className="text-lg animate-on-scroll">
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
        
        <h2 className="text-2xl md:text-3xl font-semibold mt-12 mb-8 text-dental-blue animate-slide-up">
          Warum Zahnimplantate von Ihrem Spezialisten in Dresden?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-dental-beige rounded-lg p-6 card-hover animate-scale-in">
            <h3 className="text-xl font-semibold mb-3 text-dental-blue">Natürliches Aussehen und perfekte Ästhetik</h3>
            <p>Implantatgetragener Zahnersatz mit Vollkeramikkronen ist von Ihren natürlichen Zähnen optisch nicht zu unterscheiden. Unsere hochwertigen Materialien und präzise Anpassung sorgen für ein strahlendes, selbstbewusstes Lächeln, das perfekt zu Ihnen passt.</p>
          </div>
          
          <div className="bg-dental-beige rounded-lg p-6 card-hover animate-scale-in">
            <h3 className="text-xl font-semibold mb-3 text-dental-blue">Fester Halt ohne Kompromisse</h3>
            <p>Kein Verrutschen, kein Wackeln – Sie können wieder unbeschwert lachen, sprechen und essen. Zahnimplantate bieten die Sicherheit und den Komfort, den Sie von Ihren natürlichen Zähnen gewohnt sind. Selbst feste Nahrung können Sie wieder ohne Bedenken genießen.</p>
          </div>
          
          <div className="bg-dental-beige rounded-lg p-6 card-hover animate-scale-in">
            <h3 className="text-xl font-semibold mb-3 text-dental-blue">Schonung der Nachbarzähne</h3>
            <p>Anders als bei herkömmlichen Brücken müssen für Zahnimplantate keine gesunden Nachbarzähne beschliffen werden. Ihr natürlicher Zahnbestand bleibt vollständig erhalten, was langfristig zu besserer Mundgesundheit führt.</p>
          </div>
          
          <div className="bg-dental-beige rounded-lg p-6 card-hover animate-scale-in">
            <h3 className="text-xl font-semibold mb-3 text-dental-blue">Erhalt des Kieferknochens und der Gesichtsästhetik</h3>
            <p>Zahnimplantate stimulieren den Kieferknochen wie natürliche Zahnwurzeln und verhindern so den Knochenabbau. Dies erhält Ihre Gesichtskonturen und verhindert das typische "eingefallene" Aussehen, das bei längerem Zahnverlust entstehen kann.</p>
          </div>
          
          <div className="bg-dental-beige rounded-lg p-6 card-hover animate-scale-in">
            <h3 className="text-xl font-semibold mb-3 text-dental-blue">Langlebigkeit und Wirtschaftlichkeit</h3>
            <p>Bei guter Pflege können Zahnimplantate ein Leben lang halten. Studien zeigen Erfolgsraten von über 95% nach 10 Jahren. Obwohl die Anfangsinvestition höher ist, amortisieren sich Implantate durch ihre Langlebigkeit und ersparen Ihnen kostspielige Reparaturen.</p>
          </div>
          
          <div className="bg-dental-beige rounded-lg p-6 card-hover animate-scale-in">
            <h3 className="text-xl font-semibold mb-3 text-dental-blue">Verbesserte Lebensqualität</h3>
            <p>Gewinnen Sie Ihr selbstsicheres Auftreten zurück. Zahnimplantate geben Ihnen die Freiheit, unbeschwert zu lachen, zu sprechen und zu essen – für ein neues Lebensgefühl ohne Einschränkungen.</p>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold mt-12 mb-8 text-dental-blue animate-slide-up">
          Der Behandlungsablauf für Ihre Zahnimplantate in Dresden-Laubegast
        </h2>
        
        <div className="bg-dental-beige rounded-lg p-6 md:p-8 mb-12 card-hover animate-scale-in">
          <div className="space-y-8 stagger-children">
            <div className="border-l-4 border-dental-blue pl-6 animate-slide-up">
              <h3 className="text-lg font-semibold text-dental-blue mb-2">1. Ausführliche Beratung & 3D-Diagnostik</h3>
              <p className="text-dental-gray">Ihr Weg zu neuen Zähnen beginnt mit einer ausführlichen Beratung in unserer Praxis. Wir analysieren Ihre individuelle Situation, besprechen Ihre Wünsche und klären alle Fragen rund um Zahnimplantate in Dresden. Mittels digitaler Volumentomographie (DVT) erstellen wir dreidimensionale Aufnahmen Ihres Kiefers für eine millimetergenaue Planung.</p>
            </div>
            
            <div className="border-l-4 border-dental-blue pl-6 animate-slide-up">
              <h3 className="text-lg font-semibold text-dental-blue mb-2">2. Individuelle Behandlungsplanung</h3>
              <p className="text-dental-gray">Basierend auf der 3D-Diagnostik erstellen wir einen detaillierten Behandlungsplan, der optimal auf Ihre anatomischen Gegebenheiten abgestimmt ist. Sie erhalten eine transparente Aufklärung über alle Behandlungsschritte und Kosten – ohne versteckte Zusatzkosten.</p>
            </div>
            
            <div className="border-l-4 border-dental-blue pl-6 animate-slide-up">
              <h3 className="text-lg font-semibold text-dental-blue mb-2">3. Schonende Implantation</h3>
              <p className="text-dental-gray">Der Eingriff erfolgt in unserer Praxis in Dresden-Laubegast ambulant und schmerzfrei unter lokaler Betäubung. Dank modernster Techniken und langjähriger Erfahrung ist die Implantation minimalinvasiv und schonend. Auf Wunsch sind auch Behandlungen in Sedierung (Dämmerschlaf) möglich.</p>
            </div>
            
            <div className="border-l-4 border-dental-blue pl-6 animate-slide-up">
              <h3 className="text-lg font-semibold text-dental-blue mb-2">4. Einheilungsphase mit provisorischer Versorgung</h3>
              <p className="text-dental-gray">Das Implantat benötigt 3-6 Monate, um fest mit dem Kieferknochen zu verwachsen (Osseointegration). Während dieser Zeit erhalten Sie bei Bedarf einen hochwertigen provisorischen Zahnersatz. Regelmäßige Kontrolltermine gewährleisten eine optimale Heilung.</p>
            </div>
            
            <div className="border-l-4 border-dental-blue pl-6 animate-slide-up">
              <h3 className="text-lg font-semibold text-dental-blue mb-2">5. Freilegung & präzise Abdrucknahme</h3>
              <p className="text-dental-gray">Nach erfolgreicher Einheilung wird das Implantat freigelegt und ein präziser digitaler Abdruck für Ihren individuellen Zahnersatz genommen. Moderne Intraoralscanner machen unangenehme Abdruckmassen überflüssig.</p>
            </div>
            
            <div className="border-l-4 border-dental-blue pl-6 animate-slide-up">
              <h3 className="text-lg font-semibold text-dental-blue mb-2">6. Anfertigung des hochwertigen Zahnersatzes</h3>
              <p className="text-dental-gray">In unserem deutschen Meisterlabor wird Ihr festsitzender Zahnersatz (Krone, Brücke oder Prothese) aus hochwertiger Vollkeramik passgenau gefertigt. Jedes Stück ist ein Unikat, das perfekt zu Ihren natürlichen Zähnen passt.</p>
            </div>
            
            <div className="border-l-4 border-dental-blue pl-6 animate-slide-up">
              <h3 className="text-lg font-semibold text-dental-blue mb-2">7. Eingliederung und Funktionsprüfung</h3>
              <p className="text-dental-gray">Der fertige Zahnersatz wird präzise auf dem Implantat befestigt und die Kaufunktion sowie Ästhetik überprüft. Sie verlassen unsere Praxis mit festen, schönen Zähnen und einem strahlenden Lächeln.</p>
            </div>
            
            <div className="border-l-4 border-dental-blue pl-6 animate-slide-up">
              <h3 className="text-lg font-semibold text-dental-blue mb-2">8. Langfristige Nachsorge</h3>
              <p className="text-dental-gray">Regelmäßige Kontrollen und professionelle Implantatreinigungen sichern den langfristigen Erfolg Ihrer Implantate. Unser Recall-System erinnert Sie automatisch an wichtige Vorsorgetermine.</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold mt-12 mb-8 text-dental-blue animate-slide-up">
          Kosten für Zahnimplantate in Dresden – Transparente Preise
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm card-hover animate-scale-in">
            <h3 className="text-xl font-semibold mb-4 text-dental-blue">Individuelle Kostenaufstellung ohne versteckte Kosten</h3>
            <p className="mb-4">Die Kosten für Zahnimplantate variieren je nach individueller Ausgangssituation und gewählter Versorgung. In unserer Dresdner Praxis erhalten Sie eine transparente, detaillierte Kostenaufstellung.</p>
            <h4 className="font-semibold mb-3">Richtwerte für Zahnimplantate in Dresden:</h4>
            <ul className="space-y-2 text-sm">
              <li><strong>Einzelzahnimplantat mit Vollkeramikkrone:</strong> ab 1.800 Euro</li>
              <li><strong>Implantatgetragene Brücke (3 Zähne):</strong> ab 4.500 Euro</li>
              <li><strong>Vollständige implantatgetragene Versorgung:</strong> ab 12.000 Euro</li>
              <li><strong>Knochenaufbau (falls erforderlich):</strong> ab 400 Euro</li>
            </ul>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm card-hover animate-scale-in">
            <h3 className="text-xl font-semibold mb-4 text-dental-blue">Finanzierungsmöglichkeiten für Ihre Wunschbehandlung</h3>
            <p className="mb-4">Wir bieten Ihnen flexible Finanzierungslösungen, um Ihre Implantat-Behandlung zu ermöglichen:</p>
            <ul className="space-y-2 mb-4">
              <li>• Individuelle Ratenzahlungspläne</li>
              <li>• 0%-Finanzierung über Partnerbanken</li>
              <li>• Kombination mit Krankenkassen-Zuschüssen</li>
            </ul>
            <h4 className="font-semibold mb-2">Zuschüsse und Versicherungsleistungen:</h4>
            <ul className="space-y-1 text-sm">
              <li>• <strong>Krankenkassen:</strong> Befundbezogener Festzuschuss auch bei Implantaten</li>
              <li>• <strong>Private Zusatzversicherungen:</strong> Oft 50-90% Kostenübernahme</li>
              <li>• <strong>Beihilfe:</strong> Teilerstattung für Beamte möglich</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold mt-12 mb-8 text-dental-blue animate-slide-up">
          Unser Einzugsbereich für Zahnimplantate – Dresden und Umgebung
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-dental-beige rounded-lg p-6 card-hover animate-scale-in">
            <h3 className="text-xl font-semibold mb-4 text-dental-blue">Zentral erreichbar in Dresden-Laubegast</h3>
            <p className="mb-4">Als spezialisierte Zahnarztpraxis für Implantologie betreuen wir Patienten aus dem gesamten Dresdner Raum und darüber hinaus:</p>
            <h4 className="font-semibold mb-3">Dresden Stadtteile:</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm mb-4">
              <li>• Dresden-Laubegast (direkt vor Ort)</li>
              <li>• Dresden-Striesen und Blasewitz</li>
              <li>• Dresden-Loschwitz und Weißer Hirsch</li>
              <li>• Dresden-Neustadt und Altstadt</li>
              <li>• Dresden-Prohlis und Reick</li>
              <li>• Dresden-Gorbitz und Cotta</li>
            </ul>
            <h4 className="font-semibold mb-3">Umland und weitere Gebiete:</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm">
              <li>• Pirna und Heidenau</li>
              <li>• Freital und Bannewitz</li>
              <li>• Radebeul und Coswig</li>
              <li>• Meißen und Riesa</li>
              <li>• Radeberg und Ottendorf-Okrilla</li>
              <li>• Dippoldiswalde und Tharandt</li>
            </ul>
          </div>
          
          <div className="bg-dental-beige rounded-lg p-6 card-hover animate-scale-in">
            <h3 className="text-xl font-semibold mb-4 text-dental-blue">Optimale Verkehrsanbindung</h3>
            <p className="mb-4">Unsere Praxis in der Österreicher Straße 38 ist sowohl mit öffentlichen Verkehrsmitteln (Straßenbahn Linie 2) als auch mit dem Auto hervorragend erreichbar. Kostenlose Parkplätze stehen direkt vor der Praxis zur Verfügung.</p>
            <div className="bg-white/50 rounded p-4">
              <h4 className="font-semibold mb-2">Anfahrt:</h4>
              <p className="text-sm"><strong>Adresse:</strong> Österreicher Str. 38, 01279 Dresden-Laubegast</p>
              <p className="text-sm"><strong>Öffentlich:</strong> Straßenbahn Linie 2 bis Haltestelle "Österreicher Straße"</p>
              <p className="text-sm"><strong>PKW:</strong> Kostenlose Parkplätze direkt vor der Praxis</p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold mt-12 mb-8 text-dental-blue animate-slide-up">
          Häufig gestellte Fragen zu Zahnimplantaten
        </h2>
        
        <div className="grid grid-cols-1 gap-6 mb-12">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm card-hover animate-scale-in">
            <h3 className="text-lg font-semibold mb-3 text-dental-blue">Sind Zahnimplantate schmerzhaft?</h3>
            <p>Die Implantation erfolgt unter örtlicher Betäubung und ist in der Regel völlig schmerzfrei. Nach dem Eingriff können leichte Schwellungen und Beschwerden auftreten, die sich gut mit Schmerzmitteln behandeln lassen und nach wenigen Tagen abklingen.</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm card-hover animate-scale-in">
            <h3 className="text-lg font-semibold mb-3 text-dental-blue">Wie lange halten Zahnimplantate?</h3>
            <p>Bei guter Pflege und regelmäßigen Kontrollen können Zahnimplantate 20 Jahre und länger halten. Studien zeigen Erfolgsraten von über 95% nach 10 Jahren. Die Langlebigkeit hängt wesentlich von Ihrer Mundhygiene und regelmäßigen Prophylaxe ab.</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm card-hover animate-scale-in">
            <h3 className="text-lg font-semibold mb-3 text-dental-blue">Welche Kosten kommen auf mich zu?</h3>
            <p>Die Kosten variieren je nach Ausgangssituation. Ein Einzelimplantat mit Krone kostet ab 1.800 Euro. Ihre Krankenkasse gewährt einen Festzuschuss, private Zusatzversicherungen übernehmen oft den Großteil der Kosten. Wir erstellen Ihnen gerne einen individuellen Kostenvoranschlag.</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm card-hover animate-scale-in">
            <h3 className="text-lg font-semibold mb-3 text-dental-blue">Wer ist für Zahnimplantate geeignet?</h3>
            <p>Die meisten Patienten sind für Zahnimplantate geeignet. Wichtige Voraussetzungen sind: ausreichend Kieferknochen, abgeschlossenes Kieferwachstum (ab ca. 18 Jahren), gute Mundhygiene und allgemeine Gesundheit. Auch bei Knochenabbau können wir mit speziellen Aufbau-Verfahren helfen.</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm card-hover animate-scale-in">
            <h3 className="text-lg font-semibold mb-3 text-dental-blue">Kann ich auch bei Angst vor dem Zahnarzt Implantate bekommen?</h3>
            <p>Selbstverständlich! Wir sind spezialisiert auf die Behandlung von Angstpatienten. Neben einfühlsamer Betreuung bieten wir auch Sedierung (Dämmerschlaf) an, bei der Sie die Behandlung entspannt und angstfrei erleben.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-dental-turquoise to-dental-blue text-white rounded-lg p-6 md:p-8 mt-12 text-center animate-scale-in">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Feste Zähne, neues Lebensgefühl – Vereinbaren Sie Ihren Beratungstermin!</h2>
          <p className="text-lg mb-6">
            Träumen Sie von festsitzenden Zähnen, die sich anfühlen wie Ihre eigenen? Dr. med. dent. Thomas Worsch und sein erfahrenes Team in Dresden-Laubegast freuen sich darauf, Sie persönlich zu beraten und Ihnen zu einem neuen, selbstbewussten Lächeln zu verhelfen.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-3">Kontaktieren Sie uns jetzt für Ihren unverbindlichen Beratungstermin:</h3>
              <ul className="text-left space-y-2 text-sm">
                <li>• <strong>Online-Termin buchen:</strong> Rund um die Uhr über Doctolib</li>
                <li>• <strong>Telefonisch:</strong> 0351 2522709 (Mo-Fr 7:30-18:00 Uhr)</li>
                <li>• <strong>Persönlich:</strong> Österreicher Str. 38, 01279 Dresden-Laubegast</li>
              </ul>
            </div>
            
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-3">Ihre Vorteile bei der Zahnarztpraxis Worsch:</h3>
              <ul className="text-left space-y-1 text-sm">
                <li>✓ Über 500 erfolgreich gesetzte Implantate</li>
                <li>✓ 3D-Planung für maximale Sicherheit</li>
                <li>✓ Modernste Technologie und Materialien</li>
                <li>✓ Transparente Kosten ohne versteckte Zusatzkosten</li>
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
    </div>
  );
};

export default ServiceContentImplantologie;
