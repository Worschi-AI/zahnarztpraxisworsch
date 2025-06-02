
import React from 'react';
import ServiceCard from '@/components/ServiceCard';

interface RelatedServicesProps {
  currentServiceId: string;
  services: any[];
}

const RelatedServices: React.FC<RelatedServicesProps> = ({ currentServiceId, services }) => {
  const relatedServices = services.filter(s => s.id !== currentServiceId).slice(0, 3);

  return (
    <section className="py-16 bg-gradient-to-br from-dental-blue/12 to-dental-turquoise/15">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 animate-on-scroll">
          <h2 className="mb-4 text-dental-blue">Weitere Leistungen</h2>
          <p className="text-dental-gray max-w-2xl mx-auto">
            Entdecken Sie unser gesamtes Leistungsspektrum für Ihre Zahngesundheit.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedServices.map((relatedService, index) => (
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
  );
};

export default RelatedServices;
