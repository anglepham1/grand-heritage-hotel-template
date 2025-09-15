import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: '/hote-lobby.jpg',
      alt: 'Hotel Lobby',
      category: 'Lobby & Common Areas'
    },
    {
      src: '/executive-suite.jpg',
      alt: 'Executive Suite',
      category: 'Rooms & Suites'
    },
    {
      src: 'https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Restaurant',
      category: 'Dining'
    },
    {
      src: '/deluxe-room.jpg',
      alt: 'Deluxe Room',
      category: 'Rooms & Suites'
    },
    {
      src: 'https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Hotel Exterior',
      category: 'Exterior'
    },
    {
      src: '/premium-suite.jpg',
      alt: 'Premium Suite',
      category: 'Rooms & Suites'
    },
    {
      src: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Conference Room',
      category: 'Business Center'
    },
    {
      src: '/family-room-1.jpg',
      alt: 'Family Room',
      category: 'Rooms & Suites'
    },
    {
      src: '/restaurent-area copy.jpg',
      alt: 'Fine Dining Restaurant',
      category: 'Dining'
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a virtual tour of our beautiful hotel spaces, from elegantly designed rooms 
            to inviting common areas that create the perfect ambiance for your stay.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer overflow-hidden rounded-xl ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  index === 0 ? 'h-96 md:h-full' : 'h-48'
                }`}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-lg font-semibold mb-1">{image.alt}</div>
                  <div className="text-sm text-gray-300">{image.category}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-300 z-10"
            >
              <X size={32} />
            </button>

            {/* Previous Button */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300 z-10"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300 z-10"
            >
              <ChevronRight size={32} />
            </button>

            {/* Image */}
            <div className="max-w-4xl max-h-full">
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="max-w-full max-h-full object-contain"
              />
              
              {/* Image Info */}
              <div className="text-center text-white mt-4">
                <div className="text-xl font-semibold">{images[selectedImage].alt}</div>
                <div className="text-gray-300">{images[selectedImage].category}</div>
                <div className="text-sm text-gray-400 mt-2">
                  {selectedImage + 1} of {images.length}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-maroon-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-maroon-700 transition-colors duration-300 transform hover:scale-105 cursor-pointer"
          >
            Schedule a Virtual Tour
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;