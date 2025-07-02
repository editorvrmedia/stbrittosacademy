import React from 'react';
import { BookOpen, Microscope, Calculator, Globe, Users, Award, Target, Lightbulb, CheckCircle } from 'lucide-react';

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
      subjects: ['Physics', 'Chemistry', 'Mathematics/Biology'],
      careers: ['Engineering', 'Medicine', 'Research', 'Technology']
    },
    {
      stream: 'Commerce Stream',
      description: 'For students interested in business, finance, and economics',
      subjects: ['Accountancy', 'Business Studies', 'Economics'],
      careers: ['Business', 'Finance', 'Banking', 'Entrepreneurship']
    },
    {
      stream: 'Humanities Stream',
      description: 'For students interested in arts, literature, and social sciences',
      subjects: ['History', 'Political Science', 'Psychology'],
      careers: ['Law', 'Journalism', 'Social Work', 'Civil Services']
    }
  ];

  const achievements = [
    { metric: '98%', label: 'Board Exam Pass Rate', description: 'Consistent high performance' },
    { metric: '85%', label: 'Students with Distinction', description: 'Excellence in academics' },
    { metric: '100%', label: 'College Placement', description: 'Successful stream transitions' },
    { metric: '50+', label: 'Merit Scholarships', description: 'Recognition for excellence' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Secondary School (Grades 9-10)</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Preparing for board examinations and future success. Our secondary school program provides rigorous academic preparation, career guidance, and comprehensive support for CBSE board examinations.
          </p>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Secondary School Excellence</h2>
            <p className="text-xl text-gray-600">Comprehensive preparation for board exams and beyond</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-red-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <feature.icon className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grade Structure */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Grade Structure</h2>
            <p className="text-xl text-gray-600">Focused preparation for board examinations</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {gradeStructure.map((grade, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-3xl font-bold text-red-700 mb-2">{grade.grade}</h3>
                  <p className="text-lg text-gray-600 font-semibold">{grade.age}</p>
                </div>
                <p className="text-lg text-gray-700 mb-6 text-center">{grade.focus}</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {grade.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center">
                      <Award className="h-5 w-5 text-red-600 mr-3" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Secondary School at <span className="font-revue">St. Britto's Academy</span> – CBSE Curriculum for Academic Excellence
          </h2>

          <div className="text-lg text-gray-700 leading-relaxed mb-8">
            <p className="mb-6">
              The Secondary School Programme (Grades IX & X) at <span className="font-revue">St. Britto's Academy</span> follows NCERT textbooks as per CBSE guidelines, ensuring a strong academic foundation and skill-based learning.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="mb-4 font-bold">Subjects of Study</p>
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
          
              <div className="space-y-8">
                <div>
                  <p className="mb-4 font-bold">Innovative Teaching Methodology</p>
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

                <div>
                  <p className="mb-4 font-bold">Beyond Academics – Leadership & Community Engagement</p>
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
            </div>

            <p className="mt-8">
              The CBSE Secondary Curriculum at <span className="font-revue">St. Britto's Academy</span> ensures intellectual growth, critical thinking, and career readiness, preparing students for higher education and future success.
            </p>
          </div>
        </div>
      </section>

      {/* Exam Preparation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Board Exam Preparation</h2>
            <p className="text-xl text-gray-600">Comprehensive support for CBSE board examination success</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {examPreparation.map((prep, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <prep.icon className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{prep.title}</h3>
                <p className="text-gray-600">{prep.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Guidance */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Stream Selection Guidance</h2>
            <p className="text-xl text-gray-600">Professional counseling for choosing the right academic path</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {careerGuidance.map((stream, index) => (
              <div key={index} className="bg-red-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{stream.stream}</h3>
                <p className="text-gray-700 mb-6">{stream.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Core Subjects:</h4>
                  <ul className="space-y-2">
                    {stream.subjects.map((subject, idx) => (
                      <li key={idx} className="flex items-center">
                        <BookOpen className="h-4 w-4 text-red-600 mr-2" />
                        <span className="text-gray-700">{subject}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Career Options:</h4>
                  <div className="flex flex-wrap gap-2">
                    {stream.careers.map((career, idx) => (
                      <span key={idx} className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                        {career}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Track Record</h2>
            <p className="text-xl">Consistent excellence in board examinations and student outcomes</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg hover:bg-opacity-20 transition-all duration-300">
                <div className="text-4xl font-bold mb-2">{achievement.metric}</div>
                <div className="text-xl font-semibold mb-2">{achievement.label}</div>
                <div className="text-red-100 text-sm">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Support Services</h2>
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
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Excel in Board Examinations</h2>
          <p className="text-xl text-gray-600 mb-8">
            Prepare your child for board exam success and future academic achievements with our comprehensive secondary school program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admissions"
              className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Apply for Admission
            </a>
            <a
              href="/academics/results"
              className="border-2 border-red-700 text-red-700 hover:bg-red-700 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              View Results
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecondarySchool;