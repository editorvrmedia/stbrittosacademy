import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, X, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ResultImage {
  src: string;
  caption: string;
  filename: string;
}

interface AcademicYear {
  year: string;
  displayYear: string;
  images: ResultImage[];
}

const Results = () => {
  const [selectedYear, setSelectedYear] = useState('2024-25'); // Default to most recent year
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ResultImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentYearImages, setCurrentYearImages] = useState<ResultImage[]>([]);

  // Group images by academic years
  const academicYears: AcademicYear[] = [
    {
      year: '2024-25',
      displayYear: '2024–2025',
      images: [
        { src: '/results/2024-25 10th.jpg', caption: '2024-25 10th', filename: '2024-25 10th.jpg' },
        { src: '/results/2024-25  XII.jpg', caption: '2024-25 XII', filename: '2024-25  XII.jpg' }
      ]
    },
    {
      year: '2023-24',
      displayYear: '2023–2024',
      images: [
        { src: '/results/XSTD 2023-2024.jpg', caption: 'XSTD 2023-2024', filename: 'XSTD 2023-2024.jpg' },
        { src: '/results/XIISTD 2023-2024.jpeg', caption: 'XIISTD 2023-2024', filename: 'XIISTD 2023-2024.jpeg' }
      ]
    },
    {
      year: '2022-23',
      displayYear: '2022–2023',
      images: [
        { src: '/results/2022-23 10th.jpg', caption: '2022-23 10th', filename: '2022-23 10th.jpg' },
        { src: '/results/2022-23 12th.jpg', caption: '2022-23 12th', filename: '2022-23 12th.jpg' }
      ]
    },
    {
      year: '2021-22',
      displayYear: '2021–2022',
      images: [
        { src: '/results/X-2021-2022 -1.jpg', caption: 'X-2021-2022 -1', filename: 'X-2021-2022 -1.jpg' },
        { src: '/results/X-2021-2022.jpg', caption: 'X-2021-2022', filename: 'X-2021-2022.jpg' },
        { src: '/results/XII-2021-2022.jpg', caption: 'XII-2021-2022', filename: 'XII-2021-2022.jpg' }
      ]
    },
    {
      year: '2020-21',
      displayYear: '2020–2021',
      images: [
        { src: '/results/2020-21 10th subject toppers 2nd pic.jpg', caption: '2020-21 10th subject toppers 2nd pic', filename: '2020-21 10th subject toppers 2nd pic.jpg' },
        { src: '/results/2020-21 10th subject toppers second pic.jpg', caption: '2020-21 10th subject toppers second pic', filename: '2020-21 10th subject toppers second pic.jpg' },
        { src: '/results/2020-21 10th subject toppers.jpg', caption: '2020-21 10th subject toppers', filename: '2020-21 10th subject toppers.jpg' },
        { src: '/results/2020-21 12th subject toppers.jpg', caption: '2020-21 12th subject toppers', filename: '2020-21 12th subject toppers.jpg' },
        { src: '/results/XII-2020-2021.jpg', caption: 'XII-2020-2021', filename: 'XII-2020-2021.jpg' }
      ]
    },
    {
      year: '2019-20',
      displayYear: '2019–2020',
      images: [
        { src: '/results/2019-2020-X-Toppers-1536x1087.jpg', caption: '2019-2020-X-Toppers-1536x1087', filename: '2019-2020-X-Toppers-1536x1087.jpg' },
        { src: '/results/2019-2020-XII-School-Toppers.jpg', caption: '2019-2020-XII-School-Toppers', filename: '2019-2020-XII-School-Toppers.jpg' },
        { src: '/results/2019-2020-XII-SUBject-Toppers.jpg', caption: '2019-2020-XII-SUBject-Toppers', filename: '2019-2020-XII-SUBject-Toppers.jpg' },
        { src: '/results/2019-2020-XII-Sub-Toppers.jpg', caption: '2019-2020-XII-Sub-Toppers', filename: '2019-2020-XII-Sub-Toppers.jpg' }
      ]
    },
    {
      year: '2018-19',
      displayYear: '2018–2019',
      images: [
        { src: '/results/2018-19 10th.jpg', caption: '2018-19 10th', filename: '2018-19 10th.jpg' },
        { src: '/results/2018-19 12th.jpg', caption: '2018-19 12th', filename: '2018-19 12th.jpg' }
      ]
    },
    {
      year: '2017-18',
      displayYear: '2017–2018',
      images: [
        { src: '/results/2017-18 10th.jpg', caption: '2017-18 10th', filename: '2017-18 10th.jpg' }
      ]
    },
    {
      year: '2016-17',
      displayYear: '2016–2017',
      images: [
        { src: '/results/2016-17 10th.jpg', caption: '2016-17 10th', filename: '2016-17 10th.jpg' }
      ]
    },
    {
      year: '2015-16',
      displayYear: '2015–2016',
      images: [
        { src: '/results/2015-16 10th.jpg', caption: '2015-16 10th', filename: '2015-16 10th.jpg' },
        { src: '/results/2015-16 12th.jpg', caption: '2015-16 12th', filename: '2015-16 12th.jpg' }
      ]
    }
  ];

  const handleYearSelect = (year: string) => {
    setSelectedYear(year);
  };

  const openModal = (image: ResultImage, yearImages: ResultImage[]) => {
    const imageIndex = yearImages.findIndex(img => img.src === image.src);
    setCurrentImageIndex(imageIndex);
    setSelectedImage(image);
    setCurrentYearImages(yearImages);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  const navigateModal = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      const nextIndex = (currentImageIndex + 1) % currentYearImages.length;
      setCurrentImageIndex(nextIndex);
      setSelectedImage(currentYearImages[nextIndex]);
    } else {
      const prevIndex = (currentImageIndex - 1 + currentYearImages.length) % currentYearImages.length;
      setCurrentImageIndex(prevIndex);
      setSelectedImage(currentYearImages[prevIndex]);
    }
  };

  // Keyboard navigation for modal
  useEffect(() => {
    if (!modalOpen) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') navigateModal('next');
      if (e.key === 'ArrowLeft') navigateModal('prev');
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen, currentImageIndex]);

  return (
    <div className="py-12 bg-sky-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 sm:text-5xl mb-4">
            Academic Results
          </h1>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto mb-8">
            Celebrating our students' achievements and academic excellence across all years
          </p>
          
          {/* Year Selector */}
          <div className="max-w-md mx-auto">
            <label htmlFor="year-select" className="block text-sm font-medium text-blue-800 mb-2">
              Select Academic Year
            </label>
            <select
              id="year-select"
              value={selectedYear}
              onChange={(e) => handleYearSelect(e.target.value)}
              className="block w-full rounded-lg border-blue-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg bg-white"
            >
              {academicYears.map((year) => (
                <option key={year.year} value={year.year}>
                  {year.displayYear}
                </option>
              ))}
            </select>
          </div>
        </div>

                {/* Selected Year Results */}
        {selectedYear && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            {/* Year Header */}
            <div className="px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <h2 className="text-2xl font-bold">{academicYears.find(y => y.year === selectedYear)?.displayYear}</h2>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full">
                  {academicYears.find(y => y.year === selectedYear)?.images.length} {academicYears.find(y => y.year === selectedYear)?.images.length === 1 ? 'Result' : 'Results'}
                </span>
              </div>
            </div>

            {/* Year Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {academicYears.find(y => y.year === selectedYear)?.images.map((image, index) => (
                  <motion.div
                    key={image.src}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="group cursor-pointer"
                    onClick={() => openModal(image, academicYears.find(y => y.year === selectedYear)?.images || [])}
                  >
                    <div className="bg-gray-50 rounded-lg p-4 shadow-md hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                      <div className="relative overflow-hidden rounded-lg mb-3">
                        <img
                          src={image.src}
                          alt={image.caption}
                          className={`w-full object-cover transition-transform duration-300 group-hover:scale-110 ${image.filename === '2024-25  XII.jpg' ? 'h-24' : 'h-48'}`}
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-white bg-opacity-90 rounded-full p-2">
                              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Modal/Lightbox */}
      <AnimatePresence>
        {modalOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
            onClick={closeModal}
          >
            <div className="relative max-w-4xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 rounded-full p-2 transition-all duration-200 hover:scale-110"
                aria-label="Close modal"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateModal('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 rounded-full p-2 transition-all duration-200 hover:scale-110"
                aria-label="Previous image"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>

              <button
                onClick={() => navigateModal('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-800 rounded-full p-2 transition-all duration-200 hover:scale-110"
                aria-label="Next image"
              >
                <ArrowRight className="h-6 w-6" />
              </button>

              {/* Image */}
              <motion.div
                key={selectedImage.src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg overflow-hidden shadow-2xl"
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.caption}
                  className={`w-full h-auto object-contain ${selectedImage.filename === '2024-25  XII.jpg' ? 'max-h-96 mx-auto' : 'max-h-[80vh]'}`}
                  loading="lazy"
                />
                <div className="p-4 bg-white">
                  <p className="text-sm text-gray-500 text-center mt-1">
                    {currentImageIndex + 1} of {currentYearImages.length}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Results;