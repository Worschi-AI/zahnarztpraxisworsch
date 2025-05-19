
import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';
import { testimonials } from '@/data/testimonials';
import { team } from '@/data/team';
import { Star, CheckCircle, Calendar } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const Index = () => {
  // Use the scroll animation hook
  useScrollAnimation();

  // Featured services (top 3) - selecting premium services
  const featuredServices = services.filter(service => 
    ['implantologie', 'aesthetische-zahnheilkunde', 'zahnersatz'].includes(service.id)
  ).slice(0, 3);
  
  // Featured testimonials (top 3)
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with dental-specific image */}
      <HeroSection 
        title="Zahnarztpraxis Worsch Dresden: Ihr Experte für Implantologie & Ästhetische Zahnmedizin" 
        subtitle="Modernste Zahnheilkunde und individuelle Betreuung für Ihr strahlendes Lächeln" 
        backgroundImage="https://images.unsplash.com/photo-1629909615957-f6d7e5bd7a25?q=80&w=1769&auto=format&fit=crop"
        ctaText="Jetzt Wunschtermin finden"
      />

      {/* Intro Section */}
      <section className="py-20 bg-dental-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 animate-on-scroll">
              <h2 className="mb-6 text-dental-blue">Willkommen in unserer Praxis in Dresden</h2>
              <p className="text-lg mb-6 text-dental-gray">
                In unserer modernen <strong>Zahnarztpraxis in Dresden</strong> steht Ihr Wohlbefinden an erster Stelle. Mit einem erfahrenen Team, 
                modernsten Technologien und einem ganzheitlichen Behandlungsansatz sorgen wir für Ihre Zahngesundheit 
                in angenehmer Atmosphäre.
              </p>
              <p className="text-lg mb-8 text-dental-gray">
                Unser Ziel ist es, Ihnen zu einem strahlenden Lächeln zu verhelfen und Ihre Zähne ein Leben lang 
                gesund zu erhalten. Als <strong>Zahnarzt in Dresden</strong> setzen wir auf präventive Maßnahmen, 
                schonende Behandlungsmethoden und eine vertrauensvolle Zusammenarbeit.
              </p>
              <Button asChild className="bg-dental-turquoise hover:bg-dental-blue hover:scale-105 transition-all duration-300 text-white px-6 py-3">
                <Link to="/about">Mehr über uns erfahren</Link>
              </Button>
            </div>
            <div className="md:w-1/2 animate-on-scroll">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1968&auto=format&fit=crop" 
                  alt="Moderne Praxisräume der Zahnarztpraxis Worsch in Dresden" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Reviews Teaser */}
      <section className="py-8 bg-dental-beige">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg p-5 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 animate-on-scroll">
            <div className="flex items-center">
              <Star className="h-8 w-8 text-yellow-400 fill-yellow-400 mr-3" aria-hidden="true" />
              <div>
                <p className="font-bold text-dental-blue text-lg mb-1">Über 95% zufriedene Patienten</p>
                <p className="text-dental-gray">Unsere Patienten in Dresden vertrauen uns seit Jahren.</p>
              </div>
            </div>
            <Button asChild variant="outline" className="border-dental-blue text-dental-blue hover:bg-dental-blue hover:text-white whitespace-nowrap">
              <Link to="/about#testimonials">Erfahrungsberichte lesen</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Premium Services Section */}
      <section className="py-20 bg-dental-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="mb-4 text-dental-blue">Unsere Premium-Leistungen in Dresden</h2>
            <p className="text-lg max-w-2xl mx-auto text-dental-gray">
              Wir bieten Ihnen hochwertige <strong>zahnmedizinische Leistungen in Dresden</strong> - von 
              erstklassigen Implantatlösungen über ästhetische Zahnmedizin bis hin zu hochwertigem Zahnersatz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div key={service.id} className="animate-on-scroll flex flex-col h-full" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard
                  id={service.id}
                  title={service.title}
                  description={
                    service.id === 'implantologie' 
                      ? `Fester Zahnersatz für ein natürliches Lächeln und höchste Lebensqualität. Dank modernster 3D-Planung und hochwertiger Implantate sind Sie bei uns in Dresden in besten Händen.` 
                      : service.id === 'aesthetische-zahnheilkunde'
                      ? `Perfekte Ästhetik für strahlend schöne Zähne. Mit Veneers, Bleaching und hochwertigen Füllungen sorgen wir für Ihr traumhaftes Lächeln – schonend und individuell angepasst.`
                      : `Hochwertige Kronen, Brücken und Prothesen für perfekte Funktion und natürliche Ästhetik. Qualität und Langlebigkeit stehen bei uns an erster Stelle.`
                  }
                  imageUrl={
                    service.id === 'implantologie' 
                      ? "https://images.unsplash.com/photo-1601986413153-05c2466c26e4?q=80&w=1770&auto=format&fit=crop" 
                      : service.id === 'aesthetische-zahnheilkunde'
                      ? "https://images.unsplash.com/photo-1581585095152-9f21db44503c?q=80&w=1770&auto=format&fit=crop"
                      : "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1770&auto=format&fit=crop"
                  }
                />
                <div className="mt-4 text-center">
                  <Button asChild className="bg-dental-turquoise hover:bg-dental-blue">
                    <Link to={`/services/${service.id}`}>Details ansehen</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-on-scroll">
            <Button asChild className="bg-dental-turquoise hover:bg-dental-blue">
              <Link to="/services">Alle Leistungen ansehen</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Team Teaser */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="mb-4 text-dental-blue">Unser Expertenteam in Dresden</h2>
            <p className="text-lg max-w-2xl mx-auto text-dental-gray">
              Lernen Sie unser erfahrenes und freundliches <strong>Zahnarztteam in Dresden</strong> kennen, 
              das sich kompetent um Ihre Zahngesundheit kümmert.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {team.slice(0, 2).map((member, index) => (
              <div key={member.id} className="w-full md:w-5/12 lg:w-[30%] animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="bg-dental-beige rounded-lg p-6 h-full flex flex-col items-center text-center hover-scale">
                  <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                    <img 
                      src={member.imageUrl} 
                      alt={`${member.name}, ${member.role} - Zahnarztpraxis Worsch Dresden`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-dental-turquoise mb-4">{member.role}</p>
                  <p className="text-dental-gray line-clamp-3 mb-4">{member.bio.substring(0, 100)}...</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center animate-on-scroll">
            <Button asChild className="bg-dental-turquoise hover:bg-dental-blue">
              <Link to="/team">Ganzes Team kennenlernen</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quality Promise Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 animate-on-scroll">
              <h2 className="mb-6 text-dental-blue">Unser Qualitätsversprechen an Sie</h2>
              <p className="text-lg mb-6 text-dental-gray">
                Bei allen Behandlungen in unserer <strong>Zahnarztpraxis in Dresden</strong> legen wir größten Wert auf Qualität und Langlebigkeit. 
                Wir verwenden ausschließlich hochwertige Materialien und arbeiten mit renommierten 
                Laboren zusammen, um Ihnen die bestmöglichen Ergebnisse zu garantieren.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-dental-turquoise mr-2 flex-shrink-0 mt-1" aria-hidden="true" />
                  <span className="text-dental-gray">Wir setzen modernste Technologien und Materialien für optimale Behandlungsergebnisse ein</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-dental-turquoise mr-2 flex-shrink-0 mt-1" aria-hidden="true" />
                  <span className="text-dental-gray">Unser Team bildet sich regelmäßig fort, um Ihnen neueste Behandlungsmethoden anbieten zu können</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-dental-turquoise mr-2 flex-shrink-0 mt-1" aria-hidden="true" />
                  <span className="text-dental-gray">Sie erhalten von uns stets transparente Kostenaufstellungen vor jeder Behandlung</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-dental-turquoise mr-2 flex-shrink-0 mt-1" aria-hidden="true" />
                  <span className="text-dental-gray">Wir nehmen uns Zeit für Ihre persönlichen Bedürfnisse und individuelle Therapieplanung</span>
                </div>
              </div>
              <Button asChild className="bg-dental-turquoise hover:bg-dental-blue">
                <Link to="/team">Lernen Sie unser Team kennen</Link>
              </Button>
            </div>
            <div className="md:w-1/2 animate-on-scroll">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1770&auto=format&fit=crop" 
                  alt="Hochwertige Zahnbehandlung in der Zahnarztpraxis Worsch Dresden" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Standard Services */}
      <section className="py-20 bg-dental-beige" id="standard-services">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-on-scroll">
            <h2 className="mb-4 text-dental-blue">Weitere Zahnmedizinische Leistungen in Dresden</h2>
            <p className="text-lg text-dental-gray">
              Wir bieten Ihnen das gesamte Spektrum der modernen <strong>Zahnheilkunde in Dresden</strong> unter einem Dach.
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
                    {service.id === 'prophylaxe' ? 'Professionelle Zahnreinigung und umfassende Vorsorge für langfristig gesunde Zähne. Unser Expertenteam in Dresden nutzt modernste Methoden für optimale Ergebnisse.' :
                     service.id === 'parodontologie' ? 'Effektive Behandlung von Zahnfleischerkrankungen für langfristige Mundgesundheit.' :
                     service.id === 'kinderzahnheilkunde' ? 'Einfühlsame und altersgerechte Zahnbehandlung für Ihre Kleinen in entspannter Atmosphäre.' :
                     service.id === 'endodontie' ? 'Schmerzfreie Wurzelbehandlungen mit modernster Technik zum Erhalt Ihrer natürlichen Zähne.' :
                     service.id === 'funktionstherapie' ? 'Wirksame Behandlung von CMD und Kiefergelenkbeschwerden für schmerzfreies Wohlbefinden.' :
                     'Schonende Entfernung nicht erhaltungswürdiger Zähne und sichere Weisheitszahnentfernung.'}
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

      {/* Testimonials */}
      <section className="py-20 bg-dental-blue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="mb-4">Was unsere Patienten in Dresden sagen</h2>
            <p className="text-lg max-w-2xl mx-auto opacity-90">
              Erfahren Sie, wie zufriedene Patienten unsere zahnmedizinische Betreuung erlebt haben.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  rating={testimonial.rating}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section className="py-20 bg-gradient-to-r from-dental-turquoise to-dental-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-on-scroll">
            <h2 className="mb-4">Vereinbaren Sie einen Termin in Dresden</h2>
            <p className="text-lg mb-8 opacity-90">
              Buchen Sie einfach und bequem online einen Termin in unserer <strong>Zahnarztpraxis in Dresden</strong> 
              über das Doctolib-Portal oder kontaktieren Sie uns telefonisch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-dental-blue hover:bg-dental-beige flex items-center">
                <Link to="/appointment">
                  <Calendar className="w-5 h-5 mr-2" aria-hidden="true" />
                  <span>Online-Termin sichern</span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-dental-blue">
                <a href="tel:+49123456789">+49 123 456789</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
