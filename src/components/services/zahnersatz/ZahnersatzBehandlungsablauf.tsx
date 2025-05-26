
import React from 'react';

const ZahnersatzBehandlungsablauf = () => {
  return (
    <div>
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
    </div>
  );
};

export default ZahnersatzBehandlungsablauf;
