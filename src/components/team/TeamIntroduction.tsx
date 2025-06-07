
import React from 'react';

const TeamIntroduction = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-on-scroll">
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-dental-blue mb-6 lg:mb-8">
            Ihr Team für Zahngesundheit & Ästhetik in Dresden: Erfahren & Empathisch
          </h2>
          <div className="space-y-4 lg:space-y-6 text-base lg:text-lg text-dental-gray max-w-4xl mx-auto leading-relaxed">
            <p>
              In der Zahnarztpraxis Worsch in Dresden-Laubegast erwartet Sie ein hochqualifiziertes und herzliches Team, das sich mit größter Leidenschaft Ihrer Zahngesundheit und insbesondere Ihren individuellen ästhetischen Wünschen widmet.
            </p>
            <p>
              Wir legen größten Wert auf eine persönliche Betreuung, schaffen eine angenehme und entspannte Atmosphäre und arbeiten stets für Behandlungsergebnisse, die Sie begeistern werden. Kontinuierliche Fort- und Weiterbildungen in allen Bereichen der modernen Zahnmedizin, besonders in der ästhetischen Zahnheilkunde und Implantologie, sind für uns dabei eine Selbstverständlichkeit – für Ihre optimale Versorgung.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamIntroduction;
