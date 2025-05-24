
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import TeamMember from '@/components/TeamMember';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { team } from '@/data/team';
import { Stethoscope, Users, Clock, Award, Heart } from 'lucide-react';

const TeamPage = () => {
  const baseUrl = "https://zahnarztpraxis-worsch.de";

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
        <title>Unser Zahnarzt-Team in Dresden | Zahnärzte & Experten | Praxis Worsch</title>
        <meta 
          name="description" 
          content="Lernen Sie das erfahrene Zahnarzt-Team der Praxis Worsch in Dresden kennen! Unsere Zahnärzte und Fachkräfte freuen sich darauf, Sie persönlich zu betreuen."
        />
        <link rel="canonical" href={`${baseUrl}/team`} />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Unser Zahnarzt-Team in Dresden | Zahnärzte & Experten | Praxis Worsch" />
        <meta property="og:description" content="Lernen Sie das erfahrene Zahnarzt-Team der Praxis Worsch in Dresden kennen! Unsere Zahnärzte und Fachkräfte freuen sich darauf, Sie persönlich zu betreuen." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${baseUrl}/team`} />
        <meta property="og:image" content="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1770&auto=format&fit=crop" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection 
        title="Lernen Sie uns kennen" 
        subtitle="Lernen Sie unsere Zahnärzte und unser Praxisteam kennen" 
        backgroundImage="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1770&auto=format&fit=crop"
      />

      {/* Team Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll">
            <h2 className="mb-6 text-dental-blue">Ihr kompetentes Praxisteam</h2>
            <p className="text-lg text-dental-gray">
              In unserer Zahnarztpraxis in Dresden erwartet Sie ein engagiertes Team aus erfahrenen Zahnärzten und qualifizierten 
              Fachkräften. Gemeinsam setzen wir uns für Ihre Zahngesundheit und Ihr Wohlbefinden ein. Wir legen 
              großen Wert auf kontinuierliche Fortbildung, um Ihnen stets die beste Versorgung nach aktuellen 
              wissenschaftlichen Standards zu bieten.
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
              <h2 className="mb-6 text-dental-blue">Unsere Teamwerte</h2>
              <p className="text-lg text-dental-gray">
                Als Team verbinden uns gemeinsame Werte, die unsere tägliche Arbeit prägen und die Grundlage 
                für unseren Umgang mit Patienten bilden.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md animate-on-scroll flex">
                <div className="bg-dental-turquoise/10 p-3 rounded-full mr-4 flex items-center justify-center">
                  <Heart className="text-dental-turquoise" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-dental-turquoise">Einfühlungsvermögen</h3>
                  <p className="text-dental-gray">
                    Wir nehmen Ihre Anliegen und Ängste ernst und gehen individuell auf Ihre Bedürfnisse ein.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md animate-on-scroll flex" style={{ animationDelay: "100ms" }}>
                <div className="bg-dental-turquoise/10 p-3 rounded-full mr-4 flex items-center justify-center">
                  <Award className="text-dental-turquoise" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-dental-turquoise">Fachkompetenz</h3>
                  <p className="text-dental-gray">
                    Regelmäßige Fortbildungen gewährleisten, dass wir stets auf dem neuesten wissenschaftlichen Stand sind.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md animate-on-scroll flex" style={{ animationDelay: "200ms" }}>
                <div className="bg-dental-turquoise/10 p-3 rounded-full mr-4 flex items-center justify-center">
                  <Users className="text-dental-turquoise" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-dental-turquoise">Vertrauen</h3>
                  <p className="text-dental-gray">
                    Eine offene und ehrliche Kommunikation ist die Basis für eine vertrauensvolle Zusammenarbeit.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md animate-on-scroll flex" style={{ animationDelay: "300ms" }}>
                <div className="bg-dental-turquoise/10 p-3 rounded-full mr-4 flex items-center justify-center">
                  <Stethoscope className="text-dental-turquoise" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-dental-turquoise">Qualität</h3>
                  <p className="text-dental-gray">
                    Wir arbeiten mit hochwertigsten Materialien und modernsten Techniken für langlebige Ergebnisse.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-dental-turquoise to-dental-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-on-scroll">
            <h2 className="mb-4">Lernen Sie uns persönlich kennen</h2>
            <p className="text-lg mb-8">
              Vereinbaren Sie einen Termin für ein erstes Kennenlerngespräch oder eine Beratung 
              in unserer Praxis. Wir freuen uns auf Sie!
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
