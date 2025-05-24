
import React from 'react';

interface HeadingValidatorProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

/**
 * Component to ensure proper heading hierarchy throughout the application
 * This helps maintain semantic HTML structure and accessibility
 */
const HeadingValidator: React.FC<HeadingValidatorProps> = ({ 
  level, 
  children, 
  className = "" 
}) => {
  const baseClasses = "font-heading text-dental-blue leading-tight";
  
  const headingClasses = {
    1: `text-3xl md:text-4xl lg:text-5xl font-bold ${baseClasses}`,
    2: `text-2xl md:text-3xl lg:text-4xl font-semibold ${baseClasses}`,
    3: `text-xl md:text-2xl lg:text-3xl font-medium ${baseClasses}`,
    4: `text-lg md:text-xl font-medium ${baseClasses}`,
    5: `text-base md:text-lg font-medium ${baseClasses}`,
    6: `text-sm md:text-base font-medium ${baseClasses}`
  };

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  return (
    <Tag className={`${headingClasses[level]} ${className}`}>
      {children}
    </Tag>
  );
};

export default HeadingValidator;
