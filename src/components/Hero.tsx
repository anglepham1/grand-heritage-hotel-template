import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookNow = () => {
    // Scroll to contact section for booking
    scrollToSection('contact');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Background Image - Using a placeholder from Pexels */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-1.jpg')"
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Welcome to Comfort,
          <br />
          <span className="text-yellow-300">Style, and Hospitality</span>
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Experience unmatched comfort and personalized service in our elegantly designed rooms. 
          Your perfect getaway awaits.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={handleBookNow}
            className="bg-maroon-600 hover:bg-maroon-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
          >
            Book Your Stay
          </button>
          <button 
            onClick={() => scrollToSection('rooms')}
            className="border-2 border-white text-white hover:bg-white hover:text-navy-900 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            Explore Rooms
          </button>
        </div>
        
        {/* Features */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 group-hover:bg-white/20 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
              <p className="text-gray-300">Round-the-clock assistance for all your needs</p>
            </div>
          </div>
          <div className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 group-hover:bg-white/20 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2">Prime Location</h3>
              <p className="text-gray-300">Convenient access to local attractions</p>
            </div>
          </div>
          <div className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 group-hover:bg-white/20 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-2">Modern Amenities</h3>
              <p className="text-gray-300">All the comforts you need for a perfect stay</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;