
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const HomepageFAQ = () => {
  const faqs = [
    {
      question: "Wie kann ich einen Termin vereinbaren?",
      answer: "Sie können ganz einfach online über Doctolib einen Termin buchen oder uns telefonisch unter 0351 31406060 erreichen. Unsere Sprechzeiten sind Mo-Do 8:00-18:00 und Fr 8:00-15:00 Uhr."
    },
    {
      question: "Welche Leistungen bieten Sie als Zahnarzt in Dresden-Laubegast an?",
      answer: "Unser Leistungsspektrum umfasst die komplette moderne Zahnheilkunde: von Prophylaxe und Zahnerhaltung über ästhetische Behandlungen wie Veneers und Bleaching bis hin zu hochwertigen Implantaten und Invisalign-Behandlungen."
    },
    {
      question: "Übernimmt die Krankenkasse die Kosten für ästhetische Behandlungen?",
      answer: "Die gesetzlichen Krankenkassen übernehmen in der Regel nur medizinisch notwendige Behandlungen. Für ästhetische Leistungen wie Bleaching oder Veneers erstellen wir Ihnen gerne einen individuellen Kostenvoranschlag und beraten Sie über Finanzierungsmöglichkeiten."
    },
    {
      question: "Wie läuft eine Implantation in Ihrer Praxis ab?",
      answer: "Jede Implantation beginnt mit einer ausführlichen 3D-Diagnostik und Beratung. Der Eingriff erfolgt schonend unter örtlicher Betäubung. Nach der Einheilphase von 3-6 Monaten wird die endgültige Krone aufgesetzt. Wir begleiten Sie durch den gesamten Prozess."
    },
    {
      question: "Bieten Sie auch Behandlungen für Angstpatienten an?",
      answer: "Selbstverständlich! Wir nehmen uns besonders viel Zeit für Angstpatienten und bieten verschiedene Entspannungsverfahren an. Auf Wunsch können Behandlungen auch unter Sedierung durchgeführt werden. Sprechen Sie uns einfach darauf an."
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 lg:mb-12 animate-on-scroll">
            <div className="mb-4 lg:mb-6">
              <span className="text-dental-turquoise font-medium text-sm md:text-base">Häufige Fragen</span>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-dental-blue mb-4 lg:mb-6 leading-tight">
              Als Ihr vertrauensvoller Zahnarzt in Dresden-Laubegast informieren wir Sie transparent über alle Behandlungen
            </h2>
            <p className="text-base lg:text-lg text-dental-gray leading-relaxed">
              Hier finden Sie Antworten auf häufige Patientenfragen zu Kosten, Terminen und Behandlungsmöglichkeiten.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="animate-on-scroll" style={{ animationDelay: '200ms' }}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-dental-beige rounded-2xl border-none px-4 lg:px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4 lg:py-6">
                    <div className="flex items-start gap-3 lg:gap-4">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-dental-turquoise/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <HelpCircle className="text-dental-turquoise" size={16} />
                      </div>
                      <span className="text-base lg:text-lg font-semibold text-dental-blue leading-tight">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 lg:pb-6">
                    <div className="ml-11 lg:ml-14">
                      <p className="text-sm lg:text-base text-dental-gray leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageFAQ;
