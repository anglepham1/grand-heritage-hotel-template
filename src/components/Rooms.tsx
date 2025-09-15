import React from 'react';
import { Wifi, Car, Coffee, Tv, Wind, Bath, Users, Star } from 'lucide-react';

const Rooms: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewDetails = (roomName: string) => {
    // In a real app, this would open a modal or navigate to a detailed page
    alert(`Viewing details for ${roomName}. In a real application, this would show detailed room information, amenities, and booking options.`);
  };

  const rooms = [
    {
      id: 1,
      name: 'Deluxe Room',
      price: '₹2,499',
      image: '/deluxe-room.jpg',
      description: 'Spacious and elegantly designed room with modern amenities for a comfortable stay.',
      features: ['King Size Bed', 'Private Balcony', 'City View', 'Work Desk'],
      amenities: [
        { icon: Wifi, label: 'Free Wi-Fi' },
        { icon: Tv, label: 'Smart TV' },
        { icon: Wind, label: 'AC' },
        { icon: Bath, label: 'Private Bath' }
      ],
      capacity: '2 Adults',
      size: '350 sq ft'
    },
    {
      id: 2,
      name: 'Executive Suite',
      price: '₹3,999',
      image: '/executive-suite.jpg',
      description: 'Luxurious suite with separate living area, perfect for business travelers and special occasions.',
      features: ['Separate Living Room', 'Mini Bar', 'Premium Bedding', 'Executive Lounge Access'],
      amenities: [
        { icon: Wifi, label: 'Free Wi-Fi' },
        { icon: Tv, label: 'Smart TV' },
        { icon: Wind, label: 'AC' },
        { icon: Coffee, label: 'Mini Bar' }
      ],
      capacity: '3 Adults',
      size: '550 sq ft'
    },
    {
      id: 3,
      name: 'Family Room',
      price: '₹4,499',
      image: '/family-room-1.jpg',
      description: 'Ideal for families with extra space, connecting rooms available upon request.',
      features: ['Twin Beds + Sofa Bed', 'Family Entertainment', 'Extra Storage', 'Child-Safe Features'],
      amenities: [
        { icon: Wifi, label: 'Free Wi-Fi' },
        { icon: Tv, label: 'Smart TV' },
        { icon: Wind, label: 'AC' },
        { icon: Users, label: 'Family Friendly' }
      ],
      capacity: '4 Adults + 2 Children',
      size: '450 sq ft'
    },
    {
      id: 4,
      name: 'Premium Suite',
      price: '₹5,999',
      image: '/premium-suite.jpg',
      description: 'Our most luxurious accommodation with panoramic views and premium services.',
      features: ['Panoramic Views', 'Jacuzzi', 'Complimentary Breakfast', '24/7 Butler Service'],
      amenities: [
        { icon: Wifi, label: 'Free Wi-Fi' },
        { icon: Tv, label: 'Smart TV' },
        { icon: Wind, label: 'AC' },
        { icon: Star, label: 'Premium Service' }
      ],
      capacity: '2 Adults',
      size: '650 sq ft'
    }
  ];

  return (
    <section id="rooms" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Rooms & Suites
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our thoughtfully designed accommodations, each offering comfort, 
            style, and modern amenities for an unforgettable stay.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
              {/* Room Image */}
              <div className="relative overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-maroon-600 text-white px-3 py-1 rounded-full font-semibold">
                  {room.price}/night
                </div>
              </div>

              {/* Room Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{room.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Users size={16} className="mr-1" />
                        {room.capacity}
                      </span>
                      <span>{room.size}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{room.description}</p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Room Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {room.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-maroon-600 rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Amenities */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Amenities</h4>
                  <div className="flex space-x-4">
                    {room.amenities.map((amenity, index) => (
                      <div key={index} className="flex flex-col items-center text-center group">
                        <div className="p-2 bg-gray-100 rounded-lg mb-1 group-hover:bg-maroon-100 transition-colors duration-300">
                          <amenity.icon size={20} className="text-gray-600 group-hover:text-maroon-600" />
                        </div>
                        <span className="text-xs text-gray-500">{amenity.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex space-x-3">
                  <button 
                    onClick={scrollToContact}
                    className="flex-1 bg-maroon-600 text-white py-3 rounded-lg font-semibold hover:bg-maroon-700 transition-colors duration-300 cursor-pointer"
                  >
                    Book Now
                  </button>
                  <button 
                    onClick={() => handleViewDetails(room.name)}
                    className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300 cursor-pointer"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Amenities Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Hotel Amenities</h3>
            <p className="text-gray-600">Enjoy these complimentary services during your stay</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Coffee, label: 'Complimentary Breakfast', desc: 'Daily continental breakfast' },
              { icon: Car, label: 'Free Parking', desc: 'Secure parking available' },
              { icon: Wifi, label: 'High-Speed Wi-Fi', desc: 'Free internet throughout' },
              { icon: Users, label: '24/7 Front Desk', desc: 'Always here to help' }
            ].map((amenity, index) => (
              <div key={index} className="text-center group">
                <div className="p-4 bg-gray-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-maroon-100 transition-colors duration-300">
                  <amenity.icon size={32} className="text-gray-600 group-hover:text-maroon-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{amenity.label}</h4>
                <p className="text-sm text-gray-500">{amenity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;