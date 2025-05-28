
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
            <h2 className="mb-6 text-dental-blue">Qualität, der Sie voll und ganz vertrauen können – Ihre Zahnarztpraxis in Dresden</h2>
            <p className="text-lg text-dental-gray mb-8">
              Ihre Gesundheit und Ihr strahlendes Lächeln stehen für uns an erster Stelle. Unsere Behandlungsqualität orientiert sich stets an den höchsten Standards modernster Zahnmedizin. Vertrauen Sie auf unser Engagement und unsere Leidenschaft für Ihr perfektes Lächeln – wir begleiten Sie auf diesem Weg.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-dental-turquoise mr-2 flex-shrink-0 mt-1" />
                <span className="text-dental-gray">Modernste Technologien: Wir setzen auf digitale Diagnostik, präzise 3D-Planung und schonende Verfahren für Ihre komfortable Behandlung.</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-dental-turquoise mr-2 flex-shrink-0 mt-1" />
                <span className="text-dental-gray">Höchste Ästhetik: Für natürliche und harmonische Ergebnisse sorgen wir mit individueller Farbanpassung und einer perfekt auf Sie abgestimmten Ästhetik.</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-dental-turquoise mr-2 flex-shrink-0 mt-1" />
                <span className="text-dental-gray">Individuelle Beratung: Gemeinsam mit Ihnen entwickeln wir einen maßgeschneiderten Behandlungsplan, der genau auf Ihre Bedürfnisse und Wünsche zugeschnitten ist.</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-dental-turquoise mr-2 flex-shrink-0 mt-1" />
                <span className="text-dental-gray">Erfahrenes Team: Unser spezialisiertes Team aus Experten für ästhetische Zahnmedizin und Implantologie ist für Sie da und sorgt für beste Ergebnisse.</span>
              </div>
            </div>
            <Button asChild className="bg-dental-turquoise hover:bg-dental-blue">
              <Link to="/team">Lernen Sie unser Team kennen</Link>
            </Button>
          </div>
          <div className="md:w-1/2 animate-on-scroll">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1770&auto=format&fit=crop" 
                alt="Moderne Zahnmedizin - Zahnarztpraxis Worsch Dresden" 
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityPromiseSection;
