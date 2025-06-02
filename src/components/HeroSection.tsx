
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { PhoneCall, Sparkles, Heart, Shield } from "lucide-react";
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
      {/* Background Image with enhanced overlay */}
      {!useSolidBackground ? (
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
            filter: "brightness(0.75)"
          }}
          aria-hidden="true"
          role="img"
          aria-label="Zahnarztpraxis Worsch Dresden - moderne Behandlungsräume"
        />
      ) : (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-dental-blue via-dental-blue to-dental-turquoise" aria-hidden="true" />
      )}
      
      {/* Enhanced gradient overlay with animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-dental-blue/85 via-dental-blue/70 to-dental-turquoise/60 z-10" aria-hidden="true" />
      
      {/* Floating decorative elements */}
      <div className="absolute inset-0 z-15 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 bg-dental-turquoise/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-dental-turquoise/15 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Animated icons in background */}
      <div className="absolute inset-0 z-15 overflow-hidden pointer-events-none">
        <Sparkles className="absolute top-24 left-1/4 w-6 h-6 text-dental-turquoise/30 animate-pulse" />
        <Heart className="absolute bottom-40 right-1/3 w-5 h-5 text-white/20 animate-pulse delay-700" />
        <Shield className="absolute top-1/3 right-20 w-7 h-7 text-dental-turquoise/25 animate-pulse delay-300" />
      </div>

      {/* Content with enhanced animations */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-2xl text-white">
          {/* Title with gradient text effect */}
          <h1 className="mb-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-white via-white to-dental-turquoise bg-clip-text text-transparent animate-fade-in">
            {title}
          </h1>
          
          {/* Subtitle with enhanced styling */}
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl mb-6 text-white/95 leading-relaxed animate-fade-in delay-200">
            {subtitle}
          </p>
          
          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-400">
            <Button asChild size="lg" className="bg-gradient-to-r from-dental-turquoise to-dental-blue hover:from-dental-blue hover:to-dental-turquoise hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl btn-hover-effect">
              <Link to="/appointment" className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 animate-pulse" />
                {ctaText}
              </Link>
            </Button>
            <PhoneButton 
              phoneNumber="0351 2522709" 
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-dental-blue transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              buttonText={secondaryCtaText}
              iconPosition="left"
            />
          </div>

          {/* Trust indicators */}
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-in delay-600">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full">
              <Shield className="w-4 h-4 text-dental-turquoise" />
              <span className="text-sm text-white/90">Modernste Technik</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full">
              <Heart className="w-4 h-4 text-dental-turquoise" />
              <span className="text-sm text-white/90">Persönliche Betreuung</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
