
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, Crown, Cog, PenTool, Smile, Star, Award, Shield } from 'lucide-react';

const ServiceContentZahnersatz = () => {
  return (
    <>
      <h2 className="mb-6 text-dental-blue">Hochwertiger Zahnersatz in Dresden für Ihre Zahngesundheit</h2>
      <div className="prose prose-lg max-w-none text-dental-gray">
        
        {/* Intro Section mit Highlight-Box */}
        <div className="bg-dental-turquoise/10 border-l-4 border-dental-turquoise p-6 rounded-r-lg mb-8">
          <p className="text-lg font-medium text-dental-blue mb-2">
            ✨ Zahnersatz von höchster Qualität ist unsere Spezialität
          </p>
          <p className="text-dental-gray">
            In der Zahnarztpraxis Worsch bieten wir Ihnen individuell angepasste Lösungen, die in Funktion und Ästhetik höchsten Ansprüchen gerecht werden.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h3 className="text-xl font-medium mb-4 text-dental-blue">Moderne Zahnersatz-Lösungen in Dresden</h3>
            <p className="mb-4">
              Unser erfahrenes Team für <strong>hochwertigen Zahnersatz Dresden</strong> setzt auf modernste Materialien und Techniken.
            </p>
            <p className="mb-4">
              Das Ergebnis: Ein natürliches Aussehen, das kaum vom eigenen Zahn zu unterscheiden ist.
            </p>
            
            {/* Qualitäts-Icons */}
            <div className="flex items-center space-x-6 mt-6">
              <div className="text-center">
                <Award className="h-8 w-8 text-dental-turquoise mx-auto mb-1" />
                <p className="text-xs font-medium">Premium Qualität</p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-dental-turquoise mx-auto mb-1" />
                <p className="text-xs font-medium">Langlebig</p>
              </div>
              <div className="text-center">
                <Star className="h-8 w-8 text-dental-turquoise mx-auto mb-1" />
                <p className="text-xs font-medium">Ästhetisch</p>
              </div>
            </div>
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-gradient-to-br from-dental-beige to-white p-6 rounded-lg border border-dental-turquoise/10">
            <div className="flex items-center mb-4">
              <Crown className="h-7 w-7 text-dental-turquoise mr-3" />
              <h4 className="text-xl font-medium text-dental-blue">Zahnkronen Dresden</h4>
            </div>
            <p className="text-base mb-3">
              Hochwertige Vollkeramikkronen für einzelne Zähne, die stark geschädigt sind.
            </p>
            <ul className="text-sm space-y-1 mb-4">
              <li>• Natürliche Optik</li>
              <li>• Höchste Stabilität</li>
              <li>• Biokompatible Materialien</li>
            </ul>
            <Button variant="link" asChild className="p-0 text-dental-turquoise hover:text-dental-blue">
              <Link to="#zahnkronen">Mehr zu Zahnkronen erfahren →</Link>
            </Button>
          </div>
          
          <div className="bg-gradient-to-br from-dental-beige to-white p-6 rounded-lg border border-dental-turquoise/10">
            <div className="flex items-center mb-4">
              <Cog className="h-7 w-7 text-dental-turquoise mr-3" />
              <h4 className="text-xl font-medium text-dental-blue">Zahnbrücken Dresden</h4>
            </div>
            <p className="text-base mb-3">
              Festsitzender Zahnersatz für Lücken zwischen gesunden Zähnen.
            </p>
            <ul className="text-sm space-y-1 mb-4">
              <li>• Wiederherstellung der Kaufunktion</li>
              <li>• Ästhetische Perfektion</li>
              <li>• Ohne Implantate</li>
            </ul>
            <Button variant="link" asChild className="p-0 text-dental-turquoise hover:text-dental-blue">
              <Link to="#zahnbruecken">Mehr zu Zahnbrücken erfahren →</Link>
            </Button>
          </div>
          
          <div className="bg-gradient-to-br from-dental-beige to-white p-6 rounded-lg border border-dental-turquoise/10">
            <div className="flex items-center mb-4">
              <PenTool className="h-7 w-7 text-dental-turquoise mr-3" />
              <h4 className="text-xl font-medium text-dental-blue">Teilprothesen & Vollprothesen</h4>
            </div>
            <p className="text-base mb-3">
              Herausnehmbare Lösungen für größere Zahnlücken oder zahnlose Kiefer.
            </p>
            <ul className="text-sm space-y-1 mb-4">
              <li>• Modern & komfortabel</li>
              <li>• Natürlich wirkend</li>
              <li>• Individuelle Anpassung</li>
            </ul>
            <Button variant="link" asChild className="p-0 text-dental-turquoise hover:text-dental-blue">
              <Link to="#prothesen">Mehr zu Prothesen erfahren →</Link>
            </Button>
          </div>
          
          <div className="bg-gradient-to-br from-dental-beige to-white p-6 rounded-lg border border-dental-turquoise/10">
            <div className="flex items-center mb-4">
              <Smile className="h-7 w-7 text-dental-turquoise mr-3" />
              <h4 className="text-xl font-medium text-dental-blue">Implantatgetragener Zahnersatz</h4>
            </div>
            <p className="text-base mb-3">
              Die Premium-Lösung: Fest verankerter Zahnersatz auf Implantaten.
            </p>
            <ul className="text-sm space-y-1 mb-4">
              <li>• Höchster Tragekomfort</li>
              <li>• Wie eigene Zähne</li>
              <li>• Maximale Ästhetik</li>
            </ul>
            <Button variant="link" asChild className="p-0 text-dental-turquoise hover:text-dental-blue">
              <Link to="/services/implantologie">Mehr zu Implantaten erfahren →</Link>
            </Button>
          </div>
        </div>
        
        <div id="zahnkronen" className="mt-12 pt-4">
          <h3 className="text-2xl font-medium mb-6 text-dental-blue">Zahnkronen in Dresden: Für einzelne beschädigte Zähne</h3>
          
          <div className="bg-dental-turquoise/10 p-4 rounded-lg mb-6">
            <p className="font-medium text-dental-blue text-center">
              💎 Zahnkronen sind die ideale Lösung, wenn ein Zahn stark beschädigt, aber die Wurzel noch intakt ist
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <div className="rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1770&auto=format&fit=crop"
                alt="Hochwertige Zahnkronen Dresden - Zahnarztpraxis Worsch"
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h4 className="text-lg font-medium mb-4 text-dental-blue">Unsere hochwertigen Vollkeramikkronen überzeugen durch:</h4>
              
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-start bg-white p-3 rounded-lg border border-dental-turquoise/10">
                  <Check className="h-5 w-5 text-dental-turquoise mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-dental-blue">Natürliche Ästhetik</span>
                    <p className="text-sm text-gray-600">Modernste Keramikmaterialien</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white p-3 rounded-lg border border-dental-turquoise/10">
                  <Check className="h-5 w-5 text-dental-turquoise mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-dental-blue">Hohe Stabilität</span>
                    <p className="text-sm text-gray-600">10-15 Jahre und mehr</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white p-3 rounded-lg border border-dental-turquoise/10">
                  <Check className="h-5 w-5 text-dental-turquoise mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-dental-blue">Perfekte Passform</span>
                    <p className="text-sm text-gray-600">Präzise Herstellung</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white p-3 rounded-lg border border-dental-turquoise/10">
                  <Check className="h-5 w-5 text-dental-turquoise mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-dental-blue">Biokompatibilität</span>
                    <p className="text-sm text-gray-600">Verträglichkeit garantiert</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div id="zahnbruecken" className="mt-12 pt-4">
          <h3 className="text-2xl font-medium mb-6 text-dental-blue">Zahnbrücken in Dresden: Feste Lösung für Zahnlücken</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="mb-4">
                <strong>Zahnbrücken in Dresden</strong> bieten eine festsitzende Lösung, wenn ein oder mehrere Zähne fehlen.
              </p>
              <p className="mb-4">
                Die Brücke wird an den Nachbarzähnen befestigt und schließt die Lücke mit künstlichen Zahnkronen.
              </p>
              
              <div className="bg-dental-turquoise/10 p-4 rounded-lg">
                <h4 className="font-medium text-dental-blue mb-2">Ihre Materialoptionen:</h4>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Vollkeramikbrücken:</strong> Höchste Ästhetik</li>
                  <li>• <strong>Zirkonbrücken:</strong> Maximale Stabilität</li>
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-dental-beige p-4 rounded-lg text-center">
                <h4 className="font-medium mb-2 text-dental-blue">Ästhetisch</h4>
                <p className="text-xs">Zahnfarbene Materialien für natürliches Erscheinungsbild</p>
              </div>
              <div className="bg-dental-beige p-4 rounded-lg text-center">
                <h4 className="font-medium mb-2 text-dental-blue">Festsitzend</h4>
                <p className="text-xs">Kein Herausnehmen notwendig, fester Halt</p>
              </div>
              <div className="bg-dental-beige p-4 rounded-lg text-center">
                <h4 className="font-medium mb-2 text-dental-blue">Funktional</h4>
                <p className="text-xs">Volle Wiederherstellung der Kaufunktion</p>
              </div>
              <div className="bg-dental-beige p-4 rounded-lg text-center">
                <h4 className="font-medium mb-2 text-dental-blue">Langlebig</h4>
                <p className="text-xs">Bei guter Pflege 10-15 Jahre und länger</p>
              </div>
            </div>
          </div>
        </div>
        
        <div id="prothesen" className="mt-12 pt-4">
          <h3 className="text-2xl font-medium mb-6 text-dental-blue">Prothesen in Dresden: Flexible Lösungen für größere Lücken</h3>
          
          <div className="bg-dental-turquoise/10 p-4 rounded-lg mb-6">
            <p className="font-medium text-dental-blue text-center">
              🦷 Wenn mehrere Zähne fehlen oder ein ganzer Kiefer zahnlos ist, bieten Prothesen eine bewährte Lösung
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <h4 className="text-lg font-medium mb-4 text-dental-blue">Moderne Herstellungsverfahren für höchsten Tragekomfort</h4>
              
              <p className="mb-4">
                In der Zahnarztpraxis Worsch setzen wir auf moderne Techniken für optimalen Sitz und natürliches Aussehen.
              </p>
              
              <h5 className="font-medium text-dental-blue mb-3">Unsere Prothesen-Arten:</h5>
              
              <div className="space-y-3">
                <div className="flex items-start bg-white p-3 rounded-lg border border-dental-turquoise/10">
                  <Check className="h-4 w-4 text-dental-turquoise mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-dental-blue">Teilprothesen:</span>
                    <p className="text-sm text-gray-600">Bei noch vorhandenen eigenen Zähnen, mit unauffälligen Haltelementen</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white p-3 rounded-lg border border-dental-turquoise/10">
                  <Check className="h-4 w-4 text-dental-turquoise mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-dental-blue">Teleskopprothesen:</span>
                    <p className="text-sm text-gray-600">Besonders stabile Verankerung durch spezielle Doppelkronen-Technik</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white p-3 rounded-lg border border-dental-turquoise/10">
                  <Check className="h-4 w-4 text-dental-turquoise mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-dental-blue">Vollprothesen:</span>
                    <p className="text-sm text-gray-600">Bei zahnlosem Kiefer, optimale Anpassung für sicheren Halt</p>
                  </div>
                </div>
              </div>
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
          <h3 className="text-2xl font-medium mb-6 text-dental-blue">Materialien für Ihren Zahnersatz in Dresden</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <div className="rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1740&auto=format&fit=crop" 
                alt="Vollkeramischer Zahnersatz - Zahnarztpraxis Worsch Dresden"
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h4 className="text-lg font-medium mb-4 text-dental-blue">Ausschließlich hochwertige Materialien</h4>
              
              <p className="mb-4">
                In der Zahnarztpraxis Worsch in Dresden verarbeiten wir nur das Beste für Ihren Zahnersatz:
              </p>
              
              <div className="space-y-3">
                <div className="bg-dental-beige p-3 rounded-lg">
                  <h5 className="font-medium text-dental-blue">Vollkeramik</h5>
                  <p className="text-sm">Höchste Ästhetik, biokompatibel und metallfrei</p>
                </div>
                
                <div className="bg-dental-beige p-3 rounded-lg">
                  <h5 className="font-medium text-dental-blue">Zirkonoxid</h5>
                  <p className="text-sm">Extrem belastbar und gleichzeitig ästhetisch ansprechend</p>
                </div>
                
                <div className="bg-dental-beige p-3 rounded-lg">
                  <h5 className="font-medium text-dental-blue">E.max Keramik</h5>
                  <p className="text-sm">Ideal für Frontzähne mit naturidentischer Lichtdurchlässigkeit</p>
                </div>
                
                <div className="bg-dental-beige p-3 rounded-lg">
                  <h5 className="font-medium text-dental-blue">Hochwertige Kunststoffe</h5>
                  <p className="text-sm">Für komfortable Teilprothesen und Interimslösungen</p>
                </div>
              </div>
              
              <div className="bg-dental-turquoise/10 p-4 rounded-lg mt-4">
                <p className="text-sm font-medium text-dental-blue">
                  🏆 Wir arbeiten eng mit deutschen Meisterlaboren zusammen, um Ihnen <strong>Zahnersatz in Dresden</strong> in handwerklicher Perfektion bieten zu können.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-medium mt-12 mb-6 text-dental-blue">So entstehen Ihre neuen Zähne: Ablauf der Behandlung</h3>
        
        <div className="bg-gradient-to-r from-dental-beige to-white rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-dental-turquoise text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 mt-1">1</div>
                <div>
                  <h4 className="font-medium text-dental-blue mb-2">Ausführliche Beratung & Planung</h4>
                  <p className="text-sm text-dental-gray">Wir analysieren Ihre Situation, besprechen die Möglichkeiten und erstellen einen individuellen Behandlungsplan.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dental-turquoise text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 mt-1">2</div>
                <div>
                  <h4 className="font-medium text-dental-blue mb-2">Digitale Abformung</h4>
                  <p className="text-sm text-dental-gray">Präzise und angenehm ohne unangenehme Abformmaterialien (oder klassische Abformung, falls erforderlich).</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dental-turquoise text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 mt-1">3</div>
                <div>
                  <h4 className="font-medium text-dental-blue mb-2">Vorbereitung der Zähne</h4>
                  <p className="text-sm text-dental-gray">Bei festsitzendem Zahnersatz werden die betreffenden Zähne schonend präpariert.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dental-turquoise text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 mt-1">4</div>
                <div>
                  <h4 className="font-medium text-dental-blue mb-2">Provisorische Versorgung</h4>
                  <p className="text-sm text-dental-gray">Während der Herstellungsphase erhalten Sie ein hochwertiges Provisorium.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-dental-turquoise text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 mt-1">5</div>
                <div>
                  <h4 className="font-medium text-dental-blue mb-2">Anfertigung im Meisterlabor</h4>
                  <p className="text-sm text-dental-gray">Ihr <strong>individueller Zahnersatz in Dresden</strong> wird nach höchsten Standards gefertigt.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dental-turquoise text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 mt-1">6</div>
                <div>
                  <h4 className="font-medium text-dental-blue mb-2">Einprobe & Farbanpassung</h4>
                  <p className="text-sm text-dental-gray">Für ein perfektes Ergebnis wird der Zahnersatz angepasst und die Farbe optimal abgestimmt.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dental-turquoise text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 mt-1">7</div>
                <div>
                  <h4 className="font-medium text-dental-blue mb-2">Eingliederung & Nachsorge</h4>
                  <p className="text-sm text-dental-gray">Nach der finalen Eingliederung beraten wir Sie zur optimalen Pflege Ihres Zahnersatzes.</p>
                </div>
              </div>
              
              {/* Success Quote */}
              <div className="bg-dental-turquoise/10 p-4 rounded-lg">
                <p className="text-sm font-medium text-dental-blue text-center">
                  "Mit der richtigen Pflege hält hochwertiger Zahnersatz 15-20 Jahre und länger."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA-Button */}
      <div className="mt-12 text-center">
        <Button asChild size="lg" className="bg-dental-turquoise hover:bg-dental-blue">
          <Link to="/appointment">Persönliche Beratung zu Ihrem optimalen Zahnersatz anfordern</Link>
        </Button>
      </div>
    </>
  );
};

export default ServiceContentZahnersatz;
