import React from 'react';
import { BookOpen, Microscope, Calculator, Globe, Users, Award, Target, Lightbulb, GraduationCap, Users as UsersIcon, Book, Star, ArrowRightCircle, CheckCircle } from 'lucide-react';

const SecondarySchool = () => {
  const features = [
    {
      icon: Target,
      title: 'Board Exam Preparation',
      description: 'Comprehensive preparation for CBSE Class 10 board examinations'
    },
    {
      icon: Lightbulb,
      title: 'Critical Analysis',
      description: 'Advanced analytical and reasoning skills development'
    },
    {
      icon: Users,
      title: 'Career Guidance',
      description: 'Professional counseling for stream selection and career planning'
    },
    {
      icon: Award,
      title: 'Excellence Focus',
      description: 'Achieving academic excellence and personal growth'
    }
  ];

  const subjects = [
    {
      name: 'English Language & Literature',
      icon: BookOpen,
      description: 'Advanced literature study, creative writing, and communication skills',
      topics: ['Literary analysis', 'Creative composition', 'Grammar mastery', 'Public speaking']
    },
    {
      name: 'Mathematics',
      icon: Calculator,
      description: 'Algebra, geometry, trigonometry, and statistical analysis',
      topics: ['Quadratic equations', 'Coordinate geometry', 'Trigonometry', 'Statistics & probability']
    },
    {
      name: 'Science (Physics, Chemistry, Biology)',
      icon: Microscope,
      description: 'Comprehensive science education with practical applications',
      topics: ['Physics laws', 'Chemical reactions', 'Life processes', 'Laboratory work']
    },
    {
      name: 'Social Science',
      icon: Globe,
      description: 'History, geography, political science, and economics',
      topics: ['World history', 'Indian geography', 'Democratic politics', 'Economic development']
    },
    {
      name: 'Hindi/Tamil',
      icon: BookOpen,
      description: 'Second language proficiency and literature appreciation',
      topics: ['Language skills', 'Literature study', 'Cultural context', 'Communication']
    },
    {
      name: 'Computer Applications',
      icon: Target,
      description: 'Programming, database management, and digital literacy',
      topics: ['Programming basics', 'Database concepts', 'Web development', 'Digital citizenship']
    }
  ];

  const gradeStructure = [
    {
      grade: 'Grade 9',
      age: '14-15 years',
      focus: 'Foundation building for board examination preparation',
      highlights: ['Concept clarity', 'Study habits', 'Time management', 'Subject specialization']
    },
    {
      grade: 'Grade 10',
      age: '15-16 years',
      focus: 'Board examination preparation and stream selection guidance',
      highlights: ['Board exam prep', 'Career counseling', 'Stream selection', 'Leadership roles']
    }
  ];

  const examPreparation = [
    {
      title: 'Regular Assessments',
      description: 'Periodic tests and mock examinations to track progress',
      icon: Target
    },
    {
      title: 'Doubt Clearing Sessions',
      description: 'Additional support classes for concept clarification',
      icon: Lightbulb
    },
    {
      title: 'Study Materials',
      description: 'Comprehensive notes, practice papers, and reference materials',
      icon: BookOpen
    },
    {
      title: 'Stress Management',
      description: 'Counseling and techniques to manage exam stress effectively',
      icon: Users
    }
  ];

  const careerGuidance = [
    {
      stream: 'Science Stream',
      description: 'For students interested in engineering, medicine, and research',
      subjects: ['Physics', 'Chemistry', 'Biology', 'Mathematics/Psychology'],
      careers: ['Engineering', 'Medicine', 'Research', 'Technology']
    },
    {
      stream: 'Computer Science Stream',
      description: 'For students interested in computer science and engineering',
      subjects: ['Computer Science', 'Physics', 'Chemistry', 'Mathematics'],
      careers: ['Technology', 'IT', 'Engineering']
    },
    {
      stream: 'Commerce Stream',
      description: 'For students interested in business, finance, and economics',
      subjects: ['Accountancy', 'Business Studies', 'Economics', 'Applied Mathematics'],
      careers: ['Business', 'Finance', 'Banking', 'Entrepreneurship']
    }
  ];

  const achievements = [
    { metric: '98%', label: 'Board Exam Pass Rate', description: 'Consistent high performance' },
    { metric: '85%', label: 'Students with Distinction', description: 'Excellence in academics' },
    { metric: '100%', label: 'College Placement', description: 'Successful stream transitions' },
    { metric: '50+', label: 'Merit Scholarships', description: 'Recognition for excellence' }
  ];

  return (
    <div className="pt-20 bg-gradient-to-br from-blue-50 via-white to-red-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-b-3xl shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GraduationCap className="mx-auto mb-4 h-14 w-14 text-yellow-300 drop-shadow-lg" />
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight drop-shadow-lg">Secondary School (Grades 9-10)</h1>
          <p className="text-xl max-w-3xl mx-auto mb-2">Preparing for board examinations and future success. Our secondary school program provides rigorous academic preparation, career guidance, and comprehensive support for CBSE board examinations.</p>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-2 bg-gradient-to-r from-blue-200 via-white to-red-200 my-8 rounded-full" />

      {/* Program Features */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Star className="mx-auto mb-2 h-10 w-10 text-red-400" />
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Secondary School Excellence</h2>
            <p className="text-xl text-gray-600">Comprehensive preparation for board exams and beyond</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
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

      {/* Grade Structure */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Book className="mx-auto mb-2 h-10 w-10 text-blue-400" />
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Grade Structure</h2>
            <p className="text-xl text-gray-600">Focused preparation for board examinations</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {gradeStructure.map((grade, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-t-4 border-red-200">
                <div className="text-center mb-6">
                  <h3 className="text-3xl font-bold text-red-700 mb-2">{grade.grade}</h3>
                  <p className="text-lg text-gray-600 font-semibold">{grade.age}</p>
                </div>
                <p className="text-lg text-gray-700 mb-6 text-center">{grade.focus}</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {grade.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center">
                      <Award className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-2 bg-gradient-to-r from-blue-200 via-white to-red-200 my-8 rounded-full" />

      {/* Subjects, Teaching Methods, Beyond Academics */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <UsersIcon className="mx-auto mb-2 h-10 w-10 text-red-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Secondary School at St. Britto's Academy – CBSE Curriculum for Academic Excellence
            </h2>
          </div>
          <div className="text-lg text-gray-700 leading-relaxed mb-8">
            <p className="mb-6">
              The Secondary School Programme (Grades IX & X) at St. Britto's Academy follows NCERT textbooks as per CBSE guidelines, ensuring a strong academic foundation and skill-based learning.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-blue-200">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-7 w-7 text-blue-600 mr-2" />
                  <p className="font-bold text-blue-800 text-xl mb-0">Subjects of Study</p>
                </div>
                <ul className="list-none space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2"><CheckCircle className="h-5 w-5" /></span>
                    <span>Language 1 – English (Language & Literature)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2"><CheckCircle className="h-5 w-5" /></span>
                    <span>Language 2 – Tamil / Hindi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2"><CheckCircle className="h-5 w-5" /></span>
                    <span>Core Subjects – Mathematics (Standard/Basic – Theory/Lab), Science (Theory/Lab), Social Science</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2"><CheckCircle className="h-5 w-5" /></span>
                    <span>Skill-Based Subject – Artificial Intelligence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2"><CheckCircle className="h-5 w-5" /></span>
                    <span>Internal Assessments – Health & Physical Education, Work Experience, Art Education</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-red-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-4">
                    <Lightbulb className="h-7 w-7 text-red-500 mr-2" />
                    <p className="font-bold text-red-800 text-xl mb-0">Innovative Teaching Methodology</p>
                  </div>
                  <ul className="list-none space-y-2 mb-4">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2"><CheckCircle className="h-5 w-5" /></span>
                      <span>Seminars & Workshops for academic proficiency & soft skills development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2"><CheckCircle className="h-5 w-5" /></span>
                      <span>Participation in Olympiads & Talent Search Examinations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2"><CheckCircle className="h-5 w-5" /></span>
                      <span>Holistic development through co-curricular activities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2"><CheckCircle className="h-5 w-5" /></span>
                      <span>Career Counselling by reputed professionals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2"><CheckCircle className="h-5 w-5" /></span>
                      <span>Project-based learning & real-world application of knowledge</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2"><CheckCircle className="h-5 w-5" /></span>
                      <span>Rigorous Practice Tests for Board Exam preparation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-8 max-w-2xl mx-auto">
              <div className="bg-yellow-50 rounded-2xl shadow-lg p-8 border-t-4 border-yellow-400">
                <div className="flex items-center mb-4">
                  <Star className="h-7 w-7 text-yellow-500 mr-2" />
                  <p className="font-bold text-yellow-700 text-xl mb-0">Beyond Academics – Leadership & Community Engagement</p>
                </div>
                <ul className="list-none space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="mr-2" role="img" aria-label="medal">🏅</span>
                    <span>Certifications in Leadership – Cultivating leadership qualities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2" role="img" aria-label="handshake">🤝</span>
                    <span>Community Outreach Programs – Encouraging social responsibility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2" role="img" aria-label="scroll">📜</span>
                    <span>Academic Excellence Certifications – Recognizing top achievers</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-8">
              The CBSE Secondary Curriculum at St. Britto's Academy ensures intellectual growth, critical thinking, and career readiness, preparing students for higher education and future success.
            </p>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-2 bg-gradient-to-r from-red-200 via-white to-blue-200 my-8 rounded-full" />

      {/* Exam Preparation */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Target className="mx-auto mb-2 h-10 w-10 text-blue-400" />
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Board Exam Preparation</h2>
            <p className="text-xl text-gray-600">Comprehensive support for CBSE board examination success</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {examPreparation.map((prep, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center border-t-4 border-blue-200">
                <prep.icon className="h-14 w-14 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{prep.title}</h3>
                <p className="text-gray-600">{prep.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-2 bg-gradient-to-r from-blue-200 via-white to-red-200 my-8 rounded-full" />

      {/* Achievements */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Star className="mx-auto mb-2 h-10 w-10 text-yellow-400" />
            <h2 className="text-4xl font-bold mb-2 text-gray-900">Our Track Record</h2>
            <p className="text-xl text-gray-600">Consistent excellence in board examinations and student outcomes</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-t-4 border-yellow-200">
                <div className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full font-bold text-2xl mb-2 shadow">{achievement.metric}</div>
                <div className="text-xl font-semibold mb-2">{achievement.label}</div>
                <div className="text-gray-500 text-sm">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-2 bg-gradient-to-r from-blue-200 via-white to-red-200 my-8 rounded-full" />

      {/* Support Services */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <UsersIcon className="mx-auto mb-2 h-10 w-10 text-blue-400" />
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Student Support Services</h2>
            <p className="text-xl text-gray-600">Comprehensive support for academic and personal success</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Academic Counseling',
                description: 'Individual guidance for academic improvement and goal setting'
              },
              {
                title: 'Career Counseling',
                description: 'Professional guidance for stream and career selection'
              },
              {
                title: 'Peer Support',
                description: 'Study groups and peer mentoring programs'
              },
              {
                title: 'Parent Partnership',
                description: 'Regular communication and involvement in student progress'
              }
            ].map((service, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center border-t-4 border-blue-200">
                <UsersIcon className="h-10 w-10 text-blue-600 mx-auto mb-2" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="flex justify-center mt-12 mb-20">
        <a href="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-700 to-red-500 text-white text-xl font-bold rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
          Learn More or Contact Us
          <ArrowRightCircle className="ml-3 h-7 w-7" />
        </a>
      </div>
    </div>
  );
};

export default SecondarySchool;