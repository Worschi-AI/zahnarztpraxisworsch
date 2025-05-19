
import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, ScanSearch, Microscope, Tablet, Zap } from 'lucide-react';

const technologies = [
  {
    name: "Digitales Röntgen",
    description: "Strahlungsreduzierte Aufnahmen für eine präzise Diagnose bei maximaler Schonung.",
    icon: <Camera className="h-8 w-8 text-dental-turquoise" />,
    linkTo: "/services/prophylaxe"
  },
  {
    name: "Intraorale Kamera",
    description: "Sehen Sie Ihren Zahn aus der Perspektive des Zahnarztes für ein besseres Verständnis Ihrer Behandlung.",
    icon: <Camera className="h-8 w-8 text-dental-turquoise" />,
    linkTo: "/services/prophylaxe"
  },
  {
    name: "CAD/CAM-Technologie",
    description: "Digitale Planung und präzise Fertigung von Zahnersatz für schnellere und passgenauere Ergebnisse.",
    icon: <Tablet className="h-8 w-8 text-dental-turquoise" />,
    linkTo: "/services/zahnersatz"
  },
  {
    name: "Laser-Behandlung",
    description: "Schonende Therapie für verschiedene Anwendungen mit minimaler Belastung und schnellerer Heilung.",
    icon: <Zap className="h-8 w-8 text-dental-turquoise" />,
    linkTo: "/services"
  },
  {
    name: "3D-Implantatplanung",
    description: "Hochpräzise Planung für sichere und optimale Positionierung Ihrer Zahnimplantate in Dresden.",
    icon: <ScanSearch className="h-8 w-8 text-dental-turquoise" />,
    linkTo: "/services/implantologie"
  }
];

const TechnologySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 animate-on-scroll">
            <img 
              src="https://images.unsplash.com/photo-1605098293544-25f4c32344c8?q=80&w=1774&auto=format&fit=crop" 
              alt="Moderne Zahnarztausstattung in der Praxis Worsch Dresden" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 animate-on-scroll">
            <h2 className="mb-6 text-dental-blue">Moderne Technologie</h2>
            <p className="text-lg mb-6 text-dental-gray">
              Für Ihre optimale Versorgung in unserer <strong>Zahnarztpraxis in Dresden</strong> setzen wir auf modernste technische Ausstattung. 
              So können wir präzise diagnostizieren und Sie schonend behandeln.
            </p>
            
            <div className="space-y-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-dental-beige p-5 rounded-lg hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      {tech.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        <Link to={tech.linkTo} className="text-dental-blue hover:text-dental-turquoise transition-colors">
                          {tech.name}
                        </Link>
                      </h3>
                      <p className="text-dental-gray">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
