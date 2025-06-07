
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ServiceContentImplantologie = () => {
  return (
    <>
      <h2 className="mb-6 text-dental-blue animate-slide-up">Zahnimplantate in Dresden – Die beste Lösung für fehlende Zähne</h2>
      <div className="prose prose-lg max-w-none text-dental-gray">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
          <div className="animate-slide-right">
            <p className="animate-on-scroll">
              Der Verlust eines oder mehrerer Zähne kann die Lebensqualität erheblich einschränken – sowohl funktionell als auch ästhetisch. <strong>Zahnimplantate</strong> bieten hier die modernste und komfortabelste Lösung, um Ihr Lächeln und Ihre Kaufunktion vollständig wiederherzustellen. In der <strong>Zahnarztpraxis Worsch in Dresden Laubegast</strong> sind wir auf Implantologie spezialisiert und verhelfen Ihnen mit hochwertigen Implantaten zu neuer Lebensfreude.
            </p>
            <p className="animate-on-scroll">
              Ein <strong>Zahnimplantat in Dresden</strong> ist eine künstliche Zahnwurzel, meist aus biokompatiblem Titan, die schonend in den Kieferknochen eingesetzt wird. Dort verwächst es fest mit dem Knochen (Osseointegration) und bildet eine stabile Basis für den eigentlichen <strong>festsitzenden Zahnersatz in Dresden</strong> – sei es eine einzelne Krone, eine Brücke oder sogar eine Prothese. Das Ergebnis: Festsitzender Zahnersatz, der sich anfühlt und aussieht wie Ihre natürlichen Zähne.
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
        
        <h3 className="text-2xl font-medium mt-8 mb-4 text-dental-blue animate-slide-up">Warum Zahnimplantate von Ihrem Spezialisten in Dresden?</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
          <div className="rounded-lg overflow-hidden shadow-lg order-2 md:order-1 image-hover animate-slide-right">
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1780&auto=format&fit=crop"
              alt="3D-Planung für Zahnimplantate - Zahnarztpraxis Worsch Dresden"
              className="w-full h-auto"
            />
          </div>
          <div className="order-1 md:order-2 stagger-children">
            <p className="mb-4 animate-on-scroll">
              Als Ihr erfahrener <strong>Implantologe in Dresden</strong> legt Dr. Worsch größten Wert auf eine präzise Diagnostik und individuelle Planung. Mithilfe modernster 3D-Röntgentechnologie (DVT) können wir die Implantation exakt planen und auch komplexe Fälle sicher und vorhersagbar behandeln.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li className="animate-slide-up hover-text-highlight"><strong>Natürliches Aussehen und Gefühl:</strong> Implantatgetragener Zahnersatz ist von echten Zähnen kaum zu unterscheiden.</li>
              <li className="animate-slide-up hover-text-highlight"><strong>Fester Halt:</strong> Kein Verrutschen, kein Wackeln – Sie können wieder unbeschwert lachen, sprechen und essen.</li>
              <li className="animate-slide-up hover-text-highlight"><strong>Schonung der Nachbarzähne:</strong> Anders als bei Brücken müssen gesunde Nachbarzähne nicht beschliffen werden.</li>
              <li className="animate-slide-up hover-text-highlight"><strong>Erhalt des Kieferknochens:</strong> Implantate belasten den Knochen ähnlich wie natürliche Zahnwurzeln und beugen so Knochenschwund vor.</li>
              <li className="animate-slide-up hover-text-highlight"><strong>Langlebigkeit:</strong> Bei guter Pflege können Zahnimplantate ein Leben lang halten.</li>
              <li className="animate-slide-up hover-text-highlight"><strong>Verbesserte Lebensqualität:</strong> Gewinnen Sie Ihr selbstsicheres Auftreten zurück.</li>
            </ul>
          </div>
        </div>

        <h3 className="text-2xl font-medium mt-8 mb-4 text-dental-blue animate-slide-up">Der Behandlungsablauf für Ihre Zahnimplantate in Dresden Laubegast</h3>
        
        <div className="bg-dental-beige rounded-lg p-6 mb-8 card-hover animate-scale-in">
          <ol className="list-decimal list-inside space-y-4 stagger-children">
            <li className="font-medium text-dental-blue animate-slide-up">Ausführliche Beratung & Diagnostik
              <p className="font-normal text-dental-gray mt-1">Wir analysieren Ihre individuelle Situation, besprechen Ihre Wünsche und klären alle Fragen rund um <strong>Zahnimplantate in Dresden</strong>. Eine digitale Volumentomographie (DVT) ermöglicht uns eine präzise 3D-Planung.</p>
            </li>
            <li className="font-medium text-dental-blue animate-slide-up">Implantation
              <p className="font-normal text-dental-gray mt-1">Der Eingriff erfolgt in unserer Praxis in Dresden Laubegast ambulant und schmerzfrei unter lokaler Betäubung. Auf Wunsch sind auch Behandlungen in Sedierung (Dämmerschlaf) möglich.</p>
            </li>
            <li className="font-medium text-dental-blue animate-slide-up">Einheilphase
              <p className="font-normal text-dental-gray mt-1">Das Implantat benötigt einige Wochen bis Monate, um fest mit dem Kieferknochen zu verwachsen. In dieser Zeit erhalten Sie bei Bedarf einen provisorischen Zahnersatz.</p>
            </li>
            <li className="font-medium text-dental-blue animate-slide-up">Freilegung & Abdrucknahme
              <p className="font-normal text-dental-gray mt-1">Nach erfolgreicher Einheilung wird das Implantat freigelegt und ein präziser Abdruck für Ihren individuellen Zahnersatz genommen.</p>
            </li>
            <li className="font-medium text-dental-blue animate-slide-up">Anfertigung des Zahnersatzes
              <p className="font-normal text-dental-gray mt-1">In unserem deutschen Meisterlabor wird Ihr hochwertiger <strong>festsitzender Zahnersatz in Dresden</strong> (Krone, Brücke, Prothese) passgenau gefertigt.</p>
            </li>
            <li className="font-medium text-dental-blue animate-slide-up">Eingliederung
              <p className="font-normal text-dental-gray mt-1">Der fertige Zahnersatz wird auf dem Implantat befestigt. Sie verlassen unsere Praxis mit festen, schönen Zähnen.</p>
            </li>
            <li className="font-medium text-dental-blue animate-slide-up">Nachsorge
              <p className="font-normal text-dental-gray mt-1">Regelmäßige Kontrollen und professionelle Zahnreinigungen sichern den langfristigen Erfolg Ihrer Implantate.</p>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default ServiceContentImplantologie;
