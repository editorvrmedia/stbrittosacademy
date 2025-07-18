import React, { useState, useRef, useEffect } from 'react';
import { Trophy, Star, Medal, Award, Users, Target, Globe, Shield, Calendar, BookOpen, FileText } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const SchoolAchievements = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [animatedIndex, setAnimatedIndex] = useState(-1);
  const [topAnimatedIndex, setTopAnimatedIndex] = useState(-1);
  const [scroll, setScroll] = useState(0);

  const categories = [
    { id: 'all', name: 'All Achievements' },
    { id: 'academic', name: 'Academic Excellence' },
    { id: 'recognition', name: 'Recognition & Awards' },
    { id: 'environmental', name: 'Environmental Initiatives' },
    { id: 'international', name: 'International Recognition' },
    { id: 'arts', name: 'Arts & Culture' },
    { id: 'olympiads', name: 'Olympiads & Competitions' },
    { id: 'records', name: 'World Records' }
  ];

  const majorAwards = [
    {
      id: 1,
      title: 'Asia Book of Records - Environmental Awareness',
      category: 'international',
      year: '2018',
      description: 'St. Britto\'s Academy entered into the Asia Book of Records by creating the largest human image of students making hand formation for holding Mother Planet, to spread the message - SAVE WATER TO SAVE EARTH.',
      impact: '425 students participated in this record-breaking achievement',
      image: '/asia-book-records-mother-planet.jpg'
    },
    {
      id: 2,
      title: 'Guinness World Record - Wheelchair Accessibility Symbol',
      category: 'records',
      year: '2018',
      description: 'St. Britto\'s Institutions achieved a Guinness World Record for the largest human image of a wheelchair accessibility symbol consisting of 816 people.',
      impact: 'Raised awareness about accessibility and inclusion',
      image: '/AWARDS/guinness-awards.jpg'
    },
    {
      id: 3,
      title: 'India Book of Records - Multilingual Singing',
      category: 'records',
      year: '2019',
      description: 'St. Britto\'s Academy set a record at India Book of Records for the maximum number of students (426) singing together in 26 national and international languages.',
      impact: 'Showcased linguistic diversity and cultural integration',
      image: '/AWARDS/asia-book-of-records-singing.jpg'
    },
    {
      id: 4,
      title: 'International School Award',
      category: 'international',
      year: '2017-2020',
      description: 'British Council has awarded St Britto\'s Academy with International School Award 2017-2020. It has been accredited for outstanding development of the International dimension in the curriculum on 15th December 2017.',
      impact: 'Recognized for global education excellence',
      image: '/AWARDS/British Council award.jpg'
    },
    {
      id: 5,
      title: 'Dr. Sarvepalli Radhakrishnan School Excellence Leadership Award',
      category: 'academic',
      year: '2018',
      description: 'Centre for Educational Development, Touch Education awarded Mrs. Vimala Britto with the prestigious Dr. Sarvepalli Radhakrishnan School Excellence Leadership Award.',
      impact: 'Recognized as a TOP CBSE School at International EDUSummIT & EDUAwarDS in New Delhi',
      image: '/AWARDS/radhakrishnan-school-excellence-award.jpg'
    },
    {
      id: 6,
      title: 'Velli Thamarai Award',
      category: 'recognition',
      year: '2018-2019',
      description: 'Dhina Malar awarded St. Britto\'s Academy with the Velli Thamarai Award at Vinnadi, Venna, Viruthu for the Academic year 2018-2019.',
      impact: 'Recognized for outstanding contributions to education',
      image: '/AWARDS/Dhina Malar award.jpg'
    },
    {
      id: 7,
      title: 'Eldrok India K-12 Awards',
      category: 'recognition',
      year: '2019',
      description: 'Eldrok India K-12 Awards honored St. Britto\'s Academy for Excellence in Holistic Development Programs at the Eldrok India K-12 Summit.',
      impact: 'Recognized for comprehensive student development approach',
      image: '/AWARDS/Eldrok India K-12 Awards.jpg'
    },
    {
      id: 8,
      title: 'SIP Abacus TOP TEN SCHOOLS Award',
      category: 'olympiads',
      year: '2016',
      description: 'St. Britto\'s Academy was selected as one of the TOP TEN SCHOOLS in the Arithmetic Genius Inter-School Contest conducted by SIP Academy India.',
      impact: 'Recognized for students\' outstanding performance in mathematics',
      image: '/AWARDS/SIP abacus awards St Britto’s Academy.jpg'
    },
    {
      id: 9,
      title: 'Silverzone Olympiads - Mathematics Excellence',
      category: 'olympiads',
      year: '2015-16',
      description: 'St. Britto\'s Academy was awarded the Performance Excellence Award for overall performance in Silverzone Olympiads of Mathematics.',
      impact: 'Recognized for excellence in mathematics education',
      image: '/AWARDS/St Britto’s Academy is awarded the Performance Excellence Award for overall performance in Silverzone Olympiads of Mathematics for the year 2015..jpg'
    },
    {
      id: 10,
      title: 'Silverzone Olympiads - Overall 2015-16',
      category: 'olympiads',
      year: '2015-16',
      description: 'St. Britto\'s Academy was awarded the Performance Excellence Award for overall performance in Silverzone Olympiads of Science.',
      impact: 'Recognized for excellence in science education',
      image: '/AWARDS/St Britto’s Academy is awarded the Performance Excellence Award for overall performance in Silverzone Olympiads of Science for the year 2015..jpg'
    },
    {
      id: 11,
      title: 'Silverzone Olympiads - Overall Excellence 2013',
      category: 'olympiads',
      year: '2013',
      description: 'St. Britto\'s Academy was awarded the Performance Excellence Award for overall performance in Silverzone Olympiads.',
      impact: 'Recognized for consistent excellence in academic competitions',
      image: '/AWARDS/St Britto’s Academy is awarded the Performance Excellence Award.jpg'
    },
    {
      id: 12,
      title: 'Rangotsav National Level Art Competition',
      category: 'arts',
      year: '2019',
      description: 'St. Britto\'s Academy was recognized for organizing the National Level Art Competition in Mumbai.',
      impact: 'Promoting artistic talent and creativity among students nationwide',
      image: '/AWARDS/rangotsav-national-art-competition.jpg'
    },
    {
      id: 13,
      title: 'Asia Book of Records - Multilingual Singing',
      category: 'records',
      year: '2019',
      description: 'St. Britto\'s Group of Institutions entered into Asia Book of Records for singing in 26 different languages.',
      impact: 'Showcasing linguistic diversity and cultural integration',
      image: '/AWARDS/asia-book-of-records-singing.jpg'
    },
    {
      id: 14,
      title: 'Limca Book of Records - Most Santas Painted',
      category: 'records',
      year: '2013',
      description: 'St Britto\'s Group of Institutions, (St Britto\'s Academy (CBSE), St Britto\'s Matriculation HSS and St Britto\'s College) Chennai participated in a joint activity across the three premises during which 3,077 students and teachers painted the most Santas within an hour (10.30 am – 11.30 am) on December 5, 2013, as part of a prelude to Christmas celebrations. The theme was Tidings of Great Joy and Peace to Mankind. The activity was carried out in association with Pidilite Industries.',
      impact: 'Recognized for mass participation and creative engagement',
      image: '/AWARDS/limca records.jpg'
    },
    {
      id: 15,
      title: 'ISO 21001:2018 Certification',
      category: 'academic',
      year: '2018',
      description: 'The certificate Body of TUV SUD South Asia Private limited certifies that St Britto\'s Academy has implemented an educational organization Management System in accordance with ISO 21001: 2018 for the scope of design and development of curriculum for kindergarten and imparting education from kindergarten to senior secondary.',
      impact: 'Ensuring international standards in educational management and curriculum development',
      image: '/AWARDS/ISO 210012018 Certification.jpg'
    },
    {
      id: 16,
      title: 'Franklin Covey Education Award',
      category: 'academic',
      year: '2020',
      description: 'Franklin Covey education certify the certificate of Appreciation to St Britto\'s Academy for being the torchbearer in building a global educational leadership community on 28th January 2020.',
      impact: 'Recognized for building a global educational leadership community',
      image: '/AWARDS/Franklin Covey education.jpg'
    }
  ];

  const asiaBookOfRecordsDetails = {
    title: "Asia Book of Records Achievement",
    description: "St. Britto's Academy entered into the Asia Book of Records by creating the largest human image of the most students making hands formation for holding our Mother Planet, to spread the message - SAVE WATER TO SAVE EARTH, the underlying concept being 'Greening the Blue'.",
    date: "27th February 2018",
    participants: "425 students of Classes III to V aged between 7 and 10 years",
    details: "The students wore color T-shirts and caps to create the image. The core message spread and the awareness created is Pivotal in the present Scenario, to prepare the human race to contribute solutions for the burning challenges like pollution, Environmental Degradation, Water Scarcity, Ozone Depletion, Global Warming, Climate Change Etc.",
    guests: "Mr. Charles Lee, Director-General, Taiwan Consulate and Mr. Leon Samuel, Notary Public, Madras High Court",
    coordinator: "Mrs. Vimala Britto, Correspondent of the School"
  };

  const additionalAchievements = [
    {
      category: 'Academic Excellence',
      icon: BookOpen,
      color: 'blue',
      achievements: [
        'Consistently ranked among top CBSE schools in Chennai',
        '100% pass rate in board examinations for consecutive years',
        'Multiple students securing top ranks in competitive examinations',
        'Excellence in STEM education and innovation'
      ]
    },
    {
      category: 'Environmental Initiatives',
      icon: Globe,
      color: 'blue',
      achievements: [
        'Green School Certification for sustainable practices',
        'Campus-wide water conservation and rainwater harvesting',
        'Waste management and recycling programs',
        'Environmental awareness campaigns in the community'
      ]
    },
    {
      category: 'Cultural & Sports',
      icon: Trophy,
      color: 'blue',
      achievements: [
        'State-level championships in multiple sports',
        'Recognition for excellence in performing arts',
        'Inter-school cultural competition winners',
        'Promotion of traditional arts and cultural heritage'
      ]
    },
    {
      category: 'Community Impact',
      icon: Users,
      color: 'blue',
      achievements: [
        'Outreach programs benefiting underprivileged communities',
        'Health and wellness initiatives for local residents',
        'Educational support for neighboring schools',
        'Disaster relief and humanitarian assistance'
      ]
    },
    {
      category: 'Olympiads & Competitions',
      icon: Award,
      color: 'blue',
      achievements: [
        'Top performance in Silverzone Olympiads of Mathematics',
        'Excellence in Science Olympiads at state and national levels',
        'SIP Abacus Arithmetic Genius Contest - Top Ten Schools',
        'Consistent recognition in academic competitions'
      ]
    },
    {
      category: 'World Records',
      icon: Shield,
      color: 'indigo',
      achievements: [
        'Guinness World Record for largest human image of a wheelchair accessibility symbol',
        'Asia Book of Records for environmental awareness',
        'India Book of Records for multilingual singing',
        'Multiple record-breaking achievements showcasing student participation'
      ]
    }
  ];

  const statistics = [
    { number: '28+', label: 'Years of Excellence', icon: Calendar },
    { number: '50+', label: 'Awards & Recognition', icon: Trophy },
    { number: '1200+', label: 'Students Impacted', icon: Users },
    { number: '100%', label: 'Board Exam Success Rate', icon: Target }
  ];

  const filteredAwards = selectedCategory === 'all' 
    ? majorAwards 
    : majorAwards.filter(award => award.category === selectedCategory);

  const guinnessRef = useRef(null);
  const indiaRef = useRef(null);
  const guinnessInView = useInView(guinnessRef, { amount: 0.5 });
  const indiaInView = useInView(indiaRef, { amount: 0.5 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScroll(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-blue-600 z-[9999]"
        style={{ width: `${scroll * 100}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${scroll * 100}%` }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      />
    <div className="pt-20">
      {/* Hero Section */}
      <motion.section
        className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        viewport={{ once: true, amount: 0.7 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">School Achievements</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Celebrating 28 years of excellence, innovation, and recognition. Our achievements reflect our commitment to providing world-class education and fostering holistic development.
          </p>
        </div>
      </motion.section>

      {/* Statistics */}
      <motion.section
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true, amount: 0.7 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {statistics.map((stat, index) => (
              <div key={index} className="bg-blue-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-blue-700 mb-2">{stat.number}</div>
                <div className="text-lg text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Category Filter */}
      <motion.section
        className="py-8 bg-gray-50 border-b"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
        viewport={{ once: true, amount: 0.7 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Award - Guinness World Record */}
      {(selectedCategory === 'all' || selectedCategory === 'records') && (
        <motion.section
          className="py-16 bg-gray-50"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
          viewport={{ once: true, amount: 0.7 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Achievement</h2>
              <p className="text-xl text-gray-600">Our landmark entry into the Guinness World Records</p>
            </div>
              <motion.div
                ref={guinnessRef}
                initial={false}
                animate={guinnessInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="bg-white rounded-xl overflow-hidden shadow-xl"
              >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-indigo-100 text-indigo-800">
                      Guinness World Record
                    </span>
                    <span className="text-gray-500 text-sm ml-3">February 27, 2018</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Largest Human Image of a Wheelchair Accessibility Symbol</h3>
                  <p className="text-gray-600 mb-6">St. Britto's Institutions achieved a Guinness World Record for the largest human image of a wheelchair accessibility symbol consisting of 816 people, demonstrating our commitment to awareness about accessibility and inclusion.</p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-2">Event Details:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Star className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700"><strong>Participants:</strong> 816 people</span>
                        </li>
                        <li className="flex items-start">
                          <Star className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700"><strong>Location:</strong> Chennai, India</span>
                        </li>
                        <li className="flex items-start">
                          <Star className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700"><strong>Date:</strong> February 27, 2018</span>
                        </li>
                      </ul>
                    </div>
                    
                    <p className="text-gray-700">
                      This achievement highlights our commitment to raising awareness about accessibility and inclusion, promoting a more inclusive society for people with disabilities.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center p-8 bg-gray-50">
                  <img 
                    src="/AWARDS/guinness-awards.jpg" 
                    alt="Guinness World Record Certificate" 
                    className="max-w-full max-h-96 object-contain rounded-lg shadow-lg"
                  />
                </div>
              </div>
              </motion.div>
          </div>
        </motion.section>
      )}

      {/* India Book of Records - Multilingual Singing */}
      {(selectedCategory === 'all' || selectedCategory === 'records') && (
        <motion.section
          className="py-16 bg-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
          viewport={{ once: true, amount: 0.7 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">India Book of Records Achievement</h2>
              <p className="text-xl text-gray-600">Celebrating linguistic diversity and cultural integration</p>
            </div>
              <motion.div
                ref={indiaRef}
                initial={false}
                animate={indiaInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="bg-white rounded-xl overflow-hidden shadow-xl"
              >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="flex items-center justify-center p-8 bg-gray-50">
                  <img 
                    src="/AWARDS/asia-book-of-records-singing.jpg" 
                    alt="India Book of Records Certificate" 
                    className="max-w-full max-h-96 object-contain rounded-lg shadow-lg"
                  />
                </div>
                
                <div className="p-8">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-amber-100 text-amber-800">
                      India Book of Records
                    </span>
                    <span className="text-gray-500 text-sm ml-3">December 13, 2019</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Maximum Students Singing Together in Various Languages</h3>
                  <p className="text-gray-600 mb-6">St. Britto's Academy set a record at India Book of Records for the maximum number of students (426) singing together in 26 national and international languages at Phoenix Market City, Velacherry, Chennai on December 13, 2019. The event showcased our students' linguistic talent and cultural unity.</p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-900 mb-2">Record Details:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Star className="h-5 w-5 text-amber-600 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700"><strong>Participants:</strong> 426 students</span>
                        </li>
                        <li className="flex items-start">
                          <Star className="h-5 w-5 text-amber-600 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700"><strong>Languages:</strong> 26 national and international languages</span>
                        </li>
                        <li className="flex items-start">
                          <Star className="h-5 w-5 text-amber-600 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700"><strong>Venue:</strong> Phoenix Market City, Velacherry, Chennai</span>
                        </li>
                      </ul>
                    </div>
                    
                    <p className="text-gray-700">
                      This achievement showcases our commitment to promoting linguistic diversity, cultural integration, and global citizenship among our students.
                    </p>
                  </div>
                </div>
              </div>
              </motion.div>
          </div>
        </motion.section>
      )}

      {/* Major Awards */}
      <motion.section
        className="py-16 bg-gray-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
        viewport={{ once: true, amount: 0.7 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              viewport={{ once: true, amount: 0.7 }}
            >
              Major Awards & Recognitions
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
              viewport={{ once: true, amount: 0.7 }}
            >
              Prestigious honors that highlight our commitment to excellence
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAwards.filter(award => award.id !== 1 && award.id !== 2 && award.id !== 3).map((award, idx) => (
              <motion.div
                key={award.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg transition-shadow duration-300 flex flex-col"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 * idx }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <div className="p-6 flex-grow">
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                      award.category === 'academic' ? 'bg-blue-100 text-blue-800' :
                      award.category === 'recognition' ? 'bg-purple-100 text-purple-800' :
                      award.category === 'environmental' ? 'bg-green-100 text-green-800' :
                      award.category === 'international' ? 'bg-amber-100 text-amber-800' :
                      award.category === 'arts' ? 'bg-pink-100 text-pink-800' :
                      award.category === 'olympiads' ? 'bg-red-100 text-red-800' :
                      award.category === 'records' ? 'bg-indigo-100 text-indigo-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {categories.find(cat => cat.id === award.category)?.name}
                    </span>
                    <span className="text-gray-500 text-sm ml-3">{award.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{award.title}</h3>
                  <p className="text-gray-600 mb-4">{award.description}</p>
                  <div className="bg-blue-50 p-3 rounded-lg mb-6">
                    <p className="text-blue-800 font-semibold text-sm">Impact: {award.impact}</p>
                  </div>
                </div>
                <div className="flex justify-center p-4 bg-gray-50">
                  <img 
                    src={award.image} 
                    alt={award.title} 
                    className="h-48 object-contain rounded-lg"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Additional Achievements */}
      <motion.section
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
        viewport={{ once: true, amount: 0.7 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Achievements</h2>
            <p className="text-xl text-gray-600">Other notable accomplishments across various domains</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalAchievements.map((category, index) => (
              <div key={index} className={`bg-${category.color}-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300`}>
                <div className="flex items-center mb-6">
                  <category.icon className={`h-10 w-10 text-${category.color}-600 mr-4`} />
                  <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
                </div>
                <ul className="space-y-3">
                  {category.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-center">
                      <Star className={`h-5 w-5 text-${category.color}-600 mr-3`} />
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Impact & Recognition */}
      <motion.section
        className="py-16 bg-blue-700 text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.8 }}
        viewport={{ once: true, amount: 0.7 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl">Measuring success through the achievements of our community</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: '28+', label: 'Years of Excellence', description: 'Serving the community since 1997' },
              { number: '1200+', label: 'Students Empowered', description: 'Complete human beings formed' },
              { number: '95%', label: 'Academic Success', description: 'Students achieving their goals' },
              { number: '100+', label: 'Innovations Shared', description: 'Contributing to global knowledge' }
            ].map((stat, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg hover:bg-opacity-20 transition-all duration-300">
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <div className="text-sm opacity-90">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.9 }}
        viewport={{ once: true, amount: 0.7 }}
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Our Success Story</h2>
          <p className="text-xl text-gray-600 mb-8">Be part of St. Britto's Academy and help us continue our legacy of excellence, innovation, and achievement.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admissions"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Apply for Admission
            </a>
            <a
              href="/about/virtual-tour"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Explore Our Campus
            </a>
          </div>
        </div>
      </motion.section>
    </div>
    </>
  );
};

export default SchoolAchievements;