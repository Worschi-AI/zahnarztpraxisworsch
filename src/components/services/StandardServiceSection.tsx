
import React from 'react';
import ServiceCard from '@/components/ServiceCard';
import { Link } from 'react-router-dom';
import { Service } from '@/data/services';

interface StandardServiceSectionProps {
  standardServices: Service[];
}

const StandardServiceSection: React.FC<StandardServiceSectionProps> = ({ standardServices }) => {
  // Helper function to get an enhanced description for each service
  const getEnhancedDescription = (service: Service): string => {
    switch(service.id) {
      case 'zahnersatz':
        return 'Hochwertige Kronen, Brücken und Prothesen für perfekte Funktion und natürliche Ästhetik in Dresden.';
      case 'parodontologie':
        return 'Effektive Behandlung von Zahnfleischerkrankungen für langfristige Mundgesundheit und Zahnerhalt.';
      case 'kinderzahnheilkunde':
        return 'Einfühlsame und altersgerechte Zahnbehandlung für Ihre Kleinen in entspannter Atmosphäre.';
      case 'endodontie':
        return 'Schmerzfreie Wurzelbehandlungen mit modernster Technik zum Erhalt Ihrer natürlichen Zähne.';
      case 'funktionstherapie':
        return 'Wirksame Behandlung von CMD und Kiefergelenkbeschwerden für schmerzfreies Wohlbefinden.';
      case 'chirurgie':
        return 'Schonende Entfernung nicht erhaltungswürdiger Zähne und sichere Weisheitszahnentfernung.';
      default:
        return service.shortDescription;
    }
  };

  return (
    <section className="py-16 bg-dental-beige" id="standard-services">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-on-scroll">
          <h2 className="mb-4 text-dental-blue">Weitere Zahnmedizinische Leistungen in Dresden</h2>
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
                description={getEnhancedDescription(service)}
                imageUrl={service.imageUrl}
              />
              <div className="mt-4 text-center">
                <Link 
                  to={`/services/${service.id}`}
                  className="inline-block text-dental-turquoise hover:text-dental-blue font-medium"
                >
                  Details ansehen
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StandardServiceSection;
