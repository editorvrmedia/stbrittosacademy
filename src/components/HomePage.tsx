import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Award, Users, BookOpen, Trophy, Star, Target, Eye, Gem, ChevronDown } from 'lucide-react';
import UpcomingEventsAside from './UpcomingEventsAside';
import AdmissionPopup from './AdmissionPopup';
import StylizedLogo from './StylizedLogo';
import { motion, useInView, animate } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ErrorBoundary from './ErrorBoundary';

// Register ScrollTrigger plugin only on client side
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const HomePage = () => {
  const [isAdmissionPopupOpen, setIsAdmissionPopupOpen] = useState(false);
  const [isUpcomingEventsAsideOpen, setIsUpcomingEventsAsideOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  
  // Refs for GSAP animations - now only for simple animations, not pinning
  const quickAccessRef = useRef<HTMLElement>(null);
  const yearsSectionRef = useRef<HTMLElement>(null);
  const statsBarRef = useRef<HTMLDivElement>(null);
  const ctaSectionRef = useRef<HTMLElement>(null);
  
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

  // GSAP Animations Setup - Refactored to use static wrappers and simple animations only
  useEffect(() => {
    // Guard against SSR and missing refs or unmounted component
    if (typeof window === 'undefined' || !quickAccessRef.current || !yearsSectionRef.current || !statsBarRef.current || !ctaSectionRef.current) {
      return;
    }

    const scrollTriggers: ScrollTrigger[] = [];

    try {
      // Quick Access Section Animation - Simple fade/slide only
      if (quickAccessRef.current) {
        const trigger = ScrollTrigger.create({
          trigger: quickAccessRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          onEnter: () => {
            const elements = quickAccessRef.current?.querySelectorAll('.quick-access-item');
            if (elements && elements.length > 0) {
              gsap.fromTo(elements, 
                {
                  opacity: 0,
                  y: 50,
                  scale: 0.9
                },
                {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  duration: 0.8,
                  stagger: 0.1,
                  ease: 'power2.out'
                }
              );
            }
          }
        });
        scrollTriggers.push(trigger);
      }

      // 28 Years Section Animation - Simple fade/slide only
      if (yearsSectionRef.current) {
        const trigger = ScrollTrigger.create({
          trigger: yearsSectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          onEnter: () => {
            const tl = gsap.timeline();
            const h2Element = yearsSectionRef.current?.querySelector('h2');
            const contentElements = yearsSectionRef.current?.querySelectorAll('.years-content > *');
            const imageElements = yearsSectionRef.current?.querySelectorAll('.years-image > *');
            
            if (h2Element) {
              tl.fromTo(h2Element, 
                { opacity: 0, y: 60 },
                { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
              );
            }
            
            if (contentElements && contentElements.length > 0) {
              tl.fromTo(contentElements, 
                { opacity: 0, x: -50 },
                { opacity: 1, x: 0, duration: 0.6, stagger: 0.2, ease: 'power2.out' },
                '-=0.4'
              );
            }
            
            if (imageElements && imageElements.length > 0) {
              tl.fromTo(imageElements, 
                { opacity: 0, x: 50 },
                { opacity: 1, x: 0, duration: 0.6, stagger: 0.2, ease: 'power2.out' },
                '-=0.6'
              );
            }
          }
        });
        scrollTriggers.push(trigger);
      }

      // Stats Bar Animation - Simple fade/slide only
      if (statsBarRef.current) {
        const trigger = ScrollTrigger.create({
          trigger: statsBarRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          onEnter: () => {
            const elements = statsBarRef.current?.querySelectorAll('.stat-item');
            if (elements && elements.length > 0) {
              gsap.fromTo(elements, 
                {
                  opacity: 0,
                  y: 30,
                  scale: 0.8
                },
                {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  duration: 0.6,
                  stagger: 0.1,
                  ease: 'power2.out'
                }
              );
            }
          }
        });
        scrollTriggers.push(trigger);
      }

      // CTA Section Animation - Simple fade/slide only
      if (ctaSectionRef.current) {
        const trigger = ScrollTrigger.create({
          trigger: ctaSectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          onEnter: () => {
            const elements = ctaSectionRef.current?.querySelectorAll('*');
            if (elements && elements.length > 0) {
              gsap.fromTo(elements, 
                {
                  opacity: 0,
                  y: 40
                },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
                  stagger: 0.1,
                  ease: 'power2.out'
                }
              );
            }
          }
        });
        scrollTriggers.push(trigger);
      }
    } catch (error) {
      console.error('GSAP animation error:', error);
    }

    // Cleanup function
    return () => {
      try {
        scrollTriggers.forEach(trigger => trigger.kill());
        ScrollTrigger.getAll().forEach(trigger => {
          if (scrollTriggers.includes(trigger)) {
            trigger.kill();
          }
        });
      } catch (error) {
        console.error('GSAP cleanup error:', error);
      }
    };
  }, []);

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
      {/* Removed minimal test for AnimatedCounter animation */}

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
      {/* Hero Section is rendered in App.tsx */}

      {/* Quick Access Section */}
      <motion.section
        ref={quickAccessRef}
        className="section pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-12 lg:pb-16 bg-transparent max-w-full overflow-x-hidden"
        initial={false}
        animate={{ opacity: 1 }}
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
                className="quick-access-item"
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
        ref={yearsSectionRef}
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
            Celebrating <AnimatedCounter target={28} className="text-3xl sm:text-4xl lg:text-5xl" textColor="text-sky-500" /> Years of Educational Excellence
          </motion.h2>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
            {/* Left: Text Content */}
            <motion.div 
              className="flex-1 max-w-xl years-content"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <section
                className="bg-gradient-to-br from-[#f4faff] to-[#ffffff] rounded-xl shadow-md px-6 py-10 max-w-4xl mx-auto mb-6 font-[Inter,sans-serif] flex flex-col gap-6"
              >
                <p className="text-lg text-[#03045e] leading-relaxed mb-4">
                  Established in 1997, St. Britto's Academy has been at the forefront of <span className="font-semibold text-[#0077b6]">academic excellence</span> for over 28 years. Our commitment to <span className="font-semibold text-[#0077b6]">holistic development</span>, academic rigor, and character formation has made us one of Chennai's most trusted educational institutions.
                </p>
                <p className="text-lg text-[#03045e] leading-relaxed mb-4">
                  We believe in nurturing not just <span className="font-semibold text-[#0077b6]">academic excellence</span>, but also the moral, physical, and social development of every child. Our comprehensive curriculum, experienced faculty, and state-of-the-art facilities create an environment where students thrive and reach their full potential.
                </p>
                {/* Quote Card */}
                <div className="bg-white rounded-md shadow-sm p-4 border-l-4 border-yellow-400 mb-4">
                  <p className="italic text-slate-700 text-lg">
                    "Education transcends the mere accumulation of knowledge. It's about the shaping of character"
                  </p>
                  <div className="text-right font-medium text-slate-700 mt-2">- Vimala Rani Britto</div>
                </div>
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-4 py-1 rounded-full bg-sky-100 text-sky-800 font-semibold text-sm hover:scale-105 transition-transform duration-200">Excellence</span>
                  <span className="px-4 py-1 rounded-full bg-yellow-100 text-yellow-800 font-semibold text-sm hover:scale-105 transition-transform duration-200">Innovation</span>
                  <span className="px-4 py-1 rounded-full bg-purple-100 text-purple-800 font-semibold text-sm hover:scale-105 transition-transform duration-200">Character Building</span>
                </div>
              </section>
            </motion.div>
            {/* Right: Trophy Image and Badge */}
            <motion.div 
              className="flex-1 flex flex-col items-center relative max-w-md w-full years-image"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <img
                src="/AWARDS/school-excellence-award-2018.jpg"
                alt="School Excellence Leadership Award 2018"
                className="rounded-xl shadow-2xl w-full max-w-md mx-auto h-auto bg-white"
                style={{objectFit: 'contain', minHeight: '340px', minWidth: '260px'}}
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

          {/* Event Highlights Marquee - now below the image */}
          <motion.div 
            className="mt-8 mb-8 overflow-x-hidden bg-white bg-opacity-20 rounded-lg py-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div
              className="flex whitespace-nowrap"
              style={{
                animation: 'marquee-test 20s linear infinite',
                minWidth: '200%',
              }}
            >
              <style>{`
                @keyframes marquee-test {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
              `}</style>
              <div className="flex items-center space-x-8 px-4">
                <Link to="/events/investiture-ceremony-2025-26" className="text-lg font-bold text-sky-400 hover:underline">• Investiture Ceremony 2025-26</Link>
                <Link to="/events/pongal-celebration-2025" className="text-lg font-bold text-sky-400 hover:underline">• Pongal Celebration 2025</Link>
                <Link to="/events/christmas-celebration-2024" className="text-lg font-bold text-sky-400 hover:underline">• Christmas Celebration 2024</Link>
                <Link to="/events/childrens-day-2024" className="text-lg font-bold text-sky-400 hover:underline">• Children's Day 2024</Link>
                <Link to="/events/diwali-celebration-2024" className="text-lg font-bold text-sky-400 hover:underline">• Diwali Celebration 2024</Link>
                <Link to="/events/byc-royal-gridlock-2024" className="text-lg font-bold text-sky-400 hover:underline">• BYC ROYAL GRIDLOCK 2024</Link>
                <Link to="/events/grandparents-day-2024" className="text-lg font-bold text-sky-400 hover:underline">• Grandparents Day 2024</Link>
                <Link to="/events/zest-regalia-2024" className="text-lg font-bold text-sky-400 hover:underline">• ZEST-REGALIA 2024</Link>
                <Link to="/events/asset-2023" className="text-lg font-bold text-sky-400 hover:underline">• ASSET - 2023, AUGUST 19, 26 - 2023</Link>
                <Link to="/events/byc-royal-gridlock-2024" className="text-lg font-bold text-sky-400 hover:underline">• ROYAL GRIDLOCK - 2023, AUGUST 4, 2023</Link>
                <Link to="/events/young-forum-2024" className="text-lg font-bold text-sky-400 hover:underline">• YOUNG FORUM - 2023, AUGUST 3, 2023</Link>
                <Link to="/events/array-of-sumptuousness-2023" className="text-lg font-bold text-sky-400 hover:underline">• AN ARRAY OF SUMPTUOUSNESS ON YOUR PLATE !!! July 21 to 31, 2023</Link>
                <Link to="/events/investiture-ceremony-2024" className="text-lg font-bold text-sky-400 hover:underline">• INVESTITURE CEREMONY July 3, 2023</Link>
                <Link to="/events/zest-regalia-2024" className="text-lg font-bold text-sky-400 hover:underline">• ZEST REGALIA 2023, 22, 23 JUNE 2023</Link>
                <Link to="/events/mathematics-ix-2023" className="text-lg font-bold text-sky-400 hover:underline">• MATHEMATICS-IX STD, JUNE 20, 23</Link>
                <Link to="/events/kg-graduation-day-2024" className="text-lg font-bold text-sky-400 hover:underline">• GRADUATION DAY FOR KG, FEBRUARY 18, 23</Link>
                <Link to="/events/space-and-seasons-kg-2023" className="text-lg font-bold text-sky-400 hover:underline">• SPACE AND SEASONS KG, FEBRUARY 13,23</Link>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex items-center space-x-8 px-4">
                <Link to="/events/investiture-ceremony-2025-26" className="text-lg font-bold text-sky-400 hover:underline">• Investiture Ceremony 2025-26</Link>
                <Link to="/events/pongal-celebration-2025" className="text-lg font-bold text-sky-400 hover:underline">• Pongal Celebration 2025</Link>
                <Link to="/events/christmas-celebration-2024" className="text-lg font-bold text-sky-400 hover:underline">• Christmas Celebration 2024</Link>
                <Link to="/events/childrens-day-2024" className="text-lg font-bold text-sky-400 hover:underline">• Children's Day 2024</Link>
                <Link to="/events/diwali-celebration-2024" className="text-lg font-bold text-sky-400 hover:underline">• Diwali Celebration 2024</Link>
                <Link to="/events/byc-royal-gridlock-2024" className="text-lg font-bold text-sky-400 hover:underline">• BYC ROYAL GRIDLOCK 2024</Link>
                <Link to="/events/grandparents-day-2024" className="text-lg font-bold text-sky-400 hover:underline">• Grandparents Day 2024</Link>
                <Link to="/events/zest-regalia-2024" className="text-lg font-bold text-sky-400 hover:underline">• ZEST-REGALIA 2024</Link>
              </div>
            </div>
          </motion.div>
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
          ref={statsBarRef}
          className="bg-blue-900 w-full py-10 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div 
            className="flex flex-col items-center text-white stat-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex items-center justify-center gap-3 mb-1">
              <Users className="w-10 h-10" />
              <AnimatedCounter target={1200} suffix="+" duration={1200} className="text-3xl" />
            </div>
            <span className="text-sm">Students</span>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center text-white stat-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex items-center justify-center gap-3 mb-1">
              <Gem className="w-10 h-10" />
              <AnimatedCounter target={50} suffix="+" duration={1200} className="text-3xl" />
            </div>
            <span className="text-sm">Expert Teachers</span>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center text-white stat-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex items-center justify-center gap-3 mb-1">
              <Star className="w-10 h-10" />
              <AnimatedCounter target={28} duration={1200} className="text-3xl" />
            </div>
            <span className="text-sm">Years of Excellence</span>
          </motion.div>
          <motion.div 
            className="flex flex-col items-center text-white stat-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex items-center justify-center gap-3 mb-1">
              <Trophy className="w-10 h-10" />
              <AnimatedCounter target={100} suffix="+" duration={1200} className="text-3xl" />
            </div>
            <span className="text-sm">Awards Won</span>
          </motion.div>
        </motion.div>

      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        ref={ctaSectionRef}
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
const AnimatedCounter = ({ target, suffix = '', duration = 1000, className = '', textColor = '' }: { target: number, suffix?: string, duration?: number, className?: string, textColor?: string }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCount();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCount = () => {
    let startTime: number | null = null;
    const startCount = 0;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = Math.floor(startCount + (target - startCount) * progress);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(step);
  };

  const formatNumber = (num: number) => num.toLocaleString();

  return (
    <span ref={elementRef} className={`font-bold ${className} ${textColor}`}>
      {formatNumber(count)}{suffix}
    </span>
  );
};

export default () => (
  <ErrorBoundary>
    <HomePage />
  </ErrorBoundary>
);