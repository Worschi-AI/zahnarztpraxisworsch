
import React from 'react';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

const PatientReviewTeaser = () => {
  // Der von Ihnen bereitgestellte, funktionierende Google Search Link für Rezensionen
  const googleReviewsLink = "https://www.google.de/search?sa=X&sca_esv=0f5634cd6d611d2d&hl=de&tbm=lcl&sxsrf=AHTn8zoRQlwKnXXUMar1olm9-J6sAPHQCA:1747668854815&q=Zahnarztpraxis+Dipl.med+dent.+Ute+Worsch+%26+Peik+Worsch+Rezensionen&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDO0sDQ1MTMzszQ3szC2NDA1M9zAyPiK0SkqMSMvsaiqpKAosSKzWMElsyBHLzc1RSElNa9ETyG0JFUhPL-oODlDQU0hIDUzG8YLSq1KzSvOzM9LzVvESgVDAKEE2vOlAAAA&rldimm=16189546669768390561&ved=2ahUKEwipzprq7a-NAxUh9rsIHV1IOnoQ9fQKegQIRBAF&biw=1536&bih=742&dpr=1.25#lkt=LocalPoiReviews";

  return (
    <section className="py-8 bg-dental-beige">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg p-5 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 animate-on-scroll">
          <div className="flex items-center">
            <Star className="h-12 w-12 text-yellow-400 fill-yellow-400 mr-3 flex-shrink-0" aria-hidden="true" />
            <div>
              <p className="font-bold text-dental-blue text-lg mb-1">Über 95% zufriedene Patienten – Ihre Zahnarztpraxis Worsch in Dresden-Laubegast</p>
              <p className="text-dental-gray">Das Vertrauen, das unsere Patienten uns schenken, ist unser größter Ansporn. Erfahren Sie selbst, warum so viele – von jungen Familien bis zu anspruchsvollen Erwachsenen aus Dresden und Umgebung – auf die Expertise und Fürsorge der Zahnarztpraxis Worsch vertrauen.</p>
            </div>
          </div>
          <Button asChild variant="outline" className="border-dental-blue text-dental-blue hover:bg-dental-blue hover:text-white flex-shrink-0 px-6 py-3 text-sm font-medium">
            <a href={googleReviewsLink} target="_blank" rel="noopener noreferrer">
              Google Bewertungen
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PatientReviewTeaser;
