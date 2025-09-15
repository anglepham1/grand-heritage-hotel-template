import React from 'react';
import { Clock, Users, Utensils, Wine, Coffee, Star } from 'lucide-react';

const Dining: React.FC = () => {
  const handleViewMenu = () => {
    // In a real app, this would open a menu PDF or navigate to a menu page
    alert('Menu viewing functionality would be implemented here. This could open a PDF menu, navigate to a dedicated menu page, or show an interactive menu.');
  };

  const handleReserveTable = () => {
    // Scroll to contact section for reservations
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadMenu = () => {
    // In a real app, this would download a PDF menu
    alert('Menu download functionality would be implemented here. This would typically download a PDF version of the restaurant menu.');
  };

  const diningOptions = [
    {
      name: 'Heritage Restaurant',
      type: 'Fine Dining',
      cuisine: 'Multi-Cuisine',
      timing: '7:00 AM - 11:00 PM',
      capacity: '80 Guests',
      description: 'Experience culinary excellence in our elegant restaurant featuring authentic North Indian delicacies alongside international favorites.',
      features: ['À la carte menu', 'Chef specials', 'Private dining', 'Wine selection']
    },
    {
      name: 'Coffee Lounge',
      type: 'Casual Dining',
      cuisine: 'Café & Snacks',
      timing: '6:00 AM - 12:00 AM',
      capacity: '40 Guests',
      description: 'Relax in our cozy coffee lounge with premium beverages, light meals, and comfortable seating perfect for meetings or leisure.',
      features: ['Specialty coffee', 'Fresh pastries', 'Light meals', 'Free Wi-Fi']
    }
  ];

  const menuHighlights = [
    {
      category: 'North Indian Specialties',
      items: ['Dal Makhani', 'Butter Chicken', 'Paneer Tikka Masala', 'Biryani Varieties']
    },
    {
      category: 'Continental Favorites',
      items: ['Grilled Chicken', 'Pasta Selection', 'Fresh Salads', 'Sandwiches & Wraps']
    },
    {
      category: 'Breakfast Delights',
      items: ['Continental Breakfast', 'Indian Breakfast', 'Fresh Fruits', 'Healthy Options']
    }
  ];

  return (
    <section id="dining" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Dining Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Savor exceptional culinary experiences in our elegant dining spaces, 
            where authentic flavors meet contemporary presentation.
          </p>
        </div>

        {/* Restaurant Showcase */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/restaurent-area copy.jpg"
              alt="Heritage Restaurant Interior"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-4xl font-bold mb-4">Heritage Restaurant</h3>
                <p className="text-xl mb-6">Where Every Meal is a Celebration</p>
                <button 
                  onClick={handleViewMenu}
                  className="bg-maroon-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-maroon-700 transition-colors duration-300 cursor-pointer"
                >
                  View Menu
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dining Options */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {diningOptions.map((option, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{option.name}</h3>
                <span className="bg-maroon-100 text-maroon-800 px-3 py-1 rounded-full text-sm font-medium">
                  {option.type}
                </span>
              </div>

              <p className="text-gray-600 mb-6">{option.description}</p>

              {/* Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center text-gray-700">
                  <Utensils size={18} className="text-maroon-600 mr-2" />
                  <span className="text-sm">{option.cuisine}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Clock size={18} className="text-maroon-600 mr-2" />
                  <span className="text-sm">{option.timing}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Users size={18} className="text-maroon-600 mr-2" />
                  <span className="text-sm">{option.capacity}</span>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-2">
                {option.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-maroon-600 rounded-full mr-2" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Menu Highlights */}
        <div className="bg-navy-900 rounded-2xl p-8 text-white mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Menu Highlights</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover our carefully curated selection of dishes that blend traditional 
              flavors with modern culinary techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuHighlights.map((menu, index) => (
              <div key={index} className="text-center">
                <h4 className="text-xl font-semibold mb-4 text-yellow-300">{menu.category}</h4>
                <ul className="space-y-2">
                  {menu.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Special Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Wine,
              title: 'Room Service',
              description: '24/7 in-room dining with full menu available',
              color: 'bg-purple-100 text-purple-600'
            },
            {
              icon: Coffee,
              title: 'Complimentary Breakfast',
              description: 'Daily continental breakfast included in stay',
              color: 'bg-orange-100 text-orange-600'
            },
            {
              icon: Users,
              title: 'Private Dining',
              description: 'Exclusive dining experiences for special occasions',
              color: 'bg-blue-100 text-blue-600'
            },
            {
              icon: Star,
              title: 'Chef Specials',
              description: 'Daily curated dishes featuring seasonal ingredients',
              color: 'bg-yellow-100 text-yellow-600'
            }
          ].map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
              <div className={`p-3 rounded-lg ${service.color} w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={24} />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h4>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Reservation CTA */}
        <div className="mt-16 text-center bg-gray-50 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Make a Reservation</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Reserve your table for an unforgettable dining experience. Our team is ready 
            to accommodate special dietary requirements and preferences.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={handleReserveTable}
              className="bg-maroon-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-maroon-700 transition-colors duration-300 cursor-pointer"
            >
              Reserve Table
            </button>
            <button 
              onClick={handleDownloadMenu}
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-300 cursor-pointer"
            >
              Download Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dining;