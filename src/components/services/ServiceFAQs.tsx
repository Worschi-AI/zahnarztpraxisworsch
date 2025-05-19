
import React from 'react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFAQsProps {
  serviceId?: string;
  faqs?: FAQ[];
}

const ServiceFAQs: React.FC<ServiceFAQsProps> = ({ serviceId, faqs }) => {
  const isImplantologiePage = serviceId === 'implantologie';
  const isAestheticPage = serviceId === 'aesthetische-zahnheilkunde';

  // Return null if no FAQs and not a special page
  if (!faqs && !isImplantologiePage && !isAestheticPage) {
    return null;
  }

  return (
    <div className="animate-on-scroll mb-12">
      {isImplantologiePage && (
        <>
          <h3 className="text-2xl font-medium mb-6 text-dental-blue">Häufig gestellte Fragen zu Zahnimplantaten</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq-1">
              <AccordionTrigger className="text-left text-lg font-medium">
                Sind Zahnimplantate schmerzhaft?
              </AccordionTrigger>
              <AccordionContent className="text-dental-gray">
                Die Implantation erfolgt unter lokaler Betäubung und ist daher schmerzfrei. Nach dem Eingriff kann es zu leichten Schwellungen und Beschwerden kommen, die aber gut mit Schmerzmitteln behandelbar sind. In der Regel berichten unsere Patienten in Dresden von deutlich weniger Beschwerden als erwartet.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-2">
              <AccordionTrigger className="text-left text-lg font-medium">
                Wie lange halten Zahnimplantate?
              </AccordionTrigger>
              <AccordionContent className="text-dental-gray">
                Bei guter Mundhygiene und regelmäßigen Kontrollen können Zahnimplantate ein Leben lang halten. Die wissenschaftliche Literatur zeigt Erfolgsraten von über 95% nach 10 Jahren. Entscheidend für die Langlebigkeit sind die regelmäßige professionelle Reinigung und Ihre tägliche Mundhygiene.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-3">
              <AccordionTrigger className="text-left text-lg font-medium">
                Welche Kosten kommen auf mich zu?
              </AccordionTrigger>
              <AccordionContent className="text-dental-gray">
                Die Kosten für Zahnimplantate in Dresden variieren je nach Anzahl der Implantate und Art des Zahnersatzes. Gesetzliche Krankenkassen übernehmen einen Festzuschuss für den Zahnersatz. In unserer Praxis erstellen wir Ihnen einen transparenten Kostenplan und beraten Sie auch zu Finanzierungsmöglichkeiten.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-4">
              <AccordionTrigger className="text-left text-lg font-medium">
                Wer ist für Zahnimplantate geeignet?
              </AccordionTrigger>
              <AccordionContent className="text-dental-gray">
                Grundsätzlich kommen Implantate für die meisten erwachsenen Patienten in Frage. Wichtig ist ein ausreichendes Knochenangebot oder die Möglichkeit eines Knochenaufbaus. In einem persönlichen Beratungsgespräch prüfen wir Ihre individuelle Situation und besprechen die für Sie optimale Lösung.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </>
      )}

      {isAestheticPage && (
        <>
          <h3 className="text-2xl font-medium mb-6 text-dental-blue">Häufig gestellte Fragen zur ästhetischen Zahnheilkunde</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq-1">
              <AccordionTrigger className="text-left text-lg font-medium">
                Wie lange halten Veneers?
              </AccordionTrigger>
              <AccordionContent className="text-dental-gray">
                Hochwertige Keramikveneers haben eine durchschnittliche Haltbarkeit von 10-15 Jahren, bei guter Pflege können sie sogar deutlich länger halten. Die exakte Lebensdauer hängt von verschiedenen Faktoren ab, wie Ihrer Mundhygiene, Ihren Essgewohnheiten und ob Sie beispielsweise unter Zähneknirschen leiden.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-2">
              <AccordionTrigger className="text-left text-lg font-medium">
                Ist das Bleaching schädlich für meine Zähne?
              </AccordionTrigger>
              <AccordionContent className="text-dental-gray">
                Ein professionelles Bleaching unter zahnärztlicher Aufsicht ist für gesunde Zähne unbedenklich. Wir verwenden moderne Aufhellungssysteme mit pH-neutralen Gelen, die den Zahnschmelz nicht angreifen. Vor jeder Behandlung prüfen wir den Zustand Ihrer Zähne und empfehlen die für Sie geeignete Methode und Intensität.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-3">
              <AccordionTrigger className="text-left text-lg font-medium">
                Übernimmt die Krankenkasse die Kosten für ästhetische Behandlungen?
              </AccordionTrigger>
              <AccordionContent className="text-dental-gray">
                Da es sich bei ästhetischen Behandlungen in der Regel um Wunschleistungen handelt, werden die Kosten von den gesetzlichen Krankenkassen nicht übernommen. Private Versicherungen erstatten je nach Tarif einen Teil oder die gesamten Kosten. Wir erstellen Ihnen vorab einen detaillierten Kostenplan und beraten Sie gerne zu Finanzierungsmöglichkeiten.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-4">
              <AccordionTrigger className="text-left text-lg font-medium">
                Wie kann ich vorab sehen, wie mein neues Lächeln aussehen wird?
              </AccordionTrigger>
              <AccordionContent className="text-dental-gray">
                Mit unserer digitalen Smile-Design-Technologie können wir Ihnen bereits vor Behandlungsbeginn eine Vorschau Ihres neuen Lächelns zeigen. Bei Veneers erstellen wir zudem ein Wax-up (Wachsmodell) und ein Mock-up, das Sie probeweise im Mund tragen können, um das Ergebnis zu visualisieren und bei Bedarf anzupassen.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </>
      )}

      {!isImplantologiePage && !isAestheticPage && faqs && faqs.length > 0 && (
        <>
          <h3 className="text-2xl font-medium mb-6 text-dental-blue">Häufig gestellte Fragen</h3>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-dental-gray">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </>
      )}
    </div>
  );
};

export default ServiceFAQs;
