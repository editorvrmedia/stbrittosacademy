import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Calendar, Users, ArrowRight, Play, Image, Video } from 'lucide-react';
import RecentVideos from './RecentVideos';
import RecentShorts from './RecentShorts';

const GalleryMain = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxVideoUrl, setLightboxVideoUrl] = useState('');
  const [recentLightboxOpen, setRecentLightboxOpen] = useState(false);
  const [recentLightboxVideoUrl, setRecentLightboxVideoUrl] = useState("");

  const galleryTypes = [
    { id: 'all', name: 'All Media' },
    { id: 'videos', name: 'Videos' },
    { id: 'albums', name: 'Albums' }
  ];

  const featuredGalleries = [
    {
      id: 1,
      title: 'Investiture Ceremony 2025 - 2026',
      type: 'video',
      description: 'Watch the Investiture Ceremony for the academic year 2025 - 2026. 👏 Let\'s applaud our young leaders for their dedication and inspiring impact in school and beyond!',
      thumbnail: 'https://img.youtube.com/vi/jW9pbhu38fQ/hqdefault.jpg',
      date: '2025-06-18',
      category: 'Events',
      videoUrl: 'https://www.youtube.com/embed/jW9pbhu38fQ?autoplay=1'
    },
    {
      id: 2,
      title: 'Lakes on Wheels: Greening the Future, One Seed Ball at a Time',
      type: 'video',
      description: "St. Britto's Academy proudly hosted Lakes on Wheels – a hands-on seed ball making initiative promoting sustainability and ecological restoration through experiential learning.",
      thumbnail: 'https://img.youtube.com/vi/GIS6XUD3I_k/hqdefault.jpg',
      date: 'Jun 17, 2025',
      category: 'Academic',
      videoUrl: 'https://www.youtube.com/embed/GIS6XUD3I_k?autoplay=1'
    },
    {
      id: 3,
      title: 'Graduation Ceremony 2025',
      type: 'video',
      description: "St. Britto's little stars are all set to shine! With dreams in their hearts and joy in every step, their first graduation marks the start of a bright learning journey.",
      thumbnail: 'https://img.youtube.com/vi/nwaUHWy68HE/hqdefault.jpg',
      date: 'Apr 16, 2025',
      category: 'Graduation',
      videoUrl: 'https://www.youtube.com/embed/nwaUHWy68HE?autoplay=1'
    },
    {
      id: 4,
      title: 'Parent Review',
      type: 'video',
      description: "Hear directly from St. Britto's Academy parents! Explore their honest opinions on the school environment, curriculum, and support for students to aid your enrollment decision.",
      thumbnail: 'https://img.youtube.com/vi/OSg1jrsr_jE/hqdefault.jpg',
      date: 'Apr 10, 2025',
      category: 'Academic',
      videoUrl: 'https://www.youtube.com/embed/OSg1jrsr_jE?autoplay=1'
    },
    {
      id: 5,
      title: 'Kids Smash 2025',
      type: 'video',
      description: 'A high-energy sports fest where young athletes step into the arena to showcase their strength, speed, and spirit!',
      thumbnail: 'https://img.youtube.com/vi/Jns7hZ5UJic/hqdefault.jpg',
      date: 'Feb 17, 2025',
      category: 'Sports',
      videoUrl: 'https://www.youtube.com/embed/Jns7hZ5UJic?autoplay=1'
    },
    {
      id: 6,
      title: 'BELIEVE YOU CAN 24 🌊SPLASH 24',
      type: 'video',
      description: 'Get ready to make a splash at BYC-SPLASH 24! 🏊‍♂️ An inter-school swimming competition filled with energy, passion, and unforgettable moments of triumph. 💪🎉',
      thumbnail: 'https://img.youtube.com/vi/XTQXTD2IWoc/hqdefault.jpg',
      date: 'Nov 11, 2024',
      category: 'Sports',
      videoUrl: 'https://www.youtube.com/embed/XTQXTD2IWoc?autoplay=1'
    }
  ];

  const recentUploads = [
    {
      title: "Inspiring Curiosity: The Pyramids of Giza & Serengeti National Park",
      thumbnail: "https://i.ytimg.com/vi/LFQvm3NDRTw/hqdefault.jpg",
      date: "6 days ago",
      type: "video",
      videoUrl: "https://youtu.be/LFQvm3NDRTw?si=wpN9DmwY7pu--1wp"
    },
    {
      title: "Investiture Ceremony 2025 – 2026 | 28th Prefects Council",
      thumbnail: "https://i.ytimg.com/vi/jW9pbhu38fQ/hqdefault.jpg",
      date: "13 days ago",
      type: "video",
      videoUrl: "https://youtu.be/jW9pbhu38fQ?si=9-cWyf2P1LFzirYq"
    },
    {
      title: "Lakes on Wheels: A Sustainable Initiative in Seed Ball Making",
      thumbnail: "https://i.ytimg.com/vi/GIS6XUD3I_k/hqdefault.jpg",
      date: "2 weeks ago",
      type: "video",
      videoUrl: "https://youtu.be/GIS6XUD3I_k?si=NPEH5oRZ3SCgFoTp"
    },
    {
      title: "Exploring the East: Students' Journey Through India's Vibrant States",
      thumbnail: "https://i.ytimg.com/vi/mdbBWLHqDMM/hqdefault.jpg",
      date: "1 month ago",
      type: "video",
      videoUrl: "https://youtu.be/mdbBWLHqDMM?si=xjvqkrBjJj0rEqCb"
    },
    {
      title: "Monuments Voices: Students Speak on North India's Heritage",
      thumbnail: "https://i.ytimg.com/vi/yH399AjcBaU/hqdefault.jpg",
      date: "1 month ago",
      type: "video",
      videoUrl: "https://youtu.be/yH399AjcBaU?si=zSbbRB9S7EuXpfY4"
    },
    {
      title: "St. Britto's Academy: Every Game is a Lesson in Passion & Purpose",
      thumbnail: "https://i.ytimg.com/vi/QgxvNT_miMc/hqdefault.jpg",
      date: "1 month ago",
      type: "video",
      videoUrl: "https://youtu.be/QgxvNT_miMc?si=OK-5dhAl4oRWtWyO"
    },
    {
      title: "FEDfY Curriculum Excellence Awards 🏆 | Kindergarten",
      thumbnail: "https://i.ytimg.com/vi/HikAb_8MCmU/hqdefault.jpg",
      date: "2 months ago",
      type: "video",
      videoUrl: "https://youtu.be/HikAb_8MCmU?si=uNlNFrI12SvJKmaK"
    },
    {
      title: "FEDfY Curriculum Excellence Awards 🏆 | Celebrating Innovation",
      thumbnail: "https://i.ytimg.com/vi/Jbi03Q_dODI/hqdefault.jpg",
      date: "2 months ago",
      type: "video",
      videoUrl: "https://youtu.be/Jbi03Q_dODI?si=_rbs4ycm8UZJd9Zm"
    },
    {
      title: "Celebrating Young Achievers 🌟 | Kids Carnival Awards",
      thumbnail: "https://i.ytimg.com/vi/XEDCNSTM37g/hqdefault.jpg",
      date: "2 months ago",
      type: "video",
      videoUrl: "https://youtu.be/XEDCNSTM37g?si=i-TlW6G6-4fcWGoW"
    },
    {
      title: "St. Britto's little graduates are ready for a new world of learning",
      thumbnail: "https://i.ytimg.com/vi/nwaUHWy68HE/hqdefault.jpg",
      date: "2 months ago",
      type: "video",
      videoUrl: "https://youtu.be/nwaUHWy68HE?si=QxNmswv68kQWqXHl"
    },
    {
      title: "Fusion Fiesta: Dance Celebration – Graduation Day",
      thumbnail: "https://i.ytimg.com/vi/QoIXO-Eg2vI/hqdefault.jpg",
      date: "2 months ago",
      type: "video",
      videoUrl: "https://youtu.be/QoIXO-Eg2vI?si=9A44CSSG4LC8mILy"
    },
    {
      title: "Welcome Dance | St. Britto's Academy Graduation",
      thumbnail: "https://i.ytimg.com/vi/5vNd4QZMOQc/hqdefault.jpg",
      date: "2 months ago",
      type: "video",
      videoUrl: "https://youtu.be/5vNd4QZMOQc?si=YyX9XmhRkqNzWpQS"
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
          <h1 className="text-5xl font-bold mb-6">Video Collection</h1>
          <p className="text-xl text-white/90 mb-8">Explore our diverse collection of photos and memorable moments at St. Britto's Academy.</p>
        </div>
      </section>

      {/* Gallery Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center">
              <Video className="h-8 w-8 text-indigo-600 mr-3" />
              <div>
                <div className="text-2xl font-bold text-gray-900">514</div>
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
                <div className="text-2xl font-bold text-gray-900">2025</div>
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
            <p className="text-xl text-gray-600">Discover our most popular and recent video collections</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGalleries.map((gallery, idx) => (
              <div
                key={gallery.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => {
                  if (gallery.type === 'video' && gallery.videoUrl) {
                    setLightboxVideoUrl(gallery.videoUrl);
                    setLightboxOpen(true);
                  }
                }}
              >
                <div className="relative group">
                  <img
                    src={gallery.thumbnail}
                    alt={gallery.title}
                    className="w-full h-48 object-cover group-hover:brightness-75 transition duration-300"
                  />
                  {gallery.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black bg-opacity-50 rounded-full p-4">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  )}
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
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Lightbox for video */}
        {lightboxOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
            <div className="relative w-full max-w-3xl aspect-video bg-black rounded-lg overflow-hidden">
              <button
                className="absolute top-2 right-2 z-10 bg-white bg-opacity-20 hover:bg-opacity-40 text-white p-2 rounded-full"
                onClick={() => setLightboxOpen(false)}
              >
                <span className="text-2xl">&times;</span>
              </button>
              <iframe
                width="100%"
                height="100%"
                src={lightboxVideoUrl}
                title="Investiture Ceremony 2025 - 2026"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </section>

      {/* Recent Videos from YouTube */}
      <RecentVideos />

      {/* Recent Shorts from YouTube */}
      <RecentShorts />

      {/* Gallery Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-xl text-gray-600">Explore our video collections by category</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Events',
                description: 'Music, dance, drama, and artistic performances',
                image: 'https://i.ytimg.com/vi/nwaUHWy68HE/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDt4XN1f6gGqn3khkkwHKxzPcqD5A',
                count: 95,
                link: 'https://www.youtube.com/playlist?list=PLB3deUTwz34G7VOxx-5tFpN07_Z-KGkxA',
                playlistId: 'PLB3deUTwz34G7VOxx-5tFpN07_Z-KGkxA'
              },
              {
                title: 'Assemblies',
                description: 'School assemblies and group gatherings',
                image: 'https://i.ytimg.com/vi/LFQvm3NDRTw/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAXsXFXIb_8udpfClWoKACbUGQhIQ',
                count: 514,
                link: 'https://www.youtube.com/playlist?list=PLB3deUTwz34EbliB8qsYG_LTPAVkg0sKG',
                playlistId: 'PLB3deUTwz34EbliB8qsYG_LTPAVkg0sKG'
              },
              {
                title: 'Believe You Can',
                description: 'Motivational and inspirational events',
                image: 'https://i.ytimg.com/vi/jbPxQOTY_zM/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBPJ8htWxLaO9re0bgEbDvnYwcXhQ',
                count: 0,
                link: 'https://www.youtube.com/playlist?list=PLB3deUTwz34GqfxER8ZXpaD-OQS8mTiPd',
                playlistId: 'PLB3deUTwz34GqfxER8ZXpaD-OQS8mTiPd'
              },
              {
                title: "Parent's Review",
                description: 'Feedback and testimonials from parents',
                image: 'https://i.ytimg.com/vi/OSg1jrsr_jE/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAP7dQ7clJg9fFvtD-u6w2rwEtzlA',
                count: 0,
                link: 'https://www.youtube.com/playlist?list=PLB3deUTwz34EE3Ht_HtsDM5U9srwWOMwo',
                playlistId: 'PLB3deUTwz34EE3Ht_HtsDM5U9srwWOMwo'
              },
              {
                title: 'Our Quotients',
                description: 'Showcasing our unique quotients and values',
                image: '/8%20QUOTIENTS/thumbnail.jpg',
                count: 514,
                link: 'https://www.youtube.com/playlist?list=PLB3deUTwz34EyBHO14oEv12852V-EbdgV',
                playlistId: 'PLB3deUTwz34EyBHO14oEv12852V-EbdgV'
              },
              {
                title: "FEFDY STARS AT ST.BRITTO'S ACADEMY",
                description: 'Special Fefdy events and highlights',
                image: 'https://i.ytimg.com/vi/GNJgW24cbJI/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCZ08xMXoYK3LxC5aaJvjxD1dm5pw',
                count: 0,
                link: 'https://www.youtube.com/playlist?list=PLB3deUTwz34Fc5zJ5wZR_BYuoJ0fxEouV',
                playlistId: 'PLB3deUTwz34Fc5zJ5wZR_BYuoJ0fxEouV'
              }
            ].map((category, index) => {
              const [videoCount, setVideoCount] = useState(category.count);
              useEffect(() => {
                if (category.playlistId) {
                  // Replace YOUR_API_KEY with your actual YouTube Data API key
                  fetch(`https://www.googleapis.com/youtube/v3/playlists?part=contentDetails&id=${category.playlistId}&key=AIzaSyB5qQW6EwPGpbGQ1zDXn8gWZ2b1lpl4NN4`)
                    .then(res => res.json())
                    .then(data => {
                      if (data.items && data.items[0] && data.items[0].contentDetails) {
                        setVideoCount(data.items[0].contentDetails.itemCount);
                      }
                    })
                    .catch(() => {});
                }
              }, [category.playlistId]);
              return category.link ? (
                <a
                  key={index}
                  href={category.link}
                  target="_blank"
                  rel="noopener noreferrer"
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
                        <span>{videoCount} videos</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-sm">{category.description}</p>
                  </div>
                </a>
              ) : (
                <div
                  key={index}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-default"
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
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Contribute to Our Gallery</h2>
          <p className="text-xl mb-8">
                          Have photos or videos from school events? Share them with us to be featured in our video collection.
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