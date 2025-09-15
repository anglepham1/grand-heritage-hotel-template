import React from 'react';
import { Shield, Star, Users, Clock, Wifi, Car, Coffee, Phone } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Spotless Cleanliness',
      description: 'Rigorous cleaning protocols and sanitization standards ensure your safety and comfort.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Star,
      title: 'Affordable Luxury',
      description: 'Premium amenities and services at competitive prices without compromising quality.',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: Users,
      title: 'Friendly Staff',
      description: 'Warm, professional team dedicated to making your stay memorable and hassle-free.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Clock,
      title: '24/7 Service',
      description: 'Round-the-clock front desk, room service, and assistance whenever you need it.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Wifi,
      title: 'High-Speed Internet',
      description: 'Complimentary fast Wi-Fi throughout the hotel for work and entertainment.',
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      icon: Car,
      title: 'Free Parking',
      description: 'Secure, complimentary parking available for all guests during their stay.',
      color: 'bg-gray-100 text-gray-600'
    },
    {
      icon: Coffee,
      title: 'Complimentary Breakfast',
      description: 'Start your day with our delicious continental breakfast included in your stay.',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: Phone,
      title: 'Easy Booking',
      description: 'Simple online booking process with instant confirmation and flexible policies.',
      color: 'bg-pink-100 text-pink-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the advantages that make Grand Heritage the preferred choice for 
            discerning travelers seeking quality, comfort, and exceptional value.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
              {/* Icon */}
              <div className={`p-3 rounded-lg ${feature.color} w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon size={24} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Content Side */}
            <div className="p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Experience the Difference
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                At Grand Heritage, we don't just provide accommodation—we create experiences. 
                Our commitment to excellence, attention to detail, and personalized service 
                ensure that every moment of your stay exceeds expectations.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-maroon-600 rounded-full mr-3"></div>
                  <span>Personalized guest services tailored to your preferences</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-maroon-600 rounded-full mr-3"></div>
                  <span>Local expertise and insider recommendations</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-maroon-600 rounded-full mr-3"></div>
                  <span>Flexible booking policies and special packages</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-maroon-600 rounded-full mr-3"></div>
                  <span>Commitment to sustainability and community</span>
                </div>
              </div>

              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-maroon-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-maroon-700 transition-colors duration-300 transform hover:scale-105 cursor-pointer"
              >
                Book Direct & Save
              </button>
            </div>

            {/* Image Side */}
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Hotel staff providing excellent service"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-maroon-600/20"></div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">Trusted by hundreds of satisfied guests</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-gray-500">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm">Happy Guests</div>
            </div>
            <div className="text-gray-500">
              <div className="text-2xl font-bold">4.9★</div>
              <div className="text-sm">Average Rating</div>
            </div>
            <div className="text-gray-500">
              <div className="text-2xl font-bold">98%</div>
              <div className="text-sm">Satisfaction Rate</div>
            </div>
            <div className="text-gray-500">
              <div className="text-2xl font-bold">5+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;