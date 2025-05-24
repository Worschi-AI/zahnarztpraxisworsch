
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
        <title>Zahnarztpraxis Worsch Dresden Laubegast | Unsere Philosophie & Moderne Praxis</title>
        <meta 
          name="description" 
          content="Erfahren Sie mehr über die moderne Zahnarztpraxis Worsch in Dresden Laubegast. Unsere Philosophie: Ästhetik, Innovation und Ihr Wohlbefinden im Mittelpunkt." 
        />
        <link rel="canonical" href={`${baseUrl}/about`} />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Zahnarztpraxis Worsch Dresden Laubegast | Unsere Philosophie & Moderne Praxis" />
        <meta property="og:description" content="Erfahren Sie mehr über die moderne Zahnarztpraxis Worsch in Dresden Laubegast. Unsere Philosophie: Ästhetik, Innovation und Ihr Wohlbefinden im Mittelpunkt." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${baseUrl}/about`} />
        <meta property="og:image" content="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1887&auto=format&fit=crop" />
      </Helmet>

      <Navbar />
      
      {/* Hero Section */}
      <HeroSection 
        title="Zahnarztpraxis Worsch Dresden: Wo moderne Zahnmedizin auf Ästhetik trifft" 
        subtitle="Entdecken Sie unsere patientenorientierte Philosophie, innovative Technologien und ein Ambiente, in dem Sie sich wohlfühlen" 
        backgroundImage="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1887&auto=format&fit=crop"
      />

      {/* Praxisphilosophie */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="animate-on-scroll">
              <h2 className="mb-6 text-center text-dental-blue">Unsere Philosophie: Ihr Lächeln ist unsere Leidenschaft</h2>
              <div className="prose prose-lg max-w-none text-dental-gray">
                <p className="text-lg mb-6">
                  In der <strong>Zahnarztpraxis Worsch in Dresden Laubegast</strong> verstehen wir Zahnmedizin als eine Verbindung aus höchster Präzision, modernster Technologie und einem tiefen Verständnis für die individuellen Wünsche unserer Patienten – insbesondere, wenn es um die Ästhetik Ihres Lächelns geht.
                </p>

                <h3 className="text-xl font-semibold text-dental-turquoise mb-4">Der moderne Patient im Fokus – Besonders für unsere junge Zielgruppe</h3>
                <p className="mb-4">
                  Wir wissen, dass gerade junge Menschen hohe Ansprüche an Ästhetik und Lebensqualität stellen. Ein selbstbewusstes Lächeln spielt dabei eine entscheidende Rolle. Deshalb legen wir besonderen Wert auf:
                </p>

                <ul className="mb-6">
                  <li>
                    <strong>Individuelle Ästhetik-Beratung:</strong> Wir nehmen uns Zeit, Ihre Vorstellungen zu verstehen und gemeinsam mit Ihnen die optimale Lösung für Ihr Wunschergebnis zu finden – von dezenten Korrekturen bis zum kompletten Smile Makeover.
                  </li>
                  <li>
                    <strong>Innovative Behandlungsmethoden:</strong> Wir nutzen fortschrittliche digitale Verfahren wie 3D-Planung für Implantate, CAD/CAM-gefertigten Zahnersatz und schonende Lasertherapien, um präzise, vorhersagbare und ästhetisch überzeugende Ergebnisse zu erzielen.
                  </li>
                  <li>
                    <strong>Transparenz und Aufklärung:</strong> Wir erklären Ihnen jeden Behandlungsschritt verständlich und zeigen Ihnen die Möglichkeiten moderner Zahnästhetik auf.
                  </li>
                  <li>
                    <strong>Angenehmes Ambiente:</strong> Unsere Praxisräume in <strong>Dresden Laubegast</strong> sind modern und hell gestaltet, um Ihnen eine entspannte Atmosphäre zu bieten, in der Sie sich von Anfang an wohlfühlen.
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-dental-turquoise mb-4">Unsere Kernwerte für Ihre Zufriedenheit</h3>

                <ul className="mb-6">
                  <li>
                    <strong>Ästhetische Perfektion:</strong> Wir streben nach Ergebnissen, die nicht nur gesund, sondern auch natürlich schön sind und Ihre Persönlichkeit unterstreichen.
                  </li>
                  <li>
                    <strong>Innovation & Präzision:</strong> Durch kontinuierliche Fortbildung und den Einsatz neuester Technologien garantieren wir Behandlungen auf höchstem Niveau.
                  </li>
                  <li>
                    <strong>Patientenorientierung:</strong> Ihre Bedürfnisse und Wünsche stehen im Mittelpunkt unserer Arbeit. Wir möchten, dass Sie sich bei uns bestens aufgehoben fühlen.
                  </li>
                  <li>
                    <strong>Nachhaltige Qualität:</strong> Wir verwenden ausschließlich hochwertige, biokompatible Materialien für langlebige und gesunde Ergebnisse.
                  </li>
                </ul>

                <p>
                  Wir sind mehr als nur Ihr <strong>Zahnarzt in Dresden</strong> – wir sind Ihre Partner für ein gesundes und strahlend schönes Lächeln, das Ihnen Selbstvertrauen schenkt.
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
            <h2 className="mb-4 text-dental-blue">Ein Ambiente zum Wohlfühlen: Unsere moderne Zahnarztpraxis in Dresden Laubegast</h2>
            <p className="text-lg max-w-2xl mx-auto text-dental-gray">
              Treten Sie ein und überzeugen Sie sich selbst: Unsere Praxisräume sind hell, modern und mit neuester Technik ausgestattet. Wir möchten, dass Ihr Besuch bei uns so angenehm wie möglich verläuft.
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
            <h2 className="mb-4">Überzeugt? Lernen Sie uns persönlich kennen!</h2>
            <p className="text-lg mb-8">
              Wir freuen uns darauf, Sie in unserer modernen <strong>Zahnarztpraxis in Dresden Laubegast</strong> begrüßen zu dürfen und Ihnen die Möglichkeiten für Ihr perfektes Lächeln aufzuzeigen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-dental-blue hover:bg-dental-beige transition-all hover:scale-105">
                <Link to="/appointment">Termin vereinbaren</Link>
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
