
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  IconMicroscope,
  IconDiamond,
  IconSchool,
  IconShieldCheck,
  IconHeart,
} from '@tabler/icons-react';

const QualityPromiseSection = () => {
  const qualityPoints = [
    {
      title: "Modernste Technologie",
      description: "Digitales Röntgen, 3D-Diagnostik und Intraoralkameras ermöglichen präzise Diagnosen und schonende Behandlungen. Unsere hochmoderne Ausstattung ist Ihr Garant für erstklassige Ergebnisse.",
      icon: <IconMicroscope className="w-8 h-8" />,
    },
    {
      title: "Hochwertige Materialien",
      description: "Wir verwenden ausschließlich biokompatible Materialien höchster Güte. Vollkeramik, Titan-Implantate und moderne Komposite sorgen für langlebige, ästhetische Lösungen.",
      icon: <IconDiamond className="w-8 h-8" />,
    },
    {
      title: "Kontinuierliche Fortbildung",
      description: "Unser Team bildet sich regelmäßig weiter und ist zertifiziert in den neuesten Behandlungsmethoden. So profitieren Sie immer von den modernsten Verfahren der Zahnmedizin.",
      icon: <IconSchool className="w-8 h-8" />,
    },
    {
      title: "Strenge Hygiene",
      description: "Höchste Hygienestandards und moderne Sterilisationsverfahren sorgen für Ihre Sicherheit. Unsere Praxis erfüllt alle aktuellen Richtlinien und wird regelmäßig überprüft.",
      icon: <IconShieldCheck className="w-8 h-8" />,
    },
    {
      title: "Transparente Beratung",
      description: "Ausführliche Aufklärung, detaillierte Behandlungspläne und faire Preise. Sie wissen immer, was gemacht wird und was es kostet – ohne versteckte Kosten.",
      icon: <IconHeart className="w-8 h-8" />,
    }
  ];

  const Feature = ({
    title,
    description,
    icon,
    index,
  }: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
  }) => {
    return (
      <div
        className={cn(
          "flex flex-col lg:border-r py-6 lg:py-10 relative group/feature border-dental-blue/10",
          (index === 0) && "lg:border-l border-dental-blue/10",
          index < 3 && "lg:border-b border-dental-blue/10"
        )}
      >
        {index < 3 && (
          <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-dental-beige/30 to-transparent pointer-events-none" />
        )}
        {index >= 3 && (
          <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-dental-beige/30 to-transparent pointer-events-none" />
        )}
        <div className="mb-4 relative z-10 px-6 lg:px-10 text-dental-turquoise">
          {icon}
        </div>
        <div className="text-base lg:text-lg font-bold mb-2 relative z-10 px-6 lg:px-10">
          <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-dental-blue/20 group-hover/feature:bg-dental-turquoise transition-all duration-200 origin-center" />
          <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-dental-blue">
            {title}
          </span>
        </div>
        <p className="text-sm text-dental-gray relative z-10 px-6 lg:px-10">
          {description}
        </p>
      </div>
    );
  };

  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          <div className="w-full lg:w-1/3 animate-on-scroll">
            <h2 className="mb-4 lg:mb-6 text-dental-blue text-lg lg:text-xl xl:text-2xl leading-tight">
              Qualitätsversprechen
            </h2>
            <p className="text-base lg:text-lg text-dental-gray mb-6 lg:mb-8">
              Ihre Gesundheit und Ihr strahlendes Lächeln stehen für uns an erster Stelle. Unsere Behandlungsqualität orientiert sich stets an den höchsten Standards modernster Zahnmedizin.
            </p>
            
            <Button asChild className="bg-dental-turquoise hover:bg-dental-blue">
              <Link to="/team">Lernen Sie unser Team kennen</Link>
            </Button>
          </div>
          
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 max-w-5xl">
              {qualityPoints.map((feature, index) => (
                <Feature key={feature.title} {...feature} index={index} />
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 lg:mt-16 animate-on-scroll">
          <div 
            className="overflow-hidden"
            style={{
              borderRadius: '12px',
              boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.12)',
              margin: '0 auto',
              maxWidth: '800px'
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1770&auto=format&fit=crop" 
              alt="Moderne Zahnmedizin - Zahnarztpraxis Worsch Dresden" 
              style={{
                width: '100%',
                height: '300px',
                objectFit: 'cover'
              }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityPromiseSection;
