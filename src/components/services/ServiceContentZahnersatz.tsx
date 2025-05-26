
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, Crown, Cog, PenTool, Smile } from 'lucide-react';

const ServiceContentZahnersatz = () => {
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
        
        <h3 className="text-2xl font-medium mt-10 mb-6 text-dental-blue">Unsere Zahnersatz-Lösungen für Sie in Dresden</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-10">
          <div className="bg-dental-beige p-5 rounded-lg">
            <div className="flex items-center mb-3">
              <Crown className="h-6 w-6 text-dental-turquoise mr-2" />
              <h4 className="text-xl font-medium text-dental-blue">Zahnkronen Dresden</h4>
            </div>
            <p className="text-base">
              Hochwertige Vollkeramikkronen für einzelne Zähne, die stark geschädigt sind. Natürliche Optik und höchste Stabilität für Ihre Zahngesundheit.
            </p>
            <Button variant="link" asChild className="mt-2 p-0 text-dental-turquoise hover:text-dental-blue">
              <Link to="#zahnkronen">Mehr zu Zahnkronen erfahren</Link>
            </Button>
          </div>
          
          <div className="bg-dental-beige p-5 rounded-lg">
            <div className="flex items-center mb-3">
              <Cog className="h-6 w-6 text-dental-turquoise mr-2" />
              <h4 className="text-xl font-medium text-dental-blue">Zahnbrücken Dresden</h4>
            </div>
            <p className="text-base">
              Festsitzender Zahnersatz für Lücken zwischen gesunden Zähnen. Wiederherstellung der Kaufunktion und Ästhetik ohne Implantate.
            </p>
            <Button variant="link" asChild className="mt-2 p-0 text-dental-turquoise hover:text-dental-blue">
              <Link to="#zahnbruecken">Mehr zu Zahnbrücken erfahren</Link>
            </Button>
          </div>
          
          <div className="bg-dental-beige p-5 rounded-lg">
            <div className="flex items-center mb-3">
              <PenTool className="h-6 w-6 text-dental-turquoise mr-2" />
              <h4 className="text-xl font-medium text-dental-blue">Teilprothesen & Vollprothesen</h4>
            </div>
            <p className="text-base">
              Herausnehmbare Lösungen für größere Zahnlücken oder zahnlose Kiefer. Modern, komfortabel und natürlich wirkend.
            </p>
            <Button variant="link" asChild className="mt-2 p-0 text-dental-turquoise hover:text-dental-blue">
              <Link to="#prothesen">Mehr zu Prothesen erfahren</Link>
            </Button>
          </div>
          
          <div className="bg-dental-beige p-5 rounded-lg">
            <div className="flex items-center mb-3">
              <Smile className="h-6 w-6 text-dental-turquoise mr-2" />
              <h4 className="text-xl font-medium text-dental-blue">Implantatgetragener Zahnersatz</h4>
            </div>
            <p className="text-base">
              Die Premium-Lösung: Fest verankerter Zahnersatz auf Implantaten für höchsten Tragekomfort und Ästhetik. Wie eigene Zähne.
            </p>
            <Button variant="link" asChild className="mt-2 p-0 text-dental-turquoise hover:text-dental-blue">
              <Link to="/services/implantologie">Mehr zu Implantaten erfahren</Link>
            </Button>
          </div>
        </div>
        
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
      
      {/* CTA-Button mit besserem Mobile-Layout */}
      <div className="mt-12 text-center px-4">
        <Button asChild size="lg" className="bg-dental-turquoise hover:bg-dental-blue w-full max-w-md text-sm sm:text-base px-4 py-3 leading-tight">
          <Link to="/appointment">
            <span className="block sm:inline">Persönliche Beratung zu</span>
            <span className="block sm:inline sm:ml-1">Ihrem optimalen Zahnersatz</span>
          </Link>
        </Button>
      </div>
    </>
  );
};

export default ServiceContentZahnersatz;
