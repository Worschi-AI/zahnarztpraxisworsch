
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const AboutFAQ = () => {
  const faqs = [
    {
      question: "Was ist die Philosophie der Zahnarztpraxis Worsch in Dresden?",
      answer: "Unsere Philosophie stellt Sie als Patient in den Mittelpunkt. Wir kombinieren moderne, innovative Zahnmedizin mit einem starken Fokus auf Ästhetik und individuelle Betreuung. Unser Ziel ist es, Ihnen nicht nur gesunde Zähne, sondern auch ein Lächeln zu schenken, mit dem Sie sich rundum wohlfühlen. Transparenz, Qualität und eine angenehme Atmosphäre sind uns dabei besonders wichtig."
    },
    {
      question: "Ist die Zahnarztpraxis Worsch in Dresden Laubegast modern ausgestattet?",
      answer: "Ja, wir legen großen Wert auf eine moderne Praxisausstattung. Dazu gehören digitale Röntgentechnologie (DVT), intraorale Kameras, CAD/CAM-Systeme für Zahnersatz, Lasertechnologie und digitale Abformung. Diese Technologien ermöglichen präzisere Diagnosen, schonendere Behandlungen und oft schnellere Ergebnisse."
    },
    {
      question: "Wie gehen Sie in Ihrer Praxis mit Angstpatienten um?",
      answer: (
        <>
          Wir haben viel Erfahrung im Umgang mit Angstpatienten. Unser{' '}
          <Link to="/team" className="text-dental-turquoise hover:text-dental-blue underline">
            Team in Dresden
          </Link>{' '}
          nimmt sich Zeit, hört Ihnen zu und erklärt jeden Schritt behutsam. Wir schaffen eine ruhige, entspannte Atmosphäre und bieten bei Bedarf auch Behandlungsmöglichkeiten wie Sedierung (Dämmerschlaf) an, um Ihnen den Besuch so angenehm wie möglich zu gestalten.
        </>
      )
    },
    {
      question: "Legt die Zahnarztpraxis Worsch Wert auf Fortbildungen?",
      answer: (
        <>
          Absolut! Kontinuierliche Fortbildung ist für unser gesamtes Team in Dresden selbstverständlich. So stellen wir sicher, dass wir Ihnen stets Zahnmedizin auf dem neuesten wissenschaftlichen Stand und mit den modernsten Techniken anbieten können, insbesondere in unseren Schwerpunktbereichen wie der{' '}
          <Link to="/services/aesthetische-zahnheilkunde" className="text-dental-turquoise hover:text-dental-blue underline">
            ästhetischen Zahnmedizin
          </Link>{' '}
          und{' '}
          <Link to="/services/implantologie" className="text-dental-turquoise hover:text-dental-blue underline">
            Implantologie
          </Link>.
        </>
      )
    },
    {
      question: "Kann ich in der Zahnarztpraxis Worsch auch als Neupatient schnell einen Termin bekommen?",
      answer: (
        <>
          Wir bemühen uns stets, auch Neupatienten zeitnah Termine anbieten zu können, besonders bei akuten Beschwerden. Für eine Erstberatung, insbesondere im Bereich Ästhetik oder Implantologie, empfehlen wir eine frühzeitige Kontaktaufnahme, damit wir ausreichend Zeit für Sie einplanen können. Nutzen Sie gerne unsere{' '}
          <Link to="/appointment" className="text-dental-turquoise hover:text-dental-blue underline">
            Online-Terminbuchung
          </Link>{' '}
          oder{' '}
          <Link to="/contact" className="text-dental-turquoise hover:text-dental-blue underline">
            rufen Sie uns an
          </Link>.
        </>
      )
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
                Fragen zu unserer Praxis
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-dental-blue leading-tight">
                Fragen zu unserer Zahnarztpraxis in Dresden? Wir antworten!
              </h2>
              <p className="text-lg text-dental-gray mt-6">
                Erfahren Sie mehr darüber, was die Zahnarztpraxis Worsch in Dresden Laubegast auszeichnet und was Sie bei uns erwartet.
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

export default AboutFAQ;
