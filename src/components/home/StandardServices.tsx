
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';

const StandardServices = () => {
  return (
    <section className="py-20 bg-dental-beige" id="standard-services">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-on-scroll">
          <h2 className="mb-4 text-dental-blue">Umfassende Zahnmedizin für Ihre Gesundheit in Dresden</h2>
          <p className="text-lg text-dental-gray">
            Neben unseren ästhetischen Spezialisierungen bieten wir Ihnen selbstverständlich das gesamte Spektrum moderner Zahnheilkunde für Ihre langfristige Mundgesundheit.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {services.filter(service => 
            !['implantologie', 'aesthetische-zahnheilkunde', 'zahnersatz'].includes(service.id)
          ).slice(0, 6).map((service, index) => (
            <div key={service.id} className="animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
                <h3 className="font-semibold text-dental-blue mb-2">{service.title}</h3>
                <p className="text-dental-gray text-sm mb-4">
                  {service.id === 'parodontologie' ? 'Effektive Behandlung von Zahnfleischerkrankungen für langfristige Mundgesundheit und ein gesundes Fundament für Ihr Lächeln.' :
                   service.id === 'kinderzahnheilkunde' ? 'Einfühlsame und altersgerechte Zahnbehandlung für Ihre Kleinen in entspannter Atmosphäre – der Grundstein für lebenslange Zahngesundheit.' :
                   service.id === 'endodontie' ? 'Schmerzfreie Wurzelbehandlungen mit modernster Technik zum Erhalt Ihrer natürlichen Zähne und eines strahlenden Lächelns.' :
                   service.id === 'funktionstherapie' ? 'Wirksame Behandlung von CMD und Kiefergelenkbeschwerden für schmerzfreies Wohlbefinden und harmonische Gesichtszüge.' :
                   service.id === 'prophylaxe' ? 'Professionelle Zahnreinigung für strahlend weiße Zähne und umfassenden Schutz – die Basis für dauerhafte Zahngesundheit.' :
                   'Schonende Entfernung nicht erhaltungswürdiger Zähne und sichere Weisheitszahnentfernung mit modernsten Verfahren.'}
                </p>
                <div className="mt-auto">
                  <Link to={`/services/${service.id}`} className="text-dental-turquoise hover:text-dental-blue font-medium">
                    Details ansehen
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-6 animate-on-scroll">
          <Button asChild className="bg-dental-turquoise hover:bg-dental-blue">
            <Link to="/services">Alle Leistungen ansehen</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StandardServices;
