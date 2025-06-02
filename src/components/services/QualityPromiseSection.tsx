
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const QualityPromiseSection = () => {
  // Custom checkmark SVG icon
  const CheckmarkIcon = () => (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" fill="#28A745" />
      <path 
        d="M9 12l2 2 4-4" 
        stroke="white" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );

  const qualityPoints = [
    {
      title: "Modernste Technologie",
      description: "Digitales Röntgen, 3D-Diagnostik und Intraoralkameras ermöglichen präzise Diagnosen und schonende Behandlungen. Unsere hochmoderne Ausstattung ist Ihr Garant für erstklassige Ergebnisse."
    },
    {
      title: "Hochwertige Materialien",
      description: "Wir verwenden ausschließlich biokompatible Materialien höchster Güte. Vollkeramik, Titan-Implantate und moderne Komposite sorgen für langlebige, ästhetische Lösungen."
    },
    {
      title: "Kontinuierliche Fortbildung",
      description: "Unser Team bildet sich regelmäßig weiter und ist zertifiziert in den neuesten Behandlungsmethoden. So profitieren Sie immer von den modernsten Verfahren der Zahnmedizin."
    },
    {
      title: "Strenge Hygiene",
      description: "Höchste Hygienestandards und moderne Sterilisationsverfahren sorgen für Ihre Sicherheit. Unsere Praxis erfüllt alle aktuellen Richtlinien und wird regelmäßig überprüft."
    },
    {
      title: "Transparente Beratung",
      description: "Ausführliche Aufklärung, detaillierte Behandlungspläne und faire Preise. Sie wissen immer, was gemacht wird und was es kostet – ohne versteckte Kosten."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 animate-on-scroll">
            <h2 className="mb-6 text-dental-blue">Unser Qualitätsversprechen – Höchste Standards für Sie</h2>
            <p className="text-lg text-dental-gray mb-8">
              Ihre Gesundheit und Ihr strahlendes Lächeln stehen für uns an erster Stelle. Unsere Behandlungsqualität orientiert sich stets an den höchsten Standards modernster Zahnmedizin. Vertrauen Sie auf unser Engagement und unsere Leidenschaft für Ihr perfektes Lächeln – wir begleiten Sie auf diesem Weg.
            </p>
            
            {/* Quality points with custom styling */}
            <div 
              className="mb-8"
              style={{
                margin: '0 20px',
                padding: '0 0 40px 0'
              }}
            >
              {qualityPoints.map((point, index) => (
                <div 
                  key={index}
                  className="animate-slide-left"
                  style={{
                    marginBottom: '25px',
                    animationDelay: `${index * 100}ms`,
                    animationDuration: '0.5s',
                    animationTimingFunction: 'ease-out'
                  }}
                >
                  <div className="flex items-start">
                    <div style={{ marginRight: '10px', flexShrink: 0, marginTop: '2px' }}>
                      <CheckmarkIcon />
                    </div>
                    <div>
                      <h4 
                        style={{
                          fontWeight: '600',
                          lineHeight: '1.4',
                          marginBottom: '5px'
                        }}
                        className="text-dental-gray"
                      >
                        {point.title}
                      </h4>
                      <p 
                        style={{
                          fontWeight: '400',
                          lineHeight: '1.6'
                        }}
                        className="text-dental-gray"
                      >
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <Button asChild className="bg-dental-turquoise hover:bg-dental-blue">
              <Link to="/team">Lernen Sie unser Team kennen</Link>
            </Button>
          </div>
          
          <div className="md:w-1/2 animate-scale-in" style={{ animationDuration: '0.7s', animationTimingFunction: 'ease-out' }}>
            <div 
              className="overflow-hidden"
              style={{
                borderRadius: '12px',
                boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.12)',
                margin: '40px 20px 20px 20px'
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1770&auto=format&fit=crop" 
                alt="Moderne Zahnmedizin - Zahnarztpraxis Worsch Dresden" 
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover'
                }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityPromiseSection;
