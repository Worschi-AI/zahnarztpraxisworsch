import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import HeroIntroSection from '@/components/home/HeroIntroSection';

// Lazy load non-critical components for better performance
const PatientReviewTeaser = React.lazy(() => import('@/components/home/PatientReviewTeaser'));
const FeaturedServices = React.lazy(() => import('@/components/home/FeaturedServices'));
const StatisticsSection = React.lazy(() => import('@/components/home/StatisticsSection'));
const TeamPreview = React.lazy(() => import('@/components/home/TeamPreview'));
const QualityPromiseSection = React.lazy(() => import('@/components/services/QualityPromiseSection'));
const StandardServices = React.lazy(() => import('@/components/home/StandardServices'));
const TestimonialsSection = React.lazy(() => import('@/components/home/TestimonialsSection'));
const HomepageFAQ = React.lazy(() => import('@/components/home/HomepageFAQ'));
const AppointmentCTA = React.lazy(() => import('@/components/home/AppointmentCTA'));

// Loading component for better UX
const SectionLoader = () => (
  <div className="py-20 flex justify-center items-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-dental-turquoise"></div>
  </div>
);

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
          "text": "Bei Zahnarzt Worsch in Dresden Laubegast verbinden wir modernste Zahnmedizin mit einem besonderen Fokus auf Ästhetik. Wir nutzen digitale Technologien wie 3D-Planung und CAD/CAM-Fertigung, bieten innovative Behandlungen wie Veneers oder unsichtbare Zahnkorrekturen und legen großen Wert auf eine individuelle Beratung in entspannter Atmosphäre, um Ihr Wunschlächeln zu realisieren."
        }
      },
      {
        "@type": "Question",
        "name": "Welche Behandlungen im Bereich ästhetische Zahnmedizin bieten Sie in Ihrer Dresdner Praxis an?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unser Spektrum der ästhetischen Zahnmedizin in Dresden umfasst unter anderem professionelles Bleaching (Zahnaufhellung), hochwertige Keramik-Veneers, zahnfarbene Füllungen und Inlays, unsichtbare Zahnkorrekturen mit Alignern sowie komplette Smile Makeovers. Gerne beraten wir Sie individuell zu den besten Optionen für Ihr Lächeln."
        }
      },
      {
        "@type": "Question",
        "name": "Ist eine Erstberatung für ästhetische Behandlungen in Ihrer Praxis in Dresden kostenlos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wir bieten Ihnen gerne ein erstes unverbindliches Beratungsgespräch an, um Ihre Wünsche kennenzulernen und Ihnen die Möglichkeiten der modernen ästhetischen Zahnmedizin aufzuzeigen. Die Details zu eventuellen Kosten für eine umfassende Diagnostik und Planung besprechen wir transparent mit Ihnen im Vorfeld."
        }
      },
      {
        "@type": "Question",
        "name": "Wie modern ist die technische Ausstattung Ihrer Zahnarztpraxis in Dresden Laubegast?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unsere Zahnarztpraxis in Dresden Laubegast ist mit modernster Technologie ausgestattet. Dazu gehören digitales Röntgen (strahlungsarm), 3D-Diagnostik (DVT) für präzise Implantatplanung, intraorale Kameras zur Visualisierung, CAD/CAM-Systeme für passgenauen Zahnersatz und schonende Lasertechnologie für verschiedene Anwendungsbereiche."
        }
      },
      {
        "@type": "Question",
        "name": "Wie kann ich einen Termin bei Zahnarzt Worsch in Dresden vereinbaren?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sie können Ihren Termin ganz bequem online über unser Doctolib-Portal buchen – 24/7. Alternativ erreichen Sie unser freundliches Team in Dresden Laubegast telefonisch während unserer Sprechzeiten. Wir freuen uns auf Sie!"
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
        
        {/* Preload critical resources */}
        <link rel="preload" as="image" href="https://images.unsplash.com/photo-1629909615957-f6d7e5bd7a25?q=80&w=1769&auto=format&fit=crop&fm=webp&w=1920" />
        
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
      
      {/* Hero Section with updated content - Critical, loaded immediately */}
      <HeroSection 
        title="Ihr Lächeln. Unsere Expertise. Zahnarztpraxis Worsch Dresden." 
        subtitle="Entdecken Sie, wie wir moderne Zahnmedizin und ästhetische Perfektion für Ihr strahlendes Lächeln in Dresden-Laubegast verbinden." 
        backgroundImage="https://images.unsplash.com/photo-1629909615957-f6d7e5bd7a25?q=80&w=1769&auto=format&fit=crop"
        ctaText="Jetzt Wunschtermin finden"
      />

      {/* Intro Section - Critical, loaded immediately */}
      <HeroIntroSection />

      {/* Lazy loaded sections with Suspense for better performance */}
      <Suspense fallback={<SectionLoader />}>
        <PatientReviewTeaser />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <FeaturedServices />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <StatisticsSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <TeamPreview />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <QualityPromiseSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <StandardServices />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <TestimonialsSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <HomepageFAQ />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <AppointmentCTA />
      </Suspense>

      <Footer />
    </div>
  );
};

export default Index;
