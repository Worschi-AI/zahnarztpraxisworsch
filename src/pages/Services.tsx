
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { services } from '@/data/services';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { Phone, Calendar, CheckCircle, Star } from 'lucide-react';

const ServicesPage = () => {
  // Use the scroll animation hook
  useScrollAnimation();

  // Filter premium services that have the highest margins
  const premiumServices = services.filter(service => 
    ['implantologie', 'aesthetische-zahnheilkunde', 'zahnersatz'].includes(service.id)
  );

  // Standard services
  const standardServices = services.filter(service => 
    !['implantologie', 'aesthetische-zahnheilkunde', 'zahnersatz'].includes(service.id)
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section - Optimized for conversions */}
      <HeroSection 
        title="Hochwertige Zahnmedizin für Ihr strahlendes Lächeln" 
        subtitle="Unsere Premium-Leistungen für höchste Ansprüche - Jetzt Termin vereinbaren!" 
        backgroundImage="/lovable-uploads/2321cb5b-9485-4578-852b-b8525853d92e.png"
      />

      {/* Premium Services Section - Highlighting high-margin services */}
      <section className="py-20 bg-white" id="premium-services">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="mb-4 text-dental-blue">Unsere Premium-Leistungen</h2>
            <p className="text-lg text-dental-gray mb-6">
              Erleben Sie zahnmedizinische Exzellenz mit unseren hochwertigen Behandlungen für höchste ästhetische und funktionale Ansprüche.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <span className="bg-dental-beige text-dental-blue px-3 py-1 rounded-full text-sm flex items-center">
                <Star className="h-4 w-4 mr-1" /> Erstklassige Materialien
              </span>
              <span className="bg-dental-beige text-dental-blue px-3 py-1 rounded-full text-sm flex items-center">
                <CheckCircle className="h-4 w-4 mr-1" /> Modernste Technologie
              </span>
              <span className="bg-dental-beige text-dental-blue px-3 py-1 rounded-full text-sm flex items-center">
                <Star className="h-4 w-4 mr-1" /> Individuelles Design
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {premiumServices.map((service, index) => (
              <div key={service.id} className="animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard
                  id={service.id}
                  title={service.title}
                  description={service.shortDescription}
                  imageUrl={service.imageUrl}
                />
                <div className="mt-4 text-center">
                  <Button asChild className="bg-dental-turquoise hover:bg-dental-blue">
                    <Link to={`/services/${service.id}`}>Mehr erfahren</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA after premium services */}
          <div className="bg-dental-beige rounded-lg p-8 shadow-md animate-on-scroll">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold mb-3 text-dental-blue">Interesse an unseren Premium-Behandlungen?</h3>
                <p className="text-dental-gray mb-0">
                  Vereinbaren Sie eine kostenlose Beratung und erfahren Sie mehr über Ihre individuellen Möglichkeiten.
                </p>
              </div>
              <div className="md:w-1/3 flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-dental-turquoise hover:bg-dental-blue flex items-center justify-center">
                  <Link to="/appointment">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span className="block">Termin buchen</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standard Services Section */}
      <section className="py-16 bg-dental-beige" id="standard-services">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-on-scroll">
            <h2 className="mb-4 text-dental-blue">Weitere Zahnmedizinische Leistungen</h2>
            <p className="text-lg text-dental-gray">
              Wir bieten Ihnen das gesamte Spektrum der modernen Zahnheilkunde unter einem Dach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {standardServices.map((service, index) => (
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
        </div>
      </section>

      {/* Quality Promise - Adding trust elements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 animate-on-scroll">
              <h2 className="mb-6 text-dental-blue">Unser Qualitätsversprechen</h2>
              <p className="text-lg mb-6 text-dental-gray">
                Bei allen Behandlungen legen wir größten Wert auf Qualität und Langlebigkeit. 
                Wir verwenden ausschließlich hochwertige Materialien und arbeiten mit renommierten 
                Laboren zusammen, um Ihnen die bestmöglichen Ergebnisse zu garantieren.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-dental-turquoise mr-2 flex-shrink-0 mt-1" />
                  <span className="text-dental-gray">Modernste Technologien und Materialien</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-dental-turquoise mr-2 flex-shrink-0 mt-1" />
                  <span className="text-dental-gray">Fortlaufende Weiterbildung des Teams</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-dental-turquoise mr-2 flex-shrink-0 mt-1" />
                  <span className="text-dental-gray">Transparente Behandlungskosten</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-dental-turquoise mr-2 flex-shrink-0 mt-1" />
                  <span className="text-dental-gray">Individuelle Beratung und Planung</span>
                </div>
              </div>
              <Button asChild className="bg-dental-turquoise hover:bg-dental-blue">
                <Link to="/team">Lernen Sie unser Team kennen</Link>
              </Button>
            </div>
            <div className="md:w-1/2 animate-on-scroll">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/2321cb5b-9485-4578-852b-b8525853d92e.png" 
                  alt="Zahnärztin bei der Arbeit" 
                  className="w-full h-auto"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1968&auto=format&fit=crop";
                    console.log("Image failed to load, fallback applied");
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonial Teaser - Build trust */}
      <section className="py-16 bg-dental-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-on-scroll">
            <h2 className="text-2xl font-medium mb-8 text-center text-dental-blue">Das sagen unsere Patienten</h2>
            
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-dental-turquoise flex items-center justify-center text-white font-bold">
                    MS
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  </div>
                  <p className="italic text-dental-gray mb-2">
                    "Ich bin begeistert von meinen neuen Veneers! Das Ergebnis übertrifft meine Erwartungen und das Team hat mich perfekt beraten.
                    Der Preis war es absolut wert - mein Lächeln sieht nun natürlich schön aus."
                  </p>
                  <p className="text-sm text-dental-gray">- Maria S., Veneers-Behandlung</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Button asChild variant="outline" className="border-dental-blue text-dental-blue hover:bg-dental-blue hover:text-white">
                <Link to="/about#testimonials">Weitere Erfahrungsberichte</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA with multiple options */}
      <section className="py-16 bg-gradient-to-r from-dental-blue to-dental-turquoise text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <h2 className="mb-2">Bereit für Ihr neues Lächeln?</h2>
            <p className="text-xl mb-4">Jetzt Termin vereinbaren und 10% Rabatt auf Ihre erste Privatbehandlung sichern!</p>
            <p className="text-lg mb-8">
              Wir nehmen uns Zeit für Ihre Wünsche und erstellen einen individuellen Behandlungsplan.
              Vereinbaren Sie einen Termin - bequem online oder telefonisch.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <div className="mb-4">
                  <Calendar className="h-10 w-10 mx-auto text-white mb-2" />
                  <h3 className="text-xl font-bold mb-2">Online buchen</h3>
                  <p className="mb-4 opacity-90">Bequem 24/7 über unser Doctolib-Portal</p>
                </div>
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-white text-dental-blue hover:bg-dental-beige w-full flex items-center justify-center"
                >
                  <Link to="/appointment">
                    <span className="block">Termin vereinbaren</span>
                  </Link>
                </Button>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <div className="mb-4">
                  <Phone className="h-10 w-10 mx-auto text-white mb-2" />
                  <h3 className="text-xl font-bold mb-2">Telefonisch anfragen</h3>
                  <p className="mb-4 opacity-90">Persönliche Beratung zu unseren Öffnungszeiten</p>
                </div>
                <Button 
                  asChild 
                  size="lg" 
                  className="border-2 border-white hover:bg-white hover:text-dental-blue w-full flex items-center justify-center"
                  variant="outline"
                >
                  <a href="tel:+49123456789">
                    <span className="block">+49 123 456789</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Improve SEO with structured data */}
      <section className="py-16 bg-white" id="faq">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-on-scroll">
            <h2 className="mb-4 text-dental-blue">Häufig gestellte Fragen</h2>
            <p className="text-lg text-dental-gray">
              Antworten auf die wichtigsten Fragen zu unseren zahnmedizinischen Leistungen
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <div className="space-y-6">
              <div className="bg-dental-beige p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-2 text-dental-blue">Werden die Kosten für Zahnimplantate von der Krankenkasse übernommen?</h3>
                <p className="text-dental-gray">
                  Gesetzliche Krankenkassen übernehmen in der Regel einen Festzuschuss für Zahnersatz, der auch bei Implantaten gewährt wird. 
                  Die Höhe richtet sich nach dem Befund. Bei privaten Versicherungen variiert die Erstattung je nach Tarif. 
                  In unserer Praxis erstellen wir transparente Kostenvoranschläge und beraten Sie zu Finanzierungsmöglichkeiten.
                </p>
              </div>
              
              <div className="bg-dental-beige p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-2 text-dental-blue">Wie lange halten Veneers und aus welchen Materialien bestehen sie?</h3>
                <p className="text-dental-gray">
                  Moderne Keramikveneers haben eine durchschnittliche Haltbarkeit von 10-15 Jahren, bei guter Pflege auch länger. 
                  Wir verwenden ausschließlich hochwertige Keramiken, die sich durch Farbbeständigkeit, Biokompatibilität und natürliche Ästhetik auszeichnen. 
                  In der Beratung zeigen wir Ihnen verschiedene Materialoptionen und deren Vor- und Nachteile.
                </p>
              </div>
              
              <div className="bg-dental-beige p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-2 text-dental-blue">Ist die professionelle Zahnreinigung schmerzhaft?</h3>
                <p className="text-dental-gray">
                  Unsere professionelle Zahnreinigung ist in der Regel schmerzfrei. Wir arbeiten mit modernsten Ultraschall- und Pulverstrahlgeräten, 
                  die besonders schonend sind. Bei empfindlichen Zähnen können wir zusätzlich eine lokale Betäubung anbieten, 
                  dies ist jedoch selten notwendig.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
