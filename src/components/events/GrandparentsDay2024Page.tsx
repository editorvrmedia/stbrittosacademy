import React, { useState } from 'react';

const GrandparentsDay2024Page = () => {
  const [visibleCount, setVisibleCount] = useState(2);
  const [fadeIn, setFadeIn] = useState(false);

  const imageNames = [
    'gp1-770x400.jpg', 'gp2-768x381.jpg'
  ];

  const images = imageNames.map(name => ({
    src: `/EVENTS/Grandparent’s day 2024/${name}`,
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

  const visibleImages = images.slice(0, visibleCount);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-sky-700 mb-6 text-center">Grandparents Day 2024</h1>
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
          The Kindergarten department recently presented a wonderful "Grandparents Day Assembly." The event featured a harmonious prayer song, the Lord's Prayer, a Bible reading, a thought for the day, and an explanation of the significance of the occasion. The assembly included a special song, a ramp walk, dances, an action song, and several special activities for parents and grandparents to enjoy together with the students.
        </p>
        <p className="mb-4">
          MELINA MARY and DHIVISHREE ADHIRA of UKG-A skillfully led the ceremony with their charming and delightful conversation. The assembly began with a harmonious prayer song performed by all the UKG-A students, followed by a heartfelt prayer by UKG-A student, DHAKSHANA, setting a reflective tone for the event. Inspirational Bible verses were delivered by UKG-B student, KEZIAH, and a meaningful thought was shared by LKG-A student, VENDHAN, inspiring all attendees. ADRINA JOY of UKG-B highlighted the significance of the day, emphasizing the important role of grandparents.
        </p>
        <p className="mb-4">
          The event featured a lovely ramp walk by all the PRE-KG students, who dressed up as grandmas and grandpas for the performance. UKG-A students honored grandparents with a special song, while LKG-A and UKG-B students performed lively dances. One of the most enjoyable parts of the assembly was the interactive "on spot dance performances" for parents and grandparents with the students.
        </p>
        <p className="mb-4">
          The assembly concluded with a special vote of thanks by LKG-A student, HRITHHI, expressing gratitude to all participants and contributors. The event was summed up beautifully with the quote below.
        </p>
        <blockquote className="mt-6 text-xl text-sky-600 font-semibold italic text-center">"Grandparents are the footsteps to future generations."</blockquote>
      </div>
    </div>
  );
};

export default GrandparentsDay2024Page; 