import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, Camera, Video, Image, ArrowRight } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'campus', name: 'Campus Life' },
    { id: 'sports', name: 'Sports' },
    { id: 'events', name: 'Events' },
    { id: 'academics', name: 'Academics' },
    { id: 'arts', name: 'Arts & Culture' }
  ];

  const photos = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/8471904/pexels-photo-8471904.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'campus',
      title: 'Students in Library',
      description: 'Students studying in our modern library facility'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/5427659/pexels-photo-5427659.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'sports',
      title: 'Soccer Team Victory',
      description: 'Our soccer team celebrating their championship win'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/8466666/pexels-photo-8466666.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'academics',
      title: 'Science Class',
      description: 'Students conducting experiments in chemistry lab'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/8423032/pexels-photo-8423032.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'campus',
      title: 'School Building',
      description: 'Main academic building and courtyard'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'events',
      title: 'Graduation Ceremony',
      description: 'Annual graduation celebration'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/1784578/pexels-photo-1784578.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'arts',
      title: 'Art Exhibition',
      description: 'Student artwork display in main gallery'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'academics',
      title: 'Science Fair',
      description: 'Students presenting their research projects'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'sports',
      title: 'Basketball Game',
      description: 'Intense basketball match in our gymnasium'
    }
  ];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const openLightbox = (imageId: number) => {
    setLightboxImage(imageId);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (lightboxImage === null) return;
    
    const currentIndex = filteredPhotos.findIndex(photo => photo.id === lightboxImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredPhotos.length - 1;
    } else {
      newIndex = currentIndex < filteredPhotos.length - 1 ? currentIndex + 1 : 0;
    }
    
    setLightboxImage(filteredPhotos[newIndex].id);
  };

  const currentPhoto = lightboxImage ? photos.find(photo => photo.id === lightboxImage) : null;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-700 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Media Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Explore the vibrant life at St. Brittos Academy through our collection of photos, videos, and galleries showcasing student achievements, campus events, and daily activities.
          </p>
          
          {/* Quick Links to Subpages */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/gallery/photos"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center"
            >
              <Image className="h-5 w-5 mr-2" />
              Photo Gallery
            </Link>
            <Link
              to="/gallery/videos"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center"
            >
              <Camera className="h-5 w-5 mr-2" />
              Video Collections
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Media */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Media</h2>
            <p className="text-xl text-gray-600">Highlights from our recent events and activities</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Featured Video */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop"
                  alt="Annual Day Celebration"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-indigo-600 bg-opacity-80 rounded-full p-4 cursor-pointer hover:bg-opacity-100 transition-all duration-300">
                    <Video className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured Video
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Annual Day Celebration 2024</h3>
                <p className="text-gray-600 mb-4">
                  Highlights from our spectacular annual day celebration featuring performances from students across all grades.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">Duration: 5:32</span>
                  <button className="text-indigo-600 hover:text-indigo-700 font-semibold flex items-center">
                    Watch Video
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Featured Album */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
              <div className="relative">
                <div className="grid grid-cols-2 gap-1">
                  <img
                    src="https://images.pexels.com/photos/8466666/pexels-photo-8466666.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                    alt="Science Exhibition"
                    className="w-full h-32 object-cover"
                  />
                  <img
                    src="https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                    alt="Science Exhibition"
                    className="w-full h-32 object-cover"
                  />
                  <img
                    src="https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                    alt="Science Exhibition"
                    className="w-full h-32 object-cover"
                  />
                  <div className="relative">
                    <img
                      src="https://images.pexels.com/photos/8471904/pexels-photo-8471904.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                      alt="Science Exhibition"
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">+24 more</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured Album
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Science Exhibition 2024</h3>
                <p className="text-gray-600 mb-4">
                  Our annual science exhibition showcasing innovative projects and experiments by our talented students.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">28 Photos</span>
                  <Link
                    to="/gallery/photos"
                    className="text-indigo-600 hover:text-indigo-700 font-semibold flex items-center"
                  >
                    View Album
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              to="/gallery/videos"
              className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Explore All Collections
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Photos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Recent Photos</h2>
            <Link
              to="/gallery/photos"
              className="text-indigo-600 hover:text-indigo-700 font-semibold flex items-center"
            >
              View All Photos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {photos.slice(0, 8).map((photo) => (
              <div
                key={photo.id}
                className="group cursor-pointer"
                onClick={() => openLightbox(photo.id)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                    <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-bold text-lg">{photo.title}</h3>
                      <p className="text-sm opacity-90">{photo.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && currentPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-300"
            >
              <X className="h-6 w-6" />
            </button>
            
            <button
              onClick={() => navigateLightbox('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={() => navigateLightbox('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            
            <img
              src={currentPhoto.src}
              alt={currentPhoto.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
              <h3 className="text-xl font-bold mb-2">{currentPhoto.title}</h3>
              <p className="text-sm opacity-90">{currentPhoto.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Gallery Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-xl text-gray-600">Explore our media collections by category</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Campus Life',
                description: 'Explore our beautiful campus and daily student activities',
                image: 'https://images.pexels.com/photos/8423032/pexels-photo-8423032.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
                link: '/gallery/photos'
              },
              {
                title: 'Academic Activities',
                description: 'Classroom learning, laboratories, and educational events',
                image: 'https://images.pexels.com/photos/8466666/pexels-photo-8466666.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
                link: '/gallery/photos'
              },
              {
                title: 'Sports & Athletics',
                description: 'Competitions, training, and sporting achievements',
                image: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
                link: '/gallery/photos'
              },
              {
                title: 'Cultural Programs',
                description: 'Music, dance, drama, and artistic performances',
                image: 'https://images.pexels.com/photos/7520391/pexels-photo-7520391.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
                link: '/gallery/photos'
              },
              {
                title: 'Special Events',
                description: 'Annual day, celebrations, and special occasions',
                image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
                link: '/gallery/photos'
              },
              {
                title: 'Video Gallery',
                description: 'Watch videos from various school events and activities',
                image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
                link: '/gallery/videos'
              }
            ].map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="group bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{category.title}</h3>
                    <p className="text-white text-sm opacity-90">{category.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Want to Be Featured?</h2>
          <p className="text-xl mb-8">
            Join our vibrant school community and become part of our story. Your achievements and moments could be featured in our next gallery update.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admissions"
              className="bg-white text-indigo-700 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Apply Now
            </a>
            <a
              href="mailto:gallery@stbrittosacademy.edu"
              className="border-2 border-white text-white hover:bg-white hover:text-indigo-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Submit Media
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;