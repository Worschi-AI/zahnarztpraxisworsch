
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon?: string;
  imageUrl?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  id, 
  title, 
  description, 
  icon, 
  imageUrl 
}) => {
  return (
    <Card className="hover:shadow-lg transition-shadow overflow-hidden hover-scale">
      {imageUrl && (
        <div 
          className="h-48 w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      )}
      
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {icon && (
            <span className="text-dental-turquoise" dangerouslySetInnerHTML={{ __html: icon }} />
          )}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <p className="text-dental-gray line-clamp-3">{description}</p>
      </CardContent>
      
      <CardFooter>
        <Button asChild variant="ghost" className="text-dental-blue hover:text-dental-turquoise hover:bg-transparent p-0">
          <Link to={`/services/${id}`} className="flex items-center gap-2">
            Mehr erfahren <ArrowRight size={16} />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
