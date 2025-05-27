
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const HeroIntroSection = () => {
  return (
    <section className="py-20 bg-dental-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 animate-on-scroll">
            <h2 className="mb-6 text-dental-blue">Willkommen bei Zahnarzt Worsch – Ihrem Partner für ein strahlendes Lächeln in Dresden</h2>
            
            <p className="text-lg mb-6 text-dental-gray">
              Herzlich willkommen in der <strong>Zahnarztpraxis Worsch</strong>, Ihrem modernen Zentrum für Zahngesundheit und Ästhetik im Herzen von <strong>Dresden-Laubegast</strong>. 
            </p>
            
            <div className="bg-dental-beige/30 p-6 rounded-lg mb-6">
              <p className="text-lg text-dental-gray">
                <strong>Seit über 32 Jahren</strong> sind wir für unsere Patienten da und verbinden dabei Erfahrung mit Innovation. Wir verstehen, dass ein Lächeln mehr ist als nur gesunde Zähne – es ist ein Ausdruck Ihrer Persönlichkeit und Ihres Wohlbefindens.
              </p>
            </div>
            
            <p className="text-lg mb-4 text-dental-gray">
              Deshalb verbinden wir zahnmedizinische Exzellenz mit einem besonderen Fokus auf <strong>ästhetische Ergebnisse</strong>, die Sie begeistern werden.
            </p>
            
            <p className="text-lg mb-8 text-dental-gray">
              Unser junges und engagiertes Team setzt auf innovative Technologien und individuelle Behandlungskonzepte, um Ihnen nicht nur gesunde, sondern auch wunderschöne Zähne zu ermöglichen. Ob Sie eine umfassende Beratung wünschen, sich für ästhetische Korrekturen interessieren oder eine hochwertige zahnmedizinische Versorgung suchen – <strong>bei uns sind Sie in besten Händen</strong>.
            </p>
            
            <Button asChild className="bg-dental-turquoise hover:bg-dental-blue hover:scale-105 transition-all duration-300 text-white px-6 py-3">
              <Link to="/about">Mehr über uns erfahren</Link>
            </Button>
          </div>
          <div className="md:w-1/2 animate-on-scroll">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1968&auto=format&fit=crop" 
                alt="Moderne Praxisräume der Zahnarztpraxis Worsch in Dresden Laubegast" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroIntroSection;
