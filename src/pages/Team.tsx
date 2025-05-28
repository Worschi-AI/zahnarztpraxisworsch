
import { Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import TeamHero from "@/components/team/TeamHero";
import TeamIntroduction from "@/components/team/TeamIntroduction";
import { 
  LazyTeamValues, 
  LazyTeamFAQ,
  LazyFooter 
} from "@/components/LazyComponents";
import LoadingSpinner from "@/components/LoadingSpinner";
import TeamCTA from "@/components/team/TeamCTA";

const Team = () => {
  return (
    <>
      <Helmet>
        <title>Unser Team - Zahnarztpraxis Worsch Dresden | Erfahrene Zahnärzte</title>
        <meta name="description" content="Lernen Sie das erfahrene Team der Zahnarztpraxis Worsch in Dresden kennen: Spezialisierte Zahnärzte für Implantologie, Ästhetik und Prophylaxe." />
      </Helmet>
      
      <div className="min-h-screen">
        <Navbar />
        <TeamHero />
        <TeamIntroduction />
        
        <Suspense fallback={<LoadingSpinner />}>
          <LazyTeamValues />
        </Suspense>
        
        <TeamCTA />
        
        <Suspense fallback={<LoadingSpinner />}>
          <LazyTeamFAQ />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <LazyFooter />
        </Suspense>
      </div>
    </>
  );
};

export default Team;
