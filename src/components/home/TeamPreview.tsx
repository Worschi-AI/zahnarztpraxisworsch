
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { team } from '@/data/team';
import { Sparkles, Star, Users } from 'lucide-react';

const TeamPreview = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-white via-white to-gray-50/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-dental-turquoise/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-dental-blue/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Users className="absolute top-20 left-1/4 w-5 h-5 text-dental-turquoise/25 animate-pulse" />
        <Star className="absolute bottom-24 right-1/3 w-4 h-4 text-dental-blue/20 animate-pulse delay-1000" />
        <Sparkles className="absolute top-1/2 left-1/6 w-6 h-6 text-dental-turquoise/15 animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 lg:mb-12 animate-on-scroll">
          <h2 className="mb-4 text-dental-blue text-xl md:text-2xl lg:text-3xl xl:text-4xl bg-gradient-to-r from-dental-blue via-dental-blue to-dental-turquoise bg-clip-text text-transparent font-bold">
            Unser Team – Kompetenz trifft Herzlichkeit
          </h2>
          <p className="text-base lg:text-lg max-w-3xl mx-auto text-dental-gray hover:text-dental-blue/80 transition-colors duration-300">
            Lernen Sie unser dynamisches Praxisteam kennen! Wir sind ein hochqualifiziertes, eingespieltes Team aus erfahrenen Zahnärzten und Fachkräften in Dresden, das sich kontinuierlich fortbildet. Unsere Spezialisierungen in ästhetischer Zahnmedizin, Implantologie und digitaler Zahnheilkunde garantieren Ihnen Behandlungen auf höchstem Niveau.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 mb-8 lg:mb-12">
          {team.slice(0, 3).map((member, index) => (
            <div key={member.id} className="flex flex-col items-center text-center animate-on-scroll group" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden mb-4 lg:mb-6 border-4 border-dental-blue p-1 relative group-hover:border-dental-turquoise transition-all duration-500">
                {/* Background glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-dental-blue/20 to-dental-turquoise/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <img 
                  src={member.imageUrl} 
                  alt={`${member.name}, ${member.role} - Zahnarztpraxis Worsch Dresden`} 
                  className="w-full h-full object-cover rounded-full transform group-hover:scale-105 transition-transform duration-500 brightness-105 group-hover:brightness-110"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-dental-blue/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-lg lg:text-xl font-bold mb-2 text-dental-blue group-hover:text-dental-turquoise transition-colors duration-300">
                {member.name}
              </h3>
              
              <div className="bg-gradient-to-r from-dental-turquoise/10 to-dental-blue/10 px-3 py-1 rounded-full mb-3 lg:mb-4 group-hover:from-dental-turquoise/20 group-hover:to-dental-blue/20 transition-all duration-300">
                <p className="text-dental-turquoise font-medium text-sm lg:text-base">
                  {member.role}
                </p>
              </div>
              
              <p className="text-dental-gray max-w-xs leading-relaxed text-sm lg:text-base group-hover:text-dental-blue/80 transition-colors duration-300">
                {member.bio.substring(0, 120)}...
              </p>

              {/* Decorative element */}
              <div className="mt-3 w-8 h-0.5 bg-gradient-to-r from-dental-turquoise to-dental-blue rounded-full opacity-60 group-hover:opacity-100 group-hover:w-12 transition-all duration-300"></div>
            </div>
          ))}
        </div>
        
        <div className="text-center animate-on-scroll">
          <Button asChild className="bg-gradient-to-r from-dental-turquoise to-dental-blue hover:from-dental-blue hover:to-dental-turquoise hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl btn-hover-effect">
            <Link to="/team" className="flex items-center gap-2">
              <Users className="w-5 h-5 animate-pulse" />
              Zum gesamten Team
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;
