import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, ArrowRight, Filter, Search } from 'lucide-react';
import ErrorBoundary from '../ErrorBoundary';

const UpcomingEvents = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'academic', name: 'Academic' },
    { id: 'assemblies', name: 'Assemblies' },
    { id: 'cultural', name: 'Cultural' },
    { id: 'sports', name: 'Sports' },
    { id: 'competition', name: 'Competitions' },
    { id: 'celebration', name: 'Celebrations' }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Young Forum /Royal Gridlock (KG & Primary)',
      description: 'Young Forum event for Kindergarten and Primary students along with Royal Gridlock activities.',
      date: '2025-07-25',
      time: '09:00 AM - 03:00 PM',
      location: 'School Ground & Classrooms',
      categories: ['competition'],
      image: '/BYC/RGL.png', // Use RGL image
      organizer: 'School Administration',
      expectedAttendance: 'KG & Primary students',
      registrationDeadline: '2025-07-20',
      isFree: true
    },
    {
      id: 2,
      title: 'Young Forum / Royal Gridlock (Middle, Secondary & Senior Secondary)',
      description: 'Young Forum event for Middle, Secondary and Senior Secondary students along with Royal Gridlock activities.',
      date: '2025-07-26',
      time: '09:00 AM - 03:00 PM',
      location: 'School Ground & Classrooms',
      categories: ['competition'],
      image: '/BYC/RGL.png', // Use RGL image
      organizer: 'School Administration',
      expectedAttendance: 'Middle, Secondary & Senior Secondary students',
      registrationDeadline: '2025-07-21',
      isFree: true
    },
    {
      id: 3,
      title: 'Asset (Girls)',
      description: 'Asset assessment and competition for female students.\n\nNote: The venue for this event has been changed to A M Jain College Ground, Meenambakkam.',
      date: '2025-08-23',
      time: '09:00 AM - 12:00 PM',
      location: 'A M Jain College Ground, Meenambakkam',
      categories: ['competition', 'sports'],
      image: '/BYC/Asset.png', // Use local Asset image
      organizer: 'Sports Department',
      expectedAttendance: 'Female students',
      registrationDeadline: '2025-08-20',
      isFree: true
    },
    {
      id: 4,
      title: 'Asset (Boys)',
      description: 'Asset assessment and competition for male students.\n\nNote: The venue for this event has been changed to A M Jain College Ground, Meenambakkam.',
      date: '2025-08-30',
      time: '09:00 AM - 12:00 PM',
      location: 'A M Jain College Ground, Meenambakkam',
      categories: ['competition', 'sports'],
      image: '/BYC/Asset.png', // Use local Asset image
      organizer: 'Sports Department',
      expectedAttendance: 'Male students',
      registrationDeadline: '2025-08-27',
      isFree: true
    },
    {
      id: 5,
      title: 'Asset - Splash (Swimming Meet)',
      description: 'Asset swimming competition and meet for students.',
      date: '2025-10-25',
      time: '09:00 AM - 04:00 PM',
      location: 'School Swimming Pool',
      categories: ['competition', 'sports'],
      image: '/BYC/Splash.png', // Use local Splash image
      organizer: 'Physical Education Department',
      expectedAttendance: 'All students',
      registrationDeadline: '2025-10-20',
      isFree: true
    }
  ];

  const filteredEvents = upcomingEvents.filter(event => {
    const matchesCategory = selectedCategory === 'all' || (event.categories && event.categories.includes(selectedCategory));
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getDaysUntilEvent = (dateString: string) => {
    const eventDate = new Date(dateString);
    const today = new Date();
    const diffTime = eventDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'academic': return 'bg-blue-100 text-blue-800';
      case 'cultural': return 'bg-purple-100 text-purple-800';
      case 'sports': return 'bg-green-100 text-green-800';
      case 'competition': return 'bg-yellow-100 text-yellow-800';
      case 'celebration': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Upcoming Events</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Stay updated with all the exciting events, competitions, and celebrations happening at St. Britto's Academy. 
            Mark your calendars and don't miss out on these amazing opportunities!
          </p>
          
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/gallery"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center"
            >
              <ArrowRight className="h-5 w-5 mr-2 rotate-180" />
              Back to Gallery
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
                placeholder="Search upcoming events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
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
                      ? 'bg-purple-600 text-white'
                      : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No upcoming events found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => {
                const daysUntil = getDaysUntilEvent(event.date);
                return (
                  <div key={event.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="relative">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-80 h-80 object-contain mx-auto mb-4 rounded shadow"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(event.categories[0])}`}>
                          {categories.find(cat => cat.id === event.categories[0])?.name}
                        </span>
                      </div>
                      {daysUntil > 0 && (
                        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {daysUntil} day{daysUntil !== 1 ? 's' : ''} left
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {event.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {event.description}
                      </p>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="h-4 w-4 mr-2 text-purple-600" />
                          <span className="font-semibold">{formatDate(event.date)}</span>
                        </div>
                        
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="h-4 w-4 mr-2 text-purple-600" />
                          <span>{event.location}</span>
                        </div>
                        
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="h-4 w-4 mr-2 text-purple-600" />
                          <span>{event.expectedAttendance}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="text-sm text-gray-500">
                          Organized by: <span className="font-semibold">{event.organizer}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex gap-2">
                        <a
                          href="https://drive.google.com/file/d/1bxpR5PmPImzSTYO70LnwpC5AZXPH-FxD/view?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 text-center"
                        >
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Connected</h2>
          <p className="text-lg text-gray-600 mb-8">
            Don't miss out on any events! Subscribe to our newsletter to receive updates about upcoming events, 
            registration deadlines, and important announcements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpcomingEvents; 