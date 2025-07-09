import React, { useState } from 'react';

const ChristmasCelebration2024Page = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const [fadeIn, setFadeIn] = useState(false);

  const imageNames = [
    'Capture4-768x444.jpg', 'Capture3-768x499.jpg', 'Capture2-768x411.jpg', 'Capture1-768x388.jpg'
  ];

  const images = imageNames.map(name => ({
    src: `/EVENTS/Christmas 2024/${name}`,
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

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-sky-700 mb-6 text-center">Christmas Celebration 2024</h1>
      
      {/* Image Gallery Section */}
      <section className="bg-white rounded-xl shadow-lg p-6 sm:p-10 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-sky-700">
          Event Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
          The Christmas Celebration 2024 at St. Britto's Academy was a magical and joyous event that brought the spirit of Christmas to life. This special celebration highlighted the values of love, peace, and giving that are central to the Christmas season.
        </p>
        <p className="mb-4">
          Students participated in various activities including Christmas carols, nativity plays, and festive performances. The school was beautifully decorated with Christmas trees, lights, and traditional decorations, creating a warm and welcoming atmosphere.
        </p>
        <p className="mb-4">
          The celebration included educational elements about the cultural and religious significance of Christmas, as well as fun activities that brought the community together. Students learned about the importance of sharing, caring, and spreading joy during the holiday season.
        </p>
        <p>
          The Christmas Celebration was a wonderful opportunity for students to experience the magic of the holiday season while learning about different cultures and traditions. The event fostered a sense of community and left everyone with cherished memories of this special time of year.
        </p>
      </div>
    </div>
  );
};

export default ChristmasCelebration2024Page; 