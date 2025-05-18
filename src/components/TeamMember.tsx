
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  specializations?: string[];
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  bio,
  imageUrl,
  specializations = []
}) => {
  return (
    <Card className="overflow-hidden hover-scale">
      <div 
        className="h-80 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
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
      </CardContent>
    </Card>
  );
};

export default TeamMember;
