import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, Users, GraduationCap, Heart, Send, ArrowRight } from 'lucide-react';

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', name: 'All Positions' },
    { id: 'teaching', name: 'Teaching' },
    { id: 'administration', name: 'Administration' },
    { id: 'support', name: 'Support Staff' },
    { id: 'technology', name: 'Technology' }
  ];

  const openPositions = [
    {
      id: 1,
      title: 'Mathematics Teacher',
      department: 'teaching',
      location: 'Chennai',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'We are seeking a passionate Mathematics teacher for grades 9-12 with strong subject knowledge and innovative teaching methods.',
      requirements: [
        'Master\'s degree in Mathematics or related field',
        'B.Ed qualification required',
        'Minimum 3 years teaching experience',
        'Excellent communication skills',
        'Proficiency in digital teaching tools'
      ],
      posted: '2024-01-15'
    },
    {
      id: 2,
      title: 'Science Laboratory Assistant',
      department: 'support',
      location: 'Chennai',
      type: 'Full-time',
      experience: '2-3 years',
      description: 'Support science teachers in laboratory activities and maintain laboratory equipment and safety protocols.',
      requirements: [
        'Bachelor\'s degree in Science',
        'Laboratory experience preferred',
        'Knowledge of safety protocols',
        'Organizational skills',
        'Ability to work with students'
      ],
      posted: '2024-01-12'
    },
    {
      id: 3,
      title: 'IT Support Specialist',
      department: 'technology',
      location: 'Chennai',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Manage school IT infrastructure, provide technical support, and assist with digital learning initiatives.',
      requirements: [
        'Bachelor\'s degree in Computer Science or IT',
        'Network administration experience',
        'Hardware troubleshooting skills',
        'Experience with educational technology',
        'Strong problem-solving abilities'
      ],
      posted: '2024-01-10'
    },
    {
      id: 4,
      title: 'Admissions Counselor',
      department: 'administration',
      location: 'Chennai',
      type: 'Full-time',
      experience: '1-3 years',
      description: 'Guide prospective families through the admission process and represent the school at various events.',
      requirements: [
        'Bachelor\'s degree in any field',
        'Excellent communication skills',
        'Customer service experience',
        'Organizational abilities',
        'Passion for education'
      ],
      posted: '2024-01-08'
    },
    {
      id: 5,
      title: 'English Teacher',
      department: 'teaching',
      location: 'Chennai',
      type: 'Full-time',
      experience: '4-6 years',
      description: 'Teach English Language and Literature to middle and high school students with focus on creative writing and critical thinking.',
      requirements: [
        'Master\'s degree in English Literature',
        'B.Ed qualification required',
        'Minimum 4 years teaching experience',
        'Creative teaching methodologies',
        'Experience with curriculum development'
      ],
      posted: '2024-01-05'
    },
    {
      id: 6,
      title: 'School Counselor',
      department: 'support',
      location: 'Chennai',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Provide academic and personal counseling to students, support their emotional well-being and career guidance.',
      requirements: [
        'Master\'s degree in Psychology or Counseling',
        'Licensed counselor preferred',
        'Experience working with adolescents',
        'Strong interpersonal skills',
        'Crisis intervention training'
      ],
      posted: '2024-01-03'
    }
  ];

  const benefits = [
    {
      icon: GraduationCap,
      title: 'Professional Development',
      description: 'Continuous learning opportunities and skill enhancement programs'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs'
    },
    {
      icon: Users,
      title: 'Collaborative Environment',
      description: 'Work with passionate educators in a supportive team environment'
    },
    {
      icon: Briefcase,
      title: 'Career Growth',
      description: 'Clear career progression paths and leadership opportunities'
    }
  ];

  const filteredPositions = selectedDepartment === 'all' 
    ? openPositions 
    : openPositions.filter(position => position.department === selectedDepartment);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-teal-700 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Be part of an educational community that values excellence, innovation, and the development of young minds. 
            Discover rewarding career opportunities at St. Britto's Academy.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose St. Britto's Academy?</h2>
            <p className="text-xl text-gray-600">Join a community dedicated to educational excellence</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-teal-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <benefit.icon className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {departments.map((department) => (
              <button
                key={department.id}
                onClick={() => setSelectedDepartment(department.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedDepartment === department.id
                    ? 'bg-teal-600 text-white'
                    : 'bg-teal-100 text-teal-700 hover:bg-teal-200'
                }`}
              >
                {department.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600">Explore current opportunities to join our team</p>
          </div>
          
          <div className="space-y-6">
            {filteredPositions.map((position) => (
              <div key={position.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <h3 className="text-2xl font-bold text-gray-900 mr-4">{position.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        position.department === 'teaching' ? 'bg-blue-100 text-blue-800' :
                        position.department === 'administration' ? 'bg-purple-100 text-purple-800' :
                        position.department === 'support' ? 'bg-green-100 text-green-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {departments.find(dept => dept.id === position.department)?.name}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-1" />
                        <span>{position.experience}</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        Posted: {formatDate(position.posted)}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{position.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {position.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="lg:ml-6">
                    <Link
                      to="/careers/apply"
                      className="w-full lg:w-auto bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center justify-center"
                    >
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Apply CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Apply?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Don't see the perfect position? Submit your application anyway! We're always looking for talented individuals to join our team.
          </p>
          <Link
            to="/careers/apply"
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 inline-flex items-center"
          >
            <Send className="mr-3 h-5 w-5" />
            Submit General Application
          </Link>
        </div>
      </section>

      {/* Contact HR */}
      <section className="py-16 bg-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Have Questions?</h2>
          <p className="text-xl mb-8">
            Our HR team is here to help you with any questions about career opportunities at St. Britto's Academy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:careers@stbrittosacademy.edu"
              className="bg-white text-teal-700 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Email HR Team
            </a>
            <a
              href="tel:+91-44-1234-5678"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;