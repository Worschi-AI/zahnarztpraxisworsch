
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
  buttonText = phoneNumber,
  variant = 'default',
  size = 'default',
  ...props
}: PhoneButtonProps) => {
  // Format the phone number for the href attribute
  const formattedPhoneNumber = phoneNumber.replace(/\s/g, '');
  
  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={cn("text-white", className)}
      {...props}
    >
      <a href={`tel:+49${formattedPhoneNumber}`} className="flex items-center justify-center gap-2">
        {showIcon && iconPosition === 'left' && (
          <Phone className="h-4 w-4" />
        )}
        <span>{buttonText}</span>
        {showIcon && iconPosition === 'right' && (
          <Phone className="h-4 w-4" />
        )}
      </a>
    </Button>
  );
};

export default PhoneButton;
