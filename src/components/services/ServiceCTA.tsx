
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface ServiceCTAProps {
  serviceId?: string;
}

const ServiceCTA: React.FC<ServiceCTAProps> = ({ serviceId }) => {
  const isAestheticPage = serviceId === 'aesthetische-zahnheilkunde';
  const isProphylaxePage = serviceId === 'prophylaxe';
  const isZahnerhaltungPage = serviceId === 'zahnerhaltung';
  const isKinderzahnheilkundePage = serviceId === 'kinderzahnheilkunde';

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

  if (isProphylaxePage) {
    return (
      <div className="mt-12 text-center animate-on-scroll">
        <h2 className="text-2xl font-medium mb-4 text-dental-blue">Investieren Sie in Ihr Lächeln – Termin zur Prophylaxe in Dresden vereinbaren!</h2>
        <p className="text-lg mb-6 text-dental-gray">
          Sichern Sie sich gesunde und schöne Zähne ein Leben lang. Vereinbaren Sie jetzt Ihren Termin zur professionellen Zahnreinigung in der Zahnarztpraxis Worsch in Dresden Laubegast.
        </p>
        <Button asChild size="lg" className="bg-dental-turquoise hover:bg-dental-blue text-white px-8 py-6 text-lg">
          <Link to="/appointment">Termin Prophylaxe buchen <ChevronRight className="ml-2 h-5 w-5" /></Link>
        </Button>
        <p className="mt-4 text-dental-gray">Für Ihre langfristige Zahngesundheit und ein strahlendes Lächeln</p>
      </div>
    );
  }

  if (isZahnerhaltungPage) {
    return (
      <div className="mt-12 text-center animate-on-scroll">
        <h2 className="text-2xl font-medium mb-4 text-dental-blue">Erhalten Sie Ihr natürliches Lächeln – Beratung zur Zahnerhaltung in Dresden!</h2>
        <p className="text-lg mb-6 text-dental-gray">
          Informieren Sie sich über die modernen Möglichkeiten der Zahnerhaltung in der Zahnarztpraxis Worsch in Dresden Laubegast. Vereinbaren Sie jetzt Ihren Beratungstermin.
        </p>
        <Button asChild size="lg" className="bg-dental-turquoise hover:bg-dental-blue text-white px-8 py-6 text-lg">
          <Link to="/appointment">Termin Zahnerhaltung buchen <ChevronRight className="ml-2 h-5 w-5" /></Link>
        </Button>
        <p className="mt-4 text-dental-gray">Wir kämpfen um jeden Zahn – für Ihr natürliches und gesundes Lächeln</p>
      </div>
    );
  }

  if (isKinderzahnheilkundePage) {
    return (
      <div className="mt-12 text-center animate-on-scroll">
        <h2 className="text-2xl font-medium mb-4 text-dental-blue">Gesunde Zähne von Anfang an – Ihr Kinderzahnarzt in Dresden!</h2>
        <p className="text-lg mb-6 text-dental-gray">
          Vereinbaren Sie einen Termin für Ihr Kind in der Zahnarztpraxis Worsch in Dresden Laubegast. Wir freuen uns auf kleine und große Patienten!
        </p>
        <Button asChild size="lg" className="bg-dental-turquoise hover:bg-dental-blue text-white px-8 py-6 text-lg">
          <Link to="/appointment">Termin Kinderzahnheilkunde buchen <ChevronRight className="ml-2 h-5 w-5" /></Link>
        </Button>
        <p className="mt-4 text-dental-gray">Mit viel Geduld und Einfühlungsvermögen für entspannte Zahnarztbesuche</p>
      </div>
    );
  }

  return null;
};

export default ServiceCTA;
