import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Delhi',
      rating: 5,
      text: 'Exceptional service and beautiful rooms! The staff went above and beyond to make our anniversary celebration special. The attention to detail was remarkable.',
      date: 'December 2024'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      location: 'Mumbai',
      rating: 5,
      text: 'Perfect location with excellent amenities. The breakfast was delicious and the Wi-Fi was fast - ideal for my business trip. Highly recommend!',
      date: 'November 2024'
    },
    {
      id: 3,
      name: 'Anita Patel',
      location: 'Bangalore',
      rating: 5,
      text: 'Clean, comfortable, and affordable luxury. Our family loved the spacious family room and the kids enjoyed the local attractions the staff recommended.',
      date: 'November 2024'
    },
    {
      id: 4,
      name: 'Vikram Singh',
      location: 'Jaipur',
      rating: 5,
      text: 'Outstanding hospitality! The team made us feel like family. The room was spotless and the 24/7 service was incredibly helpful during our late arrival.',
      date: 'October 2024'
    },
    {
      id: 5,
      name: 'Meera Gupta',
      location: 'Pune',
      rating: 5,
      text: 'A gem of a hotel! Beautiful interiors, warm staff, and great value for money. The complimentary breakfast was a wonderful start to each day.',
      date: 'October 2024'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Guest Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our valued guests have to say 
            about their experiences at Grand Heritage.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 relative">
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-maroon-200">
                <Quote size={32} />
              </div>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Guest Info */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-16 bg-navy-900 rounded-2xl p-8 text-center text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">4.9/5</div>
              <div className="text-gray-300">Overall Rating</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-gray-300">Happy Guests</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">98%</div>
              <div className="text-gray-300">Would Recommend</div>
            </div>
          </div>
          
          <div className="mt-8">
            <p className="text-lg text-gray-300 mb-4">Ready to create your own amazing experience?</p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-maroon-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-maroon-700 transition-colors duration-300 cursor-pointer"
            >
              Book Your Stay Now
            </button>
          </div>
        </div>

        {/* Review Platforms */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Find us on popular review platforms:</p>
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <div className="flex text-yellow-400 mr-2">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-current" />)}
              </div>
              <span>Google Reviews</span>
            </div>
            <div className="flex items-center">
              <div className="flex text-yellow-400 mr-2">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-current" />)}
              </div>
              <span>TripAdvisor</span>
            </div>
            <div className="flex items-center">
              <div className="flex text-yellow-400 mr-2">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-current" />)}
              </div>
              <span>Booking.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;