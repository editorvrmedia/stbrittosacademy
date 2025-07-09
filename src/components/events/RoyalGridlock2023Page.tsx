import React, { useState } from 'react';

const RoyalGridlock2023Page = () => {
  const [visibleCount, setVisibleCount] = useState(1);
  const [fadeIn, setFadeIn] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const imageNames = [
    'rgl1-770x400.jpg'
  ];

  const images = imageNames.map(name => ({
    src: `/EVENTS/ROYAL GRIDLOCK – 2023/${name}`,
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
      <h1 className="text-3xl sm:text-4xl font-bold text-sky-700 mb-6 text-center">ROYAL GRIDLOCK – 2023</h1>
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
          The Seek Foundation in association with Fefdy Curriculum organised the event 'Royal Gridlock' entitled to the theme <span className="font-semibold italic">'BELIEVE YOU CAN'</span> on 4th August 2023.
        </p>
        <p className="mb-4">
          St Britto's Academy hosted the mega intellectual event. The theme invokes competitive spirit among the students in and around the city and has created a platform to showcase their talents and ability.
        </p>
        <p className="mb-4">
          The year '2023' has marked an outstanding performance. 23 schools participated and competed in various competitions.
        </p>
        <p className="mb-4">
          The Royal Gridlock event contributes to the development of self-confidence; instills rhythm and harmony, cultivates aesthetic beauty, kindles dramatic expression and acts as an outlet for emotions. The various events under Royal Gridlock are dance, music, drama, art, cookery, channel surfing, Adzap, lawyer up, 2 minutes to fame, etc….
        </p>
        <p className="mb-4">
          The event started at 9:30 am and was diligently organized within the school premises. The judges appointed for the various events were well equipped in the field of art and music. They appreciated the vibrant performances of the students and declared the winners in the Valedictory function. There was thundering applause from the audience, when they heard the announcement of the first place of Young Forum and Royal Gridlock results.
        </p>
        <blockquote className="mt-6 text-xl text-sky-600 font-semibold italic text-center">"The beauty of life lies in the diversity of its people"<br/>"The beauty of St.Britto's lies in the diversity of Talents and Skills"</blockquote>
        <p className="mt-6 mb-4">
          Celebrating the uniqueness in each and every individual eliminates inequalities; preserving this incredible – fountain head of innovation. Everyone enjoyed the cultural fest that revealed many aspects of our culture and traditions. Indeed it was a glorious event! We look ahead to the upcoming year.
        </p>
      </div>
    </div>
  );
};

export default RoyalGridlock2023Page; 