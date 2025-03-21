import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, ChevronRight, Globe, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img src="https://cdn-icons-png.flaticon.com/512/1582/1582292.png" alt="Logo" className="h-10 w-auto bg-white" />
              <span className="text-2xl font-bold text-green-400">MyScheme</span>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering communities through accessible information on government schemes and initiatives, making a positive impact on society.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition-colors duration-300"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://www.youtube.com/channel/UCjtCbnkIaiCJgj13sEZ9iqw" 
                className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition-colors duration-300"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold border-b border-gray-800 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['Home', 'Schemes', 'About Us', 'Contact Us', 'Privacy Policy', 'Terms of Service'].map((link, index) => (
                <li key={index}>
                  <Link to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center text-gray-400 hover:text-green-400 transition-colors duration-300">
                    <ChevronRight size={16} className="mr-2" />
                    <span>{link}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold border-b border-gray-800 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Scheme Street, Government District, New Delhi, India 110001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-green-400 flex-shrink-0" />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-green-400 flex-shrink-0" />
                <span className="text-gray-400">info@myscheme.gov.in</span>
              </li>
              <li className="flex items-center space-x-3">
                <Globe size={18} className="text-green-400 flex-shrink-0" />
                <span className="text-gray-400">www.myscheme.gov.in</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold border-b border-gray-800 pb-2">
              Stay Updated
            </h3>
            <p className="text-gray-400 text-sm">
              Subscribe to our newsletter for the latest updates on government schemes and programs.
            </p>
            <form className="mt-2 space-y-3">
              <div className="flex flex-col space-y-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button 
                  type="submit" 
                  className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-gray-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} MyScheme. All Rights Reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center mt-3 md:mt-0">
              Made with <Heart size={14} className="mx-1 text-red-500" /> for a better India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}