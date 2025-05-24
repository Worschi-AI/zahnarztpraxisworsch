
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface ServiceCTAProps {
  serviceId?: string;
}

const ServiceCTA: React.FC<ServiceCTAProps> = ({ serviceId }) => {
  const isImplantologiePage = serviceId === 'implantologie';
  const isAestheticPage = serviceId === 'aesthetische-zahnheilkunde';

  if (isImplantologiePage) {
    return (
      <div className="mt-12 text-center animate-on-scroll">
        <Button asChild size="lg" className="bg-dental-turquoise hover:bg-dental-blue text-white px-8 py-6 text-lg">
          <Link to="/appointment">Unverbindlichen Beratungstermin für Zahnimplantate vereinbaren <ChevronRight className="ml-2 h-5 w-5" /></Link>
        </Button>
        <p className="mt-4 text-dental-gray">Wir nehmen uns Zeit für Ihre individuellen Fragen zu Zahnimplantaten</p>
      </div>
    );
  }

  if (isAestheticPage) {
    return (
      <div className="mt-12 text-center animate-on-scroll">
        <h2 className="text-2xl font-medium mb-4 text-dental-blue">Verwirklichen Sie Ihren Traum vom perfekten Lächeln!</h2>
        <p className="text-lg mb-6 text-dental-gray">
          Kontaktieren Sie uns für eine unverbindliche Beratung zur ästhetischen Zahnheilkunde in unserer Praxis in Dresden.
        </p>
        <Button asChild size="lg" className="bg-dental-turquoise hover:bg-dental-blue text-white px-8 py-6 text-lg">
          <Link to="/appointment">Termin für ästhetische Beratung vereinbaren <ChevronRight className="ml-2 h-5 w-5" /></Link>
        </Button>
        <p className="mt-4 text-dental-gray">Entdecken Sie Ihr schönstes Lächeln – Wir zeigen Ihnen die Möglichkeiten</p>
      </div>
    );
  }

  return null;
};

export default ServiceCTA;
