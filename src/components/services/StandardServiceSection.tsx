
import React from 'react';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Service } from '@/data/services';
import { ArrowRight } from 'lucide-react';

interface StandardServiceSectionProps {
  standardServices: Service[];
}

const StandardServiceSection: React.FC<StandardServiceSectionProps> = ({ standardServices }) => {
  // Helper function to get an enhanced description for each service
  const getEnhancedDescription = (service: Service): string => {
    switch(service.id) {
      case 'prophylaxe':
        return 'Professionelle Zahnreinigung in Dresden und umfassende Vorsorge für langfristig gesunde, strahlend weiße Zähne und ein frisches Mundgefühl.';
      case 'zahnerhaltung':
        return 'Moderne Füllungstherapie und Zahnerhaltung in Dresden – schonende Behandlung von Karies mit ästhetischen Materialien.';
      case 'parodontologie':
        return 'Effektive Behandlung von Zahnfleischerkrankungen in Dresden – für langfristige Mundgesundheit und sicheren Zahnerhalt.';
      case 'kinderzahnheilkunde':
        return 'Einfühlsame und altersgerechte Zahnbehandlung für Ihre Kleinen in unserer Praxis in Dresden Laubegast – für gesunde Zähne von Anfang an.';
      case 'endodontie':
        return 'Schmerzfreie Wurzelbehandlungen mit modernster Technik in Dresden – für den sicheren Erhalt Ihrer natürlichen Zähne.';
      case 'funktionstherapie':
        return 'Wirksame CMD-Behandlung und Kiefergelenktherapie in Dresden – für ein schmerzfreies Wohlbefinden ohne Verspannungen.';
      case 'chirurgie':
        return 'Schonende Zahnentfernung und sichere Weisheitszahnentfernung in Dresden – mit minimalem Aufwand und kurzen Heilungszeiten.';
      default:
        return service.shortDescription;
    }
  };

  return (
    <section className="py-16 bg-dental-beige" id="standard-services">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-on-scroll">
          <h2 className="mb-4 text-dental-blue">Umfassende Zahnmedizin für Ihre Gesundheit – Weitere Leistungen in Dresden</h2>
          <p className="text-lg text-dental-gray">
            Neben unseren ästhetischen Schwerpunkten bieten wir Ihnen selbstverständlich das gesamte Spektrum moderner Zahnheilkunde für Ihre langfristige Mundgesundheit und ein unbeschwertes Lächeln.
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
                <Button asChild variant="outline" className="border-dental-turquoise text-dental-turquoise hover:bg-dental-turquoise hover:text-white transition-colors flex items-center gap-2">
                  <Link to={`/services/${service.id}`}>
                    Details ansehen <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StandardServiceSection;
