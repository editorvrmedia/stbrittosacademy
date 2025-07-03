import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Award, Users, BookOpen, Trophy, Star, Target, Eye, Gem } from 'lucide-react';
import UpcomingEventsAside from './UpcomingEventsAside';
import AdmissionPopup from './AdmissionPopup';
import StylizedLogo from './StylizedLogo';
import { motion, useInView, animate } from 'framer-motion';

const HomePage = () => {
  const [isAdmissionPopupOpen, setIsAdmissionPopupOpen] = useState(false);
  const [isUpcomingEventsAsideOpen, setIsUpcomingEventsAsideOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAdmissionPopupOpen(true);
    }, 10000); // 10 seconds
    return () => clearTimeout(timer);
  }, []);
  
  // Close admission popup 5 seconds after any user activity
  useEffect(() => {
    if (!isAdmissionPopupOpen) return;
    let closeTimer: ReturnType<typeof setTimeout> | null = null;
    const closeAfterDelay = () => {
      if (closeTimer) clearTimeout(closeTimer);
      closeTimer = setTimeout(() => setIsAdmissionPopupOpen(false), 5000);
    };
    window.addEventListener('mousemove', closeAfterDelay);
    window.addEventListener('keydown', closeAfterDelay);
    window.addEventListener('scroll', closeAfterDelay);
    window.addEventListener('click', closeAfterDelay);
    return () => {
      if (closeTimer) clearTimeout(closeTimer);
      window.removeEventListener('mousemove', closeAfterDelay);
      window.removeEventListener('keydown', closeAfterDelay);
      window.removeEventListener('scroll', closeAfterDelay);
      window.removeEventListener('click', closeAfterDelay);
    };
  }, [isAdmissionPopupOpen]);
  
  const handleAdmissionPopupClose = () => {
    setIsAdmissionPopupOpen(false);
    setIsUpcomingEventsAsideOpen(true);
    setIsNotificationOpen(true);
  };

  const handleUpcomingEventsAsideClose = () => {
    setIsUpcomingEventsAsideOpen(false);
  };

  const handleNotificationClose = () => {
    setIsNotificationOpen(false);
  };

  const coreValues = [
    {
      title: 'Academic Excellence',
      description: 'Fostering a culture of learning and intellectual growth',
      icon: BookOpen
    },
    {
      title: 'Character Building',
      description: 'Developing strong moral values and ethical principles',
      icon: Star
    },
    {
      title: 'Innovation',
      description: 'Encouraging creativity and forward-thinking approaches',
      icon: Target
    },
    {
      title: 'Community Service',
      description: 'Instilling a sense of social responsibility and compassion',
      icon: Users
    }
  ];

  const stats = [
    { icon: Users, number: '1,200+', label: 'Students' },
    { icon: BookOpen, number: '50+', label: 'Expert Teachers' },
    { icon: Award, number: '28', label: 'Years of Excellence' },
    { icon: Trophy, number: '100+', label: 'Awards Won' }
  ];

  return (
    <div className="max-w-full overflow-x-hidden">
      <style>{`
        @keyframes glitch {
          0% { text-shadow: 2px 0 red, -2px 0 blue; }
          10% { text-shadow: -2px 0 red, 2px 0 blue; }
          20% { text-shadow: 2px 2px lime, -2px -2px magenta; }
          30% { text-shadow: 2px -2px cyan, -2px 2px yellow; }
          40% { text-shadow: 0 2px red, 0 -2px blue; }
          50% { text-shadow: 2px 0 red, -2px 0 blue; }
          60% { text-shadow: -2px 0 red, 2px 0 blue; }
          70% { text-shadow: 2px 2px lime, -2px -2px magenta; }
          80% { text-shadow: 2px -2px cyan, -2px 2px yellow; }
          90% { text-shadow: 0 2px red, 0 -2px blue; }
          100% { text-shadow: none; }
        }
        .glitch {
          animation: glitch 1.2s cubic-bezier(.25,.46,.45,.94) both;
        }
      `}</style>
      {/* Hero Section with Notification Popup beside the image */}
      {/* <HeroSection /> */}

      {/* Quick Access Section */}
      <motion.section
        className="section pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-12 lg:pb-16 bg-transparent max-w-full overflow-x-hidden"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.1 }}
          >
            QUICK ACCESS
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 lg:mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            Find what you're looking for
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[0,1,2,3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 + i * 0.05 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                {i === 0 && (
                  <Link to="/admissions/procedure" className="bg-blue-50 hover:bg-blue-100 p-4 sm:p-6 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex flex-col items-center justify-center h-32 sm:h-40 lg:h-48">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-800 mb-1 sm:mb-2">Admissions</h3>
                    <p className="text-sm sm:text-base text-blue-600 text-center">Join our community</p>
                  </Link>
                )}
                {i === 1 && (
                  <Link to="/academics" className="bg-green-50 hover:bg-green-100 p-4 sm:p-6 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex flex-col items-center justify-center h-32 sm:h-40 lg:h-48">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-green-800 mb-1 sm:mb-2">Academics</h3>
                    <p className="text-sm sm:text-base text-green-600 text-center">Our curriculum</p>
                  </Link>
                )}
                {i === 2 && (
                  <Link to="/activities" className="bg-purple-50 hover:bg-purple-100 p-4 sm:p-6 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex flex-col items-center justify-center h-32 sm:h-40 lg:h-48">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-purple-800 mb-1 sm:mb-2">Activities</h3>
                    <p className="text-sm sm:text-base text-purple-600 text-center">Beyond classroom</p>
                  </Link>
                )}
                {i === 3 && (
                  <Link to="/about/contact" className="bg-yellow-50 hover:bg-yellow-100 p-4 sm:p-6 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex flex-col items-center justify-center h-32 sm:h-40 lg:h-48">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-yellow-800 mb-1 sm:mb-2">Contact</h3>
                    <p className="text-sm sm:text-base text-yellow-600 text-center">Get in touch</p>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 28 Years of Excellence Section */}
      <motion.section 
        className="section py-12 sm:py-16 lg:py-20 bg-[#f5f8ff] max-w-full overflow-x-hidden"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10 mt-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            Celebrating <AnimatedCounter target={28} /> Years of Educational Excellence
          </motion.h2>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
            {/* Left: Text Content */}
            <motion.div 
              className="flex-1 max-w-xl"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <h2 
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-2 sm:mb-4"
              >
                Welcome to St. Britto's Academy
              </h2>
              <p 
                className="text-base sm:text-lg lg:text-xl text-blue-700 mb-6 sm:mb-8 lg:mb-12"
              >
                Nurturing minds, building character, and creating leaders of tomorrow
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-blue-800 mb-6">
                Established in 1997, St. Britto's Academy has been at the forefront of educational excellence for over 28 years. Our commitment to holistic development, academic rigor, and character formation has made us one of Chennai's most trusted educational institutions.
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-blue-800 mb-6">
                We believe in nurturing not just academic excellence, but also the moral, physical, and social development of every child. Our comprehensive curriculum, experienced faculty, and state-of-the-art facilities create an environment where students thrive and reach their full potential.
              </p>
              <motion.div 
                className="bg-white border-l-4 border-amber-400 rounded-lg shadow p-4 mb-6"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <p className="italic text-blue-800 text-base sm:text-lg">
                  "Education is not preparation for life; education is life itself." - John Dewey
                </p>
              </motion.div>
              <motion.div 
                className="flex flex-wrap gap-3 mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <span className="px-4 py-1 rounded-full bg-sky-100 border border-sky-200 text-blue-900 text-sm font-semibold">Excellence</span>
                <span className="px-4 py-1 rounded-full bg-yellow-100 border border-yellow-200 text-yellow-800 text-sm font-semibold">Innovation</span>
                <span className="px-4 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-800 text-sm font-semibold">Character Building</span>
              </motion.div>
            </motion.div>
            {/* Right: Trophy Image and Badge */}
            <motion.div 
              className="flex-1 flex flex-col items-center relative max-w-md w-full"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <img
                src="/school-excellence-award-2018.jpg"
                alt="School Excellence Leadership Award 2018"
                className="rounded-xl shadow-2xl w-full max-w-xs mx-auto h-auto bg-white"
                style={{objectFit: 'contain'}}
              />
              <motion.div 
                className="absolute right-0 bottom-0 mr-2 mb-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="bg-amber-500 text-white px-5 py-2 rounded-lg shadow text-lg font-bold text-center">
                  28
                  <div className="text-xs font-normal">Years Strong</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Bar and Vision & Mission Section */}
      <motion.section 
        className="section w-full"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Stats Bar */}
        <motion.div 
          className="bg-blue-900 w-full py-10 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div 
            className="flex flex-col items-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="flex items-center justify-center gap-3 mb-1">
              <Users className="w-10 h-10" />
              <span className="text-3xl font-bold"><AnimatedCounter target={1200} />+</span>
            </div>
            <span className="text-sm">Students</span>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="flex items-center justify-center gap-3 mb-1">
              <Gem className="w-10 h-10" />
              <span className="text-3xl font-bold"><AnimatedCounter target={50} />+</span>
            </div>
            <span className="text-sm">Expert Teachers</span>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="flex items-center justify-center gap-3 mb-1">
              <Star className="w-10 h-10" />
              <span className="text-3xl font-bold"><AnimatedCounter target={28} /></span>
            </div>
            <span className="text-sm">Years of Excellence</span>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="flex items-center justify-center gap-3 mb-1">
              <Trophy className="w-10 h-10" />
              <span className="text-3xl font-bold"><AnimatedCounter target={100} />+</span>
            </div>
            <span className="text-sm">Awards Won</span>
          </motion.div>
        </motion.div>
        {/* Vision & Mission */}
        <motion.div 
          className="bg-white w-full py-12 flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-8 px-4 mx-auto">
            <motion.img 
              src="/SBA Building.jpg" 
              alt="School Building" 
              className="rounded-xl shadow-lg w-full max-w-sm object-cover"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
            />
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Vision & Mission</h2>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-sky-400 mb-1">Our Vision</h3>
                <p className="text-gray-800 text-base mb-2">To form and evolve a vibrant scientific and educational community that is creative, adaptable, and internationally renowned for excellence in education and research, and for improving society through its innovative educational strategies.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-sky-400 mb-1">Our Mission</h3>
                <p className="text-gray-800 text-base">Advancing the frontiers of knowledge, blending theory with practice. Motivating and enabling students to seek the highest levels of intellectual achievements and personal growth, to become complete human beings. Sharing knowledge, discoveries and inventions for the betterment of the world at large.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="section py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white max-w-full overflow-x-hidden"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Ready to Join Our Community?</h2>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
              Discover the difference that quality education makes in shaping tomorrow's leaders
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Link
                to="/admissions/procedure"
                className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
            Apply Now
          </Link>
              <Link
                to="/about/contact"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-blue-600 transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Popups and Notifications */}
      <AdmissionPopup 
        isOpen={isAdmissionPopupOpen} 
        onClose={handleAdmissionPopupClose} 
      />
      
      <UpcomingEventsAside 
        isOpen={isUpcomingEventsAsideOpen} 
        onClose={handleUpcomingEventsAsideClose} 
      />

      {isNotificationOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm">Thank you for your interest! Check out our upcoming events.</p>
            <button
              onClick={handleNotificationClose}
              className="ml-4 text-white hover:text-gray-200"
            >
              ×
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

// Animated Counter Component
const AnimatedCounter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Start animation immediately
    const startDelay = setTimeout(() => {
      setIsAnimating(true);
      console.log('Starting animation for target:', target);
      
      // Phase 1: Quick random numbers
      let randomStep = 0;
      const randomInterval = setInterval(() => {
        const randomNum = Math.floor(Math.random() * (target * 2));
        setCount(randomNum);
        randomStep++;
        
        if (randomStep >= 10) { // Reduced from 20 to 10
          clearInterval(randomInterval);
          console.log('Random phase done, counting to target');
          
          // Phase 2: Quick count to target
          let current = 0;
          const countInterval = setInterval(() => {
            current++;
            setCount(current);
            
            if (current >= target) {
              clearInterval(countInterval);
              console.log('Animation finished');
            }
          }, 30); // Reduced from 100ms to 30ms
        }
      }, 30); // Reduced from 100ms to 30ms
    }, 100); // Reduced from 500ms to 100ms

    return () => clearTimeout(startDelay);
  }, [target]);

  return (
    <span className="text-amber-500 font-bold">
      {count}
    </span>
  );
};

export default HomePage;