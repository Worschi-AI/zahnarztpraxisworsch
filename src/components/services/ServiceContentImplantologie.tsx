
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PhoneButton from '@/components/PhoneButton';

const ServiceContentImplantologie = () => {
  return (
    <>
      <h2 className="mb-6 text-dental-blue animate-slide-up">Zahnimplantate Dresden – Festsitzender Zahnersatz in der Zahnarztpraxis Worsch</h2>
      <div className="prose prose-lg max-w-none text-dental-gray">
        
        {/* Einführungstext */}
        <div className="mb-12 animate-on-scroll">
          <p className="text-lg leading-relaxed">
            Sie suchen nach hochwertigen <strong>Zahnimplantaten in Dresden</strong>? In unserer Zahnarztpraxis Worsch in Dresden-Laubegast erhalten Sie modernste Implantologie mit 3D-Planung und schonenden Verfahren. Dr. med. dent. Thomas Worsch, Spezialist für Implantologie und ästhetische Zahnmedizin, bietet Ihnen festsitzenden Zahnersatz, der sich anfühlt wie Ihre eigenen Zähne. Mit über 500 erfolgreich gesetzten Zahnimplantaten und jahrelanger Erfahrung sind Sie bei uns in den besten Händen.
          </p>
        </div>

        {/* Die Vorteile von Zahnimplantaten */}
        <section className="mb-16 animate-on-scroll">
          <h3 className="text-2xl font-semibold mb-8 text-dental-blue">Die Vorteile von Zahnimplantaten in unserer Dresdner Praxis</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-dental-beige rounded-lg p-6 card-hover">
              <h4 className="text-xl font-medium mb-3 text-dental-blue">Biokompatible Titan-Implantate für maximale Verträglichkeit</h4>
              <p>Wir verwenden ausschließlich hochwertige Titan-Zahnimplantate, die sich optimal in Ihren Kieferknochen integrieren. Titan ist körperverträglich und bildet eine feste Verbindung mit dem Knochen (Osseointegration), wodurch Ihr Implantat eine Lebensdauer von 20 Jahren und mehr erreichen kann.</p>
            </div>
            
            <div className="bg-dental-beige rounded-lg p-6 card-hover">
              <h4 className="text-xl font-medium mb-3 text-dental-blue">Natürliches Kaugefühl und perfekte Ästhetik</h4>
              <p>Im Gegensatz zu herkömmlichen Prothesen bieten Zahnimplantate ein natürliches Kaugefühl ohne Druckstellen oder Wackeln. Die darauf befestigten Vollkeramikkronen sind von Ihren natürlichen Zähnen optisch nicht zu unterscheiden und sorgen für ein strahlendes, selbstbewusstes Lächeln.</p>
            </div>
            
            <div className="bg-dental-beige rounded-lg p-6 card-hover">
              <h4 className="text-xl font-medium mb-3 text-dental-blue">Schonung der Nachbarzähne</h4>
              <p>Anders als bei Brücken müssen für Zahnimplantate keine gesunden Nachbarzähne beschliffen werden. Ihr natürlicher Zahnbestand bleibt vollständig erhalten, was langfristig zu besserer Mundgesundheit führt.</p>
            </div>
            
            <div className="bg-dental-beige rounded-lg p-6 card-hover">
              <h4 className="text-xl font-medium mb-3 text-dental-blue">Knochenerhalt und Gesichtsästhetik</h4>
              <p>Zahnimplantate stimulieren den Kieferknochen wie natürliche Zahnwurzeln und verhindern so den Knochenabbau. Dies erhält Ihre Gesichtskonturen und verhindert das typische "eingefallene" Aussehen, das bei längerem Zahnverlust entstehen kann.</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-dental-blue to-dental-turquoise rounded-lg p-6 text-white">
            <h4 className="text-xl font-medium mb-3">Langfristige Wirtschaftlichkeit</h4>
            <p className="mb-0">Obwohl die Anfangsinvestition höher ist als bei anderen Zahnersatz-Lösungen, amortisieren sich Zahnimplantate durch ihre Langlebigkeit. Bei guter Pflege können sie ein Leben lang halten und ersparen Ihnen kostspielige Reparaturen oder Neuanfertigungen.</p>
          </div>
        </section>

        {/* Unser bewährter Implantologie-Prozess */}
        <section className="mb-16 animate-on-scroll">
          <h3 className="text-2xl font-semibold mb-8 text-dental-blue">Unser bewährter Implantologie-Prozess in Dresden</h3>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-dental-blue text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h4 className="text-lg font-medium mb-2 text-dental-blue">Erstberatung und 3D-Diagnostik</h4>
                <p>Ihr Weg zu neuen Zähnen beginnt mit einer ausführlichen Beratung in unserer Praxis in Dresden-Laubegast. Mittels digitaler Volumentomographie (DVT) erstellen wir dreidimensionale Aufnahmen Ihres Kiefers. Diese 3D-Diagnostik ermöglicht eine millimetergenaue Planung der Implantatposition und macht die Behandlung sicherer und vorhersagbarer.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-dental-blue text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h4 className="text-lg font-medium mb-2 text-dental-blue">Individuelle Behandlungsplanung</h4>
                <p>Basierend auf der 3D-Diagnostik erstellen wir einen detaillierten Behandlungsplan, der optimal auf Ihre anatomischen Gegebenheiten abgestimmt ist. Sie erhalten eine transparente Aufklärung über alle Behandlungsschritte und Kosten.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-dental-blue text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h4 className="text-lg font-medium mb-2 text-dental-blue">Schonende Implantation</h4>
                <p>Die Implantation erfolgt unter örtlicher Betäubung und ist in der Regel schmerzfrei. Dank modernster Techniken und langjähriger Erfahrung ist der Eingriff minimalinvasiv und schonend. Je nach Ausgangssituation können wir oft auch eine Sofortimplantation durchführen, bei der das Implantat direkt nach der Zahnentfernung eingesetzt wird.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-dental-blue text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h4 className="text-lg font-medium mb-2 text-dental-blue">Einheilungsphase und Nachsorge</h4>
                <p>Nach der Implantation folgt eine Einheilungsphase von 3-6 Monaten, in der das Implantat fest mit dem Kieferknochen verwächst. Während dieser Zeit erhalten Sie bei Bedarf einen hochwertigen Provisorium. Regelmäßige Kontrolltermine gewährleisten eine optimale Heilung.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-dental-blue text-white rounded-full flex items-center justify-center font-bold">5</div>
              <div>
                <h4 className="text-lg font-medium mb-2 text-dental-blue">Prothetische Versorgung</h4>
                <p>Nach erfolgreicher Einheilung wird Ihr individueller Zahnersatz angefertigt. Ob Einzelkrone, Brücke oder implantatgetragene Prothese – wir verwenden ausschließlich hochwertige Vollkeramik-Materialien für ein natürlich schönes Ergebnis.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-dental-blue text-white rounded-full flex items-center justify-center font-bold">6</div>
              <div>
                <h4 className="text-lg font-medium mb-2 text-dental-blue">Langfristige Betreuung</h4>
                <p>Auch nach Abschluss der Behandlung sind wir für Sie da. Regelmäßige Recall-Termine und professionelle Implantatreinigungen sorgen für die Langlebigkeit Ihrer neuen Zähne.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Preise für Zahnimplantate */}
        <section className="mb-16 animate-on-scroll">
          <h3 className="text-2xl font-semibold mb-8 text-dental-blue">Preise für Zahnimplantate in Dresden</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-medium mb-4 text-dental-blue">Transparente Kostenaufstellung</h4>
              <p className="mb-4">Die Kosten für Zahnimplantate variieren je nach individueller Ausgangssituation und gewählter Versorgung. In unserer Dresdner Praxis erhalten Sie eine transparente Kostenaufstellung ohne versteckte Zusatzkosten.</p>
              
              <div className="bg-dental-beige rounded-lg p-4">
                <h5 className="font-medium mb-3 text-dental-blue">Richtwerte für Zahnimplantate:</h5>
                <ul className="space-y-2">
                  <li>• Einzelzahnimplantat mit Vollkeramikkrone: ab 1.800 Euro</li>
                  <li>• Implantatgetragene Brücke (3 Zähne): ab 4.500 Euro</li>
                  <li>• Vollständige implantatgetragene Versorgung: ab 12.000 Euro</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-medium mb-4 text-dental-blue">Finanzierungsmöglichkeiten</h4>
              <p className="mb-4">Wir bieten Ihnen flexible Finanzierungslösungen, um Ihre Wunschbehandlung zu ermöglichen. Sprechen Sie uns auf individuelle Ratenzahlungspläne an.</p>
              
              <h5 className="font-medium mb-2 text-dental-blue">Zuschüsse der Krankenkassen</h5>
              <p>Auch bei Zahnimplantaten erhalten Sie den befundbezogenen Festzuschuss Ihrer Krankenkasse. Private Zusatzversicherungen übernehmen oft einen größeren Anteil der Implantatkosten.</p>
            </div>
          </div>
        </section>

        {/* Einzugsbereich */}
        <section className="mb-16 animate-on-scroll">
          <h3 className="text-2xl font-semibold mb-8 text-dental-blue">Unser Einzugsbereich für Zahnimplantate</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-dental-beige rounded-lg p-6">
              <h4 className="text-xl font-medium mb-4 text-dental-blue">Dresden und Umgebung</h4>
              <p className="mb-4">Als spezialisierte Zahnarztpraxis für Implantologie in Dresden-Laubegast betreuen wir Patienten aus dem gesamten Dresdner Raum:</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium mb-2 text-dental-blue">Stadtteile Dresden:</h5>
                  <ul className="text-sm space-y-1">
                    <li>• Dresden-Laubegast</li>
                    <li>• Dresden-Striesen</li>
                    <li>• Dresden-Blasewitz</li>
                    <li>• Dresden-Loschwitz</li>
                    <li>• Dresden-Neustadt</li>
                    <li>• Dresden-Altstadt</li>
                    <li>• Dresden-Prohlis</li>
                    <li>• Dresden-Reick</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium mb-2 text-dental-blue">Umland Dresden:</h5>
                  <ul className="text-sm space-y-1">
                    <li>• Pirna</li>
                    <li>• Freital</li>
                    <li>• Radebeul</li>
                    <li>• Coswig</li>
                    <li>• Meißen</li>
                    <li>• Radeberg</li>
                    <li>• Heidenau</li>
                    <li>• Dippoldiswalde</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-dental-blue to-dental-turquoise rounded-lg p-6 text-white">
              <h4 className="text-xl font-medium mb-4">Optimale Verkehrsanbindung</h4>
              <p>Unsere Praxis in der Österreicher Straße 38 ist sowohl mit öffentlichen Verkehrsmitteln als auch mit dem Auto gut erreichbar. Kostenlose Parkplätze stehen direkt vor der Praxis zur Verfügung.</p>
            </div>
          </div>
        </section>

        {/* Warum Zahnimplantate bei Dr. Worsch */}
        <section className="mb-16 animate-on-scroll">
          <h3 className="text-2xl font-semibold mb-8 text-dental-blue">Warum Zahnimplantate bei Dr. Worsch in Dresden?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-dental-beige rounded-lg p-6">
              <h4 className="text-lg font-medium mb-3 text-dental-blue">Spezialisierte Expertise</h4>
              <p>Dr. med. dent. Thomas Worsch ist Spezialist für Implantologie und ästhetische Zahnmedizin mit über 15 Jahren Berufserfahrung. Regelmäßige Fortbildungen und Zertifizierungen gewährleisten modernste Behandlungsmethoden.</p>
            </div>
            
            <div className="bg-dental-beige rounded-lg p-6">
              <h4 className="text-lg font-medium mb-3 text-dental-blue">Modernste Technologie</h4>
              <p className="mb-3">Unsere Praxis verfügt über neueste Technologie:</p>
              <ul className="text-sm space-y-1">
                <li>• 3D-Röntgen (DVT) für präzise Planung</li>
                <li>• Digitale Intraoralscanner</li>
                <li>• Computergestützte Implantatplanung</li>
                <li>• Minimalinvasive Operationstechniken</li>
              </ul>
            </div>
            
            <div className="bg-dental-beige rounded-lg p-6">
              <h4 className="text-lg font-medium mb-3 text-dental-blue">Persönliche Betreuung</h4>
              <p>Jeder Patient erhält eine individuelle Betreuung von der ersten Beratung bis zur Nachsorge. Unser eingespieltes Praxisteam sorgt für eine entspannte Atmosphäre und nimmt sich Zeit für Ihre Fragen und Sorgen.</p>
            </div>
            
            <div className="bg-dental-beige rounded-lg p-6">
              <h4 className="text-lg font-medium mb-3 text-dental-blue">Qualitätsgarantie</h4>
              <p>Wir gewähren eine Garantie auf unsere Implantat-Behandlungen und verwenden ausschließlich Implantatsysteme renommierter Hersteller mit langjähriger Bewährung.</p>
            </div>
          </div>
        </section>

        {/* Häufige Fragen */}
        <section className="mb-16 animate-on-scroll">
          <h3 className="text-2xl font-semibold mb-8 text-dental-blue">Häufige Fragen zu Zahnimplantaten</h3>
          
          <div className="space-y-6">
            <div className="bg-dental-beige rounded-lg p-6">
              <h4 className="text-lg font-medium mb-3 text-dental-blue">Sind Zahnimplantate schmerzhaft?</h4>
              <p>Die Implantation erfolgt unter örtlicher Betäubung und ist in der Regel schmerzfrei. Nach dem Eingriff können leichte Schwellungen und Beschwerden auftreten, die sich gut mit Schmerzmitteln behandeln lassen.</p>
            </div>
            
            <div className="bg-dental-beige rounded-lg p-6">
              <h4 className="text-lg font-medium mb-3 text-dental-blue">Wie lange halten Zahnimplantate?</h4>
              <p>Bei guter Pflege und regelmäßigen Kontrollen können Zahnimplantate 20 Jahre und länger halten. Studien zeigen Erfolgsraten von über 95% nach 10 Jahren.</p>
            </div>
            
            <div className="bg-dental-beige rounded-lg p-6">
              <h4 className="text-lg font-medium mb-3 text-dental-blue">Bin ich für Zahnimplantate geeignet?</h4>
              <p>Die meisten Patienten sind für Zahnimplantate geeignet. Wichtig sind ausreichend Kieferknochen und eine gute Mundhygiene. Auch bei Knochenabbau können wir mit Knochenaufbau-Verfahren helfen.</p>
            </div>
          </div>
        </section>

        {/* CTA Bereich */}
        <section className="animate-on-scroll">
          <div className="bg-gradient-to-r from-dental-blue to-dental-turquoise rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl font-semibold mb-4">Vereinbaren Sie Ihren Beratungstermin für Zahnimplantate in Dresden</h3>
            <p className="text-lg mb-6 leading-relaxed">
              Träumen Sie von festsitzenden Zähnen, die sich anfühlen wie Ihre eigenen? Dr. med. dent. Thomas Worsch und sein erfahrenes Team in Dresden-Laubegast freuen sich darauf, Sie zu beraten und Ihnen zu einem neuen, selbstbewussten Lächeln zu verhelfen.
            </p>
            
            <div className="mb-6">
              <h4 className="text-xl font-medium mb-4">Kontaktieren Sie uns jetzt:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-medium">Online-Termin buchen:</p>
                  <p className="text-sm">Rund um die Uhr über Doctolib</p>
                </div>
                <div>
                  <p className="font-medium">Telefonisch:</p>
                  <PhoneButton 
                    phoneNumber="0351 2522709"
                    className="bg-white text-dental-blue hover:bg-gray-50 mt-2"
                    size="sm"
                  />
                </div>
                <div>
                  <p className="font-medium">Persönlich:</p>
                  <p className="text-sm">Österreicher Str. 38, 01279 Dresden</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/appointment">
                <Button size="lg" className="bg-white text-dental-blue hover:bg-gray-50 font-medium">
                  Jetzt Termin vereinbaren
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dental-blue">
                  Kontakt aufnehmen
                </Button>
              </Link>
            </div>
            
            <p className="mt-6 text-sm italic">
              Ihre Zahngesundheit liegt uns am Herzen – vereinbaren Sie noch heute Ihren persönlichen Beratungstermin für Zahnimplantate in Dresden!
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServiceContentImplantologie;
