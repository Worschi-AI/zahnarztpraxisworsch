
import React from 'react';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, Calendar } from 'lucide-react';
import { Service } from '@/data/services';

interface PremiumServiceSectionProps {
  premiumServices: Service[];
}

const PremiumServiceSection: React.FC<PremiumServiceSectionProps> = ({ premiumServices }) => {
  // Helper function to get an enhanced premium description for each service
  const getEnhancedPremiumDescription = (service: Service): string => {
    switch(service.id) {
      case 'implantologie':
        return 'Fester Zahnersatz für ein natürliches Lächeln und höchste Lebensqualität. Dank modernster 3D-Planung und hochwertiger Implantate sind Sie bei uns in Dresden Laubegast in besten Händen.';
      case 'aesthetische-zahnheilkunde':
        return 'Perfekte Ästhetik für Ihr Lächeln durch Veneers, Bleaching und Zahnformkorrekturen – Zahnästhetik auf höchstem Niveau in Dresden.';
      case 'zahnersatz':
        return 'Hochwertiger individueller Zahnersatz in Dresden – präzise gefertigte Kronen, Brücken und Prothesen für natürliche Funktion und Ästhetik.';
      default:
        return service.shortDescription;
    }
  };
  
  return (
    <section className="py-20 bg-white" id="premium-services">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
          <h2 className="mb-4 text-dental-blue">Exzellenz für Ihr Lächeln: Unsere Premium-Behandlungen in Dresden</h2>
          <p className="text-lg text-dental-gray mb-6">
            Für höchste Ansprüche an Ästhetik und Funktion bieten wir Ihnen spezialisierte Leistungen, die Ihr Lächeln nachhaltig verschönern und Ihre Lebensqualität steigern.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <span className="bg-dental-beige text-dental-blue px-3 py-1 rounded-full text-sm flex items-center">
              <Star className="h-4 w-4 mr-1" /> Erstklassige Materialien
            </span>
            <span className="bg-dental-beige text-dental-blue px-3 py-1 rounded-full text-sm flex items-center">
              <CheckCircle className="h-4 w-4 mr-1" /> Modernste Technologie
            </span>
            <span className="bg-dental-beige text-dental-blue px-3 py-1 rounded-full text-sm flex items-center">
              <Star className="h-4 w-4 mr-1" /> Individuelles Design
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {premiumServices.map((service, index) => (
            <div key={service.id} className="animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
              <ServiceCard
                id={service.id}
                title={service.title}
                description={getEnhancedPremiumDescription(service)}
                imageUrl={service.imageUrl}
              />
              <div className="mt-4 text-center">
                <Button asChild className="bg-dental-turquoise hover:bg-dental-blue">
                  <Link to={`/services/${service.id}`}>Mehr erfahren</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA after premium services */}
        <div className="bg-dental-beige rounded-lg p-8 shadow-md animate-on-scroll">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-3 text-dental-blue">Interesse an unseren Premium-Behandlungen?</h3>
              <p className="text-dental-gray mb-0">
                Vereinbaren Sie eine kostenlose Beratung und erfahren Sie mehr über Ihre individuellen Möglichkeiten.
              </p>
            </div>
            <div className="md:w-1/3 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-dental-turquoise hover:bg-dental-blue flex items-center justify-center">
                <Link to="/appointment">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="block">Termin buchen</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumServiceSection;
