
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
        {/* Desktop: Two-column layout, Mobile: Single column */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
          
          {/* Text section - left column on desktop, top on mobile */}
          <div className="animate-on-scroll mb-12 lg:mb-0 lg:sticky lg:top-8">
            <div className="mb-6">
              <span className="text-dental-turquoise font-medium">Unsere Leistungen</span>
            </div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-dental-blue mb-6 leading-tight">
              Exzellenz in Ästhetik & Funktion – Unsere Premium-Leistungen für Ihr Lächeln
            </h2>
            <p className="text-lg text-dental-gray mb-8 leading-relaxed">
              Entdecken Sie bei uns spezialisierte Behandlungen, die modernste Zahnmedizin mit höchsten ästhetischen Ansprüchen vereinen. Gemeinsam gestalten wir Ihr schönstes und gesündestes Lächeln.
            </p>
            
            {/* Button - in text section on desktop */}
            <div className="hidden lg:block">
              <Button asChild className="bg-dental-turquoise hover:bg-dental-blue">
                <Link to="/services">Alle Leistungen ansehen</Link>
              </Button>
            </div>
          </div>

          {/* Services section - right column on desktop */}
          <div>
            {/* Services grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mb-12 lg:mb-0">
              {/* Service 1 - Ästhetische Zahnheilkunde */}
              <Link 
                to={`/services/${getServiceData('aesthetische-zahnheilkunde').id}`}
                className="animate-on-scroll bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 block group"
              >
                <div className="w-12 h-12 bg-dental-turquoise/10 rounded-xl flex items-center justify-center mb-4">
                  <IconRenderer iconName="sparkles" className="text-dental-turquoise" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-dental-blue mb-2">
                  {getServiceData('aesthetische-zahnheilkunde').title}
                </h3>
                <p className="text-sm text-dental-gray leading-relaxed mb-4">
                  Ihr Weg zum Traumlächeln. Von schonendem Bleaching bis zu unsichtbaren Zahnkorrekturen wie Veneers.
                </p>
                <div className="inline-flex items-center gap-2 text-dental-turquoise group-hover:text-dental-blue transition-colors font-medium text-sm">
                  Mehr erfahren <ArrowRight size={14} />
                </div>
              </Link>

              {/* Service 2 - Implantologie */}
              <Link 
                to={`/services/${getServiceData('implantologie').id}`}
                className="animate-on-scroll bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 block group"
                style={{ animationDelay: '100ms' }}
              >
                <div className="w-12 h-12 bg-dental-blue/10 rounded-xl flex items-center justify-center mb-4">
                  <IconRenderer iconName="heart" className="text-dental-blue" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-dental-blue mb-2">
                  {getServiceData('implantologie').title}
                </h3>
                <p className="text-sm text-dental-gray leading-relaxed mb-4">
                  Endlich wieder unbeschwert lachen und kauen. Mit hochwertigen Zahnimplantaten schenken wir Ihnen Ihr volles Lächeln zurück.
                </p>
                <div className="inline-flex items-center gap-2 text-dental-turquoise group-hover:text-dental-blue transition-colors font-medium text-sm">
                  Mehr erfahren <ArrowRight size={14} />
                </div>
              </Link>

              {/* Service 3 - Zahnersatz */}
              <Link 
                to={`/services/${getServiceData('zahnersatz').id}`}
                className="animate-on-scroll bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 block group"
                style={{ animationDelay: '200ms' }}
              >
                <div className="w-12 h-12 bg-dental-turquoise/10 rounded-xl flex items-center justify-center mb-4">
                  <IconRenderer iconName="shield" className="text-dental-turquoise" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-dental-blue mb-2">
                  {getServiceData('zahnersatz').title}
                </h3>
                <p className="text-sm text-dental-gray leading-relaxed mb-4">
                  Perfektion, die sich sehen und fühlen lässt. Wir fertigen Ihren individuellen Zahnersatz aus besten Materialien.
                </p>
                <div className="inline-flex items-center gap-2 text-dental-turquoise group-hover:text-dental-blue transition-colors font-medium text-sm">
                  Mehr erfahren <ArrowRight size={14} />
                </div>
              </Link>

              {/* Service 4 - Moderne Technologie */}
              <Link 
                to="/services"
                className="animate-on-scroll bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 block group"
                style={{ animationDelay: '300ms' }}
              >
                <div className="w-12 h-12 bg-dental-blue/10 rounded-xl flex items-center justify-center mb-4">
                  <IconRenderer iconName="settings" className="text-dental-blue" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-dental-blue mb-2">
                  Moderne Technologie
                </h3>
                <p className="text-sm text-dental-gray leading-relaxed mb-4">
                  Mit modernster Technologie und digitaler Diagnostik sorgen wir für präzise und schonende Behandlungen.
                </p>
                <div className="inline-flex items-center gap-2 text-dental-turquoise group-hover:text-dental-blue transition-colors font-medium text-sm">
                  Mehr erfahren <ArrowRight size={14} />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Button - below cards on mobile only */}
        <div className="text-center lg:hidden">
          <Button asChild className="bg-dental-turquoise hover:bg-dental-blue">
            <Link to="/services">Alle Leistungen ansehen</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
