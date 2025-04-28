import React from 'react';
import { useAppContext } from '../../context/AppContext';
import Header from './Header';
import TripCard from './TripCard';
import FlightCard from './FlightCard';
import AccommodationCard from './AccommodationCard';
import ActivitySection from './ActivitySection';
import PlacesSection from './PlacesSection';
import DetailPane from './DetailPane';
import NavigationBar from './NavigationBar';

const DashboardContainer: React.FC = () => {
  const { thirdPaneOpen, isDarkMode } = useAppContext();

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-dark-bg' : 'bg-gray-50'}`}>
      <div className="flex flex-1 overflow-hidden">
        {/* Main Content */}
        <div className={`flex-1 overflow-y-auto transition-all duration-300 ${thirdPaneOpen ? 'max-w-[50%] md:max-w-[60%]' : 'max-w-full'} ${isDarkMode ? 'bg-dark-bg text-white' : 'bg-white text-gray-900'}`}>
          <Header />
          <main className="p-4 pb-20">
            <section className="mb-6">
              <h2 className="text-lg font-semibold mb-3">Your Upcoming Trip</h2>
              <TripCard />
            </section>
            
            <section className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-semibold">Flight Details</h2>
                <a className="text-blue-600 text-sm">See all</a>
              </div>
              <FlightCard />
            </section>
            
            <section className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-semibold">Accommodation</h2>
                <a className="text-blue-600 text-sm">See all</a>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-2">
                <AccommodationCard 
                  id="acc1" 
                  name="Shibuya Excel Hotel" 
                  image="https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg" 
                />
                <AccommodationCard 
                  id="acc2" 
                  name="Akasaka Urban Hotel" 
                  image="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg" 
                />
              </div>
            </section>
            
            <ActivitySection />
            
            <PlacesSection />
          </main>
        </div>
        
        {/* Detail Pane */}
        {thirdPaneOpen && <DetailPane />}
      </div>
      
      <NavigationBar />
    </div>
  );
};

export default DashboardContainer;