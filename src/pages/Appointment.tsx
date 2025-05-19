
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Check, Users } from 'lucide-react';
import ServiceMetaData from '@/components/services/ServiceMetaData';

const AppointmentPage = () => {
  // Define schema for structured data
  const doctolibSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Zahnarztpraxis Worsch Dresden",
    "description": "Zahnarztpraxis in Dresden mit Terminvereinbarung",
    "url": "https://zahnarztpraxis-worsch.de/appointment",
    "telephone": "+4935125227099",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Österreicher Str. 38",
      "addressLocality": "Dresden",
      "postalCode": "01279",
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
        "dayOfWeek": ["Monday"],
        "opens": "07:30",
        "closes": "13:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday"],
        "opens": "07:30",
        "closes": "12:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday"],
        "opens": "14:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday"],
        "opens": "07:30",
        "closes": "13:00"
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
        title="Termin vereinbaren | Zahnarztpraxis Worsch Dresden"
        description="Vereinbaren Sie einen Zahnarzttermin bei der Praxis Worsch in Dresden. Schnell und einfach telefonisch erreichbar unter 0351 2522709."
        schema={doctolibSchema}
      />
      
      <Navbar />
      
      {/* Hero Section with updated title */}
      <HeroSection 
        title="Termin vereinbaren bei Zahnarzt Worsch in Dresden" 
        subtitle="Einfach und bequem telefonisch einen Termin in unserer Praxis vereinbaren" 
        backgroundImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=3000&auto=format&fit=crop"
      />

      {/* Online Booking */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="mb-6 text-dental-blue">Telefonische Terminbuchung</h2>
            <p className="text-lg text-dental-gray">
              Vereinbaren Sie telefonisch einen Termin in unserer <strong>Zahnarztpraxis in Dresden</strong>. 
              Zahnarzt Worsch und sein Team freuen sich auf Ihren Besuch!
            </p>
          </div>

          <div className="bg-dental-beige p-8 rounded-lg shadow-md mb-12 max-w-3xl mx-auto animate-on-scroll">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-medium mb-4 text-dental-blue">Rufen Sie uns an</h3>
              <p className="text-dental-gray mb-8">
                Um einen <strong>Zahnarzttermin in Dresden</strong> zu vereinbaren, 
                kontaktieren Sie uns bitte telefonisch während unserer Öffnungszeiten.
              </p>
              <Button asChild size="lg" className="bg-dental-turquoise hover:bg-dental-blue transform transition hover:scale-105">
                <a href="tel:+4935125227099">
                  <Calendar className="mr-2 h-5 w-5" /> 0351 2522709
                </a>
              </Button>
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
                    <span>Anrufen</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    <Calendar className="h-10 w-10 text-dental-turquoise mx-auto mb-3" />
                    Rufen Sie uns unter der Telefonnummer 0351 2522709 an, um einen Termin zu vereinbaren.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="hover-scale">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-dental-turquoise text-white w-8 h-8 rounded-full flex items-center justify-center">2</span>
                    <span>Besprechen</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    <Users className="h-10 w-10 text-dental-turquoise mx-auto mb-3" />
                    Teilen Sie uns mit, welche Art von Behandlung Sie benötigen und wann Sie Zeit haben.
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
                    Wir finden einen passenden Termin für Sie und bestätigen diesen direkt am Telefon.
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
            <h2 className="mb-4">Rufen Sie uns an</h2>
            <p className="text-lg mb-8">
              Sie können Ihren <strong>Zahnarzttermin in Dresden</strong> telefonisch vereinbaren.
            </p>
            <Button asChild size="lg" className="bg-white text-dental-blue hover:bg-dental-beige transition-all hover:scale-105">
              <a href="tel:+4935125227099" className="flex items-center justify-center gap-2 text-lg font-medium">
                <span className="underline">0351 2522709</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AppointmentPage;
