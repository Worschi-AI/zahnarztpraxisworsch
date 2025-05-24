
import React from 'react';
import { Heart, Shield, Users, Clock, CheckCircle, Star } from 'lucide-react';

interface ServiceContentDefaultProps {
  title: string;
  fullDescription: string;
  procedure?: string;
  isProphylaxe?: boolean;
  isZahnerhaltung?: boolean;
  isKinderzahnheilkunde?: boolean;
}

const ServiceContentDefault: React.FC<ServiceContentDefaultProps> = ({ 
  title, 
  fullDescription, 
  procedure,
  isProphylaxe = false,
  isZahnerhaltung = false,
  isKinderzahnheilkunde = false
}) => {
  if (isProphylaxe) {
    return (
      <div className="prose max-w-none">
        <h2 className="text-3xl font-medium mb-6 text-dental-blue">Professionelle Zahnreinigung & Prophylaxe in Dresden</h2>
        
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-dental-beige to-white rounded-lg p-8 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="bg-dental-turquoise/10 border-l-4 border-dental-turquoise p-4 rounded-r-lg mb-4">
                <p className="font-medium text-dental-blue">
                  ✨ Ein strahlendes Lächeln beginnt mit gesunden Zähnen
                </p>
              </div>
              <p className="mb-4">
                Die Prophylaxe bildet das Fundament für Ihre langfristige Mundgesundheit und ist ein zentraler Bestandteil unseres Angebots in der Zahnarztpraxis Worsch.
              </p>
              <p>
                Mit einer regelmäßigen <strong>professionellen Zahnreinigung (PZR)</strong> helfen wir Ihnen, Karies und Parodontitis effektiv vorzubeugen.
              </p>
            </div>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <Shield className="h-12 w-12 text-dental-turquoise mx-auto mb-2" />
                <p className="text-sm font-medium">Kariesschutz</p>
              </div>
              <div className="text-center">
                <Heart className="h-12 w-12 text-dental-turquoise mx-auto mb-2" />
                <p className="text-sm font-medium">Zahnfleischgesundheit</p>
              </div>
              <div className="text-center">
                <Star className="h-12 w-12 text-dental-turquoise mx-auto mb-2" />
                <p className="text-sm font-medium">Strahlende Zähne</p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-medium mb-6 text-dental-blue">Warum ist professionelle Zahnprophylaxe so wichtig?</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div>
            <p className="mb-4">
              Selbst bei sorgfältigster häuslicher Mundhygiene bleiben oft Beläge in schwer zugänglichen Bereichen zurück.
            </p>
            <p className="mb-4">
              Diese bakteriellen Beläge (Plaque) sind die Hauptursache für:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dental-turquoise mr-2 mt-0.5 flex-shrink-0" />
                <span>Karies (Löcher in den Zähnen)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dental-turquoise mr-2 mt-0.5 flex-shrink-0" />
                <span>Zahnfleischentzündungen (Gingivitis)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-dental-turquoise mr-2 mt-0.5 flex-shrink-0" />
                <span>Parodontitis und Zahnverlust</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-dental-beige p-6 rounded-lg">
            <h4 className="font-medium text-dental-blue mb-4">Was erreichen wir mit der PZR?</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <Star className="h-4 w-4 text-dental-turquoise mr-2 mt-1 flex-shrink-0" />
                <span><strong>Gründliche Entfernung</strong> aller Beläge und Verfärbungen</span>
              </li>
              <li className="flex items-start">
                <Star className="h-4 w-4 text-dental-turquoise mr-2 mt-1 flex-shrink-0" />
                <span><strong>Politur</strong> für glatte, widerstandsfähige Oberflächen</span>
              </li>
              <li className="flex items-start">
                <Star className="h-4 w-4 text-dental-turquoise mr-2 mt-1 flex-shrink-0" />
                <span><strong>Fluoridierung</strong> zur Stärkung des Zahnschmelzes</span>
              </li>
              <li className="flex items-start">
                <Star className="h-4 w-4 text-dental-turquoise mr-2 mt-1 flex-shrink-0" />
                <span><strong>Individuelle Beratung</strong> zur optimalen Mundpflege</span>
              </li>
            </ul>
          </div>
        </div>

        <h3 className="text-2xl font-medium mb-6 text-dental-blue">Ablauf Ihrer professionellen Zahnreinigung</h3>
        
        <div className="bg-white border border-dental-turquoise/20 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-dental-turquoise text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 mt-1">1</div>
                <div>
                  <h4 className="font-medium text-dental-blue mb-1">Untersuchung</h4>
                  <p className="text-sm">Beurteilung von Zähnen und Zahnfleisch</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dental-turquoise text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 mt-1">2</div>
                <div>
                  <h4 className="font-medium text-dental-blue mb-1">Belagsentfernung</h4>
                  <p className="text-sm">Ultraschall & Handinstrumente</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dental-turquoise text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 mt-1">3</div>
                <div>
                  <h4 className="font-medium text-dental-blue mb-1">Airflow-Reinigung</h4>
                  <p className="text-sm">Entfernung hartnäckiger Verfärbungen</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-dental-turquoise text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 mt-1">4</div>
                <div>
                  <h4 className="font-medium text-dental-blue mb-1">Politur</h4>
                  <p className="text-sm">Glättung aller Zahnoberflächen</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dental-turquoise text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 mt-1">5</div>
                <div>
                  <h4 className="font-medium text-dental-blue mb-1">Fluoridierung</h4>
                  <p className="text-sm">Schutz und Stärkung des Zahnschmelzes</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-dental-turquoise text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 mt-1">6</div>
                <div>
                  <h4 className="font-medium text-dental-blue mb-1">Beratung</h4>
                  <p className="text-sm">Tipps für optimale Mundpflege</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isZahnerhaltung) {
    return (
      <div className="prose max-w-none">
        <h2 className="text-3xl font-medium mb-6 text-dental-blue">Moderne Zahnerhaltung in Dresden</h2>
        
        {/* Hero Quote */}
        <div className="bg-dental-turquoise/10 border-l-4 border-dental-turquoise p-6 rounded-r-lg mb-8">
          <p className="text-lg font-medium text-dental-blue mb-2">
            "Ihre natürlichen Zähne sind durch nichts zu ersetzen"
          </p>
          <p className="text-sm">
            Unser obererstes Ziel ist es, Ihre eigenen Zähne so lange wie möglich gesund und funktionsfähig zu erhalten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10">
          <div>
            <p className="mb-4">
              Die moderne Zahnerhaltung bietet heute eine Vielzahl schonender und effektiver Methoden, um Zähne zu reparieren und zu bewahren.
            </p>
            <p className="mb-4">
              Wir setzen dabei auf <strong>minimalinvasive Techniken</strong> und hochwertige, biokompatible Materialien.
            </p>
          </div>
          <div className="flex justify-center space-x-6">
            <div className="text-center">
              <Heart className="h-10 w-10 text-dental-turquoise mx-auto mb-2" />
              <p className="text-xs font-medium">Schonend</p>
            </div>
            <div className="text-center">
              <Shield className="h-10 w-10 text-dental-turquoise mx-auto mb-2" />
              <p className="text-xs font-medium">Langlebig</p>
            </div>
            <div className="text-center">
              <Star className="h-10 w-10 text-dental-turquoise mx-auto mb-2" />
              <p className="text-xs font-medium">Ästhetisch</p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-medium mb-6 text-dental-blue">Unsere Leistungen im Bereich Zahnerhaltung</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-dental-beige p-6 rounded-lg">
            <h4 className="text-xl font-medium mb-3 text-dental-blue">Kompositfüllungen</h4>
            <p className="text-sm mb-3">
              Moderne, zahnfarbene Hightech-Kunststoffe für nahezu unsichtbare Reparaturen.
            </p>
            <ul className="text-xs space-y-1">
              <li>• Ästhetisch ansprechend</li>
              <li>• Sehr gut verträglich</li>
              <li>• Feste Verbindung mit dem Zahn</li>
              <li>• Schichtweise Aufbau möglich</li>
            </ul>
          </div>

          <div className="bg-dental-beige p-6 rounded-lg">
            <h4 className="text-xl font-medium mb-3 text-dental-blue">Keramikinlays</h4>
            <p className="text-sm mb-3">
              Für größere Defekte: extrem stabile und langlebige Keramikrestaurationen.
            </p>
            <ul className="text-xs space-y-1">
              <li>• Laborherstellung für Präzision</li>
              <li>• Natürliche Zahnschmelz-Optik</li>
              <li>• Sehr lange Haltbarkeit</li>
              <li>• Biokompatible Materialien</li>
            </ul>
          </div>

          <div className="bg-dental-beige p-6 rounded-lg">
            <h4 className="text-xl font-medium mb-3 text-dental-blue">Wurzelkanalbehandlung</h4>
            <p className="text-sm mb-3">
              Moderne Endodontie rettet auch stark geschädigte Zähne.
            </p>
            <ul className="text-xs space-y-1">
              <li>• Maschinelle Aufbereitung</li>
              <li>• Elektronische Längenmessung</li>
              <li>• Desinfizierende Spülungen</li>
              <li>• Schmerzarme Behandlung</li>
            </ul>
          </div>

          <div className="bg-dental-beige p-6 rounded-lg">
            <h4 className="text-xl font-medium mb-3 text-dental-blue">Parodontitisbehandlung</h4>
            <p className="text-sm mb-3">
              Systematische Behandlung von Zahnfleisch und Zahnhalteapparat.
            </p>
            <ul className="text-xs space-y-1">
              <li>• Stopp des Entzündungsprozesses</li>
              <li>• Erhalt von Zahnfleisch und Knochen</li>
              <li>• Regelmäßige Nachsorge</li>
              <li>• Langfristiger Zahnerhalt</li>
            </ul>
          </div>
        </div>

        <div className="bg-white border border-dental-turquoise/20 rounded-lg p-6">
          <h3 className="text-xl font-medium mb-4 text-dental-blue text-center">Warum Zahnerhaltung bei uns?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <Heart className="h-8 w-8 text-dental-turquoise mx-auto mb-2" />
              <h4 className="font-medium text-dental-blue mb-2">Minimalinvasiv</h4>
              <p className="text-sm">Nur so viel Zahnsubstanz entfernen wie nötig</p>
            </div>
            <div>
              <Star className="h-8 w-8 text-dental-turquoise mx-auto mb-2" />
              <h4 className="font-medium text-dental-blue mb-2">Ästhetisch</h4>
              <p className="text-sm">Zahnfarbene Materialien für natürliches Aussehen</p>
            </div>
            <div>
              <Shield className="h-8 w-8 text-dental-turquoise mx-auto mb-2" />
              <h4 className="font-medium text-dental-blue mb-2">Langlebig</h4>
              <p className="text-sm">Hochwertige Materialien für dauerhafte Ergebnisse</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isKinderzahnheilkunde) {
    return (
      <div className="prose max-w-none">
        <h2 className="text-3xl font-medium mb-6 text-dental-blue">Liebevolle Kinderzahnheilkunde in Dresden Laubegast</h2>
        
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-dental-beige to-white rounded-lg p-8 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="bg-dental-turquoise/10 border-l-4 border-dental-turquoise p-4 rounded-r-lg mb-4">
                <p className="font-medium text-dental-blue">
                  🦷 Gesunde Milchzähne = gesunde bleibende Zähne
                </p>
              </div>
              <p className="mb-4">
                In der Zahnarztpraxis Worsch legen wir größten Wert auf eine <strong>kindgerechte, einfühlsame und angstfreie</strong> Behandlung unserer jüngsten Patienten.
              </p>
              <p>
                Unser Ziel: Den Zahnarztbesuch zu einem positiven Erlebnis machen!
              </p>
            </div>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <Users className="h-12 w-12 text-dental-turquoise mx-auto mb-2" />
                <p className="text-sm font-medium">Kinderfreundlich</p>
              </div>
              <div className="text-center">
                <Heart className="h-12 w-12 text-dental-turquoise mx-auto mb-2" />
                <p className="text-sm font-medium">Einfühlsam</p>
              </div>
              <div className="text-center">
                <Shield className="h-12 w-12 text-dental-turquoise mx-auto mb-2" />
                <p className="text-sm font-medium">Angstfrei</p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-medium mb-6 text-dental-blue">Was macht einen guten Kinderzahnarzt aus?</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-dental-beige p-6 rounded-lg">
            <div className="flex items-center mb-3">
              <Clock className="h-6 w-6 text-dental-turquoise mr-3" />
              <h4 className="font-medium text-dental-blue">Geduld & Einfühlungsvermögen</h4>
            </div>
            <p className="text-sm">
              Wir nehmen uns viel Zeit für eine vertrauensvolle Beziehung zu Ihrem Kind und gehen auf individuelle Bedürfnisse ein.
            </p>
          </div>

          <div className="bg-dental-beige p-6 rounded-lg">
            <div className="flex items-center mb-3">
              <Star className="h-6 w-6 text-dental-turquoise mr-3" />
              <h4 className="font-medium text-dental-blue">Spielerische Herangehensweise</h4>
            </div>
            <p className="text-sm">
              Altersgerechte Erklärungen und spielerische Einbindung ("Zähne zählen", "Zahnteufelchen wegzaubern").
            </p>
          </div>

          <div className="bg-dental-beige p-6 rounded-lg">
            <div className="flex items-center mb-3">
              <Heart className="h-6 w-6 text-dental-turquoise mr-3" />
              <h4 className="font-medium text-dental-blue">Angstfreie Atmosphäre</h4>
            </div>
            <p className="text-sm">
              Freundlich gestaltete Praxisräume und ein speziell geschultes Team für den Umgang mit Kindern.
            </p>
          </div>

          <div className="bg-dental-beige p-6 rounded-lg">
            <div className="flex items-center mb-3">
              <Shield className="h-6 w-6 text-dental-turquoise mr-3" />
              <h4 className="font-medium text-dental-blue">Früherkennung & Prophylaxe</h4>
            </div>
            <p className="text-sm">
              Regelmäßige Kontrollen ab dem ersten Milchzahn für frühzeitige Risikenerkennung.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-medium mb-6 text-dental-blue">Unsere Leistungen für Kinder in Dresden Laubegast</h3>
        
        <div className="bg-white border border-dental-turquoise/20 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-medium text-dental-blue mb-4">Vorsorge & Prophylaxe</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-dental-turquoise mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Früherkennungsuntersuchungen (FU):</strong> Überwachung der Entwicklung</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-dental-turquoise mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Individualprophylaxe:</strong> Professionelle Reinigung für Milchzähne</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-dental-turquoise mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Fissurenversiegelung:</strong> Schutz der Backenzähne</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-dental-turquoise mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Fluoridierung:</strong> Stärkung des Zahnschmelzes</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-dental-blue mb-4">Behandlung & Beratung</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-dental-turquoise mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Milchzahnkaries:</strong> Schonende Füllungstherapie</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-dental-turquoise mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Platzhalter:</strong> Bei vorzeitigem Milchzahnverlust</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-dental-turquoise mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Zahnunfälle:</strong> Schnelle, kompetente Hilfe</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-dental-turquoise mr-2 mt-1 flex-shrink-0" />
                  <span><strong>Kieferorthopädie-Beratung:</strong> Früherkennung von Fehlstellungen</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tipp Box */}
        <div className="bg-dental-turquoise/10 p-6 rounded-lg">
          <h4 className="font-medium text-dental-blue mb-3">💡 Tipp für Eltern</h4>
          <p className="text-sm mb-2">
            <strong>Erster Zahnarztbesuch:</strong> Wir empfehlen den ersten Kontrollbesuch mit dem Durchbruch des ersten Milchzahnes, spätestens jedoch mit einem Jahr.
          </p>
          <p className="text-sm">
            So kann sich Ihr Kind früh an unsere Praxisumgebung gewöhnen und entwickelt eine positive Einstellung zur Zahnpflege.
          </p>
        </div>
      </div>
    );
  }

  // Default content for other services
  return (
    <div className="prose max-w-none">
      <h2 className="text-3xl font-medium mb-6 text-dental-blue">{title}</h2>
      <p className="text-lg text-dental-gray mb-6">{fullDescription}</p>
      
      {procedure && (
        <>
          <h3 className="text-2xl font-medium mb-4 text-dental-blue">Behandlungsablauf</h3>
          <p className="text-dental-gray mb-6">{procedure}</p>
        </>
      )}
    </div>
  );
};

export default ServiceContentDefault;
