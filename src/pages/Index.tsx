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
import useScrollAnimation from '@/hooks/useScrollAnimation';

const Index = () => {
  // Use the scroll animation hook
  useScrollAnimation();

  // Featured services (top 3)
  const featuredServices = services.slice(0, 3);
  
  // Featured testimonials (top 3)
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with dental-specific image */}
      <HeroSection 
        title="Zahnarztpraxis Worsch" 
        subtitle="Ihre Experten für gesunde und schöne Zähne in [Stadt]" 
        backgroundImage="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1770&auto=format&fit=crop"
      />

      {/* Intro Section */}
      <section className="py-20 bg-dental-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 animate-on-scroll">
              <h2 className="mb-6 text-dental-blue">Willkommen in unserer Praxis</h2>
              <p className="text-lg mb-6 text-dental-gray">
                In unserer modernen Zahnarztpraxis steht Ihr Wohlbefinden an erster Stelle. Mit einem erfahrenen Team, 
                modernsten Technologien und einem ganzheitlichen Behandlungsansatz sorgen wir für Ihre Zahngesundheit 
                in angenehmer Atmosphäre.
              </p>
              <p className="text-lg mb-8 text-dental-gray">
                Unser Ziel ist es, Ihnen zu einem strahlenden Lächeln zu verhelfen und Ihre Zähne ein Leben lang 
                gesund zu erhalten. Dabei setzen wir auf präventive Maßnahmen, schonende Behandlungsmethoden und 
                eine vertrauensvolle Zusammenarbeit.
              </p>
              <Button asChild className="bg-dental-turquoise hover:bg-dental-blue">
                <Link to="/about">Mehr über uns</Link>
              </Button>
            </div>
            <div className="md:w-1/2 animate-on-scroll">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1968&auto=format&fit=crop" 
                  alt="Moderne Praxisräume" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-dental-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="mb-4 text-dental-blue">Unsere Leistungen</h2>
            <p className="text-lg max-w-2xl mx-auto text-dental-gray">
              Wir bieten Ihnen ein umfassendes Spektrum zahnmedizinischer Leistungen 
              für die gesamte Familie - von der Prophylaxe über hochwertige Füllungen 
              bis hin zu ästhetischem Zahnersatz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div key={service.id} className="animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard
                  id={service.id}
                  title={service.title}
                  description={service.shortDescription}
                  imageUrl={service.imageUrl}
                />
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
            <h2 className="mb-4 text-dental-blue">Unser Team</h2>
            <p className="text-lg max-w-2xl mx-auto text-dental-gray">
              Lernen Sie unser erfahrenes und freundliches Team kennen, das sich 
              kompetent um Ihre Zahngesundheit kümmert.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {team.slice(0, 2).map((member, index) => (
              <div key={member.id} className="w-full md:w-5/12 lg:w-[30%] animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="bg-dental-beige rounded-lg p-6 h-full flex flex-col items-center text-center hover-scale">
                  <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                    <img 
                      src={member.imageUrl} 
                      alt={member.name} 
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

      {/* Testimonials */}
      <section className="py-20 bg-dental-blue text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="mb-4">Was unsere Patienten sagen</h2>
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
            <h2 className="mb-4">Vereinbaren Sie einen Termin</h2>
            <p className="text-lg mb-8 opacity-90">
              Buchen Sie einfach und bequem online einen Termin in unserer Praxis 
              über das Doctolib-Portal oder kontaktieren Sie uns telefonisch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-dental-blue hover:bg-dental-beige">
                <Link to="/appointment">Online-Termin buchen</Link>
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
