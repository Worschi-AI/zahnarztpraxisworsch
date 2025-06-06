
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Service } from '@/data/services/types';

interface PremiumServiceSectionProps {
  premiumServices: Service[];
}

const PremiumServiceSection: React.FC<PremiumServiceSectionProps> = ({ premiumServices }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-dental-blue/5 to-dental-turquoise/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
          <p className="text-dental-turquoise text-lg font-medium mb-4">Unsere Leistungen</p>
          <h2 className="mb-6 text-dental-blue">Unsere Behandlungsschwerpunkte – Für Ihr schönstes Lächeln</h2>
          <p className="text-lg text-dental-gray">
            Von hochwertigen Zahnimplantaten bis zu ästhetischen Korrekturen – wir vereinen modernste Zahnmedizin mit höchsten ästhetischen Ansprüchen. Gemeinsam gestalten wir Ihr schönstes und gesündestes Lächeln.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {premiumServices.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden animate-on-scroll">
              <img src={service.imageUrl} alt={service.title} className="w-full h-56 object-cover" loading="lazy" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-dental-blue mb-2">{service.title}</h3>
                <p className="text-dental-gray text-sm mb-4">{service.shortDescription}</p>
                {service.benefits && (
                  <ul className="list-disc pl-5 text-sm text-dental-gray mb-4">
                    {service.benefits.slice(0, 3).map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                )}
                <Button asChild className="bg-dental-turquoise hover:bg-dental-blue">
                  <Link to={`/services/${service.id}`} className="flex items-center gap-2">
                    Mehr erfahren
                    <ArrowRight className="w-4 h-4" />
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

export default PremiumServiceSection;
