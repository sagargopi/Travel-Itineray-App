import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { Bell } from 'lucide-react';

const Header: React.FC = () => {
  const { user } = useAppContext();

  return (
    <header className="px-5 py-4 bg-white shadow-sm">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-semibold text-lg">Hello {user?.name || 'Traveler'}!</h1>
          <p className="text-sm text-gray-500">Ready for Travel?</p>
        </div>
        
        <div className="flex space-x-3 items-center">
          <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>
          
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-medium">
            {user?.avatar ? (
              <img 
                src={user.avatar} 
                alt={user.name} 
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              user?.name?.charAt(0) || 'T'
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;