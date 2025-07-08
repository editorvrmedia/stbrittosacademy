import React from 'react';
import { Award, Heart, Target, Users, Mail, Phone, Check, X, BookOpen, Calendar, GraduationCap, Users2 } from 'lucide-react';
import ErrorBoundary from './ErrorBoundary';

const AboutUs = () => {
  const achievements = [
    {
      title: 'Academic Excellence',
      description: 'Consistently high board examination results with numerous state toppers',
      icon: Award
    },
    {
      title: 'Sports Champions',
      description: 'Multiple state and national level victories in various sports',
      icon: Award
    },
    {
      title: 'Cultural Events',
      description: 'Regular winners in inter-school cultural competitions',
      icon: Award
    }
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'Striving for the highest standards in everything we do',
      icon: Award
    },
    {
      title: 'Integrity',
      description: 'Maintaining honesty and strong moral principles',
      icon: Heart
    },
    {
      title: 'Innovation',
      description: 'Encouraging creativity and forward-thinking',
      icon: BookOpen
    },
    {
      title: 'Community',
      description: 'Building strong relationships and supporting each other',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-sky-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-900">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Our School
          </h1>
          <p className="text-xl text-sky-200 max-w-3xl mx-auto">
            Nurturing minds, building character, and creating leaders of tomorrow
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white flex justify-center items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img 
            src="/Best%20CBSE%20School%20in%20Chennai.JPG" 
            alt="Vision and Mission" 
            className="max-w-full h-auto rounded-lg shadow-lg"
              />
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-lg text-gray-600">Celebrating excellence in various fields</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <achievement.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-blue-700">The principles that guide our educational journey</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-sky-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{value.title}</h3>
                <p className="text-blue-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our History</h2>
            <p className="text-lg text-gray-600">A journey of excellence and growth</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <p className="text-lg text-gray-600 leading-relaxed">
              Established in 1997, our school has grown from a small institution to a 
              comprehensive educational center. Over the years, we have consistently 
              evolved our teaching methodologies, expanded our facilities, and enhanced 
              our curriculum to meet the changing needs of education. Our commitment to 
              excellence has helped us build a strong reputation in the educational 
              community.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default () => (
  <ErrorBoundary>
    <AboutUs />
  </ErrorBoundary>
);