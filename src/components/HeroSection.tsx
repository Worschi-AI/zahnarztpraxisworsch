
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { PhoneCall, Sparkles } from "lucide-react";
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
    <div className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Floating Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-dental-turquoise/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-dental-blue/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-dental-turquoise/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Background Image with Enhanced Overlay */}
      {!useSolidBackground ? (
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transform scale-105 transition-transform duration-[20s] ease-out hover:scale-110"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
            filter: "brightness(0.7) contrast(1.1)"
          }}
          aria-hidden="true"
          role="img"
          aria-label="Zahnarztpraxis Worsch Dresden - moderne Behandlungsräume"
        />
      ) : (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-dental-blue via-dental-blue/90 to-dental-turquoise" aria-hidden="true" />
      )}
      
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-dental-blue/85 via-dental-blue/60 to-transparent z-10" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-dental-blue/30 via-transparent to-transparent z-10" aria-hidden="true" />

      {/* Content with Enhanced Animations */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-2xl text-white animate-fade-in">
          {/* Animated Title with Gradient Text */}
          <div className="relative mb-6">
            <h1 className="mb-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold relative z-10 animate-on-scroll">
              {title}
              <div className="absolute -top-2 -right-2 animate-pulse">
                <Sparkles className="w-6 h-6 text-dental-turquoise opacity-70" />
              </div>
            </h1>
          </div>
          
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl mb-8 animate-on-scroll opacity-90 leading-relaxed" style={{ animationDelay: '0.2s' }}>
            {subtitle}
          </p>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll" style={{ animationDelay: '0.4s' }}>
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-dental-turquoise to-dental-blue hover:from-dental-blue hover:to-dental-turquoise transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-dental-turquoise/25 relative overflow-hidden group"
            >
              <Link to="/appointment" className="relative z-10">
                <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full transition-transform duration-700 group-hover:translate-x-full"></span>
                {ctaText}
              </Link>
            </Button>
            <PhoneButton 
              phoneNumber="0351 2522709" 
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-dental-blue transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
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
