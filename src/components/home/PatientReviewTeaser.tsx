
import React from 'react';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from '@/data/testimonials';
import Autoplay from "embla-carousel-autoplay";

const PatientReviewTeaser = () => {
  // Der von Ihnen bereitgestellte, funktionierende Google Search Link für Rezensionen
  const googleReviewsLink = "https://www.google.de/search?sa=X&sca_esv=0f5634cd6d611d2d&hl=de&tbm=lcl&sxsrf=AHTn8zoRQlwKnXXUMar1olm9-J6sAPHQCA:1747668854815&q=Zahnarztpraxis+Dipl.med+dent.+Ute+Worsch+%26+Peik+Worsch+Rezensionen&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDO0sDQ1MTMzszQ3szC2NDA1M9zAyPiK0SkqMSMvsaiqpKAosSKzWMElsyBHLzc1RSElNa9ETyG0JFUhPL-oODlDQU0hIDUzG8YLSq1KzSvOzM9LzVvESgVDAKEE2vOlAAAA&rldimm=16189546669768390561&ved=2ahUKEwipzprq7a-NAxUh9rsIHV1IOnoQ9fQKegQIRBAF&biw=1536&bih=742&dpr=1.25#lkt=LocalPoiReviews";

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section className="py-8 bg-dental-beige">
      <div className="container mx-auto px-4">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <div className="bg-white rounded-lg p-5 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 animate-on-scroll">
                  <div className="flex items-start">
                    <div className="flex flex-col items-center mr-4 flex-shrink-0">
                      <Star className="h-12 w-12 text-yellow-400 fill-yellow-400 mb-2" aria-hidden="true" />
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-dental-blue text-lg mb-1">Patientenstimme – Zahnarztpraxis Worsch Dresden-Laubegast</p>
                      <blockquote className="text-dental-gray italic mb-2">
                        "{testimonial.quote}"
                      </blockquote>
                      <p className="text-dental-blue font-semibold text-sm">
                        - {testimonial.author}
                      </p>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="border-dental-blue text-dental-blue hover:bg-dental-blue hover:text-white flex-shrink-0 px-6 py-3 text-sm font-medium">
                    <a href={googleReviewsLink} target="_blank" rel="noopener noreferrer">
                      Google Bewertungen
                    </a>
                  </Button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default PatientReviewTeaser;
