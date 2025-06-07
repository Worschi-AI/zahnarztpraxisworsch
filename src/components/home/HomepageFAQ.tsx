
import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const HomepageFAQ = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Dezente Eck-Dekorationen */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-36 h-36 bg-dental-turquoise/20 rounded-full blur-[75px]"></div>
        <div className="absolute top-0 right-0 w-28 h-28 bg-dental-blue/18 rounded-full blur-[60px]"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-dental-turquoise/15 rounded-full blur-[65px]"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-dental-blue/22 rounded-full blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 lg:mb-12 animate-on-scroll">
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-dental-blue mb-4 lg:mb-6">
              Wir sind für Sie da – Persönlich & Transparent
            </h2>
            <p className="text-base lg:text-lg text-dental-gray leading-relaxed">
              Als Ihr vertrauensvoller Zahnarzt in Dresden-Laubegast informieren wir Sie transparent über alle Behandlungen. Hier finden Sie Antworten auf häufige Patientenfragen zu Kosten, Terminen und Behandlungsmöglichkeiten.
            </p>
          </div>

          <div className="animate-on-scroll">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-gray-200">
                <AccordionTrigger className="text-left text-base lg:text-lg font-normal text-dental-gray hover:text-dental-blue py-4 lg:py-6">
                  Was kostet eine ästhetische Behandlung?
                </AccordionTrigger>
                <AccordionContent className="text-dental-gray text-sm lg:text-base leading-relaxed pb-4 lg:pb-6">
                  Die Kosten variieren je nach Behandlung: Bleaching ab 300€, Veneers ab 800€ pro Zahn, Invisalign ab 3.500€. Wir erstellen Ihnen gerne einen detaillierten Kostenvoranschlag und bieten Finanzierungsmöglichkeiten.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b border-gray-200">
                <AccordionTrigger className="text-left text-base lg:text-lg font-normal text-dental-gray hover:text-dental-blue py-4 lg:py-6">
                  Wie schnell bekomme ich einen Termin?
                </AccordionTrigger>
                <AccordionContent className="text-dental-gray text-sm lg:text-base leading-relaxed pb-4 lg:pb-6">
                  Ersttermine erhalten Sie meist innerhalb von 1-2 Wochen. Für Notfälle haben wir täglich Termine frei. Buchen Sie bequem online über <Link to="/appointment" className="text-dental-turquoise hover:text-dental-blue underline">Doctolib</Link> oder rufen Sie uns an.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b border-gray-200">
                <AccordionTrigger className="text-left text-base lg:text-lg font-normal text-dental-gray hover:text-dental-blue py-4 lg:py-6">
                  Für wen ist Invisalign geeignet?
                </AccordionTrigger>
                <AccordionContent className="text-dental-gray text-sm lg:text-base leading-relaxed pb-4 lg:pb-6">
                  Invisalign eignet sich für die meisten Zahnfehlstellungen bei Jugendlichen und Erwachsenen. Als zertifizierte Invisalign-Anwender in Dresden beraten wir Sie gerne über Ihre Möglichkeiten.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b border-gray-200">
                <AccordionTrigger className="text-left text-base lg:text-lg font-normal text-dental-gray hover:text-dental-blue py-4 lg:py-6">
                  Wie lange hält ein professionelles Bleaching?
                </AccordionTrigger>
                <AccordionContent className="text-dental-gray text-sm lg:text-base leading-relaxed pb-4 lg:pb-6">
                  Ein professionelles Bleaching in unserer Praxis hält 2-3 Jahre. Mit der richtigen Nachpflege und gelegentlichen Auffrischungen können Sie das Ergebnis noch länger erhalten.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-b border-gray-200">
                <AccordionTrigger className="text-left text-base lg:text-lg font-normal text-dental-gray hover:text-dental-blue py-4 lg:py-6">
                  Was tun Sie für Angstpatienten?
                </AccordionTrigger>
                <AccordionContent className="text-dental-gray text-sm lg:text-base leading-relaxed pb-4 lg:pb-6">
                  Wir sind speziell geschult im Umgang mit Angstpatienten. Einfühlsame Beratung, schmerzarme Behandlungsmethoden und ausreichend Zeit schaffen Vertrauen.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-b border-gray-200">
                <AccordionTrigger className="text-left text-base lg:text-lg font-normal text-dental-gray hover:text-dental-blue py-4 lg:py-6">
                  Welche Garantien geben Sie?
                </AccordionTrigger>
                <AccordionContent className="text-dental-gray text-sm lg:text-base leading-relaxed pb-4 lg:pb-6">
                  Auf Implantate gewähren wir 5 Jahre Garantie, auf Veneers und Kronen 2 Jahre. Ihr Vertrauen ist uns wichtig.
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
