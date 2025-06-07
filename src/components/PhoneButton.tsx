
import React from 'react';
import { Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PhoneButtonProps {
  phoneNumber?: string;
  showIcon?: boolean;
  iconPosition?: 'left' | 'right';
  className?: string;
  buttonText?: string;
  size?: 'default' | 'sm' | 'lg' | 'icon';
  onClick?: () => void;
}

const PhoneButton = ({
  phoneNumber = '0351 2522709',
  showIcon = true,
  iconPosition = 'left',
  className,
  buttonText,
  size = 'default',
  onClick,
  ...props
}: PhoneButtonProps) => {
  // Format the phone number for the href attribute
  const formattedPhoneNumber = phoneNumber.replace(/\s/g, '');
  
  // Use the phoneNumber as the button text if buttonText is not provided
  const displayText = buttonText || phoneNumber;
  
  // Size classes
  const sizeClasses = {
    default: "h-10 px-4 py-2",
    sm: "h-9 px-3",
    lg: "h-11 px-8",
    icon: "h-10 w-10"
  };
  
  return (
    <a 
      href={`tel:+49${formattedPhoneNumber}`} 
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium",
        "ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        sizeClasses[size],
        "bg-white text-dental-turquoise border border-dental-turquoise/20",
        "hover:bg-white hover:text-dental-turquoise hover:border-dental-turquoise/20 hover:scale-105",
        "active:bg-white active:text-dental-turquoise active:border-dental-turquoise/20 active:scale-105",
        "focus:bg-white focus:text-dental-turquoise focus:border-dental-turquoise/20",
        "shadow-md hover:shadow-lg",
        "cursor-pointer",
        "no-underline",
        className
      )}
      onClick={onClick}
      {...props}
    >
      {showIcon && iconPosition === 'left' && (
        <Phone className="h-4 w-4 icon-pulse" />
      )}
      <span>{displayText}</span>
      {showIcon && iconPosition === 'right' && (
        <Phone className="h-4 w-4 icon-pulse" />
      )}
    </a>
  );
};

export default PhoneButton;
