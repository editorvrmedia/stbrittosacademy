import React, { useState } from 'react';

const SpaceAndSeasons2023Page = () => {
  const [visibleCount, setVisibleCount] = useState(1);
  const [fadeIn, setFadeIn] = useState(false);

  const imageNames = [
    '20230213_094756-min-770x400.jpg'
  ];

  const images = imageNames.map(name => ({
    src: `/EVENTS/SPACE AND SEASONS 2023/${name}`,
    alt: name.replace(/-/g, ' ').replace('.jpg', ''),
  }));

  const handleLoadMore = () => {
    setFadeIn(false);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 1, images.length));
      setFadeIn(true);
    }, 10);
  };

  React.useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-sky-700 mb-6 text-center">Space and Seasons 2023</h1>
      
      {/* Image Gallery Section */}
      <section className="bg-white rounded-xl shadow-lg p-6 sm:p-10 mb-8">
        <div className="grid grid-cols-1 gap-6">
          {images.slice(0, visibleCount).map((img, idx) => (
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
          The Space and Seasons 2023 event at St. Britto's Academy was an educational and engaging program designed to help students understand the wonders of space and the changing seasons. This event combined learning with fun activities to make complex concepts accessible to young minds.
        </p>
        <p className="mb-4">
          Students participated in various activities including model making, presentations, and interactive sessions that helped them explore the mysteries of space and understand how seasons change throughout the year. The event fostered curiosity and encouraged students to ask questions about the world around them.
        </p>
        <p>
          Through this event, students developed a deeper appreciation for science and nature, learning about the Earth's rotation, the solar system, and the impact of seasonal changes on our environment. The Space and Seasons event was a great success in making learning both educational and enjoyable.
        </p>
      </div>
    </div>
  );
};

export default SpaceAndSeasons2023Page; 