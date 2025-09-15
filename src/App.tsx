import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Star,
  Wifi,
  Car,
  Coffee,
  Shield,
  Users,
  Clock,
  MessageCircle,
  ChevronDown,
  Menu,
  X,
  Camera,
  Bed,
  Bath,
  Tv,
  Wind
} from 'lucide-react';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Gallery from './components/Gallery';
import Dining from './components/Dining';
import About from './components/About';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import Attractions from './components/Attractions';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header isScrolled={isScrolled} />
      <Hero />
      <Rooms />
      <Gallery />
      <Dining />
      <About />
      <Testimonials />
      <WhyChooseUs />
      <Attractions />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;