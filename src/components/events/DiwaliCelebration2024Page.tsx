import React, { useState } from 'react';

const DiwaliCelebration2024Page = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [fadeIn, setFadeIn] = useState(false);

  const imageNames = [
    '1-768x425.png', '2-764x400.jpg', '3-300x184.jpg'
  ];

  const images = imageNames.map(name => ({
    src: `/EVENTS/Diwali Celebration 2024/${name}`,
    alt: name.replace(/-/g, ' ').replace(/\.(jpg|png)$/, ''),
  }));

  const handleLoadMore = () => {
    setFadeIn(false);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 3, images.length));
      setFadeIn(true);
    }, 10);
  };

  React.useEffect(() => {
    setFadeIn(true);
  }, []);

  const visibleImages = images.slice(0, visibleCount);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-sky-700 mb-6 text-center">Diwali Celebration 2024</h1>
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
          <span className="font-semibold text-xl">Diwali Celebration: A Sparkle of Joy and Light of Love</span>
        </p>
        <p className="mb-4">
          Our school hosted a vibrant Diwali celebration themed <span className="font-semibold italic">"Sparkle of Joy, Light of Love,"</span> bringing together students, faculty, and guests in the spirit of unity and cultural appreciation.
        </p>
        <p className="mb-4">
          The event commenced with a soulful prayer song and blessings, followed by insightful speeches on the significance of Diwali. Highlights included adorable dances by Kindergarteners, melodious songs by Grades 3 and 7, and a thought-provoking skit emphasizing kindness and eco-friendly celebrations. A Tamil debate added intellectual excitement, and energetic performances by students captivated the audience.
        </p>
        <p className="mb-4">
          In a heartwarming gesture, students from KG to Grade III donated clothes for the tribal community in Kotagiri, reinforcing the value of generosity. The Senior Vice Principal's address inspired everyone to celebrate Diwali responsibly and sustainably.
        </p>
        <p className="mb-4">
          The celebration concluded with Diwali wishes, leaving all with a sense of joy, gratitude, and the true spirit of the festival.
        </p>
        <p>
          Let us all continue to spread light, love, and kindness this Diwali!
        </p>
      </div>
    </div>
  );
};

export default DiwaliCelebration2024Page; 