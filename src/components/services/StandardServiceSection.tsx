
import React from 'react';
import ServiceCard from '@/components/ServiceCard';
import { Service } from '@/data/services';

interface StandardServiceSectionProps {
  standardServices: Service[];
}

const StandardServiceSection: React.FC<StandardServiceSectionProps> = ({ standardServices }) => {
  return (
    <section className="py-16 bg-dental-beige" id="standard-services">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-on-scroll">
          <h2 className="mb-4 text-dental-blue">Weitere Zahnmedizinische Leistungen</h2>
          <p className="text-lg text-dental-gray">
            Wir bieten Ihnen das gesamte Spektrum der modernen Zahnheilkunde unter einem Dach.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {standardServices.map((service, index) => (
            <div key={service.id} className="animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
              <ServiceCard
                id={service.id}
                title={service.title}
                description={service.shortDescription}
                imageUrl={service.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StandardServiceSection;
