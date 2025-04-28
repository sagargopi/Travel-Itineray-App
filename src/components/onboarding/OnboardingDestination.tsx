import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import Button from '../ui/Button';
import { MapPin } from 'lucide-react';

const destinations = [
  "New York",
  "Tokyo",
  "Paris",
  "London",
  "Rome",
  "Sydney",
  "Barcelona",
  "Dubai"
];

const OnboardingDestination: React.FC = () => {
  const { updateOnboardingData, setOnboardingStep } = useAppContext();
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);

  const handleSelectDestination = (destination: string) => {
    setSelectedDestination(destination);
  };

  const handleContinue = () => {
    if (selectedDestination) {
      updateOnboardingData({ destination: selectedDestination });
      setOnboardingStep('activities');
    }
  };

  return (
    <div className="flex flex-col h-full bg-black text-white px-5 py-8">
      <h1 className="text-xl font-bold mb-8">
        Where would you like to go?
      </h1>
      
      <div className="grid grid-cols-2 gap-3 mb-8">
        {destinations.map((destination) => (
          <div
            key={destination}
            onClick={() => handleSelectDestination(destination)}
            className={`
              flex items-center justify-center p-3 rounded-lg border cursor-pointer
              ${selectedDestination === destination 
                ? 'border-blue-600 bg-blue-600/20 text-blue-600' 
                : 'border-gray-700 text-gray-400 hover:border-gray-600'}
            `}
          >
            <MapPin size={16} className="mr-2" />
            <span>{destination}</span>
          </div>
        ))}
      </div>
      
      <div className="flex-1 flex flex-col justify-end">
        <Button 
          fullWidth 
          onClick={handleContinue}
          disabled={!selectedDestination}
          className={`bg-blue-600 text-white ${!selectedDestination ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default OnboardingDestination;