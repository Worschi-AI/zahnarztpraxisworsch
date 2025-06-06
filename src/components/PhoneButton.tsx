
import React from 'react';
import { Phone } from 'lucide-react';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PhoneButtonProps extends Omit<ButtonProps, 'asChild'> {
  phoneNumber?: string;
  showIcon?: boolean;
  iconPosition?: 'left' | 'right';
  className?: string;
  buttonText?: string;
}

const PhoneButton = ({
  phoneNumber = '0351 2522709',
  showIcon = true,
  iconPosition = 'left',
  className,
  buttonText,
  variant = 'default',
  size = 'default',
  ...props
}: PhoneButtonProps) => {
  // Format the phone number for the href attribute
  const formattedPhoneNumber = phoneNumber.replace(/\s/g, '');
  
  // Use the phoneNumber as the button text if buttonText is not provided
  const displayText = buttonText || phoneNumber;
  
  return (
    <Button
      asChild
      variant="ghost"
      size={size}
      className={cn(
        "bg-white text-dental-blue border border-dental-blue/20",
        "hover:bg-dental-turquoise hover:text-white hover:border-dental-turquoise",
        "transform transition-all duration-300 hover:scale-105",
        "shadow-md hover:shadow-lg",
        className
      )}
      {...props}
    >
      <a href={`tel:+49${formattedPhoneNumber}`} className="flex items-center justify-center gap-2">
        {showIcon && iconPosition === 'left' && (
          <Phone className="h-4 w-4 icon-pulse" />
        )}
        <span>{displayText}</span>
        {showIcon && iconPosition === 'right' && (
          <Phone className="h-4 w-4 icon-pulse" />
        )}
      </a>
    </Button>
  );
};

export default PhoneButton;
