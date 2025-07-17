import React from 'react';
import { BookOpen, Target, Users, Award, CheckCircle, Star, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedHeading from '../animated/AnimatedHeading';

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
    <div className="pt-20 bg-gradient-to-br from-blue-50 via-white to-red-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-b-3xl shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedHeading as="h1" className="text-5xl font-extrabold mb-4 tracking-tight drop-shadow-lg">Our Curriculum</AnimatedHeading>
          <p className="text-xl max-w-3xl mx-auto mb-2">A comprehensive, well-rounded curriculum designed to nurture academic excellence, character development, and lifelong learning skills.</p>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-2 bg-gradient-to-r from-blue-200 via-white to-red-200 my-8 rounded-full" />

      {/* Curriculum Features */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Star className="mx-auto mb-2 h-10 w-10 text-yellow-400" />
            <AnimatedHeading as="h2" className="text-4xl font-bold text-gray-900 mb-2">Curriculum Highlights</AnimatedHeading>
            <p className="text-xl text-gray-600">A holistic approach to 21st-century learning</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {curriculumFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-t-4 border-blue-200">
                <feature.icon className="h-14 w-14 text-blue-700 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-2 bg-gradient-to-r from-red-200 via-white to-blue-200 my-8 rounded-full" />

      {/* Subject Areas */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BookOpen className="mx-auto mb-2 h-10 w-10 text-blue-400" />
            <AnimatedHeading as="h2" className="text-4xl font-bold text-gray-900 mb-2">Subject Areas</AnimatedHeading>
            <p className="text-xl text-gray-600">Comprehensive coverage across all essential learning domains</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {subjects.map((subject, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-t-4 border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{subject.category}</h3>
                <ul className="space-y-3">
                  {subject.items.map((item, idx) => (
                    <li key={idx} className="flex items-center"><CheckCircle className="h-5 w-5 text-blue-600 mr-3" /><span className="text-gray-700">{item}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-2 bg-gradient-to-r from-blue-200 via-white to-red-200 my-8 rounded-full" />

      {/* Teaching Methodologies */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Lightbulb className="mx-auto mb-2 h-10 w-10 text-red-400" />
            <AnimatedHeading as="h2" className="text-4xl font-bold text-gray-900 mb-2">Teaching Methodologies</AnimatedHeading>
            <p className="text-xl text-gray-600">Innovative, interactive, and student-centered approaches</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachingMethodologies.map((method, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-t-4 border-red-200">
                <Star className="h-10 w-10 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment & Evaluation */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <AnimatedHeading as="h2" className="text-4xl font-bold mb-4">Assessment & Evaluation</AnimatedHeading>
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
          <AnimatedHeading as="h2" className="text-4xl font-bold text-gray-900 mb-6">Experience Our Curriculum</AnimatedHeading>
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