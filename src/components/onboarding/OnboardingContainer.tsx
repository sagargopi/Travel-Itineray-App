import React from 'react';
import { useAppContext } from '../../context/AppContext';
import OnboardingWelcome from './OnboardingWelcome';

const OnboardingContainer: React.FC = () => {
  const { isDarkMode } = useAppContext();

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-dark-bg text-white' : 'bg-white text-gray-900'}`}>
      <div className="flex-1 flex flex-col">
        <OnboardingWelcome />
      </div>
    </div>
  );
};

export default OnboardingContainer;