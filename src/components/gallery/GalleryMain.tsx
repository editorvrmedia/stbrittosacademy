import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Calendar, Users, ArrowRight, Play, Image, Video } from 'lucide-react';

const GalleryMain = () => {
  const [selectedType, setSelectedType] = useState('all');

  const galleryTypes = [
    { id: 'all', name: 'All Media' },
    { id: 'photos', name: 'Photos' },
    { id: 'videos', name: 'Videos' },
    { id: 'albums', name: 'Albums' }
  ];

  const featuredGalleries = [
    {
      id: 1,
      title: 'Annual Day 2024',
      type: 'album',
      description: 'Highlights from our spectacular annual day celebration',
      thumbnail: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      itemCount: 45,
      date: '2024-01-15',
      category: 'Events'
    },
    {
      id: 2,
      title: 'Science Fair Exhibition',
      type: 'photos',
      description: 'Student innovations and scientific discoveries on display',
      thumbnail: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      itemCount: 32,
      date: '2024-01-10',
      category: 'Academic'
    },
    {
      id: 3,
      title: 'Sports Championship 2024',
      type: 'video',
      description: 'Action-packed moments from our inter-house sports competition',
      thumbnail: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      itemCount: 1,
      duration: '12:45',
      date: '2024-01-08',
      category: 'Sports'
    },
    {
      id: 4,
      title: 'Cultural Festival',
      type: 'album',
      description: 'Celebrating diversity through music, dance, and art',
      thumbnail: 'https://images.pexels.com/photos/7520391/pexels-photo-7520391.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      itemCount: 67,
      date: '2024-01-05',
      category: 'Cultural'
    },
    {
      id: 5,
      title: 'Campus Life Moments',
      type: 'photos',
      description: 'Candid moments capturing the essence of daily campus life',
      thumbnail: 'https://images.pexels.com/photos/8471904/pexels-photo-8471904.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      itemCount: 28,
      date: '2024-01-03',
      category: 'Campus Life'
    },
    {
      id: 6,
      title: 'Graduation Ceremony 2023',
      type: 'video',
      description: 'Celebrating our graduates as they embark on new journeys',
      thumbnail: 'https://images.pexels.com/photos/8466666/pexels-photo-8466666.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      itemCount: 1,
      duration: '25:30',
      date: '2023-12-20',
      category: 'Graduation'
    }
  ];

  const recentUploads = [
    {
      title: 'Mathematics Olympiad Winners',
      thumbnail: 'https://images.pexels.com/photos/6238003/pexels-photo-6238003.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      date: '2024-01-18',
      type: 'photo'
    },
    {
      title: 'Art Exhibition Opening',
      thumbnail: 'https://images.pexels.com/photos/1784578/pexels-photo-1784578.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      date: '2024-01-16',
      type: 'photo'
    },
    {
      title: 'Environmental Day Activities',
      thumbnail: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      date: '2024-01-14',
      type: 'photo'
    },
    {
      title: 'Computer Lab Session',
      thumbnail: 'https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      date: '2024-01-12',
      type: 'photo'
    }
  ];

  const filteredGalleries = selectedType === 'all' 
    ? featuredGalleries 
    : featuredGalleries.filter(gallery => {
        if (selectedType === 'videos') return gallery.type === 'video';
        if (selectedType === 'photos') return gallery.type === 'photos';
        if (selectedType === 'albums') return gallery.type === 'album';
        return true;
      });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Gallery Collection</h1>
          <p className="text-xl text-white/90 mb-8">Explore our diverse collection of photos and memorable moments at <span className="font-revue">St. Britto's Academy</span>.</p>
        </div>
      </section>

      {/* Gallery Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="flex items-center justify-center">
              <Image className="h-8 w-8 text-indigo-600 mr-3" />
              <div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-gray-600">Photos</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Video className="h-8 w-8 text-indigo-600 mr-3" />
              <div>
                <div className="text-2xl font-bold text-gray-900">25+</div>
                <div className="text-gray-600">Videos</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Camera className="h-8 w-8 text-indigo-600 mr-3" />
              <div>
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-gray-600">Albums</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Calendar className="h-8 w-8 text-indigo-600 mr-3" />
              <div>
                <div className="text-2xl font-bold text-gray-900">2024</div>
                <div className="text-gray-600">Academic Year</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Type Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {galleryTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedType === type.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                }`}
              >
                {type.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Galleries */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Collections</h2>
            <p className="text-xl text-gray-600">Discover our most popular and recent gallery collections</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGalleries.map((gallery) => (
              <div key={gallery.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="relative">
                  <img
                    src={gallery.thumbnail}
                    alt={gallery.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      gallery.type === 'video' ? 'bg-red-100 text-red-800' :
                      gallery.type === 'album' ? 'bg-blue-100 text-blue-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {gallery.type === 'video' ? 'Video' : gallery.type === 'album' ? 'Album' : 'Photos'}
                    </span>
                  </div>
                  {gallery.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black bg-opacity-50 rounded-full p-4">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  )}
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                    {gallery.type === 'video' ? gallery.duration : `${gallery.itemCount} items`}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      gallery.category === 'Events' ? 'bg-purple-100 text-purple-800' :
                      gallery.category === 'Academic' ? 'bg-blue-100 text-blue-800' :
                      gallery.category === 'Sports' ? 'bg-green-100 text-green-800' :
                      gallery.category === 'Cultural' ? 'bg-orange-100 text-orange-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {gallery.category}
                    </span>
                    <span className="text-gray-500 text-sm">{formatDate(gallery.date)}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{gallery.title}</h3>
                  <p className="text-gray-600 mb-4">{gallery.description}</p>
                  
                  <Link
                    to={gallery.type === 'video' ? '#' : '/gallery/photos'}
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold transition-colors duration-300"
                  >
                    {gallery.type === 'video' ? 'Watch Video' : 'View Collection'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Uploads */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Recent Uploads</h2>
            <Link
              to="/gallery/photos"
              className="text-indigo-600 hover:text-indigo-700 font-semibold flex items-center"
            >
              View All Photos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentUploads.map((upload, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={upload.thumbnail}
                    alt={upload.title}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <Camera className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="mt-3">
                  <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                    {upload.title}
                  </h3>
                  <p className="text-sm text-gray-500">{formatDate(upload.date)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-xl text-gray-600">Explore our gallery collections by category</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Academic Activities',
                description: 'Classroom learning, laboratories, and educational events',
                image: 'https://images.pexels.com/photos/8466666/pexels-photo-8466666.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
                count: 120
              },
              {
                title: 'Sports & Athletics',
                description: 'Competitions, training, and sporting achievements',
                image: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
                count: 85
              },
              {
                title: 'Cultural Programs',
                description: 'Music, dance, drama, and artistic performances',
                image: 'https://images.pexels.com/photos/7520391/pexels-photo-7520391.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
                count: 95
              },
              {
                title: 'Campus Life',
                description: 'Daily activities and candid moments around campus',
                image: 'https://images.pexels.com/photos/8423032/pexels-photo-8423032.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
                count: 150
              },
              {
                title: 'Special Events',
                description: 'Annual day, celebrations, and special occasions',
                image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
                count: 110
              },
              {
                title: 'Community Service',
                description: 'Outreach programs and social responsibility initiatives',
                image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
                count: 65
              }
            ].map((category, index) => (
              <Link
                key={index}
                to="/gallery/photos"
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
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
                    <div className="flex items-center text-white text-sm">
                      <Camera className="h-4 w-4 mr-1" />
                      <span>{category.count} items</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Contribute to Our Gallery</h2>
          <p className="text-xl mb-8">
            Have photos or videos from school events? Share them with us to be featured in our gallery collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:gallery@stbrittosacademy.edu"
              className="bg-white text-indigo-700 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Submit Media
            </a>
            <a
              href="/gallery/photos"
              className="border-2 border-white text-white hover:bg-white hover:text-indigo-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Browse Photos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryMain;