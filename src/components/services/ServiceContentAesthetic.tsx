
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Star, Smile, Droplet, Sparkles, Palette, Eye, Camera, Award } from 'lucide-react';

const ServiceContentAesthetic = () => {
  return (
    <>
      <h2 className="mb-6 text-dental-blue">Ästhetische Zahnmedizin in Dresden: Ihr Weg zum strahlenden Lächeln</h2>
      <div className="prose prose-lg max-w-none text-dental-gray">
        
        {/* Hero Intro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <div className="bg-dental-turquoise/10 border-l-4 border-dental-turquoise p-4 rounded-r-lg mb-6">
              <p className="font-medium text-dental-blue">
                ✨ Ein makelloses Lächeln ist Ausdruck von Vitalität, Gesundheit und Selbstbewusstsein.
              </p>
            </div>
            
            <p className="mb-4">
              In der <strong>Zahnarztpraxis Worsch in Dresden Laubegast</strong> haben wir uns darauf spezialisiert, Ihre individuellen Wünsche an die Ästhetik Ihrer Zähne zu erfüllen.
            </p>
            <p className="mb-4">
              Mit modernsten Methoden und hochwertigen Materialien verhelfen wir Ihnen zu dem Lächeln, das Sie sich immer gewünscht haben.
            </p>
            
            <div className="flex items-center space-x-4 mt-6">
              <div className="text-center">
                <Award className="h-8 w-8 text-dental-turquoise mx-auto mb-1" />
                <p className="text-xs font-medium">Modernste Technologie</p>
              </div>
              <div className="text-center">
                <Camera className="h-8 w-8 text-dental-turquoise mx-auto mb-1" />
                <p className="text-xs font-medium">Digitale Smile-Planung</p>
              </div>
              <div className="text-center">
                <Star className="h-8 w-8 text-dental-turquoise mx-auto mb-1" />
                <p className="text-xs font-medium">Premium Qualität</p>
              </div>
            </div>
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
        
        {/* Treatment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-br from-dental-beige to-white p-6 rounded-lg border border-dental-turquoise/10">
            <div className="flex items-center mb-4">
              <Droplet className="h-7 w-7 text-dental-turquoise mr-3" />
              <h4 className="text-xl font-medium text-dental-blue">Veneers Dresden</h4>
            </div>
            <p className="text-base mb-3 font-medium text-dental-blue">
              Perfektion für Ihre Frontzähne
            </p>
            <p className="text-sm mb-4">
              Hauchdünne Keramikschalen sind die ideale Lösung für:
            </p>
            <ul className="text-sm space-y-1 mb-4">
              <li>• Verfärbungen und Flecken</li>
              <li>• Kleine Zahnlücken</li>
              <li>• Leichte Fehlstellungen</li>
              <li>• Unschöne Zahnformen</li>
            </ul>
            <Button variant="link" asChild className="p-0 text-dental-turquoise hover:text-dental-blue">
              <Link to="#veneers">Mehr zu Veneers erfahren →</Link>
            </Button>
          </div>
          
          <div className="bg-gradient-to-br from-dental-beige to-white p-6 rounded-lg border border-dental-turquoise/10">
            <div className="flex items-center mb-4">
              <Sparkles className="h-7 w-7 text-dental-turquoise mr-3" />
              <h4 className="text-xl font-medium text-dental-blue">Bleaching Dresden</h4>
            </div>
            <p className="text-base mb-3 font-medium text-dental-blue">
              Strahlend weiße Zähne
            </p>
            <p className="text-sm mb-4">
              Professionelle Zahnaufhellung entfernt:
            </p>
            <ul className="text-sm space-y-1 mb-4">
              <li>• Kaffee- und Tee-Verfärbungen</li>
              <li>• Rotwein-Flecken</li>
              <li>• Nikotin-Ablagerungen</li>
              <li>• Altersbedingte Verfärbungen</li>
            </ul>
            <Button variant="link" asChild className="p-0 text-dental-turquoise hover:text-dental-blue">
              <Link to="#bleaching">Mehr zum Bleaching erfahren →</Link>
            </Button>
          </div>
          
          <div className="bg-gradient-to-br from-dental-beige to-white p-6 rounded-lg border border-dental-turquoise/10">
            <div className="flex items-center mb-4">
              <Eye className="h-7 w-7 text-dental-turquoise mr-3" />
              <h4 className="text-xl font-medium text-dental-blue">Unsichtbare Zahnkorrektur</h4>
            </div>
            <p className="text-base mb-3 font-medium text-dental-blue">
              Gerade Zähne ohne sichtbare Spange
            </p>
            <p className="text-sm mb-4">
              Aligner-Systeme bieten:
            </p>
            <ul className="text-sm space-y-1 mb-4">
              <li>• Diskrete Behandlung</li>
              <li>• Herausnehmbare Schienen</li>
              <li>• Komfortable Korrektur</li>
              <li>• Für Erwachsene & Jugendliche</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-dental-beige to-white p-6 rounded-lg border border-dental-turquoise/10">
            <div className="flex items-center mb-4">
              <Palette className="h-7 w-7 text-dental-turquoise mr-3" />
              <h4 className="text-xl font-medium text-dental-blue">Digital Smile Design</h4>
            </div>
            <p className="text-base mb-3 font-medium text-dental-blue">
              Ihr Lächeln nach Maß
            </p>
            <p className="text-sm mb-4">
              Digitale Planung ermöglicht:
            </p>
            <ul className="text-sm space-y-1 mb-4">
              <li>• Präzise Vorhersage des Ergebnisses</li>
              <li>• Individuelle Anpassung</li>
              <li>• Vorher-Nachher-Simulation</li>
              <li>• Optimale Ästhetik</li>
            </ul>
          </div>
        </div>
        
        {/* Veneers Detailed Section */}
        <div id="veneers" className="bg-white rounded-lg p-8 mb-12 border border-dental-turquoise/10">
          <h3 className="text-2xl font-medium mb-6 text-dental-blue">Veneers Dresden: Hauchdünne Perfektion für Ihre Frontzähne</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <div className="rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1581701244939-bf25b2f7b691?q=80&w=1770&auto=format&fit=crop" 
                alt="Keramik Veneers für perfekte Frontzähne - Zahnarztpraxis Worsch Dresden"
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-dental-turquoise/10 p-4 rounded-lg mb-4">
                <p className="font-medium text-dental-blue">
                  Veneers sind die Königsdisziplin der ästhetischen Zahnheilkunde
                </p>
              </div>
              
              <p className="mb-4">
                Diese hauchdünnen <strong>Keramikschalen</strong> werden individuell für Sie angefertigt und dauerhaft auf die Zahnoberfläche geklebt.
              </p>
              
              <h4 className="font-medium text-dental-blue mb-3">Ihre Vorteile auf einen Blick:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center text-sm">
                  <Star className="h-4 w-4 text-dental-turquoise mr-2" />
                  <span>Minimale Präparation (0,3-0,7mm)</span>
                </div>
                <div className="flex items-center text-sm">
                  <Star className="h-4 w-4 text-dental-turquoise mr-2" />
                  <span>10-15 Jahre Haltbarkeit</span>
                </div>
                <div className="flex items-center text-sm">
                  <Star className="h-4 w-4 text-dental-turquoise mr-2" />
                  <span>Natürliche Lichtreflexion</span>
                </div>
                <div className="flex items-center text-sm">
                  <Star className="h-4 w-4 text-dental-turquoise mr-2" />
                  <span>Verfärbungsresistent</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bleaching Detailed Section */}
        <div id="bleaching" className="bg-dental-beige/30 rounded-lg p-8 mb-12">
          <h3 className="text-2xl font-medium mb-6 text-dental-blue">Professionelles Bleaching Dresden: Strahlend weiße Zähne</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="bg-white border border-dental-turquoise/20 p-4 rounded-lg mb-4">
                <p className="font-medium text-dental-blue text-center">
                  ⚡ Bis zu 8 Nuancen heller in nur einer Sitzung
                </p>
              </div>
              
              <p className="mb-4">
                Mit unserem <strong>professionellen Bleaching in Dresden</strong> bieten wir Ihnen eine effektive und sichere Methode zur Zahnaufhellung.
              </p>
              
              <h4 className="font-medium text-dental-blue mb-3">Unsere Bleaching-Methoden:</h4>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg border border-dental-turquoise/10">
                  <h5 className="font-medium text-dental-blue text-sm">In-Office-Bleaching</h5>
                  <p className="text-xs text-gray-600">Professionelle Aufhellung in nur einer Sitzung</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-dental-turquoise/10">
                  <h5 className="font-medium text-dental-blue text-sm">Home-Bleaching</h5>
                  <p className="text-xs text-gray-600">Individuelle Schienen für die Anwendung zuhause</p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-dental-turquoise/10">
                  <h5 className="font-medium text-dental-blue text-sm">Kombiniertes Verfahren</h5>
                  <p className="text-xs text-gray-600">Optimale Ergebnisse durch Kombination beider Methoden</p>
                </div>
              </div>
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
