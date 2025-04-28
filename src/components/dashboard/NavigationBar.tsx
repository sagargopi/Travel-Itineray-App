import React from 'react';
import { Home, Search, Bookmark, Calendar, User } from 'lucide-react';

const NavigationBar: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('home');
  
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'explore', label: 'Explore', icon: Search },
    { id: 'bookmarks', label: 'Saved', icon: Bookmark },
    { id: 'trips', label: 'Trips', icon: Calendar },
    { id: 'profile', label: 'Profile', icon: User },
  ];
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 pt-2 pb-6">
      <div className="flex justify-between">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center justify-center ${
              activeTab === tab.id ? 'text-blue-600' : 'text-gray-500'
            }`}
          >
            <tab.icon className="w-6 h-6" />
            <span className="text-xs mt-1">{tab.label}</span>
            {activeTab === tab.id && (
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavigationBar;