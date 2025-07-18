import React from 'react';
import { Award, Users, BookOpen, Globe, Heart, Star, Target, Shield, Lightbulb, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyStBrittos = () => {
  const reasons = [
    {
      icon: Award,
      title: '28 Years of Excellence',
      description: 'Since 1997, we have consistently delivered quality education and produced outstanding graduates who excel in their chosen fields.',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Our dedicated team of qualified, experienced teachers are committed to nurturing each student\'s potential and ensuring academic success.',
      color: 'blue'
    },
    {
      icon: BookOpen,
      title: 'Holistic Curriculum',
      description: 'We offer a comprehensive curriculum that balances academics with arts, sports, and character development for well-rounded growth.',
      color: 'blue'
    },
    {
      icon: Globe,
      title: 'International Standards',
      description: 'Our international standard education prepares students for global opportunities while maintaining strong cultural roots.',
      color: 'blue'
    },
    {
      icon: Heart,
      title: 'Values-Based Education',
      description: 'We instill strong moral values, ethics, and character traits that shape students into responsible global citizens.',
      color: 'blue'
    },
    {
      icon: Star,
      title: 'Individual Attention',
      description: 'Small class sizes and personalized learning approaches ensure every student receives the attention they deserve.',
      color: 'blue'
    },
    {
      icon: Target,
      title: 'Innovation in Learning',
      description: 'We embrace modern teaching methodologies, technology, and innovative practices to enhance the learning experience.',
      color: 'blue'
    },
    {
      icon: Shield,
      title: 'Safe Learning Environment',
      description: 'Our campus provides a secure, nurturing environment where students can learn, grow, and thrive without concerns.',
      color: 'blue'
    },
    {
      icon: Lightbulb,
      title: 'Creative Expression',
      description: 'We encourage artistic expression, creative thinking, and innovative problem-solving skills in all our students.',
      color: 'blue'
    },
    {
      icon: Trophy,
      title: 'Recognition & Achievement',
      description: 'Our students consistently achieve excellence in academics, sports, arts, and various competitions at all levels.',
      color: 'blue'
    }
  ];

  const achievements = [
    { number: '1200+', label: 'Happy Students', icon: Users },
    { number: '95%', label: 'Board Exam Success Rate', icon: Award },
    { number: '50+', label: 'Expert Teachers', icon: BookOpen },
    { number: '100+', label: 'Awards & Recognition', icon: Star }
  ];

  const testimonials = [
    {
      name: 'Mrs. Priya Sharma',
      role: 'Parent of Grade 10 Student',
      content: 'St. Britto\'s Academy has been instrumental in shaping my daughter\'s character and academic excellence. The teachers genuinely care about each student\'s progress.',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Mr. Rajesh Kumar',
      role: 'Parent of Grade 8 Student',
      content: 'The holistic approach to education at St. Britto\'s has helped my son develop not just academically but also as a confident and compassionate individual.',
      image: 'https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Ms. Anita Menon',
      role: 'Alumni Parent',
      content: 'Both my children graduated from St. Britto\'s and are now successful professionals. The foundation they received here was exceptional.',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    }
  ];

  const facilities = [
    'State-of-the-art Science Laboratories',
    'Modern Computer Labs with Latest Technology',
    'Well-equipped Library with Digital Resources',
    'Spacious Sports Complex and Playground',
    'Art and Music Studios',
    'Auditorium for Cultural Events',
    'Safe Transportation Facility',
    'Nutritious Cafeteria Services'
  ];

  const innovativeFeatures = [
    {
      icon: Lightbulb,
      title: 'Innovation Labs',
      description: 'State-of-the-art laboratories for STEM education and research projects'
    },
    {
      icon: BookOpen,
      title: 'Reading Culture',
      description: 'Conscious efforts to inculcate reading habits and develop communication skills'
    },
    {
      icon: Users,
      title: 'Experienced Faculty',
      description: 'Efficient, committed, sincere and experienced staff dedicated to excellence'
    },
    {
      icon: Target,
      title: 'Progressive Methods',
      description: 'Unique teaching methodologies and innovative systems for effective learning'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero/Intro Section */}
      <motion.section
        className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        viewport={{ once: true, amount: 0.7 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Why Choose St. Britto's Academy?</h1>
          <p className="text-xl max-w-4xl mx-auto mb-8">
            "Education is the fountain head of experience; a confluence of the art of 'seeking' and the science of 'doing'. 
            Most importantly, it is an ethos that your child imbibes to transform his life."
          </p>
          <div className="bg-white bg-opacity-10 p-6 rounded-xl max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">St. Britto's Academy – Excellence in Education, Leadership & Global Awareness</h2>
          </div>
        </div>
      </motion.section>

      {/* Excellence & Heritage */}
      <section className="py-8 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">28 Years of Educational Excellence</h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  St. Britto's Academy is a premier international standard school that has been shaping young minds since 1997. 
                  As we proudly step into our <strong>28th year</strong>, we continue to draw inspiration from our achievements 
                  while striving for academic excellence, character building, and leadership development.
                </p>
                <p className="text-lg leading-relaxed">
                  Our structured approach integrates core values, cultural heritage, sustainability, and management principles, 
                  ensuring a holistic education that nurtures well-rounded individuals. With a strong focus on public speaking, 
                  confidence-building, and communication skills, our class and special assemblies empower students with essential 
                  life skills beyond textbooks.
                </p>
                <div className="bg-emerald-50 p-6 rounded-xl border-l-4 border-emerald-500">
                  <p className="text-lg font-semibold text-emerald-800 italic">
                    "St. Britto's strives tirelessly, creating milestones, attaining the unattainable and creating history."
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/SBA Building.jpg"
                alt="SBA Building - St. Britto's Academy"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-emerald-500 text-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">28</div>
                  <div className="text-sm">Years Strong</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovative Learning */}
      <section className="py-8 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Innovative Learning & Progressive Education</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              St. Britto's Academy is committed to progressive education, constantly innovating to set new benchmarks. 
              Our unique teaching methodologies, state-of-the-art facilities, and dedicated faculty create an engaging and effective learning environment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {innovativeFeatures.map((feature, index) => (
              <div key={index} className="bg-emerald-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <feature.icon className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-emerald-50 p-8 rounded-xl shadow-lg">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Educational Philosophy</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We prioritise reading habits, communication skills, and creative thinking, fostering intellectual growth and self-expression. 
                  With a team of experienced, committed, and passionate educators, we uphold the philosophy:
                </p>
                <div className="bg-emerald-50 p-6 rounded-xl border-l-4 border-emerald-500">
                  <p className="text-xl font-bold text-emerald-800 italic">
                    "Form people to become competent rather than merely teaching."
                  </p>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                  Our goal is to develop responsible, knowledgeable, and globally aware citizens ready to lead the future.
                </p>
              </div>
              <div>
                <img
                  src="/DSC01567.JPG"
                  alt="Educational Philosophy - St. Britto's Academy"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Reasons */}
      <section className="py-8 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Sets Us Apart</h2>
            <p className="text-xl text-gray-600">Eight compelling reasons why St. Britto's Academy is the right choice for your child's future</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className={`bg-${reason.color}-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                <reason.icon className={`h-12 w-12 text-${reason.color}-600 mb-4`} />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-8 bg-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Track Record</h2>
            <p className="text-xl">Numbers that speak for our commitment to excellence</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {achievements.map((achievement, index) => (
              <div key={index} className="transform hover:scale-105 transition-transform duration-300">
                <achievement.icon className="h-12 w-12 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">{achievement.number}</div>
                <div className="text-xl">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-8 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">World-Class Facilities</h2>
            <p className="text-xl text-gray-600">Infrastructure that supports comprehensive learning and development</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities
              .filter(facility => facility !== 'Nutritious Cafeteria Services')
              .map((facility, index) => (
                <div key={index} className="bg-emerald-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
                  <Shield className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
                  <p className="font-semibold text-gray-900">{facility === 'Well-equipped Library with Digital Resources' ? 'Well-equipped Library' : facility}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Testimonials */}
      <section className="py-8 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Parents Say</h2>
            <p className="text-xl text-gray-600">Hear from our parent community about their experience with St. Britto's Academy</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-emerald-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-emerald-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Excellence Statement */}
      <section className="py-8 bg-emerald-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-xl">
            <Trophy className="h-16 w-16 mx-auto mb-6 text-emerald-700" />
            <h2 className="text-4xl font-bold mb-6 text-gray-900">St. Britto's Academy – Where Excellence Meets Innovation!</h2>
            <p className="text-xl leading-relaxed text-gray-700">
              In order to achieve our goal of being unique and progressive in the field of education, we have innovative systems 
              and facilities in place that have proved to be both creative and effective. We believe in forming people to become 
              competent rather than merely teaching, preparing students to create milestones and attain the unattainable.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 bg-transparent">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Join Our Family?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Experience the St. Britto's difference and give your child the foundation for a successful and meaningful life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admissions"
              className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Apply for Admission
            </a>
            <a
              href="/about/virtual-tour"
              className="border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Take Virtual Tour
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyStBrittos;