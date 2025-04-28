import React from 'react';
import { useAppContext } from '../../context/AppContext';
import Card from '../ui/Card';
import { Calendar } from 'lucide-react';

const TripCard: React.FC = () => {
  const { currentTrip } = useAppContext();

  if (!currentTrip) return null;

  return (
    <Card className="relative overflow-hidden h-48 w-full">
      <div className="absolute inset-0 z-0">
        <img
          src={currentTrip.image}
          alt={currentTrip.destination}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>
      
      <div className="relative z-10 flex flex-col justify-end h-full p-4 text-white">
        <h2 className="text-2xl font-bold mb-1">{currentTrip.destination.toUpperCase()}</h2>
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-1" />
          <span className="text-sm">
            {currentTrip.dates.start} - {currentTrip.dates.end}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default TripCard;