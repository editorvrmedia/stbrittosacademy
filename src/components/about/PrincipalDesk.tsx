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
      <motion.section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
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
            Principal's Desk
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true, amount: 0.7 }}
          >
            A message from our Principal, Mrs. Mary Vasantha Kumari, on our commitment to excellence in education and holistic development.
          </motion.p>
        </div>
      </motion.section>

      {/* Principal's Profile */}
      <motion.section className="py-16 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true, amount: 0.7 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <img
                src="/PERSONS/principal.jpg"
                alt="Mary Vasantha Kumari. J - Principal"
                className="w-80 h-80 rounded-full object-cover object-top mx-auto lg:mx-0 shadow-2xl border-4 border-white"
                style={{ objectPosition: 'center top' }}
              />
            </div>
            <div>
              <motion.h2
                className="text-4xl font-bold text-gray-900 mb-2"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
                viewport={{ once: true, amount: 0.7 }}
              >
                Mary Vasantha Kumari. J
              </motion.h2>
              <p className="text-lg text-blue-700 font-semibold mb-2">M.Phil. (Ed. Psy), M.B.A (Ed. Mgmt), M.Sc. (Psy), B.Ed., SLET (Mgmt).</p>
              <p className="text-xl text-blue-600 font-semibold mb-2">Principal</p>
              <p className="text-lg text-gray-600 mb-2">St. Britto's Academy</p>
              <p className="text-lg leading-relaxed mb-6">
                  Leading St. Britto's Academy with exceptional vision and dedication, Mary Vasantha Kumari. J brings extensive experience in educational leadership and innovation. Under her guidance, the academy has achieved remarkable recognition and continues to set new standards in holistic education.
                </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="flex flex-col items-center bg-blue-50 rounded-lg p-4">
                  <span className="text-3xl mb-2">🎓</span>
                  <span className="font-semibold text-gray-900">M.Phil., M.Sc., B.Ed.</span>
                </div>
                <div className="flex flex-col items-center bg-blue-50 rounded-lg p-4">
                  <span className="text-3xl mb-2">👩‍👧</span>
                  <span className="font-semibold text-gray-900">Parenting Coach</span>
                </div>
                <div className="flex flex-col items-center bg-blue-50 rounded-lg p-4">
                  <span className="text-3xl mb-2">🧭</span>
                  <span className="font-semibold text-gray-900 text-center">Career Guidance Expert</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Principal's Message */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Quote className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
              viewport={{ once: true, amount: 0.7 }}
            >
              Message from Principal
            </motion.h2>
          </div>
          <div className="bg-white p-8 lg:p-12 rounded-xl shadow-lg">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <motion.p
                className="font-bold text-xl text-blue-900 mb-2"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
                viewport={{ once: true, amount: 0.7 }}
              >
                Welcome to the 28th Year of Excellence at St. Britto’s Academy!
              </motion.p>
              <p>We are immensely delighted to step into our 28th year of academic brilliance at St. Britto’s Academy—a school where opportunities thrive, innovation flourishes, and excellence is a tradition. Our unwavering commitment to holistic education has made us a leading institution, shaping young minds into future-ready, responsible global citizens.</p>
              <p>With immense gratitude, we acknowledge the support of our dedicated faculty, involved parents, and ambitious students, whose contributions have helped us earn prestigious accolades. Ranked among the top CBSE schools in India by the Centre for Educational Development, New Delhi, St. Britto’s Academy is recognised for its cutting-edge curriculum, aligned with NCERT guidelines. Our emphasis on real-world learning has also earned us the following honours:</p>
              <ul className="list-disc list-inside ml-4">
                <li>The ISA Award (2017-2020) by the British Council, for integrating global education within an Indian perspective.</li>
                <li>Asia Book of Records & Guinness World Record, for our “Reaching Out to Society” initiative, which extends education beyond the classroom and into the community.</li>
              </ul>
              <motion.h3
                className="font-semibold text-lg text-blue-800 mt-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
                viewport={{ once: true, amount: 0.7 }}
              >
                Transformational Learning & Innovation
              </motion.h3>
              <p>At St. Britto’s Academy, education is more than textbooks—it is about nurturing curiosity, fostering leadership, and developing critical thinking. We integrate mind mapping, concept mapping, and memory techniques to enhance comprehension and retention. Our regular curriculum reviews ensure that our teaching methodologies remain innovative, engaging, and tailored to the evolving needs of students.</p>
              <p>To further enrich learning, we have introduced:</p>
              <ul className="list-disc list-inside ml-4">
                <li>The St. Britto’s 8 Quotients Framework, incorporating 100+ innovative pedagogical practices to ensure holistic development.</li>
                <li>Advanced reference materials, remedial classes, and specialised education services, ensuring that every student receives individualised academic support.</li>
              </ul>
              <motion.h3
                className="font-semibold text-lg text-blue-800 mt-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 }}
                viewport={{ once: true, amount: 0.7 }}
              >
                A Commitment to Holistic Development
              </motion.h3>
              <p>Our mission is to shape students into critical thinkers, problem solvers, and ethical leaders. We create opportunities through:</p>
              <ul className="list-disc list-inside ml-4">
                <li>Talent Hunt competitions, diverse clubs, and a dynamic sports programme to encourage participation and skill development.</li>
                <li>A stimulating learning environment, fostering teamwork, creativity, and adaptability to modern technology.</li>
                <li>A child-centric approach, where every learner’s unique strength and passion are recognised and nurtured.</li>
              </ul>
              <p>As Margaret Mead once said, “Children must be taught how to think, not what to think.” At St. Britto’s Academy, we foster a culture of inquiry, imagination, and innovation, allowing students the freedom to question, explore, and discover. We believe in nurturing both heart and mind, as Aristotle rightly stated, “Educating the mind without educating the heart is no education at all.”</p>
              <motion.p
                className="font-bold text-lg text-blue-900 mt-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.8 }}
                viewport={{ once: true, amount: 0.7 }}
              >
                A Future of Possibilities Awaits!
              </motion.p>
              <p>As we embark on this new academic year, we reaffirm our commitment to excellence, inclusivity, and innovation. Our students are the scientists, engineers, researchers, and changemakers of tomorrow—individuals who will not only enhance the quality of life but also contribute to an ethically refined society.</p>
              <p>We invite you to be a part of this journey—to learn, explore, and grow together at St. Britto’s Academy.</p>
              <p className="italic">Let’s shape the future, one child at a time!</p>
              <div className="pt-8 border-t border-gray-200">
                <motion.p
                  className="font-bold text-blue-700 text-xl mb-0"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.9 }}
                  viewport={{ once: true, amount: 0.7 }}
                >
                  Warm Regards,
                </motion.p>
                <motion.p
                  className="font-bold text-blue-700 text-lg mb-0"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 1.0 }}
                  viewport={{ once: true, amount: 0.7 }}
                >
                  Mary Vasantha Kumari,
                </motion.p>
                <p className="text-blue-600">Principal,</p>
                <p className="text-blue-600">St. Britto’s Academy.</p>
              </div>
              </div>
          </div>
        </div>
      </section>

      {/* Prestigious Achievements */}
      <motion.section className="py-16 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 1.1 }}
        viewport={{ once: true, amount: 0.7 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 1.2 }}
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
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 1.3 + index * 0.2 }}
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
      <motion.section className="py-16 bg-gray-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 1.4 }}
        viewport={{ once: true, amount: 0.7 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 1.5 }}
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
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 1.6 + index * 0.2 }}
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
      <motion.section className="py-16 bg-blue-700 text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 1.7 }}
        viewport={{ once: true, amount: 0.7 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 1.8 }}
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
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 1.9 + index * 0.2 }}
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
      <motion.section className="py-16 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 2.0 }}
        viewport={{ once: true, amount: 0.7 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 2.1 }}
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
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 2.2 + index * 0.2 }}
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
      <motion.section className="py-16 bg-gray-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 2.3 }}
        viewport={{ once: true, amount: 0.7 }}
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 2.4 }}
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