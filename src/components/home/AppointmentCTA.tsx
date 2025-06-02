
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, Sparkles } from 'lucide-react';
import PhoneButton from '@/components/PhoneButton';

const AppointmentCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-dental-turquoise via-dental-blue to-dental-turquoise text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-32 right-20 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Floating sparkles */}
      <div className="absolute top-20 right-1/4">
        <Sparkles className="w-6 h-6 text-white/30 animate-pulse" />
      </div>
      <div className="absolute bottom-32 left-1/4">
        <Sparkles className="w-4 h-4 text-white/20 animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-2xl mx-auto animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <Calendar className="w-4 h-4 text-white" />
            <span className="text-white font-medium text-sm">Ihr Termin wartet auf Sie</span>
          </div>
          
          <h2 className="mb-6 text-white drop-shadow-lg">
            Bereit für Ihr strahlendes Lächeln? Ihre Zahnarztpraxis Worsch in Dresden freut sich auf Sie!
          </h2>
          
          <p className="text-lg mb-10 text-white/90 leading-relaxed drop-shadow-sm">
            Vereinbaren Sie jetzt ganz einfach Ihren persönlichen Beratungstermin in der <strong>Zahnarztpraxis Worsch</strong>. 
            Wir nehmen uns gerne Zeit, um Ihnen die vielfältigen Möglichkeiten modernster ästhetischer Zahnmedizin aufzuzeigen und Ihr Wunschlächeln Wirklichkeit werden zu lassen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-white text-dental-blue hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 shadow-xl hover:shadow-2xl group relative overflow-hidden px-8 py-4">
              <Link to="/appointment" className="flex items-center gap-3 relative z-10">
                <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" aria-hidden="true" />
                <span className="font-semibold">Online Termin buchen</span>
                
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
            </Button>
            
            <PhoneButton
              size="lg"
              className="bg-white/10 text-white hover:bg-white/20 transition-all hover:scale-105 border border-white/20 backdrop-blur-sm shadow-xl hover:shadow-2xl px-8 py-4 group relative overflow-hidden"
              buttonText="Telefonisch Termin vereinbaren"
              showIcon={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentCTA;
