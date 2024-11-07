import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              Expert tech reviews helping you make informed decisions about your next purchase.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">About</Link>
              </li>
              <li>
                <Link to="/compare" className="text-gray-400 hover:text-white">Compare</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/smartphones" className="text-gray-400 hover:text-white">Smartphones</Link>
              </li>
              <li>
                <Link to="/category/laptops" className="text-gray-400 hover:text-white">Laptops</Link>
              </li>
              <li>
                <Link to="/category/wearables" className="text-gray-400 hover:text-white">Wearables</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-4">
              <a href="mailto:contact@techreviewer.com" className="flex items-center text-gray-400 hover:text-white">
                <Mail className="h-5 w-5 mr-2" />
                Gandhar Patade<br></br>
                91+ 7820970654<br></br>
               patadegandhar1@gmail.com
              </a>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TechReviewer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;