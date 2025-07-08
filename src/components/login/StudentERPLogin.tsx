import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const StudentERPLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-4"
      style={{ backgroundImage: 'url(\"/SBA Building.jpg\")' }}
    >
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col justify-center p-8">
        <div className="text-center mb-8">
          <img src="/LOGOS/SBA.png" alt="SBA Logo" className="h-28 w-auto mx-auto mb-3" />
          <h2 className="text-3xl font-bold text-[#003262] mb-2">ST BRITTO'S ACADEMY</h2>
          <p className="text-blue-700 text-sm font-semibold mb-2">eVarsity ERP for Education</p>
          <h3 className="text-xl font-bold text-blue-900 mb-1">Student Login</h3>
        </div>
        <form
          action="https://erp.stbrittosacademy.edu.in/schoolstudentportal/students/loginManager/youLogin.jsp"
          method="POST"
          className="space-y-4"
        >
          <div>
            <label htmlFor="usercode" className="block text-sm font-medium text-blue-800 mb-1">User Code</label>
            <input
              type="text"
              id="usercode"
              name="usercode"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your User Code"
              required
              autoComplete="username"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-blue-800 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10"
                placeholder="Enter your password"
                required
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-700 focus:outline-none"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            <p className="mt-2 text-xs text-blue-600">
              If you are a first login, you must use your Son / Daughter Admission number as your User ID, with your Son / Daughter date of birth [Format ddmmyyyy E.g. 03121990] as your password.
            </p>
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-blue-300 rounded"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember-me" className="ml-2 block text-blue-800">Remember me</label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentERPLogin; 