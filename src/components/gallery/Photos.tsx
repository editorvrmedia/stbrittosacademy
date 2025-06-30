import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, Calendar, Users } from 'lucide-react';

const Photos = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'campus', name: 'Campus Life' },
    { id: 'events', name: 'School Events' },
    { id: 'academics', name: 'Academic Activities' },
    { id: 'sports', name: 'Sports & Athletics' },
    { id: 'cultural', name: 'Cultural Programs' }
  ];

  const photos = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/8471904/pexels-photo-8471904.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'academics',
      title: 'Science Laboratory Session',
      description: 'Students conducting experiments in our modern chemistry laboratory',
      date: '2024-01-15',
      photographer: 'School Photography Team'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/8466666/pexels-photo-8466666.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'academics',
      title: 'Interactive Classroom Learning',
      description: 'Students engaged in collaborative learning activities',
      date: '2024-01-12',
      photographer: 'School Photography Team'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/8423032/pexels-photo-8423032.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'campus',
      title: 'Beautiful Campus Architecture',
      description: 'Main academic building showcasing our modern infrastructure',
      date: '2024-01-10',
      photographer: 'Architecture Documentation'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'sports',
      title: 'Basketball Championship',
      description: 'Our team in action during the inter-school basketball tournament',
      date: '2024-01-08',
      photographer: 'Sports Department'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'events',
      title: 'Annual Day Celebration',
      description: 'Students performing during our grand annual day celebration',
      date: '2024-01-05',
      photographer: 'Event Photography'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/7520391/pexels-photo-7520391.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'cultural',
      title: 'Music Concert Performance',
      description: 'School orchestra performing at the winter music concert',
      date: '2024-01-03',
      photographer: 'Cultural Department'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'events',
      title: 'Science Fair Exhibition',
      description: 'Students presenting their innovative science projects',
      date: '2023-12-28',
      photographer: 'Science Department'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'events',
      title: 'Community Service Day',
      description: 'Students participating in environmental conservation activities',
      date: '2023-12-25',
      photographer: 'Community Service Team'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/1784578/pexels-photo-1784578.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'cultural',
      title: 'Art Exhibition Opening',
      description: 'Student artwork displayed in our main gallery space',
      date: '2023-12-22',
      photographer: 'Art Department'
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'academics',
      title: 'Computer Programming Class',
      description: 'Students learning coding in our state-of-the-art computer lab',
      date: '2023-12-20',
      photographer: 'Technology Department'
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'campus',
      title: 'Campus Garden',
      description: 'Students enjoying break time in our beautiful campus garden',
      date: '2023-12-18',
      photographer: 'Campus Life'
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/6238003/pexels-photo-6238003.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'academics',
      title: 'Mathematics Workshop',
      description: 'Interactive mathematics learning session with visual aids',
      date: '2023-12-15',
      photographer: 'Mathematics Department'
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
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Photo Gallery</h1>
          <p className="text-xl text-white/90 mb-8">Capturing the vibrant moments and memories of life at <span className="font-revue">St. Britto's Academy</span>.</p>
        </div>
      </section>

      {/* Gallery Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center">
              <Camera className="h-8 w-8 text-purple-600 mr-3" />
              <div>
                <div className="text-2xl font-bold text-gray-900">{photos.length}+</div>
                <div className="text-gray-600">Photos</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Calendar className="h-8 w-8 text-purple-600 mr-3" />
              <div>
                <div className="text-2xl font-bold text-gray-900">2024</div>
                <div className="text-gray-600">Academic Year</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Users className="h-8 w-8 text-purple-600 mr-3" />
              <div>
                <div className="text-2xl font-bold text-gray-900">1000+</div>
                <div className="text-gray-600">Students Featured</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Sports & Athletics Section – School Events */}
      <section className="py-16 bg-gray-50 animate-fade-in" style={{ animation: 'fadeIn 1s ease' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sports & Athletics – School Events</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              {
                id: 2001,
                src: '/My Gallery Photos/IMAGES/SPORTS & ALTLETICS/Screenshot_2024_0702_115337.jpg',
                caption: 'Winners with Trophy',
              },
              {
                id: 2002,
                src: '/My Gallery Photos/IMAGES/SPORTS & ALTLETICS/IMG_1065.jpg',
                caption: 'Football Match',
              },
              {
                id: 2003,
                src: '/My Gallery Photos/IMAGES/SPORTS & ALTLETICS/IMG_2025.jpg',
                caption: 'Chess Practice',
              },
              {
                id: 2004,
                src: '/My Gallery Photos/IMAGES/SPORTS & ALTLETICS/DSC0146.jpg',
                caption: 'Athletics in Action',
              },
              {
                id: 2005,
                src: '/My Gallery Photos/IMAGES/SPORTS & ALTLETICS/DSC0060.jpg',
                caption: 'Athletics in Action',
              },
              {
                id: 2006,
                src: '/My Gallery Photos/IMAGES/SPORTS & ALTLETICS/DSC0129.jpg',
                caption: 'Athletics in Action',
              },
              {
                id: 2007,
                src: '/My Gallery Photos/IMAGES/SPORTS & ALTLETICS/DSC0128.jpg',
                caption: 'Athletics in Action',
              },
            ].map((img) => (
              <div key={img.id} className="flex flex-col items-center cursor-pointer group transition-transform duration-300 hover:scale-105" onClick={() => setLightboxImage(img.id)}>
                <div className="relative w-full overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-64 object-cover transition-transform duration-300"
                  />
                </div>
                <div className="mt-3 text-center">
                  <span className="block text-base font-semibold text-gray-800">{img.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Guidance Section – Academic Activities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Career Guidance Session – Academic Activities</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: 1001,
                src: '/My Gallery Photos/IMAGES/ACADEMIC ACTIVITIES/CARREER GUIDANCE/IMG_0958.jpg',
                caption: 'Career Guidance Talk',
              },
              {
                id: 1002,
                src: '/My Gallery Photos/IMAGES/ACADEMIC ACTIVITIES/CARREER GUIDANCE/IMG_0109.jpg',
                caption: 'Guest Speaker',
              },
              {
                id: 1003,
                src: '/My Gallery Photos/IMAGES/ACADEMIC ACTIVITIES/CARREER GUIDANCE/IMG_0090.jpg',
                caption: 'Student Interaction',
              },
              {
                id: 1004,
                src: '/My Gallery Photos/IMAGES/ACADEMIC ACTIVITIES/CARREER GUIDANCE/IMG_0095.jpg',
                caption: 'Career Guidance Talk',
              },
            ].map((img) => (
              <div key={img.id} className="flex flex-col items-center cursor-pointer group" onClick={() => setLightboxImage(img.id)}>
                <div className="relative w-full overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="mt-3 text-center">
                  <span className="block text-base font-semibold text-gray-800">{img.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {selectedCategory === 'all' ? 'All Photos' : categories.find(cat => cat.id === selectedCategory)?.name}
            </h2>
            <p className="text-gray-600">
              {filteredPhotos.length} photo{filteredPhotos.length !== 1 ? 's' : ''} found
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                className="group cursor-pointer"
                onClick={() => openLightbox(photo.id)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-end">
                    <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-bold text-lg mb-1">{photo.title}</h3>
                      <p className="text-sm opacity-90 mb-2">{photo.description}</p>
                      <div className="flex items-center text-xs opacity-75">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{formatDate(photo.date)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {(lightboxImage && (currentPhoto || [1001,1002,1003,1004,2001,2002,2003,2004,2005,2006,2007].includes(lightboxImage))) && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full w-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
            >
              <X className="h-6 w-6" />
            </button>
            {/* Navigation for main gallery only */}
            {currentPhoto && (
              <>
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
              </>
            )}
            <div className="flex flex-col lg:flex-row bg-white rounded-lg overflow-hidden max-h-full">
              <div className="lg:w-2/3 flex items-center justify-center">
                <img
                  src={currentPhoto ? currentPhoto.src : [
                    '/My Gallery Photos/IMAGES/ACADEMIC ACTIVITIES/CARREER GUIDANCE/IMG_0958.jpg',
                    '/My Gallery Photos/IMAGES/ACADEMIC ACTIVITIES/CARREER GUIDANCE/IMG_0109.jpg',
                    '/My Gallery Photos/IMAGES/ACADEMIC ACTIVITIES/CARREER GUIDANCE/IMG_0090.jpg',
                    '/My Gallery Photos/IMAGES/ACADEMIC ACTIVITIES/CARREER GUIDANCE/IMG_0095.jpg',
                    '/My Gallery Photos/IMAGES/SPORTS & ALTLETICS/Screenshot_2024_0702_115337.jpg',
                    '/My Gallery Photos/IMAGES/SPORTS & ALTLETICS/IMG_1065.jpg',
                    '/My Gallery Photos/IMAGES/SPORTS & ALTLETICS/IMG_2025.jpg',
                    '/My Gallery Photos/IMAGES/SPORTS & ALTLETICS/DSC0146.jpg',
                    '/My Gallery Photos/IMAGES/SPORTS & ALTLETICS/DSC0060.jpg',
                    '/My Gallery Photos/IMAGES/SPORTS & ALTLETICS/DSC0129.jpg',
                    '/My Gallery Photos/IMAGES/SPORTS & ALTLETICS/DSC0128.jpg',
                  ][[1001,1002,1003,1004,2001,2002,2003,2004,2005,2006,2007].indexOf(lightboxImage)]}
                  alt={currentPhoto ? currentPhoto.title : [
                    'Career Guidance Talk',
                    'Guest Speaker',
                    'Student Interaction',
                    'Career Guidance Talk',
                    'Winners with Trophy',
                    'Football Match',
                    'Chess Practice',
                    'Athletics in Action',
                    'Athletics in Action',
                    'Athletics in Action',
                    'Athletics in Action',
                  ][[1001,1002,1003,1004,2001,2002,2003,2004,2005,2006,2007].indexOf(lightboxImage)]}
                  className="w-full h-full object-cover max-h-96 lg:max-h-full"
                />
              </div>
              <div className="lg:w-1/3 p-6 lg:p-8 bg-white flex flex-col justify-center items-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {currentPhoto ? currentPhoto.title : [
                    'Career Guidance Talk',
                    'Guest Speaker',
                    'Student Interaction',
                    'Career Guidance Talk',
                    'Winners with Trophy',
                    'Football Match',
                    'Chess Practice',
                    'Athletics in Action',
                    'Athletics in Action',
                    'Athletics in Action',
                    'Athletics in Action',
                  ][[1001,1002,1003,1004,2001,2002,2003,2004,2005,2006,2007].indexOf(lightboxImage)]}
                </h3>
                <p className="text-gray-700 mb-6">
                  {currentPhoto ? currentPhoto.description : ''}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Share Your Moments</h2>
          <p className="text-xl mb-8">
            Have photos from school events or activities? We'd love to feature them in our gallery. 
            Contact us to share your memories with the St. Britto's community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:photos@stbrittosacademy.edu"
              className="bg-white text-purple-700 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Submit Photos
            </a>
            <a
              href="/gallery"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              View All Galleries
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Photos;