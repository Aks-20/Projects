import React, { useState } from 'react';
import { Contact, Home, Folder, Users, Sun, Moon, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import HAMMERHEAD from '../assets/HAMMERHEAD.jpeg';

const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="bg-gradient-to-r from-black to-gray-800 dark:from-black dark:to-gray-900 shadow-xl transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left side - Logo and toggles */}
          <div className="flex items-center space-x-6">
            {/* Shark Logo */}
         

          
          </div>

          {/* Center - Navigation Links */}
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/home" className="flex items-center space-x-2 text-white dark:text-gray-200 hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition-all duration-300 group">
              <Home size={24} className="group-hover:scale-125 transition-transform" />
              <span className="font-semibold text-lg">Home</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-2 text-white dark:text-gray-200 hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition-all duration-300 group">
              <Users size={24} className="group-hover:scale-125 transition-transform" />
              <span className="font-semibold text-lg">About Me</span>
            </Link>
            <Link to="/projects" className="flex items-center space-x-2 text-white dark:text-gray-200 hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition-all duration-300 group">
              <Folder size={24} className="group-hover:scale-125 transition-transform" />
              <span className="font-semibold text-lg">Projects</span>
            </Link>
            <Link to="/contact" className="flex items-center space-x-2 text-white dark:text-gray-200 hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition-all duration-300 group">
              <Contact size={24} className="group-hover:scale-125 transition-transform" />
              <span className="font-semibold text-lg">Contact Me </span>
            </Link>
          </div>

          {/* Right side - Name Badge */}
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 text-white px-6 py-3 rounded-full flex items-center shadow-lg hover:shadow-xl transition-all duration-300">
              <img src={HAMMERHEAD} alt="HAMMERHEAD" className="h-10 w-10 rounded-full object-contain shadow-md  mr-2" />
              <span className="font-semibold text-lg">Akshat Gupta</span>
              <div className="ml-2 w-2 h-2 bg-green-400 rounded-full ring-2 ring-green-200 dark:ring-green-300"></div>
              <div className="ml-3 text-xs bg-blue-400 dark:bg-blue-800 px-2 py-1 rounded-full flex items-center">
                <Code size={12} className="mr-1" />
                <span>Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
