import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const QUOTIENT_IMAGES = [
  [
    {
      src: '/8 QUOTIENTS/SUBIMAGES/SBA Prospectus 25-26_page-0010.jpg',
      caption: 'Edu-Equity Quotient',
    },
    {
      src: '/8 QUOTIENTS/SUBIMAGES/SBA Prospectus 25-26_page-0011.jpg',
      caption: 'Edu-Equity Continuation',
    },
  ],
  [
    {
      src: '/8 QUOTIENTS/SUBIMAGES/SBA Prospectus 25-26_page-0012.jpg',
      caption: 'Cognitive Quotient',
    },
    {
      src: '/8 QUOTIENTS/SUBIMAGES/SBA Prospectus 25-26_page-0013.jpg',
      caption: 'Cognitive Quotient (contd.)',
    },
  ],
  [
    {
      src: '/8 QUOTIENTS/SUBIMAGES/SBA Prospectus 25-26_page-0014.jpg',
      caption: 'Social and Emotional Quotient',
    },
    {
      src: '/8 QUOTIENTS/SUBIMAGES/SBA Prospectus 25-26_page-0015.jpg',
      caption: 'Social and Emotional Quotient (contd.)',
    },
  ],
  [
    {
      src: '/8 QUOTIENTS/SUBIMAGES/SBA Prospectus 25-26_page-0016.jpg',
      caption: 'Virtuous Quotient',
    },
    {
      src: '/8 QUOTIENTS/SUBIMAGES/SBA Prospectus 25-26_page-0017.jpg',
      caption: 'Virtuous Quotient (contd.)',
    },
  ],
  [
    {
      src: '/8 QUOTIENTS/SUBIMAGES/SBA Prospectus 25-26_page-0018.jpg',
      caption: 'Civic Quotient',
    },
    {
      src: '/8 QUOTIENTS/SUBIMAGES/SBA Prospectus 25-26_page-0019.jpg',
      caption: 'Civic Quotient (contd.)',
    },
  ],
  [
    {
      src: '/8 QUOTIENTS/SUBIMAGES/SBA Prospectus 25-26_page-0020.jpg',
      caption: 'Relational Quotient',
    },
    {
      src: '/8 QUOTIENTS/SUBIMAGES/SBA Prospectus 25-26_page-0021.jpg',
      caption: 'Relational Quotient (contd.)',
    },
  ],
  [
    {
      src: '/8 QUOTIENTS/SUBIMAGES/SBA Prospectus 25-26_page-0022.jpg',
      caption: 'Collaborative Quotient',
    },
  ],
  [
    {
      src: '/8 QUOTIENTS/SUBIMAGES/SBA Prospectus 25-26_page-0023.jpg',
      caption: 'Pedagogues Quotient',
    },
  ],
];

