
import { Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ContactContent from "@/components/contact/ContactContent";
import { LazyLocationMap, LazyFooter } from "@/components/LazyComponents";
import LoadingSpinner from "@/components/LoadingSpinner";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Kontakt - Zahnarztpraxis Worsch Dresden | Termine & Anfahrt</title>
        <meta name="description" content="Kontaktieren Sie die Zahnarztpraxis Worsch in Dresden: Terminvereinbarung, Anfahrt und alle Informationen für Ihren Besuch bei uns." />
      </Helmet>
      
      <div className="min-h-screen">
        <Navbar />
        <HeroSection 
          title="Kontakt & Anfahrt"
          subtitle="Wir freuen uns auf Ihren Besuch in unserer Zahnarztpraxis in Dresden-Laubegast."
          useSolidBackground={true}
        />
        
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row gap-12">
            <ContactContent />
            <Suspense fallback={<LoadingSpinner />}>
              <LazyLocationMap />
            </Suspense>
          </div>
        </div>
        
        <Suspense fallback={<LoadingSpinner />}>
          <LazyFooter />
        </Suspense>
      </div>
    </>
  );
};

export default Contact;
