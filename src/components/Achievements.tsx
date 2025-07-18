import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, BookOpen, Globe, Heart, Star, Target, Shield, Lightbulb, Trophy } from 'lucide-react';
import ErrorBoundary from './ErrorBoundary';
import { motion } from 'framer-motion';

const ParallaxBackground = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Parallax factors for each icon
  const factors = [0.2, 0.15, 0.1, 0.18, 0.13];
  return (
    <div className="pointer-events-none select-none fixed top-0 left-0 w-full h-full z-0" aria-hidden>
      {/* School Logo */}
      <img
        src="/LOGOS/sba-logo.png"
        alt="School Logo Parallax"
        className="absolute opacity-10"
        style={{
          left: '10%',
          top: `calc(12vh + ${scrollY * factors[0]}px)`,
          width: '120px',
          filter: 'blur(0.5px)',
          transition: 'opacity 0.3s',
        }}
      />
      {/* Star Icon */}
      <Star
        className="absolute text-blue-300 opacity-20"
        style={{
          left: '70%',
          top: `calc(20vh + ${scrollY * factors[1]}px)`,
          width: 80,
          height: 80,
          filter: 'blur(0.5px)',
        }}
      />
      {/* Trophy Icon */}
      <Trophy
        className="absolute text-yellow-300 opacity-10"
        style={{
          left: '50%',
          top: `calc(60vh + ${scrollY * factors[2]}px)`,
          width: 100,
          height: 100,
          filter: 'blur(0.5px)',
        }}
      />
      {/* Award Icon */}
      <Award
        className="absolute text-blue-200 opacity-10"
        style={{
          left: '80%',
          top: `calc(80vh + ${scrollY * factors[3]}px)`,
          width: 90,
          height: 90,
          filter: 'blur(0.5px)',
        }}
      />
      {/* Heart Icon */}
      <Heart
        className="absolute text-pink-200 opacity-10"
        style={{
          left: '25%',
          top: `calc(70vh + ${scrollY * factors[4]}px)`,
          width: 70,
          height: 70,
          filter: 'blur(0.5px)',
        }}
      />
    </div>
  );
};

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <motion.section
      className="pt-20 min-h-screen bg-gradient-to-br from-amber-50 via-white to-blue-50 relative overflow-x-clip"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.7 }}
    >
      {/* Decorative Accent */}
      <div className="absolute left-1/2 -translate-x-1/2 top-8 z-0 opacity-10 pointer-events-none select-none">
        <Star className="w-40 h-40 text-amber-300 animate-pulse" />
      </div>
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight drop-shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              viewport={{ once: true, amount: 0.7 }}
            >
              Explore Our Achievements
            </motion.h2>
            <motion.p
              className="text-2xl text-gray-600 mb-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
              viewport={{ once: true, amount: 0.7 }}
            >
              Discover the many ways St. Britto's Academy excels
            </motion.p>
            <motion.div
              className="flex justify-center mt-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
              viewport={{ once: true, amount: 0.7 }}
            >
              <Award className="h-10 w-10 text-amber-500" />
            </motion.div>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <Link to="/achievements/school" className="group bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl overflow-hidden shadow-2xl hover:shadow-amber-200/60 transition-all duration-300 border border-blue-200 hover:scale-105">
              <div className="relative h-72 flex items-center justify-center bg-white/60">
                <img
                  src="/AWARDS/asia-book-of-records-singing.jpg"
                  alt="School Achievements"
                  className="max-h-48 w-auto object-contain mx-auto my-6 rounded-xl shadow-md group-hover:scale-105 transition-transform duration-700 ease-in-out bg-white"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-80 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">School Achievements</h3>
                  <p className="text-blue-100 text-lg">Institutional awards, recognitions, and milestones</p>
                </div>
              </div>
              <div className="p-8 bg-white/80 backdrop-blur-xl">
                <p className="text-gray-700 mb-4 text-lg">
                  Explore our institutional achievements including international recognitions, academic excellence awards, and environmental initiatives that showcase our commitment to quality education.
                </p>
                <span className="text-blue-700 font-bold inline-flex items-center group-hover:underline group-hover:text-amber-600 transition-colors duration-300">
                  View School Achievements <span className="ml-2">→</span>
                </span>
              </div>
            </Link>
            <Link to="/achievements/students" className="group bg-gradient-to-br from-purple-100 to-purple-50 rounded-3xl overflow-hidden shadow-2xl hover:shadow-amber-200/60 transition-all duration-300 border border-purple-200 hover:scale-105">
              <div className="relative h-72">
                <img
                  src="/STUDENTS ACHIEVENMENT/11.jpeg"
                  alt="Student Achievements"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">Student Achievements</h3>
                  <p className="text-purple-100 text-lg">Individual accomplishments and success stories</p>
                </div>
              </div>
              <div className="p-8 bg-white/80 backdrop-blur-xl">
                <p className="text-gray-700 mb-4 text-lg">
                  Discover the remarkable achievements of our students in academics, sports, arts, and leadership. From board exam toppers to national competition winners, our students excel in diverse fields.
                </p>
                <span className="text-purple-700 font-bold inline-flex items-center group-hover:underline group-hover:text-amber-600 transition-colors duration-300">
                  View Student Achievements <span className="ml-2">→</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </motion.section>
  );
};

export default Achievements;