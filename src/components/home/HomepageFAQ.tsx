
import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const HomepageFAQ = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Title */}
            <div className="animate-on-scroll">
              <p className="text-dental-turquoise text-lg font-medium mb-4">
                Wir sind für Sie da
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-dental-blue leading-tight">
                Häufige Fragen
              </h2>
              <p className="text-lg text-dental-gray mt-6">
                Wir möchten, dass Sie sich gut informiert fühlen. Hier finden Sie Antworten auf einige der häufigsten Fragen, die uns in unserer Zahnarztpraxis in Dresden Laubegast gestellt werden.
              </p>
            </div>
            
            {/* Right Column - FAQ Accordion */}
            <div className="animate-on-scroll">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-lg font-normal text-dental-gray hover:text-dental-blue py-6">
                    Was macht die Zahnarztpraxis Worsch in Dresden besonders für junge Patienten und ästhetische Wünsche?
                  </AccordionTrigger>
                  <AccordionContent className="text-dental-gray text-base leading-relaxed pb-6">
                    Bei Zahnarzt Worsch in Dresden Laubegast verbinden wir modernste Zahnmedizin mit einem besonderen Fokus auf Ästhetik. Wir nutzen digitale Technologien wie 3D-Planung und CAD/CAM-Fertigung, bieten innovative Behandlungen wie <Link to="/services/aesthetische-zahnheilkunde" className="text-dental-turquoise hover:text-dental-blue underline">Veneers oder unsichtbare Zahnkorrekturen</Link> und legen großen Wert auf eine individuelle Beratung in entspannter Atmosphäre, um Ihr Wunschlächeln zu realisieren.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-lg font-normal text-dental-gray hover:text-dental-blue py-6">
                    Welche Behandlungen im Bereich ästhetische Zahnmedizin bieten Sie in Ihrer Dresdner Praxis an?
                  </AccordionTrigger>
                  <AccordionContent className="text-dental-gray text-base leading-relaxed pb-6">
                    Unser Spektrum der <Link to="/services/aesthetische-zahnheilkunde" className="text-dental-turquoise hover:text-dental-blue underline">ästhetischen Zahnmedizin in Dresden</Link> umfasst unter anderem professionelles Bleaching (Zahnaufhellung), hochwertige Keramik-Veneers, zahnfarbene Füllungen und Inlays, unsichtbare Zahnkorrekturen mit Alignern sowie komplette Smile Makeovers. Gerne beraten wir Sie individuell zu den besten Optionen für Ihr Lächeln.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-lg font-normal text-dental-gray hover:text-dental-blue py-6">
                    Ist eine Erstberatung für ästhetische Behandlungen in Ihrer Praxis in Dresden kostenlos?
                  </AccordionTrigger>
                  <AccordionContent className="text-dental-gray text-base leading-relaxed pb-6">
                    Wir bieten Ihnen gerne ein erstes unverbindliches Beratungsgespräch an, um Ihre Wünsche kennenzulernen und Ihnen die Möglichkeiten der modernen ästhetischen Zahnmedizin aufzuzeigen. Die Details zu eventuellen Kosten für eine umfassende Diagnostik und Planung besprechen wir transparent mit Ihnen im Vorfeld. <Link to="/appointment" className="text-dental-turquoise hover:text-dental-blue underline">Vereinbaren Sie gerne einen Termin</Link>.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-lg font-normal text-dental-gray hover:text-dental-blue py-6">
                    Wie modern ist die technische Ausstattung Ihrer Zahnarztpraxis in Dresden Laubegast?
                  </AccordionTrigger>
                  <AccordionContent className="text-dental-gray text-base leading-relaxed pb-6">
                    Unsere Zahnarztpraxis in Dresden Laubegast ist mit modernster Technologie ausgestattet. Dazu gehören digitales Röntgen (strahlungsarm), 3D-Diagnostik (DVT) für präzise <Link to="/services/implantologie" className="text-dental-turquoise hover:text-dental-blue underline">Implantatplanung</Link>, intraorale Kameras zur Visualisierung, CAD/CAM-Systeme für passgenauen <Link to="/services/zahnersatz" className="text-dental-turquoise hover:text-dental-blue underline">Zahnersatz</Link> und schonende Lasertechnologie für verschiedene Anwendungsbereiche.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-lg font-normal text-dental-gray hover:text-dental-blue py-6">
                    Wie kann ich einen Termin bei Zahnarzt Worsch in Dresden vereinbaren?
                  </AccordionTrigger>
                  <AccordionContent className="text-dental-gray text-base leading-relaxed pb-6">
                    Sie können Ihren Termin ganz bequem <Link to="/appointment" className="text-dental-turquoise hover:text-dental-blue underline">online über unser Buchungsportal</Link> buchen – 24/7. Alternativ erreichen Sie unser freundliches Team in Dresden Laubegast telefonisch während unserer Sprechzeiten. Weitere Informationen finden Sie auf unserer <Link to="/contact" className="text-dental-turquoise hover:text-dental-blue underline">Kontaktseite</Link>. Wir freuen uns auf Sie!
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageFAQ;
