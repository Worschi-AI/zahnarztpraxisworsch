
import React from 'react';

const ZahnersatzMaterialien = () => {
  return (
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
  );
};

export default ZahnersatzMaterialien;
