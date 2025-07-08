import React, { useEffect, useState, useRef } from 'react';
import { Quote, Users, BookOpen, Award, Heart, Target } from 'lucide-react';
import { motion, useAnimation, useMotionValue, animate } from 'framer-motion';

const AnimatedCounter = ({ target }: { target: number }) => {
  const [number, setNumber] = useState(0);
  const hasAnimated = useRef(false);
  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;
    const controls = animate(0, target, {
      duration: 1.8,
      ease: [0.17, 0.67, 0.83, 0.67],
      onUpdate: (v) => setNumber(Math.round(v)),
    });
    return controls.stop;
  }, [target]);
  return (
    <span className="text-blue-600 font-bold text-5xl mx-2 inline-block align-middle">{number}</span>
  );
};

const VicePrincipalDesk = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.1 }}
        className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Vice Principal's Desk</h1>
          <p className="text-xl max-w-3xl mx-auto">
            A message from our Vice Principal, Mrs. Joan Rajesh, on our educational philosophy and commitment to student success.
          </p>
        </div>
      </motion.section>

      {/* Vice Principal's Profile */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.1 }}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <img
                src="/PERSONS/viceprincipal.png"
                alt="Ms. Joan Rajesh - Senior Vice Principal"
                className="w-80 h-80 rounded-full object-cover mx-auto lg:mx-0 shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Ms. Joan Rajesh</h2>
              <p className="text-xl text-teal-600 font-semibold mb-6">Senior Vice Principal, St. Britto's Academy</p>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <span className="text-teal-600 font-semibold">"It is an immense privilege to be part of an institution that has consistently upheld a strong legacy of academic excellence and holistic development. I am committed to fostering a nurturing learning environment at St. Britto's Academy, where every student feels empowered to explore their potential and achieve their dreams."</span>
                </p>
                <p className="text-gray-600 mb-6">Ms. Joan Rajesh serves as the Senior Vice Principal of St. Britto's Academy, bringing exceptional leadership and vision to our esteemed institution. With extensive experience in educational administration and student development, she has been instrumental in shaping our academic programs and fostering a supportive learning community. Her dedication to fostering a vibrant and inclusive school environment inspires both students and staff.</p>
              </div>
              <div className="mt-8 grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-teal-50 rounded-lg">
                  <BookOpen className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">20+ Years</p>
                  <p className="text-sm text-gray-600">Experience</p>
                </div>
                <div className="text-center p-4 bg-teal-50 rounded-lg">
                  <Users className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">Senior</p>
                  <p className="text-sm text-gray-600">Vice Principal</p>
                </div>
                <div className="text-center p-4 bg-teal-50 rounded-lg">
                  <Award className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">28 Years</p>
                  <p className="text-sm text-gray-600">Institution Legacy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Vice Principal's Message */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.1 }}
        className="py-16 bg-gray-50"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Quote className="h-16 w-16 text-teal-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Message from the Senior Vice Principal</h2>
          </div>
          <div className="bg-white p-8 lg:p-12 rounded-xl shadow-lg">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                I am privileged to address you as the Senior Vice Principal of this esteemed institution, which has been a beacon of excellence for <strong>28 glorious years</strong>. St. Britto's Academy stands committed to its vision of providing holistic education that nurtures the mind, heart, and spirit.
              </p>
              <p>
                We believe that education is not confined to textbooks and classrooms; it is about <strong>learning for life</strong>, a journey that equips the students with the knowledge, skills, attitudes, and values they need to thrive in an ever-evolving world.
              </p>
              <p>
                In today's dynamic and interconnected world, fostering global awareness and responsible citizenship is more important than ever. Our curriculum is designed to develop <strong>critical thinking, creativity, and empathy</strong>, ensuring that our students are not just prepared for academic success but also equipped to contribute positively to society.
              </p>
              <p>
                Through a balanced blend of academics, co-curricular activities, and values-based learning, we strive to hone the talents and strengths of every child, helping them grow into <strong>confident, compassionate, and responsible individuals</strong>.
              </p>
              <p>
                At the heart of our philosophy lies a commitment to nurture learners as <strong>responsible global citizens</strong> who respect diversity, embrace challenges, and lead with integrity. Through collaborative projects, community outreach, or innovative learning methodologies, we aim to empower our students to engage meaningfully with the world around them.
              </p>
              <p>
                As we look to the future, we remain steadfast in our mission to inspire young minds, encourage curiosity, and instil a lifelong love for learning. As a team, with the unwavering support of our dedicated faculty, amicable parents, and enthusiastic learners, we are confident that we will continue to shape leaders who will make a positive difference in the world.
              </p>
              <div className="bg-teal-50 p-6 rounded-xl mt-8">
                <p className="text-xl font-semibold text-teal-700 italic text-center">
                  "Warm regards"
                </p>
              </div>
              <div className="pt-8 border-t border-gray-200">
                <p className="font-bold text-teal-700 text-xl">Ms. Joan Rajesh</p>
                <p className="text-teal-600">Senior Vice Principal</p>
                <p className="text-teal-600">St. Britto's Academy</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Educational Philosophy */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.1 }}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Educational Philosophy</h2>
            <p className="text-xl text-gray-600">Core principles that guide our holistic approach to education</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Holistic Development',
                description: 'Nurturing mind, heart, and spirit for complete personal growth'
              },
              {
                icon: Users,
                title: 'Global Citizenship',
                description: 'Fostering responsible citizens who respect diversity and lead with integrity'
              },
              {
                icon: BookOpen,
                title: 'Learning for Life',
                description: 'Education beyond textbooks that prepares students for an evolving world'
              },
              {
                icon: Target,
                title: 'Values-Based Learning',
                description: 'Instilling knowledge, skills, attitudes, and values for lifelong success'
              }
            ].map((philosophy, index) => (
              <div key={index} className="bg-teal-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <philosophy.icon className="h-12 w-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{philosophy.title}</h3>
                <p className="text-gray-600">{philosophy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Key Focus Areas */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.1 }}
        className="py-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Key Focus Areas</h2>
            <p className="text-xl text-gray-600">Building tomorrow's leaders through comprehensive education</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Critical Thinking & Creativity',
                description: 'Developing analytical minds that can think innovatively and solve complex problems',
                icon: Target
              },
              {
                title: 'Empathy & Compassion',
                description: 'Nurturing emotional intelligence and understanding for others',
                icon: Heart
              },
              {
                title: 'Academic Excellence',
                description: 'Maintaining high standards while ensuring comprehensive understanding',
                icon: BookOpen
              },
              {
                title: 'Co-curricular Activities',
                description: 'Balanced development through sports, arts, and extracurricular programs',
                icon: Award
              },
              {
                title: 'Community Engagement',
                description: 'Connecting learning with real-world impact through community projects',
                icon: Users
              },
              {
                title: 'Innovation in Learning',
                description: 'Implementing cutting-edge methodologies for effective education',
                icon: Target
              }
            ].map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <area.icon className="h-10 w-10 text-teal-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 28 Years Legacy */}
      <section className="py-16 bg-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Celebrating 28 Years of Educational Excellence
            </h2>
            <p className="text-xl">A legacy of nurturing minds and shaping futures</p>
          </div>
          
          {/* Event Highlights Marquee */}
          <div className="mb-12 overflow-hidden bg-white bg-opacity-10 rounded-lg py-4">
            <div className="flex animate-infinite-scroll whitespace-nowrap">
              <div className="flex items-center space-x-8 px-4">
                <span className="text-lg font-bold text-teal-100">• Investiture Ceremony 2025-26</span>
                <span className="text-lg font-bold text-teal-100">• Pongal Celebration 2025</span>
                <span className="text-lg font-bold text-teal-100">• Christmas Celebration 2024</span>
                <span className="text-lg font-bold text-teal-100">• Children's Day 2024</span>
                <span className="text-lg font-bold text-teal-100">• Diwali Celebration 2024</span>
                <span className="text-lg font-bold text-teal-100">• BYC ROYAL GRIDLOCK 2024</span>
                <span className="text-lg font-bold text-teal-100">• Grandparents Day 2024</span>
                <span className="text-lg font-bold text-teal-100">• ZEST-REGALIA 2024</span>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex items-center space-x-8 px-4">
                <span className="text-lg font-bold text-teal-100">• Investiture Ceremony 2025-26</span>
                <span className="text-lg font-bold text-teal-100">• Pongal Celebration 2025</span>
                <span className="text-lg font-bold text-teal-100">• Christmas Celebration 2024</span>
                <span className="text-lg font-bold text-teal-100">• Children's Day 2024</span>
                <span className="text-lg font-bold text-teal-100">• Diwali Celebration 2024</span>
                <span className="text-lg font-bold text-teal-100">• BYC ROYAL GRIDLOCK 2024</span>
                <span className="text-lg font-bold text-teal-100">• Grandparents Day 2024</span>
                <span className="text-lg font-bold text-teal-100">• ZEST-REGALIA 2024</span>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: '28', label: 'Years of Excellence', description: 'Beacon of educational quality' },
              { number: '1000+', label: 'Global Citizens', description: 'Shaped for the world' },
              { number: '95%', label: 'Success Rate', description: 'Academic achievements' },
              { number: '100%', label: 'Commitment', description: 'To holistic development' }
            ].map((stat, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg hover:bg-opacity-20 transition-all duration-300">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <div className="text-teal-100 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Our Educational Journey</h2>
          <p className="text-xl text-gray-600 mb-8">
            Be part of our mission to shape confident, compassionate, and responsible global citizens who will make a positive difference in the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admissions"
              className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Apply for Admission
            </a>
            <a
              href="/academics"
              className="border-2 border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Explore Our Programs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VicePrincipalDesk;