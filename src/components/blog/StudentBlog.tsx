import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, ArrowRight, Search, Users, BookOpen, Heart, MessageCircle, Share2 } from 'lucide-react';
import ErrorBoundary from '../ErrorBoundary';

const StudentBlog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'student-life', name: 'Student Life' },
    { id: 'academics', name: 'Academics' },
    { id: 'activities', name: 'Activities' },
    { id: 'achievements', name: 'Achievements' },
    { id: 'tips', name: 'Study Tips' }
  ];

  const studentBlogPosts = [
    {
      id: 1,
      title: 'My Journey Through High School: A Student\'s Perspective',
      excerpt: "Sharing my personal experience navigating the challenges and triumphs of high school life at St. Britto's Academy.",
      content: 'High school has been an incredible journey filled with both challenges and amazing opportunities...',
      author: 'Priya Sharma',
      grade: 'Class XII',
      date: '2024-01-25',
      category: 'student-life',
      image: 'https://images.pexels.com/photos/8471709/pexels-photo-8471709.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      readTime: '6 min read',
      likes: 45,
      comments: 12
    },
    {
      id: 2,
      title: 'How I Prepared for Board Exams: A Success Story',
      excerpt: 'Practical tips and strategies that helped me excel in my board examinations.',
      content: 'Board exams can be overwhelming, but with the right approach and preparation...',
      author: 'Rahul Kumar',
      grade: 'Class XII',
      date: '2024-01-22',
      category: 'academics',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      readTime: '8 min read',
      likes: 67,
      comments: 23
    },
    {
      id: 3,
      title: 'Participating in Science Fair: What I Learned',
      excerpt: 'My experience participating in the school science fair and the valuable lessons learned.',
      content: 'The science fair was not just about winning, but about learning and growing...',
      author: 'Ananya Patel',
      grade: 'Class X',
      date: '2024-01-20',
      category: 'activities',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      readTime: '5 min read',
      likes: 34,
      comments: 8
    },
    {
      id: 4,
      title: 'Balancing Studies and Extracurricular Activities',
      excerpt: 'Tips on how to maintain academic excellence while pursuing your passions.',
      content: 'Finding the right balance between studies and extracurricular activities is crucial...',
      author: 'Aditya Singh',
      grade: 'Class XI',
      date: '2024-01-18',
      category: 'tips',
      image: 'https://images.pexels.com/photos/7520391/pexels-photo-7520391.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      readTime: '7 min read',
      likes: 52,
      comments: 15
    },
    {
      id: 5,
      title: 'Winning the Inter-School Debate Competition',
      excerpt: 'The story of how our debate team prepared and won the prestigious inter-school competition.',
      content: 'Winning the debate competition was a team effort that required months of preparation...',
      author: 'Meera Reddy',
      grade: 'Class XII',
      date: '2024-01-15',
      category: 'achievements',
      image: 'https://images.pexels.com/photos/8471904/pexels-photo-8471904.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      readTime: '4 min read',
      likes: 78,
      comments: 31
    },
    {
      id: 6,
      title: 'Life as a School Prefect: Responsibilities and Growth',
      excerpt: 'My experience serving as a school prefect and the leadership skills I developed.',
      content: 'Being a prefect taught me valuable leadership and organizational skills...',
      author: 'Vikram Malhotra',
      grade: 'Class XII',
      date: '2024-01-12',
      category: 'student-life',
      image: 'https://images.pexels.com/photos/6646919/pexels-photo-6646919.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      readTime: '6 min read',
      likes: 41,
      comments: 19
    }
  ];

  const filteredPosts = studentBlogPosts.filter(post => {
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
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Student Blog</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Discover stories, experiences, and insights from our students. 
            Read about their academic journeys, achievements, and life at St. Britto's Academy.
          </p>
          
          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/blog"
              className="bg-white bg-opacity-10 hover:bg-opacity-20 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
            >
              <ArrowRight className="mr-2 h-5 w-5" />
              Back to Main Blog
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
                placeholder="Search student blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
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
                      ? 'bg-green-600 text-white'
                      : 'bg-green-100 text-green-700 hover:bg-green-200'
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
              <p className="text-xl text-gray-600">No student blog posts found matching your criteria.</p>
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
                        post.category === 'academics' ? 'bg-blue-100 text-blue-800' :
                        post.category === 'student-life' ? 'bg-green-100 text-green-800' :
                        post.category === 'achievements' ? 'bg-yellow-100 text-yellow-800' :
                        post.category === 'activities' ? 'bg-purple-100 text-purple-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                      <span className="text-gray-500 text-sm ml-3">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">{post.author}</p>
                          <p className="text-xs text-gray-500">{post.grade}</p>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        <Calendar className="inline w-4 h-4 mr-1" />
                        {formatDate(post.date)}
                      </div>
                    </div>
                    
                    {/* Engagement Stats */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{post.comments}</span>
                        </div>
                      </div>
                      <button className="text-green-600 hover:text-green-700 transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Share Your Story</h2>
          <p className="text-lg text-gray-600 mb-8">
            Are you a student with an interesting story to share? We'd love to hear about your experiences, 
            achievements, or insights. Contact your class teacher to submit your blog post.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300"
          >
            <ArrowRight className="mr-2 h-5 w-5" />
            Back to Main Blog
          </Link>
        </div>
      </section>
    </div>
  );
};

export default StudentBlog; 