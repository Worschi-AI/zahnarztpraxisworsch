
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
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
    <div className="hero-container">
      {/* Background Image with Overlay or Solid Background */}
      {!useSolidBackground ? (
        <picture>
          <source 
            srcSet={`${backgroundImage}&fm=webp&w=1920 1920w, ${backgroundImage}&fm=webp&w=1200 1200w, ${backgroundImage}&fm=webp&w=768 768w`}
            sizes="100vw"
            type="image/webp"
          />
          <img
            src={backgroundImage}
            srcSet={`${backgroundImage}&w=1920 1920w, ${backgroundImage}&w=1200 1200w, ${backgroundImage}&w=768 768w`}
            sizes="100vw"
            alt="Zahnarztpraxis Worsch Dresden - moderne Behandlungsräume"
            className="hero-bg"
            width="1920"
            height="1080"
            loading="eager"
            fetchPriority="high"
            style={{ 
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: "brightness(0.8)"
            }}
          />
        </picture>
      ) : (
        <div className="absolute inset-0 z-0 bg-dental-blue/90" aria-hidden="true" />
      )}
      
      {/* Only gradient overlay, no additional images */}
      <div className="hero-overlay" aria-hidden="true" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="hero-content animate-fade-in">
          <h1 className="mb-4">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-6">{subtitle}</p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="btn btn-primary">
              <Link to="/appointment">{ctaText}</Link>
            </Button>
            <PhoneButton 
              phoneNumber="0351 2522709" 
              variant="outline"
              size="lg"
              className="bg-white text-dental-blue hover:bg-dental-beige transform transition-all duration-300"
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
