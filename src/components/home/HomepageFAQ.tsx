
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
                    Was kostet eine ästhetische Behandlung?
                  </AccordionTrigger>
                  <AccordionContent className="text-dental-gray text-base leading-relaxed pb-6">
                    Die Kosten variieren je nach Behandlung. Ein professionelles Bleaching beginnt ab 280€, Veneers ab 890€ pro Zahn. In unserem kostenlosen Beratungsgespräch in Dresden erstellen wir Ihnen einen transparenten Kostenvoranschlag. <Link to="/appointment" className="text-dental-turquoise hover:text-dental-blue underline">Vereinbaren Sie jetzt einen Termin</Link>.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-lg font-normal text-dental-gray hover:text-dental-blue py-6">
                    Wie schnell bekomme ich einen Termin?
                  </AccordionTrigger>
                  <AccordionContent className="text-dental-gray text-base leading-relaxed pb-6">
                    Online-Termine sind oft schon innerhalb weniger Tage verfügbar. Für Notfälle haben wir täglich Notfallzeiten reserviert. Buchen Sie bequem über <Link to="/appointment" className="text-dental-turquoise hover:text-dental-blue underline">Doctolib</Link> oder <Link to="/contact" className="text-dental-turquoise hover:text-dental-blue underline">rufen Sie uns in Laubegast an</Link>.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-lg font-normal text-dental-gray hover:text-dental-blue py-6">
                    Für wen ist Invisalign geeignet?
                  </AccordionTrigger>
                  <AccordionContent className="text-dental-gray text-base leading-relaxed pb-6">
                    Invisalign eignet sich für die meisten Zahnfehlstellungen bei Jugendlichen und Erwachsenen. In einem kostenlosen 3D-Scan prüfen wir, ob <Link to="/services/aesthetische-zahnheilkunde" className="text-dental-turquoise hover:text-dental-blue underline">Invisalign für Sie geeignet ist</Link> und zeigen Ihnen das Endergebnis vorab.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-lg font-normal text-dental-gray hover:text-dental-blue py-6">
                    Wie lange hält ein professionelles Bleaching?
                  </AccordionTrigger>
                  <AccordionContent className="text-dental-gray text-base leading-relaxed pb-6">
                    Bei guter Pflege bleiben Ihre Zähne 2-3 Jahre deutlich heller. Mit unserem Take-Home-Bleaching können Sie das Ergebnis jederzeit auffrischen. Wir beraten Sie gerne zur optimalen Nachsorge. Mehr über <Link to="/services/aesthetische-zahnheilkunde" className="text-dental-turquoise hover:text-dental-blue underline">professionelles Bleaching</Link>.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-lg font-normal text-dental-gray hover:text-dental-blue py-6">
                    Was tun Sie für Angstpatienten?
                  </AccordionTrigger>
                  <AccordionContent className="text-dental-gray text-base leading-relaxed pb-6">
                    Wir nehmen Ihre Ängste ernst! Ausführliche Aufklärung, sanfte Behandlungsmethoden und bei Bedarf Sedierung sorgen für eine entspannte Behandlung. Sprechen Sie uns einfach darauf an. Lernen Sie unser <Link to="/team" className="text-dental-turquoise hover:text-dental-blue underline">einfühlsames Team</Link> kennen.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border-b border-gray-200">
                  <AccordionTrigger className="text-left text-lg font-normal text-dental-gray hover:text-dental-blue py-6">
                    Welche Garantien geben Sie?
                  </AccordionTrigger>
                  <AccordionContent className="text-dental-gray text-base leading-relaxed pb-6">
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
