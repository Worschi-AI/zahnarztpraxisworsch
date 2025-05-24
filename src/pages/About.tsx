
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import PraxisGallery from '@/components/praxis/PraxisGallery';
import TechnologySection from '@/components/praxis/TechnologySection';

const AboutPage = () => {
  // Use the scroll animation hook
  useScrollAnimation();

  const baseUrl = "https://zahnarztpraxis-worsch.de";

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Zahnarztpraxis Worsch Dresden | Unsere Praxis: Moderne Ausstattung & Philosophie</title>
        <meta 
          name="description" 
          content="Lernen Sie die Zahnarztpraxis Worsch in Dresden kennen! Erfahren Sie mehr über unsere patientenorientierte Philosophie, moderne Ausstattung und innovative Technologien." 
        />
        <link rel="canonical" href={`${baseUrl}/about`} />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Zahnarztpraxis Worsch Dresden | Unsere Praxis: Moderne Ausstattung & Philosophie" />
        <meta property="og:description" content="Lernen Sie die Zahnarztpraxis Worsch in Dresden kennen! Erfahren Sie mehr über unsere patientenorientierte Philosophie, moderne Ausstattung und innovative Technologien." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${baseUrl}/about`} />
        <meta property="og:image" content="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1887&auto=format&fit=crop" />
      </Helmet>

      <Navbar />
      
      {/* Hero Section */}
      <HeroSection 
        title="Moderne Zahnarztpraxis Worsch in Dresden: Philosophie & Technologie" 
        subtitle="Lernen Sie unsere patientenorientierte Praxis mit modernster Ausstattung kennen" 
        backgroundImage="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1887&auto=format&fit=crop"
      />

      {/* Praxisphilosophie */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="animate-on-scroll">
              <h2 className="mb-6 text-center text-dental-blue">Unsere Philosophie</h2>
              <div className="prose prose-lg max-w-none text-dental-gray">
                <h3 className="text-xl font-semibold text-dental-turquoise mb-4">Der Mensch im Mittelpunkt</h3>
                <p>
                  In unserer <strong>Zahnarztpraxis in Dresden</strong> steht der Mensch im Mittelpunkt. Wir verstehen, dass jeder Patient 
                  individuelle Bedürfnisse und manchmal auch Ängste hat. Daher nehmen wir uns Zeit für eine 
                  ausführliche Beratung und entwickeln gemeinsam mit Ihnen einen maßgeschneiderten Behandlungsplan.
                </p>
                
                <blockquote className="border-l-4 border-dental-turquoise pl-4 italic my-6">
                  Unsere Mission ist es, Ihnen eine entspannte und angenehme Behandlung zu ermöglichen – 
                  mit modernsten Methoden und persönlicher Betreuung.
                </blockquote>

                <h3 className="text-xl font-semibold text-dental-turquoise mb-4">Unsere Kernwerte</h3>

                <p>
                  Unsere Behandlungsphilosophie in der <strong>Zahnarztpraxis Worsch Dresden</strong> basiert auf drei Grundsätzen:
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
                  Unser Ziel in der <strong>modernen Zahnmedizin Dresden</strong> ist es, Ihnen zu einem strahlenden Lächeln zu verhelfen und Ihre natürlichen 
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
              In unseren modernen und hellen Räumlichkeiten in <strong>Dresden</strong> möchten wir Ihnen eine angenehme Atmosphäre bieten. 
              Entdecken Sie unsere Praxis in Bildern:
            </p>
          </div>
          
          <PraxisGallery />
        </div>
      </section>

      {/* Technische Ausstattung */}
      <TechnologySection />

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-dental-turquoise to-dental-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-on-scroll">
            <h2 className="mb-4">Lernen Sie uns kennen</h2>
            <p className="text-lg mb-8">
              Wir freuen uns darauf, Sie in unserer Praxis in Dresden begrüßen zu dürfen. Vereinbaren Sie einen 
              Termin für ein persönliches Kennenlerngespräch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-dental-blue hover:bg-dental-beige transition-all hover:scale-105">
                <Link to="/appointment">Wunschtermin finden</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-dental-blue hover:bg-dental-beige transition-all hover:scale-105">
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
