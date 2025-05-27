
import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import TechnologySection from '@/components/praxis/TechnologySection';
import AboutFAQ from '@/components/about/AboutFAQ';
import AboutPhilosophy from '@/components/about/AboutPhilosophy';
import AboutPraxisGallery from '@/components/about/AboutPraxisGallery';
import AboutCTA from '@/components/about/AboutCTA';

const AboutPage = () => {
  // Use the scroll animation hook
  useScrollAnimation();

  const baseUrl = "https://zahnarztpraxis-worsch.de";

  // FAQ Schema für die About-Seite
  const aboutFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Was ist die Philosophie der Zahnarztpraxis Worsch in Dresden?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unsere Philosophie stellt Sie als Patient in den Mittelpunkt. Wir kombinieren moderne, innovative Zahnmedizin mit einem starken Fokus auf Ästhetik und individuelle Betreuung. Unser Ziel ist es, Ihnen nicht nur gesunde Zähne, sondern auch ein Lächeln zu schenken, mit dem Sie sich rundum wohlfühlen. Transparenz, Qualität und eine angenehme Atmosphäre sind uns dabei besonders wichtig."
        }
      },
      {
        "@type": "Question",
        "name": "Ist die Zahnarztpraxis Worsch in Dresden Laubegast modern ausgestattet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wir legen großen Wert auf eine moderne Praxisausstattung. Dazu gehören digitale Röntgentechnologie (DVT), intraorale Kameras, CAD/CAM-Systeme für Zahnersatz, Lasertechnologie und digitale Abformung. Diese Technologien ermöglichen präzisere Diagnosen, schonendere Behandlungen und oft schnellere Ergebnisse."
        }
      },
      {
        "@type": "Question",
        "name": "Wie gehen Sie in Ihrer Praxis mit Angstpatienten um?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wir haben viel Erfahrung im Umgang mit Angstpatienten. Unser Team in Dresden nimmt sich Zeit, hört Ihnen zu und erklärt jeden Schritt behutsam. Wir schaffen eine ruhige, entspannte Atmosphäre und bieten bei Bedarf auch Behandlungsmöglichkeiten wie Sedierung (Dämmerschlaf) an, um Ihnen den Besuch so angenehm wie möglich zu gestalten."
        }
      },
      {
        "@type": "Question",
        "name": "Legt die Zahnarztpraxis Worsch Wert auf Fortbildungen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolut! Kontinuierliche Fortbildung ist für unser gesamtes Team in Dresden selbstverständlich. So stellen wir sicher, dass wir Ihnen stets Zahnmedizin auf dem neuesten wissenschaftlichen Stand und mit den modernsten Techniken anbieten können, insbesondere in unseren Schwerpunktbereichen wie der ästhetischen Zahnmedizin und Implantologie."
        }
      },
      {
        "@type": "Question",
        "name": "Kann ich in der Zahnarztpraxis Worsch auch als Neupatient schnell einen Termin bekommen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wir bemühen uns stets, auch Neupatienten zeitnah Termine anbieten zu können, besonders bei akuten Beschwerden. Für eine Erstberatung, insbesondere im Bereich Ästhetik oder Implantologie, empfehlen wir eine frühzeitige Kontaktaufnahme, damit wir ausreichend Zeit für Sie einplanen können. Nutzen Sie gerne unsere Online-Terminbuchung oder rufen Sie uns an."
        }
      }
    ]
  };

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
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(aboutFaqSchema)}
        </script>
      </Helmet>

      <Navbar />
      
      {/* Hero Section */}
      <HeroSection 
        title="Zahnarztpraxis Worsch Dresden: Wo moderne Zahnmedizin auf Ästhetik trifft" 
        subtitle="Entdecken Sie unsere patientenorientierte Philosophie, innovative Technologien und ein Ambiente, in dem Sie sich wohlfühlen" 
        backgroundImage="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1887&auto=format&fit=crop"
      />

      {/* Praxisphilosophie */}
      <AboutPhilosophy />

      {/* Praxisräume */}
      <AboutPraxisGallery />

      {/* Technische Ausstattung */}
      <div className="animate-on-scroll">
        <TechnologySection />
      </div>

      {/* FAQ Section */}
      <AboutFAQ />

      {/* CTA */}
      <AboutCTA />

      <Footer />
    </div>
  );
};

export default AboutPage;
