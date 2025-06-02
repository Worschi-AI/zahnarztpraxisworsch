import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { team } from '@/data/team';

const TeamPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="mb-4 text-dental-blue">Unser Team – Kompetenz trifft Herzlichkeit</h2>
          <p className="text-lg max-w-3xl mx-auto text-dental-gray">
            Lernen Sie unser dynamisches Praxisteam kennen! Wir sind ein hochqualifiziertes, eingespieltes Team aus erfahrenen Zahnärzten und Fachkräften in Dresden, das sich kontinuierlich fortbildet. Unsere Spezialisierungen in ästhetischer Zahnmedizin, Implantologie und digitaler Zahnheilkunde garantieren Ihnen Behandlungen auf höchstem Niveau.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {team.slice(0, 3).map((member, index) => (
            <div key={member.id} className="flex flex-col items-center text-center animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-dental-blue p-1">
                <img 
                  src={member.imageUrl} 
                  alt={`${member.name}, ${member.role} - Zahnarztpraxis Worsch Dresden`} 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-dental-blue">{member.name}</h3>
              <p className="text-dental-turquoise mb-4 font-medium">{member.role}</p>
              <p className="text-dental-gray max-w-xs leading-relaxed">{member.bio.substring(0, 120)}...</p>
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
