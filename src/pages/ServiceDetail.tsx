
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import FAQSection from '@/components/services/FAQSection';
import { ChevronRight, Star, Smile, Droplet } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const ServiceDetail = () => {
  // Use the custom scroll animation hook
  useScrollAnimation();
  
  const { id } = useParams<{ id: string }>();
  const service = services.find(s => s.id === id);

  // Redirect if service not found
  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl mb-4">Leistung nicht gefunden</h2>
        <p className="mb-6">Die angeforderte Leistung existiert nicht.</p>
        <Link to="/services" className="text-dental-blue hover:underline">
          Zurück zur Leistungsübersicht
        </Link>
      </div>
    );
  }

  // Customize page title and description for specific services
  const getMetaTitle = () => {
    if (id === 'implantologie') {
      return "Zahnimplantate Dresden | Experte für Implantologie | Zahnarztpraxis Worsch";
    }
    if (id === 'aesthetische-zahnheilkunde') {
      return "Ästhetische Zahnheilkunde Dresden | Veneers, Bleaching | Zahnarztpraxis Worsch";
    }
    return `${service.title} | Zahnarztpraxis Worsch Dresden`;
  };

  const getMetaDescription = () => {
    if (id === 'implantologie') {
      return "Zahnarztpraxis Worsch in Dresden: Ihr Spezialist für hochwertige Zahnimplantate. Feste Zähne & natürliches Lächeln dank moderner Implantologie. Jetzt beraten lassen!";
    }
    if (id === 'aesthetische-zahnheilkunde') {
      return "Zahnarztpraxis Worsch in Dresden: Ihr Experte für ästhetische Zahnheilkunde. Von Veneers über Bleaching bis zum Smile Makeover – für Ihr strahlendstes Lächeln. Jetzt beraten lassen!";
    }
    return service.shortDescription;
  };

  // Customize hero section title for specific services
  const getHeroTitle = () => {
    if (id === 'implantologie') {
      return "Zahnimplantate Dresden: Feste Zähne von Ihrem Spezialisten";
    }
    if (id === 'aesthetische-zahnheilkunde') {
      return "Ästhetische Zahnheilkunde in Dresden | Für Ihr perfektes Lächeln";
    }
    return service.title;
  };

  // Check if the current page is Implantologie or Ästhetische Zahnheilkunde
  const isImplantologiePage = id === 'implantologie';
  const isAestheticPage = id === 'aesthetische-zahnheilkunde';

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{getMetaTitle()}</title>
        <meta name="description" content={getMetaDescription()} />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection 
        title={getHeroTitle()} 
        subtitle={service.shortDescription} 
        backgroundImage={service.imageUrl}
      />

      {/* Service Description */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 animate-on-scroll">
              {isImplantologiePage ? (
                <>
                  <h2 className="mb-6 text-dental-blue">Was sind Zahnimplantate?</h2>
                  <div className="prose prose-lg max-w-none text-dental-gray">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                      <div>
                        <p>
                          <strong>Zahnimplantate in Dresden</strong> sind die modernste und komfortabelste Lösung für fehlende Zähne. Bei der <strong>Implantologie in Dresden</strong> setzen wir in der Zahnarztpraxis Worsch auf hochwertige Titanimplantate, die als künstliche Zahnwurzeln im Kieferknochen verankert werden.
                        </p>
                        <p>
                          Als erfahrener <strong>Implantologe in Dresden</strong> bietet Dr. Worsch Ihnen eine präzise Planung und schmerzarme Behandlung mit modernster 3D-Diagnostik. Unsere Patienten wählen uns aufgrund unserer langjährigen Expertise und dem Einsatz modernster implantologischer Verfahren.
                        </p>
                      </div>
                      <div className="rounded-lg overflow-hidden shadow-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1770&auto=format&fit=crop"
                          alt="Zahnimplantat Modell - Zahnarztpraxis Worsch Dresden"
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-medium mt-8 mb-4 text-dental-blue">Der Behandlungsablauf für Zahnimplantate in Dresden</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                      <div className="rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
                        <img 
                          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1780&auto=format&fit=crop"
                          alt="3D-Planung für Zahnimplantate - Zahnarztpraxis Worsch Dresden"
                          className="w-full h-auto"
                        />
                      </div>
                      <div className="order-1 md:order-2">
                        <ol className="list-decimal list-inside space-y-4">
                          <li className="font-medium text-dental-blue">Ausführliche Erstberatung
                            <p className="font-normal text-dental-gray mt-1">Wir analysieren Ihre individuelle Situation und klären alle Ihre Fragen zu <strong>Zahnimplantaten in Dresden</strong>.</p>
                          </li>
                          <li className="font-medium text-dental-blue">3D-Diagnostik und Planung
                            <p className="font-normal text-dental-gray mt-1">Mit modernster Bildgebung planen wir präzise die ideale Position Ihrer Implantate.</p>
                          </li>
                          <li className="font-medium text-dental-blue">Implantation
                            <p className="font-normal text-dental-gray mt-1">Der minimalinvasive chirurgische Eingriff erfolgt schmerzfrei unter lokaler Betäubung oder auf Wunsch in Sedierung.</p>
                          </li>
                          <li className="font-medium text-dental-blue">Einheilungsphase
                            <p className="font-normal text-dental-gray mt-1">Die Implantate verwachsen in 2-6 Monaten mit dem Kiefer (Osseointegration).</p>
                          </li>
                          <li className="font-medium text-dental-blue">Prothetische Versorgung
                            <p className="font-normal text-dental-gray mt-1">Ihr hochwertiger <strong>festsitzender Zahnersatz in Dresden</strong> wird eingesetzt und angepasst.</p>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </>
              ) : isAestheticPage ? (
                <>
                  <h2 className="mb-6 text-dental-blue">Ästhetische Zahnmedizin in Dresden: Ihr Weg zum strahlenden Lächeln</h2>
                  <div className="prose prose-lg max-w-none text-dental-gray">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                      <div>
                        <p>
                          <strong>Ästhetische Zahnheilkunde in Dresden</strong> verbindet moderne Zahnmedizin mit höchsten ästhetischen Ansprüchen. In der Zahnarztpraxis Worsch bieten wir Ihnen ein umfassendes Spektrum an Behandlungen, um Ihnen zu einem natürlich schönen Lächeln zu verhelfen.
                        </p>
                        <p>
                          Unser erfahrenes Team für <strong>Zahnästhetik in Dresden</strong> setzt auf hochwertige Materialien und innovative Verfahren, um selbst kleinste Unregelmäßigkeiten zu korrigieren und Ihr strahlendstes Lächeln zum Vorschein zu bringen.
                        </p>
                      </div>
                      <div className="rounded-lg overflow-hidden shadow-lg">
                        <img 
                          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1770&auto=format&fit=crop" 
                          alt="Ästhetische Zahnbehandlung Beratung - Zahnarztpraxis Worsch Dresden"
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-medium mt-10 mb-6 text-dental-blue">Unsere ästhetischen Behandlungen in Dresden</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-10">
                      <div className="bg-dental-beige p-5 rounded-lg">
                        <div className="flex items-center mb-3">
                          <Droplet className="h-6 w-6 text-dental-turquoise mr-2" />
                          <h4 className="text-xl font-medium text-dental-blue">Veneers Dresden</h4>
                        </div>
                        <p className="text-base">
                          Hauchdünne Keramikschalen, die auf die Zahnoberfläche geklebt werden, um Verfärbungen, kleine Zahnlücken oder Formkorrekturen ästhetisch perfekt zu lösen.
                        </p>
                        <Button variant="link" asChild className="mt-2 p-0 text-dental-turquoise hover:text-dental-blue">
                          <Link to="#veneers">Mehr zu Veneers erfahren</Link>
                        </Button>
                      </div>
                      
                      <div className="bg-dental-beige p-5 rounded-lg">
                        <div className="flex items-center mb-3">
                          <Smile className="h-6 w-6 text-dental-turquoise mr-2" />
                          <h4 className="text-xl font-medium text-dental-blue">Bleaching Dresden</h4>
                        </div>
                        <p className="text-base">
                          Professionelle Zahnaufhellung für ein strahlendes, weißes Lächeln. Wirksam gegen Verfärbungen durch Kaffee, Tee, Nikotin oder altersbedingte Eintrübungen.
                        </p>
                        <Button variant="link" asChild className="mt-2 p-0 text-dental-turquoise hover:text-dental-blue">
                          <Link to="#bleaching">Mehr zum Bleaching erfahren</Link>
                        </Button>
                      </div>
                      
                      <div className="bg-dental-beige p-5 rounded-lg">
                        <div className="flex items-center mb-3">
                          <Star className="h-6 w-6 text-dental-turquoise mr-2" />
                          <h4 className="text-xl font-medium text-dental-blue">Zahnformkorrekturen</h4>
                        </div>
                        <p className="text-base">
                          Sanfte Korrektur von abgebrochenen Ecken, unregelmäßigen Zahnkanten oder zu kleinen Zähnen mit hochästhetischen Kompositmaterialien.
                        </p>
                      </div>
                      
                      <div className="bg-dental-beige p-5 rounded-lg">
                        <div className="flex items-center mb-3">
                          <Star className="h-6 w-6 text-dental-turquoise mr-2" />
                          <h4 className="text-xl font-medium text-dental-blue">Smile Design</h4>
                        </div>
                        <p className="text-base">
                          Ganzheitliche Planung Ihres perfekten Lächelns mit digitaler Vorschau - für harmonische Proportionen und ein natürliches Erscheinungsbild.
                        </p>
                      </div>
                    </div>
                    
                    <div id="veneers" className="mt-12 pt-4">
                      <h3 className="text-2xl font-medium mb-4 text-dental-blue">Veneers: Perfektion für Ihre Frontzähne</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                        <div className="rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
                          <img 
                            src="https://images.unsplash.com/photo-1581701244939-bf25b2f7b691?q=80&w=1770&auto=format&fit=crop" 
                            alt="Keramik Veneers für perfekte Frontzähne - Zahnarztpraxis Worsch Dresden"
                            className="w-full h-auto"
                          />
                        </div>
                        <div className="order-1 md:order-2">
                          <p className="mb-4">
                            <strong>Veneers in Dresden</strong> sind die Königsdisziplin der ästhetischen Zahnheilkunde. Diese hauchdünnen Keramikschalen werden individuell für Sie angefertigt und dauerhaft auf die Zahnoberfläche geklebt.
                          </p>
                          <p>
                            Mit Veneers lassen sich Verfärbungen, kleine Zahnlücken, leichte Fehlstellungen und Formunregelmäßigkeiten korrigieren. Das Ergebnis: Ein makelloses, natürliches Lächeln.
                          </p>
                          <ul className="list-disc list-inside space-y-2 mt-4">
                            <li>Minimale Präparation der Zahnsubstanz</li>
                            <li>Hervorragende Langlebigkeit (10-15 Jahre)</li>
                            <li>Natürliches Aussehen und Lichtreflexion</li>
                            <li>Flecken- und verfärbungsresistent</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div id="bleaching" className="mt-12 pt-4">
                      <h3 className="text-2xl font-medium mb-4 text-dental-blue">Professionelles Bleaching: Strahlend weiße Zähne</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                        <div>
                          <p className="mb-4">
                            Mit unserem <strong>professionellen Bleaching in Dresden</strong> bieten wir Ihnen eine effektive und sichere Methode zur Zahnaufhellung. Unser schonender Aufhellungsprozess entfernt selbst hartnäckige Verfärbungen.
                          </p>
                          <p>
                            Je nach Ihren Wünschen bieten wir Ihnen zwei Varianten an:
                          </p>
                          <ul className="list-disc list-inside space-y-2 mt-4">
                            <li><strong>In-Office-Bleaching:</strong> Professionelle Zahnaufhellung in nur einer Sitzung in unserer Praxis</li>
                            <li><strong>Home-Bleaching:</strong> Individuell angefertigte Schienen für die Anwendung zuhause unter unserer Anleitung</li>
                          </ul>
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-lg">
                          <img 
                            src="https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=1770&auto=format&fit=crop" 
                            alt="Professionelles Bleaching für weiße Zähne - Zahnarztpraxis Worsch Dresden"
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                // Default service content display
                <>
                  <h2 className="mb-6 text-dental-blue">Über {service.title}</h2>
                  <div className="prose prose-lg max-w-none text-dental-gray">
                    <p>{service.fullDescription}</p>
                    
                    {service.procedure && (
                      <>
                        <h3 className="text-2xl font-medium mt-8 mb-4 text-dental-blue">Ablauf der Behandlung</h3>
                        <p>{service.procedure}</p>
                      </>
                    )}
                  </div>
                </>
              )}
            </div>
            
            {/* Benefits */}
            {service.benefits && service.benefits.length > 0 && (
              <div className="mb-12 animate-on-scroll">
                <h3 className="text-2xl font-medium mb-6 text-dental-blue">
                  {isImplantologiePage ? 'Die Vorteile von Implantaten bei Praxis Worsch' : 
                   isAestheticPage ? 'Vorteile ästhetischer Zahnbehandlungen bei Praxis Worsch' : 
                   'Ihre Vorteile'}
                </h3>
                <div className="bg-dental-beige rounded-lg p-6">
                  <ul className="space-y-4">
                    {isImplantologiePage ? (
                      // Custom benefits for Implantologie
                      <>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 mt-1 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dental-turquoise" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-dental-gray"><strong>Langlebig und stabil</strong> - Über 95% Erfolgsrate nach 10 Jahren bei guter Pflege</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 mt-1 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dental-turquoise" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-dental-gray"><strong>Natürlich schön</strong> - Kaum von echten Zähnen zu unterscheiden</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 mt-1 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dental-turquoise" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-dental-gray"><strong>Erhaltung der Kiefersubstanz</strong> - Verhindert Knochenschwund und hält Gesichtskonturen</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 mt-1 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dental-turquoise" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-dental-gray"><strong>Fester Biss</strong> - Sichere Verankerung und volle Kaufunktion</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 mt-1 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dental-turquoise" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-dental-gray"><strong>Kein Beschleifen gesunder Nachbarzähne</strong> - Schonung Ihrer natürlichen Zahnsubstanz</span>
                        </li>
                      </>
                    ) : isAestheticPage ? (
                      // Custom benefits for Ästhetische Zahnheilkunde
                      <>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 mt-1 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dental-turquoise" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-dental-gray"><strong>Natürliche Ästhetik</strong> - Unsichtbare Verbesserungen für ein authentisches, strahlendes Lächeln</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 mt-1 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dental-turquoise" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-dental-gray"><strong>Stärkeres Selbstbewusstsein</strong> - Lächeln Sie wieder unbeschwert in jeder Situation</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 mt-1 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dental-turquoise" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-dental-gray"><strong>Hochwertige Materialien</strong> - Langlebige Ergebnisse mit erstklassigen Keramik- und Kompositmaterialien</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 mt-1 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dental-turquoise" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-dental-gray"><strong>Minimal-invasive Verfahren</strong> - Maximale Schonung Ihrer natürlichen Zahnsubstanz</span>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 mt-1 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dental-turquoise" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-dental-gray"><strong>Individuelle Planung</strong> - Maßgeschneiderte Lösungen für Ihr persönliches Traum-Lächeln</span>
                        </li>
                      </>
                    ) : (
                      // Default benefits for other services
                      service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0 mt-1 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-dental-turquoise" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-dental-gray">{benefit}</span>
                        </li>
                      ))
                    )}
                  </ul>
                </div>
              </div>
            )}
            
            {/* Custom FAQ Section for Aesthetic Dentistry */}
            {isAestheticPage && (
              <div className="mb-12 animate-on-scroll">
                <h3 className="text-2xl font-medium mb-6 text-dental-blue">Häufig gestellte Fragen zur ästhetischen Zahnheilkunde</h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="faq-1">
                    <AccordionTrigger className="text-left text-lg font-medium">
                      Wie lange halten Veneers?
                    </AccordionTrigger>
                    <AccordionContent className="text-dental-gray">
                      Hochwertige Keramikveneers haben eine durchschnittliche Haltbarkeit von 10-15 Jahren, bei guter Pflege können sie sogar deutlich länger halten. Die exakte Lebensdauer hängt von verschiedenen Faktoren ab, wie Ihrer Mundhygiene, Ihren Essgewohnheiten und ob Sie beispielsweise unter Zähneknirschen leiden.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-2">
                    <AccordionTrigger className="text-left text-lg font-medium">
                      Ist das Bleaching schädlich für meine Zähne?
                    </AccordionTrigger>
                    <AccordionContent className="text-dental-gray">
                      Ein professionelles Bleaching unter zahnärztlicher Aufsicht ist für gesunde Zähne unbedenklich. Wir verwenden moderne Aufhellungssysteme mit pH-neutralen Gelen, die den Zahnschmelz nicht angreifen. Vor jeder Behandlung prüfen wir den Zustand Ihrer Zähne und empfehlen die für Sie geeignete Methode und Intensität.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-3">
                    <AccordionTrigger className="text-left text-lg font-medium">
                      Übernimmt die Krankenkasse die Kosten für ästhetische Behandlungen?
                    </AccordionTrigger>
                    <AccordionContent className="text-dental-gray">
                      Da es sich bei ästhetischen Behandlungen in der Regel um Wunschleistungen handelt, werden die Kosten von den gesetzlichen Krankenkassen nicht übernommen. Private Versicherungen erstatten je nach Tarif einen Teil oder die gesamten Kosten. Wir erstellen Ihnen vorab einen detaillierten Kostenplan und beraten Sie gerne zu Finanzierungsmöglichkeiten.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-4">
                    <AccordionTrigger className="text-left text-lg font-medium">
                      Wie kann ich vorab sehen, wie mein neues Lächeln aussehen wird?
                    </AccordionTrigger>
                    <AccordionContent className="text-dental-gray">
                      Mit unserer digitalen Smile-Design-Technologie können wir Ihnen bereits vor Behandlungsbeginn eine Vorschau Ihres neuen Lächelns zeigen. Bei Veneers erstellen wir zudem ein Wax-up (Wachsmodell) und ein Mock-up, das Sie probeweise im Mund tragen können, um das Ergebnis zu visualisieren und bei Bedarf anzupassen.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            )}

            {/* Custom FAQ Section for Implantologie */}
            {isImplantologiePage && (
              <div className="mb-12 animate-on-scroll">
                <h3 className="text-2xl font-medium mb-6 text-dental-blue">Häufig gestellte Fragen zu Zahnimplantaten</h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="faq-1">
                    <AccordionTrigger className="text-left text-lg font-medium">
                      Sind Zahnimplantate schmerzhaft?
                    </AccordionTrigger>
                    <AccordionContent className="text-dental-gray">
                      Die Implantation erfolgt unter lokaler Betäubung und ist daher schmerzfrei. Nach dem Eingriff kann es zu leichten Schwellungen und Beschwerden kommen, die aber gut mit Schmerzmitteln behandelbar sind. In der Regel berichten unsere Patienten in Dresden von deutlich weniger Beschwerden als erwartet.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-2">
                    <AccordionTrigger className="text-left text-lg font-medium">
                      Wie lange halten Zahnimplantate?
                    </AccordionTrigger>
                    <AccordionContent className="text-dental-gray">
                      Bei guter Mundhygiene und regelmäßigen Kontrollen können Zahnimplantate ein Leben lang halten. Die wissenschaftliche Literatur zeigt Erfolgsraten von über 95% nach 10 Jahren. Entscheidend für die Langlebigkeit sind die regelmäßige professionelle Reinigung und Ihre tägliche Mundhygiene.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-3">
                    <AccordionTrigger className="text-left text-lg font-medium">
                      Welche Kosten kommen auf mich zu?
                    </AccordionTrigger>
                    <AccordionContent className="text-dental-gray">
                      Die Kosten für Zahnimplantate in Dresden variieren je nach Anzahl der Implantate und Art des Zahnersatzes. Gesetzliche Krankenkassen übernehmen einen Festzuschuss für den Zahnersatz. In unserer Praxis erstellen wir Ihnen einen transparenten Kostenplan und beraten Sie auch zu Finanzierungsmöglichkeiten.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-4">
                    <AccordionTrigger className="text-left text-lg font-medium">
                      Wer ist für Zahnimplantate geeignet?
                    </AccordionTrigger>
                    <AccordionContent className="text-dental-gray">
                      Grundsätzlich kommen Implantate für die meisten erwachsenen Patienten in Frage. Wichtig ist ein ausreichendes Knochenangebot oder die Möglichkeit eines Knochenaufbaus. In einem persönlichen Beratungsgespräch prüfen wir Ihre individuelle Situation und besprechen die für Sie optimale Lösung.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            )}

            {/* Standard FAQs for other services */}
            {!isImplantologiePage && !isAestheticPage && service.faqs && service.faqs.length > 0 && (
              <div className="animate-on-scroll">
                <h3 className="text-2xl font-medium mb-6 text-dental-blue">Häufig gestellte Fragen</h3>
                <Accordion type="single" collapsible className="w-full">
                  {service.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`}>
                      <AccordionTrigger className="text-left text-lg font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-dental-gray">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )}

            {/* Custom CTA for Aesthetic Dentistry */}
            {isAestheticPage && (
              <div className="mt-12 text-center animate-on-scroll">
                <Button asChild size="lg" className="bg-dental-turquoise hover:bg-dental-blue text-white px-8 py-6 text-lg">
                  <Link to="/appointment">Termin für ästhetische Beratung vereinbaren <ChevronRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <p className="mt-4 text-dental-gray">Entdecken Sie Ihr schönstes Lächeln – Wir zeigen Ihnen die Möglichkeiten</p>
              </div>
            )}

            {/* Custom CTA for Implantologie */}
            {isImplantologiePage && (
              <div className="mt-12 text-center animate-on-scroll">
                <Button asChild size="lg" className="bg-dental-turquoise hover:bg-dental-blue text-white px-8 py-6 text-lg">
                  <Link to="/appointment">Unverbindlichen Beratungstermin für Zahnimplantate vereinbaren <ChevronRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <p className="mt-4 text-dental-gray">Wir nehmen uns Zeit für Ihre individuellen Fragen zu Zahnimplantaten</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-dental-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 animate-on-scroll">
            <h2 className="mb-4 text-dental-blue">Weitere Leistungen</h2>
            <p className="text-dental-gray max-w-2xl mx-auto">
              Entdecken Sie unser gesamtes Leistungsspektrum für Ihre Zahngesundheit.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.filter(s => s.id !== service.id).slice(0, 3).map((relatedService, index) => (
              <div key={relatedService.id} className="animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard
                  id={relatedService.id}
                  title={relatedService.title}
                  description={relatedService.shortDescription}
                  imageUrl={relatedService.imageUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-dental-turquoise to-dental-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-on-scroll">
            <h2 className="mb-4">Vereinbaren Sie einen Beratungstermin</h2>
            <p className="text-lg mb-8">
              Sie haben Interesse an dieser Behandlung oder benötigen weitere Informationen? 
              Wir beraten Sie gerne ausführlich in unserer Praxis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-dental-blue hover:bg-dental-beige">
                <Link to="/appointment">Termin vereinbaren</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white hover:bg-white hover:text-dental-blue">
                <Link to="/contact">Kontakt aufnehmen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
