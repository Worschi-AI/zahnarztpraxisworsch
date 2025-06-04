
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users } from 'lucide-react';

const TeamPreview = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-dental-beige">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="animate-on-scroll">
            <div className="mb-4 lg:mb-6">
              <span className="text-dental-turquoise font-medium text-sm md:text-base">Unser Team</span>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-dental-blue mb-4 lg:mb-6 leading-tight">
              Lernen Sie Ihren Zahnarzt in Dresden-Laubegast und sein erfahrenes Praxisteam kennen!
            </h2>
            <p className="text-base lg:text-lg text-dental-gray mb-6 lg:mb-8 leading-relaxed">
              Als hochqualifizierte Fachkräfte bilden wir uns kontinuierlich fort. Unsere Spezialisierung auf Implantologie, ästhetische Zahnheilkunde und digitale Diagnostik sichert Ihnen Behandlungen auf höchstem medizinischen Niveau.
            </p>
            <Button asChild className="bg-dental-turquoise hover:bg-dental-blue">
              <Link to="/team">
                <Users className="w-4 h-4 mr-2" />
                Unser Team kennenlernen
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {/* Team Member 1 */}
            <div className="animate-on-scroll bg-white rounded-2xl p-4 lg:p-6 hover:shadow-lg transition-all duration-300" style={{ animationDelay: '100ms' }}>
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-dental-turquoise/10 rounded-full flex items-center justify-center mb-3 lg:mb-4">
                <Users className="text-dental-turquoise" size={24} />
              </div>
              <h3 className="text-base lg:text-lg font-semibold text-dental-blue mb-1 lg:mb-2">
                Dr. Ute Worsch
              </h3>
              <p className="text-sm lg:text-base text-dental-gray mb-2 lg:mb-3">
                Praxisinhaberin
              </p>
              <p className="text-xs lg:text-sm text-dental-gray leading-relaxed">
                Spezialistin für ästhetische Zahnmedizin
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="animate-on-scroll bg-white rounded-2xl p-4 lg:p-6 hover:shadow-lg transition-all duration-300" style={{ animationDelay: '200ms' }}>
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-dental-blue/10 rounded-full flex items-center justify-center mb-3 lg:mb-4">
                <Users className="text-dental-blue" size={24} />
              </div>
              <h3 className="text-base lg:text-lg font-semibold text-dental-blue mb-1 lg:mb-2">
                Peik Worsch
              </h3>
              <p className="text-sm lg:text-base text-dental-gray mb-2 lg:mb-3">
                Zahnarzt
              </p>
              <p className="text-xs lg:text-sm text-dental-gray leading-relaxed">
                Spezialist für Implantologie
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="animate-on-scroll bg-white rounded-2xl p-4 lg:p-6 hover:shadow-lg transition-all duration-300" style={{ animationDelay: '300ms' }}>
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-dental-turquoise/10 rounded-full flex items-center justify-center mb-3 lg:mb-4">
                <Users className="text-dental-turquoise" size={24} />
              </div>
              <h3 className="text-base lg:text-lg font-semibold text-dental-blue mb-1 lg:mb-2">
                Fachpersonal
              </h3>
              <p className="text-sm lg:text-base text-dental-gray mb-2 lg:mb-3">
                Prophylaxe Team
              </p>
              <p className="text-xs lg:text-sm text-dental-gray leading-relaxed">
                Professionelle Zahnreinigung
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="animate-on-scroll bg-white rounded-2xl p-4 lg:p-6 hover:shadow-lg transition-all duration-300" style={{ animationDelay: '400ms' }}>
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-dental-blue/10 rounded-full flex items-center justify-center mb-3 lg:mb-4">
                <Users className="text-dental-blue" size={24} />
              </div>
              <h3 className="text-base lg:text-lg font-semibold text-dental-blue mb-1 lg:mb-2">
                Praxisteam
              </h3>
              <p className="text-sm lg:text-base text-dental-gray mb-2 lg:mb-3">
                Assistenz & Verwaltung
              </p>
              <p className="text-xs lg:text-sm text-dental-gray leading-relaxed">
                Terminkoordination & Beratung
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;
