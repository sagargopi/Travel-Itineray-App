export interface User {
  name: string;
  avatar?: string;
}

export interface Trip {
  id: string;
  destination: string;
  image: string;
  dates: {
    start: string;
    end: string;
  };
}

export interface Flight {
  id: string;
  airline: string;
  flightNumber: string;
  departure: {
    airport: string;
    code: string;
    time: string;
    date: string;
  };
  arrival: {
    airport: string;
    code: string;
    time: string;
    date: string;
  };
  duration: string;
  price: string;
  status?: 'confirmed' | 'pending' | 'canceled';
}

export interface Accommodation {
  id: string;
  name: string;
  image: string;
  location: string;
  checkIn: string;
  checkOut: string;
  price: string;
  rating?: number;
  status?: 'confirmed' | 'pending' | 'canceled';
}

export interface Activity {
  id: string;
  title: string;
  image: string;
  date: string;
  time: string;
  location: string;
  duration?: string;
  price?: string;
  booked?: boolean;
}

export interface Place {
  id: string;
  name: string;
  image: string;
  description: string;
  location: string;
  category?: string;
}

export type OnboardingStep = 'welcome' | 'destination' | 'activities' | 'companions';

export interface OnboardingData {
  destination?: string;
  activities?: string[];
  companions?: string[];
  duration?: string;
}

export interface AppContextType {
  user: User | null;
  currentTrip: Trip | null;
  isOnboarding: boolean;
  onboardingStep: OnboardingStep;
  onboardingData: OnboardingData;
  selectedItemId: string | null;
  thirdPaneOpen: boolean;
  isDarkMode: boolean;
  setUser: (user: User | null) => void;
  setCurrentTrip: (trip: Trip | null) => void;
  setIsOnboarding: (isOnboarding: boolean) => void;
  setOnboardingStep: (step: OnboardingStep) => void;
  updateOnboardingData: (data: Partial<OnboardingData>) => void;
  completeOnboarding: () => void;
  selectItem: (id: string | null) => void;
  toggleThirdPane: () => void;
  toggleDarkMode: () => void;
}