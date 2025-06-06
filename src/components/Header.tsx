
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, User, LogOut, Settings } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 university-gradient text-white shadow-lg">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <button
            onClick={onMenuClick}
            className="lg:hidden mr-4 p-2 rounded-md hover:bg-blue-800 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <Link to="/" className="flex items-center">
            <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center mr-3">
              <span className="text-blue-900 font-bold text-lg">U</span>
            </div>
            <h1 className="text-xl font-bold">UniLearn LMS</h1>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-blue-800 transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center">3</span>
          </button>
          
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-800 transition-colors"
            >
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-blue-900" />
              </div>
              <span className="hidden md:block">John Doe</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                <Link to="/profile" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </Link>
                <Link to="/settings" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Link>
                <hr className="my-1" />
                <Link to="/login" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
