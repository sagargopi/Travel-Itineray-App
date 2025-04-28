import React, { useState } from 'react';
import { Calendar, Heart, Coffee, Flag, Utensils, MapPin } from 'lucide-react';
import Card from '../ui/Card';
import { useAppContext } from '../../context/AppContext';

const categories = [
  { id: 'all', label: 'All Activities', icon: Calendar, color: 'bg-blue-100 text-blue-600' },
  { id: 'saved', label: 'Saved', icon: Heart, color: 'bg-pink-100 text-pink-600' },
  { id: 'food', label: 'Food', icon: Utensils, color: 'bg-orange-100 text-orange-600' },
  { id: 'coffee', label: 'Coffee', icon: Coffee, color: 'bg-amber-100 text-amber-600' },
  { id: 'sights', label: 'Sights', icon: Flag, color: 'bg-green-100 text-green-600' },
];

const activities = [
  {
    id: 'act1',
    image: 'https://images.pexels.com/photos/4064432/pexels-photo-4064432.jpeg',
    title: 'Tokyo Tower Visit',
    date: '16 June',
    time: '10:00 AM',
    location: 'Minato City',
    category: 'sights'
  },
  {
    id: 'act2',
    image: 'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg',
    title: 'Sushi Making Class',
    date: '17 June',
    time: '1:00 PM',
    location: 'Tsukiji',
    category: 'food'
  },
  {
    id: 'act3',
    image: 'https://images.pexels.com/photos/2531190/pexels-photo-2531190.jpeg',
    title: 'Specialty Coffee Tour',
    date: '18 June',
    time: '9:00 AM',
    location: 'Shibuya',
    category: 'coffee'
  }
];

const ActivitySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { selectItem } = useAppContext();

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const filteredActivities = selectedCategory === 'all' 
    ? activities 
    : activities.filter(activity => activity.category === selectedCategory);

  const handleActivityClick = (id: string) => {
    selectItem(id);
  };

  return (
    <section className="mb-6">
      <h2 className="text-lg font-semibold mb-3">Activities</h2>
      
      <div className="flex space-x-2 overflow-x-auto pb-2 mb-4">
        {categories.map(category => (
          <div
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`
              flex items-center p-2 rounded-full border whitespace-nowrap cursor-pointer
              ${selectedCategory === category.id
                ? category.color + ' border-transparent'
                : 'border-gray-300 text-gray-600 hover:bg-gray-100'}
            `}
          >
            <category.icon className="w-4 h-4 mr-1" />
            <span className="text-sm">{category.label}</span>
          </div>
        ))}
      </div>
      
      <div className="space-y-3">
        {filteredActivities.map(activity => (
          <Card 
            key={activity.id} 
            clickable 
            onClick={() => handleActivityClick(activity.id)}
            className="overflow-hidden"
          >
            <div className="flex">
              <div className="w-20 h-20 flex-shrink-0">
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 flex-1">
                <h3 className="font-medium">{activity.title}</h3>
                <div className="flex items-center text-gray-500 text-xs mt-1">
                  <Calendar className="w-3 h-3 mr-1" />
                  <span>{activity.date} • {activity.time}</span>
                </div>
                <div className="flex items-center text-gray-500 text-xs mt-1">
                  <MapPin className="w-3 h-3 mr-1" />
                  <span>{activity.location}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ActivitySection;