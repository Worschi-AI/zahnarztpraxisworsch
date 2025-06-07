
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { 
  Shield, 
  Smile, 
  Heart, 
  Star, 
  CheckCircle,
  Calendar,
  Phone,
  Award,
  Stethoscope,
  Activity
} from 'lucide-react';

const ServiceContentImplantologie = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-dental-blue to-dental-turquoise text-white py-16 mb-12 -mt-8 animate-fade-in">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Zahnimplantate Dresden – Festsitzender Zahnersatz
          </h1>
          <p className="text-xl md:text-2xl mb-4">
            Modernste Implantologie mit 3D-Planung bei Dr. Worsch
          </p>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Sie suchen nach hochwertigen Zahnimplantaten in Dresden? In unserer Zahnarztpraxis Worsch 
            in Dresden-Laubegast erhalten Sie modernste Implantologie mit 3D-Planung und schonenden Verfahren. 
            Mit über 500 erfolgreich gesetzten Zahnimplantaten sind Sie bei uns in den besten Händen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-dental-turquoise hover:bg-white hover:text-dental-blue text-white">
              <Link to="/appointment">
                <Calendar className="w-5 h-5 mr-2" />
                Jetzt Termin buchen
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="bg-white/10 text-white border-white hover:bg-white hover:text-dental-blue"
            >
              <a href="tel:+4935125227099">
                <Phone className="w-5 h-5 mr-2" />
                Sofort anrufen: 0351 2522709
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Statistik Box */}
      <div className="bg-dental-beige rounded-lg p-8 mb-12 text-center animate-scale-in">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="text-3xl font-bold text-dental-blue mb-2">500+</div>
            <div className="text-dental-gray">Erfolgreich gesetzte Implantate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-dental-blue mb-2">15+</div>
            <div className="text-dental-gray">Jahre Erfahrung</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-dental-blue mb-2">95%+</div>
            <div className="text-dental-gray">Erfolgsrate nach 10 Jahren</div>
          </div>
        </div>
      </div>

      {/* Vorteile Section */}
      <section className="mb-16 animate-slide-up">
        <h2 className="text-3xl font-bold text-dental-blue mb-8 text-center">
          Die Vorteile von Zahnimplantaten in unserer Dresdner Praxis
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Vorteil 1 */}
          <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-dental-turquoise/10 p-3 rounded-lg">
                <Shield className="w-8 h-8 text-dental-turquoise" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dental-blue mb-3">
                  Biokompatible Titan-Implantate
                </h3>
                <p className="text-dental-gray">
                  Wir verwenden ausschließlich hochwertige Titan-Zahnimplantate, die sich optimal 
                  in Ihren Kieferknochen integrieren. Titan ist körperverträglich und bildet eine 
                  feste Verbindung mit dem Knochen (Osseointegration), wodurch Ihr Implantat eine 
                  Lebensdauer von 20 Jahren und mehr erreichen kann.
                </p>
              </div>
            </div>
          </div>

          {/* Vorteil 2 */}
          <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-dental-turquoise/10 p-3 rounded-lg">
                <Smile className="w-8 h-8 text-dental-turquoise" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dental-blue mb-3">
                  Natürliches Kaugefühl und perfekte Ästhetik
                </h3>
                <p className="text-dental-gray">
                  Im Gegensatz zu herkömmlichen Prothesen bieten Zahnimplantate ein natürliches 
                  Kaugefühl ohne Druckstellen oder Wackeln. Die darauf befestigten Vollkeramikkronen 
                  sind von Ihren natürlichen Zähnen optisch nicht zu unterscheiden.
                </p>
              </div>
            </div>
          </div>

          {/* Vorteil 3 */}
          <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-dental-turquoise/10 p-3 rounded-lg">
                <Heart className="w-8 h-8 text-dental-turquoise" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dental-blue mb-3">
                  Schonung der Nachbarzähne
                </h3>
                <p className="text-dental-gray">
                  Anders als bei Brücken müssen für Zahnimplantate keine gesunden Nachbarzähne 
                  beschliffen werden. Ihr natürlicher Zahnbestand bleibt vollständig erhalten, 
                  was langfristig zu besserer Mundgesundheit führt.
                </p>
              </div>
            </div>
          </div>

          {/* Vorteil 4 */}
          <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-dental-turquoise/10 p-3 rounded-lg">
                <Activity className="w-8 h-8 text-dental-turquoise" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dental-blue mb-3">
                  Knochenerhalt und Gesichtsästhetik
                </h3>
                <p className="text-dental-gray">
                  Zahnimplantate stimulieren den Kieferknochen wie natürliche Zahnwurzeln und 
                  verhindern so den Knochenabbau. Dies erhält Ihre Gesichtskonturen und verhindert 
                  das typische "eingefallene" Aussehen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Behandlungsablauf Zeitstrahl */}
      <section className="mb-16 animate-slide-up">
        <h2 className="text-3xl font-bold text-dental-blue mb-8 text-center">
          Unser bewährter Implantologie-Prozess in Dresden
        </h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-dental-turquoise hidden md:block"></div>
          
          <div className="space-y-8">
            {/* Schritt 1 */}
            <div className="flex items-start gap-6">
              <div className="bg-dental-turquoise text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold shrink-0">
                1
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg flex-1">
                <h3 className="text-xl font-semibold text-dental-blue mb-3">
                  Erstberatung und 3D-Diagnostik
                </h3>
                <p className="text-dental-gray">
                  Ihr Weg zu neuen Zähnen beginnt mit einer ausführlichen Beratung in unserer Praxis 
                  in Dresden-Laubegast. Mittels digitaler Volumentomographie (DVT) erstellen wir 
                  dreidimensionale Aufnahmen Ihres Kiefers für eine millimetergenaue Planung.
                </p>
              </div>
            </div>

            {/* Schritt 2 */}
            <div className="flex items-start gap-6">
              <div className="bg-dental-turquoise text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold shrink-0">
                2
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg flex-1">
                <h3 className="text-xl font-semibold text-dental-blue mb-3">
                  Individuelle Behandlungsplanung
                </h3>
                <p className="text-dental-gray">
                  Basierend auf der 3D-Diagnostik erstellen wir einen detaillierten Behandlungsplan, 
                  der optimal auf Ihre anatomischen Gegebenheiten abgestimmt ist. Sie erhalten eine 
                  transparente Aufklärung über alle Behandlungsschritte und Kosten.
                </p>
              </div>
            </div>

            {/* Schritt 3 */}
            <div className="flex items-start gap-6">
              <div className="bg-dental-turquoise text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold shrink-0">
                3
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg flex-1">
                <h3 className="text-xl font-semibold text-dental-blue mb-3">
                  Schonende Implantation
                </h3>
                <p className="text-dental-gray">
                  Die Implantation erfolgt unter örtlicher Betäubung und ist in der Regel schmerzfrei. 
                  Dank modernster Techniken ist der Eingriff minimalinvasiv und schonend. Je nach 
                  Ausgangssituation können wir oft auch eine Sofortimplantation durchführen.
                </p>
              </div>
            </div>

            {/* Schritt 4 */}
            <div className="flex items-start gap-6">
              <div className="bg-dental-turquoise text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold shrink-0">
                4
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg flex-1">
                <h3 className="text-xl font-semibold text-dental-blue mb-3">
                  Einheilungsphase und Nachsorge
                </h3>
                <p className="text-dental-gray">
                  Nach der Implantation folgt eine Einheilungsphase von 3-6 Monaten, in der das 
                  Implantat fest mit dem Kieferknochen verwächst. Während dieser Zeit erhalten Sie 
                  bei Bedarf einen hochwertigen Provisorium.
                </p>
              </div>
            </div>

            {/* Schritt 5 */}
            <div className="flex items-start gap-6">
              <div className="bg-dental-turquoise text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold shrink-0">
                5
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg flex-1">
                <h3 className="text-xl font-semibold text-dental-blue mb-3">
                  Prothetische Versorgung
                </h3>
                <p className="text-dental-gray">
                  Nach erfolgreicher Einheilung wird Ihr individueller Zahnersatz angefertigt. 
                  Ob Einzelkrone, Brücke oder implantatgetragene Prothese – wir verwenden 
                  ausschließlich hochwertige Vollkeramik-Materialien.
                </p>
              </div>
            </div>

            {/* Schritt 6 */}
            <div className="flex items-start gap-6">
              <div className="bg-dental-turquoise text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold shrink-0">
                6
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg flex-1">
                <h3 className="text-xl font-semibold text-dental-blue mb-3">
                  Langfristige Betreuung
                </h3>
                <p className="text-dental-gray">
                  Auch nach Abschluss der Behandlung sind wir für Sie da. Regelmäßige Recall-Termine 
                  und professionelle Implantatreinigungen sorgen für die Langlebigkeit Ihrer neuen Zähne.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preise Section */}
      <section className="mb-16 animate-slide-up">
        <h2 className="text-3xl font-bold text-dental-blue mb-8 text-center">
          Preise für Zahnimplantate in Dresden
        </h2>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-dental-blue mb-4">
              Transparente Kostenaufstellung
            </h3>
            <p className="text-dental-gray">
              Die Kosten für Zahnimplantate variieren je nach individueller Ausgangssituation 
              und gewählter Versorgung. In unserer Dresdner Praxis erhalten Sie eine transparente 
              Kostenaufstellung ohne versteckte Zusatzkosten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-dental-beige rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-dental-blue mb-2">ab 1.800 €</div>
              <div className="text-sm text-dental-gray">Einzelzahnimplantat mit Vollkeramikkrone</div>
            </div>
            <div className="bg-dental-beige rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-dental-blue mb-2">ab 4.500 €</div>
              <div className="text-sm text-dental-gray">Implantatgetragene Brücke (3 Zähne)</div>
            </div>
            <div className="bg-dental-beige rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-dental-blue mb-2">ab 12.000 €</div>
              <div className="text-sm text-dental-gray">Vollständige implantatgetragene Versorgung</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-dental-blue mb-3">Finanzierungsmöglichkeiten</h4>
              <p className="text-dental-gray">
                Wir bieten Ihnen flexible Finanzierungslösungen, um Ihre Wunschbehandlung zu ermöglichen. 
                Sprechen Sie uns auf individuelle Ratenzahlungspläne an.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-dental-blue mb-3">Zuschüsse der Krankenkassen</h4>
              <p className="text-dental-gray">
                Auch bei Zahnimplantaten erhalten Sie den befundbezogenen Festzuschuss Ihrer Krankenkasse. 
                Private Zusatzversicherungen übernehmen oft einen größeren Anteil der Implantatkosten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Warum Dr. Worsch Section */}
      <section className="mb-16 animate-slide-up">
        <h2 className="text-3xl font-bold text-dental-blue mb-8 text-center">
          Warum Zahnimplantate bei Dr. Worsch in Dresden?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-8 h-8 text-dental-turquoise" />
              <h3 className="text-xl font-semibold text-dental-blue">Spezialisierte Expertise</h3>
            </div>
            <p className="text-dental-gray">
              Dr. med. dent. Thomas Worsch ist Spezialist für Implantologie und ästhetische Zahnmedizin 
              mit über 15 Jahren Berufserfahrung. Regelmäßige Fortbildungen und Zertifizierungen 
              gewährleisten modernste Behandlungsmethoden.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Stethoscope className="w-8 h-8 text-dental-turquoise" />
              <h3 className="text-xl font-semibold text-dental-blue">Modernste Technologie</h3>
            </div>
            <ul className="text-dental-gray space-y-2">
              <li>• 3D-Röntgen (DVT) für präzise Planung</li>
              <li>• Digitale Intraoralscanner</li>
              <li>• Computergestützte Implantatplanung</li>
              <li>• Minimalinvasive Operationstechniken</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-8 h-8 text-dental-turquoise" />
              <h3 className="text-xl font-semibold text-dental-blue">Persönliche Betreuung</h3>
            </div>
            <p className="text-dental-gray">
              Jeder Patient erhält eine individuelle Betreuung von der ersten Beratung bis zur Nachsorge. 
              Unser eingespieltes Praxisteam sorgt für eine entspannte Atmosphäre und nimmt sich Zeit 
              für Ihre Fragen und Sorgen.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Star className="w-8 h-8 text-dental-turquoise" />
              <h3 className="text-xl font-semibold text-dental-blue">Qualitätsgarantie</h3>
            </div>
            <p className="text-dental-gray">
              Wir gewähren eine Garantie auf unsere Implantat-Behandlungen und verwenden ausschließlich 
              Implantatsysteme renommierter Hersteller mit langjähriger Bewährung.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16 animate-slide-up">
        <h2 className="text-3xl font-bold text-dental-blue mb-8 text-center">
          Häufige Fragen zu Zahnimplantaten
        </h2>
        
        <div className="bg-white rounded-lg shadow-lg">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="px-6 py-4 text-left">
                Sind Zahnimplantate schmerzhaft?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-dental-gray">
                  Die Implantation erfolgt unter örtlicher Betäubung und ist in der Regel schmerzfrei. 
                  Nach dem Eingriff können leichte Schwellungen und Beschwerden auftreten, die sich 
                  gut mit Schmerzmitteln behandeln lassen und nach wenigen Tagen abklingen.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="px-6 py-4 text-left">
                Wie lange halten Zahnimplantate?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-dental-gray">
                  Bei guter Pflege und regelmäßigen Kontrollen können Zahnimplantate 20 Jahre und länger halten. 
                  Studien zeigen Erfolgsraten von über 95% nach 10 Jahren. Die Langlebigkeit hängt wesentlich 
                  von Ihrer Mundhygiene und regelmäßigen Prophylaxe ab.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="px-6 py-4 text-left">
                Bin ich für Zahnimplantate geeignet?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-dental-gray">
                  Die meisten Patienten sind für Zahnimplantate geeignet. Wichtig sind ausreichend 
                  Kieferknochen und eine gute Mundhygiene. Auch bei Knochenabbau können wir mit 
                  Knochenaufbau-Verfahren helfen. Eine individuelle Beratung klärt Ihre Eignung.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="px-6 py-4 text-left">
                Was kostet ein Zahnimplantat?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-dental-gray">
                  Die Kosten variieren je nach Ausgangssituation. Ein Einzelimplantat mit Krone kostet 
                  ab 1.800 Euro. Ihre Krankenkasse gewährt einen Festzuschuss, private Zusatzversicherungen 
                  übernehmen oft den Großteil der Kosten. Wir erstellen Ihnen gerne einen individuellen 
                  Kostenvoranschlag.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="px-6 py-4 text-left">
                Wie lange dauert die gesamte Behandlung?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-dental-gray">
                  Die gesamte Behandlung dauert in der Regel 3-6 Monate. Nach der Implantation folgt 
                  eine Einheilungsphase, in der das Implantat mit dem Kieferknochen verwächst. 
                  Anschließend wird der endgültige Zahnersatz angefertigt und eingesetzt.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Testimonial */}
      <section className="mb-16 animate-slide-up">
        <div className="bg-dental-beige rounded-lg p-8 text-center">
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-xl italic text-dental-gray mb-6">
              "Dank Dr. Worsch und seinem Team habe ich wieder feste Zähne und kann unbeschwert 
              lachen. Die Behandlung war schmerzfrei und das Ergebnis übertrifft meine Erwartungen. 
              Ich kann die Praxis jedem weiterempfehlen, der hochwertigen Zahnersatz sucht."
            </blockquote>
            <div className="font-semibold text-dental-blue">- Maria K., Dresden</div>
            <div className="flex justify-center mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-dental-blue to-dental-turquoise text-white rounded-lg p-8 text-center animate-scale-in">
        <h2 className="text-3xl font-bold mb-4">
          Vereinbaren Sie Ihren Beratungstermin für Zahnimplantate in Dresden
        </h2>
        <p className="text-xl mb-6">
          Träumen Sie von festsitzenden Zähnen, die sich anfühlen wie Ihre eigenen? 
          Dr. med. dent. Thomas Worsch und sein erfahrenes Team in Dresden-Laubegast 
          freuen sich darauf, Sie zu beraten.
        </p>
        
        <div className="bg-white/10 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">Kontaktieren Sie uns jetzt:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <div className="font-semibold">Online-Termin buchen:</div>
              <div>Rund um die Uhr über Doctolib</div>
            </div>
            <div>
              <div className="font-semibold">Telefonisch:</div>
              <div>0351 2522709</div>
            </div>
            <div>
              <div className="font-semibold">Persönlich:</div>
              <div>Österreicher Str. 38, 01279 Dresden</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-dental-blue hover:bg-dental-beige">
            <Link to="/appointment">
              <Calendar className="w-5 h-5 mr-2" />
              Jetzt Termin vereinbaren
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-dental-blue">
            <Link to="/contact">
              Mehr Informationen
            </Link>
          </Button>
        </div>

        <div className="mt-8 text-sm">
          <div className="font-semibold mb-2">Ihre Vorteile bei der Zahnarztpraxis Worsch:</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-left max-w-2xl mx-auto">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Über 500 erfolgreich gesetzte Implantate</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>3D-Planung für maximale Sicherheit</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Modernste Technologie und Materialien</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Transparente Kosten ohne versteckte Zusatzkosten</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Flexible Finanzierungsmöglichkeiten</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Spezialisierung auf Angstpatienten</span>
            </div>
          </div>
        </div>

        <div className="mt-6 text-lg font-semibold">
          Ihre Zahngesundheit liegt uns am Herzen – vereinbaren Sie noch heute Ihren persönlichen Beratungstermin!
        </div>
      </section>
    </>
  );
};

export default ServiceContentImplantologie;
