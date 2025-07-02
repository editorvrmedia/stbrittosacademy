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
    { id: 'cultural', name: 'Cultural Programs' },
  ];

  const foodStallImageNames = [
    'IMG_0276.JPG','IMG_0277.JPG','IMG_0280.JPG','IMG_0284.JPG','IMG_0289.JPG','IMG_0291.JPG','IMG_0292.JPG','IMG_0295.JPG','IMG_0296.JPG','IMG_0298.JPG','IMG_0299.JPG','IMG_0300.JPG','IMG_0301.JPG',
    'IMG_0306.JPG','IMG_0308.JPG','IMG_0309.JPG','IMG_0310.JPG','IMG_0317.JPG','IMG_0318.JPG','IMG_0335.JPG','IMG_0336.JPG','IMG_0337.JPG','IMG_0339.JPG','IMG_0344.JPG','IMG_0350.JPG','IMG_0352.JPG',
    'IMG_0365.JPG','IMG_0370.JPG','IMG_0377.JPG','IMG_0383.JPG','IMG_0388.JPG','IMG_0389.JPG','IMG_0390.JPG','IMG_0392.JPG','IMG_0395.JPG','IMG_0397.JPG','IMG_0398.JPG','IMG_0399.JPG','IMG_0400.JPG',
    'IMG_0402.JPG','IMG_0404.JPG','IMG_0406.JPG','IMG_0412.JPG','IMG_0415.JPG','IMG_0419.JPG','IMG_0423.JPG','IMG_0424.JPG','IMG_0427.JPG','IMG_0429.JPG','IMG_0431.JPG','IMG_0448.JPG','IMG_0449.JPG',
    'IMG_0450.JPG','IMG_0452.JPG','IMG_0458.JPG','IMG_0465.JPG','IMG_0466.JPG','IMG_0469.JPG','IMG_0472.JPG','IMG_0476.JPG','IMG_0477.JPG','IMG_0478.JPG','IMG_0479.JPG','IMG_0480.JPG','IMG_0481.JPG',
    'IMG_0487.JPG','IMG_0488.JPG','IMG_0489.JPG','IMG_0490.JPG','IMG_0491.JPG','IMG_0492.JPG','IMG_0493.JPG','IMG_0494.JPG','IMG_0495.JPG','IMG_0496.JPG','IMG_0497.JPG','IMG_0498.JPG','IMG_0499.JPG',
    'IMG_0500.JPG','IMG_0501.JPG','IMG_0502.JPG','IMG_0503.JPG','IMG_0504.JPG','IMG_0505.JPG','IMG_0506.JPG','IMG_0507.JPG','IMG_0508.JPG','IMG_0509.JPG','IMG_0510.JPG','IMG_0511.JPG','IMG_0512.JPG',
    'IMG_0513.JPG','IMG_0514.JPG','IMG_0515.JPG','IMG_0516.JPG','IMG_0517.JPG','IMG_0518.JPG','IMG_0519.JPG','IMG_0520.JPG','IMG_0521.JPG','IMG_0523.JPG','IMG_0524.JPG','IMG_0525.JPG','IMG_0526.JPG',
    'IMG_0527.JPG','IMG_0528.JPG','IMG_0529.JPG','IMG_0530.JPG','IMG_0531.JPG','IMG_0532.JPG','IMG_0533.JPG','IMG_0534.JPG','IMG_0535.JPG','IMG_0536.JPG','IMG_1044.JPG','IMG_1045.JPG','IMG_1050.JPG',
    'IMG_1051.JPG','IMG_1342.JPG','IMG_1343.JPG','IMG_1345.JPG','IMG_1346.JPG','IMG_1348.JPG','IMG_1353.JPG','IMG_1356.JPG','IMG_1364.JPG','IMG_1366.JPG','IMG_1369.JPG','IMG_1374.JPG','IMG_1381.JPG',
    'IMG_1386.JPG','IMG_1389.JPG','IMG_1401.JPG','IMG_1414.JPG','IMG_1419.JPG','IMG_1420.JPG','IMG_1421.JPG','IMG_1423.JPG',
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
    // Food Stall images under School Events
    ...foodStallImageNames.map((name, idx) => ({
      id: 20000 + idx,
      src: `/SCHOOL EVENTS/Food Stall/${name}`,
      category: 'events',
      title: [
        "Students Arranging Food Items", "Welcoming Guests to the Stall", "Serving Refreshments", "Teamwork at the Food Counter", "Students Handling Cash Counter", "Preparing Snacks for Sale", "Food Stall Decorations", "Explaining Menu to Visitors", "Students Enjoying the Event", "Parents Visiting the Stall", "Teachers Supervising the Activity", "Healthy Food Display", "Students Promoting Healthy Eating", "Serving Beverages", "Food Stall Volunteers", "Students Taking Orders", "Preparing Sandwiches", "Group Photo at the Stall", "Students with Food Samples", "Decorated Food Counter", "Students Explaining Dishes", "Crowd at the Food Stall", "Serving Traditional Dishes", "Students with Aprons", "Food Presentation", "Students Cleaning Up", "Food Stall Banner", "Students with Certificates", "Parents and Students Together", "Food Stall Setup", "Students Tasting Food", "Preparing Ingredients", "Serving Sweets", "Students at the Juice Counter", "Food Stall Volunteers Group", "Students with Food Trays", "Explaining Nutrition Facts", "Food Stall Crowd", "Students with Food Labels", "Serving Hot Snacks", "Students with Food Coupons", "Food Stall Teamwork", "Students with Food Posters", "Food Stall Prize Distribution", "Students with Food Baskets", "Food Stall Closing Ceremony", "Students with Food Samples", "Food Stall Feedback", "Students with Food Tokens", "Food Stall Group Photo", "Serving Cold Drinks", "Students with Food Stalls", "Food Stall Volunteers", "Students with Food Menus", "Food Stall Decorations", "Serving Food to Guests", "Students with Food Items", "Food Stall Preparation", "Students with Food Banners", "Food Stall Team", "Serving Snacks", "Students with Food Coupons", "Food Stall Activities", "Students with Food Trays", "Food Stall Volunteers", "Serving Food to Parents", "Students with Food Posters", "Food Stall Group", "Students with Food Samples", "Food Stall Event", "Students with Food Items", "Food Stall Team", "Serving Food to Students", "Food Stall Volunteers", "Students with Food Baskets", "Food Stall Setup", "Students with Food Labels", "Food Stall Group", "Serving Food to Guests", "Students with Food Coupons", "Food Stall Activities", "Students with Food Trays", "Food Stall Volunteers", "Serving Food to Parents", "Students with Food Posters", "Food Stall Group", "Students with Food Samples", "Food Stall Event", "Students with Food Items", "Food Stall Team", "Serving Food to Students", "Food Stall Volunteers", "Students with Food Baskets", "Food Stall Setup", "Students with Food Labels", "Food Stall Group"
      ][idx] || name,
      description: 'Students Engaging in Food Stall Activities – Fun, Learning, and Entrepreneurship',
      date: '2024-01-01',
      photographer: 'School Events',
    })),
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

          {/* Food Stall Header */}
          {selectedCategory === 'events' && filteredPhotos.some(photo => photo.title === 'Food Stall Activity') && (
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#03045e' }}>Food Stall – 2024</h3>
            </div>
          )}
          
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