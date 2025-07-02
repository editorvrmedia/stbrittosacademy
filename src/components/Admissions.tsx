import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, FileText, Phone, Mail, CheckCircle, Calendar, Users, DollarSign, ArrowRight } from 'lucide-react';

const Admissions = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    email: '',
    phone: '',
    grade: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
    setFormData({
      parentName: '',
      studentName: '',
      email: '',
      phone: '',
      grade: '',
      message: ''
    });
  };

  const admissionSteps = [
    {
      step: 1,
      title: 'Submit Application',
      description: 'Complete and submit the online application form or download the PDF version.',
      icon: FileText
    },
    {
      step: 2,
      title: 'Schedule Visit',
      description: 'Tour our campus and meet with our admissions team to learn more about our programs.',
      icon: Calendar
    },
    {
      step: 3,
      title: 'Assessment',
      description: 'Student assessment and interview to determine the best fit for their academic needs.',
      icon: Users
    },
    {
      step: 4,
      title: 'Enrollment',
      description: 'Complete enrollment paperwork and prepare for the upcoming academic year.',
      icon: CheckCircle
    }
  ];

  const requirements = [
    'Completed application form',
    'Birth certificate or passport',
    'Previous school transcripts',
    'Immunization records',
    'Two passport-sized photographs',
    'Parent/guardian identification',
    'Proof of residence',
    'Application fee payment'
  ];

  const faqs = [
    {
      question: 'What is the application deadline?',
      answer: 'Applications are accepted year-round, but we recommend applying by March 1st for the following academic year to ensure placement.'
    },
    {
      question: 'Is there an entrance exam?',
      answer: 'We conduct age-appropriate assessments to better understand each student\'s academic level and learning needs, not to exclude students.'
    },
    {
      question: 'Do you offer financial aid?',
      answer: 'Yes, we offer need-based financial assistance and merit scholarships. Please contact our admissions office for more information.'
    },
    {
      question: 'Can we schedule a campus tour?',
      answer: 'Absolutely! We encourage families to visit our campus. Tours are available Monday through Friday by appointment.'
    },
    {
      question: 'What is the student-teacher ratio?',
      answer: 'We maintain small class sizes with an average student-teacher ratio of 15:1 to ensure personalized attention.'
    },
    {
      question: 'Do you accept mid-year transfers?',
      answer: 'Yes, we accept transfer students throughout the year based on availability and the student\'s academic needs.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Admissions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join the St. Britto's Academy family. Discover our admission process, requirements, and how to begin your child's educational journey with us.
          </p>
          
          {/* Quick Links to Subpages */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              to="/admissions/procedure"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center"
            >
              Admission Procedure
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="/admissions/code-of-conduct"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center"
            >
              Code of Conduct
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Admission Process</h2>
            <p className="text-xl text-gray-600">Simple steps to join our community</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="h-10 w-10 text-purple-700" />
                </div>
                <div className="bg-purple-700 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/admissions/procedure"
              className="inline-flex items-center bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              View Detailed Procedure
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Requirements & Forms */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Required Documents</h2>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <ul className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                      <span className="text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Download Forms</h2>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-lg flex items-center justify-between hover:shadow-xl transition-shadow duration-300">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Application Form</h3>
                    <p className="text-gray-600">Complete admission application</p>
                  </div>
                  <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg flex items-center transition-colors duration-300">
                    <Download className="h-5 w-5 mr-2" />
                    Download
                  </button>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg flex items-center justify-between hover:shadow-xl transition-shadow duration-300">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Student Information Form</h3>
                    <p className="text-gray-600">Detailed student profile</p>
                  </div>
                  <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg flex items-center transition-colors duration-300">
                    <Download className="h-5 w-5 mr-2" />
                    Download
                  </button>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg flex items-center justify-between hover:shadow-xl transition-shadow duration-300">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Health Records Form</h3>
                    <p className="text-gray-600">Medical history and immunizations</p>
                  </div>
                  <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg flex items-center transition-colors duration-300">
                    <Download className="h-5 w-5 mr-2" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Request Information</h2>
            <p className="text-xl text-gray-600">Get in touch with our admissions team</p>
          </div>
          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-2">
                  Parent/Guardian Name *
                </label>
                <input
                  type="text"
                  id="parentName"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleInputChange}
                  required
                  autoComplete="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-2">
                  Student Name *
                </label>
                <input
                  type="text"
                  id="studentName"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleInputChange}
                  required
                  autoComplete="given-name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  autoComplete="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  autoComplete="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-2">
                Grade Level Applying For *
              </label>
              <select
                id="grade"
                name="grade"
                value={formData.grade}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="">Select Grade</option>
                <option value="kindergarten">Kindergarten</option>
                <option value="1st">1st Grade</option>
                <option value="2nd">2nd Grade</option>
                <option value="3rd">3rd Grade</option>
                <option value="4th">4th Grade</option>
                <option value="5th">5th Grade</option>
                <option value="6th">6th Grade</option>
                <option value="7th">7th Grade</option>
                <option value="8th">8th Grade</option>
                <option value="9th">9th Grade</option>
                <option value="10th">10th Grade</option>
                <option value="11th">11th Grade</option>
                <option value="12th">12th Grade</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Additional Questions or Comments
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="Tell us about your child's interests, special needs, or any other information you'd like us to know..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-700 hover:bg-purple-800 text-white py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common admission questions</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Admissions Contact</h2>
            <p className="text-xl">We're here to help with your admission questions</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Phone className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-lg">(044) 123-4567</p>
              <p className="text-sm opacity-80">Monday - Friday, 8:00 AM - 5:00 PM</p>
            </div>
            <div>
              <Mail className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-lg">admissions@stbrittosacademy.edu</p>
              <p className="text-sm opacity-80">We respond within 24 hours</p>
            </div>
            <div>
              <Calendar className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Campus Tours</h3>
              <p className="text-lg">Schedule a Visit</p>
              <p className="text-sm opacity-80">Monday - Friday by appointment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Resources</h2>
            <p className="text-xl text-gray-600">Learn more about our admissions process</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              to="/admissions/procedure"
              className="bg-purple-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FileText className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                Detailed Admission Procedure
              </h3>
              <p className="text-gray-600 mb-4">
                Step-by-step guide to our comprehensive admission process
              </p>
              <div className="flex items-center text-purple-700 font-semibold">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
            
            <Link
              to="/admissions/code-of-conduct"
              className="bg-purple-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                Code of Conduct
              </h3>
              <p className="text-gray-600 mb-4">
                Our expectations for student behavior and community standards
              </p>
              <div className="flex items-center text-purple-700 font-semibold">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
            
            <Link
              to="/about/virtual-tour"
              className="bg-purple-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                Virtual Campus Tour
              </h3>
              <p className="text-gray-600 mb-4">
                Explore our facilities and campus from the comfort of your home
              </p>
              <div className="flex items-center text-purple-700 font-semibold">
                Take the Tour
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;