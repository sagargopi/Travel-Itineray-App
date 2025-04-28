import React from 'react';
import './index.css';
import { AppProvider } from './context/AppContext';
import OnboardingContainer from './components/onboarding/OnboardingContainer';
import DashboardContainer from './components/dashboard/DashboardContainer';
import { useAppContext } from './context/AppContext';

const AppContent = () => {
  const { isOnboarding, isDarkMode } = useAppContext();
  
  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-dark-bg' : 'bg-white'}`}>
      {isOnboarding ? <OnboardingContainer /> : <DashboardContainer />}
    </div>
  );
};

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;