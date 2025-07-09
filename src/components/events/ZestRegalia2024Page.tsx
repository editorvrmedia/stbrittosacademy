import React, { useState } from 'react';

const ZestRegalia2024Page = () => {
  const [visibleCount, setVisibleCount] = useState(2);
  const [fadeIn, setFadeIn] = useState(false);

  const imageNames = [
    'zest1-768x513.jpg', 'zest2-770x400.jpg'
  ];

  const images = imageNames.map(name => ({
    src: `/EVENTS/ZEST-REGALIA 24/${name}`,
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
      <h1 className="text-3xl sm:text-4xl font-bold text-sky-700 mb-6 text-center">ZEST-REGALIA 24: A Celebration of Talent and Creativity</h1>
      
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
          On July 16th, St. Britto's Academy proudly hosted 'ZEST-REGALIA 24,' a dynamic intra-school competition themed <span className="font-semibold italic">'STRIVE FOR THE BEST.'</span> This vibrant event aimed to foster holistic development and provide a platform for students to showcase their talents across various academic and cultural activities. The enthusiastic participation of students from all classes made the event a grand success.
        </p>
        <h2 className="text-2xl font-bold text-sky-600 mt-6 mb-2">Competitions for Kindergarten to Grade II</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Sound, Script, Spell</li>
          <li>Story Telling – Dress in Costume</li>
          <li>Thumb Printing – Animals</li>
        </ul>
        <h2 className="text-2xl font-bold text-sky-600 mt-6 mb-2">Competitions for Grades III to V</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Little Poets:
            <ul className="list-disc pl-6">
              <li>Class 3: Free verse poems</li>
              <li>Class 4: Acrostic poems</li>
              <li>Class 5: Limericks</li>
            </ul>
          </li>
          <li>WOW – Home Decor</li>
          <li>Flameless Cooking – No-Bake Desserts</li>
        </ul>
        <h2 className="text-2xl font-bold text-sky-600 mt-6 mb-2">Competitions for Grades VI to VIII</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Junior Poets:
            <ul className="list-disc pl-6">
              <li>Class 6: Cinquain poems</li>
              <li>Class 7: Diamante poems</li>
              <li>Class 8: Tanka poems</li>
            </ul>
          </li>
          <li>Spin a Yarn</li>
          <li>Adzap</li>
          <li>Flameless Cooking – Yogurt Parfait</li>
          <li>Glass Canvas Creations – Bottle Painting</li>
        </ul>
        <h2 className="text-2xl font-bold text-sky-600 mt-6 mb-2">Competitions for Grades IX to XII</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Young Poets:
            <ul className="list-disc pl-6">
              <li>Class IX: Pantoum poems</li>
              <li>Class XI: Sonnets</li>
            </ul>
          </li>
          <li>Shark Tank</li>
          <li>Shipwreck</li>
          <li>Channel Surfing</li>
          <li>Doodling – Dream City</li>
          <li>2 Mins to Fame</li>
        </ul>
        <p>
          'ZEST-REGALIA 24' was a vibrant and enriching event that provided students with numerous opportunities to express their creativity, knowledge, and skills. The theme <span className="font-semibold italic">'STRIVE FOR THE BEST'</span> was evident in the enthusiastic and dedicated participation of the students, making it a memorable and successful event.
        </p>
      </div>
    </div>
  );
};

export default ZestRegalia2024Page; 