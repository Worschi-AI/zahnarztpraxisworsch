
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { team } from '@/data/team';

const TeamPreview = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden" style={{ backgroundColor: '#edf2fa' }}>
      {/* Dezente Eck-Dekorationen mit Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-20 h-20 bg-dental-turquoise/25 rounded-full blur-[50px] animate-float"></div>
        <div className="absolute top-0 right-0 w-24 h-24 bg-dental-blue/22 rounded-full blur-[55px] animate-float animate-delay-200"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-dental-turquoise/18 rounded-full blur-[65px] animate-float animate-delay-400"></div>
        <div className="absolute bottom-0 right-0 w-28 h-28 bg-dental-blue/25 rounded-full blur-[60px] animate-float animate-delay-100"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 lg:mb-12 animate-on-scroll">
          <h2 className="mb-4 text-dental-blue text-xl md:text-2xl lg:text-3xl xl:text-4xl">Unser Team – Kompetenz trifft Herzlichkeit</h2>
          <p className="text-base lg:text-lg max-w-3xl mx-auto text-dental-gray">
            Lernen Sie Ihren Zahnarzt in Dresden-Laubegast und sein erfahrenes Praxisteam kennen! Unsere Spezialisierung auf Implantologie, ästhetische Zahnheilkunde und digitale Diagnostik sichert Ihnen Behandlungen auf höchstem medizinischen Niveau.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 mb-8 lg:mb-12">
          {team.slice(0, 3).map((member, index) => (
            <div key={member.id} className="flex flex-col items-center text-center animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden mb-4 lg:mb-6 relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-dental-turquoise/20 to-dental-blue/20 rounded-full blur-lg"></div>
                <div className="relative w-full h-full border-4 border-dental-blue p-1 rounded-full shadow-layered">
                  <img 
                    src={member.imageUrl} 
                    alt={`${member.name}, ${member.role} - Zahnarztpraxis Worsch Dresden`} 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <h3 className="text-lg lg:text-xl font-bold mb-2 text-dental-blue">{member.name}</h3>
              <p className="text-dental-turquoise mb-3 lg:mb-4 font-medium text-sm lg:text-base">{member.role}</p>
              <p className="text-dental-gray max-w-xs leading-relaxed text-sm lg:text-base">{member.bio.substring(0, 120)}...</p>
            </div>
          ))}
        </div>
        
        <div className="text-center animate-on-scroll">
          <Button asChild className="bg-gradient-to-r from-dental-turquoise to-dental-blue text-white hover:from-dental-blue hover:to-dental-turquoise transition-all duration-300 shadow-lg hover:shadow-xl">
            <Link to="/team">Zum gesamten Team</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;
