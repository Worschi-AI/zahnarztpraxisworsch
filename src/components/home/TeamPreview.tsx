
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { team } from '@/data/team';

const TeamPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="mb-4 text-dental-blue">Lernen Sie unser Team kennen – Kompetenz und Einfühlungsvermögen</h2>
          <p className="text-lg max-w-2xl mx-auto text-dental-gray">
            Bei <strong>Zahnarzt Worsch in Dresden</strong> erwartet Sie ein Team, das nicht nur fachlich exzellent, sondern auch menschlich überzeugt. Wir nehmen uns Zeit für Sie und Ihre Wünsche.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {team.slice(0, 2).map((member, index) => (
            <div key={member.id} className="w-full md:w-5/12 lg:w-[30%] animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="bg-dental-beige rounded-lg p-6 h-full flex flex-col items-center text-center hover-scale">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                  <img 
                    src={member.imageUrl} 
                    alt={`${member.name}, ${member.role} - Zahnarztpraxis Worsch Dresden`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-dental-turquoise mb-4">{member.role}</p>
                <p className="text-dental-gray line-clamp-3 mb-4">{member.bio.substring(0, 100)}...</p>
              </div>
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
