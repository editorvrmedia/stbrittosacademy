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
          image: '/students activites page/ARU07726.jpg'
        },
        {
          name: 'Swimming',
          description: 'Swimming meets, training, and inter-school competitions',
          image: '/students activites page/swimming.jpg'
        },
        {
          name: 'Kho Kho',
          description: 'Kho Kho training, inter-house matches, and state-level competitions',
          image: '/students activites page/khokho.JPG'
        }
      ]
    },
    {
      category: 'Arts & Culture',
      icon: Palette,
      color: 'purple',
      items: [
        {
          name: 'Arts',
          description: 'Painting, sculpture, and digital art workshops',
          image: '/students activites page/ARTS.jpg'
        },
        {
          name: 'Music & Dance',
          description: 'Orchestra, choir, and traditional dance performances',
          image: '/students activites page/dance.png'
        }
      ]
    },
    {
      category: 'Clubs',
      icon: Microscope,
      color: 'blue',
      items: [
        {
          name: 'Sports Club',
          description: 'Team games, fitness activities, and inter-school sports events',
          image: '/students activites page/ARU07726.jpg'
        },
        {
          name: 'Photography Club',
          description: 'Workshops, photo walks, and student photography exhibitions',
          image: '/students activites page/photographyclub.jpg'
        }
      ]
    },
    {
      category: 'Community Service',
      icon: Heart,
      color: 'red',
      items: [
        {
          name: 'Cubs & Bulbuls',
          description: 'Character building, teamwork, and service for younger students',
          image: '/students activites page/cub&bulbuls.JPG'
        },
        {
          name: 'Scouts & Guides',
          description: 'Leadership, outdoor skills, and community service through scouting activities',
          image: '/students activites page/scouts&guides.JPG'
        },
        {
          name: 'Road Safety Patrol (RSP)',
          description: 'Promoting road safety awareness and discipline among students',
          image: '/students activites page/RSP.jpg'
        }
      ]
    }
  ];

  const upcomingEvents = [
    {
      date: '2025-07-25',
      title: 'Young Forum /Royal Gridlock (KG & Primary)',
      description: 'Young Forum event for Kindergarten and Primary students along with Royal Gridlock activities.',
      time: '09:00 AM - 03:00 PM',
      location: 'School Ground & Classrooms',
      image: '/BYC/RGL.png'
    },
    {
      date: '2025-07-26',
      title: 'Young Forum / Royal Gridlock (Middle, Secondary & Senior Secondary)',
      description: 'Young Forum event for Middle, Secondary and Senior Secondary students along with Royal Gridlock activities.',
      time: '09:00 AM - 03:00 PM',
      location: 'School Ground & Classrooms',
      image: '/BYC/RGL.png'
    },
    {
      date: '2025-08-23',
      title: 'Asset (Girls)',
      description: 'Asset assessment and competition for female students.',
      time: '09:00 AM - 12:00 PM',
      location: 'AM Jain Ground',
      image: '/BYC/Asset.png'
    },
    {
      date: '2025-08-30',
      title: 'Asset (Boys)',
      description: 'Asset assessment and competition for male students.',
      time: '09:00 AM - 12:00 PM',
      location: 'AM Jain Ground',
      image: '/BYC/Asset.png'
    },
    {
      date: '2025-10-25',
      title: 'Asset - Splash (Swimming Meet)',
      description: 'Asset swimming competition and meet for students.',
      time: '09:00 AM - 04:00 PM',
      location: 'School Swimming Pool',
      image: '/BYC/Splash.png'
    }
  ];

  const specialPrograms = [
    {
      title: '8 Quotients',
      description: 'Recognizing and nurturing the eight different types of intelligence in every student',
      icon: Brain,
      color: 'indigo',
      link: '/activities/8-quotients',
      features: ['Multiple Intelligence Theory', 'Personalized Learning', 'Talent Recognition', 'Holistic Development']
    },
    {
      title: 'Believe You Can event',
      description: 'Empowering students to believe in themselves and achieve their dreams',
      icon: Star,
      color: 'amber',
      link: '/activities/believe-you-can',
      features: ['Self-Confidence Building', 'Goal Setting', 'Resilience Training', 'Success Mindset']
    }
  ];

  // Format date as DD-MM-YYYY
  const formatDateDMY = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Student Activities</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Beyond academics, we offer a wide range of activities that develop creativity, leadership, teamwork, and character. Discover the opportunities that await your child.
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
              
              <div className="flex flex-wrap justify-center gap-8">
                {category.items.map((activity, index) => (
                  <div key={index} className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full max-w-xs">
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
              <div key={index} className="bg-emerald-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-32 object-contain mb-4 bg-white rounded"
                />
                <div className="text-sm text-emerald-600 font-semibold mb-1">{formatDateDMY(event.date)}</div>
                <div className="text-xs text-gray-500 mb-2">{event.location}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-3 flex-1">{event.description}</p>
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
              href="/admissions/procedure"
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