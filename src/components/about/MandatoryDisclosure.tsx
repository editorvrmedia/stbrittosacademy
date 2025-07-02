import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, Eye, Calendar, Shield, Users, Building, BookOpen, ArrowRight } from 'lucide-react';

const MandatoryDisclosure = () => {
  const disclosureCategories = [
    {
      title: 'General Information',
      icon: FileText,
      documents: [
        { name: 'School Registration Certificate', size: '2.3 MB', date: '2023-04-15' },
        { name: 'CBSE Affiliation Certificate', size: '1.8 MB', date: '2023-03-20' },
        { name: 'No Objection Certificate', size: '1.2 MB', date: '2023-02-10' },
        { name: 'Building Safety Certificate', size: '3.1 MB', date: '2023-01-25' }
      ]
    },
    {
      title: 'Academic Information',
      icon: Users,
      documents: [
        { name: 'Faculty Qualification Details', size: '4.2 MB', date: '2023-06-01' },
        { name: 'Curriculum Framework', size: '2.8 MB', date: '2023-05-15' },
        { name: 'Academic Calendar 2023-24', size: '1.5 MB', date: '2023-04-01' },
        { name: 'Assessment Policy', size: '2.1 MB', date: '2023-03-10' }
      ]
    },
    {
      title: 'Financial Information',
      icon: Shield,
      documents: [
        { name: 'Fee Structure 2023-24', size: '1.9 MB', date: '2023-04-01' },
        { name: 'Audited Financial Statements', size: '5.2 MB', date: '2023-03-31' },
        { name: 'Income & Expenditure Statement', size: '3.4 MB', date: '2023-03-31' },
        { name: 'Balance Sheet', size: '2.7 MB', date: '2023-03-31' }
      ]
    },
    {
      title: 'Infrastructure & Safety',
      icon: Calendar,
      documents: [
        { name: 'Infrastructure Details', size: '6.8 MB', date: '2023-05-20' },
        { name: 'Fire Safety Certificate', size: '2.2 MB', date: '2023-04-15' },
        { name: 'Health & Safety Policy', size: '1.7 MB', date: '2023-03-01' },
        { name: 'Transport Safety Guidelines', size: '1.4 MB', date: '2023-02-15' }
      ]
    }
  ];

  const complianceInfo = [
    {
      title: 'CBSE Compliance',
      description: 'All mandatory disclosures as per CBSE guidelines and regulations',
      status: 'Updated'
    },
    {
      title: 'Government Regulations',
      description: 'Compliance with state and central government educational policies',
      status: 'Current'
    },
    {
      title: 'Safety Standards',
      description: 'Adherence to safety and security standards for educational institutions',
      status: 'Certified'
    },
    {
      title: 'Financial Transparency',
      description: 'Regular audits and transparent financial reporting',
      status: 'Verified'
    }
  ];

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
      <section className="py-16 bg-gradient-to-r from-red-700 to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Mandatory Disclosure</h1>
          <p className="text-xl max-w-3xl mx-auto">
            In compliance with CBSE guidelines and government regulations, we provide transparent access to all mandatory information about our institution, policies, and operations.
          </p>
        </div>
      </section>

      {/* Quick Links to Subpages */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/about/mandatory-disclosure/school-details"
              className="bg-red-50 hover:bg-red-100 text-red-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center"
            >
              <Building className="h-5 w-5 mr-2" />
              School Details
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="/about/mandatory-disclosure/cbse-mandatory"
              className="bg-red-50 hover:bg-red-100 text-red-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center"
            >
              <FileText className="h-5 w-5 mr-2" />
              CBSE Mandatory Disclosure
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Compliance Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Compliance Overview</h2>
            <p className="text-xl text-blue-700">Our commitment to transparency and regulatory compliance</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceInfo.map((info, index) => (
              <div key={index} className="bg-sky-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{info.title}</h3>
                <p className="text-blue-700 mb-4">{info.description}</p>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                  {info.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Categories */}
      {disclosureCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-16 ${categoryIndex % 2 === 0 ? 'bg-sky-50' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 rounded-full mb-4">
                <category.icon className="h-8 w-8 text-blue-700" />
              </div>
              <h2 className="text-4xl font-bold text-blue-900 mb-4">{category.title}</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.documents.map((document, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <FileText className="h-8 w-8 text-blue-700 mr-3" />
                    <div className="flex-1">
                      <h3 className="font-bold text-blue-900 text-sm">{document.name}</h3>
                      <p className="text-blue-600 text-xs">{document.size} • {formatDate(document.date)}</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-blue-700 hover:bg-blue-800 text-white px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-300 flex items-center justify-center">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </button>
                    <button className="bg-sky-100 hover:bg-sky-200 text-blue-700 px-3 py-2 rounded-lg transition-colors duration-300">
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Legal Information */}
      <section className="py-16 bg-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Legal & Regulatory Information</h2>
            <p className="text-xl">Key legal documents and regulatory compliance details</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'School Registration',
                details: 'Registration No: SBA/2023/001',
                authority: 'Department of Education, Tamil Nadu'
              },
              {
                title: 'CBSE Affiliation',
                details: 'Affiliation No: 1930001',
                authority: 'Central Board of Secondary Education'
              },
              {
                title: 'Trust Registration',
                details: 'Trust Reg No: TN/2023/0012345',
                authority: 'Registrar of Societies, Tamil Nadu'
              },
              {
                title: 'Fire Safety',
                details: 'Certificate No: FS/2023/SBA/001',
                authority: 'Tamil Nadu Fire & Rescue Services'
              },
              {
                title: 'Building Approval',
                details: 'Plan Approval No: BA/2023/001',
                authority: 'Chennai Corporation'
              },
              {
                title: 'Environmental Clearance',
                details: 'EC No: EC/TN/2023/001',
                authority: 'Tamil Nadu Pollution Control Board'
              }
            ].map((legal, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg hover:bg-opacity-20 transition-all duration-300">
                <h3 className="text-xl font-bold mb-2">{legal.title}</h3>
                <p className="text-red-100 mb-2">{legal.details}</p>
                <p className="text-red-200 text-sm">{legal.authority}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Information Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Detailed Information</h2>
            <p className="text-xl text-blue-700">Access comprehensive information about our school</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Link to="/about/mandatory-disclosure/school-details" className="bg-red-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <Building className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">School Details</h3>
                <p className="text-blue-700 mb-6">
                  Comprehensive information about our institution, including facilities, staff, academic programs, and legal compliance.
                </p>
                <div className="flex items-center text-red-600 font-semibold group-hover:text-red-700">
                  View School Details
                  <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </div>
            </Link>
            
            <Link to="/about/mandatory-disclosure/cbse-mandatory" className="bg-red-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <FileText className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">CBSE Mandatory Disclosure</h3>
                <p className="text-blue-700 mb-6">
                  All required information as per CBSE guidelines, including staff details, infrastructure, academic information, and more.
                </p>
                <div className="flex items-center text-red-600 font-semibold group-hover:text-red-700">
                  View CBSE Disclosure
                  <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact for Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Need Additional Information?</h2>
          <p className="text-xl text-blue-700 mb-8">
            If you require any additional documents or have questions about our mandatory disclosures, please contact our administrative office.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Administrative Office</h3>
              <div className="space-y-2 text-blue-700">
                <p>📧 admin@stbrittosacademy.edu</p>
                <p>📞 (044) 123-4567</p>
                <p>🕒 Monday - Friday: 9:00 AM - 5:00 PM</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Right to Information</h3>
              <div className="space-y-2 text-blue-700">
                <p>📧 rti@stbrittosacademy.edu</p>
                <p>📞 (044) 123-4568</p>
                <p>🕒 RTI Officer: Mr. Rajesh Kumar</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:admin@stbrittosacademy.edu"
              className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Contact Administration
            </a>
            <a
              href="/about/annual-report"
              className="border-2 border-red-700 text-red-700 hover:bg-red-700 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              View Annual Report
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MandatoryDisclosure;