
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const QualityPromiseSection = () => {
  return (
    <section className="py-20 bg-dental-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 animate-on-scroll">
            <h2 className="text-hierarchy-2 font-semibold mb-6 text-dental-blue">Qualität, der Sie vertrauen können – Ihr Zahnarzt in Dresden</h2>
            <p className="text-lg mb-8 text-dental-gray leading-relaxed font-normal">
              Unsere Behandlungsqualität orientiert sich an den höchsten Standards moderner Zahnmedizin. Vertrauen Sie auf unser Engagement für Ihr perfektes Lächeln.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-dental-turquoise rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-dental-blue mb-1">Moderne Technologien</h3>
                  <p className="text-dental-gray font-normal">Digitale Diagnostik, 3D-Planung und schonende Verfahren</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-dental-turquoise rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-dental-blue mb-1">Höchste Ästhetik</h3>
                  <p className="text-dental-gray font-normal">Individuelle Farbanpassung und natürliche Ergebnisse</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-dental-turquoise rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-dental-blue mb-1">Individuelle Beratung</h3>
                  <p className="text-dental-gray font-normal">Wir entwickeln mit Ihnen Ihren persönlichen Behandlungsplan</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-dental-turquoise rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-dental-blue mb-1">Erfahrenes Team</h3>
                  <p className="text-dental-gray font-normal">Spezialisten für ästhetische Zahnmedizin und Implantologie</p>
                </div>
              </div>
            </div>
            
            <Button asChild className="bg-dental-turquoise hover:bg-dental-blue hover:scale-105 transition-all duration-300 font-medium">
              <Link to="/team">Lernen Sie unser Team kennen</Link>
            </Button>
          </div>
          
          {/* Image */}
          <div className="lg:w-1/2 animate-on-scroll">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1968&auto=format&fit=crop" 
                alt="Modernste Zahnarztpraxis mit fortschrittlicher Technologie in Dresden" 
                className="w-full h-auto hover-scale transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityPromiseSection;
