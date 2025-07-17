import React from 'react';
import { Calendar, BookOpen, Trophy, Users, Star, ArrowRight } from 'lucide-react';
import ErrorBoundary from './ErrorBoundary';
import AnimatedHeading from './animated/AnimatedHeading';

const Academics = () => {
  const programs = [
    {
      title: 'Elementary Program',
      grades: 'Grades K-5',
      description: 'Building strong foundations in core subjects with emphasis on creativity and critical thinking.',
      highlights: ['Small class sizes', 'Play-based learning', 'Individual attention', 'Character development']
    },
    {
      title: 'Middle School Program',
      grades: 'Grades 6-8',
      description: 'Preparing students for high school with advanced coursework and leadership opportunities.',
      highlights: ['Advanced STEM courses', 'Leadership programs', 'Extracurricular activities', 'College preparation']
    },
    {
      title: 'High School Program',
      grades: 'Grades 9-12',
      description: 'Comprehensive preparation for college and career success with AP courses and dual enrollment.',
      highlights: ['AP courses', 'Dual enrollment', 'Career counseling', 'College partnerships']
    }
  ];

  const subjects = [
    { name: 'Mathematics', icon: '📊' },
    { name: 'Science', icon: '🔬' },
    { name: 'English Language Arts', icon: '📚' },
    { name: 'Social Studies', icon: '🌍' },
    { name: 'World Languages', icon: '🗣️' },
    { name: 'Fine Arts', icon: '🎨' },
    { name: 'Physical Education', icon: '⚽' },
    { name: 'Technology', icon: '💻' }
  ];

  const successStories = [
    {
      name: 'Sarah Martinez',
      achievement: 'Harvard University Scholarship Recipient',
      story: 'Graduated valedictorian and received full scholarship to Harvard for Engineering.',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'James Wilson',
      achievement: 'National Science Fair Winner',
      story: 'Won first place in National Science Fair for his renewable energy project.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Maria Garcia',
      achievement: 'International Art Competition Winner',
      story: 'Received international recognition for her digital art portfolio.',
      image: 'https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    }
  ];

  const events = [
    { date: 'Dec 15', event: 'Winter Break Begins', type: 'holiday' },
    { date: 'Jan 8', event: 'Spring Semester Starts', type: 'academic' },
    { date: 'Jan 20', event: 'Parent-Teacher Conferences', type: 'parent' },
    { date: 'Feb 14', event: 'Science Fair', type: 'event' },
    { date: 'Mar 15', event: 'Spring Break', type: 'holiday' },
    { date: 'Apr 10', event: 'State Testing Begins', type: 'academic' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedHeading as="h1" className="text-5xl font-bold mb-6">Academic Excellence</AnimatedHeading>
          <p className="text-xl max-w-3xl mx-auto">
            Our comprehensive curriculum is designed to challenge every student and prepare them for success in college, career, and life.
          </p>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <AnimatedHeading as="h2" className="text-4xl font-bold text-blue-900 mb-4">Our Academic Programs</AnimatedHeading>
            <p className="text-xl text-blue-700">Tailored education for every stage of development</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-sky-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">{program.title}</h3>
                <p className="text-blue-700 font-semibold mb-4">{program.grades}</p>
                <p className="text-blue-800 mb-6">{program.description}</p>
                <ul className="space-y-2">
                  {program.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center text-blue-700">
                      <Star className="h-4 w-4 text-blue-600 mr-2" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Curriculum</h2>
            <p className="text-xl text-gray-600">Well-rounded education across all subject areas</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjects.map((subject, index) => (
              <div key={index} className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{subject.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">{subject.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
            <p className="text-xl text-gray-600">Our graduates achieve remarkable things</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{story.name}</h3>
                  <p className="text-green-700 font-semibold mb-3">{story.achievement}</p>
                  <p className="text-gray-600">{story.story}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Academic Calendar</h2>
            <p className="text-xl">Important dates and events</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((item, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg hover:bg-opacity-20 transition-all duration-300">
                <div className="flex items-center mb-3">
                  <Calendar className="h-6 w-6 mr-3" />
                  <span className="font-bold text-lg">{item.date}</span>
                </div>
                <h3 className="font-semibold mb-2">{item.event}</h3>
                <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                  item.type === 'holiday' ? 'bg-red-500' :
                  item.type === 'academic' ? 'bg-sky-500' :
                  item.type === 'parent' ? 'bg-purple-500' : 'bg-amber-500'
                }`}>
                  {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Join Our Academic Community?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Discover how our rigorous academic programs can help your child reach their full potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admissions/procedure"
              className="inline-flex items-center justify-center bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Schedule a Visit
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default () => (
  <ErrorBoundary>
    <Academics />
  </ErrorBoundary>
);