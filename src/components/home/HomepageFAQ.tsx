
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
                Wir sind für Sie da – Persönlich & Transparent
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-dental-blue leading-tight">
                Ihre häufigsten Fragen an uns
              </h2>
              <p className="text-lg text-dental-gray mt-6">
                Wir möchten, dass Sie sich von Anfang an gut informiert und rundum wohlfühlen. Hier finden Sie Antworten auf einige der Fragen, die uns in Ihrer Zahnarztpraxis Worsch in Dresden-Laubegast am häufigsten gestellt werden.
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
                    In der Zahnarztpraxis Worsch in Dresden-Laubegast liegt unser Fokus darauf, modernste Zahnmedizin mit herausragender Ästhetik zu verbinden, um Ihr individuelles Wunschlächeln zu realisieren. Wir nutzen hierfür digitale Technologien wie präzise 3D-Planung und CAD/CAM-Fertigung und bieten innovative Behandlungen wie <Link to="/services/aesthetische-zahnheilkunde" className="text-dental-turquoise hover:text-dental-blue underline">Veneers oder unsichtbare Zahnkorrekturen</Link>. Besonderen Wert legen wir dabei auf eine entspannte Atmosphäre und eine umfassende, persönliche Beratung, bei der Ihre Wünsche im Mittelpunkt stehen.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-lg font-normal text-dental-gray hover:text-dental-blue py-6">
                    Welche Behandlungen im Bereich ästhetische Zahnmedizin bieten Sie in Ihrer Dresdner Praxis an?
                  </AccordionTrigger>
                  <AccordionContent className="text-dental-gray text-base leading-relaxed pb-6">
                    Unser umfassendes Spektrum der <Link to="/services/aesthetische-zahnheilkunde" className="text-dental-turquoise hover:text-dental-blue underline">ästhetischen Zahnmedizin in Dresden</Link> bietet Ihnen zahlreiche Möglichkeiten für Ihr perfektes Lächeln. Dazu gehören unter anderem schonendes, professionelles Bleaching (Zahnaufhellung), langlebige Keramik-Veneers, ästhetische zahnfarbene Füllungen und Inlays, diskrete Zahnkorrekturen mit unsichtbaren Alignern sowie komplette Smile Makeovers. Wir beraten Sie sehr gerne individuell, um die optimalen Optionen für Ihr strahlendes Lächeln zu finden.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-lg font-normal text-dental-gray hover:text-dental-blue py-6">
                    Ist eine Erstberatung für ästhetische Behandlungen in Ihrer Praxis in Dresden kostenlos?
                  </AccordionTrigger>
                  <AccordionContent className="text-dental-gray text-base leading-relaxed pb-6">
                    Ja, wir bieten Ihnen sehr gerne ein erstes, unverbindliches Beratungsgespräch für ästhetische Behandlungen an. Hier lernen wir Ihre individuellen Wünsche kennen und zeigen Ihnen transparent alle Möglichkeiten der modernen ästhetischen Zahnmedizin auf. Sollten für eine weiterführende Diagnostik oder Planung Kosten entstehen, besprechen wir diese selbstverständlich im Vorfeld detailliert mit Ihnen. Wir laden Sie herzlich ein, <Link to="/appointment" className="text-dental-turquoise hover:text-dental-blue underline">einen Termin zu vereinbaren</Link>.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-lg font-normal text-dental-gray hover:text-dental-blue py-6">
                    Wie modern ist die technische Ausstattung Ihrer Zahnarztpraxis in Dresden Laubegast?
                  </AccordionTrigger>
                  <AccordionContent className="text-dental-gray text-base leading-relaxed pb-6">
                    Unsere Zahnarztpraxis in Dresden-Laubegast ist auf dem neuesten Stand der Technik und mit modernster Technologie ausgestattet, um Ihnen Behandlungen auf höchstem Niveau zu ermöglichen. Dazu zählen digitales Röntgen (besonders strahlungsarm), hochpräzise 3D-Diagnostik (DVT) für eine exakte <Link to="/services/implantologie" className="text-dental-turquoise hover:text-dental-blue underline">Implantatplanung</Link>, intraorale Kameras zur transparenten Visualisierung während der Behandlung, innovative CAD/CAM-Systeme für passgenauen <Link to="/services/zahnersatz" className="text-dental-turquoise hover:text-dental-blue underline">Zahnersatz</Link> und schonende Lasertechnologie für vielfältige, angenehme Anwendungsbereiche.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-lg font-normal text-dental-gray hover:text-dental-blue py-6">
                    Wie kann ich einen Termin bei Zahnarzt Worsch in Dresden vereinbaren?
                  </AccordionTrigger>
                  <AccordionContent className="text-dental-gray text-base leading-relaxed pb-6">
                    Ihren persönlichen Wunschtermin können Sie ganz bequem und rund um die Uhr (24/7) über unser <Link to="/appointment" className="text-dental-turquoise hover:text-dental-blue underline">Online-Buchungsportal</Link> vereinbaren. Falls Sie den persönlichen Kontakt bevorzugen, steht Ihnen unser freundliches Team in Dresden-Laubegast während der Sprechzeiten gerne telefonisch zur Verfügung. Alle weiteren Informationen finden Sie übersichtlich auf unserer <Link to="/contact" className="text-dental-turquoise hover:text-dental-blue underline">Kontaktseite</Link>. Wir freuen uns sehr darauf, Sie bald persönlich kennenzulernen!
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
