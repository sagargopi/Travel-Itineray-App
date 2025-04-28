import React from 'react';
import Card from '../ui/Card';
import { MapPin } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

const places = [
  {
    id: 'place1',
    name: 'Tokyo Skytree',
    image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg',
    location: 'Sumida City',
    description: 'Tokyo Skytree is a broadcasting and observation tower in Sumida, Tokyo.'
  },
  {
    id: 'place2',
    name: 'Sensō-ji Temple',
    image: 'https://images.pexels.com/photos/3800117/pexels-photo-3800117.jpeg',
    location: 'Asakusa',
    description: 'Sensō-ji is an ancient Buddhist temple located in Asakusa, Tokyo.'
  },
  {
    id: 'place3',
    name: 'Meiji Shrine',
    image: 'https://images.pexels.com/photos/3700216/pexels-photo-3700216.jpeg',
    location: 'Shibuya',
    description: 'Meiji Shrine is a Shinto shrine dedicated to Emperor Meiji and Empress Shōken.'
  }
];

const PlacesSection: React.FC = () => {
  const { selectItem } = useAppContext();

  const handlePlaceClick = (id: string) => {
    selectItem(id);
  };

  return (
    <section className="mb-6">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold">Places to Visit</h2>
        <a className="text-blue-600 text-sm">See all</a>
      </div>
      
      <div className="space-y-3">
        {places.map(place => (
          <Card 
            key={place.id}
            clickable
            onClick={() => handlePlaceClick(place.id)}
            className="overflow-hidden"
          >
            <div className="flex">
              <div className="w-20 h-20 flex-shrink-0">
                <img 
                  src={place.image} 
                  alt={place.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 flex-1">
                <h3 className="font-medium">{place.name}</h3>
                <div className="flex items-center text-gray-500 text-xs mt-1">
                  <MapPin className="w-3 h-3 mr-1" />
                  <span>{place.location}</span>
                </div>
                <p className="text-xs text-gray-600 mt-1 line-clamp-2">{place.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PlacesSection;