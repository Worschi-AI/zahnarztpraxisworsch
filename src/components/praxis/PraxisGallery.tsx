
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const praxisImages = [
  {
    src: "https://images.unsplash.com/photo-1629909615957-f11847120b5c?q=80&w=1932&auto=format&fit=crop",
    alt: "Empfangsbereich der Zahnarztpraxis Worsch Dresden",
    title: "Empfangsbereich",
    description: "Herzlich willkommen! Unser freundliches Team empfängt Sie in einer angenehmen und ruhigen Atmosphäre, damit Sie sich sofort gut aufgehoben fühlen."
  },
  {
    src: "https://images.unsplash.com/photo-1631815588090-d4bfec5b9589?q=80&w=1972&auto=format&fit=crop",
    alt: "Wartezimmer der Zahnarztpraxis Worsch Dresden mit komfortabler Einrichtung",
    title: "Wartezimmer",
    description: "Entspannen Sie in unserem komfortablen Wartebereich."
  },
  {
    src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1968&auto=format&fit=crop",
    alt: "Moderner Behandlungsraum mit neuester Technik der Zahnarztpraxis Worsch Dresden",
    title: "Behandlungsraum",
    description: "Modernste Technik für Ihre optimale Versorgung."
  },
  {
    src: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=1740&auto=format&fit=crop", 
    alt: "Digitale Ausstattung und Computer in der Zahnarztpraxis Worsch Dresden",
    title: "Digitale Ausstattung",
    description: "Mit modernster Technik für präzise Diagnostik und Behandlung."
  }
];

const PraxisGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === praxisImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? praxisImages.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="animate-on-scroll">
      <div className="relative mx-auto max-w-4xl rounded-lg overflow-hidden shadow-lg">
        {/* Main image */}
        <div className="relative h-[500px] bg-dental-blue/10">
          <img 
            src={praxisImages[currentIndex].src}
            alt={praxisImages[currentIndex].alt}
            className="w-full h-full object-cover transition-all duration-300"
          />
          
          {/* Navigation arrows */}
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <Button 
              onClick={prevSlide}
              variant="outline" 
              size="icon" 
              className="bg-white/80 hover:bg-white border-none rounded-full"
              aria-label="Vorheriges Bild anzeigen"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button 
              onClick={nextSlide}
              variant="outline" 
              size="icon" 
              className="bg-white/80 hover:bg-white border-none rounded-full"
              aria-label="Nächstes Bild anzeigen"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
          
          {/* Caption */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
            <h3 className="text-xl font-semibold">{praxisImages[currentIndex].title}</h3>
            <p>{praxisImages[currentIndex].description}</p>
          </div>
        </div>
        
        {/* Thumbnails */}
        <div className="flex justify-center gap-2 mt-4 px-4 py-2">
          {praxisImages.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-16 h-16 overflow-hidden rounded-md transition-all ${
                index === currentIndex ? 'ring-2 ring-dental-turquoise' : 'opacity-70'
              }`}
              aria-label={`Bild ${index + 1} von ${praxisImages.length} anzeigen: ${image.title}`}
            >
              <img 
                src={image.src} 
                alt={`Miniaturansicht: ${image.title}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PraxisGallery;
