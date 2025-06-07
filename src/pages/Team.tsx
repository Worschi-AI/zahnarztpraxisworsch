
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import TeamHero from '@/components/team/TeamHero';
import TeamIntroduction from '@/components/team/TeamIntroduction';
import TeamMembersGrid from '@/components/team/TeamMembersGrid';
import TeamValues from '@/components/team/TeamValues';
import HomepageFAQ from '@/components/home/HomepageFAQ';
import AppointmentCTA from '@/components/home/AppointmentCTA';

const Team = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Unser Team | Zahnarzt Dresden Laubegast - Dr. Worsch & Kollegen</title>
        <meta name="description" content="Das erfahrene Team der Zahnarztpraxis Worsch in Dresden Laubegast. Dr. med. dent. Thomas Worsch und sein qualifiziertes Praxisteam für Ihre Zahngesundheit." />
        <link rel="canonical" href="https://zahnarztpraxis-worsch.de/team" />
      </Helmet>
      
      <Navbar />
      <TeamHero />
      <TeamIntroduction />
      <TeamMembersGrid />
      <TeamValues />
      
      {/* FAQ Section - same as homepage */}
      <HomepageFAQ />

      {/* Appointment CTA - same as homepage */}
      <AppointmentCTA />

      <Footer />
    </div>
  );
};

export default Team;
