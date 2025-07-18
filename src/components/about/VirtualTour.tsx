import React, { useState } from 'react';
import { Play, Pause, RotateCcw, ZoomIn, ZoomOut, MapPin, Camera } from 'lucide-react';
import { motion } from 'framer-motion';

const VirtualTour = () => {
  const [currentLocation, setCurrentLocation] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const tourLocations = [
    {
      name: 'Main Entrance & Reception',
      description: 'Welcome to St. Britto\'s Academy. Our grand entrance showcases the school\'s heritage and modern facilities.',
      image: 'https://images.pexels.com/photos/8423032/pexels-photo-8423032.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      highlights: ['Reception Area', 'Visitor Lounge', 'School History Display', 'Administrative Offices']
    },
    {
      name: 'Smart Classrooms',
      description: 'Modern classrooms equipped with interactive whiteboards, projectors, and comfortable seating arrangements.',
      image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      highlights: ['Interactive Whiteboards', 'Audio-Visual Systems', 'Ergonomic Furniture', 'Natural Lighting']
    },
    {
      name: 'Science Laboratories',
      description: 'State-of-the-art laboratories for Physics, Chemistry, and Biology with modern equipment and safety features.',
      image: 'https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      highlights: ['Modern Equipment', 'Safety Systems', 'Research Facilities', 'Digital Microscopes']
    },
    {
      name: 'Library & Digital Resources',
      description: 'Extensive library with over 25,000 books, digital resources, and quiet study areas for students.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      highlights: ['25,000+ Books', 'Digital Library', 'Study Areas', 'Research Databases']
    },
    {
      name: 'Computer Laboratory',
      description: 'Advanced computer lab with latest hardware and software for digital literacy and programming education.',
      image: 'https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      highlights: ['Latest Hardware', 'Programming Software', 'Internet Access', 'Multimedia Tools']
    },
    {
      name: 'Sports Complex',
      description: 'Multi-purpose sports complex with basketball, volleyball courts, and indoor games facilities.',
      image: 'https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      highlights: ['Basketball Court', 'Volleyball Court', 'Indoor Games', 'Fitness Equipment']
    },
    {
      name: 'Art & Music Studios',
      description: 'Creative spaces for artistic expression with professional equipment and acoustically designed rooms.',
      image: 'https://images.pexels.com/photos/1784578/pexels-photo-1784578.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      highlights: ['Art Studios', 'Music Rooms', 'Instruments', 'Recording Equipment']
    },
    {
      name: 'Auditorium',
      description: '500-seat auditorium with professional lighting and sound systems for cultural events and performances.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      highlights: ['500 Seats', 'Professional Lighting', 'Sound Systems', 'Stage Equipment']
    },
    {
      name: 'Cafeteria',
      description: 'Hygienic cafeteria serving nutritious meals and snacks in a comfortable dining environment.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      highlights: ['Nutritious Meals', 'Hygienic Kitchen', 'Comfortable Seating', 'Healthy Options']
    },
    {
      name: 'Playground & Outdoor Facilities',
      description: 'Spacious playground with football field, cricket pitch, and athletic track for sports activities.',
      image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      highlights: ['Football Field', 'Cricket Pitch', 'Athletic Track', 'Outdoor Games']
    }
  ];

  const nextLocation = () => {
    setCurrentLocation((prev) => (prev + 1) % tourLocations.length);
  };

  const prevLocation = () => {
    setCurrentLocation((prev) => (prev - 1 + tourLocations.length) % tourLocations.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="pt-20">
      {/* Hero/Intro Section */}
      <motion.section
        className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        viewport={{ once: true, amount: 0.7 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Virtual Tour</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Experience our campus virtually and discover the world-class facilities, vibrant learning spaces, and nurturing environment that makes St. Britto's Academy special.
          </p>
        </div>
      </motion.section>

      {/* Virtual Tour Interface */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            
            {/* Main Tour Display */}
            <div className="relative">
              <img
                src={tourLocations[currentLocation].image}
                alt={tourLocations[currentLocation].name}
                className="w-full h-96 lg:h-[600px] object-cover"
              />
              
              {/* Tour Controls Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-70 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={togglePlayPause}
                      className="bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-full transition-colors duration-300"
                    >
                      {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                    </button>
                    <div className="text-white">
                      <h3 className="text-lg font-bold">{tourLocations[currentLocation].name}</h3>
                      <p className="text-sm opacity-80">{currentLocation + 1} of {tourLocations.length}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded transition-all duration-300">
                      <ZoomIn className="h-5 w-5" />
                    </button>
                    <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded transition-all duration-300">
                      <ZoomOut className="h-5 w-5" />
                    </button>
                    <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded transition-all duration-300">
                      <RotateCcw className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevLocation}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextLocation}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Location Information */}
            <div className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{tourLocations[currentLocation].name}</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {tourLocations[currentLocation].description}
                  </p>
                  
                  <div className="flex items-center text-cyan-600 mb-4">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span className="font-semibold">Location {currentLocation + 1} of {tourLocations.length}</span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Highlights</h3>
                  <ul className="space-y-3">
                    {tourLocations[currentLocation].highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center">
                        <Camera className="h-5 w-5 text-cyan-600 mr-3" />
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Navigation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tour Locations</h2>
            <p className="text-xl text-gray-600">Click on any location to jump directly to that area</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {tourLocations.map((location, index) => (
              <button
                key={index}
                onClick={() => setCurrentLocation(index)}
                className={`p-4 rounded-xl text-left transition-all duration-300 ${
                  currentLocation === index
                    ? 'bg-cyan-600 text-white shadow-lg'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                }`}
              >
                <div className="text-sm font-semibold mb-1">Location {index + 1}</div>
                <div className="text-sm">{location.name}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tour Features</h2>
            <p className="text-xl text-gray-600">Enhanced virtual experience with interactive elements</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Camera,
                title: '360° Views',
                description: 'Immersive 360-degree views of all major facilities and areas'
              },
              {
                icon: MapPin,
                title: 'Interactive Map',
                description: 'Navigate through campus with our interactive location map'
              },
              {
                icon: ZoomIn,
                title: 'Zoom & Explore',
                description: 'Zoom in to see detailed views of equipment and facilities'
              },
              {
                icon: Play,
                title: 'Guided Tour',
                description: 'Auto-play mode with narrated descriptions of each location'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <feature.icon className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-cyan-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Visit in Person?</h2>
          <p className="text-xl mb-8">
            While our virtual tour gives you a great overview, nothing beats experiencing our campus firsthand. Schedule a personal visit to meet our faculty and see our facilities up close.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admissions"
              className="bg-white text-cyan-700 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Schedule Campus Visit
            </a>
            <a
              href="/about/infrastructure"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Learn About Infrastructure
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VirtualTour;