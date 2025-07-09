import React, { useState } from 'react';

const ChildrensDayCelebration2024Page = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [fadeIn, setFadeIn] = useState(false);

  const imageNames = [
    '1-1-768x494.jpg', '2-1-768x485.jpg', '3-770x400.jpg'
  ];

  const images = imageNames.map(name => ({
    src: `/EVENTS/Children’s Day Celebration 2024/${name}`,
    alt: name.replace(/-/g, ' ').replace('.jpg', ''),
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
      <h1 className="text-3xl sm:text-4xl font-bold text-sky-700 mb-6 text-center">Children's Day Celebration 2024</h1>
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
          The Children's Day celebration at St. Britto's Academy, themed <span className="font-semibold italic">"Venture 2024: Treasure Beams, Celebrate Every Gift,"</span> was a memorable event that showcased the incredible talents of our students. The vibrant onstage performances included dances such as the Konkani Folk Dance and Galaxy Dance, engaging plays like The Story of the Fairies and Pygmalion, and inspiring monologues, including Magic Realms: Alauddin & Alice in Wonderland and Shakespeare's Iconic Voices.
        </p>
        <p className="mb-4">
          Cultural highlights featured Tamil plays and monologues honoring icons like Manimegalai, Veerapandiya Kattabomman, Anbe Vellum, and a Hindi skit. Soulful musical and band performances, along with a dynamic karate display, added energy to the event.
        </p>
        <p className="mb-4">
          Parents enjoyed participating in interactive activities like chess, carrom, and exploring stalls featuring an Art & Craft Gallery, cookery delights, and Mehendi designs, where students showcased their creativity. The proceeds from these stalls will be donated to support a good cause.
        </p>
        <p className="mb-4">
          The event was widely praised, with parents remarking that it felt like a grand annual day celebration. It was a true reflection of the school's commitment to nurturing and celebrating every child's unique talents.
        </p>
        <p>
          The day left everyone inspired and proud of the students' achievements!
        </p>
      </div>
    </div>
  );
};

export default ChildrensDayCelebration2024Page; 