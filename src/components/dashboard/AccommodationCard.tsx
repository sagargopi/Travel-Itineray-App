import React from 'react';
import Card from '../ui/Card';
import { MapPin } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

interface AccommodationCardProps {
  id: string;
  name: string;
  image: string;
  location?: string;
}

const AccommodationCard: React.FC<AccommodationCardProps> = ({ 
  id, 
  name, 
  image, 
  location = 'Tokyo, Japan' 
}) => {
  const { selectItem } = useAppContext();

  const handleClick = () => {
    selectItem(id);
  };

  return (
    <Card 
      clickable 
      onClick={handleClick} 
      className="min-w-[240px] w-[240px] flex-shrink-0"
    >
      <div className="h-32">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-3">
        <h3 className="font-medium text-gray-900 truncate">{name}</h3>
        <div className="flex items-center mt-1 text-gray-500 text-sm">
          <MapPin className="w-3 h-3 mr-1" />
          <span>{location}</span>
        </div>
      </div>
    </Card>
  );
};

export default AccommodationCard;