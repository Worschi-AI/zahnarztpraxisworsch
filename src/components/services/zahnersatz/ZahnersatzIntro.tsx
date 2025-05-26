
import React from 'react';

const ZahnersatzIntro = () => {
  return (
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
      </div>
    </>
  );
};

export default ZahnersatzIntro;
