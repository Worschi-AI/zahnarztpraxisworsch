import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { team } from '@/data/team';

const TeamPreview = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-dental-beige relative overflow-hidden">
      {/* Intensive Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-8 w-80 h-80 bg-dental-turquoise/50 rounded-full blur-[300px]"></div>
        <div className="absolute top-32 right-8 w-72 h-72 bg-dental-blue/45 rounded-full blur-[280px]"></div>
        <div className="absolute bottom-16 left-1/4 w-88 h-88 bg-dental-turquoise/40 rounded-full blur-[320px]"></div>
        <div className="absolute bottom-8 right-8 w-76 h-76 bg-dental-blue/55 rounded-full blur-[290px]"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-dental-turquoise/35 rounded-full blur-[260px]"></div>
        <div className="absolute top-16 left-1/2 w-56 h-56 bg-dental-blue/40 rounded-full blur-[240px]"></div>
        <div className="absolute bottom-32 right-1/2 w-68 h-68 bg-dental-turquoise/45 rounded-full blur-[270px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 lg:mb-12 animate-on-scroll">
          <h2 className="mb-4 text-dental-blue text-xl md:text-2xl lg:text-3xl xl:text-4xl">Unser Team – Kompetenz trifft Herzlichkeit</h2>
          <p className="text-base lg:text-lg max-w-3xl mx-auto text-dental-gray">
            Lernen Sie unser dynamisches Praxisteam kennen! Wir sind ein hochqualifiziertes, eingespieltes Team aus erfahrenen Zahnärzten und Fachkräften in Dresden, das sich kontinuierlich fortbildet. Unsere Spezialisierungen in ästhetischer Zahnmedizin, Implantologie und digitaler Zahnheilkunde garantieren Ihnen Behandlungen auf höchstem Niveau.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 mb-8 lg:mb-12">
          {team.slice(0, 3).map((member, index) => (
            <div key={member.id} className="flex flex-col items-center text-center animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden mb-4 lg:mb-6 border-4 border-dental-blue p-1">
                <img 
                  src={member.imageUrl} 
                  alt={`${member.name}, ${member.role} - Zahnarztpraxis Worsch Dresden`} 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-lg lg:text-xl font-bold mb-2 text-dental-blue">{member.name}</h3>
              <p className="text-dental-turquoise mb-3 lg:mb-4 font-medium text-sm lg:text-base">{member.role}</p>
              <p className="text-dental-gray max-w-xs leading-relaxed text-sm lg:text-base">{member.bio.substring(0, 120)}...</p>
            </div>
          ))}
        </div>
        
        <div className="text-center animate-on-scroll">
          <Button asChild className="bg-dental-turquoise hover:bg-dental-blue">
            <Link to="/team">Zum gesamten Team</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;
