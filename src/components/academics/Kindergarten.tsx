import React from 'react';
import { Heart, Palette, Music, Users, Star, BookOpen, Play, Smile } from 'lucide-react';

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
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Kindergarten Program
          </h1>
          <p className="text-xl text-pink-100 max-w-3xl mx-auto mb-8">
            A magical beginning to your child's educational journey. Our kindergarten program provides a nurturing environment where young minds explore, discover, and grow through play-based learning.
          </p>
          {/* Images in the header section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
                <img
                  src={image}
                  alt={`Kindergarten Moment ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Kindergarten?</h2>
            <p className="text-xl text-gray-600">Creating the perfect foundation for lifelong learning</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-pink-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <feature.icon className="h-12 w-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Content: SUBJECTS OF STUDY */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            SUBJECTS OF STUDY
          </h1>
          <p className="text-xl text-gray-700 mb-8 text-center">
            Kindergarten at <span className="font-revue">St. Britto's Academy</span> – A Joyful Learning Experience
          </p>

          <div className="text-lg text-gray-700 leading-relaxed mb-8">
            <p className="mb-4">
              At <span className="font-revue">St. Britto's Academy</span>, our Kindergarten programme (Pre-KG, LKG & UKG) follows the internationally accredited FEFDY Curriculum (IAO & CIAA), fostering holistic early childhood development.
            </p>
            <p className="mb-4">
              Through a play-way and activity-oriented approach, we nurture literacy, numeracy, sensory exploration, scientific thinking, and creative expression. Our engaging curriculum enhances:
            </p>
            <ul className="list-none space-y-2 mb-4">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✔</span>
                <span>Language Skills – Listening, Speaking, Reading, Writing & Viewing</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✔</span>
                <span>Numeracy – Numbers, Patterns, Shapes & Logical Reasoning</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✔</span>
                <span>Scientific Inquiry – Observation, Investigation & Problem-Solving</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✔</span>
                <span>Creative Expression – Art, Music, Dance & Drama</span>
                    </li>
            </ul>
            <p className="mb-8">
              Our experiential learning methods focus on developing fine motor skills, hand-eye coordination, self-awareness, confidence, and a love for learning, making education a joyful and enriching journey.
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>English Reading and Conversation</li>
              <li>English Writing</li>
              <li>English Dictation</li>
              <li>Number work</li>
              <li>Environmental Science (EVS )-UKG</li>
              <li>General Awareness-LKG</li>
              <li>Story Telling</li>
              <li>Recitation</li>
              <li>Physical Education</li>
              <li>Language-Tamil ( Compulsory for LKG )</li>
              <li>Hindi and Tamil (Compulsory for UKG )</li>
              <li>Drawing and Colouring</li>
              <li>Music</li>
              <li>Craft</li>
                </ul>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">A Day in Kindergarten</h2>
            <p className="text-xl text-gray-600">Structured yet flexible schedule that balances learning and play</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {dailySchedule.map((item, index) => (
                <div key={index} className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="md:w-1/4 mb-2 md:mb-0">
                      <span className="text-lg font-bold text-purple-700">{item.time}</span>
                    </div>
                    <div className="md:w-1/3 mb-2 md:mb-0">
                      <h4 className="text-xl font-semibold text-gray-900">{item.activity}</h4>
                    </div>
                    <div className="md:w-5/12">
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Child-Friendly Facilities</h2>
            <p className="text-xl text-gray-600">Specially designed spaces for young learners</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{facility.name}</h3>
                  <p className="text-gray-600">{facility.description}</p>
                </div>
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
              href="/admissions"
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