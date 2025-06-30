import React from 'react';
import { BookOpen, Users, Star, Target, Lightbulb, Heart, Award, CheckCircle, Microscope, Globe } from 'lucide-react';

const LowerPrimary = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Foundation Skills',
      description: 'Strong foundation in reading, writing, and basic mathematics'
    },
    {
      icon: Users,
      title: 'Small Class Sizes',
      description: 'Individual attention with optimal teacher-student ratio'
    },
    {
      icon: Lightbulb,
      title: 'Inquiry-Based Learning',
      description: 'Encouraging curiosity and exploration through questioning'
    },
    {
      icon: Heart,
      title: 'Character Development',
      description: 'Building values, empathy, and social responsibility'
    }
  ];

  const subjects = [
    {
      name: 'English Language',
      description: 'Reading comprehension, creative writing, grammar, and vocabulary development',
      skills: ['Phonics mastery', 'Reading fluency', 'Creative writing', 'Oral communication']
    },
    {
      name: 'Mathematics',
      description: 'Number concepts, basic operations, problem-solving, and logical thinking',
      skills: ['Number recognition', 'Addition & subtraction', 'Multiplication tables', 'Word problems']
    },
    {
      name: 'Science',
      description: 'Basic scientific concepts through observation, experimentation, and discovery',
      skills: ['Nature observation', 'Simple experiments', 'Scientific method', 'Environmental awareness']
    },
    {
      name: 'Social Studies',
      description: 'Understanding community, culture, geography, and basic history concepts',
      skills: ['Community helpers', 'Cultural awareness', 'Map skills', 'Historical stories']
    },
    {
      name: 'Arts & Crafts',
      description: 'Creative expression through various art forms and craft activities',
      skills: ['Drawing & painting', 'Clay modeling', 'Paper crafts', 'Creative projects']
    },
    {
      name: 'Physical Education',
      description: 'Physical fitness, sports skills, and healthy lifestyle habits',
      skills: ['Basic sports', 'Coordination exercises', 'Team games', 'Health awareness']
    }
  ];

  const learningApproaches = [
    {
      title: 'Hands-On Learning',
      description: 'Learning through manipulation of objects, experiments, and practical activities',
      icon: Target
    },
    {
      title: 'Story-Based Learning',
      description: 'Using stories and narratives to teach concepts across subjects',
      icon: BookOpen
    },
    {
      title: 'Group Activities',
      description: 'Collaborative learning through group projects and peer interaction',
      icon: Users
    },
    {
      title: 'Visual Learning',
      description: 'Charts, pictures, and visual aids to enhance understanding',
      icon: Star
    }
  ];

  const gradeStructure = [
    {
      grade: 'Grade 1',
      age: '6-7 years',
      focus: 'Basic literacy and numeracy skills, social adjustment to school environment',
      highlights: ['Letter recognition', 'Number concepts 1-100', 'Simple sentences', 'Classroom routines']
    },
    {
      grade: 'Grade 2',
      age: '7-8 years',
      focus: 'Building reading fluency, basic math operations, and independent learning skills',
      highlights: ['Reading simple books', 'Addition & subtraction', 'Creative writing', 'Science exploration']
    },
    {
      grade: 'Grade 3',
      age: '8-9 years',
      focus: 'Advanced reading comprehension, multiplication concepts, and critical thinking',
      highlights: ['Chapter books', 'Multiplication tables', 'Research projects', 'Problem solving']
    }
  ];

  const learningOutcomes = [
    'Develop strong analytical and critical thinking skills',
    'Master advanced literacy and numeracy concepts',
    'Demonstrate scientific inquiry and research abilities',
    'Show cultural awareness and global perspective',
    'Exhibit leadership qualities and teamwork skills',
    'Display creativity and innovative thinking',
    'Practice responsible digital citizenship',
    'Demonstrate environmental consciousness'
  ];

  const specialPrograms = [
    {
      title: 'STEM Projects',
      description: 'Science, Technology, Engineering, and Mathematics integrated projects',
      icon: Microscope
    },
    {
      title: 'Literary Club',
      description: 'Advanced reading, creative writing, and literary appreciation activities',
      icon: BookOpen
    },
    {
      title: 'Young Leaders',
      description: 'Leadership development program with student council participation',
      icon: Users
    },
    {
      title: 'Environmental Club',
      description: 'Sustainability projects and environmental awareness initiatives',
      icon: Globe
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Lower Primary (Grades 1-3)</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Building strong foundations for lifelong learning. Our lower primary program focuses on developing essential skills while nurturing curiosity and love for learning in young minds.
          </p>
        </div>
      </section>

      {/* New Content: Comprehensive Subjects and Learning */}
      <section className="py-16 bg-green-50 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Comprehensive Curriculum
          </h2>

          <div className="text-lg text-gray-700 leading-relaxed grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="mb-4 font-bold">
                Our comprehensive subjects include:
              </p>
              <ul className="list-none space-y-2 mb-4">
                <li className="flex items-start justify-center">
                  <span className="text-green-500 mr-2"><CheckCircle className="h-5 w-5" /></span>
                  <span>Languages – English, Tamil & Hindi</span>
                </li>
                <li className="flex items-start justify-center">
                  <span className="text-green-500 mr-2"><CheckCircle className="h-5 w-5" /></span>
                  <span>Core Subjects – Mathematics & Environmental Science (EVS)</span>
                </li>
                <li className="flex items-start justify-center">
                  <span className="text-green-500 mr-2"><CheckCircle className="h-5 w-5" /></span>
                  <span>Technology – Computer Science</span>
                </li>
                <li className="flex items-start justify-center">
                  <span className="text-green-500 mr-2"><CheckCircle className="h-5 w-5" /></span>
                  <span>Life Skills & Values – Value Education & Talent Hunt (TH)</span>
                </li>
                <li className="flex items-start justify-center">
                  <span className="text-green-500 mr-2"><CheckCircle className="h-5 w-5" /></span>
                  <span>Creative & Physical Development – Art Education & Physical & Health Education</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="mb-4 font-bold">
                Through interactive and experiential learning, we ensure:
              </p>
              <ul className="list-none space-y-2 mb-8">
                <li className="flex items-start justify-center">
                  <span className="text-green-500 mr-2"><CheckCircle className="h-5 w-5" /></span>
                  <span>Smooth knowledge transition & conceptual clarity</span>
                </li>
                <li className="flex items-start justify-center">
                  <span className="text-green-500 mr-2"><CheckCircle className="h-5 w-5" /></span>
                  <span>A passion for lifelong learning</span>
                </li>
                <li className="flex items-start justify-center">
                  <span className="text-green-500 mr-2"><CheckCircle className="h-5 w-5" /></span>
                  <span>Application of practical knowledge</span>
                </li>
                <li className="flex items-start justify-center">
                  <span className="text-green-500 mr-2"><CheckCircle className="h-5 w-5" /></span>
                  <span>Talent identification & skill development</span>
                </li>
                <li className="flex items-start justify-center">
                  <span className="text-green-500 mr-2"><CheckCircle className="h-5 w-5" /></span>
                  <span>Collaborative learning & peer engagement</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="mb-8 mt-8">
            Our child-centric approach creates a stimulating and joyful learning experience, shaping young minds for a bright future.
          </p>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Program Highlights</h2>
            <p className="text-xl text-gray-600">Creating confident, capable, and curious learners</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-green-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <feature.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
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
            <p className="text-xl text-gray-600">Progressive learning journey from Grade 1 to Grade 3</p>
          </div>
          
          <div className="space-y-8">
            {gradeStructure.map((grade, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="grid lg:grid-cols-3 gap-6 items-center">
                  <div className="text-center lg:text-left">
                    <h3 className="text-3xl font-bold text-green-700 mb-2">{grade.grade}</h3>
                    <p className="text-lg text-gray-600 font-semibold">{grade.age}</p>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="text-lg text-gray-700 mb-4">{grade.focus}</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {grade.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
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
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Subjects</h2>
            <p className="text-xl text-gray-600">Comprehensive curriculum covering all essential learning areas</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <div key={index} className="bg-green-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{subject.name}</h3>
                <p className="text-gray-700 mb-4">{subject.description}</p>
                <div className="space-y-2">
                  {subject.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center">
                      <Star className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm text-gray-600">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Approaches */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Teaching Approach</h2>
            <p className="text-xl text-gray-600">Engaging methodologies that make learning fun and effective</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningApproaches.map((approach, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <approach.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{approach.title}</h3>
                <p className="text-gray-600">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment & Progress */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Assessment & Progress Tracking</h2>
            <p className="text-xl">Comprehensive evaluation to support each child's growth</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Continuous Assessment',
                description: 'Daily observation and feedback on student progress and participation'
              },
              {
                title: 'Portfolio Development',
                description: 'Collection of student work showcasing growth and achievements'
              },
              {
                title: 'Parent Communication',
                description: 'Regular updates and conferences to discuss child\'s development'
              },
              {
                title: 'Skill-Based Evaluation',
                description: 'Assessment focused on mastery of essential skills and concepts'
              }
            ].map((assessment, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg hover:bg-opacity-20 transition-all duration-300">
                <h3 className="text-xl font-bold mb-3">{assessment.title}</h3>
                <p className="text-green-100">{assessment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Build Strong Foundations</h2>
          <p className="text-xl text-gray-600 mb-8">
            Give your child the best start in their academic journey with our comprehensive lower primary program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admissions"
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Apply for Admission
            </a>
            <a
              href="/about/virtual-tour"
              className="border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Schedule a Visit
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LowerPrimary;