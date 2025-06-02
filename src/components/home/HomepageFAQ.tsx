
import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle, Sparkles, CheckCircle } from 'lucide-react';

const HomepageFAQ = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-white via-white to-gray-50/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-dental-turquoise/6 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-dental-blue/4 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <HelpCircle className="absolute top-16 left-1/4 w-5 h-5 text-dental-turquoise/20 animate-pulse" />
        <Sparkles className="absolute bottom-20 right-1/3 w-4 h-4 text-dental-blue/25 animate-pulse delay-1000" />
        <CheckCircle className="absolute top-1/2 right-1/6 w-6 h-6 text-dental-turquoise/15 animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Title */}
            <div className="animate-on-scroll">
              <div className="mb-3 lg:mb-4">
                <span className="text-dental-turquoise text-sm md:text-base lg:text-lg font-medium bg-gradient-to-r from-dental-turquoise to-dental-blue bg-clip-text text-transparent">
                  Wir sind für Sie da – Persönlich & Transparent
                </span>
              </div>
              
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-dental-blue leading-tight bg-gradient-to-r from-dental-blue via-dental-blue to-dental-turquoise bg-clip-text text-transparent mb-4 lg:mb-6">
                Ihre häufigsten Fragen an uns
              </h2>
              
              <p className="text-base lg:text-lg text-dental-gray hover:text-dental-blue/80 transition-colors duration-300">
                Wir möchten, dass Sie sich von Anfang an gut informiert und rundum wohlfühlen. Hier finden Sie Antworten auf einige der Fragen, die uns in Ihrer Zahnarztpraxis Worsch in Dresden-Laubegast am häufigsten gestellt werden.
              </p>

              {/* Trust indicator */}
              <div className="mt-6 flex items-center gap-3 bg-gradient-to-r from-dental-turquoise/10 to-dental-blue/10 p-4 rounded-xl border border-dental-turquoise/20">
                <CheckCircle className="w-6 h-6 text-dental-turquoise animate-pulse" />
                <span className="text-sm lg:text-base font-medium text-dental-blue">
                  Persönliche Beratung für alle Ihre Fragen
                </span>
              </div>
            </div>
            
            {/* Right Column - FAQ Accordion */}
            <div className="animate-on-scroll">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="border border-gray-200/50 rounded-xl bg-white/50 backdrop-blur-sm hover:bg-white/80 hover:shadow-lg transition-all duration-300">
                  <AccordionTrigger className="text-left text-base lg:text-lg font-normal text-dental-gray hover:text-dental-blue py-4 lg:py-6 px-4 lg:px-6 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-dental-turquoise rounded-full animate-pulse"></div>
                      Was kostet eine ästhetische Behandlung?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-dental-gray text-sm lg:text-base leading-relaxed pb-4 lg:pb-6 px-4 lg:px-6">
                    Die Kosten variieren je nach Behandlung. Ein professionelles Bleaching beginnt ab 280€, Veneers ab 890€ pro Zahn. In unserem kostenlosen Beratungsgespräch in Dresden erstellen wir Ihnen einen transparenten Kostenvoranschlag. <Link to="/appointment" className="text-dental-turquoise hover:text-dental-blue underline hover:no-underline transition-all duration-300">Vereinbaren Sie jetzt einen Termin</Link>.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-gray-200/50 rounded-xl bg-white/50 backdrop-blur-sm hover:bg-white/80 hover:shadow-lg transition-all duration-300">
                  <AccordionTrigger className="text-left text-base lg:text-lg font-normal text-dental-gray hover:text-dental-blue py-4 lg:py-6 px-4 lg:px-6 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-dental-blue rounded-full animate-pulse delay-200"></div>
                      Wie schnell bekomme ich einen Termin?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-dental-gray text-sm lg:text-base leading-relaxed pb-4 lg:pb-6 px-4 lg:px-6">
                    Online-Termine sind oft schon innerhalb weniger Tage verfügbar. Für Notfälle haben wir täglich Notfallzeiten reserviert. Buchen Sie bequem über <Link to="/appointment" className="text-dental-turquoise hover:text-dental-blue underline hover:no-underline transition-all duration-300">Doctolib</Link> oder <Link to="/contact" className="text-dental-turquoise hover:text-dental-blue underline hover:no-underline transition-all duration-300">rufen Sie uns in Laubegast an</Link>.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-gray-200/50 rounded-xl bg-white/50 backdrop-blur-sm hover:bg-white/80 hover:shadow-lg transition-all duration-300">
                  <AccordionTrigger className="text-left text-base lg:text-lg font-normal text-dental-gray hover:text-dental-blue py-4 lg:py-6 px-4 lg:px-6 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-dental-turquoise rounded-full animate-pulse delay-400"></div>
                      Für wen ist Invisalign geeignet?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-dental-gray text-sm lg:text-base leading-relaxed pb-4 lg:pb-6 px-4 lg:px-6">
                    Invisalign eignet sich für die meisten Zahnfehlstellungen bei Jugendlichen und Erwachsenen. In einem kostenlosen 3D-Scan prüfen wir, ob <Link to="/services/aesthetische-zahnheilkunde" className="text-dental-turquoise hover:text-dental-blue underline hover:no-underline transition-all duration-300">Invisalign für Sie geeignet ist</Link> und zeigen Ihnen das Endergebnis vorab.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-gray-200/50 rounded-xl bg-white/50 backdrop-blur-sm hover:bg-white/80 hover:shadow-lg transition-all duration-300">
                  <AccordionTrigger className="text-left text-base lg:text-lg font-normal text-dental-gray hover:text-dental-blue py-4 lg:py-6 px-4 lg:px-6 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-dental-blue rounded-full animate-pulse delay-600"></div>
                      Wie lange hält ein professionelles Bleaching?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-dental-gray text-sm lg:text-base leading-relaxed pb-4 lg:pb-6 px-4 lg:px-6">
                    Bei guter Pflege bleiben Ihre Zähne 2-3 Jahre deutlich heller. Mit unserem Take-Home-Bleaching können Sie das Ergebnis jederzeit auffrischen. Wir beraten Sie gerne zur optimalen Nachsorge. Mehr über <Link to="/services/aesthetische-zahnheilkunde" className="text-dental-turquoise hover:text-dental-blue underline hover:no-underline transition-all duration-300">professionelles Bleaching</Link>.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border border-gray-200/50 rounded-xl bg-white/50 backdrop-blur-sm hover:bg-white/80 hover:shadow-lg transition-all duration-300">
                  <AccordionTrigger className="text-left text-base lg:text-lg font-normal text-dental-gray hover:text-dental-blue py-4 lg:py-6 px-4 lg:px-6 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-dental-turquoise rounded-full animate-pulse delay-800"></div>
                      Was tun Sie für Angstpatienten?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-dental-gray text-sm lg:text-base leading-relaxed pb-4 lg:pb-6 px-4 lg:px-6">
                    Wir nehmen Ihre Ängste ernst! Ausführliche Aufklärung, sanfte Behandlungsmethoden und bei Bedarf Sedierung sorgen für eine entspannte Behandlung. Sprechen Sie uns einfach darauf an. Lernen Sie unser <Link to="/team" className="text-dental-turquoise hover:text-dental-blue underline hover:no-underline transition-all duration-300">einfühlsames Team</Link> kennen.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border border-gray-200/50 rounded-xl bg-white/50 backdrop-blur-sm hover:bg-white/80 hover:shadow-lg transition-all duration-300">
                  <AccordionTrigger className="text-left text-base lg:text-lg font-normal text-dental-gray hover:text-dental-blue py-4 lg:py-6 px-4 lg:px-6 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-dental-blue rounded-full animate-pulse delay-1000"></div>
                      Welche Garantien geben Sie?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-dental-gray text-sm lg:text-base leading-relaxed pb-4 lg:pb-6 px-4 lg:px-6">
                    Auf Füllungen geben wir 2 Jahre, auf Kronen und Veneers 5 Jahre Garantie. <Link to="/services/implantologie" className="text-dental-turquoise hover:text-dental-blue underline hover:no-underline transition-all duration-300">Implantate sind sogar 10 Jahre garantiert</Link>. Ihre Investition in schöne Zähne ist bei uns bestens abgesichert. Erfahren Sie mehr über unsere <Link to="/services" className="text-dental-turquoise hover:text-dental-blue underline hover:no-underline transition-all duration-300">Leistungen</Link>.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageFAQ;
