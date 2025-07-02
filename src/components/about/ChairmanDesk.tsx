import React from 'react';
import { Quote, Award, Heart, Users, Target, BookOpen, Star, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const ChairmanDesk = () => {
  const leadershipPrinciples = [
    {
      icon: Target,
      title: 'Competence',
      description: 'Uncovers talent, develops skills, and acquires knowledge through effective learning'
    },
    {
      icon: Heart,
      title: 'Commitment',
      description: 'Brings discipline to whatever one does and commitment to goals leads to growth'
    },
    {
      icon: Star,
      title: 'Creativity',
      description: 'Creative thoughts lead to innovative solutions and breakthrough thinking'
    },
    {
      icon: Users,
      title: 'Compassion',
      description: 'Makes competent, committed, creative people who contribute to society development'
    }
  ];

  const educationalApproach = [
    {
      icon: BookOpen,
      title: 'Theory & Practice',
      description: 'Effective competencies honed through a blend of theoretical knowledge and practical application'
    },
    {
      icon: Heart,
      title: 'Character Formation',
      description: 'Building competence while making every effort to form strong character and values'
    },
    {
      icon: Users,
      title: 'Student-Centered',
      description: 'Teaching, learning, and evaluation that is student-centered, not institution-centered'
    },
    {
      icon: Globe,
      title: 'Edu-care Philosophy',
      description: 'Infusing the fundamental spirit of education through care and nurturing approach'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <motion.section
        className="py-16 bg-gradient-to-r from-slate-700 to-slate-900 text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.7 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true, amount: 0.7 }}
          >
            Chairman's Desk
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true, amount: 0.7 }}
          >
            A message from our esteemed Chairman on the vision, values, and mission of <span className="font-revue">St. Britto's Academy</span>.
          </motion.p>
        </div>
      </motion.section>

      {/* Chairman's Profile */}
      <motion.section
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.7 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              viewport={{ once: true, amount: 0.7 }}
            >
              <img
                src="/xb.jpg"
                alt="Mr. Xavier Britto - Chairman"
                className="w-96 h-96 rounded-full object-cover object-top mx-auto lg:mx-0 shadow-2xl border-4 border-white"
                style={{ objectPosition: 'center top' }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
              viewport={{ once: true, amount: 0.7 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Mr. Xavier Britto</h2>
              <p className="text-xl text-slate-600 font-semibold mb-2">M.Com, BL, MBA, ACS.</p>
              <p className="text-xl text-slate-600 font-semibold mb-6">Chairman, St. Britto's Group of Institutions</p>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Mr. Xavier Britto brings exceptional leadership and vision to <span className="font-revue">St. Britto's Academy</span>. With qualifications in 
                  Commerce, Law, Business Administration, and Company Secretaryship, he combines academic excellence with 
                  practical business acumen.
                </p>
                <p className="text-lg leading-relaxed">
                  As Chairman of St. Britto's Group of Institutions, he has dedicated his career to forming leaders who are 
                  competent, committed, creative, and compassionate, believing in the philosophy of forming people to become 
                  competent rather than merely teaching.
                </p>
              </div>
              <div className="mt-8 grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <Award className="h-8 w-8 text-slate-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">M.Com, BL</p>
                  <p className="text-sm text-gray-600">MBA, ACS</p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <Users className="h-8 w-8 text-slate-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">Group Chairman</p>
                  <p className="text-sm text-gray-600">Institutional Leader</p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <Heart className="h-8 w-8 text-slate-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">Visionary</p>
                  <p className="text-sm text-gray-600">Educational Pioneer</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Chairman's Message */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.7 }}
          >
            <Quote className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              viewport={{ once: true, amount: 0.7 }}
            >
              Message from the Chairman
            </motion.h2>
          </motion.div>
          <motion.div
            className="bg-white p-8 lg:p-12 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true, amount: 0.7 }}
          >
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
                viewport={{ once: true, amount: 0.7 }}
              >
                <span className="text-2xl font-bold text-blue-700">"</span>With immense pleasure and happiness, I welcome you to <span className="font-revue">St. Britto's Academy</span>. It is a privilege to guide an institution that has consistently upheld a legacy of academic excellence, innovation, and holistic development. As we continue our journey, we are committed to nurturing young minds with knowledge, values, and skills that empower them to become compassionate leaders and responsible global citizens."
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
                viewport={{ once: true, amount: 0.7 }}
              >
              Our vision extends beyond traditional education; we aim to inspire a love for lifelong learning and foster an environment where curiosity thrives. We believe in empowering every student to discover their unique talents and pursue their passions, ensuring they are well-prepared to navigate the complexities of the modern world.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
                viewport={{ once: true, amount: 0.7 }}
              >
                With a dedicated team of educators, state-of-the-art facilities, and a curriculum that blends academic rigor with practical application, we provide an enriching educational experience. Our focus on <strong>critical thinking, creativity, and community engagement</strong> ensures that our students are not only academically strong but also socially conscious.
              </motion.p>
              <motion.div
                className="bg-blue-50 p-6 rounded-xl mt-8"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
                viewport={{ once: true, amount: 0.7 }}
              >
                <p className="text-xl font-semibold text-blue-700 italic text-center">
                  "With best wishes"
                </p>
              </motion.div>
              <motion.div
                className="pt-8 border-t border-gray-200"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
                viewport={{ once: true, amount: 0.7 }}
              >
                <p className="font-bold text-blue-700 text-xl">Mr. Xavier Britto</p>
                <p className="text-blue-600">Chairman</p>
                <p className="text-blue-600"><span className="font-revue">St. Britto's Academy</span></p>
              </motion.div>
          </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Philosophy - 4 C's */}
      <motion.section
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.7 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true, amount: 0.7 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Four C's of Leadership</h2>
            <p className="text-xl text-gray-600">Our mission to form leaders who embody these essential qualities</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 + index * 0.1 }}
                viewport={{ once: true, amount: 0.7 }}
              >
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <principle.icon className="h-8 w-8 text-slate-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{principle.title}</h3>
                <p className="text-gray-600">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Educational Approach */}
      <motion.section
        className="py-16 bg-slate-700 text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.7 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true, amount: 0.7 }}
          >
            <h2 className="text-4xl font-bold mb-4">Our Educational Approach</h2>
            <p className="text-xl">The fundamental principles that guide our educational philosophy</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {educationalApproach.map((approach, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-10 p-6 rounded-lg hover:bg-opacity-20 transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 + index * 0.1 }}
                viewport={{ once: true, amount: 0.7 }}
              >
                <approach.icon className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-bold mb-3">{approach.title}</h3>
                <p className="text-slate-100">{approach.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Quality Commitment */}
      <section className="py-16 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Commitment to Quality</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Character Formation</h3>
                  <p className="text-blue-800">
                    Education quality reflects in how learners form their character and how the institution journeys with them 
                    through their growth in maturity, knowledge, and wisdom.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Student-Centered Approach</h3>
                  <p className="text-blue-800">
                    Our teaching, learning, and evaluation processes are designed to be student-centered, keeping learners 
                    at the core of the educational enterprise.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Uncompromising Standards</h3>
                  <p className="text-blue-800">
                    We never compromise on the quality of education we provide, ensuring every effort is made to realize 
                    our mission in concrete terms.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/8466666/pexels-photo-8466666.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Students in learning environment"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-slate-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Join Our Educational Mission</h2>
          <p className="text-xl mb-8">
            Be part of our journey to form competent, committed, creative, and compassionate leaders who will contribute 
            to the development of society.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admissions"
              className="bg-white text-slate-700 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Apply for Admission
            </a>
            <a
              href="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChairmanDesk;