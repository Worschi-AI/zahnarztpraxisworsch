
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';
import IconRenderer from '@/components/IconRenderer';

const FeaturedServices = () => {
  // Featured services (top 3) - selecting premium services
  const featuredServices = services.filter(service => 
    ['implantologie', 'aesthetische-zahnheilkunde', 'zahnersatz'].includes(service.id)
  ).slice(0, 3);

  return (
    <section className="py-20 bg-dental-beige">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Main content */}
          <div className="animate-on-scroll">
            <div className="mb-6">
              <span className="text-dental-turquoise font-medium">Unsere Leistungen</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-dental-blue mb-6 leading-tight">
              Exzellenz in Ästhetik & Funktion – Unsere Premium-Leistungen für Ihr Lächeln
            </h2>
            <p className="text-lg text-dental-gray mb-8 leading-relaxed">
              Entdecken Sie bei uns spezialisierte Behandlungen, die modernste Zahnmedizin mit höchsten ästhetischen Ansprüchen vereinen. Gemeinsam gestalten wir Ihr schönstes und gesündestes Lächeln.
            </p>
            <Button asChild className="bg-dental-turquoise hover:bg-dental-blue">
              <Link to="/services">Alle Leistungen ansehen</Link>
            </Button>
          </div>

          {/* Right side - Services grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* Service 1 - Ästhetische Zahnheilkunde */}
            <div className="animate-on-scroll bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-dental-turquoise/10 rounded-xl flex items-center justify-center mb-4">
                <IconRenderer iconName="sparkles" className="text-dental-turquoise" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-dental-blue mb-2">
                Ästhetische Zahnheilkunde
              </h3>
              <p className="text-sm text-dental-gray leading-relaxed">
                Ihr Weg zum Traumlächeln. Von schonendem Bleaching bis zu unsichtbaren Zahnkorrekturen wie Veneers.
              </p>
            </div>

            {/* Service 2 - Implantologie */}
            <div className="animate-on-scroll bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow" style={{ animationDelay: '100ms' }}>
              <div className="w-12 h-12 bg-dental-blue/10 rounded-xl flex items-center justify-center mb-4">
                <IconRenderer iconName="heart" className="text-dental-blue" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-dental-blue mb-2">
                Implantologie
              </h3>
              <p className="text-sm text-dental-gray leading-relaxed">
                Endlich wieder unbeschwert lachen und kauen. Mit hochwertigen Zahnimplantaten schenken wir Ihnen Ihr volles Lächeln zurück.
              </p>
            </div>

            {/* Service 3 - Zahnersatz */}
            <div className="animate-on-scroll bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow" style={{ animationDelay: '200ms' }}>
              <div className="w-12 h-12 bg-dental-turquoise/10 rounded-xl flex items-center justify-center mb-4">
                <IconRenderer iconName="shield" className="text-dental-turquoise" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-dental-blue mb-2">
                Zahnersatz
              </h3>
              <p className="text-sm text-dental-gray leading-relaxed">
                Perfektion, die sich sehen und fühlen lässt. Wir fertigen Ihren individuellen Zahnersatz aus besten Materialien.
              </p>
            </div>

            {/* Service 4 - Moderne Technologie */}
            <div className="animate-on-scroll bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow" style={{ animationDelay: '300ms' }}>
              <div className="w-12 h-12 bg-dental-blue/10 rounded-xl flex items-center justify-center mb-4">
                <IconRenderer iconName="settings" className="text-dental-blue" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-dental-blue mb-2">
                Moderne Technologie
              </h3>
              <p className="text-sm text-dental-gray leading-relaxed">
                Mit modernster Technologie und digitaler Diagnostik sorgen wir für präzise und schonende Behandlungen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
