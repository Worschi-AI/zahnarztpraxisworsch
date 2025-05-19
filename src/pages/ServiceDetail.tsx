
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import FAQSection from '@/components/services/FAQSection';
import { ChevronRight } from 'lucide-react';

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const service = services.find(s => s.id === id);

  // Redirect if service not found
  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl mb-4">Leistung nicht gefunden</h2>
        <p className="mb-6">Die angeforderte Leistung existiert nicht.</p>
        <Link to="/services" className="text-dental-blue hover:underline">
          Zurück zur Leistungsübersicht
        </Link>
      </div>
    );
  }

  // Customize page title and description for Implantologie
  const getMetaTitle = () => {
    if (id === 'implantologie') {
      return "Zahnimplantate Dresden | Experte für Implantologie | Zahnarztpraxis Worsch";
    }
    return `${service.title} | Zahnarztpraxis Worsch Dresden`;
  };

  const getMetaDescription = () => {
    if (id === 'implantologie') {
      return "Zahnarztpraxis Worsch in Dresden: Ihr Spezialist für hochwertige Zahnimplantate. Feste Zähne & natürliches Lächeln dank moderner Implantologie. Jetzt beraten lassen!";
    }
    return service.shortDescription;
  };

  // Customize hero section title for Implantologie
  const getHeroTitle = () => {
    if (id === 'implantologie') {
      return "Zahnimplantate Dresden: Feste Zähne von Ihrem Spezialisten";
    }
    return service.title;
  };

  // Animation on scroll effect with proper cleanup
  useEffect(() => {
    // Define the IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add animated class and keep it there permanently
          entry.target.classList.add('animated');
          // Once element is animated, stop observing it
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    // Select all elements to animate
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    
    // Start observing each element
    elementsToAnimate.forEach(el => {
      observer.observe(el);
    });

    // Clean up function to prevent memory leaks
    return () => {
      elementsToAnimate.forEach(el => {
        observer.unobserve(el);
      });
      observer.disconnect();
    };
  }, []);

  // Check if the current page is Implantologie
  const isImplantologiePage = id === 'implantologie';

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{getMetaTitle()}</title>
        <meta name="description" content={getMetaDescription()} />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection 
        title={getHeroTitle()} 
        subtitle={service.shortDescription} 
        backgroundImage={service.imageUrl}
      />

      {/* Service Description */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 animate-on-scroll">
              {isImplantologiePage ? (
                <>
                  <h2 className="mb-6 text-dental-blue">Was sind Zahnimplantate?</h2>
                  <div className="prose prose-lg max-w-none text-dental-gray">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                      <div>
                        <p>
                          <strong>Zahnimplantate in Dresden</strong> sind die modernste und komfortabelste Lösung für fehlende Zähne. Bei der <strong>Implantologie in Dresden</strong> setzen wir in der Zahnarztpraxis Worsch auf hochwertige Titanimplantate, die als künstliche Zahnwurzeln im Kieferknochen verankert werden.
                        </p>
                        <p>
                          Als erfahrener <strong>Implantologe in Dresden</strong> bietet Dr. Worsch Ihnen eine präzise Planung und schmerzarme Behandlung mit modernster 3D-Diagnostik. Unsere Patienten wählen uns aufgrund unserer langjährigen Expertise und dem Einsatz modernster implantologischer Verfahren.
                        </p>
                      </div>
                      <div className="rounded-lg overflow-hidden shadow-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1770&auto=format&fit=crop"
                          alt="Zahnimplantat Modell - Zahnarztpraxis Worsch Dresden"
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-medium mt-8 mb-4 text-dental-blue">Der Behandlungsablauf für Zahnimplantate in Dresden</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                      <div className="rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
                        <img 
                          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1780&auto=format&fit=crop"
                          alt="3D-Planung für Zahnimplantate - Zahnarztpraxis Worsch Dresden"
                          className="w-full h-auto"
                        />
                      </div>
                      <div className="order-1 md:order-2">
                        <ol className="list-decimal list-inside space-y-4">
                          <li className="font-medium text-dental-blue">Ausführliche Erstberatung
                            <p className="font-normal text-dental-gray mt-1">Wir analysieren Ihre individuelle Situation und klären alle Ihre Fragen zu <strong>Zahnimplantaten in Dresden</strong>.</p>
                          </li>
                          <li className="font-medium text-dental-blue">3D-Diagnostik und Planung
                            <p className="font-normal text-dental-gray mt-1">Mit modernster Bildgebung planen wir präzise die ideale Position Ihrer Implantate.</p>
                          </li>
                          <li className="font-medium text-dental-blue">Implantation
                            <p className="font-normal text-dental-gray mt-1">Der minimalinvasive chirurgische Eingriff erfolgt schmerzfrei unter lokaler Betäubung oder auf Wunsch in Sedierung.</p>
                          </li>
                          <li className="font-medium text-dental-blue">Einheilungsphase
                            <p className="font-normal text-dental-gray mt-1">Die Implantate verwachsen in 2-6 Monaten mit dem Kiefer (Osseointegration).</p>
                          </li>
                          <li className="font-medium text-dental-blue">Prothetische Versorgung
                            <p className="font-normal text-dental-gray mt-1">Ihr hochwertiger <strong>festsitzender Zahnersatz in Dresden</strong> wird eingesetzt und angepasst.</p>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="mb-6 text-dental-blue">Über {service.title}</h2>
                  <div className="prose prose-lg max-w-none text-dental-gray">
                    <p>{service.fullDescription}</p>
                    
                    {service.procedure && (
                      <>
                        <h3 className="text-2xl font-medium mt-8 mb-4 text-dental-blue">Ablauf der Behandlung</h3>
                        <p>{service.procedure}</p>
                      </>
                    )}
                  </div>
                </>
              )}
            </div>
            
            {/* Benefits */}
            {service.benefits && service.benefits.length > 0 && (
              <div className="mb-12 animate-on-scroll">
                <h3 className="text-2xl font-medium mb-6 text-dental-blue">
                  {isImplantologiePage ? 'Die Vorteile von Implantaten bei Praxis Worsch' : 'Ihre Vorteile'}
                </h3>
                <div className="bg-dental-beige rounded-lg p-6">
                  <ul className="space-y-4">
                    {isImplantologiePage ? (
                      // Custom benefits for Implantologie
                      <>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 mt-1 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dental-turquoise" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-dental-gray"><strong>Natürliches Aussehen und Gefühl</strong> - Zahnimplantate sehen aus und fühlen sich an wie Ihre eigenen Zähne</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 mt-1 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dental-turquoise" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-dental-gray"><strong>Hoher Kaukomfort und Sicherheit</strong> - Essen Sie wieder all Ihre Lieblingsspeisen ohne Einschränkungen</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 mt-1 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dental-turquoise" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-dental-gray"><strong>Erhalt des Kieferknochens</strong> - Verhinderung von Knochenschwund und Veränderungen der Gesichtsstruktur</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 mt-1 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dental-turquoise" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-dental-gray"><strong>Hervorragende Langzeitprognose</strong> - Bei guter Pflege halten Implantate oft ein Leben lang</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 mt-1 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dental-turquoise" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-dental-gray"><strong>Praktisch in der Pflege</strong> - Einfache Reinigung wie bei natürlichen Zähnen</span>
                        </li>
                      </>
                    ) : (
                      // Default benefits for other services
                      service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0 mt-1 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dental-turquoise" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-dental-gray">{benefit}</span>
                        </li>
                      ))
                    )}
                  </ul>
                </div>
              </div>
            )}
            
            {/* Custom FAQ Section for Implantologie */}
            {isImplantologiePage && (
              <div className="mb-12 animate-on-scroll">
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
              </div>
            )}

            {/* Standard FAQs for other services */}
            {!isImplantologiePage && service.faqs && service.faqs.length > 0 && (
              <div className="animate-on-scroll">
                <h3 className="text-2xl font-medium mb-6 text-dental-blue">Häufig gestellte Fragen</h3>
                <Accordion type="single" collapsible className="w-full">
                  {service.faqs.map((faq, index) => (
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
              </div>
            )}

            {/* Custom CTA for Implantologie */}
            {isImplantologiePage && (
              <div className="mt-12 text-center animate-on-scroll">
                <Button asChild size="lg" className="bg-dental-turquoise hover:bg-dental-blue text-white px-8 py-6 text-lg">
                  <Link to="/appointment">Unverbindlichen Beratungstermin für Zahnimplantate vereinbaren <ChevronRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <p className="mt-4 text-dental-gray">Wir nehmen uns Zeit für Ihre individuellen Fragen zu Zahnimplantaten</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-dental-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 animate-on-scroll">
            <h2 className="mb-4 text-dental-blue">Weitere Leistungen</h2>
            <p className="text-dental-gray max-w-2xl mx-auto">
              Entdecken Sie unser gesamtes Leistungsspektrum für Ihre Zahngesundheit.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.filter(s => s.id !== service.id).slice(0, 3).map((relatedService, index) => (
              <div key={relatedService.id} className="animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard
                  id={relatedService.id}
                  title={relatedService.title}
                  description={relatedService.shortDescription}
                  imageUrl={relatedService.imageUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-dental-turquoise to-dental-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-on-scroll">
            <h2 className="mb-4">Vereinbaren Sie einen Beratungstermin</h2>
            <p className="text-lg mb-8">
              Sie haben Interesse an dieser Behandlung oder benötigen weitere Informationen? 
              Wir beraten Sie gerne ausführlich in unserer Praxis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-dental-blue hover:bg-dental-beige">
                <Link to="/appointment">Termin vereinbaren</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white hover:bg-white hover:text-dental-blue">
                <Link to="/contact">Kontakt aufnehmen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
