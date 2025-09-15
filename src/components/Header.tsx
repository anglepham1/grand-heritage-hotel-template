import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  const handleBookNow = () => {
    scrollToSection('contact');
  };

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Rooms', href: '#rooms' },
    { label: 'Dining', href: '#dining' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Grand Heritage
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
               onClick={(e) => {
                 e.preventDefault();
                 scrollToSection(item.href);
               }}
               onClick={(e) => {
                 e.preventDefault();
                 scrollToSection(item.href);
               }}
               href={item.href}
                className={`font-medium transition-colors duration-300 hover:text-maroon-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+91-9876543210"
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                isScrolled 
                  ? 'text-navy-900 border border-navy-900 hover:bg-navy-900 hover:text-white' 
                  : 'text-white border border-white hover:bg-white hover:text-navy-900'
              }`}
            >
              <Phone size={16} />
              <span>Call Now</span>
            </a>
            <button 
              onClick={handleBookNow}
              className="bg-maroon-600 text-white px-6 py-2 rounded-full hover:bg-maroon-700 transition-colors duration-300 font-semibold cursor-pointer"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-3 text-gray-700 hover:text-maroon-600 font-medium"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 pb-2 space-y-2">
              <a
                href="tel:+91-9876543210"
                className="flex items-center justify-center space-x-2 w-full py-2 text-navy-900 border border-navy-900 rounded-full hover:bg-navy-900 hover:text-white transition-colors duration-300"
              >
                <Phone size={16} />
                <span>Call Now</span>
              </a>
              <button 
                onClick={handleBookNow}
                className="w-full bg-maroon-600 text-white py-2 rounded-full hover:bg-maroon-700 transition-colors duration-300 font-semibold cursor-pointer"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;