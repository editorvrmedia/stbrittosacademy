import React, { useState } from 'react';
import { Eye, EyeOff, User, Lock, Calendar, BookOpen, MessageSquare, FileText } from 'lucide-react';

const ParentPortal = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login process
    if (loginData.username && loginData.password) {
      setIsLoggedIn(true);
    } else {
      alert('Please enter both username and password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginData({ username: '', password: '' });
  };

  // Mock data for logged-in view
  const studentData = {
    name: 'Emma Johnson',
    grade: '10th Grade',
    studentId: 'EA2024-0157',
    homeroom: 'Ms. Rodriguez - Room 205'
  };

  const recentGrades = [
    { subject: 'Mathematics', assignment: 'Algebra Quiz #3', grade: 'A-', date: '2024-01-15' },
    { subject: 'English Literature', assignment: 'Essay: Shakespeare Analysis', grade: 'B+', date: '2024-01-12' },
    { subject: 'Chemistry', assignment: 'Lab Report: Acids & Bases', grade: 'A', date: '2024-01-10' },
    { subject: 'History', assignment: 'Civil War Project', grade: 'A-', date: '2024-01-08' }
  ];

  const upcomingEvents = [
    { date: '2024-02-15', event: 'Parent-Teacher Conference', time: '3:00 PM' },
    { date: '2024-02-18', event: 'Science Fair Presentation', time: '10:00 AM' },
    { date: '2024-02-22', event: 'Spring Break Begins', time: 'All Day' },
    { date: '2024-03-01', event: 'Semester Exams Begin', time: '8:00 AM' }
  ];

  const messages = [
    {
      from: 'Ms. Rodriguez (Homeroom)',
      subject: 'Weekly Update',
      date: '2024-01-16',
      preview: 'Emma has shown excellent progress this week...'
    },
    {
      from: 'Mr. Chen (Mathematics)',
      subject: 'Extra Credit Opportunity',
      date: '2024-01-14',
      preview: 'There is an optional math competition coming up...'
    },
    {
      from: 'School Administration',
      subject: 'Spring Break Reminder',
      date: '2024-01-12',
      preview: 'Just a reminder that spring break begins on...'
    }
  ];

  if (!isLoggedIn) {
    return (
      <div className="pt-20 min-h-screen bg-sky-50">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-slate-700 to-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">Parent Portal</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Access your child's academic progress, attendance records, and communicate with teachers through our secure parent portal.
            </p>
          </div>
        </section>

        {/* Login Form */}
        <section className="py-16">
          <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center mb-8">
                <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8 text-slate-600" />
                </div>
                <h2 className="text-2xl font-bold text-blue-900">Login to Your Account</h2>
                <p className="text-blue-700 mt-2">Enter your credentials to access the parent portal</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-blue-800 mb-2">
                    Username
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={loginData.username}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your username"
                    />
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-400" />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-blue-800 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={loginData.password}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-12 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your password"
                    />
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-400" />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-400 hover:text-blue-600"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-slate-600 focus:ring-slate-500" />
                    <span className="ml-2 text-sm text-blue-700">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-slate-600 hover:text-slate-700">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-700 hover:bg-slate-800 text-white py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Sign In
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-center text-sm text-blue-700">
                  Don't have an account?{" "}
                  <a href="/contact" className="text-blue-900 hover:underline font-medium">
                    Contact the school
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Preview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-blue-900 mb-4">Portal Features</h2>
              <p className="text-xl text-blue-700">Everything you need to stay connected with your child's education</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: BookOpen,
                  title: 'Grades & Progress',
                  description: 'View real-time grades, assignments, and academic progress reports'
                },
                {
                  icon: Calendar,
                  title: 'Attendance',
                  description: 'Monitor daily attendance and view detailed attendance history'
                },
                {
                  icon: MessageSquare,
                  title: 'Teacher Communication',
                  description: 'Direct messaging with teachers and school staff'
                },
                {
                  icon: FileText,
                  title: 'School Documents',
                  description: 'Access important forms, reports, and school announcements'
                }
              ].map((feature, index) => (
                <div key={index} className="text-center p-6 bg-sky-50 rounded-xl">
                  <feature.icon className="h-12 w-12 text-blue-700 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{feature.title}</h3>
                  <p className="text-blue-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Logged-in dashboard view
  return (
    <div className="pt-20 min-h-screen bg-sky-50">
      {/* Dashboard Header */}
      <section className="bg-slate-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Welcome back, Parent!</h1>
              <p className="text-slate-200 mt-2">Here's an overview of {studentData.name}'s progress</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-slate-600 hover:bg-slate-800 px-6 py-2 rounded-lg transition-colors duration-300"
            >
              Sign Out
            </button>
          </div>
        </div>
      </section>

      {/* Student Info Card */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex items-center">
              <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mr-6">
                <User className="h-8 w-8 text-slate-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-blue-900">{studentData.name}</h2>
                <p className="text-blue-700">{studentData.grade} • ID: {studentData.studentId}</p>
                <p className="text-blue-700">{studentData.homeroom}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Recent Grades */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
                  <BookOpen className="h-6 w-6 mr-2" />
                  Recent Grades
                </h3>
                <div className="space-y-3">
                  {recentGrades.map((grade, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-sky-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-blue-900">{grade.subject}</h4>
                        <p className="text-blue-700 text-sm">{grade.assignment}</p>
                        <p className="text-blue-600 text-xs">{grade.date}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        grade.grade.startsWith('A') ? 'bg-green-100 text-green-800' :
                        grade.grade.startsWith('B') ? 'bg-blue-100 text-blue-800' :
                        grade.grade.startsWith('C') ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {grade.grade}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Messages */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
                  <MessageSquare className="h-6 w-6 mr-2" />
                  Recent Messages
                </h3>
                <div className="space-y-3">
                  {messages.map((message, index) => (
                    <div key={index} className="p-4 bg-sky-50 rounded-lg hover:bg-sky-100 cursor-pointer">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-blue-900">{message.from}</h4>
                          <p className="text-sm text-blue-700 font-medium">{message.subject}</p>
                          <p className="text-sm text-blue-600 mt-1">{message.preview}</p>
                        </div>
                        <span className="text-xs text-blue-500">{message.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              
              {/* Upcoming Events */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center">
                  <Calendar className="h-6 w-6 mr-3 text-slate-600" />
                  Upcoming Events
                </h3>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="border-l-4 border-slate-500 pl-4">
                      <p className="font-semibold text-blue-900">{event.event}</p>
                      <p className="text-sm text-blue-700">{event.date}</p>
                      <p className="text-sm text-blue-600">{event.time}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-6">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full text-left p-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors duration-300">
                    Download Report Card
                  </button>
                  <button className="w-full text-left p-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors duration-300">
                    Schedule Conference
                  </button>
                  <button className="w-full text-left p-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors duration-300">
                    Update Contact Info
                  </button>
                  <button className="w-full text-left p-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors duration-300">
                    View Attendance Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParentPortal;