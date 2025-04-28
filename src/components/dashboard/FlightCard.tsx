import React from 'react';
import Card from '../ui/Card';
import { Plane, ArrowRight } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

const FlightCard: React.FC = () => {
  const { selectItem } = useAppContext();
  
  const flightData = {
    id: 'fl1',
    airline: 'JAL',
    flightNumber: 'JL034',
    departure: {
      airport: 'San Francisco Intl',
      code: 'SFO',
      time: '11:30',
      date: '15 Jun'
    },
    arrival: {
      airport: 'Tokyo Narita',
      code: 'NRT',
      time: '14:45',
      date: '16 Jun'
    },
    duration: '11h 15m',
    price: '$789'
  };

  const handleClick = () => {
    selectItem(flightData.id);
  };

  return (
    <Card clickable onClick={handleClick} className="mb-4">
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
              <Plane className="w-4 h-4 text-blue-600" />
            </div>
            <span className="font-medium">{flightData.airline} • {flightData.flightNumber}</span>
          </div>
          <span className="text-sm text-gray-500">{flightData.duration}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="text-center">
            <p className="text-lg font-bold">{flightData.departure.time}</p>
            <p className="text-xs">{flightData.departure.date}</p>
            <p className="text-sm font-medium mt-1">{flightData.departure.code}</p>
            <p className="text-xs text-gray-500">{flightData.departure.airport}</p>
          </div>
          
          <div className="flex-1 mx-4 flex flex-col items-center">
            <div className="w-full flex items-center">
              <div className="h-[1px] flex-1 bg-gray-300"></div>
              <ArrowRight className="mx-2 text-gray-400" size={16} />
              <div className="h-[1px] flex-1 bg-gray-300"></div>
            </div>
            <span className="text-xs text-gray-500 mt-1">Direct</span>
          </div>
          
          <div className="text-center">
            <p className="text-lg font-bold">{flightData.arrival.time}</p>
            <p className="text-xs">{flightData.arrival.date}</p>
            <p className="text-sm font-medium mt-1">{flightData.arrival.code}</p>
            <p className="text-xs text-gray-500">{flightData.arrival.airport}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FlightCard;