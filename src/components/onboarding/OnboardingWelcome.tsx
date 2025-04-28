import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import Button from '../ui/Button';
import { User, Users2, Heart, Briefcase } from 'lucide-react';

const OnboardingWelcome: React.FC = () => {
  const { isDarkMode, updateOnboardingData, completeOnboarding } = useAppContext();
  const [selectedCompanion, setSelectedCompanion] = useState<string | null>(null);
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('');

  const companions = [
    { id: 'solo', label: 'Solo', icon: User },
    { id: 'couple', label: 'Couple', icon: Heart },
    { id: 'family', label: 'Family', icon: Users2 },
    { id: 'business', label: 'Business', icon: Briefcase },
  ];

  const handleContinue = () => {
    if (destination && duration && selectedCompanion) {
      updateOnboardingData({
        destination,
        duration,
        companions: [selectedCompanion]
      });
      completeOnboarding();
    }
  };

  const baseInputClasses = `w-full px-4 py-3.5 rounded-xl border appearance-none focus:outline-none focus:ring-2 focus:ring-blue-600 ${
    isDarkMode 
      ? 'bg-dark-card border-dark-border text-white placeholder:text-gray-500' 
      : 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-400'
  }`;

  return (
    <div className={`flex flex-col min-h-screen p-6 ${isDarkMode ? 'bg-dark-bg' : 'bg-white'}`}>
      <h1 className={`text-2xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        Plan Your Journey, Your Way!
      </h1>
      
      <div className="space-y-6">
        <div>
          <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Where would you like to go?
          </label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Enter Destination"
            className={baseInputClasses}
          />
        </div>
        
        <div>
          <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            How long will you stay?
          </label>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className={baseInputClasses}
          >
            <option value="">Select Duration</option>
            <option value="1-week">1 Week</option>
            <option value="2-weeks">2 Weeks</option>
            <option value="3-weeks">3 Weeks</option>
            <option value="1-month">1 Month</option>
          </select>
        </div>
        
        <div>
          <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Who are you traveling with?
          </label>
          <div className="grid grid-cols-2 gap-3">
            {companions.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setSelectedCompanion(id)}
                className={`
                  p-4 rounded-xl border flex items-center justify-center gap-2 transition-all
                  ${selectedCompanion === id
                    ? isDarkMode
                      ? 'border-blue-600 bg-blue-600/20 text-blue-600'
                      : 'border-blue-600 bg-blue-50 text-blue-600'
                    : isDarkMode
                      ? 'border-dark-border text-gray-400 hover:border-gray-600'
                      : 'border-gray-200 text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                <Icon size={18} />
                <span className="text-sm font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-auto pt-6">
        <Button 
          fullWidth
          onClick={handleContinue}
          disabled={!destination || !duration || !selectedCompanion}
          className="bg-blue-600 text-white py-4 rounded-xl disabled:opacity-50"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default OnboardingWelcome;