
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ImplantologieMeta = () => {
  const baseUrl = "https://zahnarztpraxis-worsch.de";

  const implantologieSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Zahnimplantate Dresden",
    "description": "Hochwertige Zahnimplantate in Dresden mit 3D-Planung und schonenden Verfahren bei Dr. Worsch",
    "procedureType": "Zahnimplantologie",
    "bodyLocation": "Mund",
    "preparation": "3D-Diagnostik und individuelle Behandlungsplanung",
    "followup": "Regelmäßige Kontrolltermine und professionelle Implantatreinigung",
    "howPerformed": "Minimalinvasive Implantation unter örtlicher Betäubung"
  };

  return (
    <Helmet>
      <title>Zahnimplantate Dresden | Festsitzender Zahnersatz - Dr. Worsch</title>
      <meta 
        name="description" 
        content="Hochwertige Zahnimplantate in Dresden bei Dr. Worsch. Über 500 erfolgreich gesetzte Implantate mit 3D-Planung. Festsitzender Zahnersatz der sich anfühlt wie eigene Zähne."
      />
      <meta 
        name="keywords" 
        content="Zahnimplantate Dresden, Implantologie Dresden, Zahnersatz Dresden, Dr. Worsch, festsitzender Zahnersatz"
      />
      <link rel="canonical" href={`${baseUrl}/implantologie`} />
      
      {/* Open Graph tags */}
      <meta property="og:title" content="Zahnimplantate Dresden | Festsitzender Zahnersatz - Dr. Worsch" />
      <meta property="og:description" content="Hochwertige Zahnimplantate in Dresden bei Dr. Worsch. Über 500 erfolgreich gesetzte Implantate mit 3D-Planung." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${baseUrl}/implantologie`} />
      <meta property="og:image" content="https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=1769&auto=format&fit=crop" />
      
      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify(implantologieSchema)}
      </script>
    </Helmet>
  );
};

export default ImplantologieMeta;
