
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Star, Smile, Droplet, Sparkles, Palette, Eye } from 'lucide-react';

const ServiceContentAesthetic = () => {
  return (
    <>
      <h2 className="mb-6 text-dental-blue">Ästhetische Zahnmedizin in Dresden: Ihr Weg zum strahlenden Lächeln</h2>
      <div className="prose prose-lg max-w-none text-dental-gray">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <p>
              Ein makelloses Lächeln ist Ausdruck von Vitalität, Gesundheit und Selbstbewusstsein. In der <strong>Zahnarztpraxis Worsch in Dresden Laubegast</strong> haben wir uns darauf spezialisiert, Ihre individuellen Wünsche an die Ästhetik Ihrer Zähne zu erfüllen.
            </p>
            <p>
              Mit modernsten Methoden, hochwertigen Materialien und einem feinen Gespür für natürliche Harmonie verhelfen wir Ihnen zu dem Lächeln, das Sie sich immer gewünscht haben. Die <strong>ästhetische Zahnheilkunde in Dresden</strong> bietet heute vielfältige Möglichkeiten, um kleine Schönheitsfehler zu korrigieren, Zähne aufzuhellen oder umfassende Smile Makeover zu realisieren.
            </p>
            <p>
              Unser erfahrenes Team berät Sie ausführlich und entwickelt gemeinsam mit Ihnen ein Behandlungskonzept, das perfekt auf Ihre Bedürfnisse und Vorstellungen zugeschnitten ist.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1770&auto=format&fit=crop" 
              alt="Ästhetische Zahnbehandlung Beratung - Zahnarztpraxis Worsch Dresden"
              className="w-full h-auto"
            />
          </div>
        </div>
        
        <h3 className="text-2xl font-medium mt-10 mb-6 text-dental-blue">Unsere ästhetischen Behandlungen in Dresden im Überblick</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-10">
          <div className="bg-dental-beige p-6 rounded-lg">
            <div className="flex items-center mb-3">
              <Droplet className="h-6 w-6 text-dental-turquoise mr-2" />
              <h4 className="text-xl font-medium text-dental-blue">Veneers Dresden</h4>
            </div>
            <p className="text-base mb-3">
              <strong>Perfektion für Ihre Frontzähne:</strong> Hauchdünne Keramikschalen (Veneers) sind die ideale Lösung, um Verfärbungen, leichte Fehlstellungen, kleine Zahnlücken oder unschöne Zahnformen dauerhaft und ästhetisch perfekt zu korrigieren.
            </p>
            <p className="text-base">
              In unserer Praxis in Dresden fertigen wir Ihre Veneers individuell an, für ein absolut natürliches und harmonisches Ergebnis. Erleben Sie, wie Veneers Ihr Lächeln transformieren können.
            </p>
          </div>
          
          <div className="bg-dental-beige p-6 rounded-lg">
            <div className="flex items-center mb-3">
              <Sparkles className="h-6 w-6 text-dental-turquoise mr-2" />
              <h4 className="text-xl font-medium text-dental-blue">Professionelles Bleaching Dresden</h4>
            </div>
            <p className="text-base mb-3">
              <strong>Für strahlend weiße Zähne:</strong> Sie wünschen sich hellere Zähne? Mit einem professionellen Bleaching in unserer Zahnarztpraxis in Dresden entfernen wir schonend und effektiv Verfärbungen.
            </p>
            <p className="text-base">
              Wir bieten verschiedene Bleaching-Methoden (In-Office-Bleaching, Home-Bleaching) für ein Ergebnis, das Sie zum Strahlen bringt.
            </p>
          </div>
          
          <div className="bg-dental-beige p-6 rounded-lg">
            <div className="flex items-center mb-3">
              <Eye className="h-6 w-6 text-dental-turquoise mr-2" />
              <h4 className="text-xl font-medium text-dental-blue">Unsichtbare Zahnkorrektur (Aligner)</h4>
            </div>
            <p className="text-base">
              Gerade Zähne ohne sichtbare Spange? Moderne Aligner-Systeme (z.B. Invisalign) ermöglichen eine diskrete und komfortable Korrektur von Zahnfehlstellungen – ideal für Erwachsene und Jugendliche, die Wert auf Ästhetik legen.
            </p>
          </div>
          
          <div className="bg-dental-beige p-6 rounded-lg">
            <div className="flex items-center mb-3">
              <Palette className="h-6 w-6 text-dental-turquoise mr-2" />
              <h4 className="text-xl font-medium text-dental-blue">Smile Design</h4>
            </div>
            <p className="text-base">
              <strong>Ihr Lächeln nach Maß:</strong> Mit digitaler Smile-Design-Technologie planen wir Ihr neues Lächeln präzise und können Ihnen bereits vor Behandlungsbeginn eine Visualisierung des möglichen Ergebnisses zeigen.
            </p>
          </div>
          
          <div className="bg-dental-beige p-6 rounded-lg">
            <div className="flex items-center mb-3">
              <Star className="h-6 w-6 text-dental-turquoise mr-2" />
              <h4 className="text-xl font-medium text-dental-blue">Ästhetische Füllungen & Inlays</h4>
            </div>
            <p className="text-base">
              Karies muss nicht sichtbar sein. Wir verwenden hochwertige, zahnfarbene Kompositfüllungen und Keramikinlays, die sich perfekt an Ihre natürliche Zahnfarbe anpassen und nahezu unsichtbar sind.
            </p>
          </div>
          
          <div className="bg-dental-beige p-6 rounded-lg">
            <div className="flex items-center mb-3">
              <Smile className="h-6 w-6 text-dental-turquoise mr-2" />
              <h4 className="text-xl font-medium text-dental-blue">Zahnfleischkorrekturen</h4>
            </div>
            <p className="text-base">
              <strong>Rot-Weiß-Ästhetik:</strong> Ein harmonisches Zusammenspiel von Zähnen (Weiß) und Zahnfleisch (Rot) ist entscheidend für ein ästhetisches Gesamtbild. Bei Bedarf korrigieren wir schonend Zahnfleischverläufe für ein perfektes Ergebnis.
            </p>
          </div>
        </div>
        
        <div id="veneers" className="mt-12 pt-4">
          <h3 className="text-2xl font-medium mb-4 text-dental-blue">Veneers Dresden: Hauchdünne Perfektion für Ihre Frontzähne</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <div className="rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1581701244939-bf25b2f7b691?q=80&w=1770&auto=format&fit=crop" 
                alt="Keramik Veneers für perfekte Frontzähne - Zahnarztpraxis Worsch Dresden"
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="mb-4">
                <strong>Veneers in Dresden</strong> sind die Königsdisziplin der ästhetischen Zahnheilkunde. Diese hauchdünnen Keramikschalen werden individuell für Sie angefertigt und dauerhaft auf die Zahnoberfläche geklebt.
              </p>
              <p className="mb-4">
                Mit Veneers lassen sich Verfärbungen, kleine Zahnlücken, leichte Fehlstellungen und Formunregelmäßigkeiten korrigieren. Das Ergebnis: Ein makelloses, natürliches Lächeln.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Minimale Präparation der Zahnsubstanz (0,3-0,7mm)</li>
                <li>Hervorragende Langlebigkeit (10-15 Jahre)</li>
                <li>Natürliches Aussehen und Lichtreflexion</li>
                <li>Flecken- und verfärbungsresistent</li>
                <li>Individuelle Farbanpassung in unserem Meisterlabor</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div id="bleaching" className="mt-12 pt-4">
          <h3 className="text-2xl font-medium mb-4 text-dental-blue">Professionelles Bleaching Dresden: Strahlend weiße Zähne</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <p className="mb-4">
                Mit unserem <strong>professionellen Bleaching in Dresden</strong> bieten wir Ihnen eine effektive und sichere Methode zur Zahnaufhellung. Unser schonender Aufhellungsprozess entfernt selbst hartnäckige Verfärbungen durch Kaffee, Tee, Rotwein oder Nikotin.
              </p>
              <p className="mb-4">
                Je nach Ihren Wünschen und Ihrer Ausgangssituation bieten wir Ihnen zwei bewährte Varianten an:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>In-Office-Bleaching:</strong> Professionelle Zahnaufhellung in nur einer Sitzung in unserer Praxis in Dresden Laubegast</li>
                <li><strong>Home-Bleaching:</strong> Individuell angefertigte Schienen für die Anwendung zuhause unter unserer fachkundigen Anleitung</li>
                <li><strong>Kombiniertes Verfahren:</strong> Optimale Ergebnisse durch Kombination beider Methoden</li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=1770&auto=format&fit=crop" 
                alt="Professionelles Bleaching für weiße Zähne - Zahnarztpraxis Worsch Dresden"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceContentAesthetic;
