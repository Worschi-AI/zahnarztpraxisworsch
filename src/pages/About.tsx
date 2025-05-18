import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
  // Animation on scroll effect with proper cleanup
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add animated class and keep it there permanently
          entry.target.classList.add('animated');
          // Once element is animated, stop observing it
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    // Select all elements to animate
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    
    // Start observing each element
    elementsToAnimate.forEach(el => {
      observer.observe(el);
    });

    // Clean up function to prevent memory leaks
    return () => {
      elementsToAnimate.forEach(el => {
        observer.unobserve(el);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection 
        title="Unsere Praxis" 
        subtitle="Lernen Sie unsere moderne Zahnarztpraxis kennen" 
        backgroundImage="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1887&auto=format&fit=crop"
      />

      {/* Praxisphilosophie */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="animate-on-scroll">
              <h2 className="mb-6 text-center text-dental-blue">Unsere Philosophie</h2>
              <div className="prose prose-lg max-w-none text-dental-gray">
                <p>
                  In unserer Zahnarztpraxis steht der Mensch im Mittelpunkt. Wir verstehen, dass jeder Patient 
                  individuelle Bedürfnisse und manchmal auch Ängste hat. Daher nehmen wir uns Zeit für eine 
                  ausführliche Beratung und entwickeln gemeinsam mit Ihnen einen maßgeschneiderten Behandlungsplan.
                </p>
                
                <p>
                  Unsere Behandlungsphilosophie basiert auf drei Grundsätzen:
                </p>

                <ul>
                  <li>
                    <strong>Präventionsorientiert:</strong> Wir setzen auf Vorsorge und frühzeitige 
                    Behandlung, um größere Eingriffe zu vermeiden.
                  </li>
                  <li>
                    <strong>Substanzschonend:</strong> Bei notwendigen Behandlungen arbeiten wir minimalinvasiv, 
                    um möglichst viel gesunde Zahnsubstanz zu erhalten.
                  </li>
                  <li>
                    <strong>Ganzheitlich:</strong> Wir betrachten nicht nur den einzelnen Zahn, sondern das 
                    gesamte Kausystem und dessen Auswirkungen auf Ihre Gesundheit.
                  </li>
                </ul>

                <p>
                  Unser Ziel ist es, Ihnen zu einem strahlenden Lächeln zu verhelfen und Ihre natürlichen 
                  Zähne so lange wie möglich zu erhalten. Dabei legen wir größten Wert auf eine vertrauensvolle 
                  Zahnarzt-Patienten-Beziehung und eine angenehme Atmosphäre in unserer Praxis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Praxisräume */}
      <section className="py-20 bg-dental-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="mb-4 text-dental-blue">Unsere Praxisräume</h2>
            <p className="text-lg max-w-2xl mx-auto text-dental-gray">
              In unseren modernen und hellen Räumlichkeiten möchten wir Ihnen eine angenehme Atmosphäre bieten. 
              Entdecken Sie unsere Praxis in Bildern:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="animate-on-scroll">
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover-scale">
                <img 
                  src="https://images.unsplash.com/photo-1629909615957-f11847120b5c?q=80&w=1932&auto=format&fit=crop" 
                  alt="Empfangsbereich" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Empfangsbereich</h3>
                  <p className="text-dental-gray">
                    Unser freundliches Team empfängt Sie in angenehmer Atmosphäre.
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll" style={{ animationDelay: "100ms" }}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover-scale">
                <img 
                  src="https://images.unsplash.com/photo-1631815588090-d4bfec5b9589?q=80&w=1972&auto=format&fit=crop" 
                  alt="Wartezimmer" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Wartezimmer</h3>
                  <p className="text-dental-gray">
                    Entspannen Sie in unserem komfortablen Wartebereich.
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll" style={{ animationDelay: "200ms" }}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover-scale">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1968&auto=format&fit=crop" 
                  alt="Behandlungsraum" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Behandlungsraum</h3>
                  <p className="text-dental-gray">
                    Modernste Technik für Ihre optimale Versorgung.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technische Ausstattung */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1605098293544-25f4c32344c8?q=80&w=1774&auto=format&fit=crop" 
                alt="Moderne Zahnarztausstattung" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 animate-on-scroll">
              <h2 className="mb-6 text-dental-blue">Moderne Technologie</h2>
              <p className="text-lg mb-6 text-dental-gray">
                Für Ihre optimale Versorgung setzen wir auf modernste technische Ausstattung. So können wir 
                präzise diagnostizieren und Sie schonend behandeln.
              </p>
              
              <div className="space-y-4">
                <div className="bg-dental-beige p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-1">Digitales Röntgen</h3>
                  <p className="text-dental-gray">
                    Strahlungsreduzierte Aufnahmen für eine genaue Diagnose.
                  </p>
                </div>
                
                <div className="bg-dental-beige p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-1">Intraorale Kamera</h3>
                  <p className="text-dental-gray">
                    Sehen Sie Ihren Zahn aus der Perspektive des Zahnarztes.
                  </p>
                </div>
                
                <div className="bg-dental-beige p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-1">CAD/CAM-Technologie</h3>
                  <p className="text-dental-gray">
                    Digitale Planung und präzise Fertigung von Zahnersatz.
                  </p>
                </div>
                
                <div className="bg-dental-beige p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-1">Laser-Behandlung</h3>
                  <p className="text-dental-gray">
                    Schonende Therapie für verschiedene Anwendungen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dental-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-on-scroll">
            <h2 className="mb-4">Lernen Sie uns kennen</h2>
            <p className="text-lg mb-8">
              Wir freuen uns darauf, Sie in unserer Praxis begrüßen zu dürfen. Vereinbaren Sie einen 
              Termin für ein persönliches Kennenlerngespräch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-dental-blue hover:bg-dental-beige">
                <Link to="/appointment">Termin vereinbaren</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white hover:bg-white hover:text-dental-blue">
                <Link to="/team">Unser Team kennenlernen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
