
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
      answer: "Unsere Philosophie stellt Sie als Patient konsequent in den Mittelpunkt. Wir verbinden modernste, innovative Zahnmedizin mit einem starken Fokus auf Ästhetik und einer ganzheitlichen, individuellen Betreuung. Unser vorrangiges Ziel ist es, Ihnen nicht nur gesunde Zähne, sondern auch ein Lächeln zu schenken, mit dem Sie sich absolut wohl und selbstbewusst fühlen. Transparenz, höchste Qualität und eine entspannte, angenehme Atmosphäre sind uns dabei von größter Bedeutung."
    },
    {
      question: "Ist die Zahnarztpraxis Worsch in Dresden-Laubegast modern ausgestattet?",
      answer: "Ja, wir legen größten Wert auf eine topmoderne Praxisausstattung, um Ihnen Behandlungen auf höchstem Niveau zu bieten. Dazu gehören digitale Röntgentechnologie (DVT) mit reduzierter Strahlung, hochauflösende intraorale Kameras, präzise CAD/CAM-Systeme für individuellen Zahnersatz, schonende Lasertechnologie und die komfortable digitale Abformung ohne Abdrucklöffel. Diese Technologien ermöglichen uns präzisere Diagnosen, wesentlich schonendere Behandlungen und oft schnellere sowie komfortablere Ergebnisse für Sie."
    },
    {
      question: "Wie gehen Sie in Ihrer Praxis mit Angstpatienten um?",
      answer: (
        <>
          Wir haben sehr viel Erfahrung und Einfühlungsvermögen im Umgang mit Angstpatienten. Unser einfühlsames{' '}
          <Link to="/team" className="text-dental-turquoise hover:text-dental-blue underline">
            Team in Dresden
          </Link>{' '}
          nimmt sich besonders viel Zeit für Sie, hört Ihnen aufmerksam zu und erklärt jeden einzelnen Behandlungsschritt behutsam und in Ruhe. Wir schaffen eine ruhige, entspannte und angstfreie Atmosphäre. Bei Bedarf bieten wir Ihnen auch zusätzliche Behandlungsmöglichkeiten wie eine Sedierung (Dämmerschlaf) an, um Ihnen den Besuch bei uns so angenehm und stressfrei wie möglich zu gestalten.
        </>
      )
    },
    {
      question: "Legt die Zahnarztpraxis Worsch Wert auf Fortbildungen?",
      answer: (
        <>
          Absolut! Kontinuierliche und umfassende Fortbildung ist für unser gesamtes Team in Dresden eine absolute Selbstverständlichkeit. So stellen wir sicher, dass wir Ihnen stets Zahnmedizin auf dem neuesten wissenschaftlichen Stand und mit den modernsten, innovativsten Techniken anbieten können. Das gilt insbesondere für unsere Schwerpunktbereiche wie die{' '}
          <Link to="/services/aesthetische-zahnheilkunde" className="text-dental-turquoise hover:text-dental-blue underline">
            ästhetische Zahnmedizin
          </Link>{' '}
          und{' '}
          <Link to="/services/implantologie" className="text-dental-turquoise hover:text-dental-blue underline">
            Implantologie
          </Link>, wo wir immer am Puls der Zeit sind.
        </>
      )
    },
    {
      question: "Kann ich in der Zahnarztpraxis Worsch auch als Neupatient schnell einen Termin bekommen?",
      answer: (
        <>
          Ja, wir bemühen uns stets sehr, auch Neupatienten zeitnah Termine anbieten zu können – besonders natürlich bei akuten Beschwerden, wo schnelle Hilfe zählt. Für eine umfassende Erstberatung, speziell im Bereich Ästhetik oder Implantologie, empfehlen wir eine frühzeitige Kontaktaufnahme, damit wir ausreichend Zeit für Ihr persönliches Anliegen einplanen können. Nutzen Sie hierfür gerne unsere komfortable{' '}
          <Link to="/appointment" className="text-dental-turquoise hover:text-dental-blue underline">
            Online-Terminbuchung
          </Link>{' '}
          oder{' '}
          <Link to="/contact" className="text-dental-turquoise hover:text-dental-blue underline">
            rufen Sie uns einfach persönlich an
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
                Ihre Fragen zu unserer Praxis – Wir geben Antworten.
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-dental-blue leading-tight">
                Sie haben Fragen zu unserer Zahnarztpraxis in Dresden?
              </h2>
              <p className="text-lg text-dental-gray mt-6">
                Hier finden Sie alle Antworten! Erfahren Sie detailliert, was die Zahnarztpraxis Worsch in Dresden-Laubegast so besonders macht und welche Vorteile Sie bei uns erwarten.
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
