import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomType: 'deluxe',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contact & Booking
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to book your stay? Get in touch with us and we'll ensure your 
            reservation is handled with care and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h3>
            
            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4 group">
                <div className="p-3 bg-maroon-100 rounded-lg group-hover:bg-maroon-600 transition-colors duration-300">
                  <Phone size={24} className="text-maroon-600 group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600">+91-9876-543-210</p>
                  <p className="text-sm text-gray-500">Available 24/7 for bookings and assistance</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="p-3 bg-maroon-100 rounded-lg group-hover:bg-maroon-600 transition-colors duration-300">
                  <Mail size={24} className="text-maroon-600 group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">reservations@grandheritage.com</p>
                  <p className="text-sm text-gray-500">We respond within 2 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="p-3 bg-maroon-100 rounded-lg group-hover:bg-maroon-600 transition-colors duration-300">
                  <MapPin size={24} className="text-maroon-600 group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                  <p className="text-gray-600">123 Heritage Street, City Center</p>
                  <p className="text-sm text-gray-500">Prime location near major attractions</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="p-3 bg-maroon-100 rounded-lg group-hover:bg-maroon-600 transition-colors duration-300">
                  <MessageCircle size={24} className="text-maroon-600 group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                  <p className="text-gray-600">+91-9876-543-210</p>
                  <p className="text-sm text-gray-500">Quick responses and instant booking</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Clock size={24} className="text-maroon-600 mr-3" />
                <h4 className="text-xl font-semibold text-gray-900">Business Hours</h4>
              </div>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Front Desk:</span>
                  <span className="font-semibold">24/7</span>
                </div>
                <div className="flex justify-between">
                  <span>Reservations:</span>
                  <span className="font-semibold">24/7</span>
                </div>
                <div className="flex justify-between">
                  <span>Breakfast:</span>
                  <span>7:00 AM - 10:30 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Check-in:</span>
                  <span>2:00 PM onwards</span>
                </div>
                <div className="flex justify-between">
                  <span>Check-out:</span>
                  <span>Until 12:00 PM</span>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <a
                href="tel:+91-9876-543-210"
                className="flex items-center justify-center space-x-2 bg-maroon-600 text-white py-3 rounded-lg hover:bg-maroon-700 transition-colors duration-300"
              >
                <Phone size={18} />
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors duration-300"
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Book Your Stay</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
                  placeholder="+91-XXXXX-XXXXX"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-2">
                    Check-in Date *
                  </label>
                  <input
                    type="date"
                    id="checkIn"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-2">
                    Check-out Date *
                  </label>
                  <input
                    type="date"
                    id="checkOut"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5+">5+ Guests</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="roomType" className="block text-sm font-medium text-gray-700 mb-2">
                    Room Type
                  </label>
                  <select
                    id="roomType"
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
                  >
                    <option value="deluxe">Deluxe Room</option>
                    <option value="executive">Executive Suite</option>
                    <option value="family">Family Room</option>
                    <option value="premium">Premium Suite</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500 focus:border-transparent"
                  placeholder="Any special requirements or requests..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-maroon-600 text-white py-3 rounded-lg font-semibold hover:bg-maroon-700 transition-colors duration-300"
              >
                <Send size={18} />
                <span>Send Booking Request</span>
              </button>
            </form>

            <p className="mt-4 text-sm text-gray-500 text-center">
              We'll confirm your booking within 2 hours and send you all the details.
            </p>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
          <div className="text-center text-gray-600">
            <MapPin size={48} className="mx-auto mb-4" />
            <p className="text-lg font-semibold">Interactive Map</p>
            <p className="text-sm">Location and nearby attractions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;