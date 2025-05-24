
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ServicesPageMeta = () => {
  const baseUrl = "https://zahnarztpraxis-worsch.de";

  return (
    <Helmet>
      <title>Leistungen Zahnarztpraxis Worsch Dresden | Implantate, Ästhetik & Mehr</title>
      <meta 
        name="description" 
        content="Entdecken Sie das breite Leistungsspektrum der Zahnarztpraxis Worsch in Dresden: Von Implantologie über ästhetische Zahnmedizin bis zur Prophylaxe. Ihr Partner für gesunde Zähne."
      />
      <meta 
        name="keywords" 
        content="Zahnarzt Dresden, Zahnimplantate Dresden, Ästhetische Zahnheilkunde, Prophylaxe, Zahnerhaltung, Parodontologie, Kinderzahnheilkunde"
      />
      <link rel="canonical" href={`${baseUrl}/services`} />
      
      {/* Open Graph tags */}
      <meta property="og:title" content="Leistungen Zahnarztpraxis Worsch Dresden | Implantate, Ästhetik & Mehr" />
      <meta property="og:description" content="Entdecken Sie das breite Leistungsspektrum der Zahnarztpraxis Worsch in Dresden: Von Implantologie über ästhetische Zahnmedizin bis zur Prophylaxe." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${baseUrl}/services`} />
      <meta property="og:image" content="https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=1740&auto=format&fit=crop" />
    </Helmet>
  );
};

export default ServicesPageMeta;
