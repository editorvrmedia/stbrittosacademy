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
    <div className="pt-20 bg-gradient-to-br from-blue-50 via-white to-red-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-b-3xl shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight drop-shadow-lg">Lower Primary (Grades 1-3)</h1>
          <p className="text-xl max-w-3xl mx-auto mb-2">Building strong foundations for lifelong learning. Our lower primary program focuses on developing essential skills while nurturing curiosity and love for learning in young minds.</p>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-2 bg-gradient-to-r from-blue-200 via-white to-red-200 my-8 rounded-full" />

      {/* Program Features */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Star className="mx-auto mb-2 h-10 w-10 text-yellow-400" />
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Lower Primary Excellence</h2>
            <p className="text-xl text-gray-600">Nurturing curiosity, skills, and values in young learners</p>
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

      {/* Comprehensive Curriculum */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BookOpen className="mx-auto mb-2 h-10 w-10 text-blue-400" />
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Our Comprehensive Curriculum</h2>
            <p className="text-xl text-gray-600">A holistic approach to foundational learning</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-t-4 border-blue-200">
              <p className="mb-4 font-bold text-blue-800 text-lg">Our comprehensive subjects include:</p>
              <ul className="list-none space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2"><CheckCircle className="h-5 w-5" /></span>
                  <span>Languages – English, Tamil & Hindi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2"><CheckCircle className="h-5 w-5" /></span>
                  <span>Core Subjects – Mathematics & Environmental Science (EVS)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2"><CheckCircle className="h-5 w-5" /></span>
                  <span>Technology – Computer Science</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2"><CheckCircle className="h-5 w-5" /></span>
                  <span>Life Skills & Values – Value Education & Talent Hunt (TH)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2"><CheckCircle className="h-5 w-5" /></span>
                  <span>Creative & Physical Development – Art Education & Physical & Health Education</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-t-4 border-red-200">
              <p className="mb-4 font-bold text-red-800 text-lg">Through interactive and experiential learning, we ensure:</p>
              <ul className="list-none space-y-2 mb-8">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2"><CheckCircle className="h-5 w-5" /></span>
                  <span>Smooth knowledge transition & conceptual clarity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2"><CheckCircle className="h-5 w-5" /></span>
                  <span>A passion for lifelong learning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2"><CheckCircle className="h-5 w-5" /></span>
                  <span>Confidence, creativity, and collaboration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2"><CheckCircle className="h-5 w-5" /></span>
                  <span>Holistic development and well-being</span>
                </li>
              </ul>
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
            <p className="text-xl text-gray-600">Progressive learning for Grades 1-3</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {gradeStructure.map((grade, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-t-4 border-yellow-200">
                <div className="text-center mb-6">
                  <h3 className="text-3xl font-bold text-blue-700 mb-2">{grade.grade}</h3>
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

      {/* Learning Approaches */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Lightbulb className="mx-auto mb-2 h-10 w-10 text-red-400" />
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Learning Approaches</h2>
            <p className="text-xl text-gray-600">Engaging, hands-on, and collaborative learning experiences</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningApproaches.map((approach, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-t-4 border-red-200">
                <approach.icon className="h-14 w-14 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{approach.title}</h3>
                <p className="text-gray-600">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-2 bg-gradient-to-r from-blue-200 via-white to-red-200 my-8 rounded-full" />

      {/* Learning Outcomes */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Star className="mx-auto mb-2 h-10 w-10 text-yellow-400" />
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Learning Outcomes</h2>
            <p className="text-xl text-gray-600">What our students achieve by the end of Lower Primary</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-blue-200 space-y-4">
              {learningOutcomes.slice(0, 4).map((outcome, idx) => (
                <li key={idx} className="flex items-center text-lg text-blue-800">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                  {outcome}
                </li>
              ))}
            </ul>
            <ul className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-red-200 space-y-4">
              {learningOutcomes.slice(4).map((outcome, idx) => (
                <li key={idx} className="flex items-center text-lg text-red-800">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3" />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-2 bg-gradient-to-r from-red-200 via-white to-blue-200 my-8 rounded-full" />

      {/* Special Programs */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Award className="mx-auto mb-2 h-10 w-10 text-yellow-400" />
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Special Programs</h2>
            <p className="text-xl text-gray-600">Enriching experiences beyond the classroom</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialPrograms.map((program, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-t-4 border-yellow-200">
                <program.icon className="h-14 w-14 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LowerPrimary;