
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  IconMicroscope,
  IconDiamond,
  IconHeart,
} from '@tabler/icons-react';

const QualityPromiseSection = () => {
  const qualityPoints = [
    {
      title: "Modernste Technologie",
      description: "Digitales Röntgen, 3D-Diagnostik und Intraoralkameras ermöglichen präzise Diagnosen und schonende Implantologie. Unsere hochmoderne Ausstattung ist Ihr Garant für erstklassige Ergebnisse.",
      icon: <IconMicroscope className="w-8 h-8" />,
    },
    {
      title: "Hochwertige Materialien",
      description: "Wir verwenden ausschließlich biokompatible Materialien höchster Güte. Vollkeramik, Titan-Zahnimplantate und moderne Komposite sorgen für langlebige, ästhetische Lösungen.",
      icon: <IconDiamond className="w-8 h-8" />,
    },
    {
      title: "Transparente Beratung",
      description: "Ausführliche Aufklärung, detaillierte Behandlungspläne und faire Preise für Implantate, Bleaching & Co. Ihr Zahnarzt in Dresden informiert Sie transparent – ohne versteckte Kosten.",
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
          "flex flex-col lg:border-r py-4 lg:py-6 relative group/feature border-dental-blue/10",
          (index === 0) && "lg:border-l border-dental-blue/10",
          index < 2 && "lg:border-b border-dental-blue/10"
        )}
      >
        {index < 2 && (
          <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-dental-beige/30 to-transparent pointer-events-none" />
        )}
        {index >= 2 && (
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
    <section className="py-12 lg:py-20 bg-white relative overflow-hidden">
      {/* Dezente Eck-Dekorationen */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-32 h-32 bg-dental-turquoise/20 rounded-full blur-[70px]"></div>
        <div className="absolute top-1/3 left-0 w-28 h-28 bg-dental-blue/22 rounded-full blur-[65px]"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-dental-turquoise/18 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-dental-blue/20 rounded-full blur-[55px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-12">
          <div className="w-full lg:w-1/3 animate-on-scroll">
            <h2 className="mb-4 lg:mb-6 text-dental-blue text-xl lg:text-2xl xl:text-3xl leading-tight">
              Unser Qualitätsversprechen – Höchste Standards für Sie
            </h2>
            <p className="text-base lg:text-lg text-dental-gray mb-4 lg:mb-6">
              Ihre Gesundheit und Ihr strahlendes Lächeln stehen für uns an erster Stelle. Unsere Behandlungsqualität orientiert sich stets an den höchsten Standards modernster Zahnmedizin.
            </p>
          </div>
          
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 max-w-5xl">
              {qualityPoints.map((feature, index) => (
                <Feature key={feature.title} {...feature} index={index} />
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 lg:mt-12 text-center animate-on-scroll">
          <Button asChild className="bg-dental-turquoise hover:bg-dental-blue hover:scale-105 transform transition-all duration-300 text-white shadow-lg hover:shadow-xl mb-8 lg:mb-12">
            <Link to="/team">Lernen Sie unser Team kennen</Link>
          </Button>
        </div>
        
        <div className="animate-on-scroll">
          <div className="max-w-4xl mx-auto">
            {/* Image Collage inspired by the reference */}
            <div className="grid grid-cols-2 gap-4 h-[400px]">
              {/* Top left image */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1000&auto=format&fit=crop" 
                  alt="Glückliche Patientin bei der Zahnbehandlung" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Right side - stacked images */}
              <div className="flex flex-col gap-4">
                {/* Top right image */}
                <div className="rounded-2xl overflow-hidden shadow-lg flex-1">
                  <img 
                    src="https://images.unsplash.com/photo-1609840114035-3c981e9cd8e1?q=80&w=1000&auto=format&fit=crop" 
                    alt="Moderne Zahnarztpraxis Dresden" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                
                {/* Bottom right image */}
                <div className="rounded-2xl overflow-hidden shadow-lg flex-1">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1770&auto=format&fit=crop" 
                    alt="Zahnarzt Team bei der Behandlung" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityPromiseSection;
