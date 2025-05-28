
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
          Unser erfahrenes Zahnarzt-Team in Dresden verfügt über umfassende Qualifikationen und bildet sich kontinuierlich in wichtigen Spezialgebieten weiter, um Ihnen stets die bestmögliche Versorgung zu bieten. Dazu gehören beispielsweise die{' '}
          <Link to="/services/aesthetische-zahnheilkunde" className="text-dental-turquoise hover:text-dental-blue underline">
            ästhetische Zahnmedizin
          </Link>, die{' '}
          <Link to="/services/implantologie" className="text-dental-turquoise hover:text-dental-blue underline">
            Implantologie
          </Link>, die Endodontie (Wurzelkanalbehandlungen) und die{' '}
          <Link to="/services/kinderzahnheilkunde" className="text-dental-turquoise hover:text-dental-blue underline">
            Kinderzahnheilkunde
          </Link>. Detaillierte Informationen zu den einzelnen Schwerpunkten unserer Zahnärzte finden Sie direkt in ihren persönlichen Profilen auf dieser Seite.
        </>
      )
    },
    {
      question: "Wie geht das Team der Zahnarztpraxis Worsch mit Angstpatienten um?",
      answer: "Wir haben großes Verständnis und viel Einfühlungsvermögen für Patienten mit Zahnarztangst. Unser gesamtes Team in Dresden-Laubegast ist speziell geschult, um Ihnen einen möglichst stressfreien und angenehmen Besuch zu ermöglichen. Wir nehmen uns bewusst viel Zeit für Sie, hören Ihnen aufmerksam zu und erklären Ihnen jeden einzelnen Schritt behutsam und in Ruhe. Bei Bedarf bieten wir Ihnen auch schonende Behandlungsmethoden wie eine Sedierung (Dämmerschlaf) an. Bitte sprechen Sie uns jederzeit offen auf Ihre Ängste an – wir sind für Sie da!"
    },
    {
      question: "Kann ich mir einen bestimmten Zahnarzt oder eine Zahnärztin in Ihrer Dresdner Praxis aussuchen?",
      answer: (
        <>
          Ja, selbstverständlich können Sie bei der{' '}
          <Link to="/appointment" className="text-dental-turquoise hover:text-dental-blue underline">
            Terminvereinbarung
          </Link>{' '}
          gerne Ihren Wunschbehandler in unserer Zahnarztpraxis in Dresden angeben. Wir bemühen uns stets, dies bestmöglich zu berücksichtigen, denn Ihre Zufriedenheit ist uns wichtig. Bei Notfällen oder sehr kurzfristigen Terminen kann es jedoch im Einzelfall vorkommen, dass Sie von dem gerade verfügbaren Zahnarzt oder der Zahnärztin behandelt werden.
        </>
      )
    },
    {
      question: "Spricht das Praxisteam auch andere Sprachen außer Deutsch?",
      answer: (
        <>
          Ja, einige Mitglieder unseres Teams in Dresden sprechen auch sehr gut Englisch. Falls Sie eine Betreuung in einer anderen Sprache wünschen, geben Sie uns dies bitte bereits bei der Terminvereinbarung Bescheid, damit wir dies bestmöglich für Sie organisieren können und eine reibungslose Kommunikation gewährleistet ist. Weitere Informationen und Kontaktmöglichkeiten finden Sie auf unserer{' '}
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
          Kontinuierliche Weiterbildung ist für unser gesamtes Team von allergrößter Bedeutung! Um Ihnen stets Zahnmedizin auf dem absolut neuesten Stand der Wissenschaft anbieten zu können, nehmen alle unsere Zahnärzte und Mitarbeiter in Dresden regelmäßig und engagiert an Fortbildungen, Fachkongressen und spezifischen Schulungen teil. So stellen wir sicher, dass Sie bei uns immer von den modernsten und besten Behandlungsmethoden profitieren und optimal versorgt sind. Mehr über unsere fortschrittlichen{' '}
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
                Ihre Fragen an unser Team
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-dental-blue leading-tight">
                Wir geben persönliche Antworten.
              </h2>
              <p className="text-lg text-dental-gray mt-6">
                Sie möchten mehr über unser Team erfahren? Hier finden Sie alle Antworten! Wir möchten, dass Sie sich bei uns von Anfang an gut aufgehoben und persönlich betreut fühlen. Entdecken Sie, was unser Team in der Zahnarztpraxis Worsch in Dresden-Laubegast auszeichnet und wie wir arbeiten.
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
