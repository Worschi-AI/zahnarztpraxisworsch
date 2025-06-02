
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, Phone, Sparkles, Clock } from 'lucide-react';
import PhoneButton from '@/components/PhoneButton';

const AppointmentCTA = () => {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-br from-dental-turquoise via-dental-blue to-dental-turquoise text-white overflow-hidden">
      {/* Enhanced Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-dental-turquoise/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Geometric decorations */}
        <div className="absolute top-20 right-20 w-6 h-6 bg-white/20 transform rotate-45 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-8 h-8 bg-dental-turquoise/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-white/30 transform rotate-45 animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        {/* Floating icons */}
        <div className="absolute top-40 left-1/4 opacity-10">
          <Calendar className="w-12 h-12 text-white animate-pulse" />
        </div>
        <div className="absolute bottom-40 right-1/4 opacity-10">
          <Clock className="w-10 h-10 text-dental-turquoise animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-20">
        <div className="max-w-2xl mx-auto animate-on-scroll">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Calendar className="w-6 h-6 text-white animate-pulse" />
            <span className="text-sm font-medium opacity-90">Ihr Termin wartet</span>
            <Sparkles className="w-4 h-4 text-white animate-bounce" />
          </div>
          
          <h2 className="mb-4 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold relative">
            <span className="bg-gradient-to-r from-white to-dental-turquoise bg-clip-text text-transparent">
              Bereit für Ihr strahlendes Lächeln?
            </span>
            <br />
            <span className="text-white">
              Ihre Zahnarztpraxis Worsch in Dresden freut sich auf Sie!
            </span>
            <div className="absolute -top-2 -right-4 animate-pulse">
              <Sparkles className="w-5 h-5 text-white opacity-70" />
            </div>
          </h2>
          
          <p className="text-base lg:text-lg mb-6 lg:mb-8 opacity-90 leading-relaxed">
            Vereinbaren Sie jetzt ganz einfach Ihren persönlichen Beratungstermin in der <strong className="text-white">Zahnarztpraxis Worsch</strong>. 
            Online-Buchung rund um die Uhr über Doctolib oder rufen Sie uns direkt an.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-dental-blue hover:bg-dental-beige hover:scale-105 transform transition-all duration-500 hover:shadow-2xl hover:shadow-white/25 relative overflow-hidden group font-semibold"
            >
              <Link to="/appointment">
                <span className="absolute inset-0 bg-dental-turquoise/20 transform -skew-x-12 -translate-x-full transition-transform duration-700 group-hover:translate-x-full"></span>
                <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" aria-hidden="true" />
                <span className="relative z-10">Online Termin buchen</span>
              </Link>
            </Button>
            
            <PhoneButton
              size="lg"
              className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-dental-blue transition-all hover:scale-105 hover:shadow-xl relative overflow-hidden group"
              buttonText="Telefonisch Termin vereinbaren"
              showIcon={true}
            />
          </div>
          
          {/* Additional trust indicators */}
          <div className="mt-8 flex items-center justify-center gap-6 opacity-75">
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4" />
              <span>24/7 Online-Buchung</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone className="w-4 h-4" />
              <span>Persönliche Beratung</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentCTA;
