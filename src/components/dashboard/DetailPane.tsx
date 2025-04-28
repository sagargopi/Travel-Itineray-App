import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { X, Calendar, MapPin, Clock, Ticket, Hotel, Plane, Coffee } from 'lucide-react';
import Button from '../ui/Button';

// Mock data for different item types
const mockData = {
  // Flight details
  fl1: {
    type: 'flight',
    title: 'JAL Flight JL034',
    image: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg',
    details: [
      { label: 'Airline', value: 'Japan Airlines (JAL)' },
      { label: 'Flight Number', value: 'JL034' },
      { label: 'Departure', value: 'SFO - Jun 15, 11:30 AM' },
      { label: 'Arrival', value: 'NRT - Jun 16, 14:45 PM' },
      { label: 'Duration', value: '11h 15m (Direct)' },
      { label: 'Cabin', value: 'Economy' },
      { label: 'Seat', value: '23A (Window)' },
      { label: 'Baggage', value: '1 checked bag (23kg)' },
    ],
    notes: 'Check-in opens 24 hours before departure. Arrives at Terminal 1 at Narita Airport.'
  },
  
  // Accommodation details
  acc1: {
    type: 'accommodation',
    title: 'Shibuya Excel Hotel Tokyu',
    image: 'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg',
    details: [
      { label: 'Check-in', value: 'June 16, 2025 (After 3:00 PM)' },
      { label: 'Check-out', value: 'June 20, 2025 (Before 11:00 AM)' },
      { label: 'Room type', value: 'Deluxe Double (1 King Bed)' },
      { label: 'Address', value: '1-12-2 Dogenzaka, Shibuya, Tokyo 150-0043' },
      { label: 'Contact', value: '+81 3-5457-0109' },
      { label: 'Confirmation #', value: 'EXH78901234' },
    ],
    amenities: ['Free WiFi', 'Air Conditioning', 'Room Service', 'Restaurant', 'Fitness Center'],
    notes: 'Located directly above Shibuya Station with easy access to all transportation. Ask for a room with a view of Shibuya Crossing.'
  },
  
  acc2: {
    type: 'accommodation',
    title: 'Akasaka Urban Hotel',
    image: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg',
    details: [
      { label: 'Check-in', value: 'June 20, 2025 (After 2:00 PM)' },
      { label: 'Check-out', value: 'June 22, 2025 (Before 10:00 AM)' },
      { label: 'Room type', value: 'Standard Twin (2 Double Beds)' },
      { label: 'Address', value: '2-14-14 Akasaka, Minato, Tokyo 107-0052' },
      { label: 'Contact', value: '+81 3-3505-1111' },
      { label: 'Confirmation #', value: 'AUH45678912' },
    ],
    amenities: ['Free WiFi', 'Breakfast Included', 'Laundry Service', 'Bar'],
    notes: 'Located in the business district with many restaurants nearby. 10-minute walk to Akasaka-Mitsuke Station.'
  },
  
  // Activity details
  act1: {
    type: 'activity',
    title: 'Tokyo Tower Visit',
    image: 'https://images.pexels.com/photos/4064432/pexels-photo-4064432.jpeg',
    details: [
      { label: 'Date', value: 'June 16, 2025' },
      { label: 'Time', value: '10:00 AM - 12:00 PM' },
      { label: 'Location', value: '4 Chome-2-8 Shibakoen, Minato City, Tokyo' },
      { label: 'Ticket type', value: 'Main Observatory + Top Deck' },
      { label: 'Price', value: '¥3,000 per person' },
    ],
    description: 'Visit Tokyo Tower, a 333-meter tall communications and observation tower. Enjoy panoramic views of Tokyo from the observation decks.',
    notes: 'The Top Deck Tour requires a separate ticket which can be purchased at the Main Observatory. Arrive early to avoid long lines.'
  },
  
  act2: {
    type: 'activity',
    title: 'Sushi Making Class',
    image: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg',
    details: [
      { label: 'Date', value: 'June 17, 2025' },
      { label: 'Time', value: '1:00 PM - 3:30 PM' },
      { label: 'Location', value: 'Tsukiji Cooking School, Chuo City, Tokyo' },
      { label: 'Price', value: '¥8,500 per person' },
      { label: 'Includes', value: 'All ingredients, equipment, and instruction' },
    ],
    description: 'Learn to make authentic Japanese sushi with a professional chef. You\'ll prepare various types of sushi and enjoy your creations afterward.',
    notes: 'Vegetarian options available. Please notify of any allergies in advance. Wear comfortable clothing.'
  },
  
  act3: {
    type: 'activity',
    title: 'Specialty Coffee Tour',
    image: 'https://images.pexels.com/photos/2531190/pexels-photo-2531190.jpeg',
    details: [
      { label: 'Date', value: 'June 18, 2025' },
      { label: 'Time', value: '9:00 AM - 12:00 PM' },
      { label: 'Location', value: 'Meeting point: Shibuya Station, Hachiko Exit' },
      { label: 'Price', value: '¥5,000 per person' },
      { label: 'Includes', value: 'Coffee tastings at 3 cafes, guide, bottled water' },
    ],
    description: 'Discover Tokyo\'s thriving specialty coffee scene. Visit three of Tokyo\'s best independent coffee shops and learn about different brewing methods.',
    notes: 'Tour involves approximately 2km of walking. Bring comfortable shoes and a reusable cup if you have one.'
  },
  
  // Place details
  place1: {
    type: 'place',
    title: 'Tokyo Skytree',
    image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg',
    details: [
      { label: 'Location', value: '1 Chome-1-2 Oshiage, Sumida City, Tokyo' },
      { label: 'Hours', value: '10:00 AM - 9:00 PM (Last entry 8:00 PM)' },
      { label: 'Admission', value: '¥2,100 (Tembo Deck), ¥1,000 additional for Tembo Galleria' },
      { label: 'Height', value: '634 meters (2,080 ft)' },
    ],
    description: 'Tokyo Skytree is a broadcasting and observation tower in Sumida, Tokyo. It is the tallest structure in Japan and the third tallest in the world. The tower has two observation decks offering panoramic views of Tokyo.',
    notes: 'Skip-the-line tickets are available online. There are restaurants and a large shopping complex at the base of the tower.'
  },
  
  place2: {
    type: 'place',
    title: 'Sensō-ji Temple',
    image: 'https://images.pexels.com/photos/3800117/pexels-photo-3800117.jpeg',
    details: [
      { label: 'Location', value: '2 Chome-3-1 Asakusa, Taito City, Tokyo' },
      { label: 'Hours', value: 'Temple grounds: Always open, Main hall: 6:00 AM - 5:00 PM' },
      { label: 'Admission', value: 'Free' },
      { label: 'Founded', value: '645 CE' },
    ],
    description: 'Sensō-ji is Tokyo\'s oldest temple, founded in 645 CE. The approach to the temple is via the famous Nakamise Shopping Street, a 250m street lined with traditional shops selling souvenirs and snacks.',
    notes: 'Very crowded during the day. Visit early morning for a more peaceful experience. Don\'t miss the five-story pagoda nearby.'
  },
  
  place3: {
    type: 'place',
    title: 'Meiji Shrine',
    image: 'https://images.pexels.com/photos/3700216/pexels-photo-3700216.jpeg',
    details: [
      { label: 'Location', value: '1-1 Yoyogikamizonocho, Shibuya City, Tokyo' },
      { label: 'Hours', value: 'Sunrise to Sunset (hours vary by season)' },
      { label: 'Admission', value: 'Free (Inner Garden: ¥500)' },
      { label: 'Established', value: '1920' },
    ],
    description: 'Meiji Shrine is a Shinto shrine dedicated to Emperor Meiji and Empress Shōken. Set in a forest of 120,000 trees, it\'s a peaceful oasis in the middle of Tokyo and one of Japan\'s most important Shinto shrines.',
    notes: 'Visit on a Sunday to possibly see a traditional Japanese wedding. The Inner Garden is beautiful during iris season (June) and autumn colors.'
  },
};

