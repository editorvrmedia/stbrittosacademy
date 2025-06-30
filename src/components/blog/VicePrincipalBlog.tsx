import React, { useState } from 'react';
import { Calendar, User, Tag, ArrowRight, Search, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const VicePrincipalBlog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const vicePrincipalPosts = [
    {
      id: 1,
      title: 'Student-Centered Learning: Putting Students First',
      excerpt: 'Exploring how we can create more personalized learning experiences that cater to individual student needs and learning styles.',
      content: 'Every student is unique, with their own strengths, challenges, and ways of learning...',
      author: 'Mrs. John Rajesh',
      date: '2024-01-22',
      image: 'https://images.pexels.com/photos/8466666/pexels-photo-8466666.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      readTime: '5 min read',
      tags: ['Student-Centered Learning', 'Personalization', 'Teaching Methods']
    },
    {
      id: 2,
      title: 'The Power of Collaborative Learning',
      excerpt: 'How group projects and peer-to-peer learning enhance understanding and build essential life skills for our students.',
      content: 'Collaboration is not just a buzzword in education; it\'s a fundamental skill for the 21st century...',
      author: 'Mrs. John Rajesh',
      date: '2024-01-18',
      image: 'https://images.pexels.com/photos/8471904/pexels-photo-8471904.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      readTime: '6 min read',
      tags: ['Collaboration', 'Group Learning', 'Social Skills']
    },
    {
      id: 3,
      title: 'Assessment Beyond Tests: Holistic Evaluation Methods',
      excerpt: 'Moving beyond traditional testing to embrace comprehensive assessment strategies that truly measure student growth and understanding.',
      content: 'Assessment should be a tool for learning, not just a measure of learning...',
      author: 'Mrs. John Rajesh',
      date: '2024-01-14',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      readTime: '7 min read',
      tags: ['Assessment', 'Evaluation', 'Student Progress']
    },
    {
      id: 4,
      title: 'Building Resilience in Students',
      excerpt: 'Strategies for helping students develop emotional resilience and coping skills that will serve them throughout their lives.',
      content: 'Resilience is not something students are born with; it\'s a skill that can be developed and strengthened...',
      author: 'Mrs. John Rajesh',
      date: '2024-01-11',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      readTime: '5 min read',
      tags: ['Resilience', 'Emotional Intelligence', 'Student Support']
    },
    {
      id: 5,
      title: 'The Role of Extracurricular Activities in Education',
      excerpt: 'Understanding how sports, arts, and clubs contribute to holistic student development and academic success.',
      content: 'Extracurricular activities are not just add-ons to education; they are integral to student development...',
      author: 'Mrs. John Rajesh',
      date: '2024-01-07',
      image: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      readTime: '4 min read',
      tags: ['Extracurricular', 'Holistic Development', 'Student Activities']
    },
    {
      id: 6,
      title: 'Creating Inclusive Classrooms for All Learners',
      excerpt: 'Practical strategies for ensuring every student feels valued, supported, and able to succeed in our diverse learning environment.',
      content: 'Inclusion is not just about accommodating differences; it\'s about celebrating them...',
      author: 'Mrs. John Rajesh',
      date: '2024-01-03',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      readTime: '6 min read',
      tags: ['Inclusion', 'Diversity', 'Classroom Management']
    }
  ];

  const filteredPosts = vicePrincipalPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const allTags = Array.from(new Set(vicePrincipalPosts.flatMap(post => post.tags)));

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-gradient-to-r from-teal-700 to-teal-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Vice Principal's Blog</h1>
              <p className="text-xl mb-8">
                Perspectives on student development, academic support, and innovative teaching practices from our Vice Principal, Mrs. John Rajesh.
              </p>
              <div className="flex items-center bg-white bg-opacity-10 p-4 rounded-lg">
                <img
                  src="/IMG_1502 (1) (1).jpg"
                  alt="Mrs. John Rajesh"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">Ms. Joan Rajesh</h3>
                  <p className="text-teal-100">Vice Principal, <span className="font-revue">St. Britto's Academy</span></p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/8471904/pexels-photo-8471904.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Students in classroom"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Search and Filter */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="py-8 bg-white border-b"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search vice principal's posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            
            {/* Popular Tags */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-600 mr-2">Popular topics:</span>
              {allTags.slice(0, 4).map((tag, index) => (
                <button
                  key={index}
                  onClick={() => setSearchTerm(tag)}
                  className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm hover:bg-teal-200 transition-colors duration-300"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Blog Posts */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="py-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-center py-12">
              <p className="text-xl text-gray-600">No posts found matching your search criteria.</p>
            </motion.div>
          ) : (
            <div className="space-y-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${index === 0 ? 'lg:grid lg:grid-cols-2 lg:gap-8' : ''}`}
                >
                  <div className={index === 0 ? 'lg:order-2' : ''}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className={`w-full object-cover ${index === 0 ? 'h-full lg:h-96' : 'h-48'}`}
                    />
                  </div>
                  <div className={`p-8 ${index === 0 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-center mb-4">
                      <div className="flex items-center text-sm text-gray-500 mr-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mr-4">
                        <Eye className="h-4 w-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h2 className={`font-bold text-gray-900 mb-4 ${index === 0 ? 'text-3xl' : 'text-xl'}`}>
                      {post.title}
                    </h2>
                    <p className={`text-gray-600 mb-6 ${index === 0 ? 'text-lg' : ''}`}>
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src="/IMG_1502 (1) (1).jpg"
                          alt="Mrs. John Rajesh"
                          className="w-10 h-10 rounded-full object-cover mr-3"
                        />
                        <div>
                          <p className="font-semibold text-gray-900">{post.author}</p>
                          <p className="text-sm text-gray-500">Vice Principal</p>
                        </div>
                      </div>
                      <button className="text-teal-600 hover:text-teal-700 font-semibold flex items-center transition-colors duration-300">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </motion.section>

      {/* About the Vice Principal */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-teal-50 rounded-xl p-8">
            <div className="text-center mb-8">
              <img
                src="/IMG_1502 (1) (1).jpg"
                alt="Mrs. John Rajesh"
                className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
              />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About Mrs. John Rajesh</h2>
            </div>
            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="mb-6">
                Mrs. John Rajesh serves as Vice Principal at <span className="font-revue">St. Britto's Academy</span>, bringing over 15 years of
                experience in educational leadership and curriculum development. Her dedication to fostering a
                supportive and innovative learning environment has been instrumental in our school's success.
              </p>
              <p className="mb-6">
                Her expertise lies in curriculum development, student assessment, and innovative teaching 
                methodologies. Mrs. John Rajesh is particularly interested in student-centered learning approaches 
                and believes in the power of personalized education to unlock each student's potential.
              </p>
              <p>
                Through her blog, Mrs. John Rajesh shares practical insights on teaching strategies, student support 
                systems, and the day-to-day experiences of working closely with students, teachers, and families 
                to create a thriving educational community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-teal-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Stay Connected</h2>
          <p className="text-xl mb-8">
            Subscribe to receive the latest insights from our Vice Principal and other educational updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-white text-teal-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VicePrincipalBlog;