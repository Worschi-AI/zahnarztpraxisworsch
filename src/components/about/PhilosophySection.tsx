
import React from 'react';

const PhilosophySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Linke Spalte: Text-Content */}
            <div className="content-column animate-on-scroll">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dental-blue mb-6">
                Unsere Philosophie: Ihr Lächeln ist unsere Leidenschaft
              </h2>
              
              <div className="space-y-6 text-lg text-dental-gray leading-relaxed">
                <p>
                  In der <strong className="text-dental-blue">Zahnarztpraxis Worsch in Dresden-Laubegast</strong> verstehen wir unsere Arbeit als eine harmonische Verbindung aus höchster Präzision, modernster Technologie und einem tiefen, menschlichen Verständnis für Ihre individuellen Wünsche und Bedürfnisse.
                </p>
                
                <p>
                  Ganz besonders wichtig ist uns dabei die <strong className="text-dental-turquoise">Ästhetik Ihres Lächelns</strong> – denn wir wissen aus Erfahrung, wie sehr ein selbstbewusstes Lächeln Ihre Lebensqualität positiv beeinflussen kann.
                </p>
              </div>
            </div>

            {/* Rechte Spalte: Bild */}
            <div className="image-column animate-on-scroll">
              <div className="mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop" 
                  alt="Dr. Worsch - Zahnarzt Dresden Laubegast" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
