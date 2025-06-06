
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { PhoneCall, Calendar } from "lucide-react";
import PhoneButton from '@/components/PhoneButton';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  useSolidBackground?: boolean;
  ctaText?: string;
  secondaryCtaText?: string;
  introText?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title, 
  subtitle = "Entdecken Sie unsere patientenorientierte Philosophie, erleben Sie innovative Technologien und fühlen Sie sich in unserem angenehmen Ambiente rundum wohl.", 
  backgroundImage = "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1740&auto=format&fit=crop",
  useSolidBackground = false,
  ctaText = "Jetzt Wunschtermin finden",
  secondaryCtaText = "Termin telefonisch buchen",
  introText
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
          aria-hidden="true"
          role="img"
          aria-label="Zahnarztpraxis Worsch Dresden - moderne Behandlungsräume"
        />
      ) : (
        <div className="absolute inset-0 z-0 bg-dental-blue/90" aria-hidden="true" />
      )}
      
      {/* Only gradient overlay, no additional images */}
      <div className="absolute inset-0 bg-gradient-to-r from-dental-blue/80 to-transparent z-10" aria-hidden="true" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-2xl text-white animate-fade-in">
          <h1 className="mb-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            {title}
          </h1>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl mb-6">{subtitle}</p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-dental-turquoise hover:bg-dental-blue hover:scale-105 transform transition-all duration-300">
              <Link to="/appointment">
                <Calendar className="w-5 h-5 mr-2 icon-pulse" aria-hidden="true" />
                {ctaText}
              </Link>
            </Button>
            <PhoneButton 
              phoneNumber="0351 2522709" 
              size="lg"
              className="bg-white/90 text-dental-gray hover:bg-white border-white/50 hover:border-white opacity-70 hover:opacity-80"
              buttonText={secondaryCtaText}
              iconPosition="left"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
