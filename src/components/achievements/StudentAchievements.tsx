import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMedal, FaTimes } from 'react-icons/fa';

const StudentAchievements = () => {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState({ open: false, src: '', alt: '' });
  const handlePrev = () => setCurrent((prev) => (prev > 0 ? prev - 1 : prev));
  const handleNext = () => setCurrent((prev) => (prev < posts.length - 1 ? prev + 1 : prev));

  // Helper to wrap images with click handler
  const withLightbox = (imgProps: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img
      {...imgProps}
      onClick={() => setLightbox({ open: true, src: imgProps.src || '', alt: imgProps.alt || '' })}
      className={(imgProps.className || '') + ' cursor-zoom-in transition-transform duration-200 hover:scale-105'}
      style={imgProps.style}
    />
  );

  const posts = [
    // Post 1: Shreenithi Achievement
    { key: 'shreenithi', content: null },
    // Post 2: Tamil Achievement
    {
      key: 'tamil',
      content: (
        <>
          <div className="bg-sky-400 w-full py-6 px-4 mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center" style={{fontFamily: 'sans-serif'}}>
              கவிஞர்கள் அறிவிடம் - St.Britto's Academy
            </h1>
          </div>
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
            {/* Main Image */}
            <div className="w-full flex justify-center items-center bg-green-50 rounded-2xl shadow-lg mb-6 p-4" style={{minHeight: 320}}>
              <img
                src="/STUDENTS ACHIEVENMENT/11.jpeg"
                alt="Event Main"
                className="object-contain h-72 w-auto mx-auto"
                style={{background: 'white', borderRadius: '1rem'}}
              />
            </div>
            {/* Thumbnails Row */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6">
              <div className="bg-green-50 rounded-2xl shadow p-2 flex items-center justify-center">
                <img src="/STUDENTS ACHIEVENMENT/22.jpeg" alt="Event 2" className="object-cover rounded-xl h-32 w-full" />
              </div>
              <div className="bg-green-50 rounded-2xl shadow p-2 flex items-center justify-center">
                <img src="/STUDENTS ACHIEVENMENT/33.jpeg" alt="Event 3" className="object-cover rounded-xl h-32 w-full" />
              </div>
              <div className="bg-green-50 rounded-2xl shadow p-2 flex items-center justify-center">
                <img src="/STUDENTS ACHIEVENMENT/44.jpeg" alt="Event 4" className="object-cover rounded-xl h-32 w-full" />
              </div>
              <div className="bg-green-50 rounded-2xl shadow p-2 flex items-center justify-center">
                <img src="/STUDENTS ACHIEVENMENT/55.jpeg" alt="Event 5" className="object-cover rounded-xl h-32 w-full" />
              </div>
            </div>
            <div className="text-gray-800 text-base md:text-lg leading-relaxed w-full">
              <p className="font-bold mb-2">கவிஞர்கள் அறிவிடம்</p>
              <p className="mb-2">
                கவிஞர்களை நேரில் சந்தித்து கவிதை எழுதிய அனுபவம் மாணவர்களுக்கு புதிய உற்சாகத்தையும், எழுத்து திறனையும் வளர்த்தது.
              </p>
              <p className="mb-2">
                மாணவர்கள் தங்கள் சொந்த கவிதைகளை எழுதி, மேடையில் வாசித்து, கவிஞர்களிடமிருந்து நேரடி பாராட்டும், ஆலோசனையும் பெற்றனர். இது அவர்களின் தமிழ் மொழி மற்றும் இலக்கியத்தில் ஆர்வத்தை அதிகரித்தது.
              </p>
              <p className="mb-2">
                நிகழ்ச்சியில் கலந்து கொண்ட அனைத்து மாணவர்களுக்கும் வாழ்த்துகள்!
              </p>
            </div>
          </div>
        </>
      )
    },
    // Post 3: Raksha Achievement
    {
      key: 'raksha',
      content: (
        <motion.section
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="w-full flex justify-center items-center py-10 px-2"
        >
          <div className="w-full max-w-4xl bg-[#f8faff] rounded-2xl shadow-2xl py-10 px-6 flex flex-col md:flex-row md:items-center gap-10">
            {/* Left: Student Photo */}
            <div className="md:w-1/2 flex justify-center items-center">
              <div className="rounded-xl shadow-lg p-4 bg-white">
                {withLightbox({
                  src: '/STUDENTS ACHIEVENMENT/wow.jpeg',
                  alt: 'P. R. Raksha - Student Achievement',
                  className: 'rounded-xl object-cover w-[260px] h-[320px] max-w-full',
                  style: { objectFit: 'cover' }
                })}
              </div>
            </div>
            {/* Right: Content */}
            <div className="md:w-1/2 flex flex-col justify-center items-start max-w-2xl px-2">
              <h2 className="text-2xl font-bold mb-2 text-gray-800">P. R. Raksha</h2>
              <div className="text-blue-600 italic text-lg mb-4">'An Analytical Approach to Justice: A Forensic Science Research Paper'</div>
              <div className="text-gray-700 text-justify leading-relaxed space-y-4">
                <p>
                  We are proud to announce that <span className="font-bold text-gray-900">P. R. Raksha</span> has been recognized for her outstanding research in forensic science. Her paper, <span className="text-blue-600 italic">'An Analytical Approach to Justice: A Forensic Science Research Paper'</span>, demonstrates remarkable <span className="text-green-600 font-semibold">perseverance</span> and <span className="text-purple-600 font-semibold">dedication</span> to academic excellence.
                </p>
                <p>
                  Raksha's journey is a testament to the power of a nurturing <span className="text-blue-600 font-semibold">learning environment</span> and the importance of pursuing one's <span className="text-pink-600 font-semibold">aspirations</span> with passion and commitment.
                </p>
              </div>
              <div className="bg-indigo-100 text-indigo-700 font-semibold p-4 rounded-xl shadow-sm mt-6 w-full">
                Congratulations, Raksha! Your achievements inspire us all to reach higher and dream bigger.
              </div>
            </div>
          </div>
        </motion.section>
      )
    }
  ];

  // Custom rendering for posts to inject lightbox
  type Post = { key: string; content: React.ReactNode };
  const renderPost = (post: Post) => {
    if (post.key === 'shreenithi') {
      return (
        <>
          {/* Heading as first element after site header */}
          <div className="relative z-10 flex justify-center w-full mb-8 mt-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center px-4 py-2 rounded-xl shadow bg-white/80 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg tracking-tight border border-blue-100">
              Congratulations to Shreenithi for a Stellar Performance at Khelo India Youth Games 2025! - St.Britto's Academy
            </h2>
          </div>
          {/* Card follows below heading */}
          <div className="w-full flex flex-col items-center">
            <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row items-stretch overflow-hidden">
              {/* Image */}
              <div className="flex items-center justify-center bg-[#f4f7ff] p-6 md:p-8 md:w-1/2">
                <div className="rounded-xl bg-white shadow-lg p-2 border-4 border-white">
                  {withLightbox({
                    src: '/STUDENTS ACHIEVENMENT/goldmedal.jpg',
                    alt: "Shreenithi with medals and St. Britto's Academy banner",
                    className: 'rounded-lg object-contain w-[320px] h-[320px] md:w-[340px] md:h-[340px] max-w-full max-h-[60vw] bg-white',
                    style: { objectFit: 'contain' }
                  })}
                </div>
              </div>
              {/* Content */}
              <div className="flex-1 flex flex-col justify-center px-6 py-6 md:py-10 md:px-10">
                {/* Badges */}
                <div className="flex gap-4 mb-4 flex-wrap">
                  <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-400 text-white font-bold text-base shadow-lg">
                    <FaMedal className="text-white drop-shadow" /> 2 Gold Medals
                  </span>
                  <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-700 text-white font-bold text-base shadow-lg">
                    <FaMedal className="text-yellow-300 drop-shadow" /> 3 Bronze Medals
                  </span>
                </div>
                {/* Text */}
                <div className="text-gray-800 text-base md:text-lg leading-relaxed w-full space-y-2">
                  <p>
                    We are thrilled to celebrate the outstanding achievements of
                    <span className="font-bold text-blue-700 ml-1">Shreenithi</span>
                    , who has brought immense pride to our school with her exceptional performance at the
                    <a href="#" className="font-bold text-purple-700 underline mx-1">Khelo India Youth Games 2025</a>
                    held in Bihar.
                  </p>
                  <p>
                    Her success is a true reflection of her
                    <span className="bg-green-100 text-green-800 font-bold px-2 py-0.5 rounded mx-1">dedication</span>,
                    <span className="bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded mx-1">discipline</span>, and relentless pursuit of
                    <span className="bg-yellow-100 text-yellow-800 font-bold px-2 py-0.5 rounded mx-1">excellence</span>
                    in sports. Shreenithi's remarkable accomplishments are not only an inspiration to her peers but also a shining example of what passion and perseverance can achieve.
                  </p>
                  <p>
                    We are incredibly proud of you, Shreenithi, and we wish you continued success in all your future endeavors!
                  </p>
                  <p className="font-bold text-blue-600 text-xl flex items-center gap-2 mt-4 justify-center md:justify-start">
                    <span className="text-2xl">✨</span> Keep shining! <span className="text-2xl">✨</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
    if (post.key === 'tamil') {
      return (
        <>
          <div className="bg-sky-400 w-full py-6 px-4 mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center" style={{fontFamily: 'sans-serif'}}>
              கவிஞர்கள் அறிவிடம் - St.Britto's Academy
            </h1>
          </div>
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
            {/* Main Image */}
            <div className="w-full flex justify-center items-center bg-green-50 rounded-2xl shadow-lg mb-6 p-4" style={{minHeight: 320}}>
              {withLightbox({
                src: '/STUDENTS ACHIEVENMENT/11.jpeg',
                alt: 'Event Main',
                className: 'object-contain h-72 w-auto mx-auto',
                style: { background: 'white', borderRadius: '1rem' }
              })}
            </div>
            {/* Thumbnails Row */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6">
              {['/STUDENTS ACHIEVENMENT/22.jpeg','/STUDENTS ACHIEVENMENT/33.jpeg','/STUDENTS ACHIEVENMENT/44.jpeg','/STUDENTS ACHIEVENMENT/55.jpeg'].map((src, i) => (
                <div key={src} className="bg-green-50 rounded-2xl shadow p-2 flex items-center justify-center">
                  {withLightbox({
                    src,
                    alt: `Event ${i+2}`,
                    className: 'object-cover rounded-xl h-32 w-full'
                  })}
                </div>
              ))}
            </div>
            <div className="text-gray-800 text-base md:text-lg leading-relaxed w-full">
              <p className="font-bold mb-2">கவிஞர்கள் அறிவிடம்</p>
              <p className="mb-2">
                கவிஞர்களை நேரில் சந்தித்து கவிதை எழுதிய அனுபவம் மாணவர்களுக்கு புதிய உற்சாகத்தையும், எழுத்து திறனையும் வளர்த்தது.
              </p>
              <p className="mb-2">
                மாணவர்கள் தங்கள் சொந்த கவிதைகளை எழுதி, மேடையில் வாசித்து, கவிஞர்களிடமிருந்து நேரடி பாராட்டும், ஆலோசனையும் பெற்றனர். இது அவர்களின் தமிழ் மொழி மற்றும் இலக்கியத்தில் ஆர்வத்தை அதிகரித்தது.
              </p>
              <p className="mb-2">
                நிகழ்ச்சியில் கலந்து கொண்ட அனைத்து மாணவர்களுக்கும் வாழ்த்துகள்!
              </p>
            </div>
          </div>
        </>
      );
    }
    if (post.key === 'raksha') {
      return (
        <motion.section
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="w-full flex justify-center items-center py-10 px-2"
        >
          <div className="w-full max-w-4xl bg-[#f8faff] rounded-2xl shadow-2xl py-10 px-6 flex flex-col md:flex-row md:items-center gap-10">
            {/* Left: Student Photo */}
            <div className="md:w-1/2 flex justify-center items-center">
              <div className="rounded-xl shadow-lg p-4 bg-white">
                {withLightbox({
                  src: '/STUDENTS ACHIEVENMENT/wow.jpeg',
                  alt: 'P. R. Raksha - Student Achievement',
                  className: 'rounded-xl object-cover w-[260px] h-[320px] max-w-full',
                  style: { objectFit: 'cover' }
                })}
              </div>
            </div>
            {/* Right: Content */}
            <div className="md:w-1/2 flex flex-col justify-center items-start max-w-2xl px-2">
              <h2 className="text-2xl font-bold mb-2 text-gray-800">P. R. Raksha</h2>
              <div className="text-blue-600 italic text-lg mb-4">'An Analytical Approach to Justice: A Forensic Science Research Paper'</div>
              <div className="text-gray-700 text-justify leading-relaxed space-y-4">
                <p>
                  We are proud to announce that <span className="font-bold text-gray-900">P. R. Raksha</span> has been recognized for her outstanding research in forensic science. Her paper, <span className="text-blue-600 italic">'An Analytical Approach to Justice: A Forensic Science Research Paper'</span>, demonstrates remarkable <span className="text-green-600 font-semibold">perseverance</span> and <span className="text-purple-600 font-semibold">dedication</span> to academic excellence.
                </p>
                <p>
                  Raksha's journey is a testament to the power of a nurturing <span className="text-blue-600 font-semibold">learning environment</span> and the importance of pursuing one's <span className="text-pink-600 font-semibold">aspirations</span> with passion and commitment.
                </p>
              </div>
              <div className="bg-indigo-100 text-indigo-700 font-semibold p-4 rounded-xl shadow-sm mt-6 w-full">
                Congratulations, Raksha! Your achievements inspire us all to reach higher and dream bigger.
              </div>
            </div>
          </div>
        </motion.section>
      );
    }
    return post.content;
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white py-10 px-4 overflow-x-hidden">
      <div className="w-full max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={posts[current].key}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {renderPost(posts[current])}
          </motion.div>
        </AnimatePresence>
        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full justify-center items-center flex-wrap">
          <button
            onClick={handlePrev}
            disabled={current === 0}
            className="w-full sm:w-auto px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg transition-all duration-300 text-lg"
          >
            Previous Post
          </button>
          <button
            onClick={handleNext}
            disabled={current === posts.length - 1}
            className="w-full sm:w-auto px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg transition-all duration-300 text-lg"
          >
            Next Post
          </button>
        </div>
      </div>
      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightbox.open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox({ open: false, src: '', alt: '' })}
          >
            <div className="relative max-w-3xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
              <button
                className="absolute top-2 right-2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg z-10"
                onClick={() => setLightbox({ open: false, src: '', alt: '' })}
                aria-label="Close image preview"
              >
                <FaTimes className="w-5 h-5" />
              </button>
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="rounded-xl shadow-2xl max-h-[80vh] w-auto object-contain bg-white"
                style={{ maxWidth: '90vw' }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StudentAchievements;