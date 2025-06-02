
import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import HeroIntroSection from '@/components/home/HeroIntroSection';
import TextRevealSection from '@/components/home/TextRevealSection';
import FeaturedServices from '@/components/home/FeaturedServices';
import StatisticsSection from '@/components/home/StatisticsSection';
import TeamPreview from '@/components/home/TeamPreview';
import QualityPromiseSection from '@/components/services/QualityPromiseSection';
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
        "name": "Was kostet eine ästhetische Behandlung?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die Kosten variieren je nach Behandlung. Ein professionelles Bleaching beginnt ab 280€, Veneers ab 890€ pro Zahn. In unserem kostenlosen Beratungsgespräch in Dresden erstellen wir Ihnen einen transparenten Kostenvoranschlag."
        }
      },
      {
        "@type": "Question",
        "name": "Wie schnell bekomme ich einen Termin?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Online-Termine sind oft schon innerhalb weniger Tage verfügbar. Für Notfälle haben wir täglich Notfallzeiten reserviert. Buchen Sie bequem über Doctolib oder rufen Sie uns in Laubegast an."
        }
      },
      {
        "@type": "Question",
        "name": "Für wen ist Invisalign geeignet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Invisalign eignet sich für die meisten Zahnfehlstellungen bei Jugendlichen und Erwachsenen. In einem kostenlosen 3D-Scan prüfen wir, ob Invisalign für Sie geeignet ist und zeigen Ihnen das Endergebnis vorab."
        }
      },
      {
        "@type": "Question",
        "name": "Wie lange hält ein professionelles Bleaching?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bei guter Pflege bleiben Ihre Zähne 2-3 Jahre deutlich heller. Mit unserem Take-Home-Bleaching können Sie das Ergebnis jederzeit auffrischen. Wir beraten Sie gerne zur optimalen Nachsorge."
        }
      },
      {
        "@type": "Question",
        "name": "Was tun Sie für Angstpatienten?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wir nehmen Ihre Ängste ernst! Ausführliche Aufklärung, sanfte Behandlungsmethoden und bei Bedarf Sedierung sorgen für eine entspannte Behandlung. Sprechen Sie uns einfach darauf an."
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
        title="Zahnarzt Dresden-Laubegast: Moderne Zahnmedizin für Ihr perfektes Lächeln" 
        subtitle="Von Invisalign bis Bleaching – Entdecken Sie zeitgemäße Zahnbehandlungen in entspannter Atmosphäre. Ihre Zahngesundheit liegt uns am Herzen." 
        backgroundImage="https://images.unsplash.com/photo-1629909615957-f6d7e5bd7a25?q=80&w=1769&auto=format&fit=crop"
        ctaText="Jetzt Wunschtermin finden"
      />

      {/* Intro Section */}
      <HeroIntroSection />

      {/* Text Reveal Section */}
      <TextRevealSection />

      {/* Premium Services Section */}
      <FeaturedServices />

      {/* Statistics Section */}
      <StatisticsSection />

      {/* Team Teaser */}
      <TeamPreview />

      {/* Quality Promise Section */}
      <QualityPromiseSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <HomepageFAQ />

      {/* Appointment CTA */}
      <AppointmentCTA />

      <Footer />
    </div>
  );
};

export default Index;
