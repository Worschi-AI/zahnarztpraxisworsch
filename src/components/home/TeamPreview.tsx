
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { team } from '@/data/team';
import { Sparkles, Users } from 'lucide-react';

const TeamPreview = () => {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-br from-white via-dental-beige/20 to-white overflow-hidden">
      {/* Enhanced Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-br from-dental-turquoise/6 to-dental-blue/6 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-br from-dental-blue/6 to-dental-turquoise/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-dental-turquoise/4 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '6s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 lg:mb-12 animate-on-scroll">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Users className="w-6 h-6 text-dental-turquoise animate-pulse" />
            <span className="text-dental-turquoise font-medium text-sm md:text-base">Unser Team</span>
            <Sparkles className="w-4 h-4 text-dental-turquoise animate-bounce" />
          </div>
          <h2 className="mb-4 text-dental-blue text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold relative">
            Unser Team – Kompetenz trifft Herzlichkeit
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-dental-turquoise to-dental-blue rounded-full"></div>
          </h2>
          <p className="text-base lg:text-lg max-w-3xl mx-auto text-dental-gray hover:text-dental-blue/80 transition-colors duration-300 leading-relaxed">
            Lernen Sie unser dynamisches Praxisteam kennen! Wir sind ein hochqualifiziertes, eingespieltes Team aus erfahrenen Zahnärzten und Fachkräften in Dresden, das sich kontinuierlich fortbildet. Unsere Spezialisierungen in ästhetischer Zahnmedizin, Implantologie und digitaler Zahnheilkunde garantieren Ihnen Behandlungen auf höchstem Niveau.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12 mb-8 lg:mb-12">
          {team.slice(0, 3).map((member, index) => (
            <div 
              key={member.id} 
              className="group flex flex-col items-center text-center animate-on-scroll hover:scale-105 transition-all duration-500" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative w-40 h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden mb-4 lg:mb-6 border-4 border-dental-blue/20 p-1 group-hover:border-dental-turquoise group-hover:shadow-2xl group-hover:shadow-dental-turquoise/25 transition-all duration-500">
                {/* Background decoration */}
                <div className="absolute -inset-2 bg-gradient-to-br from-dental-turquoise/20 to-dental-blue/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <img 
                  src={member.imageUrl} 
                  alt={`${member.name}, ${member.role} - Zahnarztpraxis Worsch Dresden`} 
                  className="relative z-10 w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-dental-blue/20 via-transparent to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="relative">
                <h3 className="text-lg lg:text-xl font-bold mb-2 text-dental-blue group-hover:text-dental-turquoise transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-dental-turquoise mb-3 lg:mb-4 font-medium text-sm lg:text-base group-hover:text-dental-blue transition-colors duration-300">
                  {member.role}
                </p>
                <p className="text-dental-gray max-w-xs leading-relaxed text-sm lg:text-base group-hover:text-dental-blue/80 transition-colors duration-300">
                  {member.bio.substring(0, 120)}...
                </p>
                
                {/* Decorative element */}
                <div className="mt-4 w-12 h-0.5 bg-gradient-to-r from-dental-turquoise to-dental-blue mx-auto rounded-full opacity-0 group-hover:opacity-100 group-hover:w-16 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center animate-on-scroll">
          <Button 
            asChild 
            className="bg-gradient-to-r from-dental-turquoise to-dental-blue hover:from-dental-blue hover:to-dental-turquoise transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-dental-turquoise/25 relative overflow-hidden group"
          >
            <Link to="/team">
              <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full transition-transform duration-700 group-hover:translate-x-full"></span>
              <span className="relative z-10">Zum gesamten Team</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;
