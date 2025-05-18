
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  // Animation on scroll effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection 
        title="Kontakt & Anfahrt" 
        subtitle="So erreichen Sie unsere Praxis" 
        backgroundImage="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1770&auto=format&fit=crop"
      />

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              {/* Contact Details */}
              <div className="md:w-1/2 animate-on-scroll">
                <h2 className="text-3xl font-semibold mb-8 text-dental-blue">Kontaktinformationen</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-dental-beige p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-dental-turquoise" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Adresse</h3>
                      <p className="text-dental-gray">
                        [Straßenadresse]<br />
                        [PLZ] [Stadt]<br />
                        Deutschland
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-dental-beige p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-dental-turquoise" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Telefon</h3>
                      <p className="text-dental-gray">
                        <a href="tel:+49123456789" className="hover:text-dental-turquoise transition-colors">
                          +49 123 456789
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-dental-beige p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-dental-turquoise" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">E-Mail</h3>
                      <p className="text-dental-gray">
                        <a href="mailto:info@zahnarzt-worsch.de" className="hover:text-dental-turquoise transition-colors">
                          info@zahnarzt-worsch.de
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-dental-beige p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-dental-turquoise" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Öffnungszeiten</h3>
                      <div className="text-dental-gray">
                        <div className="grid grid-cols-2 gap-2">
                          <span>Montag - Donnerstag:</span>
                          <span>08:00 - 18:00 Uhr</span>
                          
                          <span>Freitag:</span>
                          <span>08:00 - 14:00 Uhr</span>
                          
                          <span>Samstag, Sonntag:</span>
                          <span>Geschlossen</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="text-lg font-medium mb-3">Notfallnummer außerhalb der Öffnungszeiten</h3>
                  <p className="text-dental-gray mb-4">
                    Für dringende Schmerzen außerhalb unserer regulären Öffnungszeiten:
                  </p>
                  <Button asChild className="bg-dental-turquoise hover:bg-dental-blue">
                    <a href="tel:+49123456789">+49 123 456789</a>
                  </Button>
                </div>
              </div>
              
              {/* Map */}
              <div className="md:w-1/2 animate-on-scroll">
                <h2 className="text-3xl font-semibold mb-8 text-dental-blue">Anfahrt</h2>
                
                {/* Placeholder for Google Maps */}
                <div className="bg-gray-200 rounded-lg h-96 mb-6 flex items-center justify-center">
                  <p className="text-dental-gray text-center p-4">
                    [Hier wird die Google Maps Karte eingebunden]<br />
                    Für eine interaktive Karte und Routenplanung klicken Sie bitte auf den Button unten.
                  </p>
                </div>
                
                <Button asChild variant="outline" className="w-full border-dental-turquoise text-dental-turquoise hover:bg-dental-turquoise hover:text-white">
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    In Google Maps öffnen
                  </a>
                </Button>
                
                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Mit öffentlichen Verkehrsmitteln</h3>
                    <p className="text-dental-gray">
                      [Hier Informationen über nahegelegene Bus- und Bahnhaltestellen, 
                      Linien und ungefähre Gehzeiten von den Haltestellen zur Praxis einfügen]
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Mit dem Auto</h3>
                    <p className="text-dental-gray">
                      [Hier Informationen über Anfahrt mit dem Auto, ggf. wichtige Straßen 
                      oder Orientierungspunkte sowie Parkmöglichkeiten einfügen]
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-dental-turquoise to-dental-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-on-scroll">
            <h2 className="mb-4">Wir freuen uns auf Ihren Besuch!</h2>
            <p className="text-lg mb-8">
              Vereinbaren Sie einen Termin in unserer Praxis und überzeugen Sie sich 
              selbst von unserer modernen Ausstattung und unserem freundlichen Team.
            </p>
            <Button asChild size="lg" className="bg-white text-dental-blue hover:bg-dental-beige">
              <Link to="/appointment">Termin vereinbaren</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
