import React, { useState } from 'react';

const InvestitureCeremony2025Page = () => {
  const [visibleCount, setVisibleCount] = useState(2);
  const [fadeIn, setFadeIn] = useState(false);

  const imageNames = [
    'kidscabinet-768x497.jpg', 'prefects-768x497.jpg'
  ];

  const images = imageNames.map(name => ({
    src: `/EVENTS/IVC 2024-25/${name}`,
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
      <h1 className="text-3xl sm:text-4xl font-bold text-sky-700 mb-6 text-center">Investiture Ceremony 2025-26</h1>
      
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
          The Investiture Ceremony 2025-26 at St. Britto's Academy was a prestigious event that marked the formal installation of the new student leadership team for the academic year. This significant ceremony celebrated the democratic process of electing and appointing student representatives who will serve as role models and leaders within the school community.
        </p>
        <p className="mb-4">
          The ceremony was conducted with great solemnity and enthusiasm, reflecting the importance of leadership and responsibility in our school's values. Students from various grades participated in the election process, and the newly elected leaders were formally invested with their badges, sashes, and responsibilities.
        </p>
        <p className="mb-4">
          The event included the installation of both the Kids Cabinet for younger students and the Prefects Council for senior students, ensuring representation across all age groups. Each leader took their oath, promising to fulfill their roles with integrity, dedication, and commitment to excellence.
        </p>
        <p>
          This event not only recognizes the leadership potential of our students but also instills in them the values of service, integrity, and commitment to excellence. The Investiture Ceremony serves as a reminder that leadership is not just about authority, but about serving others and contributing positively to the school community.
        </p>
      </div>
    </div>
  );
};

export default InvestitureCeremony2025Page; 