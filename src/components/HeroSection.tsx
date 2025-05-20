
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CalendarClock } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  showButtons?: boolean;
  leftButtonText?: string;
  leftButtonLink?: string;
  leftButtonIcon?: React.ReactNode;
  rightButtonText?: string;
  rightButtonLink?: string;
  rightButtonIcon?: React.ReactNode;
}

const HeroSection = ({
  title,
  subtitle,
  backgroundImage,
  showButtons = true,
  leftButtonText = "Online-Termin buchen",
  leftButtonLink = "/appointment",
  leftButtonIcon = <CalendarClock className="mr-2 h-5 w-5" />,
  rightButtonText = "Unsere Leistungen",
  rightButtonLink = "/services",
  rightButtonIcon = null
}: HeroSectionProps) => {
  return (
    <div
      className="pt-32 pb-20 md:pt-40 md:pb-28 bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${backgroundImage}')`
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white animate-fade-in">
          <h1 className="mb-4">{title}</h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">{subtitle}</p>
          
          {showButtons && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-dental-turquoise hover:bg-dental-blue">
                <Link to={leftButtonLink} className="flex items-center">
                  {leftButtonIcon}
                  <span>{leftButtonText}</span>
                </Link>
              </Button>
              
              {rightButtonLink.startsWith('tel:') ? (
                <Button asChild size="lg" variant="outline" className="border-white hover:bg-white hover:text-dental-blue">
                  <a href={rightButtonLink} className="flex items-center">
                    {rightButtonIcon}
                    <span>{rightButtonText}</span>
                  </a>
                </Button>
              ) : (
                <Button asChild size="lg" variant="outline" className="border-white hover:bg-white hover:text-dental-blue">
                  <Link to={rightButtonLink} className="flex items-center">
                    {rightButtonIcon}
                    <span>{rightButtonText}</span>
                  </Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
