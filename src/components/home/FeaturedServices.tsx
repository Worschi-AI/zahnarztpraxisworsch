
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
          <h2 className="mb-4 text-dental-blue">Exzellenz in Ästhetik & Funktion – Unsere Premium-Leistungen für Ihr Lächeln</h2>
          <p className="text-lg max-w-2xl mx-auto text-dental-gray">
            Entdecken Sie bei uns spezialisierte Behandlungen, die modernste Zahnmedizin mit höchsten ästhetischen Ansprüchen vereinen. Gemeinsam gestalten wir Ihr schönstes und gesündestes Lächeln.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <div 
              key={service.id} 
              className="animate-on-scroll flex flex-col h-full" 
              style={{ 
                animationDelay: `${index * 100}ms`,
                animationDuration: '0.6s',
                animationTimingFunction: 'ease-out'
              }}
            >
              <ServiceCard
                id={service.id}
                title={service.title}
                description={
                  service.id === 'aesthetische-zahnheilkunde'
                    ? `Ihr Weg zum Traumlächeln. Von schonendem Bleaching bis zu unsichtbaren Zahnkorrekturen wie Veneers – wir entwickeln maßgeschneiderte Lösungen, die perfekt zu Ihren individuellen Wünschen passen.`
                    : service.id === 'implantologie'
                    ? `Endlich wieder unbeschwert lachen und kauen. Verlorene Zähne können das Leben einschränken. Mit hochwertigen Zahnimplantaten schenken wir Ihnen Ihr volles Lächeln und damit ein großes Stück Lebensqualität zurück.`
                    : `Perfektion, die sich sehen und fühlen lässt. Ob Kronen, Brücken oder komplexe Versorgungen – wir fertigen Ihren individuellen Zahnersatz aus besten Materialien, passgenau für Ihr natürliches Lächeln.`
                }
                iconName={
                  service.id === 'aesthetische-zahnheilkunde' ? 'sparkles' :
                  service.id === 'implantologie' ? 'heart' :
                  'shield'
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
    </Section>
  );
};

export default FeaturedServices;
