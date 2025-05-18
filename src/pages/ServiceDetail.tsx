
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
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

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection 
        title={service.title} 
        subtitle={service.shortDescription} 
        backgroundImage={service.imageUrl}
      />

      {/* Service Description */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 animate-on-scroll">
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
            </div>
            
            {/* Benefits */}
            {service.benefits && service.benefits.length > 0 && (
              <div className="mb-12 animate-on-scroll">
                <h3 className="text-2xl font-medium mb-6 text-dental-blue">Ihre Vorteile</h3>
                <div className="bg-dental-beige rounded-lg p-6">
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 mt-1 mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dental-turquoise" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-dental-gray">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            
            {/* FAQs */}
            {service.faqs && service.faqs.length > 0 && (
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
