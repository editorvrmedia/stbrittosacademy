import React, { useState } from 'react';

const today = new Date().toLocaleDateString('en-GB', {
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
});

const StudentLoginPage = () => {
  const [remember, setRemember] = useState(false);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/SBA Building.jpg')" }}>
      {/* Glassmorphism Login Card */}
      <div className="backdrop-blur-md bg-white/60 border border-white/30 shadow-2xl rounded-2xl p-8 md:p-12 w-full max-w-md md:max-w-lg flex flex-col items-center justify-center">
        <div className="flex flex-col items-center mb-6">
          <img src="/SBA.png" alt="St. Britto's Academy Logo" className="h-28 w-auto mb-3" />
          <h1 className="font-revue text-2xl md:text-3xl font-bold text-[#003262] tracking-wide text-center">St. Britto's Academy</h1>
          <p className="text-blue-700 text-sm md:text-base font-semibold mt-1 mb-2 text-center">eVarsity ERP for Education</p>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-blue-900 text-center mb-1">Student Login</h2>
        <div className="text-center text-blue-600 text-xs mb-6">{today}</div>
        <form className="space-y-4 w-full">
          <div>
            <label className="block text-blue-800 font-medium mb-1" htmlFor="student-id">Student ID</label>
            <input id="student-id" type="text" placeholder="Enter your Student ID" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:outline-none bg-white/80" />
          </div>
          <div>
            <label className="block text-blue-800 font-medium mb-1" htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Enter your password" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:outline-none bg-white/80" />
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={remember} onChange={() => setRemember(!remember)} className="accent-orange-500" />
              Remember me
            </label>
            <a href="#" className="text-orange-600 hover:underline">Forgot password?</a>
          </div>
          <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-lg shadow-md transition-colors">Login</button>
        </form>
      </div>
    </div>
  );
};

export default StudentLoginPage; 