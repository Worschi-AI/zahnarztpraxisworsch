import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import TeamMember from '@/components/TeamMember';
import TeamFAQ from '@/components/team/TeamFAQ';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { team } from '@/data/team';
import { Stethoscope, Users, Clock, Award, Heart } from 'lucide-react';

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
      
      {/* Hero Section */}
      <HeroSection 
        title="Ihr Lächeln in besten Händen: Unser Team in Dresden Laubegast" 
        subtitle="Kompetenz, Einfühlungsvermögen und die Leidenschaft für perfekte Ergebnisse – das zeichnet unsere Zahnärzte und Mitarbeiter aus" 
        backgroundImage="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1770&auto=format&fit=crop"
      />

      {/* Team Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="mb-6 text-dental-blue">Experten für Ihre Zahngesundheit und Ästhetik in Dresden</h2>
            <p className="text-lg text-dental-gray">
              In der <strong>Zahnarztpraxis Worsch in Dresden Laubegast</strong> erwartet Sie ein hochqualifiziertes und erfahrenes Team, 
              das sich mit Leidenschaft Ihrer Zahngesundheit und insbesondere Ihren ästhetischen Wünschen widmet. Wir legen größten 
              Wert auf eine persönliche Betreuung, eine angenehme Atmosphäre und Behandlungsergebnisse, die Sie begeistern werden. 
              Kontinuierliche Fortbildungen in allen Bereichen der modernen Zahnmedizin, insbesondere der ästhetischen Zahnheilkunde 
              und Implantologie, sind für uns selbstverständlich.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div key={member.id} className="animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
                <TeamMember
                  id={member.id}
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  imageUrl={member.imageUrl}
                  specializations={member.specializations}
                  education={member.education}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-dental-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="mb-6 text-dental-blue">Was uns als Team in Dresden auszeichnet</h2>
              <p className="text-lg text-dental-gray">
                Diese Werte prägen unsere tägliche Arbeit und bilden die Grundlage für Ihre optimale Betreuung 
                in der Zahnarztpraxis Worsch.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md animate-on-scroll flex">
                <div className="bg-dental-turquoise/10 p-3 rounded-full mr-4 flex items-center justify-center">
                  <Heart className="text-dental-turquoise" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-dental-turquoise">Leidenschaft für Ästhetik</h3>
                  <p className="text-dental-gray">
                    Wir lieben es, perfekte Lächeln zu gestalten und Ihre individuellen Wünsche zu verwirklichen.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md animate-on-scroll flex" style={{ animationDelay: "100ms" }}>
                <div className="bg-dental-turquoise/10 p-3 rounded-full mr-4 flex items-center justify-center">
                  <Award className="text-dental-turquoise" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-dental-turquoise">Höchste Präzision</h3>
                  <p className="text-dental-gray">
                    Dank moderner Technik und Know-how erreichen wir präzise und langlebige Ergebnisse.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md animate-on-scroll flex" style={{ animationDelay: "200ms" }}>
                <div className="bg-dental-turquoise/10 p-3 rounded-full mr-4 flex items-center justify-center">
                  <Users className="text-dental-turquoise" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-dental-turquoise">Individuelle Betreuung</h3>
                  <p className="text-dental-gray">
                    Ihre Wünsche sind unser Maßstab. Wir entwickeln individuelle Behandlungskonzepte für Sie.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md animate-on-scroll flex" style={{ animationDelay: "300ms" }}>
                <div className="bg-dental-turquoise/10 p-3 rounded-full mr-4 flex items-center justify-center">
                  <Stethoscope className="text-dental-turquoise" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-dental-turquoise">Kontinuierliche Innovation</h3>
                  <p className="text-dental-gray">
                    Wir sind immer am Puls der Zeit und bilden uns kontinuierlich in modernsten Verfahren fort.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md animate-on-scroll mt-6" style={{ animationDelay: "400ms" }}>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3 text-dental-turquoise">Wohlfühlatmosphäre</h3>
                <p className="text-dental-gray">
                  Damit Sie entspannt zu uns kommen können, schaffen wir eine angenehme und moderne Atmosphäre 
                  in unserer Praxis in Dresden Laubegast.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <TeamFAQ />

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-dental-turquoise to-dental-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-on-scroll">
            <h2 className="mb-4">Lernen Sie uns persönlich kennen und lassen Sie sich beraten!</h2>
            <p className="text-lg mb-8">
              Das Team der <strong>Zahnarztpraxis Worsch in Dresden Laubegast</strong> freut sich darauf, Sie individuell zu betreuen 
              und Ihnen die besten Lösungen für Ihre Zahngesundheit und Ästhetik anzubieten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-dental-blue hover:bg-dental-beige">
                <Link to="/appointment">Termin vereinbaren</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white hover:bg-white hover:text-dental-blue">
                <Link to="/contact">Kontakt & Anfahrt</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamPage;
