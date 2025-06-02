
import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle, Sparkles } from 'lucide-react';

const HomepageFAQ = () => {
  const faqs = [
    {
      id: "item-1",
      question: "Was kostet eine ästhetische Behandlung?",
      answer: "Die Kosten variieren je nach Behandlung. Ein professionelles Bleaching beginnt ab 280€, Veneers ab 890€ pro Zahn. In unserem kostenlosen Beratungsgespräch in Dresden erstellen wir Ihnen einen transparenten Kostenvoranschlag.",
      link: "/appointment",
      linkText: "Vereinbaren Sie jetzt einen Termin"
    },
    {
      id: "item-2",
      question: "Wie schnell bekomme ich einen Termin?",
      answer: "Online-Termine sind oft schon innerhalb weniger Tage verfügbar. Für Notfälle haben wir täglich Notfallzeiten reserviert. Buchen Sie bequem über",
      links: [
        { url: "/appointment", text: "Doctolib" },
        { url: "/contact", text: "rufen Sie uns in Laubegast an" }
      ]
    },
    {
      id: "item-3",
      question: "Für wen ist Invisalign geeignet?",
      answer: "Invisalign eignet sich für die meisten Zahnfehlstellungen bei Jugendlichen und Erwachsenen. In einem kostenlosen 3D-Scan prüfen wir, ob",
      link: "/services/aesthetische-zahnheilkunde",
      linkText: "Invisalign für Sie geeignet ist",
      additionalText: "und zeigen Ihnen das Endergebnis vorab."
    },
    {
      id: "item-4",
      question: "Wie lange hält ein professionelles Bleaching?",
      answer: "Bei guter Pflege bleiben Ihre Zähne 2-3 Jahre deutlich heller. Mit unserem Take-Home-Bleaching können Sie das Ergebnis jederzeit auffrischen. Wir beraten Sie gerne zur optimalen Nachsorge. Mehr über",
      link: "/services/aesthetische-zahnheilkunde",
      linkText: "professionelles Bleaching"
    },
    {
      id: "item-5",
      question: "Was tun Sie für Angstpatienten?",
      answer: "Wir nehmen Ihre Ängste ernst! Ausführliche Aufklärung, sanfte Behandlungsmethoden und bei Bedarf Sedierung sorgen für eine entspannte Behandlung. Sprechen Sie uns einfach darauf an. Lernen Sie unser",
      link: "/team",
      linkText: "einfühlsames Team",
      additionalText: "kennen."
    },
    {
      id: "item-6",
      question: "Welche Garantien geben Sie?",
      answer: "Auf Füllungen geben wir 2 Jahre, auf Kronen und Veneers 5 Jahre Garantie.",
      link: "/services/implantologie",
      linkText: "Implantate sind sogar 10 Jahre garantiert",
      additionalText: ". Ihre Investition in schöne Zähne ist bei uns bestens abgesichert. Erfahren Sie mehr über unsere",
      secondaryLink: "/services",
      secondaryLinkText: "Leistungen"
    }
  ];

  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-br from-white via-dental-beige/10 to-white overflow-hidden">
      {/* Enhanced Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-dental-turquoise/6 to-dental-blue/6 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-br from-dental-blue/6 to-dental-turquoise/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-dental-turquoise/4 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '6s' }}></div>
        
        {/* Floating question mark icons */}
        <div className="absolute top-40 left-20 opacity-5">
          <HelpCircle className="w-16 h-16 text-dental-blue animate-pulse" />
        </div>
        <div className="absolute bottom-40 right-20 opacity-5">
          <HelpCircle className="w-12 h-12 text-dental-turquoise animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Enhanced Left Column - Title */}
            <div className="animate-on-scroll relative">
              <div className="flex items-center gap-2 mb-4">
                <HelpCircle className="w-5 h-5 text-dental-turquoise animate-pulse" />
                <p className="text-dental-turquoise text-sm md:text-base lg:text-lg font-medium">
                  Wir sind für Sie da – Persönlich & Transparent
                </p>
                <Sparkles className="w-4 h-4 text-dental-turquoise animate-bounce" />
              </div>
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-dental-blue leading-tight relative">
                Ihre häufigsten Fragen an uns
                <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-dental-turquoise to-dental-blue rounded-full"></div>
              </h2>
              <p className="text-base lg:text-lg text-dental-gray mt-4 lg:mt-6 leading-relaxed hover:text-dental-blue/80 transition-colors duration-300">
                Wir möchten, dass Sie sich von Anfang an gut informiert und rundum wohlfühlen. Hier finden Sie Antworten auf einige der Fragen, die uns in Ihrer Zahnarztpraxis Worsch in Dresden-Laubegast am häufigsten gestellt werden.
              </p>
            </div>
            
            {/* Enhanced Right Column - FAQ Accordion */}
            <div className="animate-on-scroll">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={faq.id}
                    value={faq.id} 
                    className="group border border-gray-200/50 rounded-2xl bg-white/50 backdrop-blur-sm hover:bg-white/80 hover:border-dental-turquoise/30 hover:shadow-lg transition-all duration-500 overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <AccordionTrigger className="text-left text-base lg:text-lg font-medium text-dental-gray hover:text-dental-blue py-6 px-6 hover:no-underline group-hover:text-dental-turquoise transition-colors duration-300 relative">
                      <span className="relative z-10">{faq.question}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-dental-turquoise/5 to-dental-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </AccordionTrigger>
                    <AccordionContent className="text-dental-gray text-sm lg:text-base leading-relaxed px-6 pb-6 relative">
                      <div className="relative z-10">
                        {faq.answer}{' '}
                        {faq.link && (
                          <Link to={faq.link} className="text-dental-turquoise hover:text-dental-blue underline font-medium transition-colors duration-300">
                            {faq.linkText}
                          </Link>
                        )}
                        {faq.links && faq.links.map((link, linkIndex) => (
                          <span key={linkIndex}>
                            {linkIndex > 0 && ' oder '}
                            <Link to={link.url} className="text-dental-turquoise hover:text-dental-blue underline font-medium transition-colors duration-300">
                              {link.text}
                            </Link>
                          </span>
                        ))}
                        {faq.additionalText && <span> {faq.additionalText}</span>}
                        {faq.secondaryLink && (
                          <>
                            {' '}
                            <Link to={faq.secondaryLink} className="text-dental-turquoise hover:text-dental-blue underline font-medium transition-colors duration-300">
                              {faq.secondaryLinkText}
                            </Link>
                            .
                          </>
                        )}
                      </div>
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

export default HomepageFAQ;
