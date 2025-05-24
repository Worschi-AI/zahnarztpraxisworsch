
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
import { Heart, Star, Shield, Users, Award, Target } from 'lucide-react';

const AboutPage = () => {
  // Use the scroll animation hook
  useScrollAnimation();

  const baseUrl = "https://zahnarztpraxis-worsch.de";

  return (
    <div className="min-h-screen font-sans" style={{ fontFamily: 'Poppins, sans-serif' }}>
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
              <h2 className="mb-8 text-center text-dental-blue font-semibold leading-tight">Unsere Philosophie: Ihr Lächeln ist unsere Leidenschaft</h2>
              
              {/* Intro-Box */}
              <div className="bg-dental-turquoise/10 border-l-4 border-dental-turquoise p-6 rounded-r-lg mb-10">
                <p className="text-lg font-medium text-dental-blue mb-3 leading-relaxed">
                  💫 Zahnmedizin als Verbindung aus Präzision, Technologie und Ästhetik
                </p>
                <p className="text-dental-gray leading-relaxed">
                  In der <strong className="font-semibold">Zahnarztpraxis Worsch in Dresden Laubegast</strong> verstehen wir Zahnmedizin als eine Verbindung aus höchster Präzision, modernster Technologie und einem tiefen Verständnis für die individuellen Wünsche unserer Patienten.
                </p>
              </div>

              <h3 className="text-2xl font-medium text-dental-blue mb-6 leading-snug">Moderne Patienten im Fokus</h3>
              
              <p className="text-lg mb-6 text-dental-gray leading-relaxed">
                Gerade junge Menschen haben hohe Ansprüche an <strong className="font-semibold">Ästhetik und Lebensqualität</strong>. Ein selbstbewusstes Lächeln spielt dabei eine entscheidende Rolle.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-dental-beige p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Heart className="h-6 w-6 text-dental-turquoise mr-3" />
                    <h4 className="font-medium text-dental-blue leading-snug">Individuelle Ästhetik-Beratung</h4>
                  </div>
                  <p className="text-sm text-dental-gray leading-relaxed">
                    Wir nehmen uns Zeit, Ihre Vorstellungen zu verstehen. Gemeinsam finden wir die optimale Lösung für Ihr Wunschergebnis – von dezenten Korrekturen bis zum kompletten Smile Makeover.
                  </p>
                </div>

                <div className="bg-dental-beige p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Star className="h-6 w-6 text-dental-turquoise mr-3" />
                    <h4 className="font-medium text-dental-blue leading-snug">Innovative Behandlungsmethoden</h4>
                  </div>
                  <p className="text-sm text-dental-gray leading-relaxed">
                    Wir nutzen <strong className="font-semibold">3D-Planung für Implantate</strong>, CAD/CAM-gefertigten Zahnersatz und schonende Lasertherapien für präzise, vorhersagbare Ergebnisse.
                  </p>
                </div>

                <div className="bg-dental-beige p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Shield className="h-6 w-6 text-dental-turquoise mr-3" />
                    <h4 className="font-medium text-dental-blue leading-snug">Transparenz & Aufklärung</h4>
                  </div>
                  <p className="text-sm text-dental-gray leading-relaxed">
                    Wir erklären Ihnen jeden Behandlungsschritt verständlich und zeigen Ihnen die Möglichkeiten moderner Zahnästhetik auf.
                  </p>
                </div>

                <div className="bg-dental-beige p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 text-dental-turquoise mr-3" />
                    <h4 className="font-medium text-dental-blue leading-snug">Angenehmes Ambiente</h4>
                  </div>
                  <p className="text-sm text-dental-gray leading-relaxed">
                    Unsere Praxisräume in <strong className="font-semibold">Dresden Laubegast</strong> sind modern und hell gestaltet, um Ihnen eine entspannte Atmosphäre zu bieten.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-medium text-dental-blue mb-6 leading-snug">Unsere Kernwerte für Ihre Zufriedenheit</h3>

              <div className="bg-gradient-to-r from-dental-beige to-white rounded-lg p-8 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Award className="h-6 w-6 text-dental-turquoise mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-dental-blue mb-2 leading-snug">Ästhetische Perfektion</h4>
                        <p className="text-sm text-dental-gray leading-relaxed">
                          Wir streben nach Ergebnissen, die nicht nur gesund, sondern auch natürlich schön sind und Ihre Persönlichkeit unterstreichen.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Target className="h-6 w-6 text-dental-turquoise mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-dental-blue mb-2 leading-snug">Innovation & Präzision</h4>
                        <p className="text-sm text-dental-gray leading-relaxed">
                          Durch kontinuierliche Fortbildung und den Einsatz neuester Technologien garantieren wir Behandlungen auf höchstem Niveau.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Heart className="h-6 w-6 text-dental-turquoise mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-dental-blue mb-2 leading-snug">Patientenorientierung</h4>
                        <p className="text-sm text-dental-gray leading-relaxed">
                          Ihre Bedürfnisse und Wünsche stehen im Mittelpunkt unserer Arbeit. Wir möchten, dass Sie sich bei uns bestens aufgehoben fühlen.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Shield className="h-6 w-6 text-dental-turquoise mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-dental-blue mb-2 leading-snug">Nachhaltige Qualität</h4>
                        <p className="text-sm text-dental-gray leading-relaxed">
                          Wir verwenden ausschließlich hochwertige, biokompatible Materialien für langlebige und gesunde Ergebnisse.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kernaussage-Box */}
              <div className="bg-dental-turquoise/10 p-6 rounded-lg text-center">
                <p className="text-lg font-medium text-dental-blue leading-relaxed">
                  💡 Wir sind mehr als nur Ihr <strong className="font-semibold">Zahnarzt in Dresden</strong> – wir sind Ihre Partner für ein gesundes und strahlend schönes Lächeln, das Ihnen Selbstvertrauen schenkt.
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
            <h2 className="mb-4 text-dental-blue font-semibold leading-tight">Ein Ambiente zum Wohlfühlen</h2>
            <h3 className="text-xl font-medium mb-6 text-dental-blue leading-snug">Unsere moderne Zahnarztpraxis in Dresden Laubegast</h3>
            <p className="text-lg max-w-2xl mx-auto text-dental-gray leading-relaxed">
              Treten Sie ein und überzeugen Sie sich selbst: Unsere Praxisräume sind hell, modern und mit neuester Technik ausgestattet.
            </p>
            <p className="max-w-2xl mx-auto text-dental-gray mt-4 leading-relaxed">
              Wir möchten, dass Ihr Besuch bei uns so angenehm wie möglich verläuft.
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
            <h2 className="mb-4 font-semibold leading-tight">Überzeugt? Lernen Sie uns persönlich kennen!</h2>
            <p className="text-lg mb-6 leading-relaxed">
              Wir freuen uns darauf, Sie in unserer modernen <strong className="font-semibold">Zahnarztpraxis in Dresden Laubegast</strong> begrüßen zu dürfen.
            </p>
            <p className="mb-8 leading-relaxed">
              Lassen Sie uns gemeinsam die Möglichkeiten für Ihr perfektes Lächeln entdecken.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-dental-blue hover:bg-dental-beige transition-all hover:scale-105 font-semibold">
                <Link to="/appointment">Termin vereinbaren</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-dental-blue hover:bg-dental-beige transition-all hover:scale-105 font-semibold">
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
