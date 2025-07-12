import React from 'react';
import { Heart, Palette, Music, Users, Star, BookOpen, Play, Smile, CheckCircle, Award } from 'lucide-react';

const Kindergarten = () => {
  const features = [
    {
      icon: Heart,
      title: 'Nurturing Environment',
      description: 'Safe, caring atmosphere where children feel loved and secure'
    },
    {
      icon: Play,
      title: 'Play-Based Learning',
      description: 'Learning through fun activities, games, and exploration'
    },
    {
      icon: Users,
      title: 'Social Development',
      description: 'Building friendships and learning to work together'
    },
    {
      icon: BookOpen,
      title: 'Early Literacy',
      description: 'Foundation skills in reading, writing, and communication'
    }
  ];

  const galleryImages = [
    '/kindergarten-students-1.jpg',
    '/kindergarten-students-2.jpg',
    '/kindergarten-students-3.jpg'
  ];

  const curriculum = [
    {
      subject: 'Language Skills',
      activities: [
        'English Reading and Conversation',
        'English Writing',
        'English Dictation',
        'Story Telling',
        'Recitation',
        'Language-Tamil (Compulsory for LKG)',
        'Hindi and Tamil (Compulsory for UKG)',
      ],
      icon: BookOpen
    },
    {
      subject: 'Numeracy',
      activities: [
        'Number work',
      ],
      icon: Star
    },
    {
      subject: 'Environmental Science & General Awareness',
      activities: [
        'Environmental Science (EVS) - UKG',
        'General Awareness - LKG',
      ],
      icon: Users
    },
    {
      subject: 'Physical Education',
      activities: [
        'Physical Education',
      ],
      icon: Heart
    },
    {
      subject: 'Creative Arts',
      activities: [
        'Drawing and Colouring',
        'Music',
        'Craft',
      ],
      icon: Palette
    }
  ];

  const dailySchedule = [
    { time: '8:00 - 8:30 AM', activity: 'Arrival & Free Play', description: 'Welcome time with toys and books' },
    { time: '8:30 - 9:00 AM', activity: 'Circle Time', description: 'Songs, calendar, and sharing' },
    { time: '9:00 - 9:45 AM', activity: 'Language Arts', description: 'Phonics, stories, and writing practice' },
    { time: '9:45 - 10:00 AM', activity: 'Snack Time', description: 'Healthy snacks and social time' },
    { time: '10:00 - 10:45 AM', activity: 'Mathematics', description: 'Numbers, shapes, and problem solving' },
    { time: '10:45 - 11:30 AM', activity: 'Outdoor Play', description: 'Physical activities and fresh air' },
    { time: '11:30 - 12:15 PM', activity: 'Creative Arts', description: 'Art, music, and creative expression' },
    { time: '12:15 - 1:00 PM', activity: 'Lunch Time', description: 'Nutritious meal and social skills' },
    { time: '1:00 - 1:30 PM', activity: 'Rest Time', description: 'Quiet activities and relaxation' },
    { time: '1:30 - 2:15 PM', activity: 'Science & Discovery', description: 'Exploration and hands-on learning' },
    { time: '2:15 - 3:00 PM', activity: 'Story Time & Departure', description: 'Stories and preparation to go home' }
  ];

  const facilities = [
    {
      name: 'Colorful Classrooms',
      description: 'Bright, child-friendly spaces designed for young learners'
    },
    {
      name: 'Play Areas',
      description: 'Safe indoor and outdoor play spaces with age-appropriate equipment'
    },
    {
      name: 'Art Studio',
      description: 'Creative space for painting, crafts, and artistic expression'
    }
  ];

  return (
    <div className="pt-20 bg-gradient-to-br from-blue-50 via-white to-red-50 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-b-3xl shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight drop-shadow-lg">Kindergarten (Pre-KG to UKG)</h1>
          <p className="text-xl max-w-3xl mx-auto mb-2">The foundation of lifelong learning begins here. Our kindergarten program nurtures curiosity, creativity, and confidence in young learners through play-based learning and structured activities.</p>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-2 bg-gradient-to-r from-blue-200 via-white to-red-200 my-8 rounded-full" />

      {/* Program Features */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Star className="mx-auto mb-2 h-10 w-10 text-yellow-400" />
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Why Choose Our Kindergarten?</h2>
            <p className="text-xl text-gray-600">Creating the perfect foundation for lifelong learning</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-t-4 border-pink-200">
                <feature.icon className="h-14 w-14 text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-2 bg-gradient-to-r from-red-200 via-white to-blue-200 my-8 rounded-full" />

      {/* Subjects of Study */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BookOpen className="mx-auto mb-2 h-10 w-10 text-blue-400" />
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Subjects of Study</h2>
            <p className="text-xl text-gray-600">A joyful, holistic learning experience</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-t-4 border-blue-200">
              <p className="mb-4 font-bold text-blue-800 text-lg">Key Learning Areas:</p>
              <ul className="list-none space-y-2 mb-4">
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-600 mr-2" /> <span>Language Skills – Listening, Speaking, Reading, Writing & Viewing</span></li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-600 mr-2" /> <span>Numeracy – Numbers, Patterns, Shapes & Logical Reasoning</span></li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-600 mr-2" /> <span>Scientific Inquiry – Observation, Investigation & Problem-Solving</span></li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-600 mr-2" /> <span>Creative Expression – Art, Music, Dance & Drama</span></li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-600 mr-2" /> <span>Physical Education</span></li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-blue-600 mr-2" /> <span>General Awareness & Environmental Science</span></li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-t-4 border-pink-200">
              <p className="mb-4 font-bold text-pink-700 text-lg">Creative & Experiential Learning:</p>
              <ul className="list-disc list-inside space-y-2 text-left">
                <li>Story Telling, Recitation</li>
                <li>Drawing, Colouring, Craft</li>
                <li>Music, Dance, Drama</li>
                <li>Outdoor Play, Games</li>
                <li>Hands-on Activities</li>
                <li>Field Trips & Celebrations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-2 bg-gradient-to-r from-blue-200 via-white to-red-200 my-8 rounded-full" />

      {/* Daily Schedule */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Star className="mx-auto mb-2 h-10 w-10 text-yellow-400" />
            <h2 className="text-4xl font-bold text-gray-900 mb-2">A Day in Kindergarten</h2>
            <p className="text-xl text-gray-600">Balanced routine for joyful learning and growth</p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-2xl shadow-xl border-t-4 border-yellow-200">
              <thead>
                <tr>
                  <th className="py-3 px-4 text-left text-lg font-bold text-blue-700">Time</th>
                  <th className="py-3 px-4 text-left text-lg font-bold text-blue-700">Activity</th>
                  <th className="py-3 px-4 text-left text-lg font-bold text-blue-700">Description</th>
                </tr>
              </thead>
              <tbody>
                {dailySchedule.map((item, idx) => (
                  <tr key={idx} className="border-b last:border-b-0">
                    <td className="py-2 px-4 text-blue-900 font-semibold">{item.time}</td>
                    <td className="py-2 px-4 text-pink-700 font-semibold">{item.activity}</td>
                    <td className="py-2 px-4 text-gray-700">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-2 bg-gradient-to-r from-red-200 via-white to-blue-200 my-8 rounded-full" />

      {/* Facilities */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Award className="mx-auto mb-2 h-10 w-10 text-yellow-400" />
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Facilities</h2>
            <p className="text-xl text-gray-600">Safe, creative, and inspiring spaces for young learners</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center border-t-4 border-yellow-200">
                <Star className="h-10 w-10 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{facility.name}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-16 bg-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Admission Requirements</h2>
            <p className="text-xl">Simple steps to enroll your child in our kindergarten program</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Age Requirement',
                description: 'Children must be 4-5 years old by the start of the academic year'
              },
              {
                title: 'Application Form',
                description: 'Complete the kindergarten application with required documents'
              },
              {
                title: 'Interaction Session',
                description: 'Informal play-based interaction to understand your child'
              },
              {
                title: 'Parent Meeting',
                description: 'Discussion about your child\'s needs and our program'
              }
            ].map((requirement, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg hover:bg-opacity-20 transition-all duration-300">
                <h3 className="text-xl font-bold mb-3">{requirement.title}</h3>
                <p className="text-purple-100">{requirement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Start Your Child's Journey</h2>
          <p className="text-xl text-gray-600 mb-8">
            Give your child the best start in their educational journey with our nurturing kindergarten program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admissions/procedure"
              className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Apply Now
            </a>
            <a
              href="/about/virtual-tour"
              className="border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Visit Our Campus
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kindergarten;