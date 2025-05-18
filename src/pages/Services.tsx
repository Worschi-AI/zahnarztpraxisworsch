
import React from 'react';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { services } from '@/data/services';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const ServicesPage = () => {
  // Use the scroll animation hook
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection 
        title="Unsere Leistungen" 
        subtitle="Entdecken Sie unser umfassendes Angebot für Ihre Zahngesundheit" 
        backgroundImage="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1932&auto=format&fit=crop"
      />

      {/* Services Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="mb-6 text-dental-blue">Zahnmedizin auf höchstem Niveau</h2>
            <p className="text-lg text-dental-gray">
              In unserer Praxis bieten wir Ihnen das gesamte Spektrum der modernen Zahnheilkunde. 
              Von der Prophylaxe über hochwertige Füllungstherapien bis hin zu ästhetischem Zahnersatz – 
              wir verfolgen stets das Ziel, Ihre natürlichen Zähne zu erhalten und Ihnen zu einem 
              strahlenden Lächeln zu verhelfen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
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

      {/* Quality Promise */}
      <section className="py-20 bg-dental-beige">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 animate-on-scroll">
              <h2 className="mb-6 text-dental-blue">Unser Qualitätsversprechen</h2>
              <p className="text-lg mb-6 text-dental-gray">
                Bei allen Behandlungen legen wir größten Wert auf Qualität und Langlebigkeit. 
                Wir verwenden ausschließlich hochwertige Materialien und arbeiten mit renommierten 
                Laboren zusammen, um Ihnen die bestmöglichen Ergebnisse zu garantieren.
              </p>
              <p className="text-lg mb-8 text-dental-gray">
                Unsere Behandlungskonzepte basieren auf aktuellen wissenschaftlichen Erkenntnissen und 
                werden individuell auf Ihre Bedürfnisse abgestimmt. Transparente Beratung und ausführliche 
                Aufklärung sind für uns selbstverständlich.
              </p>
            </div>
            <div className="md:w-1/2 animate-on-scroll">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1579684453377-caffcf3af611?q=80&w=1771&auto=format&fit=crop" 
                  alt="Zahnärztin bei der Arbeit" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-dental-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-on-scroll">
            <h2 className="mb-4">Haben Sie Fragen zu unseren Leistungen?</h2>
            <p className="text-lg mb-8">
              Vereinbaren Sie einen Beratungstermin in unserer Praxis. 
              Wir besprechen Ihre Wünsche und erstellen einen individuellen Behandlungsplan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-dental-blue hover:bg-dental-beige">
                <Link to="/appointment">Termin vereinbaren</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white hover:bg-white hover:text-dental-blue">
                <a href="tel:+49123456789">Telefonisch anfragen</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
