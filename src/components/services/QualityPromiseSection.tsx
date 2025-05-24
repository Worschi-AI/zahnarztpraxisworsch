
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const QualityPromiseSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 animate-on-scroll">
            <h2 className="mb-6 text-dental-blue">Unser Qualitätsversprechen – Für Ihr schönstes Lächeln</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-dental-turquoise mr-2 flex-shrink-0 mt-1" />
                <span className="text-dental-gray">Moderne Technologien: Digitale Diagnostik, 3D-Planung und schonende Verfahren</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-dental-turquoise mr-2 flex-shrink-0 mt-1" />
                <span className="text-dental-gray">Höchste Ästhetik: Individuelle Farbanpassung und natürliche Ergebnisse</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-dental-turquoise mr-2 flex-shrink-0 mt-1" />
                <span className="text-dental-gray">Individuelle Beratung: Wir entwickeln mit Ihnen Ihren persönlichen Behandlungsplan</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-dental-turquoise mr-2 flex-shrink-0 mt-1" />
                <span className="text-dental-gray">Erfahrenes Team: Spezialisten für ästhetische Zahnmedizin und Implantologie</span>
              </div>
            </div>
            <Button asChild className="bg-dental-turquoise hover:bg-dental-blue">
              <Link to="/team">Lernen Sie unser Team kennen</Link>
            </Button>
          </div>
          <div className="md:w-1/2 animate-on-scroll">
            <div className="rounded-lg overflow-hidden shadow-lg">
              {/* Image removed as requested */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityPromiseSection;
