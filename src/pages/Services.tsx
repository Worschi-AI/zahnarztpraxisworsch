
import { Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { 
  LazyQualityPromiseSection, 
  LazyServicesOverviewFAQ,
  LazyFooter 
} from "@/components/LazyComponents";
import LoadingSpinner from "@/components/LoadingSpinner";
import ServicesPageMeta from "@/components/services/ServicesPageMeta";
import PremiumServiceSection from "@/components/services/PremiumServiceSection";
import StandardServiceSection from "@/components/services/StandardServiceSection";
import CallToActionSection from "@/components/services/CallToActionSection";

const Services = () => {
  return (
    <>
      <ServicesPageMeta />
      
      <div className="min-h-screen">
        <Navbar />
        <HeroSection 
          title="Unsere Leistungen für Ihre Zahngesundheit"
          subtitle="Von Prophylaxe bis Implantologie – entdecken Sie unser umfassendes Spektrum moderner Zahnmedizin in Dresden."
          useSolidBackground={true}
        />
        
        <PremiumServiceSection />
        <StandardServiceSection />
        
        <Suspense fallback={<LoadingSpinner />}>
          <LazyQualityPromiseSection />
        </Suspense>
        
        <CallToActionSection />
        
        <Suspense fallback={<LoadingSpinner />}>
          <LazyServicesOverviewFAQ />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <LazyFooter />
        </Suspense>
      </div>
    </>
  );
};

export default Services;
