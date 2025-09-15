import React from 'react';
import { MapPin, Clock, Star, Camera } from 'lucide-react';

const Attractions: React.FC = () => {
  const attractions = [
    {
      id: 1,
      name: 'Historic City Center',
      distance: '0.5 km',
      time: '5 min walk',
      rating: 4.7,
      type: 'Heritage',
      description: 'Explore centuries-old architecture, traditional markets, and cultural landmarks.',
      image: '/Historic-City-Center.jpg'
    },
    {
      id: 2,
      name: 'Local Markets & Shopping',
      distance: '0.3 km',
      time: '3 min walk',
      rating: 4.5,
      type: 'Shopping',
      description: 'Vibrant bazaars offering local crafts, textiles, and authentic street food.',
      image: '/Local-Markets-Shopping.jpg'
    },
    {
      id: 3,
      name: 'Scenic Viewpoints',
      distance: '2 km',
      time: '15 min drive',
      rating: 4.8,
      type: 'Nature',
      description: 'Breathtaking panoramic views perfect for photography and sunset watching.',
      image: '/scenic-viewpoint.jpg'
    },
    {
      id: 4,
      name: 'Cultural Museums',
      distance: '1 km',
      time: '10 min walk',
      rating: 4.6,
      type: 'Culture',
      description: 'Rich collections showcasing local history, art, and traditional exhibits.',
      image: '/Cultural-Museums.jpg'
    },
    {
      id: 5,
      name: 'Fine Dining District',
      distance: '0.8 km',
      time: '8 min walk',
      rating: 4.7,
      type: 'Dining',
      description: 'Award-winning restaurants serving authentic local cuisine and international dishes.',
      image: '/Fine-Dining-District.jpg'
    },
    {
      id: 6,
      name: 'Adventure Activities',
      distance: '5 km',
      time: '20 min drive',
      rating: 4.4,
      type: 'Adventure',
      description: 'Trekking, paragliding, and outdoor sports for adventure enthusiasts.',
      image: '/Adventure-Activities.jpg'
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      Heritage: 'bg-amber-100 text-amber-800',
      Shopping: 'bg-pink-100 text-pink-800',
      Nature: 'bg-green-100 text-green-800',
      Culture: 'bg-purple-100 text-purple-800',
      Dining: 'bg-red-100 text-red-800',
      Adventure: 'bg-blue-100 text-blue-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nearby Attractions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the best that our location has to offer. From cultural landmarks 
            to natural wonders, adventure awaits just steps from your room.
          </p>
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction) => (
            <div key={attraction.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Type Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(attraction.type)}`}>
                  {attraction.type}
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
                  <Star size={14} className="text-yellow-400 fill-current mr-1" />
                  <span className="text-sm font-semibold">{attraction.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {attraction.name}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {attraction.description}
                </p>

                {/* Distance & Time */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    <span>{attraction.distance}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span>{attraction.time}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button 
                  onClick={() => {
                    // In a real app, this would open maps or provide directions
                    alert(`Getting directions to ${attraction.name}. In a real application, this would open Google Maps or provide detailed directions.`);
                  }}
                  className="w-full flex items-center justify-center space-x-2 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300 group cursor-pointer"
                >
                  <Camera size={16} className="text-gray-500 group-hover:text-maroon-600" />
                  <span className="text-gray-700 group-hover:text-maroon-600 font-medium">
                    Get Directions
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 bg-navy-900 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Need Local Recommendations?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Our knowledgeable front desk team is always ready to help you plan your itinerary 
            and discover hidden gems that match your interests and preferences.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl mb-2">🗺️</div>
              <h4 className="font-semibold mb-1">Custom Itineraries</h4>
              <p className="text-sm text-gray-400">Personalized day plans based on your interests</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🚗</div>
              <h4 className="font-semibold mb-1">Transportation Help</h4>
              <p className="text-sm text-gray-400">Assistance with taxis, rentals, and local transport</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🍽️</div>
              <h4 className="font-semibold mb-1">Dining Reservations</h4>
              <p className="text-sm text-gray-400">Book the best local restaurants and experiences</p>
            </div>
          </div>

          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-maroon-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-maroon-700 transition-colors duration-300 cursor-pointer"
          >
            Speak with Concierge
          </button>
        </div>

        {/* Location Benefits */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Perfectly positioned for convenience</p>
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <span>• 2 min to public transport</span>
            <span>• 5 min to city center</span>
            <span>• 10 min to major attractions</span>
            <span>• 15 min to shopping districts</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Attractions;