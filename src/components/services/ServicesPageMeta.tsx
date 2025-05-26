
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ServicesPageMeta = () => {
  const baseUrl = "https://zahnarztpraxis-worsch.de";

  // FAQ Schema für die Services-Seite
  const servicesFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Welche zahnmedizinischen Leistungen bietet die Zahnarztpraxis Worsch in Dresden an?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wir bieten ein umfassendes Spektrum moderner Zahnmedizin in Dresden Laubegast. Unsere Schwerpunkte liegen auf ästhetischer Zahnheilkunde (Veneers, Bleaching), hochwertiger Implantologie und individuellem Zahnersatz. Darüber hinaus umfasst unser Angebot Prophylaxe, Zahnerhaltung, Parodontologie, Kinderzahnheilkunde und mehr. Entdecken Sie alle unsere Leistungen auf unserer Webseite."
        }
      },
      {
        "@type": "Question",
        "name": "Ich interessiere mich für eine ästhetische Zahnbehandlung. Wie finde ich heraus, welche für mich geeignet ist?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Der beste Weg ist ein persönliches Beratungsgespräch in unserer Praxis in Dresden. Wir analysieren Ihre individuelle Situation, besprechen Ihre Wünsche und zeigen Ihnen die verschiedenen Möglichkeiten der ästhetischen Zahnmedizin auf, von Bleaching über Veneers bis hin zu unsichtbaren Zahnkorrekturen. Vereinbaren Sie gerne einen Beratungstermin."
        }
      },
      {
        "@type": "Question",
        "name": "Sind die Behandlungen in der Zahnarztpraxis Worsch schmerzarm?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wir legen größten Wert auf eine möglichst schmerzarme und schonende Behandlung. Wir nutzen moderne Anästhesieverfahren und Technologien wie Laser-Zahnheilkunde, um Ihren Besuch bei uns in Dresden so angenehm wie möglich zu gestalten. Bei Bedenken oder Ängsten sprechen Sie uns bitte jederzeit an."
        }
      },
      {
        "@type": "Question",
        "name": "Was kosten die verschiedenen Zahnbehandlungen in Ihrer Dresdner Praxis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die Kosten für zahnmedizinische Behandlungen sind individuell und hängen von der Art und dem Umfang der notwendigen Maßnahmen ab. Nach einer genauen Untersuchung erstellen wir Ihnen einen transparenten Heil- und Kostenplan. Für viele Leistungen gibt es zudem Festzuschüsse von den gesetzlichen Krankenkassen. Wir beraten Sie gerne auch zu Finanzierungsmöglichkeiten."
        }
      },
      {
        "@type": "Question",
        "name": "Wie kann ich mehr Details zu einer bestimmten Leistung erfahren?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Auf unserer Webseite finden Sie eine Übersicht unserer Hauptleistungsbereiche. Für detaillierte Informationen zu einzelnen Behandlungen wie Implantologie, Zahnersatz oder Prophylaxe klicken Sie bitte auf den jeweiligen \"Mehr erfahren\" oder \"Details ansehen\" Button. Natürlich stehen wir Ihnen auch gerne für ein persönliches Gespräch in unserer Praxis in Dresden Laubegast zur Verfügung."
        }
      }
    ]
  };

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
      
      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify(servicesFaqSchema)}
      </script>
    </Helmet>
  );
};

export default ServicesPageMeta;
