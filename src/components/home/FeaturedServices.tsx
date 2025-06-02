
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';
import IconRenderer from '@/components/IconRenderer';
import { ArrowRight } from 'lucide-react';

const FeaturedServices = () => {
  // Featured services (top 3) - selecting premium services
  const featuredServices = services.filter(service => 
    ['implantologie', 'aesthetische-zahnheilkunde', 'zahnersatz'].includes(service.id)
  ).slice(0, 3);

  // Get service data for each specific service
  const getServiceData = (serviceId: string) => {
    const service = featuredServices.find(s => s.id === serviceId);
    return {
      title: service?.title || '',
      shortDescription: service?.shortDescription || '',
      id: serviceId
    };
  };

  return (
    <section className="py-20 bg-dental-beige">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left side - Main content */}
          <div className="animate-on-scroll order-2 lg:order-1">
            <div className="mb-6">
              <span className="text-dental-turquoise font-medium">Unsere Leistungen</span>
            </div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-dental-blue mb-6 leading-tight">
              Exzellenz in Ästhetik & Funktion – Unsere Premium-Leistungen für Ihr Lächeln
            </h2>
            <p className="text-lg text-dental-gray mb-8 leading-relaxed">
              Entdecken Sie bei uns spezialisierte Behandlungen, die modernste Zahnmedizin mit höchsten ästhetischen Ansprüchen vereinen. Gemeinsam gestalten wir Ihr schönstes und gesündestes Lächeln.
            </p>
            
            {/* Button - hidden on mobile, shown on desktop */}
            <div className="hidden lg:block">
              <Button asChild className="bg-dental-turquoise hover:bg-dental-blue">
                <Link to="/services">Alle Leistungen ansehen</Link>
              </Button>
            </div>
          </div>

          {/* Right side - Services grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 order-1 lg:order-2">
            {/* Service 1 - Ästhetische Zahnheilkunde */}
            <div className="animate-on-scroll bg-white rounded-2xl p-4 lg:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-dental-turquoise/10 rounded-xl flex items-center justify-center mb-4">
                <IconRenderer iconName="sparkles" className="text-dental-turquoise" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-dental-blue mb-2">
                {getServiceData('aesthetische-zahnheilkunde').title}
              </h3>
              <p className="text-sm text-dental-gray leading-relaxed mb-4">
                Ihr Weg zum Traumlächeln. Von schonendem Bleaching bis zu unsichtbaren Zahnkorrekturen wie Veneers.
              </p>
              <Link 
                to={`/services/${getServiceData('aesthetische-zahnheilkunde').id}`}
                className="inline-flex items-center gap-2 text-dental-turquoise hover:text-dental-blue transition-colors font-medium text-sm"
              >
                Mehr erfahren <ArrowRight size={14} />
              </Link>
            </div>

            {/* Service 2 - Implantologie */}
            <div className="animate-on-scroll bg-white rounded-2xl p-4 lg:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1" style={{ animationDelay: '100ms' }}>
              <div className="w-12 h-12 bg-dental-blue/10 rounded-xl flex items-center justify-center mb-4">
                <IconRenderer iconName="heart" className="text-dental-blue" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-dental-blue mb-2">
                {getServiceData('implantologie').title}
              </h3>
              <p className="text-sm text-dental-gray leading-relaxed mb-4">
                Endlich wieder unbeschwert lachen und kauen. Mit hochwertigen Zahnimplantaten schenken wir Ihnen Ihr volles Lächeln zurück.
              </p>
              <Link 
                to={`/services/${getServiceData('implantologie').id}`}
                className="inline-flex items-center gap-2 text-dental-turquoise hover:text-dental-blue transition-colors font-medium text-sm"
              >
                Mehr erfahren <ArrowRight size={14} />
              </Link>
            </div>

            {/* Service 3 - Zahnersatz */}
            <div className="animate-on-scroll bg-white rounded-2xl p-4 lg:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 sm:col-span-2 lg:col-span-1" style={{ animationDelay: '200ms' }}>
              <div className="w-12 h-12 bg-dental-turquoise/10 rounded-xl flex items-center justify-center mb-4">
                <IconRenderer iconName="shield" className="text-dental-turquoise" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-dental-blue mb-2">
                {getServiceData('zahnersatz').title}
              </h3>
              <p className="text-sm text-dental-gray leading-relaxed mb-4">
                Perfektion, die sich sehen und fühlen lässt. Wir fertigen Ihren individuellen Zahnersatz aus besten Materialien.
              </p>
              <Link 
                to={`/services/${getServiceData('zahnersatz').id}`}
                className="inline-flex items-center gap-2 text-dental-turquoise hover:text-dental-blue transition-colors font-medium text-sm"
              >
                Mehr erfahren <ArrowRight size={14} />
              </Link>
            </div>

            {/* Service 4 - Moderne Technologie */}
            <div className="animate-on-scroll bg-white rounded-2xl p-4 lg:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 sm:col-start-2 lg:col-start-auto" style={{ animationDelay: '300ms' }}>
              <div className="w-12 h-12 bg-dental-blue/10 rounded-xl flex items-center justify-center mb-4">
                <IconRenderer iconName="settings" className="text-dental-blue" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-dental-blue mb-2">
                Moderne Technologie
              </h3>
              <p className="text-sm text-dental-gray leading-relaxed mb-4">
                Mit modernster Technologie und digitaler Diagnostik sorgen wir für präzise und schonende Behandlungen.
              </p>
              <Link 
                to="/services"
                className="inline-flex items-center gap-2 text-dental-turquoise hover:text-dental-blue transition-colors font-medium text-sm"
              >
                Mehr erfahren <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Button - shown on mobile below cards */}
        <div className="lg:hidden mt-8 text-center">
          <Button asChild className="bg-dental-turquoise hover:bg-dental-blue">
            <Link to="/services">Alle Leistungen ansehen</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
