import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const HomepageFAQ = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Intensive Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 left-8 w-88 h-88 bg-dental-turquoise/50 rounded-full blur-[340px]"></div>
        <div className="absolute top-32 right-8 w-80 h-80 bg-dental-blue/45 rounded-full blur-[320px]"></div>
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-dental-turquoise/40 rounded-full blur-[360px]"></div>
        <div className="absolute bottom-8 right-8 w-72 h-72 bg-dental-blue/55 rounded-full blur-[300px]"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-dental-turquoise/35 rounded-full blur-[280px]"></div>
        <div className="absolute top-20 right-1/3 w-56 h-56 bg-dental-blue/40 rounded-full blur-[260px]"></div>
        <div className="absolute bottom-40 left-1/2 w-68 h-68 bg-dental-turquoise/45 rounded-full blur-[290px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Title */}
            <div className="animate-on-scroll">
              <p className="text-dental-turquoise text-sm md:text-base lg:text-lg font-medium mb-3 lg:mb-4">
                Wir sind für Sie da – Persönlich & Transparent
              </p>
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-dental-blue leading-tight">
                Ihre häufigsten Fragen an uns
              </h2>
              <p className="text-base lg:text-lg text-dental-gray mt-4 lg:mt-6">
                Wir möchten, dass Sie sich von Anfang an gut informiert und rundum wohlfühlen. Hier finden Sie Antworten auf einige der Fragen, die uns in Ihrer Zahnarztpraxis Worsch in Dresden-Laubegast am häufigsten gestellt werden.
              </p>
            </div>
            
            {/* Right Column - FAQ Accordion */}
            <div className="animate-on-scroll">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-base lg:text-lg font-normal text-dental-gray hover:text-dental-blue py-4 lg:py-6">
                    Was kostet eine ästhetische Behandlung?
                  </AccordionTrigger>
                  <AccordionContent className="text-dental-gray text-sm lg:text-base leading-relaxed pb-4 lg:pb-6">
                    Die Kosten variieren je nach Behandlung. Ein professionelles Bleaching beginnt ab 280€, Veneers ab 890€ pro Zahn. In unserem kostenlosen Beratungsgespräch in Dresden erstellen wir Ihnen einen transparenten Kostenvoranschlag. <Link to="/appointment" className="text-dental-turquoise hover:text-dental-blue underline">Vereinbaren Sie jetzt einen Termin</Link>.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-base lg:text-lg font-normal text-dental-gray hover:text-dental-blue py-4 lg:py-6">
                    Wie schnell bekomme ich einen Termin?
                  </AccordionTrigger>
                  <AccordionContent className="text-dental-gray text-sm lg:text-base leading-relaxed pb-4 lg:pb-6">
                    Online-Termine sind oft schon innerhalb weniger Tage verfügbar. Für Notfälle haben wir täglich Notfallzeiten reserviert. Buchen Sie bequem über <Link to="/appointment" className="text-dental-turquoise hover:text-dental-blue underline">Doctolib</Link> oder <Link to="/contact" className="text-dental-turquoise hover:text-dental-blue underline">rufen Sie uns in Laubegast an</Link>.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-base lg:text-lg font-normal text-dental-gray hover:text-dental-blue py-4 lg:py-6">
                    Für wen ist Invisalign geeignet?
                  </AccordionTrigger>
                  <AccordionContent className="text-dental-gray text-sm lg:text-base leading-relaxed pb-4 lg:pb-6">
                    Invisalign eignet sich für die meisten Zahnfehlstellungen bei Jugendlichen und Erwachsenen. In einem kostenlosen 3D-Scan prüfen wir, ob <Link to="/services/aesthetische-zahnheilkunde" className="text-dental-turquoise hover:text-dental-blue underline">Invisalign für Sie geeignet ist</Link> und zeigen Ihnen das Endergebnis vorab.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-base lg:text-lg font-normal text-dental-gray hover:text-dental-blue py-4 lg:py-6">
                    Wie lange hält ein professionelles Bleaching?
                  </AccordionTrigger>
                  <AccordionContent className="text-dental-gray text-sm lg:text-base leading-relaxed pb-4 lg:pb-6">
                    Bei guter Pflege bleiben Ihre Zähne 2-3 Jahre deutlich heller. Mit unserem Take-Home-Bleaching können Sie das Ergebnis jederzeit auffrischen. Wir beraten Sie gerne zur optimalen Nachsorge. Mehr über <Link to="/services/aesthetische-zahnheilkunde" className="text-dental-turquoise hover:text-dental-blue underline">professionelles Bleaching</Link>.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-base lg:text-lg font-normal text-dental-gray hover:text-dental-blue py-4 lg:py-6">
                    Was tun Sie für Angstpatienten?
                  </AccordionTrigger>
                  <AccordionContent className="text-dental-gray text-sm lg:text-base leading-relaxed pb-4 lg:pb-6">
                    Wir nehmen Ihre Ängste ernst! Ausführliche Aufklärung, sanfte Behandlungsmethoden und bei Bedarf Sedierung sorgen für eine entspannte Behandlung. Sprechen Sie uns einfach darauf an. Lernen Sie unser <Link to="/team" className="text-dental-turquoise hover:text-dental-blue underline">einfühlsames Team</Link> kennen.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-base lg:text-lg font-normal text-dental-gray hover:text-dental-blue py-4 lg:py-6">
                    Welche Garantien geben Sie?
                  </AccordionTrigger>
                  <AccordionContent className="text-dental-gray text-sm lg:text-base leading-relaxed pb-4 lg:pb-6">
                    Auf Füllungen geben wir 2 Jahre, auf Kronen und Veneers 5 Jahre Garantie. <Link to="/services/implantologie" className="text-dental-turquoise hover:text-dental-blue underline">Implantate sind sogar 10 Jahre garantiert</Link>. Ihre Investition in schöne Zähne ist bei uns bestens abgesichert. Erfahren Sie mehr über unsere <Link to="/services" className="text-dental-turquoise hover:text-dental-blue underline">Leistungen</Link>.
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
