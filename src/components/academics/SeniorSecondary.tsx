import React from 'react';
import { BookOpen, Microscope, Calculator, TrendingUp, Users, Award, Target, Lightbulb, CheckCircle } from 'lucide-react';

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
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Senior Secondary (Grades 11-12)</h1>
          <p className="text-xl max-w-3xl mx-auto">
            The final step toward higher education. Our senior secondary program provides specialized stream education, board exam preparation, and comprehensive college counseling for future success.
          </p>
        </div>
      </section>

      {/* Senior Secondary Images */}
      <section className="py-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0%,#000_10%,#000_90%,transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 animate-infinite-scroll">
              <li className="flex-shrink-0 w-96">
                <img src="/IMG_9655.JPG" alt="" className="w-full h-auto rounded-lg shadow-md" />
              </li>
              <li className="flex-shrink-0 w-96">
                <img src="/IMG_9640.JPG" alt="" className="w-full h-auto rounded-lg shadow-md" />
              </li>
              <li className="flex-shrink-0 w-96">
                <img src="/IMG_9620.JPG" alt="" className="w-full h-auto rounded-lg shadow-md" />
              </li>
              <li className="flex-shrink-0 w-96">
                <img src="/IMG_9822.JPG" alt="" className="w-full h-auto rounded-lg shadow-md" />
              </li>
              <li className="flex-shrink-0 w-96">
                <img src="/IMG_9780.JPG" alt="" className="w-full h-auto rounded-lg shadow-md" />
              </li>
              <li className="flex-shrink-0 w-96">
                <img src="/IMG_3455.JPG" alt="" className="w-full h-auto rounded-lg shadow-md" />
              </li>
              <li className="flex-shrink-0 w-96">
                <img src="/IMG_9655.JPG" alt="" className="w-full h-auto rounded-lg shadow-md" />
              </li>
              <li className="flex-shrink-0 w-96">
                <img src="/IMG_9640.JPG" alt="" className="w-full h-auto rounded-lg shadow-md" />
              </li>
              <li className="flex-shrink-0 w-96">
                <img src="/Safe & Secure School Campus St.Brittto_s Academy.JPG" alt="Safe & Secure School Campus St.Brittto_s Academy" className="w-full h-auto rounded-lg shadow-md" />
              </li>
              <li className="flex-shrink-0 w-96">
                <img src="/Safe & Secure School Campus.JPG" alt="Safe & Secure School Campus" className="w-full h-auto rounded-lg shadow-md" />
              </li>
              <li className="flex-shrink-0 w-96">
                <img src="/AMM00564.jpg" alt="AMM00564" className="w-full h-auto rounded-lg shadow-md" />
              </li>
            </ul>
            {/* Duplicate content for seamless scrolling */}
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 animate-infinite-scroll" aria-hidden="true">
              <li className="flex-shrink-0 w-96">
                <img src="/IMG_9655.JPG" alt="" className="w-full h-auto rounded-lg shadow-md" />
              </li>
              <li className="flex-shrink-0 w-96">
                <img src="/IMG_9640.JPG" alt="" className="w-full h-auto rounded-lg shadow-md" />
              </li>
              <li className="flex-shrink-0 w-96">
                <img src="/IMG_9620.JPG" alt="" className="w-full h-auto rounded-lg shadow-md" />
              </li>
              <li className="flex-shrink-0 w-96">
                <img src="/IMG_9822.JPG" alt="" className="w-full h-auto rounded-lg shadow-md" />
              </li>
              <li className="flex-shrink-0 w-96">
                <img src="/IMG_9780.JPG" alt="" className="w-full h-auto rounded-lg shadow-md" />
              </li>
              <li className="flex-shrink-0 w-96">
                <img src="/IMG_3455.JPG" alt="" className="w-full h-auto rounded-lg shadow-md" />
              </li>
              <li className="flex-shrink-0 w-96">
                <img src="/IMG_9655.JPG" alt="" className="w-full h-auto rounded-lg shadow-md" />
              </li>
              <li className="flex-shrink-0 w-96">
                <img src="/IMG_9640.JPG" alt="" className="w-full h-auto rounded-lg shadow-md" />
              </li>
              <li className="flex-shrink-0 w-96">
                <img src="/Safe & Secure School Campus St.Brittto_s Academy.JPG" alt="Safe & Secure School Campus St.Brittto_s Academy" className="w-full h-auto rounded-lg shadow-md" />
              </li>
              <li className="flex-shrink-0 w-96">
                <img src="/Safe & Secure School Campus.JPG" alt="Safe & Secure School Campus" className="w-full h-auto rounded-lg shadow-md" />
              </li>
              <li className="flex-shrink-0 w-96">
                <img src="/AMM00564.jpg" alt="AMM00564" className="w-full h-auto rounded-lg shadow-md" />
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Senior Secondary Excellence</h2>
            <p className="text-xl text-gray-600">Specialized education for college and career readiness</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-indigo-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <feature.icon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
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
            <p className="text-xl text-gray-600">Focused preparation for board exams and beyond</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {gradeStructure.map((grade, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-3xl font-bold text-indigo-700 mb-2">{grade.grade}</h3>
                  <p className="text-lg text-gray-600 font-semibold">{grade.age}</p>
                </div>
                <p className="text-lg text-gray-700 mb-6 text-center">{grade.focus}</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {grade.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center">
                      <Award className="h-5 w-5 text-indigo-600 mr-3" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Senior Secondary Main Content - Replaces Stream Options */}
      <section className="py-4 bg-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Comprehensive Senior Secondary Curriculum
            </h2>
            <p className="text-xl text-gray-600">
              Preparing students for diverse career paths with a robust curriculum.
            </p>
          </div>
          
          <div className="text-lg text-gray-700 leading-relaxed mb-4">
            <p className="mb-4">
              Our Senior Secondary program offers a comprehensive CBSE curriculum designed to nurture intellectual growth, critical thinking, and career readiness. Students can choose from a range of academic streams, each providing a strong foundation for higher education and future success.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-2">
                  <div>
                <p className="mb-1 font-bold text-gray-900 text-2xl text-center">Academic Streams & Subjects</p>
                {/* Science Stream */}
                <div className="bg-white p-3 rounded-lg shadow-md mb-2">
                  <h3 className="text-xl font-semibold text-blue-700 mb-1 flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Science Stream:
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-0 ml-4">
                    <li>English (Core)</li>
                    <li>Physics – Theory / Practical</li>
                    <li>Chemistry – Theory / Practical</li>
                    <li>Mathematics / Psychology</li>
                    <li>Biology / Computer Science – Theory / Practical</li>
                  </ul>
                  </div>

                {/* Commerce Stream */}
                <div className="bg-white p-3 rounded-lg shadow-md mb-2">
                  <h3 className="text-xl font-semibold text-blue-700 mb-1 flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Commerce Stream:
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-0 ml-4">
                    <li>English (Core)</li>
                    <li>Business Studies – Theory / Project</li>
                    <li>Accountancy – Theory / Project</li>
                    <li>Economics – Theory / Project</li>
                    <li>Mathematics / Computer Science / Applied Mathematics – Theory / Practical</li>
                  </ul>
                </div>
                
                {/* Humanities Stream */}
                <div className="bg-white p-3 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-blue-700 mb-1 flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    Humanities Stream:
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-0 ml-4">
                    <li>English (Core)</li>
                    <li>History / Geography</li>
                    <li>Political Science / Legal Studies</li>
                    <li>Psychology / Sociology</li>
                    <li>Economics / Entrepreneurship / Fine Arts / Mass Media Studies</li>
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                {/* Additional Academic Electives */}
                <div className="bg-white p-3 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Additional Academic Electives:</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-0 ml-4">
                    <li>Artificial Intelligence</li>
                    <li>Multimedia</li>
                    <li>French</li>
                  </ul>
          </div>

                {/* Internal Assessments */}
                <div className="bg-white p-3 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Internal Assessments (Common for All Streams):</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-0 ml-4">
                    <li>Physical & Health Education</li>
                    <li>Work Experience</li>
                    <li>General Studies</li>
                  </ul>
        </div>

                {/* Innovative Teaching & Learning Approach/ Seminars & Workshops */}
                <div className="bg-white p-3 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovative Teaching & Learning Approach/ Seminars & Workshops for academic excellence & skill development</h3>
                  <ul className="list-none space-y-0 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2"><CheckCircle className="h-5 w-5" /></span>
                      <span>Olympiads & Talent Search Exams for competitive readiness</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2"><CheckCircle className="h-5 w-5" /></span>
                      <span>Holistic Development Activities beyond academics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2"><CheckCircle className="h-5 w-5" /></span>
                      <span>Career Counseling by experts from diverse fields</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2"><CheckCircle className="h-5 w-5" /></span>
                      <span>Project-Based Learning & hands-on assignments</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2"><CheckCircle className="h-5 w-5" /></span>
                      <span>Rigorous Practice Tests for Board Exam preparation</span>
                    </li>
                  </ul>
          </div>
          
                {/* Beyond Academics – Leadership & Community Engagement */}
                <div className="bg-white p-3 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Beyond Academics – Leadership & Community Engagement ✨</h3>
                  <ul className="list-none space-y-0 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2" role="img" aria-label="trophy">🏆</span>
                      <span>Certifications in Leadership – Cultivating leadership qualities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2" role="img" aria-label="handshake">🤝</span>
                      <span>Community Outreach Programs – Encouraging social responsibility</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2" role="img" aria-label="medal">🏅</span>
                      <span>Academic Excellence Certifications – Recognizing top achievers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="mt-4 text-gray-700 text-center">
              The Senior Secondary curriculum at <span className="font-revue">St. Britto's Academy</span> emphasizes not just academic excellence but also holistic development, preparing students to be responsible global citizens and future leaders. Our focus on a balanced education ensures students are well-rounded and ready for the challenges of higher education and professional life.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities & Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">State-of-the-Art Facilities</h2>
            <p className="text-xl text-gray-600">Equipping students with the best learning environment</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="text-center p-6 bg-indigo-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <facility.icon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
            <p className="text-xl text-gray-600">Celebrating academic excellence and achievements</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((item, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <p className="text-5xl font-bold text-indigo-600 mb-2">{item.metric}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.label}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Shape Your Future</h2>
          <p className="text-xl mb-8">
            Join St. Britto's Academy for a senior secondary education that opens doors to top universities and successful careers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admissions"
              className="bg-white text-indigo-700 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Apply for Admission
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-indigo-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeniorSecondary;