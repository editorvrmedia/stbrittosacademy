import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, ArrowRight, Search, Users, BookOpen } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'education', name: 'Education' },
    { id: 'student-life', name: 'Student Life' },
    { id: 'achievements', name: 'Achievements' },
    { id: 'events', name: 'Events' },
    { id: 'tips', name: 'Tips & Advice' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Education: Embracing Technology in the Classroom',
      excerpt: 'Exploring how digital tools and innovative teaching methods are transforming the learning experience at St. Brittos Academy.',
      content: 'In today\'s rapidly evolving world, education must adapt to prepare students for the challenges of tomorrow...',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-20',
      category: 'education',
      image: 'https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Student Spotlight: Excellence in Science Fair 2024',
      excerpt: 'Meet our outstanding students who represented St. Brittos Academy at the National Science Fair and brought home top honors.',
      content: 'This year\'s science fair was a remarkable showcase of innovation and creativity...',
      author: 'Prof. Michael Chen',
      date: '2024-01-18',
      category: 'achievements',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      readTime: '4 min read'
    },
    {
      id: 3,
      title: 'Building Character Through Community Service',
      excerpt: 'How our community service programs help students develop empathy, leadership skills, and a sense of social responsibility.',
      content: 'Community service is an integral part of our educational philosophy at St. Brittos Academy...',
      author: 'Ms. Emily Rodriguez',
      date: '2024-01-15',
      category: 'student-life',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Annual Cultural Festival: A Celebration of Diversity',
      excerpt: 'Recap of our vibrant cultural festival that showcased the rich traditions and talents of our diverse student body.',
      content: 'Our annual cultural festival was a spectacular celebration of the diverse cultures represented in our school...',
      author: 'Mr. Rajesh Kumar',
      date: '2024-01-12',
      category: 'events',
      image: 'https://images.pexels.com/photos/7520391/pexels-photo-7520391.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      readTime: '3 min read'
    },
    {
      id: 5,
      title: 'Study Tips for Board Exam Success',
      excerpt: 'Expert advice from our teachers on effective study strategies and time management techniques for board exam preparation.',
      content: 'As board exams approach, it\'s important to have a structured study plan and effective strategies...',
      author: 'Mrs. Priya Nair',
      date: '2024-01-10',
      category: 'tips',
      image: 'https://images.pexels.com/photos/8471904/pexels-photo-8471904.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      readTime: '7 min read'
    },
    {
      id: 6,
      title: 'Environmental Awareness Week: Going Green Together',
      excerpt: 'Our students and teachers came together for Environmental Awareness Week, implementing sustainable practices and learning about conservation.',
      content: 'Environmental consciousness is crucial for the future of our planet...',
      author: 'Dr. Anita Sharma',
      date: '2024-01-08',
      category: 'events',
      image: 'https://images.pexels.com/photos/6646919/pexels-photo-6646919.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      readTime: '4 min read'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-700 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">School Blog</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Stay connected with the latest news, insights, and stories from our school community. 
            Discover educational tips, student achievements, and behind-the-scenes moments.
          </p>
          
          {/* Featured Blog Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/blog/principal"
              className="bg-white bg-opacity-10 hover:bg-opacity-20 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
            >
              <Users className="mr-2 h-5 w-5" />
              Principal's Blog
            </Link>
            <Link
              to="/blog/vice-principal"
              className="bg-white bg-opacity-10 hover:bg-opacity-20 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Vice Principal's Blog
            </Link>
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
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-indigo-600 text-white'
                      : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No blog posts found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        post.category === 'education' ? 'bg-blue-100 text-blue-800' :
                        post.category === 'student-life' ? 'bg-green-100 text-green-800' :
                        post.category === 'achievements' ? 'bg-yellow-100 text-yellow-800' :
                        post.category === 'events' ? 'bg-purple-100 text-purple-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                      <span className="text-gray-500 text-sm ml-3">{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="h-4 w-4 mr-1" />
                        <span className="mr-3">{post.author}</span>
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                    </div>
                    
                    <button className="mt-4 text-indigo-600 hover:text-indigo-700 font-semibold flex items-center transition-colors duration-300">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Blogs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Blog Series</h2>
            <p className="text-xl text-gray-600">Exclusive insights from our school leadership</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              to="/blog/principal"
              className="group bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                  alt="Dr. Sarah Johnson"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                    Principal's Blog
                  </h3>
                  <p className="text-blue-600">Dr. Sarah Johnson</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Insights on educational leadership, innovation in teaching, and the future of learning. 
                Discover the vision and philosophy that guides our institution.
              </p>
              <div className="flex items-center text-blue-600 group-hover:text-blue-700 font-semibold">
                Read Principal's Posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
            
            <Link
              to="/blog/vice-principal"
              className="group bg-gradient-to-r from-teal-50 to-teal-100 p-8 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src="https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                  alt="Prof. Michael Chen"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-teal-700 transition-colors duration-300">
                    Vice Principal's Blog
                  </h3>
                  <p className="text-teal-600">Prof. Michael Chen</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Perspectives on student development, academic support, and innovative teaching practices. 
                Learn about our student-centered approach to education.
              </p>
              <div className="flex items-center text-teal-600 group-hover:text-teal-700 font-semibold">
                Read Vice Principal's Posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8">
            Subscribe to our newsletter to receive the latest blog posts and school updates directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-white text-indigo-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;