import React, { useState } from 'react';

const YoungForum2024Page = () => {
  const [visibleCount, setVisibleCount] = useState(2);
  const [fadeIn, setFadeIn] = useState(false);

  const imageNames = [
    'yf2.jpg', 'yf1.jpg'
  ];

  const images = imageNames.map(name => ({
    src: `/EVENTS/BELIEVE YOU CAN – YOUNG FORUM 2024/${name}`,
    alt: name.replace(/-/g, ' ').replace('.jpg', ''),
  }));

  const handleLoadMore = () => {
    setFadeIn(false);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 2, images.length));
      setFadeIn(true);
    }, 10);
  };

  React.useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-sky-700 mb-6 text-center">Young Forum 2024: Believe You Can</h1>
      
      {/* Image Gallery Section */}
      <section className="bg-white rounded-xl shadow-lg p-6 sm:p-10 mb-8">
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
          The Young Forum 2024, themed "Believe You Can," was an inspiring event that brought together young minds to explore their potential and capabilities. This forum provided a platform for students to engage in meaningful discussions, share their ideas, and develop their leadership skills.
        </p>
        <p className="mb-4">
          The event featured various activities including debates, presentations, and interactive sessions that encouraged students to think critically and express their views confidently. The theme "Believe You Can" emphasized the importance of self-confidence and determination in achieving one's goals.
        </p>
        <p>
          Through this forum, students learned valuable life skills such as public speaking, teamwork, and problem-solving. The event was a great success, leaving participants inspired and motivated to pursue their dreams with confidence and determination.
        </p>
      </div>
    </div>
  );
};

export default YoungForum2024Page; 