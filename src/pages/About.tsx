
import { Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { 
  LazyAboutPhilosophy, 
  LazyAboutPraxisGallery, 
  LazyAboutFAQ,
  LazyFooter 
} from "@/components/LazyComponents";
import LoadingSpinner from "@/components/LoadingSpinner";
import TechnologySection from "@/components/praxis/TechnologySection";
import AboutCTA from "@/components/about/AboutCTA";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Über uns - Zahnarztpraxis Worsch Dresden | Moderne Zahnmedizin</title>
        <meta name="description" content="Lernen Sie die Zahnarztpraxis Worsch in Dresden kennen: Moderne Ausstattung, erfahrenes Team und patientenorientierte Behandlung für Ihre Zahngesundheit." />
      </Helmet>
      
      <div className="min-h-screen">
        <Navbar />
        <HeroSection 
          title="Willkommen in der Zahnarztpraxis Worsch Dresden"
          subtitle="Moderne Zahnmedizin in angenehmer Atmosphäre – Ihre Gesundheit und Ihr Wohlbefinden stehen bei uns im Mittelpunkt."
          useSolidBackground={true}
        />
        
        <Suspense fallback={<LoadingSpinner />}>
          <LazyAboutPhilosophy />
        </Suspense>
        
        <TechnologySection />
        
        <Suspense fallback={<LoadingSpinner />}>
          <LazyAboutPraxisGallery />
        </Suspense>
        
        <AboutCTA />
        
        <Suspense fallback={<LoadingSpinner />}>
          <LazyAboutFAQ />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <LazyFooter />
        </Suspense>
      </div>
    </>
  );
};

export default About;
