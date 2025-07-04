import React, { useRef } from 'react';

const today = new Date().toLocaleDateString('en-GB', {
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
});

const StudentLoginPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [usercode, setUsercode] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Set values and submit the hidden form
    if (formRef.current) {
      (formRef.current.elements.namedItem('usercode') as HTMLInputElement).value = usercode;
      (formRef.current.elements.namedItem('password') as HTMLInputElement).value = password;
      formRef.current.submit();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md flex flex-col items-center">
        <img src="/SBA.png" alt="SBA Logo" className="h-20 mb-4" />
        <h2 className="text-2xl font-bold text-blue-900 mb-2">Student Login</h2>
        <div className="text-center text-blue-600 text-xs mb-6">{today}</div>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <input
            type="text"
            name="usercode"
            placeholder="Student ID"
            value={usercode}
            onChange={e => setUsercode(e.target.value)}
            required
            className="px-4 py-3 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            autoComplete="username"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className="px-4 py-3 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            autoComplete="current-password"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-700 text-white font-semibold text-lg shadow hover:bg-blue-800 transition-colors"
          >
            Login
          </button>
        </form>
        {/* Hidden form for direct POST to ERP */}
        <form
          ref={formRef}
          action="https://erp.stbrittosacademy.edu.in/schoolstudentportal/students/loginManager/youLogin.jsp"
          method="POST"
          style={{ display: 'none' }}
        >
          <input type="hidden" name="usercode" />
          <input type="hidden" name="password" />
        </form>
      </div>
    </div>
  );
};

export default StudentLoginPage; 