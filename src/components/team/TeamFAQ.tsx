
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const TeamFAQ = () => {
  const faqs = [
    {
      question: "Welche Qualifikationen und Spezialisierungen haben die Zahnärzte der Praxis Worsch in Dresden?",
      answer: (
        <>
          Unser Zahnarzt-Team in Dresden verfügt über umfassende Qualifikationen und bildet sich kontinuierlich in Spezialgebieten wie{' '}
          <Link to="/services/aesthetische-zahnheilkunde" className="text-dental-turquoise hover:text-dental-blue underline">
            ästhetische Zahnmedizin
          </Link>, {' '}
          <Link to="/services/implantologie" className="text-dental-turquoise hover:text-dental-blue underline">
            Implantologie
          </Link>, Endodontie und{' '}
          <Link to="/services/kinderzahnheilkunde" className="text-dental-turquoise hover:text-dental-blue underline">
            Kinderzahnheilkunde
          </Link>{' '}
          weiter. Detaillierte Informationen zu den Schwerpunkten unserer Zahnärzte finden Sie in den einzelnen Teamprofilen auf dieser Seite.
        </>
      )
    },
    {
      question: "Wie geht das Team der Zahnarztpraxis Worsch mit Angstpatienten um?",
      answer: "Wir haben großes Verständnis für Patienten mit Zahnarztangst. Unser Team in Dresden Laubegast ist speziell geschult, um Ihnen einen möglichst stressfreien und angenehmen Besuch zu ermöglichen. Wir nehmen uns viel Zeit für Sie, erklären jeden Schritt und bieten bei Bedarf auch schonende Behandlungsmethoden wie Sedierung (Dämmerschlaf) an. Sprechen Sie uns gerne offen auf Ihre Ängste an!"
    },
    {
      question: "Kann ich mir einen bestimmten Zahnarzt oder eine Zahnärztin in Ihrer Dresdner Praxis aussuchen?",
      answer: (
        <>
          Ja, selbstverständlich können Sie bei der{' '}
          <Link to="/appointment" className="text-dental-turquoise hover:text-dental-blue underline">
            Terminvereinbarung
          </Link>{' '}
          Ihren Wunschbehandler in unserer Zahnarztpraxis in Dresden angeben. Wir versuchen, dies bestmöglich zu berücksichtigen. Bei Notfällen oder sehr kurzfristigen Terminen kann es jedoch sein, dass Sie von dem gerade verfügbaren Zahnarzt behandelt werden.
        </>
      )
    },
    {
      question: "Spricht das Praxisteam auch andere Sprachen außer Deutsch?",
      answer: (
        <>
          Einige Mitglieder unseres Teams in Dresden sprechen auch Englisch. Bitte geben Sie bei der Terminvereinbarung Bescheid, falls Sie eine Betreuung in einer anderen Sprache wünschen, damit wir dies bestmöglich organisieren können. Weitere Informationen finden Sie auf unserer{' '}
          <Link to="/contact" className="text-dental-turquoise hover:text-dental-blue underline">
            Kontaktseite
          </Link>.
        </>
      )
    },
    {
      question: "Wie wichtig ist dem Team der Zahnarztpraxis Worsch die kontinuierliche Weiterbildung?",
      answer: (
        <>
          Sehr wichtig! Um Ihnen stets Zahnmedizin auf dem neuesten Stand der Wissenschaft anbieten zu können, nehmen alle unsere Zahnärzte und Mitarbeiter in Dresden regelmäßig an Fortbildungen und Fachkongressen teil. So stellen wir sicher, dass Sie von den modernsten und besten Behandlungsmethoden profitieren. Mehr über unsere{' '}
          <Link to="/services" className="text-dental-turquoise hover:text-dental-blue underline">
            Behandlungsmethoden
          </Link>{' '}
          erfahren Sie hier.
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
                Fragen an unser Team
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-dental-blue leading-tight">
                Hier finden Sie Antworten!
              </h2>
              <p className="text-lg text-dental-gray mt-6">
                Wir möchten, dass Sie sich bei uns gut aufgehoben fühlen. Erfahren Sie mehr über unser Team und unsere Arbeitsweise in der Zahnarztpraxis Worsch in Dresden Laubegast.
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

export default TeamFAQ;
