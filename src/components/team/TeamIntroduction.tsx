
import React from 'react';
import TeamMember from '@/components/TeamMember';
import { team } from '@/data/team';

const TeamIntroduction = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
          <h2 className="mb-6 text-dental-blue">Ihr Team für Zahngesundheit & Ästhetik in Dresden: Erfahren & Empathisch.</h2>
          <p className="text-lg text-dental-gray">
            In der <strong>Zahnarztpraxis Worsch in Dresden-Laubegast</strong> erwartet Sie ein hochqualifiziertes und herzliches Team, 
            das sich mit größter Leidenschaft Ihrer Zahngesundheit und insbesondere Ihren individuellen ästhetischen Wünschen widmet. 
            Wir legen größten Wert auf eine persönliche Betreuung, schaffen eine angenehme und entspannte Atmosphäre und arbeiten 
            stets für Behandlungsergebnisse, die Sie begeistern werden. Kontinuierliche Fort- und Weiterbildungen in allen Bereichen 
            der modernen Zahnmedizin, besonders in der ästhetischen Zahnheilkunde und Implantologie, sind für uns dabei eine 
            Selbstverständlichkeit – für Ihre optimale Versorgung.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <div key={member.id} className="animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
              <TeamMember
                id={member.id}
                name={member.name}
                role={member.role}
                bio={member.bio}
                imageUrl={member.imageUrl}
                specializations={member.specializations}
                education={member.education}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamIntroduction;
