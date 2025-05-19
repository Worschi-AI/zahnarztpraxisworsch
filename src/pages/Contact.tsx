
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock } from 'lucide-react';

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
                      <MapPin className="h-6 w-6 text-dental-turquoise" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Adresse</h3>
                      <p className="text-dental-gray">
                        Österreicher Str. 38<br />
                        01279 Dresden<br />
                        Deutschland
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-dental-beige p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-dental-turquoise" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Telefon</h3>
                      <p className="text-dental-gray">
                        <a href="tel:+4935125227099" className="hover:text-dental-turquoise transition-colors">
                          0351 2522709
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
                      <Clock className="h-6 w-6 text-dental-turquoise" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Öffnungszeiten</h3>
                      <div className="text-dental-gray">
                        <div className="grid grid-cols-2 gap-2">
                          <span>Montag:</span>
                          <span>07:30 - 13:00 Uhr</span>
                          
                          <span>Dienstag:</span>
                          <span>08:00 - 12:00, 14:00 - 18:00 Uhr</span>
                          
                          <span>Mittwoch:</span>
                          <span>07:30 - 12:00, 14:00 - 18:00 Uhr</span>
                          
                          <span>Donnerstag:</span>
                          <span>07:30 - 12:00, 14:00 - 18:00 Uhr</span>
                          
                          <span>Freitag:</span>
                          <span>07:30 - 13:00 Uhr</span>
                          
                          <span>Samstag:</span>
                          <span>Geschlossen</span>
                          
                          <span>Sonntag:</span>
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
                    <a href="tel:+4935125227099">0351 2522709</a>
                  </Button>
                </div>
              </div>
              
              {/* Map */}
              <div className="md:w-1/2 animate-on-scroll">
                <h2 className="text-3xl font-semibold mb-8 text-dental-blue">Anfahrt</h2>
                
                {/* Google Maps Embed */}
                <div className="rounded-lg h-96 mb-6 overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.676150654196!2d13.82136837704312!3d51.02483317200493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709cf7a221d4919%3A0xc3bfeb4989337d32!2s%C3%96sterreicher%20Str.%2038%2C%2001279%20Dresden%2C%20Germany!5e0!3m2!1sen!2sus!4v1716143269998!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Praxisstandort"
                    className="rounded-lg"
                  ></iframe>
                </div>
                
                <Button asChild variant="outline" className="w-full border-dental-turquoise text-dental-turquoise hover:bg-dental-turquoise hover:text-white">
                  <a href="https://g.co/kgs/8A24h8o" target="_blank" rel="noopener noreferrer">
                    In Google Maps öffnen
                  </a>
                </Button>
                
                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Mit öffentlichen Verkehrsmitteln</h3>
                    <p className="text-dental-gray">
                      Unsere Praxis erreichen Sie gut mit öffentlichen Verkehrsmitteln:
                      <ul className="list-disc pl-5 mt-2">
                        <li>Straßenbahnhaltestelle: Linie 4, 10 (Haltestelle Altenberger Straße)</li>
                        <li>Bushaltestelle: Linie 64, 66 (Haltestelle Österreicher Straße)</li>
                      </ul>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Mit dem Auto</h3>
                    <p className="text-dental-gray">
                      Parkplätze finden Sie direkt vor der Praxis und in den umliegenden Straßen.
                      Von der Autobahn A4 nehmen Sie die Ausfahrt Dresden-Altstadt und folgen den Schildern Richtung Leuben/Niedersedlitz.
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
