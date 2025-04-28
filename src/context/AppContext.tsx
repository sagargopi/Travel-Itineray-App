import React, { createContext, useState, useContext, ReactNode } from 'react';
import { 
  User, 
  Trip, 
  OnboardingStep, 
  OnboardingData, 
  AppContextType 
} from '../types';

const defaultAppContext: AppContextType = {
  user: null,
  currentTrip: null,
  isOnboarding: true,
  onboardingStep: 'welcome',
  onboardingData: {},
  selectedItemId: null,
  thirdPaneOpen: false,
  isDarkMode: false,
  setUser: () => {},
  setCurrentTrip: () => {},
  setIsOnboarding: () => {},
  setOnboardingStep: () => {},
  updateOnboardingData: () => {},
  completeOnboarding: () => {},
  selectItem: () => {},
  toggleThirdPane: () => {},
  toggleDarkMode: () => {},
};

const AppContext = createContext<AppContextType>(defaultAppContext);

export const useAppContext = () => useContext(AppContext);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [currentTrip, setCurrentTrip] = useState<Trip | null>(null);
  const [isOnboarding, setIsOnboarding] = useState(() => {
    const stored = localStorage.getItem('isOnboarding');
    return stored === null ? true : stored === 'true';
  });
  const [onboardingStep, setOnboardingStep] = useState<OnboardingStep>('welcome');
  const [onboardingData, setOnboardingData] = useState<OnboardingData>({});
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [thirdPaneOpen, setThirdPaneOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const updateOnboardingData = (data: Partial<OnboardingData>) => {
    setOnboardingData(prevData => ({ ...prevData, ...data }));
  };

  const completeOnboarding = () => {
    setIsOnboarding(false);
    localStorage.setItem('isOnboarding', 'false');
    setUser({
      name: 'Chloe',
      avatar: '/avatar.png',
    });
    setCurrentTrip({
      id: '1',
      destination: 'Tokyo',
      image: 'https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg',
      dates: {
        start: '15 June 2025',
        end: '22 June 2025',
      },
    });
  };

  // Keep onboarding state in sync with localStorage
  React.useEffect(() => {
    localStorage.setItem('isOnboarding', isOnboarding ? 'true' : 'false');
  }, [isOnboarding]);

  const selectItem = (id: string | null) => {
    setSelectedItemId(id);
    if (id && !thirdPaneOpen) {
      setThirdPaneOpen(true);
    } else if (!id) {
      setThirdPaneOpen(false);
    }
  };

  const toggleThirdPane = () => {
    setThirdPaneOpen(prev => !prev);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        currentTrip,
        isOnboarding,
        onboardingStep,
        onboardingData,
        selectedItemId,
        thirdPaneOpen,
        isDarkMode,
        setUser,
        setCurrentTrip,
        setIsOnboarding,
        setOnboardingStep,
        updateOnboardingData,
        completeOnboarding,
        selectItem,
        toggleThirdPane,
        toggleDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};