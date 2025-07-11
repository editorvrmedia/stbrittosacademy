import React from 'react';
import { BookOpen, Users, Target, Award, Lightbulb, Globe, Microscope, Calculator, CheckCircle, Star } from 'lucide-react';

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
    <div className="pt-20 bg-gradient-to-br from-blue-50 via-white to-red-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-b-3xl shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight drop-shadow-lg">Middle School (Grades 6-8)</h1>
          <p className="text-xl max-w-3xl mx-auto mb-2">A transformative period of growth and discovery. Our middle school program bridges the gap between primary and secondary education, fostering independence, critical thinking, and academic excellence.</p>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-2 bg-gradient-to-r from-blue-200 via-white to-red-200 my-8 rounded-full" />

      {/* Program Features */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Star className="mx-auto mb-2 h-10 w-10 text-yellow-400" />
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Middle School Excellence</h2>
            <p className="text-xl text-gray-600">Empowering students for high school and beyond</p>
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

      {/* Subjects */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BookOpen className="mx-auto mb-2 h-10 w-10 text-blue-400" />
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Subjects of Study</h2>
            <p className="text-xl text-gray-600">Comprehensive academic and co-curricular learning</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-t-4 border-blue-200">
                <subject.icon className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{subject.name}</h3>
                <p className="text-gray-700 mb-4">{subject.description}</p>
                <ul className="space-y-2">
                  {subject.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-center text-blue-800"><CheckCircle className="h-5 w-5 text-blue-600 mr-2" />{topic}</li>
                  ))}
                </ul>
              </div>
            ))}
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
            <p className="text-xl text-gray-600">Progressive learning for Grades 6-8</p>
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

      {/* Extracurriculars */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Lightbulb className="mx-auto mb-2 h-10 w-10 text-red-400" />
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Extracurricular Activities</h2>
            <p className="text-xl text-gray-600">Opportunities for holistic growth and leadership</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {extracurriculars.map((club, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-t-4 border-red-200">
                <Star className="h-10 w-10 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{club.category}</h3>
                <ul className="space-y-2">
                  {club.activities.map((activity, aidx) => (
                    <li key={aidx} className="flex items-center text-red-800"><CheckCircle className="h-5 w-5 text-red-600 mr-2" />{activity}</li>
                  ))}
                </ul>
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
            <Users className="mx-auto mb-2 h-10 w-10 text-blue-400" />
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Support Services</h2>
            <p className="text-xl text-gray-600">Academic, personal, and peer support for every student</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportServices.map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center border-t-4 border-blue-200">
                <service.icon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MiddleSchool;