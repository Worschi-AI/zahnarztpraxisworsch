
import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import HeroIntroSection from '@/components/home/HeroIntroSection';
import PatientReviewTeaser from '@/components/home/PatientReviewTeaser';
import FeaturedServices from '@/components/home/FeaturedServices';
import StatisticsSection from '@/components/home/StatisticsSection';
import TeamPreview from '@/components/home/TeamPreview';
import QualityPromiseSection from '@/components/services/QualityPromiseSection';
import StandardServices from '@/components/home/StandardServices';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import HomepageFAQ from '@/components/home/HomepageFAQ';
import AppointmentCTA from '@/components/home/AppointmentCTA';

const Index = () => {
  // Use the scroll animation hook
  useScrollAnimation();

  const baseUrl = "https://zahnarztpraxis-worsch.de";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Was macht die Zahnarztpraxis Worsch in Dresden besonders für junge Patienten und ästhetische Wünsche?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In der Zahnarztpraxis Worsch in Dresden-Laubegast liegt unser Fokus darauf, modernste Zahnmedizin mit herausragender Ästhetik zu verbinden, um Ihr individuelles Wunschlächeln zu realisieren. Wir nutzen hierfür digitale Technologien wie präzise 3D-Planung und CAD/CAM-Fertigung und bieten innovative Behandlungen wie Veneers oder unsichtbare Zahnkorrekturen. Besonderen Wert legen wir dabei auf eine entspannte Atmosphäre und eine umfassende, persönliche Beratung, bei der Ihre Wünsche im Mittelpunkt stehen."
        }
      },
      {
        "@type": "Question",
        "name": "Welche Behandlungen im Bereich ästhetische Zahnmedizin bieten Sie in Ihrer Dresdner Praxis an?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unser umfassendes Spektrum der ästhetischen Zahnmedizin in Dresden bietet Ihnen zahlreiche Möglichkeiten für Ihr perfektes Lächeln. Dazu gehören unter anderem schonendes, professionelles Bleaching (Zahnaufhellung), langlebige Keramik-Veneers, ästhetische zahnfarbene Füllungen und Inlays, diskrete Zahnkorrekturen mit unsichtbaren Alignern sowie komplette Smile Makeovers. Wir beraten Sie sehr gerne individuell, um die optimalen Optionen für Ihr strahlendes Lächeln zu finden."
        }
      },
      {
        "@type": "Question",
        "name": "Ist eine Erstberatung für ästhetische Behandlungen in Ihrer Praxis in Dresden kostenlos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wir bieten Ihnen sehr gerne ein erstes, unverbindliches Beratungsgespräch für ästhetische Behandlungen an. Hier lernen wir Ihre individuellen Wünsche kennen und zeigen Ihnen transparent alle Möglichkeiten der modernen ästhetischen Zahnmedizin auf. Sollten für eine weiterführende Diagnostik oder Planung Kosten entstehen, besprechen wir diese selbstverständlich im Vorfeld detailliert mit Ihnen."
        }
      },
      {
        "@type": "Question",
        "name": "Wie modern ist die technische Ausstattung Ihrer Zahnarztpraxis in Dresden Laubegast?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unsere Zahnarztpraxis in Dresden-Laubegast ist auf dem neuesten Stand der Technik und mit modernster Technologie ausgestattet, um Ihnen Behandlungen auf höchstem Niveau zu ermöglichen. Dazu zählen digitales Röntgen (besonders strahlungsarm), hochpräzise 3D-Diagnostik (DVT) für eine exakte Implantatplanung, intraorale Kameras zur transparenten Visualisierung während der Behandlung, innovative CAD/CAM-Systeme für passgenauen Zahnersatz und schonende Lasertechnologie für vielfältige, angenehme Anwendungsbereiche."
        }
      },
      {
        "@type": "Question",
        "name": "Wie kann ich einen Termin bei Zahnarzt Worsch in Dresden vereinbaren?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ihren persönlichen Wunschtermin können Sie ganz bequem und rund um die Uhr (24/7) über unser Online-Buchungsportal vereinbaren. Falls Sie den persönlichen Kontakt bevorzugen, steht Ihnen unser freundliches Team in Dresden-Laubegast während der Sprechzeiten gerne telefonisch zur Verfügung. Wir freuen uns sehr darauf, Sie bald persönlich kennenzulernen!"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Zahnarzt Dresden Laubegast | Praxis Worsch – Ästhetik & Modernste Zahnmedizin</title>
        <meta name="description" content="Ihre moderne Zahnarztpraxis Worsch in Dresden Laubegast: Spezialisiert auf ästhetische Zahnmedizin, Implantate & Ihr strahlendes Lächeln. Jetzt Termin online buchen!" />
        <link rel="canonical" href={baseUrl} />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Zahnarzt Dresden Laubegast | Praxis Worsch – Ästhetik & Modernste Zahnmedizin" />
        <meta property="og:description" content="Ihre moderne Zahnarztpraxis Worsch in Dresden Laubegast: Spezialisiert auf ästhetische Zahnmedizin, Implantate & Ihr strahlendes Lächeln. Jetzt Termin online buchen!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={baseUrl} />
        <meta property="og:image" content="https://images.unsplash.com/photo-1629909615957-f6d7e5bd7a25?q=80&w=1769&auto=format&fit=crop" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section with updated content */}
      <HeroSection 
        title="Ihr Lächeln. Unsere Expertise. Zahnarztpraxis Worsch Dresden." 
        subtitle="Entdecken Sie, wie wir moderne Zahnmedizin und ästhetische Perfektion für Ihr strahlendes Lächeln in Dresden-Laubegast verbinden." 
        backgroundImage="https://images.unsplash.com/photo-1629909615957-f6d7e5bd7a25?q=80&w=1769&auto=format&fit=crop"
        ctaText="Jetzt Wunschtermin finden"
      />

      {/* Intro Section */}
      <HeroIntroSection />

      {/* Patient Reviews Teaser */}
      <PatientReviewTeaser />

      {/* Premium Services Section */}
      <FeaturedServices />

      {/* Statistics Section */}
      <StatisticsSection />

      {/* Team Teaser */}
      <TeamPreview />

      {/* Quality Promise Section */}
      <QualityPromiseSection />

      {/* Services Section - Standard Services */}
      <StandardServices />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ Section - vor AppointmentCTA eingefügt */}
      <HomepageFAQ />

      {/* Appointment CTA */}
      <AppointmentCTA />

      <Footer />
    </div>
  );
};

export default Index;
