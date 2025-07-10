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
      initial={false}
      animate={{ opacity: 1 }}
      className="bg-[#0B0F1C] text-[#F1F1F1]"
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-gray-800 pb-8">
          {/* Column 1: School Info */}
          <div>
            <Link to="/" className="flex flex-col items-start mb-4 w-full">
              <img 
                src="/LOGOS/SBA LOGO FOR WEBSITE DOWN.png" 
                alt="St. Britto's Academy Banner" 
                className="w-full max-w-full h-auto object-contain mb-3 rounded-lg"
              />
            </Link>
            <p className="text-gray-300 text-sm mb-4">
              Committed to providing exceptional education that nurtures young minds and prepares students for success in an ever-changing world.
            </p>
            <div className="flex space-x-2 mb-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="bg-[#181C2A] rounded-md p-2 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-[0_0_8px_2px_rgba(59,130,246,0.4)] focus:outline-none"
                >
                  <social.icon className="h-5 w-5 text-[#F1F1F1]" />
                </a>
              ))}
            </div>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent my-3" />
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="block text-gray-300 hover:text-blue-400 transition-all duration-200 hover:underline hover:underline-offset-4 hover:drop-shadow-[0_0_4px_rgba(59,130,246,0.4)]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: More Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">More Links</h4>
            <ul className="space-y-2">
              {additionalQuickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="block text-gray-300 hover:text-blue-400 transition-all duration-200 hover:underline hover:underline-offset-4 hover:drop-shadow-[0_0_4px_rgba(59,130,246,0.4)]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">R 3/3, Netaji Road, Velachery, Chennai - 600 042</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">For Admissions: 9840866053, 044-22447514</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <a href="mailto:admin@stbrittosacademy.edu.in" className="text-gray-300 text-sm hover:text-blue-400 transition-colors">admin@stbrittosacademy.edu.in</a>
              </div>
            </div>
          </div>
        </div>

        {/* Our Education Institutions */}
        <div className="w-full mt-8">
          <h4 className="text-lg font-semibold mb-4 text-center">Our Education Institutions</h4>
          <div className="flex justify-center">
            <a
              href="https://sbibs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#181C2A] rounded-xl shadow-lg p-6 max-w-xl w-full transition-all duration-200 hover:shadow-2xl hover:-translate-y-1 flex flex-col items-start cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              style={{ textDecoration: 'none' }}
            >
              <h5 className="text-lg font-bold mb-1 text-white">St. Britto's College</h5>
              <p className="text-gray-300 text-sm mb-1">An Institute of Career Oriented & Logistics Studies since 2012. One of the top logistics colleges in India.</p>
            </a>
          </div>
        </div>

        {/* Bottom Footer Strip */}
        <div className="w-full mt-8 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm bg-[#0B0F1C]">
          <div className="text-left w-full md:w-auto">© 2025 St. Britto's Academy. All rights reserved.</div>
          <div className="flex flex-wrap gap-4 justify-center md:justify-end w-full md:w-auto">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Accessibility</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Non-Discrimination Policy</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;