const DetailPane: React.FC = () => {
  const { selectedItemId, selectItem } = useAppContext();
  
  if (!selectedItemId || !mockData[selectedItemId as keyof typeof mockData]) {
    return (
      <div className="w-[40%] border-l border-gray-200 bg-white p-4">
        <div className="flex justify-end">
          <button
            onClick={() => selectItem(null)}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <X size={18} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-[80vh]">
          <p className="text-gray-500">Select an item to view details</p>
        </div>
      </div>
    );
  }
  
  const item = mockData[selectedItemId as keyof typeof mockData];
  
  // Icon mapping based on item type
  const TypeIcon = () => {
    switch (item.type) {
      case 'flight':
        return <Plane className="w-5 h-5 mr-2 text-blue-600" />;
      case 'accommodation':
        return <Hotel className="w-5 h-5 mr-2 text-blue-600" />;
      case 'activity':
        return <Coffee className="w-5 h-5 mr-2 text-blue-600" />;
      case 'place':
        return <MapPin className="w-5 h-5 mr-2 text-blue-600" />;
      default:
        return <Calendar className="w-5 h-5 mr-2 text-blue-600" />;
    }
  };

  return (
    <div className="w-[40%] border-l border-gray-200 bg-white overflow-y-auto">
      <div className="sticky top-0 bg-white z-10 shadow-sm">
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <div className="flex items-center">
            <TypeIcon />
            <h2 className="font-semibold">{item.title}</h2>
          </div>
          <button
            onClick={() => selectItem(null)}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <X size={18} />
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <div className="mb-6">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-48 object-cover rounded-lg" 
          />
        </div>
        
        <div className="space-y-4 mb-6">
          {item.details.map((detail, index) => (
            <div key={index} className="border-b border-gray-100 pb-2">
              <p className="text-xs text-gray-500">{detail.label}</p>
              <p className="font-medium">{detail.value}</p>
            </div>
          ))}
        </div>
        
        {item.description && (
          <div className="mb-6">
            <h3 className="font-medium mb-2">Description</h3>
            <p className="text-sm text-gray-700">{item.description}</p>
          </div>
        )}
        
        {item.amenities && (
          <div className="mb-6">
            <h3 className="font-medium mb-2">Amenities</h3>
            <div className="flex flex-wrap gap-2">
              {item.amenities.map((amenity, index) => (
                <span 
                  key={index} 
                  className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {item.notes && (
          <div className="mb-6">
            <h3 className="font-medium mb-2">Notes</h3>
            <p className="text-sm text-gray-700 bg-blue-50 p-3 rounded-lg border border-blue-100">
              {item.notes}
            </p>
          </div>
        )}
        
        <div className="flex gap-3 mt-8">
          {item.type === 'activity' && (
            <Button variant="outline" className="flex-1">
              <Clock className="w-4 h-4 mr-2" />
              Add to Calendar
            </Button>
          )}
          {(item.type === 'activity' || item.type === 'place') && (
            <Button variant="primary" className="flex-1">
              {item.type === 'activity' ? (
                <>
                  <Ticket className="w-4 h-4 mr-2" />
                  Book Now
                </>
              ) : (
                <>
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </>
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailPane;