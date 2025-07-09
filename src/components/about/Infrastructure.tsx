import React, { useState } from 'react';
import { Building, Microscope, BookOpen, Monitor, Palette, Music, Trophy, Utensils, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Infrastructure = () => {
  const facilities = [
    {
      category: 'Academic Facilities',
      icon: BookOpen,
      color: 'blue',
      items: [
        {
          name: 'Cookery Lab',
          description: 'Hands-on culinary lab for nutrition, cooking, and farm-to-table experiences',
          image: '/Infrastructure/COOKERYLAB.jpg'
        },
        {
          name: 'Mathematics Lab',
          description: 'Interactive mathematics laboratory with manipulatives and digital tools for conceptual learning',
          image: '/Infrastructure/MATHSLAB.jpg'
        },
        {
          name: 'Physics Lab',
          description: 'State-of-the-art physics laboratory equipped for experiments and conceptual learning',
          image: '/Infrastructure/PHYSICSLAB.jpg'
        },
        {
          name: 'Biology Lab',
          description: 'Modern biology laboratory for hands-on experiments and scientific exploration',
          image: '/Infrastructure/BIOLAB.jpg'
        },
        {
          name: 'Chemistry Lab',
          description: 'Well-equipped chemistry laboratory for practical experiments and research',
          image: '/Infrastructure/CHEMISTRYLAB.jpg'
        },
        {
          name: 'Library',
          description: 'Modern library with digital resources, e-books, and online research databases',
          image: '/Infrastructure/LIBRARY.jpg'
        }
      ]
    },
    {
      category: 'Technology Infrastructure',
      icon: Monitor,
      color: 'purple',
      items: [
        {
          name: 'Computer Laboratory',
          description: 'State-of-the-art computer lab with latest hardware and software for digital literacy',
          image: '/Infrastructure/COMPUTERLAB.jpg'
        },
        {
          name: 'Multimedia Lab',
          description: 'Advanced multimedia and coding laboratory for STEM education and innovation',
          image: '/Infrastructure/MULTIMEDIA LAB.jpg'
        }
      ]
    },
    {
      category: 'Sports & Recreation',
      icon: Trophy,
      color: 'green',
      items: [
        {
          name: 'Swimming Pool',
          description: 'Olympic-size swimming pool with trained instructors and safety equipment',
          image: '/Infrastructure/SWIMMINGPOOL.jpg'
        },
        {
          name: 'Playground',
          description: 'Spacious playground with a dedicated football field and basketball court, offering ample space for active sports and team activities',
          image: '/Infrastructure/GROUND.jpg'
        }
      ]
    },
    {
      category: 'Arts & Culture',
      icon: Palette,
      color: 'amber',
      items: [
        {
          name: 'Dance Room',
          description: 'Spacious dance room with mirrors and professional flooring for dance practice and performances',
          image: '/Infrastructure/DANCEROOM.jpg'
        },
        {
          name: 'Music Room',
          description: 'Acoustically designed music rooms with instruments and recording equipment',
          image: '/Infrastructure/DANCEROOM.jpg'
        },
        {
          name: 'SMR Auditorium',
          description: '500-seat SMR Auditorium with professional lighting and sound systems for performances',
          image: '/Infrastructure/SMRAUDITORIUM.jpg'
        }
      ]
    }
  ];

  const additionalFacilities = [
    {
      icon: Utensils,
      title: 'Cafeteria',
      description: 'Hygienic cafeteria serving nutritious meals and snacks'
    },
    {
      icon: Building,
      title: 'Medical Room',
      description: 'Well-equipped medical facility with qualified nursing staff'
    },
    {
      icon: Monitor,
      title: 'Security System',
      description: 'CCTV surveillance and security personnel for campus safety'
    },
    {
      icon: BookOpen,
      title: 'Transportation',
      description: 'Safe and reliable bus service covering major areas of the city'
    }
  ];

  const specifications = [
    { label: 'Total Campus Area', value: '15 Acres' },
    { label: 'Built-up Area', value: '2,50,000 sq ft' },
    { label: 'Number of Classrooms', value: '60+' },
    { label: 'Laboratory Count', value: '15' },
    { label: 'Library Capacity', value: '25,000 Books' },
    { label: 'Sports Facilities', value: '10+' },
    { label: 'Auditorium Capacity', value: '500 Seats' },
    { label: 'Parking Capacity', value: '200 Vehicles' }
  ];

  // --- Facilities Modal State ---
  type Facility = { name: string; description: string; image: string };
  const [modal, setModal] = useState<{ open: boolean; facility: Facility | null }>({ open: false, facility: null });

  const emojiTags = {
    'Academic Facilities': '📘',
    'Technology Infrastructure': '💻',
    'Sports & Recreation': '🏅',
    'Arts & Culture': '🎭',
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">School Infrastructure</h1>
          <p className="text-xl max-w-3xl mx-auto">
            State-of-the-art facilities designed to provide the best learning environment for our students, supporting both academic excellence and holistic development.
          </p>
        </div>
      </section>

      {/* Campus Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Campus Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                St. Britto's Academy boasts a sprawling 15-acre campus designed to provide an optimal learning environment. Our infrastructure combines modern architectural design with functional spaces that cater to
                the diverse needs of our students, fostering an atmosphere conducive to academic excellence, innovation, and holistic development.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Every facility has been thoughtfully planned to ensure safety, accessibility, and conducive learning conditions. From state-of-the-art laboratories to recreational facilities, our campus provides everything needed for comprehensive education.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {specifications.slice(0, 4).map((spec, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">{spec.value}</div>
                    <div className="text-gray-600">{spec.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/SBA Building.jpg"
                alt="School Building"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Premium State-of-the-Art Facilities Section (after Campus Overview) */}
      <section className="relative w-full py-8 px-2 sm:px-6 lg:px-12 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-100 overflow-x-hidden">
        {/* Hero Banner */}
        <div className="relative flex flex-col items-center justify-center text-center mb-12">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-700/80 to-blue-400/60 blur-2xl opacity-80 -z-10" style={{backgroundImage: 'url(/SBA%20Building.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', mixBlendMode: 'multiply'}}></div>
          <h1 className="uppercase font-extrabold tracking-widest text-5xl sm:text-6xl text-white drop-shadow-2xl mb-4 mt-2 px-4 py-2 rounded-xl bg-blue-800/80 shadow-lg border-4 border-white/20" style={{letterSpacing: '0.12em'}}>STATE–OF–THE–ART FACILITIES</h1>
          <h2 className="text-2xl sm:text-3xl italic text-yellow-200 font-semibold mb-4 drop-shadow-lg px-4 py-2 rounded-lg bg-blue-700/80 shadow border-2 border-white/10">State-of-the-Art Infrastructure at St. Britto's Academy</h2>
        </div>
        {/* Intro Paragraph */}
        <div className="flex justify-center mb-12">
          <motion.p
            className="text-gray-700 text-lg sm:text-xl max-w-4xl leading-loose text-justify bg-white/80 rounded-xl shadow p-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            At St. Britto's Academy, we are dedicated to providing a world-class learning environment that nurtures academic excellence, creativity, and holistic development. Situated on a 1.5-acre campus in the heart of the city, our school is equipped with cutting-edge infrastructure and advanced technology, ensuring that students are prepared for a dynamic and competitive future. Our state-of-the-art infrastructure ensures that students thrive in academics, sports, arts, and life skills, making them future-ready global citizens.
          </motion.p>
        </div>
        {/* Subsection Cards Grid */}
        <div className="grid md:grid-cols-2 gap-10 mb-8">
          {/* Academic Excellence */}
          <motion.div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-4 border-l-8 border-blue-500" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: 'easeInOut' }} viewport={{ once: true, amount: 0.3 }}>
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-blue-900 underline underline-offset-4">ACADEMIC EXCELLENCE</h3>
            </div>
            <ul className="space-y-3 mt-2">
              <li className="flex items-start gap-2"><Monitor className="w-5 h-5 text-blue-400 mt-1" /> <span><b>Smart Classrooms:</b> Wi-Fi, interactive screens, projectors, digital learning.</span></li>
              <li className="flex items-start gap-2"><Microscope className="w-5 h-5 text-green-500 mt-1" /> <span><b>Science & Math Labs:</b> Physics, Chemistry, Biology, Mathematics, Computer Science.</span></li>
              <li className="flex items-start gap-2"><BookOpen className="w-5 h-5 text-yellow-500 mt-1" /> <span><b>Library & E-Resource Centre:</b> Books, journals, digital resources.</span></li>
              <li className="flex items-start gap-2"><Palette className="w-5 h-5 text-purple-500 mt-1" /> <span><b>Language & Multimedia Labs:</b> Audio-visual, pronunciation, digital storytelling.</span></li>
            </ul>
          </motion.div>
          {/* Skill Development & Creative Spaces */}
          <motion.div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-4 border-l-8 border-yellow-400" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: 'easeInOut' }} viewport={{ once: true, amount: 0.3 }}>
            <div className="flex items-center gap-3 mb-2">
              <Utensils className="w-8 h-8 text-yellow-500" />
              <h3 className="text-2xl font-bold text-yellow-700 underline underline-offset-4">SKILL DEVELOPMENT & CREATIVE SPACES</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-yellow-50 rounded-xl p-4 shadow flex flex-col items-center">
                <Utensils className="w-7 h-7 text-yellow-600 mb-2" />
                <div className="font-semibold">Cookery Lab</div>
                <div className="text-sm text-gray-700 text-center">Hands-on culinary skills, nutrition, eco-garden farm-to-table.</div>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 shadow flex flex-col items-center">
                <Music className="w-7 h-7 text-blue-600 mb-2" />
                <div className="font-semibold">Music Room</div>
                <div className="text-sm text-gray-700 text-center">Instrumental/vocal training, choir, competitions.</div>
              </div>
              <div className="bg-purple-50 rounded-xl p-4 shadow flex flex-col items-center">
                <Palette className="w-7 h-7 text-purple-600 mb-2" />
                <div className="font-semibold">Art & Craft Studio</div>
                <div className="text-sm text-gray-700 text-center">Creativity, artistic confidence, innovation.</div>
              </div>
              <div className="bg-pink-50 rounded-xl p-4 shadow flex flex-col items-center">
                <Trophy className="w-7 h-7 text-pink-600 mb-2" />
                <div className="font-semibold">Dance Room</div>
                <div className="text-sm text-gray-700 text-center">Professional space, wooden flooring, mirrors, diverse dance forms.</div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Sports & Fitness Facilities and SMR Auditorium */}
        <div className="flex justify-center gap-10 mb-8">
          <motion.div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-4 border-l-8 border-green-500" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.3, ease: 'easeInOut' }} viewport={{ once: true, amount: 0.3 }}>
            <div className="flex items-center gap-3 mb-2">
              <Trophy className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl font-bold text-green-900 underline underline-offset-4">SPORTS & FITNESS FACILITIES</h3>
            </div>
            <ul className="space-y-3 mt-2">
              <li className="flex items-start gap-2"><span className="inline-block w-5 h-5 text-green-500 mt-1">✔</span> <span>Kho-Kho, Kabaddi, Volleyball, Throwball, Shuttle, Chess, Carrom, Skating</span></li>
              <li className="flex items-start gap-2"><Trophy className="w-5 h-5 text-green-500 mt-1" /> <span>Special coaching programmes for excelling students</span></li>
              <li className="flex items-start gap-2"><Trophy className="w-5 h-5 text-blue-500 mt-1" /> <span>Indoor Swimming Pool with professional coaching</span></li>
            </ul>
          </motion.div>
          <motion.div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-4 border-l-8 border-pink-400" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.4, ease: 'easeInOut' }} viewport={{ once: true, amount: 0.3 }}>
            <div className="flex items-center gap-3 mb-2">
              <Microscope className="w-8 h-8 text-pink-500" />
              <h3 className="text-2xl font-bold text-pink-700 underline underline-offset-4">SMR AUDITORIUM</h3>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img src="/Infrastructure/SMRAUDITORIUM.jpg" alt="SMR Auditorium" className="rounded-xl shadow-lg w-full max-w-xs md:max-w-[220px] border-4 border-pink-200" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Microscope className="w-6 h-6 text-pink-400 animate-pulse" />
                  <span className="font-semibold text-pink-700">Air-conditioned, 500-seat auditorium for school functions, performances, and meetings.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-yellow-400 animate-pulse" />
                  <span className="text-gray-700">Stage, sound, and lighting for confidence and public speaking.</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Safety & Security and Digital Integration */}
        <div className="grid md:grid-cols-2 gap-10 mb-8">
          <motion.div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-4 border-l-8 border-green-400" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.5, ease: 'easeInOut' }} viewport={{ once: true, amount: 0.3 }}>
            <div className="flex items-center gap-3 mb-2">
              <Monitor className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl font-bold text-green-900 underline underline-offset-4">SAFETY & SECURITY</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-2"><Monitor className="w-6 h-6 text-green-500" /><span>CCTV Surveillance</span></div>
              <div className="flex items-center gap-2"><Monitor className="w-6 h-6 text-blue-500" /><span>GPS-enabled Buses</span></div>
              <div className="flex items-center gap-2"><Monitor className="w-6 h-6 text-green-400" /><span>Comprehensive Security System</span></div>
              <div className="flex items-center gap-2"><Monitor className="w-6 h-6 text-green-400" /><span>Real-time Tracking & Alerts</span></div>
            </div>
          </motion.div>
          <motion.div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-4 border-l-8 border-blue-400" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.6, ease: 'easeInOut' }} viewport={{ once: true, amount: 0.3 }}>
            <div className="flex items-center gap-3 mb-2">
              <Monitor className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-blue-900 underline underline-offset-4">DIGITAL INTEGRATION</h3>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2"><Monitor className="w-6 h-6 text-blue-500" /><span>Google Accounts for all students</span></div>
              <div className="flex items-center gap-2"><Monitor className="w-6 h-6 text-blue-400" /><span>Virtual Classes (Google Meet, Zoom)</span></div>
              <div className="flex items-center gap-2"><Monitor className="w-6 h-6 text-blue-300" /><span>Google Drive for resources</span></div>
              <div className="flex items-center gap-2"><Monitor className="w-6 h-6 text-blue-200" /><span>ERP for communication, attendance, results</span></div>
            </div>
          </motion.div>
        </div>
        {/* ERP Features Table/Grid */}
        <motion.div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-4 border-l-8 border-blue-500 max-w-5xl mx-auto" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7, ease: 'easeInOut' }} viewport={{ once: true, amount: 0.3 }}>
          <div className="flex items-center gap-3 mb-2">
            <Monitor className="w-8 h-8 text-blue-600" />
            <h3 className="text-2xl font-bold text-blue-900 underline underline-offset-4">ERP FEATURES</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-2"><Monitor className="w-6 h-6 text-blue-500" /><span>Academic Calendar & Annual Planner</span></div>
            <div className="flex items-center gap-2"><Monitor className="w-6 h-6 text-blue-400" /><span>Class Timetable & Circulars</span></div>
            <div className="flex items-center gap-2"><Monitor className="w-6 h-6 text-blue-300" /><span>Attendance & Online Fee Payment</span></div>
            <div className="flex items-center gap-2"><Monitor className="w-6 h-6 text-blue-200" /><span>Syllabus, Notes & References</span></div>
            <div className="flex items-center gap-2"><Monitor className="w-6 h-6 text-blue-100" /><span>Results & Assessment Schedules</span></div>
            <div className="flex items-center gap-2"><Monitor className="w-6 h-6 text-blue-50" /><span>Homework & Assignment Updates</span></div>
            <div className="flex items-center gap-2"><Monitor className="w-6 h-6 text-blue-50" /><span>Student and parent data</span></div>
            <div className="flex items-center gap-2"><Monitor className="w-6 h-6 text-blue-50" /><span>Schedule of Assessments/Activities</span></div>
            <div className="flex items-center gap-2"><Monitor className="w-6 h-6 text-blue-50" /><span>Updates on class and home assignments</span></div>
          </div>
        </motion.div>
      </section>

      {/* Facilities by Category */}
      {facilities.map((cat, cidx) => (
        <section key={cat.category} className={`py-8 bg-transparent`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-${cat.color}-100 rounded-full mb-4`}>
                <cat.icon className={`h-8 w-8 text-${cat.color}-600`} />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{cat.category}</h2>
            </div>
            
            {['Technology Infrastructure', 'Sports & Recreation', 'Arts & Culture'].includes(cat.category) ? (
              <div className="flex justify-center gap-8 flex-wrap">
                {cat.items.map((facility, idx) => (
                  <motion.div
                    key={facility.name}
                    className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer bg-white w-64 mb-4 flex flex-col items-center"
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                    variants={{}}
                    onClick={() => setModal({ open: true, facility })}
                  >
                    <img src={facility.image} alt={facility.name} className="w-full h-56 object-cover" />
                    {/* Facility Name Below Card */}
                    <div className="w-full text-center py-2 font-semibold text-lg text-gray-800 bg-sky-100 z-10">
                      {facility.name}
                    </div>
                    {/* Overlay */}
                    <motion.div
                      variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center px-4 opacity-0 group-hover:opacity-100"
                      style={{ pointerEvents: 'none' }}
                    >
                      <span className="text-white text-xl font-bold mb-2 drop-shadow-lg">{facility.name}</span>
                      <span className="text-white text-sm drop-shadow-lg">{facility.description.split('.')[0]}</span>
                    </motion.div>
                  </motion.div>
                ))}
                  </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {cat.items.map((facility, idx) => (
                  <motion.div
                    key={facility.name}
                    className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer bg-white flex flex-col items-center"
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                    variants={{}}
                    onClick={() => setModal({ open: true, facility })}
                  >
                    <img src={facility.image} alt={facility.name} className="w-full h-56 object-cover" />
                    {/* Facility Name Below Card */}
                    <div className="w-full text-center py-2 font-semibold text-lg text-gray-800 bg-sky-100 z-10">
                      {facility.name}
                </div>
                    {/* Overlay */}
                    <motion.div
                      variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center px-4 opacity-0 group-hover:opacity-100"
                      style={{ pointerEvents: 'none' }}
                    >
                      <span className="text-white text-xl font-bold mb-2 drop-shadow-lg">{facility.name}</span>
                      <span className="text-white text-sm drop-shadow-lg">{facility.description.split('.')[0]}</span>
                    </motion.div>
                  </motion.div>
              ))}
            </div>
            )}
          </div>
        </section>
      ))}

      {/* Additional Facilities */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Additional Facilities</h2>
            <p className="text-xl">Supporting infrastructure for a complete educational experience</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFacilities.map((facility, index) => (
              <div key={index} className="text-center p-6 bg-white bg-opacity-10 rounded-xl hover:bg-opacity-20 transition-all duration-300">
                <facility.icon className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{facility.title}</h3>
                <p className="text-gray-300">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Specifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Campus Specifications</h2>
            <p className="text-xl text-gray-600">Key numbers that define our infrastructure capacity</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specifications.map((spec, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-gray-900 mb-2">{spec.value}</div>
                <div className="text-lg text-gray-600">{spec.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Security */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Safety & Security</h2>
            <p className="text-xl text-gray-600">Comprehensive measures to ensure student and staff safety</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'CCTV Surveillance',
                description: 'Complete campus coverage with 24/7 monitoring and recording systems'
              },
              {
                title: 'Security Personnel',
                description: 'Trained security guards stationed at all entry and exit points'
              },
              {
                title: 'Fire Safety Systems',
                description: 'Advanced fire detection, alarm systems, and emergency evacuation procedures'
              },
              {
                title: 'Access Control',
                description: 'Controlled access to different areas of the campus with ID card systems'
              },
              {
                title: 'Emergency Response',
                description: 'Well-defined emergency protocols and first aid facilities'
              },
              {
                title: 'Safe Transportation',
                description: 'GPS-enabled buses with trained drivers and attendants'
              }
            ].map((safety, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{safety.title}</h3>
                <p className="text-gray-600">{safety.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Experience Our Campus</h2>
          <p className="text-xl mb-8">
            Visit our campus to see our world-class infrastructure and experience the learning environment firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/about/virtual-tour"
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Take Virtual Tour
            </a>
            <a
              href="/admissions"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Schedule Campus Visit
            </a>
          </div>
        </div>
      </section>

      {/* Modal/Lightbox */}
      <AnimatePresence>
        {modal.open && modal.facility && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative flex flex-col items-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-2xl"
                onClick={() => setModal({ open: false, facility: null })}
                aria-label="Close"
              >
                <X />
              </button>
              <img src={modal.facility.image} alt={modal.facility.name} className="w-full h-64 object-cover rounded-xl mb-4" />
              <h3 className="text-2xl font-bold text-blue-900 mb-2">{modal.facility.name}</h3>
              <p className="text-gray-700 text-center text-lg">{modal.facility.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Infrastructure;