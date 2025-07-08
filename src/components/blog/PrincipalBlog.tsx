import React, { useState } from 'react';
import { Calendar, User, Tag, ArrowRight, Search, Eye } from 'lucide-react';

const PrincipalBlog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const principalPosts = [
    {
      id: 1,
      title: 'Embracing Innovation in Education: A Vision for the Future',
      excerpt: 'As we step into a new academic year, I reflect on the transformative power of innovation in education and how we can prepare our students for tomorrow\'s challenges.',
      content: 'Education is not just about imparting knowledge; it\'s about igniting curiosity and fostering critical thinking...',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-25',
      image: 'https://images.pexels.com/photos/8471904/pexels-photo-8471904.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      readTime: '6 min read',
      tags: ['Innovation', 'Future of Education', 'Leadership']
    },
    {
      id: 2,
      title: 'Building Character Through Academic Excellence',
      excerpt: 'True education goes beyond grades and test scores. It\'s about developing well-rounded individuals who will make positive contributions to society.',
      content: 'At St. Britto\'s Academy, we believe that character formation is as important as academic achievement...',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-20',
      image: 'https://images.pexels.com/photos/8466666/pexels-photo-8466666.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      readTime: '5 min read',
      tags: ['Character Building', 'Values', 'Academic Excellence']
    },
    {
      id: 3,
      title: 'The Importance of Mental Health in Schools',
      excerpt: 'In today\'s fast-paced world, prioritizing student mental health and well-being is not just important—it\'s essential for creating a supportive learning environment.',
      content: 'Mental health awareness has become increasingly important in educational settings...',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      readTime: '7 min read',
      tags: ['Mental Health', 'Student Welfare', 'Well-being']
    },
    {
      id: 4,
      title: 'Celebrating Diversity in Our School Community',
      excerpt: 'Our strength lies in our diversity. Learn how we foster an inclusive environment where every student feels valued and respected.',
      content: 'Diversity is not just about different backgrounds; it\'s about different perspectives, ideas, and ways of thinking...',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-10',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      readTime: '4 min read',
      tags: ['Diversity', 'Inclusion', 'Community']
    },
    {
      id: 5,
      title: 'Technology Integration: Enhancing Learning Experiences',
      excerpt: 'Discover how we\'re leveraging technology to create more engaging and effective learning experiences for our students.',
      content: 'Technology is not just a tool; it\'s a gateway to unlimited learning possibilities...',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-05',
      image: 'https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      readTime: '5 min read',
      tags: ['Technology', 'Digital Learning', 'Innovation']
    },
    {
      id: 6,
      title: 'Preparing Students for Global Citizenship',
      excerpt: 'In an interconnected world, we must prepare our students to be responsible global citizens who can contribute to solving world challenges.',
      content: 'Global citizenship education is about understanding our interconnected world...',
      author: 'Dr. Sarah Johnson',
      date: '2023-12-28',
      image: 'https://images.pexels.com/photos/5427659/pexels-photo-5427659.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      readTime: '6 min read',
      tags: ['Global Citizenship', 'International Education', 'Leadership']
    }
  ];

  const filteredPosts = principalPosts.filter(post =>
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

  const allTags = Array.from(new Set(principalPosts.flatMap(post => post.tags)));

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Principal's Blog</h1>
              <p className="text-xl mb-8">
                Insights, reflections, and thoughts on education, leadership, and the future of learning from our Principal, Dr. Sarah Johnson.
              </p>
              <div className="flex items-center bg-white bg-opacity-10 p-4 rounded-lg">
                <img
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                  alt="Dr. Sarah Johnson"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">Dr. Sarah Johnson</h3>
                  <p className="text-blue-100">Principal, St. Britto's Academy</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/8423032/pexels-photo-8423032.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="School campus"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search principal's posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            {/* Popular Tags */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-600 mr-2">Popular topics:</span>
              {allTags.slice(0, 4).map((tag, index) => (
                <button
                  key={index}
                  onClick={() => setSearchTerm(tag)}
                  className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition-colors duration-300"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No posts found matching your search criteria.</p>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredPosts.map((post, index) => (
                <article key={post.id} className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                  index === 0 ? 'lg:grid lg:grid-cols-2 lg:gap-8' : ''
                }`}>
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
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop"
                          alt="Dr. Sarah Johnson"
                          className="w-10 h-10 rounded-full object-cover mr-3"
                        />
                        <div>
                          <p className="font-semibold text-gray-900">{post.author}</p>
                          <p className="text-sm text-gray-500">Principal</p>
                        </div>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center transition-colors duration-300">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* About the Principal */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-xl p-8">
            <div className="text-center mb-8">
              <img
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                alt="Dr. Sarah Johnson"
                className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
              />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About Dr. Sarah Johnson</h2>
            </div>
            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="mb-6">
                Dr. Sarah Johnson has been leading St. Britto's Academy with vision and dedication for over 8 years. 
                With a Ph.D. in Educational Leadership and 20+ years of experience in education, she brings a wealth 
                of knowledge and innovative thinking to our school community.
              </p>
              <p className="mb-6">
                Her leadership philosophy centers on creating an inclusive, nurturing environment where every student 
                can thrive academically, socially, and emotionally. She is passionate about educational innovation, 
                character development, and preparing students for success in an ever-changing world.
              </p>
              <p>
                Through her blog, Dr. Johnson shares insights on educational trends, leadership strategies, and her 
                vision for the future of learning at St. Britto's Academy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8">
            Subscribe to receive the latest posts from our Principal and other school updates directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrincipalBlog;