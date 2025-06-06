
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
      <div className="group relative">
        {/* Card container with hover effects */}
        <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-layered transition-all duration-300 hover:-translate-y-2 border border-gray-100">
          {/* Icon container */}
          <div className="mb-6 relative">
            <div className="w-16 h-16 bg-gradient-to-br from-dental-turquoise/10 to-dental-blue/10 rounded-xl flex items-center justify-center group-hover:from-dental-turquoise/20 group-hover:to-dental-blue/20 transition-all duration-300">
              <div className="text-dental-turquoise group-hover:text-dental-blue transition-colors duration-300">
                {icon}
              </div>
            </div>
          </div>
          
          {/* Content */}
          <h3 className="text-lg font-semibold text-dental-blue mb-3 group-hover:text-dental-turquoise transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-dental-gray leading-relaxed">
            {description}
          </p>
          
          {/* Subtle accent line */}
          <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-dental-turquoise to-dental-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Dezente Hintergrund-Dekorationen */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-32 h-32 bg-dental-turquoise/10 rounded-full blur-[70px]"></div>
        <div className="absolute top-1/3 left-0 w-28 h-28 bg-dental-blue/15 rounded-full blur-[65px]"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-dental-turquoise/8 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-dental-blue/12 rounded-full blur-[55px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 animate-on-scroll">
          <h2 className="mb-6 text-dental-blue text-2xl lg:text-3xl font-bold leading-tight">
            Unser Qualitätsversprechen – Höchste Standards für Sie
          </h2>
          <p className="text-dental-gray leading-relaxed">
            Ihre Gesundheit und Ihr strahlendes Lächeln stehen für uns an erster Stelle. Unsere Behandlungsqualität orientiert sich stets an den höchsten Standards modernster Zahnmedizin.
          </p>
        </div>
        
        {/* Quality Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {qualityPoints.map((feature, index) => (
            <div key={feature.title} className="animate-on-scroll" style={{ animationDelay: `${index * 150}ms` }}>
              <Feature {...feature} index={index} />
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="text-center mb-16 animate-on-scroll">
          <Button asChild className="bg-dental-turquoise hover:bg-dental-blue hover:scale-105 transform transition-all duration-300 text-white shadow-lg hover:shadow-xl px-8 py-6 text-lg rounded-xl">
            <Link to="/team">Lernen Sie unser Team kennen</Link>
          </Button>
        </div>
        
        {/* Image Collage */}
        <div className="animate-on-scroll">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 gap-6 h-[400px]">
              {/* Top left image */}
              <div className="rounded-3xl overflow-hidden shadow-layered hover:shadow-luxury transition-all duration-300 hover:-translate-y-1">
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1000&auto=format&fit=crop" 
                  alt="Glückliche Patientin bei der Zahnbehandlung" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              
              {/* Right side - stacked images */}
              <div className="flex flex-col gap-6">
                {/* Top right image */}
                <div className="rounded-3xl overflow-hidden shadow-layered hover:shadow-luxury transition-all duration-300 hover:-translate-y-1 flex-1">
                  <img 
                    src="https://images.unsplash.com/photo-1609840114035-3c981e9cd8e1?q=80&w=1000&auto=format&fit=crop" 
                    alt="Moderne Zahnarztpraxis Dresden" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                
                {/* Bottom right image */}
                <div className="rounded-3xl overflow-hidden shadow-layered hover:shadow-luxury transition-all duration-300 hover:-translate-y-1 flex-1">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1770&auto=format&fit=crop" 
                    alt="Zahnarzt Team bei der Behandlung" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
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
