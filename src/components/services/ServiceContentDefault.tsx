
import React from 'react';

interface ServiceContentDefaultProps {
  title: string;
  fullDescription: string;
  procedure?: string;
  isProphylaxe?: boolean;
  isZahnerhaltung?: boolean;
  isKinderzahnheilkunde?: boolean;
}

const ServiceContentDefault: React.FC<ServiceContentDefaultProps> = ({ 
  title, 
  fullDescription, 
  procedure,
  isProphylaxe = false,
  isZahnerhaltung = false,
  isKinderzahnheilkunde = false
}) => {
  if (isProphylaxe) {
    return (
      <div className="prose max-w-none">
        <h2 className="text-3xl font-medium mb-6 text-dental-blue">Professionelle Zahnreinigung & Prophylaxe in Dresden – Mehr als nur Putzen</h2>
        <p className="text-lg text-dental-gray mb-6">
          Ein strahlendes Lächeln beginnt mit gesunden Zähnen. Die Prophylaxe bildet das Fundament für Ihre langfristige Mundgesundheit und ist ein zentraler Bestandteil unseres Angebots in der Zahnarztpraxis Worsch in Dresden Laubegast. Mit einer regelmäßigen professionellen Zahnreinigung (PZR) und maßgeschneiderten Vorsorgekonzepten helfen wir Ihnen, Karies und Parodontitis effektiv vorzubeugen und die natürliche Schönheit Ihrer Zähne zu bewahren.
        </p>

        <h3 className="text-2xl font-medium mb-4 text-dental-blue">Warum ist professionelle Zahnprophylaxe in Dresden so wichtig?</h3>
        <p className="text-dental-gray mb-4">
          Selbst bei sorgfältigster häuslicher Mundhygiene bleiben oft Beläge in schwer zugänglichen Bereichen wie Zahnzwischenräumen oder am Zahnfleischrand zurück. Diese bakteriellen Beläge (Plaque) sind die Hauptursache für Karies und Zahnfleischentzündungen (Gingivitis), die unbehandelt zu Parodontitis und Zahnverlust führen können.
        </p>
        <p className="text-dental-gray mb-6">
          Eine professionelle Zahnreinigung in unserer Praxis in Dresden geht weit über das hinaus, was Sie zu Hause erreichen können:
        </p>

        <ul className="list-disc pl-6 mb-6 text-dental-gray space-y-2">
          <li><strong>Gründliche Entfernung aller Beläge:</strong> Wir entfernen harten Zahnstein und weiche Beläge auch an schwer erreichbaren Stellen.</li>
          <li><strong>Beseitigung von Verfärbungen:</strong> Kaffee, Tee, Rotwein oder Nikotin hinterlassen oft unschöne Verfärbungen, die wir sanft entfernen für ein helleres Lächeln.</li>
          <li><strong>Politur der Zahnoberflächen:</strong> Glatte Oberflächen erschweren neuen Bakterien das Anhaften.</li>
          <li><strong>Fluoridierung:</strong> Stärkt den Zahnschmelz und schützt vor Karies.</li>
          <li><strong>Individuelle Beratung:</strong> Wir geben Ihnen wertvolle Tipps zur Optimierung Ihrer täglichen Mundpflege und zur Auswahl der richtigen Hilfsmittel.</li>
        </ul>

        <h3 className="text-2xl font-medium mb-4 text-dental-blue">Ablauf Ihrer professionellen Zahnreinigung in Dresden Laubegast</h3>
        <ol className="list-decimal pl-6 mb-6 text-dental-gray space-y-2">
          <li><strong>Untersuchung und Beratung:</strong> Zunächst beurteilen wir den Zustand Ihrer Zähne und Ihres Zahnfleisches.</li>
          <li><strong>Entfernung harter und weicher Beläge:</strong> Mit speziellen Instrumenten (z.B. Ultraschall) und Handinstrumenten werden Zahnstein und Plaque schonend entfernt.</li>
          <li><strong>Reinigung mit Pulverstrahlgerät (Airflow):</strong> Bei Bedarf werden hartnäckige Verfärbungen und Beläge mit einem sanften Pulver-Wasserstrahl entfernt.</li>
          <li><strong>Politur:</strong> Die Zahnoberflächen werden geglättet und poliert, um sie widerstandsfähiger gegen neue Ablagerungen zu machen.</li>
          <li><strong>Fluoridierung:</strong> Ein hochkonzentrierter Fluoridlack wird aufgetragen, um den Zahnschmelz zu stärken.</li>
          <li><strong>Individuelle Mundhygieneinstruktion:</strong> Wir zeigen Ihnen, wie Sie Ihre Zähne optimal pflegen können.</li>
        </ol>
      </div>
    );
  }

  if (isZahnerhaltung) {
    return (
      <div className="prose max-w-none">
        <h2 className="text-3xl font-medium mb-6 text-dental-blue">Moderne Zahnerhaltung in Dresden – Für den langfristigen Erhalt Ihrer Zähne</h2>
        <p className="text-lg text-dental-gray mb-6">
          Das oberste Ziel unserer Zahnarztpraxis in Dresden Laubegast ist es, Ihre natürlichen Zähne so lange wie möglich gesund und funktionsfähig zu erhalten. Die moderne Zahnerhaltung bietet heute eine Vielzahl schonender und effektiver Methoden, um Zähne, die von Karies oder anderen Erkrankungen betroffen sind, zu reparieren und zu bewahren. Wir setzen dabei auf minimalinvasive Techniken und hochwertige, biokompatible Materialien für ästhetisch ansprechende und langlebige Ergebnisse.
        </p>

        <h3 className="text-2xl font-medium mb-4 text-dental-blue">Unsere Leistungen im Bereich Zahnerhaltung in Dresden</h3>
        
        <h4 className="text-xl font-medium mb-3 text-dental-blue">Hochwertige Zahnfüllungen (Kompositfüllungen):</h4>
        <p className="text-dental-gray mb-4">
          Bei Kariesdefekten sind moderne, zahnfarbene Kompositfüllungen die erste Wahl. Diese Hightech-Kunststoffe werden schichtweise aufgetragen und mit Speziallicht gehärtet. Sie verbinden sich fest mit der Zahnsubstanz, sind sehr gut verträglich und ermöglichen eine nahezu unsichtbare Wiederherstellung Ihres Zahnes. Wir beraten Sie in unserer Praxis in Dresden ausführlich zu den Vorteilen dieser ästhetischen Füllungstherapie.
        </p>

        <h4 className="text-xl font-medium mb-3 text-dental-blue">Keramikinlays und -onlays:</h4>
        <p className="text-dental-gray mb-4">
          Für größere Defekte im Seitenzahnbereich bieten Keramikinlays oder -onlays eine extrem stabile und langlebige Alternative. Sie werden im zahntechnischen Labor individuell gefertigt und präzise eingesetzt. Keramik ist dem natürlichen Zahnschmelz in Aussehen und Eigenschaften sehr ähnlich.
        </p>

        <h4 className="text-xl font-medium mb-3 text-dental-blue">Moderne Wurzelkanalbehandlung (Endodontie) in Dresden:</h4>
        <p className="text-dental-gray mb-4">
          Wenn das Innere eines Zahnes (der Zahnnerv) entzündet oder abgestorben ist, ist eine Wurzelkanalbehandlung in Dresden oft die einzige Möglichkeit, den Zahn zu erhalten. Mit modernsten Techniken (z.B. maschinelle Aufbereitung, elektronische Längenmessung, desinfizierende Spülungen) reinigen und füllen wir die Wurzelkanäle präzise ab. So kann auch ein stark geschädigter Zahn oft noch viele Jahre seine Funktion erfüllen. Unser Ziel ist eine schmerzarme und erfolgreiche Behandlung.
        </p>

        <h4 className="text-xl font-medium mb-3 text-dental-blue">Parodontitisbehandlung (Zahnfleischbehandlung):</h4>
        <p className="text-dental-gray mb-6">
          Eine Parodontitis (Entzündung des Zahnhalteapparates) ist eine häufige Ursache für Zahnverlust. Durch eine systematische Parodontitisbehandlung in unserer Praxis in Dresden stoppen wir den Entzündungsprozess und erhalten Ihr Zahnfleisch und den Kieferknochen. Regelmäßige Nachsorge ist hier entscheidend.
        </p>

        <h3 className="text-2xl font-medium mb-4 text-dental-blue">Warum Zahnerhaltung bei Zahnarzt Worsch in Dresden Laubegast?</h3>
        <ul className="list-disc pl-6 mb-6 text-dental-gray space-y-2">
          <li><strong>Minimalinvasive Verfahren:</strong> Wir entfernen nur so viel Zahnsubstanz wie unbedingt nötig.</li>
          <li><strong>Ästhetische Ergebnisse:</strong> Zahnfarbene Materialien für ein natürliches Aussehen.</li>
          <li><strong>Langlebigkeit:</strong> Verwendung hochwertiger und erprobter Materialien.</li>
          <li><strong>Schmerzarme Behandlung:</strong> Moderne Anästhesieverfahren und einfühlsame Betreuung.</li>
          <li><strong>Fokus auf Prävention:</strong> Wir helfen Ihnen, zukünftige Schäden zu vermeiden.</li>
        </ul>
      </div>
    );
  }

  if (isKinderzahnheilkunde) {
    return (
      <div className="prose max-w-none">
        <h2 className="text-3xl font-medium mb-6 text-dental-blue">Liebevolle Kinderzahnheilkunde in Dresden Laubegast</h2>
        <p className="text-lg text-dental-gray mb-6">
          Gesunde Milchzähne sind die Basis für ein gesundes bleibendes Gebiss und eine positive Einstellung zur Zahnpflege. In der Zahnarztpraxis Worsch in Dresden Laubegast legen wir größten Wert auf eine kindgerechte, einfühlsame und angstfreie Behandlung unserer jüngsten Patienten. Unser Ziel als Ihr Kinderzahnarzt in Dresden ist es, den Zahnarztbesuch zu einem positiven Erlebnis zu machen und die Freude an gesunden Zähnen von klein auf zu fördern.
        </p>

        <h3 className="text-2xl font-medium mb-4 text-dental-blue">Was macht einen guten Kinderzahnarzt in Dresden aus?</h3>
        <ul className="list-disc pl-6 mb-6 text-dental-gray space-y-2">
          <li><strong>Geduld und Einfühlungsvermögen:</strong> Wir nehmen uns viel Zeit, um eine vertrauensvolle Beziehung zu Ihrem Kind aufzubauen und auf seine individuellen Bedürfnisse einzugehen.</li>
          <li><strong>Spielerische Herangehensweise:</strong> Wir erklären Behandlungsschritte altersgerecht und binden die Kinder spielerisch mit ein ("Zähne zählen", "Zahnteufelchen wegzaubern").</li>
          <li><strong>Angstfreie Atmosphäre:</strong> Unsere Praxisräume sind freundlich gestaltet, und unser Team ist speziell im Umgang mit Kindern geschult.</li>
          <li><strong>Früherkennung und Prophylaxe:</strong> Bereits ab dem ersten Milchzahn sind regelmäßige Kontrollen wichtig, um frühzeitig Risiken zu erkennen und präventive Maßnahmen zu ergreifen.</li>
          <li><strong>Elternberatung:</strong> Wir beraten Sie umfassend zur richtigen Zahnpflege bei Kindern, zahngesunder Ernährung und Fluoridierung.</li>
        </ul>

        <h3 className="text-2xl font-medium mb-4 text-dental-blue">Unsere Leistungen für Kinder in Dresden Laubegast</h3>
        <ul className="list-disc pl-6 mb-6 text-dental-gray space-y-3">
          <li><strong>Früherkennungsuntersuchungen (FU):</strong> Regelmäßige Kontrollen zur Überwachung der Zahn- und Kieferentwicklung.</li>
          <li><strong>Individualprophylaxe für Kinder:</strong> Professionelle Zahnreinigung speziell für Milchzähne, Fluoridierung zum Schutz des Zahnschmelzes, Fissurenversiegelung der Backenzähne zur Kariesprävention.</li>
          <li><strong>Behandlung von Milchzahnkaries:</strong> Schonende Füllungstherapie mit kindgerechten Materialien.</li>
          <li><strong>Platzhalter für bleibende Zähne:</strong> Bei vorzeitigem Milchzahnverlust.</li>
          <li><strong>Behandlung von Zahnunfällen:</strong> Schnelle und kompetente Hilfe.</li>
          <li><strong>Beratung zur Kieferorthopädie:</strong> Bei Bedarf frühzeitige Erkennung von Zahn- und Kieferfehlstellungen und Überweisung zum Kieferorthopäden.</li>
        </ul>
      </div>
    );
  }

  // Default content for other services
  return (
    <div className="prose max-w-none">
      <h2 className="text-3xl font-medium mb-6 text-dental-blue">{title}</h2>
      <p className="text-lg text-dental-gray mb-6">{fullDescription}</p>
      
      {procedure && (
        <>
          <h3 className="text-2xl font-medium mb-4 text-dental-blue">Behandlungsablauf</h3>
          <p className="text-dental-gray mb-6">{procedure}</p>
        </>
      )}
    </div>
  );
};

export default ServiceContentDefault;
