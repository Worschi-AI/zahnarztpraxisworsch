
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, Shield, Clock, Heart } from 'lucide-react';

const ServiceContentImplantologie = () => {
  return (
    <>
      <h2 className="mb-6 text-dental-blue">Zahnimplantate in Dresden – Die beste Lösung für fehlende Zähne</h2>
      <div className="prose prose-lg max-w-none text-dental-gray">
        
        {/* Intro Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <p className="text-lg font-medium text-dental-blue mb-4">
              Der Verlust von Zähnen muss heute kein dauerhaftes Problem mehr sein.
            </p>
            <p className="mb-4">
              <strong>Zahnimplantate</strong> bieten die modernste und komfortabelste Lösung, um Ihr Lächeln und Ihre Kaufunktion vollständig wiederherzustellen.
            </p>
            <p className="mb-4">
              In der <strong>Zahnarztpraxis Worsch in Dresden Laubegast</strong> sind wir auf Implantologie spezialisiert und verhelfen Ihnen mit hochwertigen Implantaten zu neuer Lebensfreude.
            </p>
            
            {/* Highlighted Info Box */}
            <div className="bg-dental-turquoise/10 border-l-4 border-dental-turquoise p-4 rounded-r-lg mt-6">
              <p className="font-medium text-dental-blue mb-2">Was ist ein Zahnimplantat?</p>
              <p className="text-sm">
                Eine künstliche Zahnwurzel aus biokompatiblem Titan, die fest mit dem Kieferknochen verwächst und eine stabile Basis für Ihren neuen Zahn bildet.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1770&auto=format&fit=crop"
              alt="Zahnimplantat Modell - Zahnarztpraxis Worsch Dresden"
              className="w-full h-auto"
            />
          </div>
        </div>
        
        <h3 className="text-2xl font-medium mt-12 mb-6 text-dental-blue">Warum Zahnimplantate von Ihrem Spezialisten in Dresden?</h3>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-dental-beige p-6 rounded-lg">
            <div className="flex items-center mb-3">
              <Heart className="h-6 w-6 text-dental-turquoise mr-3" />
              <h4 className="font-medium text-dental-blue">Wie echte Zähne</h4>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <Check className="h-4 w-4 text-dental-turquoise mr-2 mt-1 flex-shrink-0" />
                <span>Natürliches Aussehen und Gefühl</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-dental-turquoise mr-2 mt-1 flex-shrink-0" />
                <span>Fester Halt ohne Verrutschen</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-dental-beige p-6 rounded-lg">
            <div className="flex items-center mb-3">
              <Shield className="h-6 w-6 text-dental-turquoise mr-3" />
              <h4 className="font-medium text-dental-blue">Schutz für Ihre Zähne</h4>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <Check className="h-4 w-4 text-dental-turquoise mr-2 mt-1 flex-shrink-0" />
                <span>Nachbarzähne bleiben unversehrt</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-dental-turquoise mr-2 mt-1 flex-shrink-0" />
                <span>Erhalt des Kieferknochens</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-dental-beige p-6 rounded-lg">
            <div className="flex items-center mb-3">
              <Clock className="h-6 w-6 text-dental-turquoise mr-3" />
              <h4 className="font-medium text-dental-blue">Langfristige Lösung</h4>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <Check className="h-4 w-4 text-dental-turquoise mr-2 mt-1 flex-shrink-0" />
                <span>Bei guter Pflege ein Leben lang haltbar</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-dental-turquoise mr-2 mt-1 flex-shrink-0" />
                <span>Verbesserte Lebensqualität</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-dental-beige p-6 rounded-lg">
            <div className="flex items-center mb-3">
              <Heart className="h-6 w-6 text-dental-turquoise mr-3" />
              <h4 className="font-medium text-dental-blue">Moderne Technologie</h4>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <Check className="h-4 w-4 text-dental-turquoise mr-2 mt-1 flex-shrink-0" />
                <span>3D-Planung für präzise Implantation</span>
              </li>
              <li className="flex items-start">
                <Check className="h-4 w-4 text-dental-turquoise mr-2 mt-1 flex-shrink-0" />
                <span>Schonende, sichere Behandlung</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div className="rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1780&auto=format&fit=crop"
              alt="3D-Planung für Zahnimplantate - Zahnarztpraxis Worsch Dresden"
              className="w-full h-auto"
            />
          </div>
          <div className="order-1 md:order-2">
            <h4 className="text-xl font-medium mb-4 text-dental-blue">Präzise Planung mit modernster Technik</h4>
            <p className="mb-4">
              Als Ihr erfahrener <strong>Implantologe in Dresden</strong> legt Dr. Worsch größten Wert auf eine präzise Diagnostik und individuelle Planung.
            </p>
            <p className="mb-4">
              Mithilfe modernster <strong>3D-Röntgentechnologie (DVT)</strong> können wir die Implantation exakt planen und auch komplexe Fälle sicher behandeln.
            </p>
            
            {/* Call-out Box */}
            <div className="bg-white border border-dental-turquoise/20 p-4 rounded-lg">
              <p className="text-sm font-medium text-dental-blue">
                💡 Wussten Sie schon? Mit 3D-Planung können wir Ihnen bereits vor der Behandlung zeigen, wie Ihr Ergebnis aussehen wird.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-medium mt-12 mb-6 text-dental-blue">Der Behandlungsablauf für Ihre Zahnimplantate in Dresden Laubegast</h3>
        
        <div className="bg-gradient-to-r from-dental-beige to-white rounded-lg p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-dental-turquoise text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 mt-1">1</div>
                <div>
                  <h4 className="font-medium text-dental-blue mb-2">Beratung & Diagnostik</h4>
                  <p className="text-sm">Ausführliche Analyse mit 3D-Röntgen und Besprechung Ihrer Wünsche</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dental-turquoise text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 mt-1">2</div>
                <div>
                  <h4 className="font-medium text-dental-blue mb-2">Implantation</h4>
                  <p className="text-sm">Schonender Eingriff unter lokaler Betäubung oder Sedierung</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dental-turquoise text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 mt-1">3</div>
                <div>
                  <h4 className="font-medium text-dental-blue mb-2">Einheilphase</h4>
                  <p className="text-sm">Das Implantat verwächst fest mit dem Kieferknochen</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dental-turquoise text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 mt-1">4</div>
                <div>
                  <h4 className="font-medium text-dental-blue mb-2">Zahnersatz</h4>
                  <p className="text-sm">Anfertigung und Befestigung Ihrer individuellen Krone</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-dental-turquoise text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 mt-1">5</div>
                <div>
                  <h4 className="font-medium text-dental-blue mb-2">Freilegung</h4>
                  <p className="text-sm">Vorbereitung für den finalen Zahnersatz</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dental-turquoise text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 mt-1">6</div>
                <div>
                  <h4 className="font-medium text-dental-blue mb-2">Eingliederung</h4>
                  <p className="text-sm">Ihr neuer Zahn wird fest auf dem Implantat verankert</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dental-turquoise text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 mt-1">7</div>
                <div>
                  <h4 className="font-medium text-dental-blue mb-2">Nachsorge</h4>
                  <p className="text-sm">Regelmäßige Kontrollen für den langfristigen Erfolg</p>
                </div>
              </div>
              
              {/* Success Quote */}
              <div className="bg-dental-turquoise/10 p-4 rounded-lg mt-6">
                <p className="text-sm font-medium text-dental-blue text-center">
                  "Zahnimplantate haben eine Erfolgsrate von über 95% und können bei guter Pflege ein Leben lang halten."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceContentImplantologie;
