
import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';

const FeaturedServices = () => {
  // Featured services (top 3) - selecting premium services
  const featuredServices = services.filter(service => 
    ['implantologie', 'aesthetische-zahnheilkunde', 'zahnersatz'].includes(service.id)
  ).slice(0, 3);

  return (
    <section className="py-20 bg-dental-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="mb-4 text-dental-blue">Exzellenz in Ästhetik & Funktion – Unsere Premium-Leistungen für Sie</h2>
          <p className="text-lg max-w-2xl mx-auto text-dental-gray">
            Entdecken Sie unsere spezialisierten Behandlungen, die modernste Zahnmedizin mit höchsten ästhetischen Ansprüchen verbinden. Wir gestalten Ihr schönstes Lächeln.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <div key={service.id} className="animate-on-scroll flex flex-col h-full" style={{ animationDelay: `${index * 100}ms` }}>
              <ServiceCard
                id={service.id}
                title={service.title}
                description={
                  service.id === 'aesthetische-zahnheilkunde'
                    ? `Von Veneers über professionelles Bleaching bis hin zu unsichtbaren Zahnkorrekturen – wir bieten Ihnen maßgeschneiderte Lösungen für ein makelloses Lächeln, das Ihre natürliche Schönheit unterstreicht. Erfahren Sie mehr über die Möglichkeiten der modernen Zahnästhetik in unserer Praxis in Dresden Laubegast.`
                    : service.id === 'implantologie'
                    ? `Verlorene Zähne? Mit hochwertigen Zahnimplantaten schenken wir Ihnen Ihr Lächeln und Ihre Lebensqualität zurück. Festsitzender Zahnersatz, der sich anfühlt und aussieht wie Ihre eigenen Zähne – eine Investition in Ihre Zukunft. Ihr Spezialist für Implantologie in Dresden.`
                    : `Perfektion bis ins Detail. Ob Kronen, Brücken oder komplexe Versorgungen – wir fertigen individuellen Zahnersatz aus besten Materialien für natürliche Ästhetik und dauerhafte Funktion. Entdecken Sie die Qualität unserer Zahntechnik.`
                }
                imageUrl={
                  service.id === 'aesthetische-zahnheilkunde'
                    ? "https://images.unsplash.com/photo-1581585095152-9f21db44503c?q=80&w=1770&auto=format&fit=crop"
                    : service.id === 'implantologie' 
                    ? "https://images.unsplash.com/photo-1601986413153-05c2466c26e4?q=80&w=1770&auto=format&fit=crop" 
                    : "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1770&auto=format&fit=crop"
                }
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-on-scroll">
          <Button asChild className="bg-dental-turquoise hover:bg-dental-blue">
            <Link to="/services">Alle Leistungen ansehen</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
