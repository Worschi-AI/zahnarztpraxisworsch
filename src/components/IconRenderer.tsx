
import React from 'react';
import { 
  Stethoscope, 
  Shield, 
  Sparkles, 
  Heart, 
  Users, 
  Activity,
  Zap,
  CheckCircle,
  Settings,
  Smile,
  Star,
  EyeOff
} from 'lucide-react';

export type IconName = 
  | 'stethoscope'
  | 'shield' 
  | 'sparkles'
  | 'heart'
  | 'users'
  | 'activity'
  | 'zap'
  | 'check-circle'
  | 'settings'
  | 'smile'
  | 'star'
  | 'eye-off';

interface IconRendererProps {
  iconName?: IconName;
  className?: string;
  size?: number;
}

const iconMap = {
  'stethoscope': Stethoscope,
  'shield': Shield,
  'sparkles': Sparkles,
  'heart': Heart,
  'users': Users,
  'activity': Activity,
  'zap': Zap,
  'check-circle': CheckCircle,
  'settings': Settings,
  'smile': Smile,
  'star': Star,
  'eye-off': EyeOff,
};

const IconRenderer: React.FC<IconRendererProps> = ({ 
  iconName, 
  className = "text-dental-turquoise",
  size = 24 
}) => {
  if (!iconName || !iconMap[iconName]) {
    return null;
  }

  const IconComponent = iconMap[iconName];
  
  return <IconComponent className={className} size={size} />;
};

export default IconRenderer;
