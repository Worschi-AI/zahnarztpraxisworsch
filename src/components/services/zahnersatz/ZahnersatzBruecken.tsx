
import React from 'react';

const ZahnersatzBruecken = () => {
  return (
    <div id="zahnbruecken" className="mt-12 pt-4">
      <h3 className="text-2xl font-medium mb-4 text-dental-blue">Zahnbrücken in Dresden: Feste Lösung für Zahnlücken</h3>
      <p className="mb-4">
        <strong>Zahnbrücken in Dresden</strong> bieten eine festsitzende Lösung, wenn ein oder mehrere Zähne fehlen und die Nachbarzähne noch gesund und stabil sind. Die Brücke wird an den Nachbarzähnen befestigt und schließt die Lücke mit künstlichen Zahnkronen.
      </p>
      <p className="mb-4">
        In der Zahnarztpraxis Worsch setzen wir auf hochwertige Vollkeramikbrücken oder Zirkonbrücken, die sich durch natürliche Ästhetik und hohe Stabilität auszeichnen. Ihre Vorteile:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="bg-dental-beige/50 p-4 rounded-lg">
          <h4 className="font-medium mb-2 text-dental-blue">Ästhetisch</h4>
          <p className="text-sm">Zahnfarbene Materialien für ein natürliches Erscheinungsbild</p>
        </div>
        <div className="bg-dental-beige/50 p-4 rounded-lg">
          <h4 className="font-medium mb-2 text-dental-blue">Festsitzend</h4>
          <p className="text-sm">Kein Herausnehmen notwendig, fester Halt</p>
        </div>
        <div className="bg-dental-beige/50 p-4 rounded-lg">
          <h4 className="font-medium mb-2 text-dental-blue">Funktional</h4>
          <p className="text-sm">Volle Wiederherstellung der Kaufunktion</p>
        </div>
        <div className="bg-dental-beige/50 p-4 rounded-lg">
          <h4 className="font-medium mb-2 text-dental-blue">Langlebig</h4>
          <p className="text-sm">Bei guter Pflege 10-15 Jahre und länger haltbar</p>
        </div>
      </div>
    </div>
  );
};

export default ZahnersatzBruecken;
