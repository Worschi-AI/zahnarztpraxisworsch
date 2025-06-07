
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, Phone, Award } from 'lucide-react';
import PhoneButton from '@/components/PhoneButton';

const ImplantologieHero = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=1769&auto=format&fit=crop)`,
          filter: "brightness(0.7)"
        }}
        aria-hidden="true"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-dental-blue/85 to-dental-blue/60 z-10" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl text-white animate-fade-in">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-6 h-6 text-dental-turquoise" />
            <span className="text-dental-turquoise font-medium">Über 500 erfolgreich gesetzte Implantate</span>
          </div>
          
          <h1 className="mb-6 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Zahnimplantate Dresden – Festsitzender Zahnersatz bei Dr. Worsch
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed">
            Modernste Implantologie mit 3D-Planung und schonenden Verfahren in Dresden-Laubegast. 
            Festsitzender Zahnersatz, der sich anfühlt wie Ihre eigenen Zähne.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button asChild size="lg" className="bg-dental-turquoise hover:bg-dental-blue hover:scale-105 transform transition-all duration-300 text-lg px-8 py-6">
              <Link to="/appointment">
                <Calendar className="w-5 h-5 mr-2" />
                Jetzt Beratungstermin buchen
              </Link>
            </Button>
            <PhoneButton 
              phoneNumber="0351 2522709" 
              size="lg"
              className="bg-white/90 text-dental-gray hover:bg-white border-white/50 hover:border-white text-lg px-8 py-6"
              buttonText="Telefonisch beraten lassen"
              iconPosition="left"
            />
          </div>
          
          <div className="text-sm opacity-90">
            ✓ Spezialist für Implantologie ✓ 3D-Diagnostik ✓ Schonende Verfahren ✓ Langjährige Erfahrung
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplantologieHero;
