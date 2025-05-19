
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Check, Users } from 'lucide-react';

const AppointmentPage = () => {
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
      <Helmet>
        <title>Online Termin buchen | Zahnarztpraxis Worsch Dresden | Doctolib</title>
        <meta name="description" content="Buchen Sie Ihren Zahnarzttermin bei der Praxis Worsch in Dresden bequem online über Doctolib. Schnell, einfach & rund um die Uhr verfügbar. Jetzt Wunschtermin finden!" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection 
        title="Online Termin buchen bei Zahnarzt Worsch in Dresden" 
        subtitle="Einfach und bequem online Termine in unserer Praxis vereinbaren" 
        backgroundImage="https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=3000&auto=format&fit=crop"
      />

      {/* Online Booking */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="mb-6 text-dental-blue">Online-Terminbuchung mit Doctolib</h2>
            <p className="text-lg text-dental-gray">
              Mit unserem Online-Buchungssystem können Sie jederzeit und bequem von zu Hause aus 
              Termine in unserer <strong>Zahnarztpraxis in Dresden</strong> vereinbaren. Wählen Sie einfach den passenden Termin 
              und die gewünschte Behandlung aus.
            </p>
          </div>

          <div className="bg-dental-beige p-8 rounded-lg shadow-md mb-12 max-w-3xl mx-auto animate-on-scroll">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-medium mb-4 text-dental-blue">Unser Doctolib-Buchungssystem</h3>
              <p className="text-dental-gray mb-8">
                Klicken Sie auf den Button, um zur Terminbuchung bei Doctolib zu gelangen. 
                Dort können Sie direkt einen <strong>Zahnarzttermin in Dresden</strong> bei uns auswählen.
              </p>
              <Button asChild size="lg" className="bg-dental-turquoise hover:bg-dental-blue">
                <a href="https://www.doctolib.de" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-4 w-4" /> Jetzt Termin bei Doctolib buchen
                </a>
              </Button>
            </div>

            {/* Placeholder for Doctolib Widget */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-white">
              <p className="text-dental-gray">
                [Hier würde das eingebettete Doctolib-Widget erscheinen, sobald die Integration aktiviert ist.]
              </p>
            </div>
          </div>

          {/* Instructions */}
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

      {/* Additional Info */}
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

      {/* Alternative Booking */}
      <section className="py-16 bg-dental-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-on-scroll">
            <h2 className="mb-4">Lieber persönlich?</h2>
            <p className="text-lg mb-8">
              Sie können Ihren <strong>Zahnarzttermin in Dresden</strong> natürlich auch telefonisch oder per E-Mail vereinbaren.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-dental-blue hover:bg-dental-beige">
                <a href="tel:+49123456789">
                  <span className="flex items-center justify-center">
                    +49 123 456789
                  </span>
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white hover:bg-white hover:text-dental-blue">
                <a href="mailto:termin@zahnarzt-worsch.de">
                  <span className="flex items-center justify-center">
                    termin@zahnarzt-worsch.de
                  </span>
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
