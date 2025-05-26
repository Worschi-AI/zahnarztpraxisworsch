
import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const HomepageFAQ = () => {
  return (
    <section className="py-20 bg-dental-beige">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="mb-4 text-dental-blue">Häufige Fragen an Ihren Zahnarzt in Dresden – Praxis Worsch</h2>
            <p className="text-lg text-dental-gray">
              Wir möchten, dass Sie sich gut informiert fühlen. Hier finden Sie Antworten auf einige der häufigsten Fragen, die uns in unserer Zahnarztpraxis in Dresden Laubegast gestellt werden.
            </p>
          </div>
          
          <div className="animate-on-scroll">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg border border-dental-beige shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left text-dental-blue hover:text-dental-turquoise text-base font-medium">
                  Was macht die Zahnarztpraxis Worsch in Dresden besonders für junge Patienten und ästhetische Wünsche?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-dental-gray">
                  Bei Zahnarzt Worsch in Dresden Laubegast verbinden wir modernste Zahnmedizin mit einem besonderen Fokus auf Ästhetik. Wir nutzen digitale Technologien wie 3D-Planung und CAD/CAM-Fertigung, bieten innovative Behandlungen wie <Link to="/services/aesthetische-zahnheilkunde" className="text-dental-turquoise hover:text-dental-blue underline">Veneers oder unsichtbare Zahnkorrekturen</Link> und legen großen Wert auf eine individuelle Beratung in entspannter Atmosphäre, um Ihr Wunschlächeln zu realisieren.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg border border-dental-beige shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left text-dental-blue hover:text-dental-turquoise text-base font-medium">
                  Welche Behandlungen im Bereich ästhetische Zahnmedizin bieten Sie in Ihrer Dresdner Praxis an?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-dental-gray">
                  Unser Spektrum der <Link to="/services/aesthetische-zahnheilkunde" className="text-dental-turquoise hover:text-dental-blue underline">ästhetischen Zahnmedizin in Dresden</Link> umfasst unter anderem professionelles Bleaching (Zahnaufhellung), hochwertige Keramik-Veneers, zahnfarbene Füllungen und Inlays, unsichtbare Zahnkorrekturen mit Alignern sowie komplette Smile Makeovers. Gerne beraten wir Sie individuell zu den besten Optionen für Ihr Lächeln.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg border border-dental-beige shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left text-dental-blue hover:text-dental-turquoise text-base font-medium">
                  Ist eine Erstberatung für ästhetische Behandlungen in Ihrer Praxis in Dresden kostenlos?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-dental-gray">
                  Wir bieten Ihnen gerne ein erstes unverbindliches Beratungsgespräch an, um Ihre Wünsche kennenzulernen und Ihnen die Möglichkeiten der modernen ästhetischen Zahnmedizin aufzuzeigen. Die Details zu eventuellen Kosten für eine umfassende Diagnostik und Planung besprechen wir transparent mit Ihnen im Vorfeld. <Link to="/appointment" className="text-dental-turquoise hover:text-dental-blue underline">Vereinbaren Sie gerne einen Termin</Link>.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg border border-dental-beige shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left text-dental-blue hover:text-dental-turquoise text-base font-medium">
                  Wie modern ist die technische Ausstattung Ihrer Zahnarztpraxis in Dresden Laubegast?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-dental-gray">
                  Unsere Zahnarztpraxis in Dresden Laubegast ist mit modernster Technologie ausgestattet. Dazu gehören digitales Röntgen (strahlungsarm), 3D-Diagnostik (DVT) für präzise <Link to="/services/implantologie" className="text-dental-turquoise hover:text-dental-blue underline">Implantatplanung</Link>, intraorale Kameras zur Visualisierung, CAD/CAM-Systeme für passgenauen <Link to="/services/zahnersatz" className="text-dental-turquoise hover:text-dental-blue underline">Zahnersatz</Link> und schonende Lasertechnologie für verschiedene Anwendungsbereiche.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-lg border border-dental-beige shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left text-dental-blue hover:text-dental-turquoise text-base font-medium">
                  Wie kann ich einen Termin bei Zahnarzt Worsch in Dresden vereinbaren?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-dental-gray">
                  Sie können Ihren Termin ganz bequem <Link to="/appointment" className="text-dental-turquoise hover:text-dental-blue underline">online über unser Buchungsportal</Link> buchen – 24/7. Alternativ erreichen Sie unser freundliches Team in Dresden Laubegast telefonisch während unserer Sprechzeiten. Weitere Informationen finden Sie auf unserer <Link to="/contact" className="text-dental-turquoise hover:text-dental-blue underline">Kontaktseite</Link>. Wir freuen uns auf Sie!
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageFAQ;
