
import React from 'react';
import { Button } from '@/components/ui/button';
import { Star, Sparkles } from 'lucide-react';

const PatientReviewTeaser = () => {
  const googleReviewsLink = "https://www.google.de/search?sa=X&sca_esv=0f5634cd6d611d2d&hl=de&tbm=lcl&sxsrf=AHTn8zoRQlwKnXXUMar1olm9-J6sAPHQCA:1747668854815&q=Zahnarztpraxis+Dipl.med+dent.+Ute+Worsch+%26+Peik+Worsch+Rezensionen&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDO0sDQ1MTMzszQ3szC2NDA1M9zAyPiK0SkqMSMvsaiqpKAosSKzWMElsyBHLzc1RSElNa9ETyG0JFUhPL-oODlDQU0hIDUzG8YLSq1KzSvOzM9LzVvESgVDAKEE2vOlAAAA&rldimm=16189546669768390561&ved=2ahUKEwipzprq7a-NAxUh9rsIHV1IOnoQ9fQKegQIRBAF&biw=1536&bih=742&dpr=1.25#lkt=LocalPoiReviews";

  return (
    <section className="py-8 bg-gradient-to-br from-dental-beige via-white to-dental-beige relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-16 h-16 bg-yellow-400/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-0 right-1/4 w-20 h-20 bg-dental-turquoise/20 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-br from-white via-white to-gray-50/50 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 animate-on-scroll border border-gray-100/50 relative overflow-hidden">
          
          {/* Subtle animated background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-4 left-4">
              <Sparkles className="w-6 h-6 text-dental-turquoise animate-pulse" />
            </div>
            <div className="absolute top-12 right-8">
              <Sparkles className="w-4 h-4 text-dental-blue animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            <div className="absolute bottom-8 left-12">
              <Sparkles className="w-5 h-5 text-dental-turquoise animate-pulse" style={{ animationDelay: '2s' }} />
            </div>
          </div>
          
          {/* Content */}
          <div className="flex flex-col items-center text-center mb-6 relative z-10">
            <div className="mb-6 flex gap-1 transform hover:scale-110 transition-transform duration-300">
              {[...Array(5)].map((_, index) => (
                <Star 
                  key={index}
                  className="h-8 w-8 text-yellow-400 fill-yellow-400 drop-shadow-md hover:drop-shadow-lg transition-all duration-300" 
                  style={{ 
                    color: '#FFD700', 
                    fill: '#FFD700',
                    animationDelay: `${index * 0.1}s`
                  }}
                  aria-hidden="true" 
                />
              ))}
            </div>
            
            <div className="relative">
              <h2 className="font-bold text-dental-blue text-xl lg:text-2xl mb-3 max-w-4xl bg-gradient-to-r from-dental-blue via-dental-turquoise to-dental-blue bg-clip-text text-transparent">
                Über 95% zufriedene Patienten – Ihre Zahnarztpraxis Worsch in Dresden-Laubegast
              </h2>
            </div>
            
            <p className="text-dental-gray text-base lg:text-lg leading-relaxed max-w-4xl mb-8">
              Das Vertrauen, das unsere Patienten uns schenken, ist unser größter Ansporn. Erfahren Sie selbst, warum so viele – von jungen Familien bis zu anspruchsvollen Erwachsenen aus Dresden und Umgebung – auf die Expertise und Fürsorge der Zahnarztpraxis Worsch vertrauen.
            </p>
            
            {/* Enhanced Google Bewertungen Button */}
            <Button 
              asChild 
              variant="outline" 
              className="border-2 border-dental-blue text-dental-blue hover:bg-gradient-to-r hover:from-dental-blue hover:to-dental-turquoise hover:text-white transition-all duration-500 px-8 py-4 text-sm font-medium rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 group relative overflow-hidden"
            >
              <a 
                href={googleReviewsLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 relative z-10"
              >
                {/* Enhanced Google G Logo SVG */}
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  className="flex-shrink-0 group-hover:rotate-12 transition-transform duration-300"
                >
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="font-semibold">Google Bewertungen</span>
                
                {/* Animated background shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientReviewTeaser;
