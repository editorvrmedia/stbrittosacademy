import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Palette, Trophy, Users, Camera, Microscope, Globe, Heart, Brain, Star, ArrowRight } from 'lucide-react';

const Activities = () => {
  const activities = [
    {
      category: 'Sports & Athletics',
      icon: Trophy,
      color: 'green',
      items: [
        {
          name: 'Football',
          description: 'Inter-school competitions and district championships',
          image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
        },
        {
          name: 'Basketball',
          description: 'State-level tournaments and skill development',
          image: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
        },
        {
          name: 'Athletics',
          description: 'Track and field events, marathons, and fitness programs',
          image: 'https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
        }
      ]
    },
    {
      category: 'Arts & Culture',
      icon: Palette,
      color: 'purple',
      items: [
        {
          name: 'Visual Arts',
          description: 'Painting, sculpture, and digital art workshops',
          image: 'https://images.pexels.com/photos/1784578/pexels-photo-1784578.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
        },
        {
          name: 'Music & Dance',
          description: 'Orchestra, choir, and traditional dance performances',
          image: 'https://images.pexels.com/photos/7520391/pexels-photo-7520391.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
        },
        {
          name: 'Drama & Theatre',
          description: 'Annual plays, storytelling, and public speaking',
          image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
        }
      ]
    },
    {
      category: 'Academic Clubs',
      icon: Microscope,
      color: 'blue',
      items: [
        {
          name: 'Science Club',
          description: 'Research projects, science fairs, and laboratory experiments',
          image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
        },
        {
          name: 'Mathematics Olympiad',
          description: 'Problem-solving competitions and mathematical research',
          image: 'https://images.pexels.com/photos/6238003/pexels-photo-6238003.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
        },
        {
          name: 'Debate Society',
          description: 'Public speaking, debates, and model UN conferences',
          image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
        }
      ]
    },
    {
      category: 'Community Service',
      icon: Heart,
      color: 'red',
      items: [
        {
          name: 'Environmental Club',
          description: 'Tree plantation, waste management, and sustainability projects',
          image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
        },
        {
          name: 'Social Service',
          description: 'Community outreach, elderly care, and charity drives',
          image: 'https://images.pexels.com/photos/6646919/pexels-photo-6646919.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
        },
        {
          name: 'Health Awareness',
          description: 'Health camps, awareness programs, and first aid training',
          image: 'https://images.pexels.com/photos/6647019/pexels-photo-6647019.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
        }
      ]
    }
  ];

  const upcomingEvents = [
    {
      date: '2024-02-20',
      title: 'Annual Sports Day',
      description: 'Inter-house competitions and athletic events',
      category: 'Sports'
    },
    {
      date: '2024-02-25',
      title: 'Cultural Festival',
      description: 'Music, dance, and drama performances',
      category: 'Arts'
    },
    {
      date: '2024-03-05',
      title: 'Science Exhibition',
      description: 'Student research projects and innovations',
      category: 'Academic'
    },
    {
      date: '2024-03-12',
      title: 'Community Service Week',
      description: 'Environmental and social service activities',
      category: 'Service'
    }
  ];

  const specialPrograms = [
    {
      title: '8 Quotients Program',
      description: 'Recognizing and nurturing the eight different types of intelligence in every student',
      icon: Brain,
      color: 'indigo',
      link: '/activities/8-quotients',
      features: ['Multiple Intelligence Theory', 'Personalized Learning', 'Talent Recognition', 'Holistic Development']
    },
    {
      title: 'Believe You Can Program',
      description: 'Empowering students to believe in themselves and achieve their dreams',
      icon: Star,
      color: 'amber',
      link: '/activities/believe-you-can',
      features: ['Self-Confidence Building', 'Goal Setting', 'Resilience Training', 'Success Mindset']
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-700 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Activities & Programs</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover a world of opportunities beyond the classroom. Our diverse range of activities 
            helps students develop their talents, build character, and create lasting friendships.
          </p>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Signature Programs</h2>
            <p className="text-xl text-gray-600">Innovative programs designed to unlock every student's potential</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {specialPrograms.map((program, index) => (
              <div key={index} className={`bg-${program.color}-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300`}>
                <div className="flex items-center mb-6">
                  <program.icon className={`h-12 w-12 text-${program.color}-600 mr-4`} />
                  <h3 className="text-2xl font-bold text-gray-900">{program.title}</h3>
                </div>
                <p className="text-gray-700 mb-6">{program.description}</p>
                
                <div className="grid md:grid-cols-2 gap-3 mb-6">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <Star className={`h-4 w-4 text-${program.color}-600 mr-2`} />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  to={program.link}
                  className={`inline-flex items-center bg-${program.color}-600 hover:bg-${program.color}-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300`}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities by Category */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Activity Categories</h2>
            <p className="text-xl text-gray-600">Explore our wide range of extracurricular activities</p>
          </div>
          
          {activities.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="text-center mb-12">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-${category.color}-100 rounded-full mb-4`}>
                  <category.icon className={`h-8 w-8 text-${category.color}-600`} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{category.category}</h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {category.items.map((activity, index) => (
                  <div key={index} className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <img
                      src={activity.image}
                      alt={activity.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{activity.name}</h4>
                      <p className="text-gray-600">{activity.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Activity Events</h2>
            <p className="text-xl text-gray-600">Don't miss these exciting upcoming activities</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-emerald-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-sm text-emerald-600 font-semibold mb-2">{event.date}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{event.description}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                  event.category === 'Sports' ? 'bg-green-100 text-green-800' :
                  event.category === 'Arts' ? 'bg-purple-100 text-purple-800' :
                  event.category === 'Academic' ? 'bg-blue-100 text-blue-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {event.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Activities CTA */}
      <section className="py-16 bg-emerald-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Involved?</h2>
          <p className="text-xl mb-8">
            Join our vibrant community of learners and discover your passion through our diverse activities and innovative programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admissions"
              className="bg-white text-emerald-700 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Apply Now
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-emerald-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;