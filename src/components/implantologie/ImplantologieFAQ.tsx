
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const ImplantologieFAQ = () => {
  const faqs = [
    {
      question: "Sind Zahnimplantate schmerzhaft?",
      answer: "Die Implantation erfolgt unter örtlicher Betäubung und ist in der Regel schmerzfrei. Nach dem Eingriff können leichte Schwellungen und Beschwerden auftreten, die sich gut mit Schmerzmitteln behandeln lassen. Die meisten Patienten sind überrascht, wie angenehm der Eingriff verläuft."
    },
    {
      question: "Wie lange halten Zahnimplantate?",
      answer: "Bei guter Pflege und regelmäßigen Kontrollen können Zahnimplantate 20 Jahre und länger halten. Studien zeigen Erfolgsraten von über 95% nach 10 Jahren. Mit der richtigen Mundhygiene und regelmäßigen Prophylaxe-Terminen können Implantate sogar ein Leben lang halten."
    },
    {
      question: "Bin ich für Zahnimplantate geeignet?",
      answer: "Die meisten Patienten sind für Zahnimplantate geeignet. Wichtig sind ausreichend Kieferknochen und eine gute Mundhygiene. Auch bei Knochenabbau können wir mit modernen Knochenaufbau-Verfahren helfen. In einem ausführlichen Beratungsgespräch prüfen wir Ihre individuelle Eignung."
    },
    {
      question: "Was kostet eine Implantat-Behandlung?",
      answer: "Die Kosten variieren je nach Ausgangssituation und gewählter Versorgung. Ein Einzelzahnimplantat mit Krone kostet ab 1.800 Euro. Sie erhalten von uns immer eine transparente Kostenaufstellung ohne versteckte Zusatzkosten. Auch Finanzierungsmöglichkeiten stehen zur Verfügung."
    },
    {
      question: "Wie lange dauert die gesamte Behandlung?",
      answer: "Von der ersten Beratung bis zur finalen Versorgung vergehen in der Regel 3-6 Monate. Dies hängt von der Einheilungszeit des Implantats ab. In manchen Fällen ist auch eine Sofortversorgung möglich. Den genauen Zeitplan besprechen wir individuell mit Ihnen."
    },
    {
      question: "Übernimmt die Krankenkasse die Kosten?",
      answer: "Gesetzliche Krankenkassen zahlen einen befundbezogenen Festzuschuss, der auch bei Implantaten gewährt wird. Private Zusatzversicherungen übernehmen oft einen größeren Anteil der Kosten. Wir unterstützen Sie gerne bei der Kostenplanung und Antragsstellung."
    }
  ];

  return (
    <section className="py-20 bg-dental-beige">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
          <h2 className="mb-6 text-dental-blue">Häufige Fragen zu Zahnimplantaten</h2>
          <p className="text-lg text-dental-gray">
            Antworten auf die wichtigsten Fragen rund um Ihre Implantat-Behandlung
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-on-scroll">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-white rounded-lg shadow-sm border-0 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-dental-blue hover:bg-dental-beige/50 hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-dental-gray leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ImplantologieFAQ;
