import React from 'react';
import { BookOpen, Target, Users, Award, CheckCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Curriculum = () => {
  const curriculumFeatures = [
    {
      icon: BookOpen,
      title: 'Comprehensive Learning',
      description: 'Well-rounded curriculum covering all essential subjects and skills'
    },
    {
      icon: Target,
      title: 'Skill Development',
      description: 'Focus on critical thinking, problem-solving, and analytical skills'
    },
    {
      icon: Users,
      title: 'Collaborative Learning',
      description: 'Group projects and peer learning opportunities'
    },
    {
      icon: Award,
      title: 'Excellence Standards',
      description: 'High academic standards with continuous assessment'
    }
  ];

  const subjects = [
    {
      category: 'Core Subjects',
      items: [
        'English Language & Literature',
        'Mathematics',
        'Science (Physics, Chemistry, Biology)',
        'Social Studies (History, Geography, Civics)',
        'Hindi/Tamil (Second Language)',
        'Computer Science'
      ]
    },
    {
      category: 'Creative Arts',
      items: [
        'Visual Arts & Crafts',
        'Music & Dance',
        'Drama & Theatre',
        'Creative Writing',
        'Photography',
        'Digital Arts'
      ]
    },
    {
      category: 'Physical Education',
      items: [
        'Sports & Athletics',
        'Yoga & Meditation',
        'Health Education',
        'Swimming',
        'Martial Arts',
        'Outdoor Activities'
      ]
    },
    {
      category: 'Life Skills',
      items: [
        'Communication Skills',
        'Leadership Development',
        'Environmental Studies',
        'Value Education',
        'Career Guidance',
        'Financial Literacy'
      ]
    }
  ];

  const teachingMethodologies = [
    {
      title: 'Interactive Learning',
      description: 'Engaging classroom sessions with multimedia presentations and hands-on activities'
    },
    {
      title: 'Project-Based Learning',
      description: 'Real-world projects that develop practical skills and knowledge application'
    },
    {
      title: 'Collaborative Learning',
      description: 'Group work and peer learning to develop teamwork and communication skills'
    },
    {
      title: 'Technology Integration',
      description: 'Smart classrooms with digital tools to enhance the learning experience'
    },
    {
      title: 'Experiential Learning',
      description: 'Field trips, laboratory experiments, and practical demonstrations'
    },
    {
      title: 'Personalized Attention',
      description: 'Individual support and customized learning paths for each student'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Curriculum</h1>
          <p className="text-xl max-w-3xl mx-auto">
            A comprehensive, well-rounded curriculum designed to nurture academic excellence, character development, and lifelong learning skills.
          </p>
        </div>
      </section>

      {/* Scrolling Animated Images Section */}
      <motion.section
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="py-12 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <div className="flex gap-8 min-w-max">
              {[
                { src: '/Curriculum/21st Century Learning CBSE.JPG', alt: '21st Century Learning CBSE' },
                { src: '/Curriculum/Best CBSE Curriculum School Chennai.JPG', alt: 'Best CBSE Curriculum School Chennai' },
                { src: '/Curriculum/CBSE Syllabus Chennai Schools.JPG', alt: 'CBSE Syllabus Chennai Schools' },
                { src: '/Curriculum/Holistic Learning CBSE Chennai.JPG', alt: 'Holistic Learning CBSE Chennai' },
              ].map((img, idx) => (
                <motion.div
                  key={img.src}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  className="rounded-xl shadow-lg bg-white flex-shrink-0"
                  style={{ width: 340, height: 220 }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover rounded-xl border"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Curriculum Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Curriculum Philosophy</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our curriculum is designed to develop not just academic excellence, but also character, creativity, and critical thinking skills that prepare students for success in the 21st century.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {curriculumFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-blue-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subject Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Subject Areas</h2>
            <p className="text-xl text-gray-600">Comprehensive coverage across all essential learning domains</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {subjects.map((subject, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{subject.category}</h3>
                <ul className="space-y-3">
                  {subject.items.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodologies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Teaching Methodologies</h2>
            <p className="text-xl text-gray-600">Innovative approaches to make learning engaging and effective</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachingMethodologies.map((method, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <Star className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{method.title}</h3>
                </div>
                <p className="text-gray-700">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment & Evaluation */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Assessment & Evaluation</h2>
            <p className="text-xl">Comprehensive evaluation methods to track student progress</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Continuous Assessment',
                description: 'Regular evaluation through assignments, projects, and class participation'
              },
              {
                title: 'Formative Assessment',
                description: 'Ongoing feedback to help students improve their learning process'
              },
              {
                title: 'Summative Assessment',
                description: 'Periodic tests and examinations to measure learning outcomes'
              },
              {
                title: 'Portfolio Assessment',
                description: 'Collection of student work showcasing growth and achievements'
              }
            ].map((assessment, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg hover:bg-opacity-20 transition-all duration-300">
                <h3 className="text-xl font-bold mb-3">{assessment.title}</h3>
                <p className="text-blue-100">{assessment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Experience Our Curriculum</h2>
          <p className="text-xl text-gray-600 mb-8">
            Discover how our comprehensive curriculum can help your child reach their full potential and prepare for future success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admissions"
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Apply for Admission
            </a>
            <a
              href="/about/virtual-tour"
              className="border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Take Virtual Tour
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Curriculum;