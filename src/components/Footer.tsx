import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Academics', href: '/academics' },
    { name: 'Activities', href: '/activities' },
    { name: 'Achievements', href: '/achievements' },
    { name: 'Admissions', href: '/admissions' }
  ];

  const resources = [
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Login', href: '/login' }
  ];

  const additionalQuickLinks = [
    { name: 'Why St. Britto\'s', href: '/about/why-stbrittos' },
    { name: 'Kindergarten', href: '/academics/kindergarten' },
    { name: 'Primary', href: '/academics/lower-primary' },
    { name: 'Secondary', href: '/academics/secondary-school' },
    { name: 'Senior', href: '/academics/senior-secondary' },
    { name: 'Governance', href: '/about/governance' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/StBrittosAcademySeniorSecondarySchool', label: 'Facebook' },
    { icon: Twitter, href: 'https://x.com/stbrittos', label: 'X (Twitter)' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/stbrittosacademy', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://www.youtube.com/@BrittosAcademy', label: 'YouTube' }
  ];

  return (
    <motion.footer 
      className="bg-gray-900 text-white"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">
          
          {/* School Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4 sm:mb-6">
              <img 
                src="/sba-logo.png" 
                alt="St. Britto's Academy Logo" 
                className="h-12 sm:h-16 mb-2 sm:mb-4"
              />
            </Link>
            <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Committed to providing exceptional education that nurtures young minds and prepares students for success in an ever-changing world.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="bg-gray-800 p-2 sm:p-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">More Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {additionalQuickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contact Us</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm sm:text-base">R 3/3, Netaji road, Velachery,</p>
                  <p className="text-gray-300 text-sm sm:text-base">Chennai - 600 042.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mr-2 sm:mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-semibold mb-1 sm:mb-2 text-sm sm:text-base">For Admissions:</p>
                  <div className="space-y-1 text-xs sm:text-sm text-gray-300">
                    <p>9840866053</p>
                    <p>044-22447514</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mr-2 sm:mr-3" />
                <a 
                  href="mailto:admin@stbrittosacademy.edu.in"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm sm:text-base break-all"
                >
                  admin@stbrittosacademy.edu.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Our Education Institutions */}
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Our Education Institutions</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-gray-800 p-4 sm:p-6 rounded-lg">
              <h5 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">St. Britto's College</h5>
              <p className="text-gray-300 text-xs sm:text-sm">
                St. Britto's College is an Institute of Career Oriented & Logistics Studies started in the year 2012. 
                It is one of the top logistics colleges in India.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-gray-300 text-xs sm:text-sm text-center sm:text-left">
            <p>© {currentYear} <span className="font-revue">St. Britto's Academy</span>. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm justify-center sm:justify-end">
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
              Accessibility
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">
              Non-Discrimination Policy
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;