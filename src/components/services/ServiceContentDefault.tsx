import React from 'react';

interface ServiceContentDefaultProps {
  title: string;
  fullDescription: string;
  procedure?: string;
  isZahnersatz?: boolean;
  isProphylaxe?: boolean;
  isZahnerhaltung?: boolean;
}

const ServiceContentDefault: React.FC<ServiceContentDefaultProps> = ({
  title,
  fullDescription,
  procedure,
  isZahnersatz = false,
  isProphylaxe = false,
  isZahnerhaltung = false
}) => {
  return (
    <>
      {isZahnersatz ? (
        <>
          <h2 className="mb-6 text-dental-blue">Hochwertiger Zahnersatz in Dresden für Ihre Zahngesundheit</h2>
          <div className="prose prose-lg max-w-none text-dental-gray">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <p>
                  <strong>Zahnersatz in Dresden</strong> von höchster Qualität ist unsere Spezialität. In der Zahnarztpraxis Worsch bieten wir Ihnen individuell angepasste Lösungen, die in Funktion und Ästhetik höchsten Ansprüchen gerecht werden.
                </p>
                <p>
                  Unser erfahrenes Team für <strong>hochwertigen Zahnersatz Dresden</strong> setzt auf modernste Materialien und Techniken für ein natürliches Ergebnis, das kaum vom eigenen Zahn zu unterscheiden ist.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1770&auto=format&fit=crop"
                  alt="Hochwertiger Zahnersatz - Zahnarztpraxis Worsch Dresden"
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <h3 className="text-2xl font-medium mt-10 mb-6 text-dental-blue">Unsere Zahnersatz-Lösungen für Sie in Dresden</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-10">
              <div className="bg-dental-beige p-5 rounded-lg">
                <h4 className="text-xl font-medium mb-3 text-dental-blue">Zahnkronen Dresden</h4>
                <p className="text-base">
                  Hochwertige Vollkeramikkronen für einzelne Zähne, die stark geschädigt sind. Natürliche Optik und höchste Stabilität für Ihre Zahngesundheit.
                </p>
              </div>
              
              <div className="bg-dental-beige p-5 rounded-lg">
                <h4 className="text-xl font-medium mb-3 text-dental-blue">Zahnbrücken Dresden</h4>
                <p className="text-base">
                  Festsitzender Zahnersatz für Lücken zwischen gesunden Zähnen. Wiederherstellung der Kaufunktion und Ästhetik ohne Implantate.
                </p>
              </div>
              
              <div className="bg-dental-beige p-5 rounded-lg">
                <h4 className="text-xl font-medium mb-3 text-dental-blue">Teilprothesen & Vollprothesen</h4>
                <p className="text-base">
                  Herausnehmbare Lösungen für größere Zahnlücken oder zahnlose Kiefer. Modern, komfortabel und natürlich wirkend.
                </p>
              </div>
              
              <div className="bg-dental-beige p-5 rounded-lg">
                <h4 className="text-xl font-medium mb-3 text-dental-blue">Implantatgetragener Zahnersatz</h4>
                <p className="text-base">
                  Die Premium-Lösung: Fest verankerter Zahnersatz auf Implantaten für höchsten Tragekomfort und Ästhetik. Wie eigene Zähne.
                </p>
              </div>
            </div>
            
            <div className="mt-12 pt-4">
              <h3 className="text-2xl font-medium mb-4 text-dental-blue">Materialien für Ihren Zahnersatz in Dresden</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                <div className="rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
                  <img 
                    src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1740&auto=format&fit=crop" 
                    alt="Vollkeramischer Zahnersatz - Zahnarztpraxis Worsch Dresden"
                    className="w-full h-auto"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <p className="mb-4">
                    In der Zahnarztpraxis Worsch in Dresden verarbeiten wir ausschließlich hochwertige Materialien für Ihren Zahnersatz:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Vollkeramik:</strong> Höchste Ästhetik, biokompatibel und metallfrei</li>
                    <li><strong>Zirkonoxid:</strong> Extrem belastbar und gleichzeitig ästhetisch ansprechend</li>
                    <li><strong>E.max Keramik:</strong> Ideal für Frontzähne mit naturidentischer Lichtdurchlässigkeit</li>
                    <li><strong>Hochwertige Kunststoffe:</strong> Für komfortable Teilprothesen und Interimslösungen</li>
                  </ul>
                  <p className="mt-4">
                    Wir arbeiten eng mit deutschen Meisterlaboren zusammen, um Ihnen <strong>Zahnersatz in Dresden</strong> in handwerklicher Perfektion bieten zu können.
                  </p>
                </div>
              </div>
            </div>
            
            {procedure && (
              <>
                <h3 className="text-2xl font-medium mt-8 mb-4 text-dental-blue">So entstehen Ihre neuen Zähne: Ablauf der Behandlung</h3>
                <div className="bg-dental-beige rounded-lg p-6">
                  <ol className="list-decimal list-inside space-y-4">
                    <li className="font-medium text-dental-blue">Ausführliche Beratung und Planung
                      <p className="font-normal text-dental-gray mt-1">Wir analysieren Ihre Situation, besprechen die Möglichkeiten und erstellen einen individuellen Behandlungsplan.</p>
                    </li>
                    <li className="font-medium text-dental-blue">Digitale Abformung mit Intraoralscanner
                      <p className="font-normal text-dental-gray mt-1">Präzise und angenehm ohne unangenehme Abformmaterialien (oder klassische Abformung, falls erforderlich).</p>
                    </li>
                    <li className="font-medium text-dental-blue">Vorbereitung der Zähne
                      <p className="font-normal text-dental-gray mt-1">Bei festsitzendem Zahnersatz werden die betreffenden Zähne schonend präpariert.</p>
                    </li>
                    <li className="font-medium text-dental-blue">Provisorische Versorgung
                      <p className="font-normal text-dental-gray mt-1">Während der Herstellungsphase erhalten Sie ein hochwertiges Provisorium.</p>
                    </li>
                    <li className="font-medium text-dental-blue">Anfertigung im Meisterlabor
                      <p className="font-normal text-dental-gray mt-1">Ihr <strong>individueller Zahnersatz in Dresden</strong> wird nach höchsten Standards gefertigt.</p>
                    </li>
                    <li className="font-medium text-dental-blue">Einprobe und Farbanpassung
                      <p className="font-normal text-dental-gray mt-1">Für ein perfektes Ergebnis wird der Zahnersatz angepasst und die Farbe optimal abgestimmt.</p>
                    </li>
                    <li className="font-medium text-dental-blue">Eingliederung und Nachsorge
                      <p className="font-normal text-dental-gray mt-1">Nach der finalen Eingliederung beraten wir Sie zur optimalen Pflege Ihres Zahnersatzes.</p>
                    </li>
                  </ol>
                </div>
              </>
            )}
          </div>
        </>
      ) : isProphylaxe ? (
        <>
          <h2 className="mb-6 text-dental-blue">Professionelle Zahnreinigung & Prophylaxe in Dresden – Mehr als nur Putzen</h2>
          <div className="prose prose-lg max-w-none text-dental-gray">
            <p>{fullDescription}</p>
            
            <h3 className="text-2xl font-medium mt-8 mb-4 text-dental-blue">Warum ist professionelle Zahnprophylaxe in Dresden so wichtig?</h3>
            <p className="mb-4">
              Selbst bei sorgfältigster häuslicher Mundhygiene bleiben oft Beläge in schwer zugänglichen Bereichen wie Zahnzwischenräumen oder am Zahnfleischrand zurück. Diese bakteriellen Beläge (Plaque) sind die Hauptursache für Karies und Zahnfleischentzündungen (Gingivitis), die unbehandelt zu Parodontitis und Zahnverlust führen können.
            </p>
            <p className="mb-4">
              Eine professionelle Zahnreinigung in unserer Praxis in Dresden geht weit über das hinaus, was Sie zu Hause erreichen können:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Gründliche Entfernung aller Beläge:</strong> Wir entfernen harten Zahnstein und weiche Beläge auch an schwer erreichbaren Stellen.</li>
              <li><strong>Beseitigung von Verfärbungen:</strong> Kaffee, Tee, Rotwein oder Nikotin hinterlassen oft unschöne Verfärbungen, die wir sanft entfernen für ein helleres Lächeln.</li>
              <li><strong>Politur der Zahnoberflächen:</strong> Glatte Oberflächen erschweren neuen Bakterien das Anhaften.</li>
              <li><strong>Fluoridierung:</strong> Stärkt den Zahnschmelz und schützt vor Karies.</li>
              <li><strong>Individuelle Beratung:</strong> Wir geben Ihnen wertvolle Tipps zur Optimierung Ihrer täglichen Mundpflege und zur Auswahl der richtigen Hilfsmittel.</li>
            </ul>
            
            {procedure && (
              <>
                <h3 className="text-2xl font-medium mt-8 mb-4 text-dental-blue">Ablauf Ihrer professionellen Zahnreinigung in Dresden Laubegast</h3>
                <p>{procedure}</p>
              </>
            )}
          </div>
        </>
      ) : isZahnerhaltung ? (
        <>
          <h2 className="mb-6 text-dental-blue">Moderne Zahnerhaltung in Dresden – Für den langfristigen Erhalt Ihrer Zähne</h2>
          <div className="prose prose-lg max-w-none text-dental-gray">
            <p>{fullDescription}</p>
            
            <h3 className="text-2xl font-medium mt-8 mb-6 text-dental-blue">Unsere Leistungen im Bereich Zahnerhaltung in Dresden</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-10">
              <div className="bg-dental-beige p-5 rounded-lg">
                <h4 className="text-xl font-medium mb-3 text-dental-blue">Hochwertige Zahnfüllungen (Kompositfüllungen)</h4>
                <p className="text-base">
                  Bei Kariesdefekten sind moderne, zahnfarbene Kompositfüllungen die erste Wahl. Diese Hightech-Kunststoffe werden schichtweise aufgetragen und mit Speziallicht gehärtet. Sie verbinden sich fest mit der Zahnsubstanz, sind sehr gut verträglich und ermöglichen eine nahezu unsichtbare Wiederherstellung Ihres Zahnes. Wir beraten Sie in unserer Praxis in Dresden ausführlich zu den Vorteilen dieser ästhetischen Füllungstherapie.
                </p>
              </div>
              
              <div className="bg-dental-beige p-5 rounded-lg">
                <h4 className="text-xl font-medium mb-3 text-dental-blue">Keramikinlays und -onlays</h4>
                <p className="text-base">
                  Für größere Defekte im Seitenzahnbereich bieten Keramikinlays oder -onlays eine extrem stabile und langlebige Alternative. Sie werden im zahntechnischen Labor individuell gefertigt und präzise eingesetzt. Keramik ist dem natürlichen Zahnschmelz in Aussehen und Eigenschaften sehr ähnlich.
                </p>
              </div>
              
              <div className="bg-dental-beige p-5 rounded-lg">
                <h4 className="text-xl font-medium mb-3 text-dental-blue">Moderne Wurzelkanalbehandlung (Endodontie) in Dresden</h4>
                <p className="text-base">
                  Wenn das Innere eines Zahnes (der Zahnnerv) entzündet oder abgestorben ist, ist eine Wurzelkanalbehandlung in Dresden oft die einzige Möglichkeit, den Zahn zu erhalten. Mit modernsten Techniken (z.B. maschinelle Aufbereitung, elektronische Längenmessung, desinfizierende Spülungen) reinigen und füllen wir die Wurzelkanäle präzise ab. So kann auch ein stark geschädigter Zahn oft noch viele Jahre seine Funktion erfüllen. Unser Ziel ist eine schmerzarme und erfolgreiche Behandlung.
                </p>
              </div>
              
              <div className="bg-dental-beige p-5 rounded-lg">
                <h4 className="text-xl font-medium mb-3 text-dental-blue">Parodontitisbehandlung (Zahnfleischbehandlung)</h4>
                <p className="text-base">
                  Eine Parodontitis (Entzündung des Zahnhalteapparates) ist eine häufige Ursache für Zahnverlust. Durch eine systematische Parodontitisbehandlung in unserer Praxis in Dresden stoppen wir den Entzündungsprozess und erhalten Ihr Zahnfleisch und den Kieferknochen. Regelmäßige Nachsorge ist hier entscheidend.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-medium mt-8 mb-4 text-dental-blue">Warum Zahnerhaltung bei Zahnarzt Worsch in Dresden Laubegast?</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Minimalinvasive Verfahren:</strong> Wir entfernen nur so viel Zahnsubstanz wie unbedingt nötig.</li>
              <li><strong>Ästhetische Ergebnisse:</strong> Zahnfarbene Materialien für ein natürliches Aussehen.</li>
              <li><strong>Langlebigkeit:</strong> Verwendung hochwertiger und erprobter Materialien.</li>
              <li><strong>Schmerzarme Behandlung:</strong> Moderne Anästhesieverfahren und einfühlsame Betreuung.</li>
              <li><strong>Fokus auf Prävention:</strong> Wir helfen Ihnen, zukünftige Schäden zu vermeiden.</li>
            </ul>
            
            {procedure && (
              <>
                <h3 className="text-2xl font-medium mt-8 mb-4 text-dental-blue">Ablauf der Behandlung</h3>
                <p>{procedure}</p>
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <h2 className="mb-6 text-dental-blue">Über {title}</h2>
          <div className="prose prose-lg max-w-none text-dental-gray">
            <p>{fullDescription}</p>
            
            {procedure && (
              <>
                <h3 className="text-2xl font-medium mt-8 mb-4 text-dental-blue">Ablauf der Behandlung</h3>
                <p>{procedure}</p>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default ServiceContentDefault;
