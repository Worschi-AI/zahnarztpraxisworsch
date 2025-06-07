
import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const TeamFAQ = () => {
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
              Ihre Fragen an unser Team – Wir geben persönliche Antworten
            </h2>
            <p className="text-base lg:text-lg text-dental-gray leading-relaxed">
              Sie möchten mehr über unser Team erfahren? Hier finden Sie alle Antworten! Wir möchten, dass Sie sich bei uns von Anfang an gut aufgehoben und persönlich betreut fühlen. Entdecken Sie, was unser Team in der Zahnarztpraxis Worsch in Dresden-Laubegast auszeichnet und wie wir arbeiten.
            </p>
          </div>

          <div className="animate-on-scroll">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-gray-200">
                <AccordionTrigger className="text-left text-base lg:text-lg font-normal text-dental-gray hover:text-dental-blue py-4 lg:py-6">
                  Welche Qualifikationen und Spezialisierungen haben die Zahnärzte der Praxis Worsch in Dresden?
                </AccordionTrigger>
                <AccordionContent className="text-dental-gray text-sm lg:text-base leading-relaxed pb-4 lg:pb-6">
                  Dr. Thomas Worsch verfügt über einen Master of Science (M.Sc.) in Ästhetisch-Rekonstruktiver Zahnmedizin und ist zertifizierter Implantologie-Experte der DGI. Dr. Lisa Müller ist spezialisiert auf unsichtbare Zahnkorrekturen und zertifizierte Invisalign-Anwenderin. Beide Zahnärzte bilden sich kontinuierlich in modernsten Behandlungsmethoden fort und bringen jahrelange Erfahrung in der ästhetischen Zahnmedizin mit.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b border-gray-200">
                <AccordionTrigger className="text-left text-base lg:text-lg font-normal text-dental-gray hover:text-dental-blue py-4 lg:py-6">
                  Wie geht das Team der Zahnarztpraxis Worsch mit Angstpatienten um?
                </AccordionTrigger>
                <AccordionContent className="text-dental-gray text-sm lg:text-base leading-relaxed pb-4 lg:pb-6">
                  Wir verstehen, dass der Zahnarztbesuch für manche Patienten mit Ängsten verbunden ist. Unser Team ist speziell geschult im Umgang mit Angstpatienten. Wir nehmen uns extra Zeit für ausführliche Beratungsgespräche, erklären jeden Behandlungsschritt verständlich und arbeiten mit schonenden, schmerzarmen Methoden. Auf Wunsch bieten wir auch Entspannungstechniken und eine besonders einfühlsame Betreuung an.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b border-gray-200">
                <AccordionTrigger className="text-left text-base lg:text-lg font-normal text-dental-gray hover:text-dental-blue py-4 lg:py-6">
                  Kann ich mir einen bestimmten Zahnarzt oder eine Zahnärztin in Ihrer Dresdner Praxis aussuchen?
                </AccordionTrigger>
                <AccordionContent className="text-dental-gray text-sm lg:text-base leading-relaxed pb-4 lg:pb-6">
                  Selbstverständlich können Sie bei der Terminbuchung Ihren Wunschbehandler angeben. Dr. Worsch ist spezialisiert auf Implantologie und komplexe ästhetische Behandlungen, während Dr. Müller der perfekte Ansprechpartner für Invisalign und Prophylaxe ist. Bei der <Link to="/appointment" className="text-dental-turquoise hover:text-dental-blue underline">Online-Terminbuchung über Doctolib</Link> können Sie direkt den gewünschten Zahnarzt auswählen.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b border-gray-200">
                <AccordionTrigger className="text-left text-base lg:text-lg font-normal text-dental-gray hover:text-dental-blue py-4 lg:py-6">
                  Spricht das Praxisteam auch andere Sprachen außer Deutsch?
                </AccordionTrigger>
                <AccordionContent className="text-dental-gray text-sm lg:text-base leading-relaxed pb-4 lg:pb-6">
                  Ja, unser Team spricht fließend Englisch, sodass wir auch internationale Patienten optimal betreuen können. Dr. Worsch verfügt zusätzlich über Grundkenntnisse in Französisch. Für andere Sprachen organisieren wir gerne einen Dolmetscher, damit die Kommunikation reibungslos funktioniert und Sie sich vollständig verstanden fühlen.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-b border-gray-200">
                <AccordionTrigger className="text-left text-base lg:text-lg font-normal text-dental-gray hover:text-dental-blue py-4 lg:py-6">
                  Wie wichtig ist dem Team der Zahnarztpraxis Worsch die kontinuierliche Weiterbildung?
                </AccordionTrigger>
                <AccordionContent className="text-dental-gray text-sm lg:text-base leading-relaxed pb-4 lg:pb-6">
                  Weiterbildung ist für uns essentiell! Unser gesamtes Team nimmt regelmäßig an Fortbildungen, Kongressen und Zertifizierungskursen teil. Wir investieren jährlich einen erheblichen Betrag in die neuesten Technologien und Behandlungsmethoden. So können wir Ihnen immer die modernsten und effektivsten Therapien anbieten – von digitaler Smile-Planung bis zu innovativen Implantationstechniken.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="text-center mt-8 lg:mt-12 animate-on-scroll">
            <p className="text-lg font-medium text-dental-blue">
              Ein eingespieltes Team ist die Basis für erfolgreiche Behandlungen. Lernen Sie uns kennen – wir freuen uns auf Sie!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamFAQ;
