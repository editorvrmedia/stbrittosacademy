import React from 'react';
import { BookOpen, Microscope, Calculator, TrendingUp, Users, Award, Target, Lightbulb, CheckCircle, Star, Monitor } from 'lucide-react';

const SeniorSecondary = () => {
  const features = [
    {
      icon: Target,
      title: 'Board Excellence',
      description: 'Comprehensive preparation for CBSE Class 12 board examinations'
    },
    {
      icon: Lightbulb,
      title: 'Competitive Exams',
      description: 'Preparation for JEE, NEET, and other entrance examinations'
    },
    {
      icon: Users,
      title: 'College Counseling',
      description: 'Professional guidance for college admissions and career planning'
    },
    {
      icon: Award,
      title: 'Research Projects',
      description: 'Independent research and advanced project work'
    }
  ];

  const streams = [
    {
      name: 'Science Stream',
      icon: Microscope,
      description: 'Physics, Chemistry, Mathematics/Biology for engineering and medical aspirants',
      combinations: [
        { name: 'PCM (Physics, Chemistry, Mathematics)', careers: ['Engineering', 'Technology', 'Research', 'Architecture'] },
        { name: 'PCB (Physics, Chemistry, Biology)', careers: ['Medicine', 'Biotechnology', 'Pharmacy', 'Life Sciences'] },
        { name: 'PCMB (All Four Subjects)', careers: ['Flexible career options', 'Research', 'Interdisciplinary fields'] }
      ]
    },
    {
      name: 'Commerce Stream',
      icon: TrendingUp,
      description: 'Business Studies, Accountancy, Economics for commerce and management careers',
      combinations: [
        { name: 'Commerce with Mathematics', careers: ['CA/CS', 'Banking', 'Finance', 'Economics'] },
        { name: 'Commerce without Mathematics', careers: ['BBA', 'Business Management', 'Marketing', 'Entrepreneurship'] }
      ]
    },
    {
      name: 'Humanities Stream',
      icon: BookOpen,
      description: 'History, Political Science, Psychology, Geography for liberal arts careers',
      combinations: [
        { name: 'Arts with Mathematics', careers: ['Economics', 'Statistics', 'Social Research'] },
        { name: 'Arts without Mathematics', careers: ['Law', 'Journalism', 'Social Work', 'Civil Services'] }
      ]
    }
  ];

  const gradeStructure = [
    {
      grade: 'Grade 11',
      age: '16-17 years',
      focus: 'Foundation building in chosen stream and competitive exam preparation',
      highlights: ['Stream specialization', 'Concept building', 'Study habits', 'Career exploration']
    },
    {
      grade: 'Grade 12',
      age: '17-18 years',
      focus: 'Board exam preparation and college admission guidance',
      highlights: ['Board exam mastery', 'Competitive exams', 'College applications', 'Career decisions']
    }
  ];

  const competitiveExams = [
    {
      exam: 'JEE Main & Advanced',
      description: 'Engineering entrance examinations for IITs, NITs, and other technical institutes',
      subjects: ['Physics', 'Chemistry', 'Mathematics']
    },
    {
      exam: 'NEET',
      description: 'Medical entrance examination for MBBS, BDS, and other medical courses',
      subjects: ['Physics', 'Chemistry', 'Biology']
    },
    {
      exam: 'CA Foundation',
      description: 'Chartered Accountancy foundation course for commerce students',
      subjects: ['Accounting', 'Business Laws', 'Economics', 'Mathematics']
    },
    {
      exam: 'CLAT',
      description: 'Common Law Admission Test for law colleges and universities',
      subjects: ['English', 'Legal Reasoning', 'Logical Reasoning', 'Current Affairs']
    }
  ];

  const facilities = [
    {
      title: 'Advanced Laboratories',
      description: 'State-of-the-art physics, chemistry, and biology labs with modern equipment',
      icon: Microscope
    },
    {
      title: 'Library & Resources',
      description: 'Extensive collection of reference books, journals, and digital resources',
      icon: BookOpen
    },
    {
      title: 'Computer Lab',
      description: 'Modern computer facilities for programming and digital literacy',
      icon: Target
    },
    {
      title: 'Career Counseling',
      description: 'Professional guidance for college selection and career planning',
      icon: Users
    }
  ];

  const achievements = [
    { metric: '99%', label: 'Board Exam Pass Rate', description: 'Exceptional performance' },
    { metric: '92%', label: 'Students with Distinction', description: 'Academic excellence' },
    { metric: '75%', label: 'Top College Admissions', description: 'Premier institutions' },
    { metric: '60+', label: 'Merit Scholarships', description: 'Outstanding achievements' }
  ];

  return (
    <div className="pt-20 bg-gradient-to-br from-blue-50 via-white to-red-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-b-3xl shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight drop-shadow-lg">Senior Secondary (Grades 11-12)</h1>
          <p className="text-xl max-w-3xl mx-auto mb-2">The final step toward higher education. Our senior secondary program provides specialized stream education, board exam preparation, and comprehensive college counseling for future success.</p>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-2 bg-gradient-to-r from-blue-200 via-white to-red-200 my-8 rounded-full" />

      {/* Program Features */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Target className="mx-auto mb-2 h-10 w-10 text-red-400" />
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Senior Secondary Excellence</h2>
            <p className="text-xl text-gray-600">Comprehensive preparation for board exams and college admissions</p>
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

      {/* Streams */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Users className="mx-auto mb-2 h-10 w-10 text-red-400" />
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Stream Selection Guidance</h2>
            <p className="text-xl text-gray-600">Professional counseling for choosing the right academic path</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Science Stream */}
            <div className="bg-red-50 p-8 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-t-4 border-red-200">
              <Microscope className="h-10 w-10 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Science Stream</h3>
              <p className="text-gray-700 mb-6">For students interested in engineering, medicine, and research</p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Core Subjects:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center"><BookOpen className="h-4 w-4 text-red-600 mr-2" /><span className="text-gray-700">Physics</span></li>
                  <li className="flex items-center"><BookOpen className="h-4 w-4 text-red-600 mr-2" /><span className="text-gray-700">Chemistry</span></li>
                  <li className="flex items-center"><BookOpen className="h-4 w-4 text-red-600 mr-2" /><span className="text-gray-700">Biology</span></li>
                  <li className="flex items-center"><BookOpen className="h-4 w-4 text-red-600 mr-2" /><span className="text-gray-700">Mathematics/Psychology</span></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Career Options:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold shadow-sm">Engineering</span>
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold shadow-sm">Medicine</span>
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold shadow-sm">Research</span>
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold shadow-sm">Technology</span>
                </div>
              </div>
            </div>
            {/* Computer Science Stream */}
            <div className="bg-red-50 p-8 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-t-4 border-red-200">
              <Monitor className="h-10 w-10 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Computer Science Stream</h3>
              <p className="text-gray-700 mb-6">For students interested in computer science and engineering</p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Core Subjects:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center"><BookOpen className="h-4 w-4 text-red-600 mr-2" /><span className="text-gray-700">Computer Science</span></li>
                  <li className="flex items-center"><BookOpen className="h-4 w-4 text-red-600 mr-2" /><span className="text-gray-700">Physics</span></li>
                  <li className="flex items-center"><BookOpen className="h-4 w-4 text-red-600 mr-2" /><span className="text-gray-700">Chemistry</span></li>
                  <li className="flex items-center"><BookOpen className="h-4 w-4 text-red-600 mr-2" /><span className="text-gray-700">Mathematics</span></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Career Options:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold shadow-sm">Technology</span>
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold shadow-sm">IT</span>
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold shadow-sm">Engineering</span>
                </div>
              </div>
            </div>
            {/* Commerce Stream */}
            <div className="bg-red-50 p-8 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-t-4 border-red-200">
              <TrendingUp className="h-10 w-10 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Commerce Stream</h3>
              <p className="text-gray-700 mb-6">For students interested in business, finance, and economics</p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Core Subjects:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center"><BookOpen className="h-4 w-4 text-red-600 mr-2" /><span className="text-gray-700">Accountancy</span></li>
                  <li className="flex items-center"><BookOpen className="h-4 w-4 text-red-600 mr-2" /><span className="text-gray-700">Business Studies</span></li>
                  <li className="flex items-center"><BookOpen className="h-4 w-4 text-red-600 mr-2" /><span className="text-gray-700">Economics</span></li>
                  <li className="flex items-center"><BookOpen className="h-4 w-4 text-red-600 mr-2" /><span className="text-gray-700">Applied Mathematics</span></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Career Options:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold shadow-sm">Business</span>
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold shadow-sm">Finance</span>
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold shadow-sm">Banking</span>
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold shadow-sm">Entrepreneurship</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-2 bg-gradient-to-r from-blue-200 via-white to-red-200 my-8 rounded-full" />

      {/* Grade Structure */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Award className="mx-auto mb-2 h-10 w-10 text-yellow-400" />
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Grade Structure</h2>
            <p className="text-xl text-gray-600">Focused preparation for board exams and college admissions</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {gradeStructure.map((grade, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-t-4 border-yellow-200">
                <div className="text-center mb-6">
                  <h3 className="text-3xl font-bold text-red-700 mb-2">{grade.grade}</h3>
                  <p className="text-lg text-gray-600 font-semibold">{grade.age}</p>
                </div>
                <p className="text-lg text-gray-700 mb-6 text-center">{grade.focus}</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {grade.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
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
      <div className="w-full h-2 bg-gradient-to-r from-red-200 via-white to-blue-200 my-8 rounded-full" />

      {/* Facilities */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Users className="mx-auto mb-2 h-10 w-10 text-red-400" />
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Facilities & Support</h2>
            <p className="text-xl text-gray-600">Modern infrastructure and personalized guidance</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center border-t-4 border-red-200">
                <facility.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-2 bg-gradient-to-r from-red-200 via-white to-blue-200 my-8 rounded-full" />

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
    </div>
  );
};

export default SeniorSecondary;