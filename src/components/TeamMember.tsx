
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { 
  Dialog, 
  DialogTrigger, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  specializations?: string[];
  education?: string[];
  id?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  bio,
  imageUrl,
  specializations = [],
  education = [],
  id
}) => {
  const [open, setOpen] = useState(false);
  const hasDetailedInfo = education && education.length > 0;

  return (
    <Card className="overflow-hidden hover-scale">
      <div 
        className="h-80 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
        aria-label={`${name} - ${role} Zahnarztpraxis Worsch Dresden`}
      />
      
      <CardHeader>
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-dental-turquoise font-medium">{role}</p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-dental-gray">{bio}</p>
        
        {specializations.length > 0 && (
          <div>
            <h4 className="font-semibold mb-2">Spezialisierungen:</h4>
            <ul className="list-disc list-inside text-dental-gray">
              {specializations.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
        )}

        {hasDetailedInfo && (
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="link" className="p-0 text-dental-turquoise flex items-center">
                Mehr erfahren <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>{name}</DialogTitle>
                <DialogDescription>{role}</DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4 py-4">
                {bio && <p className="text-dental-gray">{bio}</p>}
                
                {education.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-dental-blue mb-2">Ausbildung & Werdegang</h4>
                    <ul className="list-disc list-inside text-dental-gray">
                      {education.map((edu, index) => (
                        <li key={index}>{edu}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {specializations.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-dental-blue mb-2">Spezialisierungen</h4>
                    <ul className="list-disc list-inside text-dental-gray">
                      {specializations.map((spec, index) => (
                        <li key={index}>{spec}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>
        )}
      </CardContent>
    </Card>
  );
};

export default TeamMember;
