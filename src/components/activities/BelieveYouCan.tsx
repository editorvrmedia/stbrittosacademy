import React from 'react';
import { Star, Target, Heart, Users, Lightbulb, Award, CheckCircle, ArrowRight } from 'lucide-react';

const BelieveYouCan = () => {
  const principles = [
    {
      icon: Star,
      title: 'Self-Belief',
      description: 'Building unshakeable confidence in one\'s abilities and potential',
      activities: ['Positive affirmations', 'Success visualization', 'Achievement celebrations', 'Confidence building exercises']
    },
    {
      icon: Target,
      title: 'Goal Setting',
      description: 'Teaching students to set clear, achievable goals and work towards them',
      activities: ['SMART goal workshops', 'Vision board creation', 'Progress tracking', 'Milestone celebrations']
    },
    {
      icon: Heart,
      title: 'Resilience',
      description: 'Developing the ability to bounce back from setbacks and challenges',
      activities: ['Failure reframing', 'Stress management', 'Problem-solving skills', 'Emotional regulation']
    },
    {
      icon: Users,
      title: 'Growth Mindset',
      description: 'Fostering the belief that abilities can be developed through effort',
      activities: ['Learning from mistakes', 'Effort recognition', 'Challenge embracing', 'Continuous improvement']
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Encouraging creative thinking and innovative problem-solving',
      activities: ['Creative projects', 'Brainstorming sessions', 'Innovation challenges', 'Design thinking']
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Striving for personal best in all endeavors',
      activities: ['Quality standards', 'Peer feedback', 'Self-assessment', 'Continuous refinement']
    }
  ];

  const outcomes = [
    'Increased self-confidence and self-esteem',
    'Improved academic performance across subjects',
    'Better emotional regulation and stress management',
    'Enhanced leadership and communication skills',
    'Greater resilience in facing challenges',
    'Stronger motivation and goal-oriented behavior',
    'Improved relationships with peers and teachers',
    'Better preparation for future challenges and opportunities'
  ];

  const bycEvents = [
    {
      name: 'Young Forum',
      description: 'An intellectual event that challenges students to showcase their academic and cognitive abilities',
      icon: Lightbulb,
      color: 'blue',
      image: '/Young Forum.png'
    },
    {
      name: 'Royal Gridlock',
      description: 'A cultural fest that provides a platform for students to display their artistic and creative talents',
      icon: Star,
      color: 'purple',
      image: '/Royal Gridlock.png'
    },
    {
      name: 'ASSET',
      description: 'A sports event that encourages physical fitness, teamwork, and athletic excellence',
      icon: Target,
      color: 'green',
      image: '/Asset.png'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Believe You Can Program</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Empowering students to believe in themselves and achieve their dreams. Our comprehensive program builds confidence, resilience, and a growth mindset that lasts a lifetime.
          </p>
          <div className="bg-white bg-opacity-20 p-6 rounded-xl max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">"Believe You Can and You're Halfway There"</h2>
            <p className="text-lg">- Theodore Roosevelt</p>
          </div>
        </div>
      </section>

      {/* SEEK Foundation Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Believe You Can</h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Seek Foundation organizes Believe You Can every year. They conduct competitions in Intellectual, Cultural & sports under the name Young Forum – an intellectual event, Royal Gridlock – a cultural fest, ASSET – a sports event. St Britto's Academy holds hands with Seek Foundation to conduct this talent hunt.
                </p>
                <p className="text-lg leading-relaxed">
                  St Britto's Academy Teachers and Physical education department never failed to assist the BYC team from the year 2015.
                </p>
                <p className="text-lg leading-relaxed">
                  Believe You Can, a platform started for the young generation to showcase their talent in three dimensions. The very first seed of Believe You Can is sowed by former President Dr. A.P.J Abdul Kalam. It was started by an interactive session with the students' community. The three dimensions are Intellect, Culture & sports.
                </p>
                <p className="text-lg leading-relaxed">
                  BYC was started by our correspondent Dr. Vimala Britto, this platform concentrates on the Holistic development of children. Students from various parts of the world participate in all three competitions. Over the years more than 6000 students have participated from different parts of the world.
                  </p>
                <p className="text-lg leading-relaxed">
                  Our talent search didn't step back even during covid. We conducted all the competitions Online. We are happy and proud to share that we are the first to conduct Online Sports competitions for all the classes. Winners are awarded a cash prize, medals, and certificate. You can find more information on their website: <a href="https://contestbyc.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">contestbyc.com</a>
                </p>
              </div>
            </div>
            <div>
              <img
                src="/BYC NAME.jpg"
                alt="Believe You Can Logo"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BYC Events */}
      <section className="py-16 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Three Dimensions of Excellence</h2>
            <p className="text-xl text-blue-700">Believe You Can competitions span three key areas of development</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {bycEvents.map((event, index) => (
              <div key={index} className={`bg-${event.color}-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300 text-center`}>
                {event.image ? (
                  <img src={event.image} alt={event.name} className="h-40 w-40 object-contain mx-auto mb-6" />
                ) : (
                <event.icon className={`h-16 w-16 text-${event.color}-600 mx-auto mb-6`} />
                )}
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{event.name}</h3>
                <p className="text-blue-800">{event.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-blue-900">Recognition & Rewards</h3>
              <p className="text-blue-700">Celebrating achievement and excellence</p>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center mx-8">
                <Award className="h-12 w-12 text-yellow-500 mb-3" />
                <p className="font-semibold text-blue-900">Cash Prizes</p>
              </div>
              <div className="flex flex-col items-center mx-8">
                <Award className="h-12 w-12 text-blue-500 mb-3" />
                <p className="font-semibold text-blue-900">Medals</p>
              </div>
              <div className="flex flex-col items-center mx-8">
                <Award className="h-12 w-12 text-green-500 mb-3" />
                <p className="font-semibold text-blue-900">Certificates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Principles</h2>
            <p className="text-xl text-gray-600">The foundation of our Believe You Can program</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="bg-amber-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <principle.icon className="h-12 w-12 text-amber-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{principle.title}</h3>
                <p className="text-gray-700 mb-4">{principle.description}</p>
                <div className="space-y-2">
                  {principle.activities.map((activity, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-amber-600 mr-2" />
                      <span className="text-sm text-gray-600">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Expected Outcomes</h2>
            <p className="text-xl">The positive changes you can expect to see in your child</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((outcome, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg hover:bg-opacity-20 transition-all duration-300">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                  <p className="font-medium">{outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Start Your Child's Journey to Success</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join our Believe You Can program and watch your child develop the confidence and skills needed to achieve their dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admissions"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Enroll Now
            </a>
            <a
              href="/about/virtual-tour"
              className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BelieveYouCan;