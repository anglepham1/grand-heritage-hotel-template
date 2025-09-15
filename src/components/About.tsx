import React from 'react';
import { Heart, Shield, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Personalized Service',
      description: 'Every guest receives individual attention and care tailored to their unique needs and preferences.'
    },
    {
      icon: Shield,
      title: 'Cleanliness & Safety',
      description: 'We maintain the highest standards of hygiene and safety protocols for your peace of mind.'
    },
    {
      icon: Users,
      title: 'Local Expertise',
      description: 'Our knowledgeable staff provides insider tips and recommendations for the best local experiences.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering exceptional hospitality experiences that exceed your expectations.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Grand Heritage
            </h2>
            
            <div className="space-y-6 text-gray-600">
              <p className="text-lg leading-relaxed">
                Welcome to Grand Heritage, where independent hospitality meets modern comfort. 
                As a locally-owned hotel, we pride ourselves on delivering personalized service 
                that reflects the warmth and character of our community.
              </p>
              
              <p className="text-lg leading-relaxed">
                Our story began with a simple vision: to create a home away from home for 
                travelers seeking authentic experiences. Every detail, from our thoughtfully 
                designed rooms to our carefully curated local partnerships, reflects our 
                commitment to exceptional hospitality.
              </p>
              
              <p className="text-lg leading-relaxed">
                Whether you're here for business, leisure, or special occasions, our dedicated 
                team ensures your stay is comfortable, memorable, and uniquely yours. We believe 
                that great hospitality is about more than just accommodation—it's about creating 
                connections and lasting memories.
              </p>
            </div>

            {/* Statistics */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-maroon-600 mb-2">500+</div>
                <div className="text-gray-600">Happy Guests</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-maroon-600 mb-2">4.8</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-maroon-600 mb-2">24/7</div>
                <div className="text-gray-600">Guest Support</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="/hote-lobby.jpg"
              alt="Hotel lobby and reception area"
              className="rounded-2xl shadow-2xl"
            />
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-maroon-600 mb-1">Est. 2018</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do, ensuring every guest experiences 
              the best of our hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
                <div className="p-3 bg-maroon-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-maroon-600 transition-colors duration-300">
                  <value.icon size={28} className="text-maroon-600 group-hover:text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 bg-navy-900 text-white rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            "To provide exceptional hospitality experiences that celebrate local culture, 
            ensure guest comfort, and create lasting memories through personalized service 
            and attention to detail."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;