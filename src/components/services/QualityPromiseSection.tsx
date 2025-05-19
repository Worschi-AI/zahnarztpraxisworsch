
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
            <h2 className="mb-6 text-dental-blue">Unser Qualitätsversprechen</h2>
            <p className="text-lg mb-6 text-dental-gray">
              Bei allen Behandlungen legen wir größten Wert auf Qualität und Langlebigkeit. 
              Wir verwenden ausschließlich hochwertige Materialien und arbeiten mit renommierten 
              Laboren zusammen, um Ihnen die bestmöglichen Ergebnisse zu garantieren.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-dental-turquoise mr-2 flex-shrink-0 mt-1" />
                <span className="text-dental-gray">Modernste Technologien und Materialien</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-dental-turquoise mr-2 flex-shrink-0 mt-1" />
                <span className="text-dental-gray">Fortlaufende Weiterbildung des Teams</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-dental-turquoise mr-2 flex-shrink-0 mt-1" />
                <span className="text-dental-gray">Transparente Behandlungskosten</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-dental-turquoise mr-2 flex-shrink-0 mt-1" />
                <span className="text-dental-gray">Individuelle Beratung und Planung</span>
              </div>
            </div>
            <Button asChild className="bg-dental-turquoise hover:bg-dental-blue">
              <Link to="/team">Lernen Sie unser Team kennen</Link>
            </Button>
          </div>
          <div className="md:w-1/2 animate-on-scroll">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/2321cb5b-9485-4578-852b-b8525853d92e.png" 
                alt="Zahnärztin bei der Arbeit" 
                className="w-full h-auto"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1968&auto=format&fit=crop";
                  console.log("Image failed to load, fallback applied");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityPromiseSection;
