import React from 'react';
import { Quote, Users, BookOpen, Award, Heart, Target, Star, Lightbulb, Trophy, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const PrincipalDesk = () => {
  const achievements = [
    {
      title: 'ISA Award (2017-2020)',
      description: 'By the British Council, for integrating global education within an Indian perspective',
      icon: Globe
    },
    {
      title: 'Asia Book of Records & Guinness World Record',
      description: 'For our "Reaching Out to Society" initiative, extending education beyond the classroom',
      icon: Trophy
    },
    {
      title: 'Top CBSE School Recognition',
      description: 'Ranked among the top CBSE schools in India by the Centre for Educational Development, New Delhi',
      icon: Award
    }
  ];

  const innovativeFeatures = [
    {
      title: 'St. Britto\'s 8 Quotients Framework',
      description: 'Incorporating 100+ innovative pedagogical practices for holistic development',
      icon: Star
    },
    {
      title: 'Mind Mapping & Concept Mapping',
      description: 'Enhanced comprehension and retention through advanced learning techniques',
      icon: Lightbulb
    },
    {
      title: 'Advanced Reference Materials',
      description: 'Remedial classes and specialised education services for individualised support',
      icon: BookOpen
    },
    {
      title: 'Talent Hunt & Dynamic Sports',
      description: 'Diverse clubs and competitions encouraging participation and skill development',
      icon: Trophy
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <motion.section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.7 }}
          >
            Principal's Desk
          </motion.h1>
          <p className="text-xl max-w-3xl mx-auto">
            Welcome to the 28th Year of Excellence at St. Britto's Academy - where opportunities thrive, innovation flourishes, and excellence is a tradition.
          </p>
        </div>
      </motion.section>

      {/* Principal's Profile */}
      <motion.section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <img
                src="/IMG_15001.jpg"
                alt="Mary Vasantha Kumari. J - Principal"
                className="w-80 h-80 rounded-full object-cover object-top mx-auto lg:mx-0 shadow-2xl border-4 border-white"
                style={{ objectPosition: 'center top' }}
              />
            </div>
            <div>
              <motion.h2
                className="text-4xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.7 }}
              >
                Mary Vasantha Kumari. J
              </motion.h2>
              <p className="text-xl text-blue-600 font-semibold mb-2">Principal</p>
              <p className="text-lg text-gray-600 mb-6">St. Britto's Academy</p>
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <p className="text-blue-800 font-medium">📧 mary.vasantha@stbrittosacademy.edu.in</p>
              </div>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Leading St. Britto's Academy with exceptional vision and dedication, Mary Vasantha Kumari. J brings extensive experience in educational leadership and innovation. Under her guidance, the academy has achieved remarkable recognition and continues to set new standards in holistic education.
                </p>
              </div>
              <div className="mt-8 grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">28 Years</p>
                  <p className="text-sm text-gray-600">Excellence</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Trophy className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">Multiple</p>
                  <p className="text-sm text-gray-600">Awards</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Star className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">Top CBSE</p>
                  <p className="text-sm text-gray-600">School</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Principal's Message */}
      <motion.section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Quote className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.7 }}
            >
              Principal's Message
            </motion.h2>
            <p className="text-xl text-gray-600 mb-8">Welcome to the 28th Year of Excellence at <span className="font-revue whitespace-nowrap">St. Britto's Academy!</span> - where opportunities thrive, innovation flourishes, and excellence is a tradition.</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
            <div className="lg:col-span-1 text-center lg:text-left">
              <motion.h3
                className="text-3xl font-bold text-gray-900 mb-2"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.7 }}
              >
                Mary Vasantha Kumari. J
              </motion.h3>
              <p className="text-lg text-gray-600 mb-6"><span className="font-revue whitespace-nowrap">St. Britto's Academy!</span></p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">Leading <span className="font-revue whitespace-nowrap">St. Britto's Academy!</span> with exceptional vision and dedication, Mary Vasantha Kumari. J brings extensive experience in educational leadership and innovation. Under her guidance, the academy has achieved significant milestones, fostering a culture of academic excellence and holistic development. Her passion for empowering young minds and her commitment to fostering a dynamic learning environment make her an inspirational leader.</p>
              </div>
              </div>
              
          <div className="mb-12 text-center max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
            <div className="prose prose-lg mx-auto text-gray-700 text-center bg-white rounded-xl shadow-md p-8 mt-8">
              <motion.h3
                className="text-2xl font-bold text-blue-700 mb-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.7 }}
              >
                Welcome to the 28th Year of Excellence at <span className="font-revue whitespace-nowrap">St. Britto's Academy!</span>!
              </motion.h3>
            <p className="mb-6">
                We are immensely delighted to step into our <strong>28th year of academic brilliance</strong> at <span className="font-revue whitespace-nowrap">St. Britto's Academy!</span>—a school where opportunities thrive, innovation flourishes, and excellence is a tradition. Our unwavering commitment to holistic education has made us a leading institution, shaping young minds into compassionate leaders and innovative thinkers.
            </p>
            <p className="mb-6">
              With a rich history spanning nearly three decades, we have consistently adapted to evolving educational landscapes while staying true to our core values. Recognized by the Centre for Educational Development, New Delhi, <span className="font-revue">St. Britto's Academy</span> is recognised for its cutting-edge curriculum, aligned with NCERT guidelines.
            </p>
            <p className="mb-6">
              At <span className="font-revue">St. Britto's Academy</span>, education is more than textbooks—it is about <strong>nurturing curiosity, fostering leadership, and developing critical thinking</strong>. We integrate mind mapping, concept mapping, and experiential learning to encourage students to question, explore, and innovate. Our dedicated faculty, state-of-the-art facilities, and vibrant co-curricular programs ensure a well-rounded educational journey.
            </p>
            <p className="mb-6">
              As Margaret Mead once said, <strong>"Children must be taught how to think, not what to think."</strong> At <span className="font-revue">St. Britto's Academy</span>, we foster a culture of inquiry, imagination, and innovation, allowing students the freedom to question, explore, and discover. We believe in empowering them to become lifelong learners who are adaptable, resilient, and ready to navigate the complexities of the modern world.
              </p>
            <p className="mb-6">
              We invite you to be a part of this journey—to learn, explore, and grow together at <span className="font-revue">St. Britto's Academy</span>.
            </p>
            <p className="text-right font-semibold text-xl text-gray-800">Warmly,</p>
            <p className="text-right font-semibold text-xl text-gray-800">Mary Vasantha Kumari. J</p>
            <p className="text-right text-blue-600"><span className="font-revue">St. Britto's Academy</span></p>
          </div>
        </div>
        </div>
      </motion.section>

      {/* Prestigious Achievements */}
      <motion.section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.7 }}
            >
              Prestigious Achievements
            </motion.h2>
            <p className="text-xl text-gray-600">Recognition for our commitment to excellence and innovation</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-blue-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 text-center">
                <achievement.icon className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                <motion.h3
                  className="text-xl font-bold text-gray-900 mb-4"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.2 }}
                  viewport={{ once: true, amount: 0.7 }}
                >
                  {achievement.title}
                </motion.h3>
                <p className="text-gray-700">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Innovative Features */}
      <motion.section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.7 }}
            >
              Transformational Learning & Innovation
            </motion.h2>
            <p className="text-xl text-gray-600">Cutting-edge approaches to enhance learning and development</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {innovativeFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <motion.h3
                  className="text-lg font-bold text-gray-900 mb-3"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.2 }}
                  viewport={{ once: true, amount: 0.7 }}
                >
                  {feature.title}
                </motion.h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Educational Philosophy */}
      <motion.section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.7 }}
            >
              Our Educational Philosophy
            </motion.h2>
            <p className="text-xl">Nurturing minds and hearts for a better tomorrow</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Critical Thinking',
                description: 'Teaching students how to think, not what to think',
                icon: Lightbulb
              },
              {
                title: 'Heart & Mind',
                description: 'Educating both the mind and the heart for complete development',
                icon: Heart
              },
              {
                title: 'Future-Ready Citizens',
                description: 'Preparing responsible global citizens and changemakers',
                icon: Globe
              },
              {
                title: 'Innovation & Inquiry',
                description: 'Fostering a culture of questioning, exploring, and discovering',
                icon: Star
              },
              {
                title: 'Individual Strengths',
                description: 'Recognizing and nurturing every learner\'s unique potential',
                icon: Target
              },
              {
                title: 'Ethical Leadership',
                description: 'Shaping ethical leaders who contribute to society',
                icon: Award
              }
            ].map((philosophy, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg hover:bg-opacity-20 transition-all duration-300">
                <philosophy.icon className="h-10 w-10 mb-4" />
                <motion.h3
                  className="text-xl font-bold mb-3"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.2 }}
                  viewport={{ once: true, amount: 0.7 }}
                >
                  {philosophy.title}
                </motion.h3>
                <p className="text-blue-100">{philosophy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 28 Years of Excellence */}
      <motion.section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.7 }}
            >
              28 Years of Academic Brilliance
            </motion.h2>
            <p className="text-xl text-gray-600">A legacy of excellence and innovation</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: '28', label: 'Years of Excellence', description: 'Academic brilliance since 1997' },
              { number: 'Top', label: 'CBSE School', description: 'Ranked among India\'s best' },
              { number: '100+', label: 'Innovative Practices', description: '8 Quotients Framework' },
              { number: '2', label: 'World Records', description: 'International recognition' }
            ].map((stat, index) => (
              <div key={index} className="bg-blue-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl font-bold text-blue-700 mb-2">{stat.number}</div>
                <motion.div
                  className="text-xl font-semibold text-gray-900 mb-2"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.2 }}
                  viewport={{ once: true, amount: 0.7 }}
                >
                  {stat.label}
                </motion.div>
                <div className="text-gray-600 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.7 }}
          >
            Join Our Journey of Excellence
          </motion.h2>
          <p className="text-xl text-gray-600 mb-8">
            Be part of our mission to shape the future, one child at a time. Experience education that goes beyond textbooks to nurture curious minds and ethical leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admissions"
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Apply for Admission
            </a>
            <a
              href="/about/virtual-tour"
              className="border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Take Virtual Tour
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default PrincipalDesk;