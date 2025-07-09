import React, { useState } from 'react';

const RoyalGridlock2024Page = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [fadeIn, setFadeIn] = useState(false);

  const imageNames = [
    'rgl1.jpg', 'rgl2.jpg', 'rgl2-768x400.jpg'
  ];

  const images = imageNames.map(name => ({
    src: `/EVENTS/BYC- ROYAL GRIDLOCK 2024/${name}`,
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
      <h1 className="text-3xl sm:text-4xl font-bold text-sky-700 mb-6 text-center">BYC - Royal Gridlock 2024</h1>
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
          The Royal Gridlock, a vibrant part of the Believe You Can 2024 Interschool Competition, took place on August 3rd, 2024, at St. Britto's Academy. This grand cultural extravaganza, organized by Seek Foundation in collaboration with the FEFDY Curriculum, brought together students from 18 different schools to showcase their artistic talents and cultural prowess.
        </p>
        <h2 className="text-2xl font-bold text-sky-600 mt-6 mb-2">Event Highlights</h2>
        <p className="mb-4">
          The day began on a serene note with a solemn prayer song and a prayer that set a positive tone for the day's events. The Cultural Captain then delivered comprehensive instructions and venue information, ensuring a smoothly coordinated and well-organized competition.
        </p>
        <p className="mb-4">
          Students from all participating schools exhibited remarkable enthusiasm and competitiveness throughout the day, engaging in various cultural events that highlighted their dedication and creativity. Their performances brought energy and vibrancy to the day, making it a memorable experience for everyone involved.
        </p>
        <h2 className="text-2xl font-bold text-sky-600 mt-6 mb-2">Valedictory Function</h2>
        <p className="mb-4">
          The valedictory function, held at 4:30 PM, was graced by the esteemed presence of Dr. Arul Mercy, Founder of Mercy Foundation and Proprietor of Adavan Foods, and Dr. Vimala Rani Britto, Founder of Seek Foundation and Author of the FEFDY Curriculum. The distinguished guests shared words of wisdom and encouragement, emphasizing the role of cultural activities in fostering holistic education.
        </p>
        <p className="mb-4">
          The highlight of the evening was the award distribution ceremony, where the exceptional achievements of the participants were acknowledged and celebrated. The event concluded with the announcement of the overall winners in the Royal Gridlock, marking a successful and joyous end to the competition.
        </p>
        <h2 className="text-2xl font-bold text-sky-600 mt-6 mb-2">Winners of Royal Gridlock 2024</h2>
        <ul className="list-disc pl-6 mb-4">
          <li><span className="font-semibold">Marg Vidhyalaya Senior Secondary School</span> – First Place</li>
          <li><span className="font-semibold">St. Britto's Academy</span> – Second Place</li>
          <li><span className="font-semibold">Prasan Vidya Mandir</span> – Third Place</li>
        </ul>
        <p>
          Royal Gridlock 2024 was a resounding success, celebrating the incredible talents of young students in the cultural domain. The event served as a testament to creativity, teamwork, and cultural diversity, leaving a lasting impression on all participants and attendees.
        </p>
      </div>
    </div>
  );
};

export default RoyalGridlock2024Page; 