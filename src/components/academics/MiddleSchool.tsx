import React from 'react';
import { BookOpen, Users, Target, Award, Lightbulb, Globe, Microscope, Calculator, CheckCircle } from 'lucide-react';

const MiddleSchool = () => {
  const features = [
    {
      icon: Target,
      title: 'Academic Rigor',
      description: 'Challenging curriculum preparing students for high school success'
    },
    {
      icon: Users,
      title: 'Social Development',
      description: 'Building confidence and interpersonal skills during adolescence'
    },
    {
      icon: Lightbulb,
      title: 'Critical Thinking',
      description: 'Developing analytical and problem-solving abilities'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Understanding diverse cultures and global citizenship'
    }
  ];

  const subjects = [
    {
      name: 'English Language & Literature',
      icon: BookOpen,
      description: 'Advanced reading, writing, grammar, and literary analysis',
      topics: ['Novel studies', 'Poetry analysis', 'Essay writing', 'Debate & discussion']
    },
    {
      name: 'Mathematics',
      icon: Calculator,
      description: 'Algebra, geometry, statistics, and advanced problem-solving',
      topics: ['Algebraic expressions', 'Geometric proofs', 'Data analysis', 'Mathematical reasoning']
    },
    {
      name: 'Science',
      icon: Microscope,
      description: 'Integrated science covering physics, chemistry, and biology',
      topics: ['Scientific method', 'Laboratory experiments', 'Research projects', 'Environmental science']
    },
    {
      name: 'Social Studies',
      icon: Globe,
      description: 'World history, geography, civics, and cultural studies',
      topics: ['World civilizations', 'Geographic analysis', 'Government systems', 'Current events']
    },
    {
      name: 'Computer Science',
      icon: Target,
      description: 'Programming, digital literacy, and technology applications',
      topics: ['Coding languages', 'Web design', 'Digital citizenship', 'Technology ethics']
    },
    {
      name: 'Foreign Languages',
      icon: Users,
      description: 'French, Spanish, or German language and cultural studies',
      topics: ['Conversational skills', 'Grammar & vocabulary', 'Cultural exploration', 'Literature introduction']
    }
  ];

  const gradeStructure = [
    {
      grade: 'Grade 6',
      age: '11-12 years',
      focus: 'Transition to departmentalized learning and increased independence',
      highlights: ['Subject specialization', 'Study skills development', 'Time management', 'Peer collaboration']
    },
    {
      grade: 'Grade 7',
      age: '12-13 years',
      focus: 'Advanced concept mastery and leadership skill development',
      highlights: ['Abstract thinking', 'Research skills', 'Leadership opportunities', 'Community service']
    },
    {
      grade: 'Grade 8',
      age: '13-14 years',
      focus: 'High school preparation and career exploration',
      highlights: ['High school readiness', 'Career exploration', 'Advanced projects', 'Mentorship roles']
    }
  ];

  const extracurriculars = [
    {
      category: 'Academic Clubs',
      activities: ['Math Olympiad', 'Science Fair', 'Debate Team', 'Model UN', 'Literary Magazine', 'Quiz Bowl']
    },
    {
      category: 'Arts & Culture',
      activities: ['Drama Club', 'Art Society', 'Music Ensemble', 'Dance Troupe', 'Photography Club', 'Creative Writing']
    },
    {
      category: 'Sports & Fitness',
      activities: ['Basketball', 'Soccer', 'Swimming', 'Track & Field', 'Badminton', 'Table Tennis']
    },
    {
      category: 'Leadership & Service',
      activities: ['Student Council', 'Peer Tutoring', 'Environmental Club', 'Community Service', 'Safety Patrol', 'Tech Team']
    }
  ];

  const supportServices = [
    {
      title: 'Academic Support',
      description: 'Tutoring, study groups, and individualized learning plans',
      icon: BookOpen
    },
    {
      title: 'Counseling Services',
      description: 'Personal, academic, and career guidance counseling',
      icon: Users
    },
    {
      title: 'Peer Mentoring',
      description: 'Older student mentors supporting younger students',
      icon: Target
    },
    {
      title: 'Parent Partnership',
      description: 'Regular communication and involvement opportunities',
      icon: Award
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Middle School (Grades 6-8)</h1>
          <p className="text-xl max-w-3xl mx-auto">
            A transformative period of growth and discovery. Our middle school program bridges the gap between primary and secondary education, fostering independence, critical thinking, and academic excellence.
          </p>
        </div>
      </section>

      {/* Middle School Images */}
      <section className="py-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0%,#000_10%,#000_90%,transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 animate-infinite-scroll">
              <li className="flex-shrink-0 w-80">
                <img src="/IMG_9616.JPG" alt="Middle School Students" className="w-full h-auto rounded-lg shadow-md" />
              </li>
              <li className="flex-shrink-0 w-80">
                <img src="/IMG_9675.JPG" alt="Middle School Students" className="w-full h-auto rounded-lg shadow-md" />
              </li>
              <li className="flex-shrink-0 w-80">
                <img src="/IMG_9662.JPG" alt="Middle School Students" className="w-full h-auto rounded-lg shadow-md" />
              </li>
              <li className="flex-shrink-0 w-80">
                <img src="/IMG_9635.JPG" alt="Middle School Students" className="w-full h-auto rounded-lg shadow-md" />
              </li>
              <li className="flex-shrink-0 w-80">
                <img src="/C0763T01.JPG" alt="Middle School Students" className="w-full h-auto rounded-lg shadow-md" />
              </li>
              <li className="flex-shrink-0 w-80">
                <img src="/Academic Excellence St.Brittos Acdemy.JPG" alt="Academic Excellence St.Brittos Acdemy" className="w-full h-auto rounded-lg shadow-md" />
              </li>
              <li className="flex-shrink-0 w-80">
                <img src="/Excellence in Education CBSE St.Brittos Acdemy.JPG" alt="Excellence in Education CBSE St.Brittos Acdemy" className="w-full h-auto rounded-lg shadow-md" />
              </li>
              <li className="flex-shrink-0 w-80">
                <img src="/IMG_9128.JPG" alt="IMG_9128" className="w-full h-auto rounded-lg shadow-md" />
              </li>
              <li className="flex-shrink-0 w-80">
                <img src="/IMG_8686.JPG" alt="IMG_8686" className="w-full h-auto rounded-lg shadow-md" />
              </li>
              <li className="flex-shrink-0 w-80">
                <img src="/IMG_8509.JPG" alt="IMG_8509" className="w-full h-auto rounded-lg shadow-md" />
              </li>
            </ul>
            {/* Duplicate content for seamless scrolling */}
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 animate-infinite-scroll" aria-hidden="true">
              <li className="flex-shrink-0 w-80">
                <img src="/IMG_9616.JPG" alt="Middle School Students" className="w-full h-auto rounded-lg shadow-md" />
              </li>
              <li className="flex-shrink-0 w-80">
                <img src="/IMG_9675.JPG" alt="Middle School Students" className="w-full h-auto rounded-lg shadow-md" />
              </li>
              <li className="flex-shrink-0 w-80">
                <img src="/IMG_9662.JPG" alt="Middle School Students" className="w-full h-auto rounded-lg shadow-md" />
              </li>
              <li className="flex-shrink-0 w-80">
                <img src="/IMG_9635.JPG" alt="Middle School Students" className="w-full h-auto rounded-lg shadow-md" />
              </li>
              <li className="flex-shrink-0 w-80">
                <img src="/C0763T01.JPG" alt="Middle School Students" className="w-full h-auto rounded-lg shadow-md" />
              </li>
              <li className="flex-shrink-0 w-80">
                <img src="/Academic Excellence St.Brittos Acdemy.JPG" alt="Academic Excellence St.Brittos Acdemy" className="w-full h-auto rounded-lg shadow-md" />
              </li>
              <li className="flex-shrink-0 w-80">
                <img src="/Excellence in Education CBSE St.Brittos Acdemy.JPG" alt="Excellence in Education CBSE St.Brittos Acdemy" className="w-full h-auto rounded-lg shadow-md" />
              </li>
              <li className="flex-shrink-0 w-80">
                <img src="/IMG_9128.JPG" alt="IMG_9128" className="w-full h-auto rounded-lg shadow-md" />
              </li>
              <li className="flex-shrink-0 w-80">
                <img src="/IMG_8686.JPG" alt="IMG_8686" className="w-full h-auto rounded-lg shadow-md" />
              </li>
              <li className="flex-shrink-0 w-80">
                <img src="/IMG_8509.JPG" alt="IMG_8509" className="w-full h-auto rounded-lg shadow-md" />
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Middle School Excellence</h2>
            <p className="text-xl text-gray-600">Supporting students through their transformative middle school years</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-purple-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <feature.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Grade Progression</h2>
            <p className="text-xl text-gray-600">Structured growth from Grade 6 to Grade 8</p>
          </div>
          
          <div className="space-y-8">
            {gradeStructure.map((grade, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="grid lg:grid-cols-3 gap-6 items-center">
                  <div className="text-center lg:text-left">
                    <h3 className="text-3xl font-bold text-purple-700 mb-2">{grade.grade}</h3>
                    <p className="text-lg text-gray-600 font-semibold">{grade.age}</p>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="text-lg text-gray-700 mb-4">{grade.focus}</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {grade.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center">
                          <Award className="h-5 w-5 text-purple-600 mr-3" />
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            Middle School at St. Britto's Academy – Cambridge Curriculum for Holistic Growth
          </h2>

          <div className="text-lg text-gray-700 leading-relaxed mb-8">
            <p className="mb-4">
              At St. Britto's Academy, our Middle School Programme (Grades VI – VIII) follows the <b>Cambridge Curriculum</b>, with the school serving as a <b>knowledge partner</b>. The curriculum is designed to provide a <b>strong academic foundation</b> while fostering <b>critical thinking, practical learning, and personal development</b>.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="mb-4 font-bold">
                  Subjects of Study
                </p>
                <ul className="list-none space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2"><CheckCircle className="h-5 w-5" /></span>
                    <span><b>Languages</b> – English, Tamil & Hindi (Third language compulsory)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2"><CheckCircle className="h-5 w-5" /></span>
                    <span><b>Core Subjects</b> – Mathematics (Theory/Lab), Science (Theory/Lab) & Social Science</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2"><CheckCircle className="h-5 w-5" /></span>
                    <span><b>Technology & Knowledge Enhancement</b> – Computer Science & General Knowledge</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2"><CheckCircle className="h-5 w-5" /></span>
                    <span><b>Value-Based Learning</b> – Value Education, Life Skills & Soft Skills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2"><CheckCircle className="h-5 w-5" /></span>
                    <span><b>Creative & Physical Development</b> – Art Education & Physical & Health Education, & Talent Hunt</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2"><CheckCircle className="h-5 w-5" /></span>
                    <span><b>Skill Education</b> – Fostering practical and vocational skills</span>
                  </li>
                </ul>
          </div>
          
              <div>
                <p className="mb-4 font-bold">
                  Innovative Teaching Methodology
                </p>
                <ul className="list-none space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2"><CheckCircle className="h-5 w-5" /></span>
                    <span>Concept-based learning for deeper understanding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2"><CheckCircle className="h-5 w-5" /></span>
                    <span>Hands-on practical sessions in the Junior Science Lab</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2"><CheckCircle className="h-5 w-5" /></span>
                    <span>Simplified explanations of abstract concepts through educational CDs & PPTs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2"><CheckCircle className="h-5 w-5" /></span>
                    <span>Virtual Classroom Teaching for enhanced subject comprehension</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2"><CheckCircle className="h-5 w-5" /></span>
                    <span>Workshops, lectures & orientations by eminent personalities for skill-building</span>
                  </li>
                </ul>

                <p className="mb-4 font-bold mt-8">
                  Key Focus Areas
                </p>
                <ul className="list-none space-y-2 mb-4">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2"><CheckCircle className="h-5 w-5" /></span>
                    <span>Soft Skills & Communication</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2"><CheckCircle className="h-5 w-5" /></span>
                    <span>Personality Development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2"><CheckCircle className="h-5 w-5" /></span>
                    <span>Life Skills & Critical Thinking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2"><CheckCircle className="h-5 w-5" /></span>
                    <span>Value-Based Education & Ethics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2"><CheckCircle className="h-5 w-5" /></span>
                    <span>Health, Hygiene & Well-being</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="mt-8">
              With a balanced approach to academics, values, and skills, our Middle School programme ensures that students develop <b>confidence, adaptability, and a passion for lifelong learning</b>.
            </p>
          </div>
        </div>
      </section>

      {/* Extracurricular Activities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Extracurricular Activities</h2>
            <p className="text-xl text-gray-600">Diverse opportunities for personal growth and skill development</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {extracurriculars.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.activities.map((activity, idx) => (
                    <li key={idx} className="flex items-center">
                      <Lightbulb className="h-4 w-4 text-purple-600 mr-2" />
                      <span className="text-gray-700 text-sm">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-16 bg-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Student Support Services</h2>
            <p className="text-xl">Comprehensive support for academic and personal success</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportServices.map((service, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg hover:bg-opacity-20 transition-all duration-300 text-center">
                <service.icon className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-purple-100">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preparation for High School */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">High School Preparation</h2>
            <p className="text-xl text-gray-600">Building skills and confidence for the next academic level</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Study Skills',
                description: 'Time management, note-taking, and effective study strategies'
              },
              {
                title: 'Academic Planning',
                description: 'Course selection guidance and academic goal setting'
              },
              {
                title: 'Leadership Development',
                description: 'Opportunities to lead projects and mentor younger students'
              },
              {
                title: 'College Awareness',
                description: 'Early exposure to college and career planning concepts'
              }
            ].map((preparation, index) => (
              <div key={index} className="bg-purple-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{preparation.title}</h3>
                <p className="text-gray-600">{preparation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Navigate Middle School with Confidence</h2>
          <p className="text-xl text-gray-600 mb-8">
            Support your child through these important developmental years with our comprehensive middle school program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admissions"
              className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Apply for Admission
            </a>
            <a
              href="/about/virtual-tour"
              className="border-2 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Schedule a Visit
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MiddleSchool;