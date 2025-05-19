
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Stethoscope } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  useSolidBackground?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title, 
  subtitle = "Ihre Experten für gesunde und schöne Zähne", 
  backgroundImage = "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1740&auto=format&fit=crop",
  useSolidBackground = false
}) => {
  return (
    <div className="relative h-[90vh] min-h-[600px] flex items-center justify-center">
      {/* Background Image with Overlay or Solid Background */}
      {!useSolidBackground ? (
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
            filter: "brightness(0.8)"
          }}
        />
      ) : (
        <div className="absolute inset-0 z-0 bg-dental-blue/90" />
      )}
      
      {/* Only gradient overlay, no additional images */}
      <div className="absolute inset-0 bg-gradient-to-r from-dental-blue/80 to-transparent z-10" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-2xl text-white animate-fade-in">
          <h1 className="mb-4 flex items-center">
            <Stethoscope className="mr-3 hidden sm:inline-block" size={36} strokeWidth={1.5} />
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-dental-turquoise hover:bg-dental-blue hover:scale-105 transform transition-all duration-300">
              <Link to="/appointment">Termin online buchen</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-dental-blue transition-all">
              <Link to="/services">Unsere Leistungen</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
