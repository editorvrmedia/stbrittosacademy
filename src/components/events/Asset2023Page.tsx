import React, { useState } from 'react';

const Asset2023Page = () => {
  const [visibleCount, setVisibleCount] = useState(1);
  const [fadeIn, setFadeIn] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const imageNames = [
    'as1-770x400.jpg'
  ];

  const images = imageNames.map(name => ({
    src: `/EVENTS/ASSET 2023/${name}`,
    alt: name.replace(/-/g, ' ').replace('.jpg', ''),
  }));

  React.useEffect(() => {
    setFadeIn(true);
  }, []);

  const visibleImages = images.slice(0, visibleCount);

  const openModal = (idx: number) => {
    setModalIndex(idx);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-sky-700 mb-6 text-center">ASSET 2023</h1>
      {/* Image Gallery Section */}
      <section className="bg-white rounded-xl shadow-lg p-6 sm:p-10 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {visibleImages.map((img, idx) => (
            <div
              key={img.src}
              className={`overflow-hidden rounded-lg border-2 transition-shadow duration-300 bg-white ${fadeIn ? 'animate-fade-in' : ''}`}
              style={{ borderColor: '#0077b6' }}
              onClick={() => openModal(idx)}
              role="button"
              tabIndex={0}
              onKeyPress={e => { if (e.key === 'Enter') openModal(idx); }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300 cursor-zoom-in"
                loading="lazy"
                style={{ borderRadius: '0.5rem' }}
              />
            </div>
          ))}
        </div>
        {/* Modal/Lightbox */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4" onClick={closeModal}>
            <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full mx-auto flex flex-col items-center p-0" onClick={e => e.stopPropagation()}>
              <button
                className="absolute top-2 right-2 w-10 h-10 flex items-center justify-center bg-white text-[#03045e] rounded-full shadow-lg text-2xl font-bold focus:outline-none transition hover:bg-[#03045e] hover:text-white"
                onClick={closeModal}
                aria-label="Close"
              >
                ×
              </button>
              <img
                src={images[modalIndex].src}
                alt={images[modalIndex].alt}
                className="w-full max-h-[70vh] object-contain rounded-t-lg shadow-md"
                style={{ background: '#f8fafc' }}
              />
            </div>
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
          ASSET was a two-day event. Knock-out games were held on Day 1 while
          the Quarter-Finals, Semi-Finals, and Finals were held on Day 2. A total
          of 9 different games for both boys & girls, under A division & B
          division, were conducted across the Senior and Super-Senior categories.
        </p>
        <h2 className="text-2xl font-bold text-sky-600 mt-6 mb-2">Games Included</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Basketball</li>
          <li>Football</li>
          <li>Kabaddi</li>
          <li>Kho-Kho</li>
          <li>Volleyball</li>
          <li>Handball</li>
          <li>Throwball</li>
        </ul>
        <p className="mb-4">
          While ASSET was a test of skill and endurance, for the public who had
          gathered there, it was a choice of which game to watch. The greatest
          success of ASSET was that it had a wide reach all over Chennai and
          brought students from all boards—Matriculation, CBSE, and State board—
          on a common platform.
        </p>
        <p>
          On the whole, ASSET was perfectly planned, organised, and executed on
          the lines of its expectations.
        </p>
      </div>
    </div>
  );
};

export default Asset2023Page;
