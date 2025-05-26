
import React from 'react';
import { Check } from 'lucide-react';

const ZahnersatzKronen = () => {
  return (
    <div id="zahnkronen" className="mt-12 pt-4">
      <h3 className="text-2xl font-medium mb-4 text-dental-blue">Zahnkronen in Dresden: Für einzelne beschädigte Zähne</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
        <div className="rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1770&auto=format&fit=crop"
            alt="Hochwertige Zahnkronen Dresden - Zahnarztpraxis Worsch"
            className="w-full h-auto"
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="mb-4">
            <strong>Zahnkronen in Dresden</strong> sind die ideale Lösung, wenn ein Zahn stark beschädigt, aber die Wurzel noch intakt ist. Unsere hochwertigen Vollkeramikkronen werden individuell angefertigt und überzeugen durch:
          </p>
          <ul className="list-none space-y-3">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-dental-turquoise mr-2 mt-0.5 flex-shrink-0" />
              <span>Natürliche Ästhetik dank modernster Keramikmaterialien</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-dental-turquoise mr-2 mt-0.5 flex-shrink-0" />
              <span>Hohe Stabilität und lange Haltbarkeit (10-15 Jahre und mehr)</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-dental-turquoise mr-2 mt-0.5 flex-shrink-0" />
              <span>Perfekte Passform durch präzise Herstellung</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-dental-turquoise mr-2 mt-0.5 flex-shrink-0" />
              <span>Biokompatibilität und Verträglichkeit</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ZahnersatzKronen;
