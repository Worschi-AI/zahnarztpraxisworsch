
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Star, Smile, Droplet } from 'lucide-react';

const ServiceContentAesthetic = () => {
  return (
    <>
      <h2 className="mb-6 text-dental-blue">Ästhetische Zahnmedizin in Dresden: Ihr Weg zum strahlenden Lächeln</h2>
      <div className="prose prose-lg max-w-none text-dental-gray">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <p>
              <strong>Ästhetische Zahnheilkunde in Dresden</strong> verbindet moderne Zahnmedizin mit höchsten ästhetischen Ansprüchen. In der Zahnarztpraxis Worsch bieten wir Ihnen ein umfassendes Spektrum an Behandlungen, um Ihnen zu einem natürlich schönen Lächeln zu verhelfen.
            </p>
            <p>
              Unser erfahrenes Team für <strong>Zahnästhetik in Dresden</strong> setzt auf hochwertige Materialien und innovative Verfahren, um selbst kleinste Unregelmäßigkeiten zu korrigieren und Ihr strahlendstes Lächeln zum Vorschein zu bringen.
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
        
        <h3 className="text-2xl font-medium mt-10 mb-6 text-dental-blue">Unsere ästhetischen Behandlungen in Dresden</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-10">
          <div className="bg-dental-beige p-5 rounded-lg">
            <div className="flex items-center mb-3">
              <Droplet className="h-6 w-6 text-dental-turquoise mr-2" />
              <h4 className="text-xl font-medium text-dental-blue">Veneers Dresden</h4>
            </div>
            <p className="text-base">
              Hauchdünne Keramikschalen, die auf die Zahnoberfläche geklebt werden, um Verfärbungen, kleine Zahnlücken oder Formkorrekturen ästhetisch perfekt zu lösen.
            </p>
            <Button variant="link" asChild className="mt-2 p-0 text-dental-turquoise hover:text-dental-blue">
              <Link to="#veneers">Mehr zu Veneers erfahren</Link>
            </Button>
          </div>
          
          <div className="bg-dental-beige p-5 rounded-lg">
            <div className="flex items-center mb-3">
              <Smile className="h-6 w-6 text-dental-turquoise mr-2" />
              <h4 className="text-xl font-medium text-dental-blue">Bleaching Dresden</h4>
            </div>
            <p className="text-base">
              Professionelle Zahnaufhellung für ein strahlendes, weißes Lächeln. Wirksam gegen Verfärbungen durch Kaffee, Tee, Nikotin oder altersbedingte Eintrübungen.
            </p>
            <Button variant="link" asChild className="mt-2 p-0 text-dental-turquoise hover:text-dental-blue">
              <Link to="#bleaching">Mehr zum Bleaching erfahren</Link>
            </Button>
          </div>
          
          <div className="bg-dental-beige p-5 rounded-lg">
            <div className="flex items-center mb-3">
              <Star className="h-6 w-6 text-dental-turquoise mr-2" />
              <h4 className="text-xl font-medium text-dental-blue">Zahnformkorrekturen</h4>
            </div>
            <p className="text-base">
              Sanfte Korrektur von abgebrochenen Ecken, unregelmäßigen Zahnkanten oder zu kleinen Zähnen mit hochästhetischen Kompositmaterialien.
            </p>
          </div>
          
          <div className="bg-dental-beige p-5 rounded-lg">
            <div className="flex items-center mb-3">
              <Star className="h-6 w-6 text-dental-turquoise mr-2" />
              <h4 className="text-xl font-medium text-dental-blue">Smile Design</h4>
            </div>
            <p className="text-base">
              Ganzheitliche Planung Ihres perfekten Lächelns mit digitaler Vorschau - für harmonische Proportionen und ein natürliches Erscheinungsbild.
            </p>
          </div>
        </div>
        
        <div id="veneers" className="mt-12 pt-4">
          <h3 className="text-2xl font-medium mb-4 text-dental-blue">Veneers: Perfektion für Ihre Frontzähne</h3>
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
              <p>
                Mit Veneers lassen sich Verfärbungen, kleine Zahnlücken, leichte Fehlstellungen und Formunregelmäßigkeiten korrigieren. Das Ergebnis: Ein makelloses, natürliches Lächeln.
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Minimale Präparation der Zahnsubstanz</li>
                <li>Hervorragende Langlebigkeit (10-15 Jahre)</li>
                <li>Natürliches Aussehen und Lichtreflexion</li>
                <li>Flecken- und verfärbungsresistent</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div id="bleaching" className="mt-12 pt-4">
          <h3 className="text-2xl font-medium mb-4 text-dental-blue">Professionelles Bleaching: Strahlend weiße Zähne</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <p className="mb-4">
                Mit unserem <strong>professionellen Bleaching in Dresden</strong> bieten wir Ihnen eine effektive und sichere Methode zur Zahnaufhellung. Unser schonender Aufhellungsprozess entfernt selbst hartnäckige Verfärbungen.
              </p>
              <p>
                Je nach Ihren Wünschen bieten wir Ihnen zwei Varianten an:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li><strong>In-Office-Bleaching:</strong> Professionelle Zahnaufhellung in nur einer Sitzung in unserer Praxis</li>
                <li><strong>Home-Bleaching:</strong> Individuell angefertigte Schienen für die Anwendung zuhause unter unserer Anleitung</li>
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
