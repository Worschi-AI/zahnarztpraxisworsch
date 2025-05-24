
import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, ScanSearch, Microscope, Tablet, Zap } from 'lucide-react';

const technologies = [
  {
    name: "Digitales Röntgen & 3D-Diagnostik (DVT)",
    description: "Strahlungsarm und hochpräzise für eine exakte Planung, besonders bei Implantaten und komplexen Fällen.",
    icon: <Camera className="h-8 w-8 text-dental-turquoise" />,
    linkTo: "/services/prophylaxe"
  },
  {
    name: "Intraorale Kamera",
    description: "Erleben Sie Ihre Zahnsituation live mit und verstehen Sie jeden Behandlungsschritt.",
    icon: <Camera className="h-8 w-8 text-dental-turquoise" />,
    linkTo: "/services/prophylaxe"
  },
  {
    name: "CAD/CAM-Technologie",
    description: "Für passgenauen, computerdesignten und -gefertigten Zahnersatz (Kronen, Brücken, Veneers) oft in nur einer Sitzung.",
    icon: <Tablet className="h-8 w-8 text-dental-turquoise" />,
    linkTo: "/services/zahnersatz"
  },
  {
    name: "Laser-Zahnheilkunde",
    description: "Schonende und schmerzarme Behandlungen für Zahnfleisch, bei Wurzelkanalbehandlungen oder zur Keimreduktion.",
    icon: <Zap className="h-8 w-8 text-dental-turquoise" />,
    linkTo: "/services"
  },
  {
    name: "Digitale Abformung",
    description: "Kein unangenehmer Abdrucklöffel mehr – für höchsten Komfort und präzise Modelle.",
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
            <h2 className="mb-6 text-dental-blue">Technologie für Ihr schönstes Lächeln – Innovation in unserer Dresdner Praxis</h2>
            <p className="text-lg mb-6 text-dental-gray">
              Um Ihnen die bestmögliche Behandlung und ästhetisch perfekte Ergebnisse zu bieten, setzen wir in unserer <strong>Zahnarztpraxis in Dresden Laubegast</strong> auf führende Technologien:
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
            
            <p className="text-dental-gray mt-6">
              Diese Technologien ermöglichen uns nicht nur präzisere Diagnosen und Behandlungen, sondern oft auch kürzere Behandlungszeiten und eine angenehmere Erfahrung für Sie als Patient.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
