
import { Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { 
  LazyTestimonialsSection, 
  LazyStatisticsSection, 
  LazyHomepageFAQ, 
  LazyTeamPreview,
  LazyFooter 
} from "@/components/LazyComponents";
import LoadingSpinner from "@/components/LoadingSpinner";
import HeroIntroSection from "@/components/home/HeroIntroSection";
import FeaturedServices from "@/components/home/FeaturedServices";
import StandardServices from "@/components/home/StandardServices";
import AppointmentCTA from "@/components/home/AppointmentCTA";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Zahnarztpraxis Worsch Dresden | Implantologie & Ästhetische Zahnmedizin</title>
        <meta name="description" content="Ihre Zahnarztpraxis Worsch in Dresden: Spezialisiert auf Implantologie, ästhetische Zahnmedizin & Prophylaxe. Moderne Technik & erfahrenes Team. Jetzt Termin online buchen!" />
      </Helmet>
      
      <div className="min-h-screen">
        <Navbar />
        <HeroSection 
          title="Ihre Zahnarztpraxis Worsch in Dresden: Für ein strahlendes und gesundes Lächeln"
          subtitle="Entdecken Sie unsere patientenorientierte Philosophie, erleben Sie innovative Technologien und fühlen Sie sich in unserem angenehmen Ambiente rundum wohl."
        />
        <HeroIntroSection />
        <FeaturedServices />
        <StandardServices />
        
        <Suspense fallback={<LoadingSpinner />}>
          <LazyTeamPreview />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <LazyTestimonialsSection />
        </Suspense>
        
        <AppointmentCTA />
        
        <Suspense fallback={<LoadingSpinner />}>
          <LazyStatisticsSection />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <LazyHomepageFAQ />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <LazyFooter />
        </Suspense>
      </div>
    </>
  );
};

export default Index;
