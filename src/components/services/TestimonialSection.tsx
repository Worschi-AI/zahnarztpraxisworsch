import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

const TestimonialSection = () => {
  // Structured data for the specific testimonial
  const testimonialStructuredData = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Dentist",
      "name": "Zahnarztpraxis Worsch Dresden",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Österreicher Str. 38",
        "addressLocality": "Dresden",
        "postalCode": "01279",
        "addressCountry": "DE"
      }
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Person",
      "name": "Maria S."
    },
    "reviewBody": "Ich bin begeistert von meinen neuen Veneers! Das Ergebnis übertrifft meine Erwartungen und das Team hat mich perfekt beraten. Der Preis war es absolut wert - mein Lächeln sieht nun natürlich schön aus.",
    "datePublished": "2024-01-15"
  };
  return <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(testimonialStructuredData)}
        </script>
      </Helmet>
      
      <section className="py-16 bg-dental-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-on-scroll">
            <h2 className="text-2xl font-medium mb-8 text-center text-dental-blue">Patientenstimmen zu unseren Zahnbehandlungen in Dresden</h2>
            
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-dental-turquoise flex items-center justify-center text-white font-bold">AF</div>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  </div>
                  <p className="italic text-dental-gray mb-2">&quot;Da mein eigentlicher Zahnarzt im Urlaub war, kam ich mit einem kleinen Notfall in die Praxis zu Dr. Worsch. Ein sehr netter, kompetenter Zahnarzt, man fühlt sich sehr gut aufgehoben und absolut fachmännisch betreut. Vielen Dank an dieser Stelle noch einmal.&quot;</p>
                  <p className="text-sm text-dental-gray">- Astrid F.</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Button asChild variant="outline" className="border-dental-blue text-dental-blue hover:bg-dental-blue hover:text-white">
                <a href="https://www.google.com/maps/place/Zahnarztpraxis+Dipl.med+dent.+Ute+Worsch+%26+Peik+Worsch/@51.0258232,13.8338391,17z/data=!3m2!4b1!5s0x4709c7d912ce70c1:0xa0772b1bd9b757d8!4m6!3m5!1s0x4709c7d96d21fce9:0xe0acd2eb962737a1!8m2!3d51.0258232!4d13.836414!16s%2Fg%2F1tgcws99?entry=tts&g_ep=EgoyMDI1MDUxMy4xIPu8ASoASAFQAw%3D%3D&skid=46499da1-bc0b-43d4-92ac-f086733c2af9" target="_blank" rel="noopener noreferrer">
                  Weitere Erfahrungsberichte
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default TestimonialSection;
