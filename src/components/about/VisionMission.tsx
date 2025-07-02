import React from 'react';
import { Eye, Target, Heart, Star, Users, BookOpen, Award, Globe } from 'lucide-react';

const VisionMission = () => {
  const coreValues = [
    {
      icon: Heart,
      title: 'Honesty',
      description: 'We uphold the highest standards of honesty, ethics, and moral principles in all our actions and decisions.'
    },
    {
      icon: Target,
      title: 'Commitment',
      description: 'We are dedicated to excellence in education, character development, and all aspects of school life.'
    },
    {
      icon: Star,
      title: 'Prosperity',
      description: 'We foster growth, success, and well-being for our students, faculty, and the broader community.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We foster a supportive, inclusive community where every individual is valued and respected.'
    },
    {
      icon: BookOpen,
      title: 'Learning',
      description: 'We promote lifelong learning, curiosity, and the pursuit of knowledge in all its forms.'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'We embrace innovative teaching methods and technologies to enhance the learning experience.'
    }
  ];

  return (
    <div className="pt-20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        .revue-font {
          font-family: 'Playfair Display', serif;
        }
        
        .inter-font {
          font-family: 'Inter', sans-serif;
        }
      `}</style>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 inter-font">Vision & Mission</h1>
          <p className="text-xl max-w-3xl mx-auto inter-font">
            Our vision and mission guide every aspect of our educational journey, shaping the future leaders of tomorrow through excellence, integrity, and innovation.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Eye className="h-12 w-12 text-purple-700 mr-4" />
                <h2 className="text-4xl font-bold text-gray-900 inter-font">Our Vision</h2>
              </div>
              <div className="bg-purple-50 p-8 rounded-xl border-l-4 border-purple-700">
                <p className="text-xl text-gray-800 leading-relaxed italic inter-font">
                  "To form and evolve a vibrant scientific and educational community that is creative, adaptable, 
                  and internationally renowned for excellence in education and research, and for improving society 
                  through its innovative educational strategies."
                </p>
              </div>
            </div>
            <div>
              <img
                src="/Best%20CBSE%20School%20in%20Chennai.JPG"
                alt="Vision and Mission"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/8471904/pexels-photo-8471904.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Students studying"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <Target className="h-12 w-12 text-purple-700 mr-4" />
                <h2 className="text-4xl font-bold text-gray-900 inter-font">Our Mission</h2>
              </div>
              <div className="bg-purple-50 p-8 rounded-xl border-l-4 border-purple-700">
                <p className="text-xl text-gray-800 leading-relaxed italic inter-font">
                  "Advancing the frontiers of knowledge, blending theory with practice. Motivating and enabling 
                  students to seek the highest levels of intellectual achievements and personal growth, to become 
                  complete human beings. Sharing knowledge, discoveries and inventions for the betterment of the world at large."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Motto Section */}
      <section className="py-16 bg-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-6 inter-font">Our Motto</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white bg-opacity-10 p-8 rounded-xl border border-white border-opacity-20">
                <h3 className="text-3xl font-bold mb-6 inter-font">"Honesty, Commitment, and Prosperity"</h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  These guiding principles serve as the foundation at <span className="revue-font">St. Britto's Academy</span>, shaping students into 
                  compassionate leaders, innovative thinkers, and responsible global citizens ready to make a positive impact on the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 inter-font">Our Core Values</h2>
            <p className="text-xl text-gray-600 inter-font">The foundational principles guiding our educational philosophy</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 inter-font">{value.title}</h3>
                <p className="text-gray-600 inter-font">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionMission;