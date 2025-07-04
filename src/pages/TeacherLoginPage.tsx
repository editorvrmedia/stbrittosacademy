import React, { useRef } from 'react';

const TeacherLoginPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [userid, setUserid] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formRef.current) {
      (formRef.current.elements.namedItem('userid') as HTMLInputElement).value = userid;
      (formRef.current.elements.namedItem('password') as HTMLInputElement).value = password;
      formRef.current.submit();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md flex flex-col items-center">
        <img src="/SBA.png" alt="SBA Logo" className="h-20 mb-4" />
        <h2 className="text-2xl font-bold text-blue-900 mb-2">Teacher Login</h2>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <input
            type="text"
            name="userid"
            placeholder="Teacher ID"
            value={userid}
            onChange={e => setUserid(e.target.value)}
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
          action="https://erp.stbrittosacademy.edu.in/evarsitysbi/usermanager/loginManager/youLogin.jsp"
          method="POST"
          style={{ display: 'none' }}
        >
          <input type="hidden" name="userid" />
          <input type="hidden" name="password" />
        </form>
      </div>
    </div>
  );
};

export default TeacherLoginPage; 