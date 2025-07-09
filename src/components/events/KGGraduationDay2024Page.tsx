import React, { useState } from 'react';

const KGGraduationDay2024Page = () => {
  const [visibleCount, setVisibleCount] = useState(2);
  const [fadeIn, setFadeIn] = useState(false);

  const imageNames = [
    'KG1.png', 'KG2-770x400.png'
  ];

  const images = imageNames.map(name => ({
    src: `/EVENTS/KG GRADUATION DAY 2023-24/${name}`,
    alt: name.replace(/-/g, ' ').replace('.png', ''),
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
      <h1 className="text-3xl sm:text-4xl font-bold text-sky-700 mb-6 text-center">KG Graduation Day 2023-24</h1>
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
          The zestful frisky kiddos of kindergarten presented the program in a wonderful way. They started the program with a prayer song, Bible reading, prayer and the kids of pre.kg performed the program on Dress up and speak. The Lkg-A children performed the dance and LKg-B. children performed the ramp walk and then our principal mam did the felicitation for the kindergarten and kids cabinet and then we concluded the program with a vote of thanks and school song.
        </p>
        <p className="mb-4">
          It is a time to honor the children who have spent time together in the kindergarten years. Nursery, Jr kg, Sr.kg amidst academic, co-curricular activities and their hectic schedules in kindergarten the children and teachers of Sr kg have their eyes focused on one big event. "The Graduation Day". In the academic calendar, it is a major event and transition point for students, parents, and teachers. It is a time for students, parents and teachers to celebrate their hard work and accomplishments.
        </p>
        <h2 className="text-2xl font-bold text-sky-600 mt-6 mb-2">Testimonies</h2>
        <p>
          The parents appreciated the management and teachers in bringing up the children. They were happy about the FEFDY curriculum as it was very useful for the child's academic growth.
        </p>
      </div>
    </div>
  );
};

export default KGGraduationDay2024Page; 