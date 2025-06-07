
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Smile, 
  Heart, 
  Zap, 
  CheckCircle, 
  Calendar,
  Phone,
  Star,
  Clock,
  Users,
  Award
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PhoneButton from '@/components/PhoneButton';

const ServiceContentImplantologie = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-dental-blue to-dental-turquoise text-white py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Zahnimplantate Dresden – Festsitzender Zahnersatz in der Zahnarztpraxis Worsch
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Sie suchen nach hochwertigen Zahnimplantaten in Dresden? Dr. med. dent. Thomas Worsch, Spezialist für Implantologie und ästhetische Zahnmedizin, bietet Ihnen festsitzenden Zahnersatz mit über 500 erfolgreich gesetzten Zahnimplantaten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-dental-turquoise hover:bg-white hover:text-dental-blue transition-all">
                <Link to="/appointment">
                  <Calendar className="w-5 h-5 mr-2" />
                  Jetzt Termin buchen
                </Link>
              </Button>
              <PhoneButton 
                size="lg"
                className="bg-white/10 text-white hover:bg-white hover:text-dental-blue border-white/30"
                buttonText="0351 2522709"
                showIcon={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vertrauen & Expertise */}
      <section className="py-16 bg-dental-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="w-16 h-16 bg-dental-turquoise rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-dental-blue mb-2">Über 500 Implantate</h3>
                <p className="text-dental-gray">Erfolgreich gesetzte Zahnimplantate sprechen für unsere Expertise</p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-dental-turquoise rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-dental-blue mb-2">15+ Jahre Erfahrung</h3>
                <p className="text-dental-gray">Dr. Worsch ist spezialisiert auf Implantologie und ästhetische Zahnmedizin</p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-dental-turquoise rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-dental-blue mb-2">3D-Planung</h3>
                <p className="text-dental-gray">Modernste Technologie für sichere und präzise Behandlung</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vorteile von Zahnimplantaten */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dental-blue mb-4">
                Die Vorteile von Zahnimplantaten in unserer Dresdner Praxis
              </h2>
              <p className="text-lg text-dental-gray max-w-3xl mx-auto">
                Zahnimplantate bieten Ihnen die modernste Lösung für festsitzenden Zahnersatz – natürlich, langlebig und komfortabel.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-dental-beige p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-dental-turquoise rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dental-blue mb-2">
                      Biokompatible Titan-Implantate
                    </h3>
                    <p className="text-dental-gray">
                      Wir verwenden ausschließlich hochwertige Titan-Zahnimplantate, die sich optimal in Ihren Kieferknochen integrieren und eine Lebensdauer von 20 Jahren und mehr erreichen können.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-dental-beige p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-dental-turquoise rounded-full flex items-center justify-center flex-shrink-0">
                    <Smile className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dental-blue mb-2">
                      Natürliches Kaugefühl & perfekte Ästhetik
                    </h3>
                    <p className="text-dental-gray">
                      Vollkeramikkronen sind von Ihren natürlichen Zähnen optisch nicht zu unterscheiden und bieten ein natürliches Kaugefühl ohne Druckstellen oder Wackeln.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-dental-beige p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-dental-turquoise rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dental-blue mb-2">
                      Schonung der Nachbarzähne
                    </h3>
                    <p className="text-dental-gray">
                      Anders als bei Brücken müssen keine gesunden Nachbarzähne beschliffen werden. Ihr natürlicher Zahnbestand bleibt vollständig erhalten.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-dental-beige p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-dental-turquoise rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dental-blue mb-2">
                      Knochenerhalt & Gesichtsästhetik
                    </h3>
                    <p className="text-dental-gray">
                      Zahnimplantate stimulieren den Kieferknochen wie natürliche Zahnwurzeln und verhindern Knochenabbau sowie das "eingefallene" Aussehen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Behandlungsablauf */}
      <section className="py-16 bg-dental-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dental-blue mb-4">
                Unser bewährter Implantologie-Prozess in Dresden
              </h2>
              <p className="text-lg text-dental-gray">
                Von der ersten Beratung bis zur finalen Versorgung – Ihr Weg zu neuen Zähnen in 6 Schritten
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "Erstberatung und 3D-Diagnostik",
                  description: "Ausführliche Beratung und millimetergenaue 3D-Planung mittels digitaler Volumentomographie (DVT) für sichere und vorhersagbare Behandlung.",
                  icon: Users
                },
                {
                  step: 2,
                  title: "Individuelle Behandlungsplanung",
                  description: "Detaillierter Behandlungsplan basierend auf 3D-Diagnostik mit transparenter Aufklärung über alle Schritte und Kosten.",
                  icon: CheckCircle
                },
                {
                  step: 3,
                  title: "Schonende Implantation",
                  description: "Minimalinvasiver Eingriff unter örtlicher Betäubung. Je nach Situation ist auch eine Sofortimplantation möglich.",
                  icon: Shield
                },
                {
                  step: 4,
                  title: "Einheilungsphase und Nachsorge",
                  description: "3-6 Monate Einheilung mit hochwertigem Provisorium und regelmäßigen Kontrollterminen für optimale Heilung.",
                  icon: Clock
                },
                {
                  step: 5,
                  title: "Prothetische Versorgung",
                  description: "Anfertigung Ihres individuellen Zahnersatzes aus hochwertiger Vollkeramik für ein natürlich schönes Ergebnis.",
                  icon: Star
                },
                {
                  step: 6,
                  title: "Langfristige Betreuung",
                  description: "Regelmäßige Recall-Termine und professionelle Implantatreinigungen für die Langlebigkeit Ihrer neuen Zähne.",
                  icon: Heart
                }
              ].map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.step} className="flex items-start gap-6 bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-dental-turquoise rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <IconComponent className="w-6 h-6 text-dental-turquoise" />
                        <h3 className="text-xl font-semibold text-dental-blue">{item.title}</h3>
                      </div>
                      <p className="text-dental-gray">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Preise */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dental-blue mb-4">
                Preise für Zahnimplantate in Dresden
              </h2>
              <p className="text-lg text-dental-gray">
                Transparente Kostenaufstellung ohne versteckte Zusatzkosten
              </p>
            </div>

            <div className="bg-dental-beige p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold text-dental-blue mb-6 text-center">Richtwerte für Zahnimplantate</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg text-center">
                  <h4 className="text-lg font-semibold text-dental-blue mb-2">Einzelzahnimplantat</h4>
                  <p className="text-2xl font-bold text-dental-turquoise mb-2">ab 1.800 €</p>
                  <p className="text-sm text-dental-gray">mit Vollkeramikkrone</p>
                </div>
                <div className="bg-white p-6 rounded-lg text-center">
                  <h4 className="text-lg font-semibold text-dental-blue mb-2">Implantatgetragene Brücke</h4>
                  <p className="text-2xl font-bold text-dental-turquoise mb-2">ab 4.500 €</p>
                  <p className="text-sm text-dental-gray">für 3 Zähne</p>
                </div>
                <div className="bg-white p-6 rounded-lg text-center">
                  <h4 className="text-lg font-semibold text-dental-blue mb-2">Vollständige Versorgung</h4>
                  <p className="text-2xl font-bold text-dental-turquoise mb-2">ab 12.000 €</p>
                  <p className="text-sm text-dental-gray">implantatgetragen</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-dental-beige p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-dental-blue mb-3">Finanzierungsmöglichkeiten</h4>
                <p className="text-dental-gray mb-3">Wir bieten flexible Finanzierungslösungen für Ihre Wunschbehandlung:</p>
                <ul className="text-dental-gray space-y-1">
                  <li>• Individuelle Ratenzahlungspläne</li>
                  <li>• 0%-Finanzierung über Partnerbanken</li>
                  <li>• Flexible Laufzeiten</li>
                </ul>
              </div>
              <div className="bg-dental-beige p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-dental-blue mb-3">Zuschüsse der Krankenkassen</h4>
                <p className="text-dental-gray mb-3">Reduzieren Sie Ihre Kosten durch:</p>
                <ul className="text-dental-gray space-y-1">
                  <li>• Befundbezogenen Festzuschuss</li>
                  <li>• Private Zusatzversicherungen</li>
                  <li>• Beihilfe für Beamte</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-dental-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dental-blue mb-4">
                Häufige Fragen zu Zahnimplantaten
              </h2>
              <p className="text-lg text-dental-gray">
                Antworten auf die wichtigsten Fragen rund um Ihre Implantat-Behandlung
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="bg-white rounded-lg mb-4 border-none">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-dental-blue hover:no-underline">
                  Sind Zahnimplantate schmerzhaft?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-dental-gray">
                  Die Implantation erfolgt unter örtlicher Betäubung und ist in der Regel schmerzfrei. Nach dem Eingriff können leichte Schwellungen und Beschwerden auftreten, die sich gut mit Schmerzmitteln behandeln lassen und nach wenigen Tagen abklingen.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg mb-4 border-none">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-dental-blue hover:no-underline">
                  Wie lange halten Zahnimplantate?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-dental-gray">
                  Bei guter Pflege und regelmäßigen Kontrollen können Zahnimplantate 20 Jahre und länger halten. Studien zeigen Erfolgsraten von über 95% nach 10 Jahren. Die Langlebigkeit hängt wesentlich von Ihrer Mundhygiene und regelmäßigen Prophylaxe ab.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg mb-4 border-none">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-dental-blue hover:no-underline">
                  Bin ich für Zahnimplantate geeignet?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-dental-gray">
                  Die meisten Patienten sind für Zahnimplantate geeignet. Wichtige Voraussetzungen sind ausreichend Kieferknochen, abgeschlossenes Kieferwachstum (ab ca. 18 Jahren) und eine gute Mundhygiene. Auch bei Knochenabbau können wir mit speziellen Knochenaufbau-Verfahren helfen.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg mb-4 border-none">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-dental-blue hover:no-underline">
                  Welche Kosten kommen auf mich zu?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-dental-gray">
                  Die Kosten variieren je nach Ausgangssituation. Ein Einzelimplantat mit Krone kostet ab 1.800 Euro. Ihre Krankenkasse gewährt einen Festzuschuss, private Zusatzversicherungen übernehmen oft den Großteil der Kosten. Wir erstellen Ihnen gerne einen individuellen Kostenvoranschlag.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-lg border-none">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-dental-blue hover:no-underline">
                  Was ist bei der Nachsorge zu beachten?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-dental-gray">
                  Regelmäßige Kontrollen und professionelle Implantatreinigungen sind entscheidend für die Langlebigkeit. Zusätzlich sollten Sie täglich eine gründliche Mundhygiene betreiben und auf das Rauchen verzichten, um Komplikationen zu vermeiden.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-dental-blue to-dental-turquoise text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Feste Zähne, neues Lebensgefühl – Vereinbaren Sie Ihren Beratungstermin!
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Träumen Sie von festsitzenden Zähnen, die sich anfühlen wie Ihre eigenen? Dr. med. dent. Thomas Worsch und sein erfahrenes Team in Dresden-Laubegast freuen sich darauf, Sie zu beraten und Ihnen zu einem neuen, selbstbewussten Lächeln zu verhelfen.
            </p>
            
            <div className="bg-white/10 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Ihre Vorteile bei der Zahnarztpraxis Worsch:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Über 500 erfolgreich gesetzte Implantate</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>3D-Planung für maximale Sicherheit</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Modernste Technologie und Materialien</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Transparente Kosten ohne versteckte Zusatzkosten</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Flexible Finanzierungsmöglichkeiten</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Spezialisierung auf Angstpatienten</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Kontaktieren Sie uns jetzt:</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-dental-turquoise hover:bg-white hover:text-dental-blue transition-all">
                  <Link to="/appointment">
                    <Calendar className="w-5 h-5 mr-2" />
                    Online Termin buchen
                  </Link>
                </Button>
                <PhoneButton 
                  size="lg"
                  className="bg-white/10 text-white hover:bg-white hover:text-dental-blue border-white/30"
                  buttonText="0351 2522709"
                  showIcon={true}
                />
              </div>
              <p className="text-sm opacity-80">
                📍 Österreicher Str. 38, 01279 Dresden-Laubegast | 🕒 Mo-Fr 7:30-18:00 Uhr
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceContentImplantologie;
