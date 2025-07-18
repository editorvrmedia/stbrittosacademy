import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import { ParallaxBackground, ParallaxElement } from './parallax';

const HEADER_HEIGHT = 76; // 28px TopHeader + ~48px Header

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const newsBarRef = useRef<HTMLDivElement>(null);
  const scrollArrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple scroll-based animations without GSAP pinning
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const video = videoRef.current;
      const newsBar = newsBarRef.current;
      const scrollArrow = scrollArrowRef.current;

      if (video) {
        // Simple zoom effect based on scroll
        const progress = Math.min(scrollY / 500, 1);
        const scale = 1 + (progress * 0.15);
        video.style.transform = `scale(${scale})`;
      }

      if (newsBar && scrollY > 100) {
        newsBar.style.opacity = Math.max(0, 1 - (scrollY - 100) / 200).toString();
        newsBar.style.transform = `translateY(${Math.min(-20, -(scrollY - 100) / 10)}px)`;
      }

      if (scrollArrow && scrollY > 50) {
        scrollArrow.style.opacity = Math.max(0, 1 - scrollY / 200).toString();
        scrollArrow.style.transform = `translateY(${Math.min(-30, -scrollY / 10)}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Visible line separator between header and video */}
      <div className="w-full h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600"></div>
      
      <div ref={heroRef}>
        <AnimatePresence mode="wait">
          <motion.section
            key="hero-section"
            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative w-full flex items-center justify-center overflow-hidden max-w-full pb-0"
            style={{ minHeight: 'auto' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Responsive Banner Video Background with Parallax */}
            <ParallaxBackground
              videoSrc="/videointro.mp4"
              speed={0.3}
              direction="up"
              scale={true}
              overlay={true}
              overlayColor="rgba(0, 0, 0, 0.2)"
              overlayOpacity={0.2}
              className="relative w-full overflow-hidden"
              style={{ minHeight: '40vw', height: '40vw', maxHeight: '80vh' }}
            >
              {/* Scroll Arrow with Parallax */}
              <div 
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer z-10 transition-all duration-300"
                onClick={() => {
                  try {
                    const quickAccessSection = document.querySelector('[ref="quickAccessRef"]');
                    if (quickAccessSection) {
                      quickAccessSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      // Fallback: scroll to a reasonable position
                      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
                    }
                  } catch (error) {
                    console.error('Scroll error:', error);
                    // Fallback: scroll to top of page
                    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
                  }
                }}
              >
                <ParallaxElement speed={0.8} direction="down">
                <FiChevronDown className="w-8 h-8" />
                </ParallaxElement>
              </div>
            </ParallaxBackground>
          </motion.section>
        </AnimatePresence>
        {/* Scrolling Marquee News Bar (below the video) */}
        <div ref={newsBarRef} className="w-full bg-sky-400 overflow-hidden relative z-20 px-2 sm:px-4 py-2 transition-all duration-300">
          <div className="animate-infinite-scroll whitespace-nowrap font-semibold text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl" 
            style={{ 
              fontFamily: 'Inter, Arial, sans-serif', 
              letterSpacing: '0.01em',
              lineHeight: '1.4'
            }}>
            Latest News: Applications for admission 2025-2026 to Play Group, Pre-KG, LKG, UKG, Classes I to IX, and XI will be issued from 11th November 2024 onwards.
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection; 