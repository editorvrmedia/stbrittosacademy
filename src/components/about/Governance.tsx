import React from 'react';
import { Users, Shield, Award, Target, Heart, BookOpen, Star, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Governance = () => (
  <div className="pt-36 pb-16 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
    {/* Hero/Intro Section */}
    <motion.section
      className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.7 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold mb-6 drop-shadow">School Governance</h1>
        <p className="text-xl max-w-3xl mx-auto opacity-90">
          Our governance structure ensures transparency, accountability, and excellence in all aspects of school management and educational delivery.
        </p>
      </div>
    </motion.section>
    <section className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 mt-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        {/* Visionary Leadership */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-10 flex flex-col gap-6 border border-blue-100">
          <div className="flex items-center gap-3 mb-2">
            <Star className="h-8 w-8 text-yellow-500" />
            <h2 className="text-2xl font-bold text-blue-800">Visionary Leadership</h2>
          </div>
          <p className="text-gray-700">
            Dr. Xavier Britto, the visionary Chairman of INDEV Group of Companies, and Dr. Vimala Rani Britto, the Author of FEFDY Curriculum, Managing Director of Esthell Hotels & Resorts, Founder of SEEK Foundation, an NGO, share a deep passion for educational excellence. Their unwavering commitment has led to the establishment of a world-class institution that focuses on academic brilliance, character building, and global readiness. Inspired by their late parents, they have shaped St. Britto's Academy into a school that empowers young minds with knowledge, leadership skills, and ethical values.
          </p>
        </div>
        {/* Legacy of Quality Education */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-10 flex flex-col gap-6 border border-blue-100">
          <div className="flex items-center gap-3 mb-2">
            <Award className="h-8 w-8 text-amber-500" />
            <h2 className="text-2xl font-bold text-blue-800">A Legacy of Quality Education</h2>
          </div>
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-1" />St. Britto's Academy is governed by the SMR Educational Trust, a non-profit charitable organisation dedicated to:</li>
            <ul className="ml-7 list-disc text-gray-700">
              <li>Establishing high-standard institutions</li>
              <li>Providing quality education to the student community</li>
              <li>Promoting holistic development with a focus on academics, leadership, and life skills</li>
            </ul>
          </ul>
          <p className="text-gray-700">
            Through innovative teaching methodologies, student-centric learning, and value-based education, St. Britto's Academy continues to shape future leaders and responsible global citizens.
          </p>
        </div>
        {/* Management & Administration */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-10 flex flex-col gap-6 border border-blue-100">
          <div className="flex items-center gap-3 mb-2">
            <Users className="h-8 w-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-blue-800">Management & Administration</h2>
          </div>
          <ul className="list-none space-y-2 text-gray-700">
            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-1" />SMR Educational Trust governs the school, ensuring high educational standards and continuous innovation.</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-1" />The Chairman of the Trust provides visionary leadership, overseeing strategic direction.</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-1" />The Correspondent acts as the Chief Executive, ensuring the seamless execution of the school's mission.</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-1" />The Principal, appointed by the Correspondent, manages day-to-day operations, academic policies, and student welfare.</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-1" />Vice-Principals & Coordinators oversee academic and extracurricular development, ensuring student-centric learning.</li>
          </ul>
        </div>
        {/* Dedicated Faculty & Professional Excellence */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-10 flex flex-col gap-6 border border-blue-100">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="h-8 w-8 text-indigo-500" />
            <h2 className="text-2xl font-bold text-blue-800">Dedicated Faculty & Professional Excellence</h2>
          </div>
          <ul className="list-none space-y-2 text-gray-700">
            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-1" />Interactive & engaging instruction</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-1" />Integration of technology for enhanced learning experiences</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-1" />A student-centric approach, ensuring inclusivity and personal growth</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-green-500 mt-1" />Personalised attention for academic and emotional well-being</li>
          </ul>
        </div>
      </div>
      {/* Divider */}
      <div className="w-full border-t border-blue-200 my-12"></div>
      {/* Transformational Learning */}
      <div className="mt-16">
        <div className="bg-gradient-to-r from-blue-700/80 to-blue-500/80 backdrop-blur-2xl rounded-3xl shadow-2xl p-12 text-white text-center border border-blue-200">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2"><Target className="h-8 w-8 text-yellow-300" />Transformational Learning for Future Leaders</h2>
          <ul className="list-none space-y-2 mb-6">
            <li className="flex items-center gap-2 justify-center"><CheckCircle className="h-5 w-5 text-green-200" />Inspire intellectual curiosity and lifelong learning</li>
            <li className="flex items-center gap-2 justify-center"><CheckCircle className="h-5 w-5 text-green-200" />Foster creativity, analytical thinking, and problem-solving skills</li>
            <li className="flex items-center gap-2 justify-center"><CheckCircle className="h-5 w-5 text-green-200" />Develop resilience, adaptability, and a strong moral compass</li>
          </ul>
          <p className="text-lg font-semibold text-white/90 mb-2">
            Students at St. Britto's Academy gain the confidence and competence to excel in academics, sports, arts, and leadership roles, preparing them to become trailblazers in their chosen fields.
          </p>
          <p className="text-xl font-bold text-white mt-6">
            With a strong governance framework, visionary leadership, and a passionate faculty, St. Britto's Academy continues to shape future-ready individuals who make meaningful contributions to society and the world.<br/>
            <span className="block mt-4 text-2xl font-bold text-yellow-200">St. Britto's Academy: Where Learning Transforms Lives!</span>
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default Governance;