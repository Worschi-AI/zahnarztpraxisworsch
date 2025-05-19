import React from 'react';
import { Button } from '@/components/ui/button';
// Link von react-router-dom wird hier nicht mehr benötigt, da es ein externer Link ist.
// import { Link } from 'react-router-dom'; 
import { Star } from 'lucide-react';

const PatientReviewTeaser = () => {
  // Der von Ihnen bereitgestellte, funktionierende Google Search Link für Rezensionen
  const googleReviewsLink = "https://www.google.de/search?sa=X&sca_esv=0f5634cd6d611d2d&hl=de&tbm=lcl&sxsrf=AHTn8zpKmIM_p5H2P7IjMfI_FExXbifTgw:1747668575187&q=Zahnarztpraxis+Dipl.med+dent.+Ute+Worsch+%26+Peik+Worsch+Rezensionen&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDO0sDQ1MTMzszQ3szC2NDA1M9zAyPiK0SkqMSMvsaiqpKAosSKzWMElsyBHLzc1RSElNa9ETyG0JFUhPL-oODlDQU0hIDUzG8YLSq1KzSvOzM9LzVvESgVDAKEE2vOlAAAA&rldimm=16189546669768390561&ved=2ahUKEwjQxO_k7K-NAxVFh_0HHcYpLDIQ9fQKegQIRBAF&biw=1536&bih=742&dpr=1.25";

  return (
    <section className="py-8 bg-dental-beige">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg p-5 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 animate-on-scroll">
          <div className="flex items-center">
            <Star className="h-8 w-8 text-yellow-400 fill-yellow-400 mr-3" aria-hidden="true" />
            <div>
              <p className="font-bold text-dental-blue text-lg mb-1">Über 95% zufriedene Patienten</p>
              <p className="text-dental-gray">Unsere Patienten in Dresden vertrauen uns seit Jahren.</p>
            </div>
          </div>
          <Button asChild variant="outline" className="border-dental-blue text-dental-blue hover:bg-dental-blue hover:text-white whitespace-nowrap">
            <a href={googleReviewsLink} target="_blank" rel="noopener noreferrer">
              Erfahrungsberichte lesen
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PatientReviewTeaser;
