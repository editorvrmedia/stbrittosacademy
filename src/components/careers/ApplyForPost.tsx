import React, { useState } from 'react';
import { Send, CheckCircle, User, Mail, Phone, Calendar, BookOpen, Briefcase, Upload } from 'lucide-react';
import { motion } from 'framer-motion';

const ApplyForPost = () => {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    qualification: '',
    yearsOfExperience: '',
    contactNumber: '',
    email: '',
    why: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [files, setFiles] = useState<{ resume: File | null }>({
    resume: null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    const file = e.target.files?.[0];
    if (file) {
      setFiles({
        ...files,
        [type]: file
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        dateOfBirth: '',
        qualification: '',
        yearsOfExperience: '',
        contactNumber: '',
        email: '',
        why: ''
      });
      setFiles({
        resume: null
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <motion.div
        className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="max-w-md mx-auto text-center bg-white p-8 rounded-xl shadow-lg">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Application Submitted!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your interest in joining St. Britto's Academy. We have received your application and will review it carefully.
          </p>
          <p className="text-sm text-gray-500">
            You will receive a confirmation email shortly, and we will contact you within 5-7 business days regarding the next steps.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <motion.section
        className="py-16 bg-gradient-to-r from-teal-700 to-teal-900 text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        viewport={{ once: true, amount: 0.7 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Apply for a Position</h1>
          <p className="text-xl max-w-3xl mx-auto">
            There are currently no open positions. You may still submit your application for future consideration.
          </p>
        </div>
      </motion.section>

      {/* Application Form */}
      <motion.section
        className="py-16 bg-gray-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true, amount: 0.7 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-teal-50 px-8 py-6 border-b">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Employment Application</h2>
              <p className="text-gray-600">Please fill out all required fields marked with an asterisk (*)</p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <User className="h-6 w-6 mr-3 text-teal-600" />
                  Applicant Details
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name of Applicant *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Enter your full name"
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      autoComplete="bday"
                    />
                  </div>
                  <div>
                    <label htmlFor="qualification" className="block text-sm font-medium text-gray-700 mb-2">
                      Qualification *
                    </label>
                    <input
                      type="text"
                      id="qualification"
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      placeholder="e.g., M.Sc., B.Ed."
                      autoComplete="organization-title"
                    />
                  </div>
                  <div>
                    <label htmlFor="yearsOfExperience" className="block text-sm font-medium text-gray-700 mb-2">
                      Years of Experience *
                    </label>
                    <input
                      type="number"
                      id="yearsOfExperience"
                      name="yearsOfExperience"
                      value={formData.yearsOfExperience}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      placeholder="e.g., 5"
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      id="contactNumber"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      placeholder="+91 98765 43210"
                      autoComplete="tel"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      placeholder="your.email@example.com"
                      autoComplete="email"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="why" className="block text-sm font-medium text-gray-700 mb-2">
                      Why do you want to join us? *
                    </label>
                    <textarea
                      id="why"
                      name="why"
                      value={formData.why}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Tell us why you want to join St. Britto's Academy and what makes you the ideal candidate..."
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Upload Resume/CV *
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-teal-500 transition-colors duration-300">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => handleFileChange(e, 'resume')}
                        className="hidden"
                        id="resume-upload"
                        required
                      />
                      <label htmlFor="resume-upload" className="cursor-pointer">
                        <span className="text-sm text-gray-600">
                          {files.resume ? files.resume.name : 'Click to upload resume'}
                        </span>
                        <p className="text-xs text-gray-400 mt-1">PDF, DOC, DOCX (Max 5MB)</p>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="mt-1 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                  />
                  <label htmlFor="terms" className="ml-3 text-sm text-gray-700">
                    I hereby declare that the information provided above is true and complete to the best of my knowledge. 
                    I understand that any false information may lead to rejection of my application or termination of employment. 
                    I consent to the processing of my personal data for recruitment purposes.
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-teal-600 hover:bg-teal-700 text-white px-12 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 flex items-center mx-auto"
                >
                  <Send className="mr-3 h-5 w-5" />
                  Submit Application
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  By submitting this application, you agree to our privacy policy and terms of service.
                </p>
              </div>
            </form>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ApplyForPost;