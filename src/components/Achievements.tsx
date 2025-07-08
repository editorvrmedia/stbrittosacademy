import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, BookOpen, Globe, Heart, Star, Target, Shield, Lightbulb, Trophy } from 'lucide-react';
import ErrorBoundary from './ErrorBoundary';

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
        src="/sba-logo.png"
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
  const reasons = [
    {
      icon: Award,
      title: '28 Years of Excellence',
      description: 'Since 1997, we have consistently delivered quality education and produced outstanding graduates who excel in their chosen fields.',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Our dedicated team of qualified, experienced teachers are committed to nurturing each student\'s potential and ensuring academic success.',
      color: 'blue'
    },
    {
      icon: BookOpen,
      title: 'Holistic Curriculum',
      description: 'We offer a comprehensive curriculum that balances academics with arts, sports, and character development for well-rounded growth.',
      color: 'blue'
    },
    {
      icon: Globe,
      title: 'International Standards',
      description: 'Our international standard education prepares students for global opportunities while maintaining strong cultural roots.',
      color: 'blue'
    }
  ];

  const achievements = [
    { number: '1200+', label: 'Happy Students', icon: Users },
    { number: '95%', label: 'Board Exam Success Rate', icon: Award },
    { number: '50+', label: 'Expert Teachers', icon: BookOpen },
    { number: '100+', label: 'Awards & Recognition', icon: Star }
  ];

  const testimonials = [
    {
      name: 'Mrs. Priya Sharma',
      role: 'Parent of Grade 10 Student',
      content: 'St. Britto\'s Academy has been instrumental in shaping my daughter\'s character and academic excellence. The teachers genuinely care about each student\'s progress.',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Mr. Rajesh Kumar',
      role: 'Parent of Grade 8 Student',
      content: 'The holistic approach to education at St. Britto\'s has helped my son develop not just academically but also as a confident and compassionate individual.',
      image: 'https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Ms. Anita Menon',
      role: 'Alumni Parent',
      content: 'Both my children graduated from St. Britto\'s and are now successful professionals. The foundation they received here was exceptional.',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    }
  ];

  const recentAchievements = [
    {
      title: 'CBSE Board Results 2024-25',
      description: 'Outstanding performance with multiple centum scores in various subjects',
      category: 'Academic',
      image: '/Std-X-1024x591.jpg'
    },
    {
      title: 'Asia Book of Records',
      description: 'Created the largest human image for environmental awareness',
      category: 'International',
      image: '/asia-book-records-mother-planet.jpg'
    },
    {
      title: 'State Basketball Championship',
      description: 'Our team won the state championship for the second consecutive year',
      category: 'Sports',
      image: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      title: 'National Art Competition',
      description: 'Students won top honors at the national level art competition',
      category: 'Arts',
      image: 'https://images.pexels.com/photos/1784578/pexels-photo-1784578.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  return (
    <div className="pt-20 relative overflow-x-clip">
      <ParallaxBackground />
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Achievements</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Celebrating excellence in academics, sports, arts, and community service. 
            Our achievements reflect our commitment to nurturing well-rounded individuals.
          </p>
        </div>
      </section>

      {/* Achievement Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Achievements</h2>
            <p className="text-xl text-gray-600">Discover the many ways <span className="font-revue">St. Britto's Academy</span> excels</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Link to="/achievements/school" className="bg-blue-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64">
                <img
                  src="/asia-book-records-mother-planet.jpg"
                  alt="School Achievements"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-3xl font-bold text-white mb-2">School Achievements</h3>
                  <p className="text-blue-100">Institutional awards, recognitions, and milestones</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Explore our institutional achievements including international recognitions, academic excellence awards, and environmental initiatives that showcase our commitment to quality education.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  View School Achievements
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>
              </div>
            </Link>
            
            <Link to="/achievements/students" className="bg-purple-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64">
                <img
                  src="/Std-XII.jpg"
                  alt="Student Achievements"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-3xl font-bold text-white mb-2">Student Achievements</h3>
                  <p className="text-purple-100">Individual accomplishments and success stories</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Discover the remarkable achievements of our students in academics, sports, arts, and leadership. From board exam toppers to national competition winners, our students excel in diverse fields.
                </p>
                <div className="flex items-center text-purple-600 font-semibold">
                  View Student Achievements
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-8 bg-amber-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {achievements.map((stat, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-8 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                <stat.icon className="h-12 w-12 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Achievements */}
      <section className="py-8 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Highlights</h2>
            <p className="text-xl text-gray-600">Our latest accomplishments and recognitions</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentAchievements.map((achievement, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="mb-2">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      achievement.category === 'Academic' ? 'bg-blue-100 text-blue-800' :
                      achievement.category === 'Sports' ? 'bg-green-100 text-green-800' :
                      achievement.category === 'Arts' ? 'bg-purple-100 text-purple-800' :
                      'bg-amber-100 text-amber-800'
                    }`}>
                      {achievement.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-8 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why We Excel</h2>
            <p className="text-xl text-gray-600">The foundation of our consistent achievements</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className={`bg-${reason.color}-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                <reason.icon className={`h-12 w-12 text-${reason.color}-600 mb-4`} />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-8 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Parents Say</h2>
            <p className="text-xl text-gray-600">Hear from our parent community about their experience with <span className="font-revue">St. Britto's Academy</span></p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-amber-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 bg-amber-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Join Our Community of Achievers</h2>
          <p className="text-xl mb-8">
            Be part of a school that celebrates excellence and helps every student reach their full potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admissions"
              className="bg-white text-amber-700 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Apply for Admission
            </a>
            <a
              href="/about/virtual-tour"
              className="border-2 border-white text-white hover:bg-white hover:text-amber-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Take a Virtual Tour
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default () => (
  <ErrorBoundary>
    <Achievements />
  </ErrorBoundary>
);