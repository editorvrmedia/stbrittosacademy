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
    // Only user-provided Campus Life images below:
    { id: 10001, src: '/CAMPUS LIFE/CAMPUS LIFE1.JPG', category: 'campus', title: 'Geography Group Study', description: 'Students collaborating on a globe activity.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10002, src: '/CAMPUS LIFE/CAMPUS LIFE2.jpg', category: 'campus', title: 'Light Experiment', description: 'Student exploring light and shadow.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10003, src: '/CAMPUS LIFE/CAMPUS LIFE3.jpg', category: 'campus', title: 'SCOUTS AND GUIDES', description: 'Students forming a joyful circle outdoors.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10004, src: '/CAMPUS LIFE/CAMPUS LIFE4.jpg', category: 'campus', title: 'Creative Playtime', description: 'Young children building with blocks.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10005, src: '/CAMPUS LIFE/CAMPUS LIFE5.jpg', category: 'campus', title: 'Science in Action', description: 'Students conducting a science experiment.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10006, src: '/CAMPUS LIFE/CAMPUS LIFE6.JPG', category: 'campus', title: 'Cultural Performance', description: 'Students performing on stage in traditional attire.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10007, src: '/CAMPUS LIFE/CAMPUS LIFE7.JPG', category: 'campus', title: 'Inspiring Speech', description: 'Speaker addressing the school assembly.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10008, src: '/CAMPUS LIFE/CAMPUS LIFE8.JPG', category: 'campus', title: 'Seminar Session', description: 'Students attending a seminar in the auditorium.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10009, src: '/CAMPUS LIFE/CAMPUS LIFE9.JPG', category: 'campus', title: 'Leadership Wall', description: 'Student posing by a leadership-themed wall.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10010, src: '/CAMPUS LIFE/CAMPUS LIFE10.JPG', category: 'campus', title: 'Best Friends', description: 'Two young students smiling and posing together.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10011, src: '/CAMPUS LIFE/CAMPUS LIFE11.JPG', category: 'campus', title: 'Gardening Project', description: 'Student tending to plants in the school garden.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10012, src: '/CAMPUS LIFE/CAMPUS LIFE12.jpg', category: 'campus', title: 'Hand Painting Fun', description: 'Students showing off colorful painted hands.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10013, src: '/CAMPUS LIFE/CAMPUS LIFE13.png', category: 'campus', title: 'Focused Audience', description: 'Students attentively listening during an event.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10014, src: '/CAMPUS LIFE/CAMPUS LIFE14.png', category: 'campus', title: 'School Event Gathering', description: 'Large group of students at a school event.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10015, src: '/CAMPUS LIFE/CAMPUS LIFE15.JPG', category: 'campus', title: 'Math Lab Activity', description: 'Students working on a math project.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10016, src: '/CAMPUS LIFE/CAMPUS LIFE16.JPG', category: 'campus', title: 'Playful Companions', description: 'Two students sharing a happy moment.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10017, src: '/CAMPUS LIFE/CAMPUS LIFE17.JPG', category: 'campus', title: 'Microscope Discovery', description: 'Student using a microscope in science class.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10018, src: '/CAMPUS LIFE/CAMPUS LIFE18.JPG', category: 'campus', title: 'Teacher Guidance', description: 'Teacher assisting a student with a microscope.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10019, src: '/CAMPUS LIFE/CAMPUS LIFE19.JPG', category: 'campus', title: 'Reading Together', description: 'Students enjoying reading in class.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10020, src: '/CAMPUS LIFE/CAMPUS LIFE20.JPG', category: 'campus', title: 'Classroom Cheers', description: 'Students raising hands and celebrating in class.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10021, src: '/CAMPUS LIFE/CAMPUS LIFE21.JPG', category: 'campus', title: 'Confident Smile', description: 'Student smiling confidently in the corridor.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10022, src: '/CAMPUS LIFE/CAMPUS LIFE22.JPG', category: 'campus', title: 'Chemistry Experiment', description: 'Student performing a chemistry experiment.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10023, src: '/CAMPUS LIFE/CAMPUS LIFE23.JPG', category: 'campus', title: 'Lab Demonstration', description: 'Teacher demonstrating a science experiment.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10024, src: '/CAMPUS LIFE/CAMPUS LIFE24.JPG', category: 'campus', title: 'Science Project', description: 'Students working on a science project.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10025, src: '/CAMPUS LIFE/CAMPUS LIFE25.JPG', category: 'campus', title: 'Group Project', description: 'Students collaborating on a group project.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10026, src: '/CAMPUS LIFE/CAMPUS LIFE26.JPG', category: 'campus', title: 'Thumbs Up!', description: 'Student giving a thumbs up in the hallway.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10027, src: '/CAMPUS LIFE/CAMPUS LIFE27.jpg', category: 'campus', title: 'Field Trip Group', description: 'Students and teachers on a field trip.', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10028, src: '/CAMPUS LIFE/CAMPUS LIFE27.jpeg', category: 'campus', title: 'Field Trip Group (Alt)', description: 'Students and teachers on a field trip (alternate photo).', date: '2024-01-01', photographer: 'Campus Life' },
    { id: 10029, src: '/CAMPUS LIFE/CAMPUS LIFE28.jpeg', category: 'campus', title: 'Award Ceremony', description: 'Award presentation with school leaders.', date: '2024-01-01', photographer: 'Campus Life' },
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
                </div>
                <div className="mt-2 text-center">
                  <span className="block text-base font-semibold text-blue-900">{photo.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {(lightboxImage && (currentPhoto || [1001,1002,1003,1004,2001,2002,2003,2004,2005,2006,2007].includes(lightboxImage))) && (
        <div className="fixed inset-0 bg-blue-900 bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full w-full rounded-xl shadow-2xl border-4 border-sky-400 bg-white flex flex-col lg:flex-row overflow-hidden">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-sky-400 hover:bg-blue-900 text-white p-3 rounded-full transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            {/* Navigation for main gallery only */}
            {currentPhoto && (
              <>
                <button
                  onClick={() => navigateLightbox('prev')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-sky-400 hover:bg-blue-900 text-white p-3 rounded-full transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={() => navigateLightbox('next')}
                  className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-sky-400 hover:bg-blue-900 text-white p-3 rounded-full transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                  aria-label="Next"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
            <div className="lg:w-2/3 flex items-center justify-center bg-sky-50">
              <img
                src={currentPhoto ? currentPhoto.src : ''}
                alt={currentPhoto ? currentPhoto.title : ''}
                className="w-full h-full object-contain max-h-96 lg:max-h-full rounded-lg"
              />
            </div>
            <div className="lg:w-1/3 p-6 lg:p-8 bg-white flex flex-col justify-center items-center border-l border-sky-200">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">
                {currentPhoto ? currentPhoto.title : ''}
              </h3>
              <p className="text-blue-700 mb-6 text-center">
                {currentPhoto ? currentPhoto.description : ''}
              </p>
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