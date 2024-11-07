import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, Smartphone, Laptop, Watch, User } from 'lucide-react';
import SearchBar from './SearchBar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Search className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl">TechReviewer</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/category/smartphones" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
              <Smartphone className="h-5 w-5" />
              <span>Smartphones</span>
            </Link>
            <Link to="/category/laptops" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
              <Laptop className="h-5 w-5" />
              <span>Laptops</span>
            </Link>
            <Link to="/category/wearables" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
              <Watch className="h-5 w-5" />
              <span>Wearables</span>
            </Link>
            <Link to="/login" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
              <User className="h-5 w-5" />
              <span>Login</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/category/smartphones" className="flex items-center space-x-2 text-gray-700">
                <Smartphone className="h-5 w-5" />
                <span>Smartphones</span>
              </Link>
              <Link to="/category/laptops" className="flex items-center space-x-2 text-gray-700">
                <Laptop className="h-5 w-5" />
                <span>Laptops</span>
              </Link>
              <Link to="/category/wearables" className="flex items-center space-x-2 text-gray-700">
                <Watch className="h-5 w-5" />
                <span>Wearables</span>
              </Link>
              <Link to="/login" className="flex items-center space-x-2 text-gray-700">
                <User className="h-5 w-5" />
                <span>Login</span>
              </Link>
            </div>
          </div>
        )}
      </div>
      <SearchBar />
    </nav>
  );
};

export default Navbar;