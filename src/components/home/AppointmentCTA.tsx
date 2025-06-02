
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, Sparkles, Star, Phone } from 'lucide-react';
import PhoneButton from '@/components/PhoneButton';

const AppointmentCTA = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-dental-turquoise via-dental-blue to-dental-turquoise text-white relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-dental-turquoise/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-0 w-24 h-24 bg-white/15 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute top-1/4 right-0 w-28 h-28 bg-dental-turquoise/25 rounded-full blur-2xl animate-pulse delay-700"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Calendar className="absolute top-20 left-1/6 w-5 h-5 text-white/20 animate-pulse" />
        <Sparkles className="absolute bottom-24 right-1/6 w-4 h-4 text-dental-turquoise/40 animate-pulse delay-1000" />
        <Star className="absolute top-1/3 right-1/4 w-6 h-6 text-white/15 animate-pulse delay-500" />
        <Phone className="absolute bottom-1/3 left-1/5 w-4 h-4 text-dental-turquoise/30 animate-pulse delay-800" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-2xl mx-auto animate-on-scroll">
          {/* Enhanced title with gradient text */}
          <h2 className="mb-4 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-white via-white to-dental-turquoise bg-clip-text text-transparent">
            Bereit für Ihr strahlendes Lächeln? Ihre Zahnarztpraxis Worsch in Dresden freut sich auf Sie!
          </h2>
          
          <p className="text-base lg:text-lg mb-6 lg:mb-8 text-white/95 leading-relaxed">
            Vereinbaren Sie jetzt ganz einfach Ihren persönlichen Beratungstermin in der <strong className="text-white">Zahnarztpraxis Worsch</strong>. 
            Online-Buchung rund um die Uhr über Doctolib oder rufen Sie uns direkt an.
          </p>
          
          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-dental-blue hover:bg-dental-beige hover:text-dental-blue hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl btn-hover-effect group">
              <Link to="/appointment" className="flex items-center gap-2">
                <Calendar className="w-5 h-5 group-hover:animate-pulse" aria-hidden="true" />
                <span>Online Termin buchen</span>
                <Sparkles className="w-4 h-4 group-hover:animate-pulse" />
              </Link>
            </Button>
            
            <PhoneButton
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-dental-blue transition-all hover:scale-105 shadow-lg hover:shadow-xl group"
              buttonText="Telefonisch Termin vereinbaren"
              showIcon={true}
            />
          </div>

          {/* Trust indicators */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 animate-on-scroll delay-200">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Star className="w-4 h-4 text-dental-turquoise animate-pulse" />
              <span className="text-sm text-white/90">Online 24/7 buchbar</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Calendar className="w-4 h-4 text-dental-turquoise" />
              <span className="text-sm text-white/90">Flexible Termine</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentCTA;
