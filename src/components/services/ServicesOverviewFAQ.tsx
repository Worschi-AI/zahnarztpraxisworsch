
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const ServicesOverviewFAQ = () => {
  const faqs = [
    {
      question: "Welche zahnmedizinischen Leistungen bietet die Zahnarztpraxis Worsch in Dresden an?",
      answer: (
        <>
          Wir bieten ein umfassendes Spektrum moderner Zahnmedizin in Dresden Laubegast. Unsere Schwerpunkte liegen auf{' '}
          <Link to="/services/aesthetische-zahnheilkunde" className="text-dental-turquoise hover:text-dental-blue underline">
            ästhetischer Zahnheilkunde
          </Link>{' '}
          (Veneers, Bleaching), hochwertiger{' '}
          <Link to="/services/implantologie" className="text-dental-turquoise hover:text-dental-blue underline">
            Implantologie
          </Link>{' '}
          und individuellem{' '}
          <Link to="/services/zahnersatz" className="text-dental-turquoise hover:text-dental-blue underline">
            Zahnersatz
          </Link>. Darüber hinaus umfasst unser Angebot{' '}
          <Link to="/services/prophylaxe" className="text-dental-turquoise hover:text-dental-blue underline">
            Prophylaxe
          </Link>,{' '}
          <Link to="/services/zahnerhaltung" className="text-dental-turquoise hover:text-dental-blue underline">
            Zahnerhaltung
          </Link>,{' '}
          <Link to="/services/parodontologie" className="text-dental-turquoise hover:text-dental-blue underline">
            Parodontologie
          </Link>,{' '}
          <Link to="/services/kinderzahnheilkunde" className="text-dental-turquoise hover:text-dental-blue underline">
            Kinderzahnheilkunde
          </Link>{' '}
          und mehr. Entdecken Sie alle unsere Leistungen auf dieser Seite.
        </>
      )
    },
    {
      question: "Ich interessiere mich für eine ästhetische Zahnbehandlung. Wie finde ich heraus, welche für mich geeignet ist?",
      answer: (
        <>
          Der beste Weg ist ein persönliches Beratungsgespräch in unserer Praxis in Dresden. Wir analysieren Ihre individuelle Situation, besprechen Ihre Wünsche und zeigen Ihnen die verschiedenen Möglichkeiten der ästhetischen Zahnmedizin auf, von Bleaching über Veneers bis hin zu unsichtbaren Zahnkorrekturen. Vereinbaren Sie gerne einen{' '}
          <Link to="/appointment" className="text-dental-turquoise hover:text-dental-blue underline">
            Beratungstermin
          </Link>.
        </>
      )
    },
    {
      question: "Sind die Behandlungen in der Zahnarztpraxis Worsch schmerzarm?",
      answer: "Ja, wir legen größten Wert auf eine möglichst schmerzarme und schonende Behandlung. Wir nutzen moderne Anästhesieverfahren und Technologien wie Laser-Zahnheilkunde, um Ihren Besuch bei uns in Dresden so angenehm wie möglich zu gestalten. Bei Bedenken oder Ängsten sprechen Sie uns bitte jederzeit an."
    },
    {
      question: "Was kosten die verschiedenen Zahnbehandlungen in Ihrer Dresdner Praxis?",
      answer: "Die Kosten für zahnmedizinische Behandlungen sind individuell und hängen von der Art und dem Umfang der notwendigen Maßnahmen ab. Nach einer genauen Untersuchung erstellen wir Ihnen einen transparenten Heil- und Kostenplan. Für viele Leistungen gibt es zudem Festzuschüsse von den gesetzlichen Krankenkassen. Wir beraten Sie gerne auch zu Finanzierungsmöglichkeiten."
    },
    {
      question: "Wie kann ich mehr Details zu einer bestimmten Leistung erfahren?",
      answer: "Auf dieser Seite finden Sie eine Übersicht unserer Hauptleistungsbereiche. Für detaillierte Informationen zu einzelnen Behandlungen wie Implantologie, Zahnersatz oder Prophylaxe klicken Sie bitte auf den jeweiligen \"Mehr erfahren\" oder \"Details ansehen\" Button. Natürlich stehen wir Ihnen auch gerne für ein persönliches Gespräch in unserer Praxis in Dresden Laubegast zur Verfügung."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Title */}
            <div className="animate-on-scroll">
              <p className="text-dental-turquoise text-lg font-medium mb-4">
                Fragen zu unseren Leistungen
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-dental-blue leading-tight">
                Fragen zu unseren Zahnbehandlungen in Dresden? Wir geben Antworten!
              </h2>
              <p className="text-lg text-dental-gray mt-6">
                Hier finden Sie Antworten auf häufig gestellte Fragen zu unserem breiten Leistungsspektrum in der Zahnarztpraxis Worsch in Dresden Laubegast.
              </p>
            </div>
            
            {/* Right Column - FAQ Accordion */}
            <div className="animate-on-scroll">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                    <AccordionTrigger className="text-left text-lg font-normal text-dental-gray hover:text-dental-blue py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-dental-gray text-base leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverviewFAQ;
