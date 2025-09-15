import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div>
            <div className="text-2xl font-bold mb-4">Grand Heritage</div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Experience comfort, style, and hospitality at our independent hotel. 
              Creating memorable stays with personalized service since 2018.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#rooms" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Rooms & Suites
                </a>
              </li>
              <li>
                <a href="#dining" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Dining
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>24/7 Front Desk</li>
              <li>Complimentary Breakfast</li>
              <li>Free Wi-Fi</li>
              <li>Free Parking</li>
              <li>Room Service</li>
              <li>Airport Transfer</li>
              <li>Tour Assistance</li>
              <li>Business Center</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-maroon-400 mt-1" />
                <div className="text-gray-400">
                  123 Heritage Street,<br />
                  City Center, State - 123456
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-maroon-400" />
                <a href="tel:+91-9876-543-210" className="text-gray-400 hover:text-white transition-colors duration-300">
                  +91-9876-543-210
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-maroon-400" />
                <a href="mailto:reservations@grandheritage.com" className="text-gray-400 hover:text-white transition-colors duration-300">
                  reservations@grandheritage.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 Grand Heritage Hotel. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Cancellation Policy
              </a>
            </div>
          </div>
          
          <div className="text-center mt-6 text-gray-500 text-sm">
            <p className="flex items-center justify-center">
              Made with <Heart size={16} className="mx-1 text-red-500" /> for exceptional hospitality
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;