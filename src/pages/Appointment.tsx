
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Check, Users } from 'lucide-react';
import ServiceMetaData from '@/components/services/ServiceMetaData';

const AppointmentPage = () => {
  // Define schema for structured data
  const doctolibSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Zahnarztpraxis Worsch Dresden",
    "description": "Zahnarztpraxis in Dresden mit Online-Terminbuchung über Doctolib",
    "url": "https://zahnarztpraxis-worsch.de/appointment",
    "telephone": "+49123456789",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Musterstraße 123",
      "addressLocality": "Dresden",
      "postalCode": "01067",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.0504,
      "longitude": 13.7373
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday"],
        "opens": "08:00",
        "closes": "14:00"
      }
    ]
  };

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
      <ServiceMetaData 
        title="Online Termin buchen | Zahnarztpraxis Worsch Dresden | Doctolib"
        description="Buchen Sie Ihren Zahnarzttermin bei der Praxis Worsch in Dresden bequem online über Doctolib. Schnell, einfach & rund um die Uhr verfügbar. Jetzt Wunschtermin finden!"
        schema={doctolibSchema}
      />
      
      <Navbar />
      
      {/* Hero Section with updated title */}
      <HeroSection 
        title="Online Termin buchen bei Zahnarzt Worsch in Dresden" 
        subtitle="Einfach und bequem online Termine in unserer Praxis vereinbaren" 
        backgroundImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=3000&auto=format&fit=crop"
      />

      {/* Online Booking */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="mb-6 text-dental-blue">Online-Terminbuchung mit Doctolib</h2>
            <p className="text-lg text-dental-gray">
              Mit unserem Online-Buchungssystem können Sie jederzeit und bequem von zu Hause aus 
              Termine in unserer <strong>Zahnarztpraxis in Dresden</strong> vereinbaren. Wählen Sie einfach den passenden Termin 
              und die gewünschte Behandlung aus. Zahnarzt Worsch und sein Team freuen sich auf Ihren Besuch!
            </p>
          </div>

          <div className="bg-dental-beige p-8 rounded-lg shadow-md mb-12 max-w-3xl mx-auto animate-on-scroll">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-medium mb-4 text-dental-blue">Unser Doctolib-Buchungssystem</h3>
              <p className="text-dental-gray mb-8">
                Klicken Sie auf den Button, um zur Terminbuchung bei Doctolib zu gelangen. 
                Dort können Sie direkt einen <strong>Zahnarzttermin in Dresden</strong> bei uns auswählen.
              </p>
              <Button asChild size="lg" className="bg-dental-turquoise hover:bg-dental-blue transform transition hover:scale-105">
                <a href="https://www.doctolib.de" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" /> Jetzt Termin bei Doctolib buchen
                </a>
              </Button>
            </div>

            {/* Doctolib Widget iframe */}
            <div className="mt-8 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.doctolib.de/widget"
                title="Doctolib Terminbuchung Zahnarztpraxis Worsch Dresden"
                className="w-full h-[450px] border-0"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                loading="lazy"
              ></iframe>
              <p className="text-sm text-dental-gray mt-2 text-center">
                Falls das Buchungswidget nicht lädt, besuchen Sie bitte direkt <a href="https://www.doctolib.de" className="underline text-dental-turquoise" target="_blank" rel="noopener noreferrer">Doctolib</a>
              </p>
            </div>
          </div>

          {/* Instructions with updated icons */}
          <div className="max-w-4xl mx-auto animate-on-scroll">
            <h3 className="text-2xl font-medium mb-6 text-center text-dental-blue">So funktioniert's</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-dental-turquoise text-white w-8 h-8 rounded-full flex items-center justify-center">1</span>
                    <span>Auswählen</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    <Calendar className="h-10 w-10 text-dental-turquoise mx-auto mb-3" />
                    Wählen Sie den gewünschten Behandlungstyp und einen passenden Termin aus den verfügbaren Optionen.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-dental-turquoise text-white w-8 h-8 rounded-full flex items-center justify-center">2</span>
                    <span>Bestätigen</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    <Users className="h-10 w-10 text-dental-turquoise mx-auto mb-3" />
                    Geben Sie Ihre Kontaktdaten ein und bestätigen Sie Ihren Termin mit einem Klick.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-dental-turquoise text-white w-8 h-8 rounded-full flex items-center justify-center">3</span>
                    <span>Fertig</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    <Check className="h-10 w-10 text-dental-turquoise mx-auto mb-3" />
                    Sie erhalten eine Bestätigung per E-Mail und optional eine Erinnerung vor Ihrem Termin.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info with updated content */}
      <section className="py-16 bg-dental-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <h2 className="text-2xl font-medium mb-8 text-center text-dental-blue">Gut zu wissen</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-3 text-dental-blue">Erstbesucher</h3>
                <p className="text-dental-gray">
                  Wenn Sie zum ersten Mal zu uns kommen, planen Sie bitte etwas mehr Zeit ein. 
                  Bitte bringen Sie Ihre Versichertenkarte und, falls vorhanden, Ihren Zahnbonus-Pass mit.
                </p>
                <p className="text-dental-gray mt-3">
                  Für spezielle Beratungen zu Implantaten oder ästhetischen Behandlungen empfehlen wir eine telefonische 
                  Vorabklärung, damit wir ausreichend Zeit für Sie einplanen können.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-3 text-dental-blue">Notfälle</h3>
                <p className="text-dental-gray">
                  Bei akuten Schmerzen oder Notfällen rufen Sie uns bitte direkt an. 
                  Wir werden unser Bestes tun, um Ihnen schnellstmöglich zu helfen.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-3 text-dental-blue">Terminabsagen</h3>
                <p className="text-dental-gray">
                  Falls Sie einen Termin nicht wahrnehmen können, bitten wir Sie, uns mindestens 24 Stunden 
                  vorher zu informieren. So können wir den Termin an andere Patienten vergeben.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Booking with improved CTAs */}
      <section className="py-16 bg-dental-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-on-scroll">
            <h2 className="mb-4">Lieber persönlich?</h2>
            <p className="text-lg mb-8">
              Sie können Ihren <strong>Zahnarzttermin in Dresden</strong> natürlich auch telefonisch oder per E-Mail vereinbaren.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-dental-blue hover:bg-dental-beige transition-all hover:scale-105">
                <a href="tel:+49123456789" className="flex items-center justify-center gap-2 text-lg font-medium">
                  <span className="underline">+49 123 456789</span>
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white hover:bg-white hover:text-dental-blue transition-all hover:scale-105">
                <a href="mailto:termin@zahnarzt-worsch.de" className="flex items-center justify-center gap-2 text-lg font-medium">
                  <span className="underline">termin@zahnarzt-worsch.de</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AppointmentPage;
