
import React from 'react';
import { Check } from 'lucide-react';

const ZahnersatzProthesen = () => {
  return (
    <div id="prothesen" className="mt-12 pt-4">
      <h3 className="text-2xl font-medium mb-4 text-dental-blue">Prothesen in Dresden: Flexible Lösungen für größere Lücken</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
        <div>
          <p className="mb-4">
            Wenn mehrere Zähne fehlen oder ein ganzer Kiefer zahnlos ist, bieten <strong>Prothesen in Dresden</strong> eine bewährte Lösung. In der Zahnarztpraxis Worsch setzen wir auf moderne Herstellungsverfahren für höchsten Tragekomfort.
          </p>
          <p>
            Je nach Situation kommen verschiedene Arten zum Einsatz:
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-dental-turquoise mr-2 mt-0.5 flex-shrink-0" />
              <span><strong>Teilprothesen:</strong> Bei noch vorhandenen eigenen Zähnen, mit unauffälligen Haltelementen</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-dental-turquoise mr-2 mt-0.5 flex-shrink-0" />
              <span><strong>Teleskopprothesen:</strong> Besonders stabile Verankerung durch spezielle Doppelkronen-Technik</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-dental-turquoise mr-2 mt-0.5 flex-shrink-0" />
              <span><strong>Vollprothesen:</strong> Bei zahnlosem Kiefer, optimale Anpassung für sicheren Halt</span>
            </li>
          </ul>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1740&auto=format&fit=crop"
            alt="Moderne Zahnprothesen Dresden - Zahnarztpraxis Worsch"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ZahnersatzProthesen;
