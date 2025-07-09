import React, { useState } from 'react';

const PongalCelebration2025Page = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const [fadeIn, setFadeIn] = useState(false);

  const imageNames = [
    '4-768x508.jpg', '2.jpg', '1.jpg', '3-768x410.jpg'
  ];

  const images = imageNames.map(name => ({
    src: `/EVENTS/PONGAL CELEBRATION 2025/${name}`,
    alt: name.replace(/-/g, ' ').replace('.jpg', ''),
  }));

  const handleLoadMore = () => {
    setFadeIn(false);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 4, images.length));
      setFadeIn(true);
    }, 10);
  };

  React.useEffect(() => {
    setFadeIn(true);
  }, []);

  const visibleImages = images.slice(0, visibleCount);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-sky-700 mb-6 text-center">Pongal Celebration 2025</h1>
      {/* Image Gallery Section */}
      <section className="bg-white rounded-xl shadow-lg p-6 sm:p-10 mb-8">
        {visibleImages.length === 3 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {visibleImages.slice(0, 2).map((img, idx) => (
                <div
                  key={img.src}
                  className={`overflow-hidden rounded-lg border-2 transition-shadow duration-300 bg-white ${fadeIn ? 'animate-fade-in' : ''}`}
                  style={{ borderColor: '#0077b6' }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    style={{ borderRadius: '0.5rem' }}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <div
                className={`overflow-hidden rounded-lg border-2 transition-shadow duration-300 bg-white ${fadeIn ? 'animate-fade-in' : ''}`}
                style={{ borderColor: '#0077b6', width: '100%', maxWidth: '400px' }}
              >
                <img
                  src={visibleImages[2].src}
                  alt={visibleImages[2].alt}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  style={{ borderRadius: '0.5rem' }}
                />
              </div>
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {visibleImages.map((img, idx) => (
              <div
                key={img.src}
                className={`overflow-hidden rounded-lg border-2 transition-shadow duration-300 bg-white ${fadeIn ? 'animate-fade-in' : ''}`}
                style={{ borderColor: '#0077b6' }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  style={{ borderRadius: '0.5rem' }}
                />
              </div>
            ))}
          </div>
        )}
        {visibleCount < images.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleLoadMore}
              className="px-8 py-3 rounded-full font-semibold text-white hover:bg-sky-600 transition-colors duration-300"
              style={{ background: '#0077b6' }}
            >
              Load More
            </button>
          </div>
        )}
        <style>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: none; }
          }
          .animate-fade-in {
            animation: fade-in 0.7s ease;
          }
        `}</style>
      </section>
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 text-lg text-gray-800 leading-relaxed">
        <p className="mb-4">
          The Pongal Celebration 2025 at St. Britto's Academy was a vibrant and culturally rich event that celebrated the traditional harvest festival of Tamil Nadu. This four-day festival was marked with great enthusiasm and traditional fervor, bringing the entire school community together.
        </p>
        <p className="mb-4">
          Students participated in various activities including traditional Pongal cooking demonstrations, cultural performances, and educational presentations about the significance of this harvest festival. The school was decorated with traditional kolam designs and sugarcane decorations.
        </p>
        <p className="mb-4">
          The celebration included traditional rituals, storytelling sessions about the legends of Pongal, and creative activities that helped students understand the agricultural and cultural significance of this important festival. Students also learned about the importance of gratitude towards nature and farmers.
        </p>
        <p>
          The Pongal Celebration was a wonderful opportunity for students to learn about Tamil culture and traditions while fostering a sense of community and appreciation for our agricultural heritage. The event was a great success, leaving everyone with fond memories and a deeper understanding of our cultural roots.
        </p>
      </div>
    </div>
  );
};

export default PongalCelebration2025Page; 