const EightQuotients = () => {
  const quotients = [
    {
      name: 'EDU - EQUITY QUOTIENT',
      image: '/8 QUOTIENTS/EDU EQUITY-1.jpg',
    },
    {
      name: 'COGNITIVE QUOTIENT',
      image: '/8 QUOTIENTS/COGNITIVE-2.jpg',
    },
    {
      name: 'SOCIAL & EMOTIONAL QUOTIENT',
      image: '/8 QUOTIENTS/03 SOCIAL & EMOTIONAL.jpg',
    },
    {
      name: 'VIRTUOUS QUOTIENT',
      image: '/8 QUOTIENTS/VIRTUOUS-4.jpg',
    },
    {
      name: 'CIVIC QUOTIENT',
      image: '/8 QUOTIENTS/CIVIC-5.jpg',
    },
    {
      name: 'RELATIONAL QUOTIENT',
      image: '/8 QUOTIENTS/RELATIONAL-6.jpg',
    },
    {
      name: 'COLLABORATIVE QUOTIENT',
      image: '/8 QUOTIENTS/COLLABORATIVE-7.jpg',
    },
    {
      name: 'PEDAGOGUES QUOTIENT',
      image: '/8 QUOTIENTS/PEDAGOGUES-8.jpg',
    },
  ];

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [modalImages, setModalImages] = useState<{src: string, caption: string}[]>([]);
  const modalRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation and ESC close
  useEffect(() => {
    if (!modalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalOpen(false);
      if (e.key === 'ArrowRight' && modalImages.length > 1) setModalIndex((i) => (i + 1) % modalImages.length);
      if (e.key === 'ArrowLeft' && modalImages.length > 1) setModalIndex((i) => (i - 1 + modalImages.length) % modalImages.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen, modalImages]);

  // Click outside to close
  const handleOverlayClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === modalRef.current) setModalOpen(false);
  }, []);

  // Touch/swipe navigation for mobile
  const touchStartX = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 50) setModalIndex((i) => (i - 1 + modalImages.length) % modalImages.length); // swipe right
    if (deltaX < -50) setModalIndex((i) => (i + 1) % modalImages.length); // swipe left
    touchStartX.current = null;
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <motion.section
        className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        viewport={{ once: true, amount: 0.7 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Eight Quotients Program</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Our comprehensive approach to holistic development through eight essential quotients that shape well-rounded individuals.
          </p>
        </div>
      </motion.section>
      <motion.section
        className="py-12 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true, amount: 0.7 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Our 8 Quotients</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8">
            {quotients.map((quotient, index) => (
              <div
                key={index}
                className={`relative rounded-xl overflow-hidden shadow-lg group ${QUOTIENT_IMAGES[index].length > 0 ? 'cursor-pointer' : 'cursor-default'}`}
                onClick={QUOTIENT_IMAGES[index].length > 0 ? () => {
                  setModalImages(QUOTIENT_IMAGES[index]);
                  setModalIndex(0);
                  setModalOpen(true);
                } : undefined}
                tabIndex={QUOTIENT_IMAGES[index].length > 0 ? 0 : -1}
                role="button"
                aria-label={quotient.name}
                onKeyDown={QUOTIENT_IMAGES[index].length > 0 ? (e) => { if (e.key === 'Enter' || e.key === ' ') {
                  setModalImages(QUOTIENT_IMAGES[index]);
                  setModalIndex(0);
                  setModalOpen(true);
                }} : undefined}
              >
                <img
                  src={quotient.image}
                  alt={quotient.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* Modal/Lightbox */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 transition-opacity duration-300"
          ref={modalRef}
          onClick={handleOverlayClick}
        >
          <div
            className="relative w-full h-full flex items-center justify-center"
            style={{ maxWidth: '600px', maxHeight: '80vh', width: '90vw', height: 'auto' }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Image and Navigation Arrows (flex row) */}
            <div className="flex flex-row items-center justify-center w-full gap-2">
              {/* Previous Arrow */}
              {modalImages.length > 1 && (
                <button
                  className="w-10 h-10 flex items-center justify-center bg-white bg-opacity-70 text-[#03045e] rounded-full shadow-lg text-2xl focus:outline-none transition hover:bg-[#03045e] hover:text-white z-10"
                  onClick={(e) => { e.stopPropagation(); setModalIndex((i) => (i - 1 + modalImages.length) % modalImages.length); }}
                  aria-label="Previous"
                >
                  &#8592;
                </button>
              )}
              <img
                src={modalImages[modalIndex]?.src}
                alt={modalImages[modalIndex]?.caption}
                className="max-h-[60vh] w-auto max-w-[90vw] object-contain rounded-lg shadow-lg transition-all duration-300 bg-white"
                style={{ margin: '0 auto' }}
                loading="lazy"
              />
              {/* Next Arrow */}
              {modalImages.length > 1 && (
                <button
                  className="w-10 h-10 flex items-center justify-center bg-white bg-opacity-70 text-[#03045e] rounded-full shadow-lg text-2xl focus:outline-none transition hover:bg-[#03045e] hover:text-white z-10"
                  onClick={(e) => { e.stopPropagation(); setModalIndex((i) => (i + 1) % modalImages.length); }}
                  aria-label="Next"
                >
                  &#8594;
                </button>
              )}
            </div>
            {/* Close Icon */}
            <button
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white text-[#03045e] rounded-full shadow-lg text-2xl font-bold focus:outline-none transition hover:bg-[#03045e] hover:text-white z-10"
              onClick={() => setModalOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EightQuotients;