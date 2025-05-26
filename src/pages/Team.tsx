import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import TeamHero from '@/components/team/TeamHero';
import TeamIntroduction from '@/components/team/TeamIntroduction';
import TeamValues from '@/components/team/TeamValues';
import TeamFAQ from '@/components/team/TeamFAQ';
import TeamCTA from '@/components/team/TeamCTA';
import { team } from '@/data/team';

const TeamPage = () => {
  const baseUrl = "https://zahnarztpraxis-worsch.de";

  // Create structured data for the team
  const teamStructuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Zahnarztpraxis Worsch Dresden",
    "url": "https://zahnarztpraxis-worsch.de/team",
    "description": "Das erfahrene Team der Zahnarztpraxis Worsch in Dresden: Spezialisierte Zahnärzte und qualifizierte Fachkräfte für Ihre Zahngesundheit.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Österreicher Str. 38",
      "addressLocality": "Dresden",
      "postalCode": "01279",
      "addressRegion": "Sachsen",
      "addressCountry": "DE"
    },
    "employee": team.map(member => ({
      "@type": member.role.includes("Zahnarzt") ? "Dentist" : "Person",
      "name": member.name,
      "jobTitle": member.role,
      "description": member.bio,
      "image": member.imageUrl,
      "worksFor": {
        "@type": "MedicalOrganization",
        "name": "Zahnarztpraxis Worsch Dresden"
      },
      ...(member.specializations && member.specializations.length > 0 && {
        "knowsAbout": member.specializations
      }),
      ...(member.education && member.education.length > 0 && {
        "hasCredential": member.education.map(edu => ({
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": edu
        }))
      })
    }))
  };

  // FAQ Schema für die Team-Seite
  const teamFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Welche Qualifikationen und Spezialisierungen haben die Zahnärzte der Praxis Worsch in Dresden?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unser Zahnarzt-Team in Dresden verfügt über umfassende Qualifikationen und bildet sich kontinuierlich in Spezialgebieten wie ästhetische Zahnmedizin, Implantologie, Endodontie und Kinderzahnheilkunde weiter. Detaillierte Informationen zu den Schwerpunkten unserer Zahnärzte finden Sie in den einzelnen Teamprofilen auf dieser Seite."
        }
      },
      {
        "@type": "Question",
        "name": "Wie geht das Team der Zahnarztpraxis Worsch mit Angstpatienten um?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wir haben großes Verständnis für Patienten mit Zahnarztangst. Unser Team in Dresden Laubegast ist speziell geschult, um Ihnen einen möglichst stressfreien und angenehmen Besuch zu ermöglichen. Wir nehmen uns viel Zeit für Sie, erklären jeden Schritt und bieten bei Bedarf auch schonende Behandlungsmethoden wie Sedierung (Dämmerschlaf) an. Sprechen Sie uns gerne offen auf Ihre Ängste an!"
        }
      },
      {
        "@type": "Question",
        "name": "Kann ich mir einen bestimmten Zahnarzt oder eine Zahnärztin in Ihrer Dresdner Praxis aussuchen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, selbstverständlich können Sie bei der Terminvereinbarung Ihren Wunschbehandler in unserer Zahnarztpraxis in Dresden angeben. Wir versuchen, dies bestmöglich zu berücksichtigen. Bei Notfällen oder sehr kurzfristigen Terminen kann es jedoch sein, dass Sie von dem gerade verfügbaren Zahnarzt behandelt werden."
        }
      },
      {
        "@type": "Question",
        "name": "Spricht das Praxisteam auch andere Sprachen außer Deutsch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Einige Mitglieder unseres Teams in Dresden sprechen auch Englisch. Bitte geben Sie bei der Terminvereinbarung Bescheid, falls Sie eine Betreuung in einer anderen Sprache wünschen, damit wir dies bestmöglich organisieren können."
        }
      },
      {
        "@type": "Question",
        "name": "Wie wichtig ist dem Team der Zahnarztpraxis Worsch die kontinuierliche Weiterbildung?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sehr wichtig! Um Ihnen stets Zahnmedizin auf dem neuesten Stand der Wissenschaft anbieten zu können, nehmen alle unsere Zahnärzte und Mitarbeiter in Dresden regelmäßig an Fortbildungen und Fachkongressen teil. So stellen wir sicher, dass Sie von den modernsten und besten Behandlungsmethoden profitieren."
        }
      }
    ]
  };

  // Animation on scroll effect with proper cleanup
  useEffect(() => {
    // Define the IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add animated class and keep it there permanently
          entry.target.classList.add('animated');
          // Once element is animated, stop observing it
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    // Select all elements to animate
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    
    // Start observing each element
    elementsToAnimate.forEach(el => {
      observer.observe(el);
    });

    // Clean up function to prevent memory leaks
    return () => {
      elementsToAnimate.forEach(el => {
        observer.unobserve(el);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Unser Team | Zahnärzte & Experten für Ästhetik - Praxis Worsch Dresden</title>
        <meta 
          name="description" 
          content="Lernen Sie das engagierte Team der Zahnarztpraxis Worsch in Dresden Laubegast kennen. Spezialisierte Zahnärzte und ein freundliches Team erwarten Sie."
        />
        <link rel="canonical" href={`${baseUrl}/team`} />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Unser Team | Zahnärzte & Experten für Ästhetik - Praxis Worsch Dresden" />
        <meta property="og:description" content="Lernen Sie das engagierte Team der Zahnarztpraxis Worsch in Dresden Laubegast kennen. Spezialisierte Zahnärzte und ein freundliches Team erwarten Sie." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${baseUrl}/team`} />
        <meta property="og:image" content="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1770&auto=format&fit=crop" />

        <script type="application/ld+json">
          {JSON.stringify(teamStructuredData)}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify(teamFaqSchema)}
        </script>
      </Helmet>
      
      <Navbar />
      <TeamHero />
      <TeamIntroduction />
      <TeamValues />
      <TeamFAQ />
      <TeamCTA />
      <Footer />
    </div>
  );
};

export default TeamPage;
