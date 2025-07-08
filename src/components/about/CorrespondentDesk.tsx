import React, { useEffect, useRef } from 'react';
import { Quote, BookOpen, Users, Target, Lightbulb, Heart, Award, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin only on client side
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const CorrespondentDesk = () => {
  // Refs for GSAP animations - now only for simple animations, not pinning
  const heroRef = useRef<HTMLElement>(null);
  const profileRef = useRef<HTMLElement>(null);
  const messageRef = useRef<HTMLElement>(null);
  const philosophyRef = useRef<HTMLElement>(null);
  const focusRef = useRef<HTMLElement>(null);
  const successRef = useRef<HTMLElement>(null);
  const legacyRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  const educationalFocus = [
    {
      icon: Heart,
      title: 'Character Formation',
      description: 'Education lies in the formation of character, not merely accumulation of knowledge'
    },
    {
      icon: Users,
      title: 'Competent Faculty',
      description: 'Recruiting skilled teaching faculty who can teach and guide students effectively'
    },
    {
      icon: Lightbulb,
      title: 'Critical Thinking',
      description: 'Teaching is about developing critical thinking and analytical skills, not depositing facts'
    },
    {
      icon: Target,
      title: 'Innovation in Teaching',
      description: 'Faculty are innovative in their teaching methods and evaluation approaches'
    }
  ];

  const educationalPhilosophy = [
    {
      title: 'Character Over Information',
      description: 'Not information, but the formation of character should be the prime focus of educational enterprise'
    },
    {
      title: 'Unique Learning Experience',
      description: <>Making learning at <span className="font-revue">St. Britto's</span> unique and interesting through innovative approaches</>
    },
    {
      title: 'Faculty Accompaniment',
      description: 'Our faculty will accompany your child\'s growth throughout their educational journey'
    },
    {
      title: 'Parent Engagement',
      description: 'Active collaboration with parents to ensure holistic development of students'
    },
    {
      title: 'Holistic Development',
      description: 'Focus on academic, social, emotional, and physical well-being'
    }
  ];

  const successMeasures = [
    'How you handle yourself in challenging situations',
    'How you relate to others with empathy and understanding',
    'The positive impact you make on your community',
    'The character and values you demonstrate daily',
    'Your contribution to making others\' lives meaningful',
    'The wisdom and integrity you show in your decisions'
  ];

  // GSAP Animations Setup - Refactored to use static wrappers and simple animations only
  useEffect(() => {
    // Guard against SSR and missing refs
    if (typeof window === 'undefined' || !heroRef.current || !messageRef.current || !philosophyRef.current || !focusRef.current || !successRef.current || !ctaRef.current) {
      return;
    }

    const scrollTriggers: ScrollTrigger[] = [];

    try {
      // Hero Section Animation - Simple fade/slide only
      if (heroRef.current) {
        const trigger = ScrollTrigger.create({
          trigger: heroRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          onEnter: () => {
            const elements = heroRef.current?.querySelectorAll('*');
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
                  duration: 1,
                  stagger: 0.1,
                  ease: 'power2.out'
                }
              );
            }
          }
        });
        scrollTriggers.push(trigger);
      }

      // Message Section Animation - Simple fade/slide only
      if (messageRef.current) {
        const trigger = ScrollTrigger.create({
          trigger: messageRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          onEnter: () => {
            const tl = gsap.timeline();
            const h2Element = messageRef.current?.querySelector('h2');
            const pElements = messageRef.current?.querySelectorAll('p');
            
            if (h2Element) {
              tl.fromTo(h2Element,
                { opacity: 0, y: 60 },
                { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
              );
            }
            
            if (pElements && pElements.length > 0) {
              tl.fromTo(pElements,
                { opacity: 0, x: -50 },
                { opacity: 1, x: 0, duration: 0.6, stagger: 0.2, ease: 'power2.out' },
                '-=0.4'
              );
            }
          }
        });
        scrollTriggers.push(trigger);
      }

      // Philosophy Section Animation - Simple fade/slide only
      if (philosophyRef.current) {
        const trigger = ScrollTrigger.create({
          trigger: philosophyRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          onEnter: () => {
            const elements = philosophyRef.current?.querySelectorAll('.philosophy-item');
            if (elements && elements.length > 0) {
              gsap.fromTo(elements,
                {
                  opacity: 0,
                  y: 40,
                  scale: 0.9
                },
                {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  duration: 0.8,
                  stagger: 0.15,
                  ease: 'power2.out'
                }
              );
            }
          }
        });
        scrollTriggers.push(trigger);
      }

      // Focus Areas Animation - Simple fade/slide only
      if (focusRef.current) {
        const trigger = ScrollTrigger.create({
          trigger: focusRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          onEnter: () => {
            const elements = focusRef.current?.querySelectorAll('.focus-item');
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

      // Success Stories Animation - Simple fade/slide only
      if (successRef.current) {
        const trigger = ScrollTrigger.create({
          trigger: successRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          onEnter: () => {
            const elements = successRef.current?.querySelectorAll('.success-item');
            if (elements && elements.length > 0) {
              gsap.fromTo(elements,
                {
                  opacity: 0,
                  y: 40,
                  scale: 0.9
                },
                {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  duration: 0.8,
                  stagger: 0.2,
                  ease: 'power2.out'
                }
              );
            }
          }
        });
        scrollTriggers.push(trigger);
      }

      // Image Animation - Simple fade/slide only
      if (legacyRef.current) {
        const trigger = ScrollTrigger.create({
          trigger: legacyRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          onEnter: () => {
            const tl = gsap.timeline();
            const imgElement = legacyRef.current?.querySelector('img');
            const contentElements = legacyRef.current?.querySelectorAll('.legacy-content > *');
            
            if (imgElement) {
              tl.fromTo(imgElement,
                { opacity: 0, x: 100, scale: 0.8 },
                { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: 'power2.out' }
              );
            }
            
            if (contentElements && contentElements.length > 0) {
              tl.fromTo(contentElements,
                { opacity: 0, x: -50 },
                { opacity: 1, x: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out' },
                '-=0.4'
              );
            }
          }
        });
        scrollTriggers.push(trigger);
      }

      // CTA Section Animation - Simple fade/slide only
      if (ctaRef.current) {
        const trigger = ScrollTrigger.create({
          trigger: ctaRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          onEnter: () => {
            const elements = ctaRef.current?.querySelectorAll('*');
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
      console.error('CorrespondentDesk GSAP error:', error);
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
        console.error('CorrespondentDesk GSAP cleanup error:', error);
      }
    };
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="py-16 bg-gradient-to-r from-indigo-700 to-indigo-900 text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.7 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Correspondent's Desk</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Insights from our Correspondent on character formation, innovative education, and creating meaningful learning experiences at St. Britto's Academy.
          </p>
        </div>
      </motion.section>

      {/* Correspondent's Profile */}
      <motion.section
        ref={profileRef}
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.7 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <img
                src="/DSC00337.JPG"
                alt="Dr. Vimala Rani Britto - Correspondent"
                className="w-80 h-80 rounded-full object-cover mx-auto lg:mx-0 shadow-2xl"
              />
            </div>
            <div className="profile-content">
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <h2 className="text-4xl font-bold text-gray-900 mb-0">Dr. Vimala Rani Britto</h2>
                <a
                  href="https://drvimalaranibritto.blogspot.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 px-4 py-1 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-full shadow transition-colors duration-200"
                >
                  To Know More
                </a>
              </div>
              <p className="text-xl text-indigo-600 font-semibold mb-6">Secretary & Correspondent, <span className="font-revue">St. Britto's Group of Institutions</span></p>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Dr. Vimala Rani Britto serves as the Secretary & Correspondent of <span className="font-revue">St. Britto's Group of Institutions</span>,
                  bringing exceptional leadership and vision to educational administration. As the administrative head,
                  she makes enormous efforts to make learning at <span className="font-revue">St. Britto's</span> unique and interesting.
                </p>
                <p className="text-lg leading-relaxed">
                  Inspired by the experience of her parents, who were dedicated teachers, she is passionate about
                  contributing to society through educational institutions. Her philosophy centers on character
                  formation rather than mere information transfer, believing that education should make life
                  meaningful for students and others.
                </p>
              </div>
              <div className="mt-8 grid md:grid-cols-3 gap-4 profile-stats">
                <div className="text-center p-4 bg-indigo-50 rounded-lg">
                  <BookOpen className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">Secretary</p>
                  <p className="text-sm text-gray-600">& Correspondent</p>
                </div>
                <div className="text-center p-4 bg-indigo-50 rounded-lg">
                  <Users className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">Administrative</p>
                  <p className="text-sm text-gray-600">Head</p>
                </div>
                <div className="text-center p-4 bg-indigo-50 rounded-lg">
                  <Heart className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">Educational</p>
                  <p className="text-sm text-gray-600">Visionary</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Correspondent's Message */}
      <motion.section
        ref={messageRef}
        className="py-16 bg-gray-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.7 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Quote className="h-16 w-16 text-indigo-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Message from the Correspondent</h2>
          </div>

          <div className="bg-white p-8 lg:p-12 rounded-xl shadow-lg">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                <span className="text-2xl font-bold text-indigo-700">"</span>I warmly welcome you to enter into the portals of <span className="font-revue">St. Britto's Academy</span> and thank you for choosing <span className="font-revue">St. Britto's</span> for your child's studies and shaping their future. I am sure that this choice will make a significant difference in their life.
              </p>

              <p>
                Here, at St. Britto's, we look at education differently. For us, <strong>education does not lie merely in the accumulation of knowledge</strong>. Instead, it lies in the formation of one's character. <em>Not information, but the formation of character should be the prime focus of the educational enterprise</em>. It is our passion and, in a sense, it is our vocation.
              </p>

              <p>
                Inspired by the experience of our parents, who were dedicated teachers, we want to contribute to society through our educational institutions. As the administrative head of the institution, I make an enormous effort to make learning at <span className="font-revue">St. Britto's</span> unique and interesting.
              </p>

              <p>
                To this end, we recruit <strong>competent teaching faculty who have the skills to teach and guide your child</strong>. Teaching is not about depositing facts and figures; it is about <em>critical thinking and analytical skills</em>. Realizing innovation is the engine that drives growth, and our faculty are innovative in the way they teach and evaluate learning.
              </p>

              <p>
                More importantly, <strong>our faculty will accompany your child's growth</strong>. Success in life, I feel, is not measured by the money you earn and the comfort you give, but it is measured by how you handle yourself and relate to others. All their education must make their life meaningful not only to them but also to others.
              </p>

              <p>
                This is what we aim at in our school.
              </p>

              <div className="bg-indigo-50 p-6 rounded-xl mt-8">
                <p className="text-xl font-semibold text-indigo-700 italic text-center">
                  "With best wishes"
                </p>
              </div>

              <div className="pt-8 border-t border-gray-200">
                <p className="font-bold text-indigo-700 text-xl mb-0">Dr. Vimala Rani Britto</p>
                <p className="text-indigo-600">Secretary and Correspondent</p>
                <p className="text-indigo-600"><span className="font-revue">St. Britto's Academy</span></p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Educational Philosophy */}
      <motion.section
        ref={philosophyRef}
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.7 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Educational Philosophy</h2>
            <p className="text-xl text-gray-600">Core principles that guide our approach to education</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {educationalPhilosophy.map((philosophy, index) => (
              <div key={index} className="bg-indigo-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 philosophy-item">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{philosophy.title}</h3>
                <p className="text-gray-700 text-lg">{philosophy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Educational Focus Areas */}
      <section ref={focusRef} className="py-16 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Educational Focus</h2>
            <p className="text-xl text-blue-700">Key areas that define our unique approach to learning</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {educationalFocus.map((focus, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center focus-item">
                <focus.icon className="h-12 w-12 text-blue-700 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-blue-900 mb-3">{focus.title}</h3>
                <p className="text-blue-700">{focus.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Redefined */}
      <section ref={successRef} className="py-16 bg-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How We Measure Success</h2>
            <p className="text-xl max-w-4xl mx-auto">
              "Success in life is not measured by the money you earn and the comfort you give,
              but it is measured by how you handle yourself and relate to others."
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {successMeasures.map((measure, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg hover:bg-opacity-20 transition-all duration-300 success-item">
                <div className="flex items-start">
                  <Star className="h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                  <p className="font-medium">{measure}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy of Teaching */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Inspired by Dedicated Educators</h2>
              <div className="space-y-6">
                <div className="bg-indigo-50 p-6 rounded-xl border-l-4 border-indigo-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Legacy of Teaching</h3>
                  <p className="text-gray-700">
                    Inspired by the experience of our parents, who were dedicated teachers, we want to contribute
                    to society through our educational institutions, carrying forward their passion for education.
                  </p>
                </div>
                <div className="bg-indigo-50 p-6 rounded-xl border-l-4 border-indigo-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Passion & Vocation</h3>
                  <p className="text-gray-700">
                    Character formation is not just our educational approach—it is our passion and, in a sense,
                    it is our vocation to shape young minds with strong moral foundations.
                  </p>
                </div>
                <div className="bg-indigo-50 p-6 rounded-xl border-l-4 border-indigo-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Meaningful Education</h3>
                  <p className="text-gray-700">
                    All education must make students' lives meaningful not only to them but also to others,
                    creating a positive impact on society and fostering a sense of responsibility.
                  </p>
                </div>
              </div>
            </div>
            <div ref={legacyRef} className="legacy-content">
              <img
                src="/vimala.jpg"
                alt="Dr. Vimala Rani Britto - Educational Visionary"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
        ref={ctaRef}
        className="py-16 bg-indigo-900 text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.7 }}
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Join Our Educational Journey</h2>
          <p className="text-xl mb-8">
            Experience the difference that character-based education makes in shaping tomorrow's leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admissions"
              className="bg-white text-indigo-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Apply for Admission
            </a>
            <a
              href="/about/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-indigo-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default CorrespondentDesk;