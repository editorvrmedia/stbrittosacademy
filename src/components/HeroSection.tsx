import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const HEADER_HEIGHT = 76; // 28px TopHeader + ~48px Header

const HeroSection = () => {
  return (
    <>
      {/* Visible line separator between header and video */}
      <div className="w-full h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600"></div>
      
      <motion.section
        className="relative w-full flex items-center justify-center overflow-hidden max-w-full pb-0"
        style={{ minHeight: 'auto' }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Responsive Banner Video Background */}
        <div
          className="relative w-full bg-black z-0 flex items-center justify-center overflow-hidden"
          style={{
            marginTop: 0,
            minHeight: '40vw', // Ensures a good height on all screens
            height: '40vw',
            maxHeight: '80vh',
          }}
        >
          <video
            src="/videointro.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain bg-black z-0 pointer-events-none"
            style={{
              border: 0,
              background: 'black',
              maxHeight: '80vh',
              minHeight: '200px',
            }}
          />
        </div>
      </motion.section>

      {/* Scrolling Marquee News Bar (below the video) */}
      <div className="w-full bg-black/90 overflow-hidden relative z-20 px-2 sm:px-4 py-2">
        <div className="animate-infinite-scroll whitespace-nowrap font-semibold text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl" 
             style={{ 
               fontFamily: 'Inter, Arial, sans-serif', 
               letterSpacing: '0.01em',
               lineHeight: '1.4'
             }}>
          Latest News: Applications for admission 2025-2026 to Play Group, Pre-KG, LKG, UKG, Classes I to IX, and XI will be issued from 11th November 2024 onwards.
        </div>
      </div>
    </>
  );
};

export default HeroSection; 