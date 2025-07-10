import React, { useState } from 'react';

const OnlineApplicationForm = () => {
  const [form, setForm] = useState({
    school: 'ST. BRITTO’S ACADEMY',
    class: 'XII',
    name: '',
    dob: '',
    mobile: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setForm({
      school: 'ST. BRITTO’S ACADEMY',
      class: 'XII',
      name: '',
      dob: '',
      mobile: '',
      email: ''
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Application submitted!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/public/bg-pattern.png')] bg-repeat bg-[#f9e7c2] py-8 px-2">
      <form onSubmit={handleSubmit} className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-10 flex flex-col items-center">
        <div className="w-full flex justify-center items-center mb-4">
          <img src="/LOGOS/SBA.png" alt="St. Britto's Academy Logo" className="h-36" />
        </div>
        <h2 className="text-xl font-bold text-center text-blue-900 mb-8">ONLINE APPLICATION (2025-2026)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-6 w-full items-center">
          <label className="text-gray-700 font-medium">School applying for*</label>
          <select name="school" value={form.school} onChange={handleChange} className="border rounded px-2 py-1 w-full">
            <option>ST. BRITTO’S ACADEMY</option>
          </select>
          <label className="text-gray-700 font-medium">Class applying for*</label>
          <select name="class" value={form.class} onChange={handleChange} className="border rounded px-2 py-1 w-full">
            <option>XII</option>
            <option>XI</option>
            <option>X</option>
            <option>IX</option>
            <option>VIII</option>
            <option>VII</option>
            <option>VI</option>
            <option>V</option>
            <option>IV</option>
            <option>III</option>
            <option>II</option>
            <option>I</option>
            <option>UKG</option>
            <option>LKG</option>
            <option>Pre-KG</option>
            <option>PG</option>
          </select>
          <label className="text-gray-700 font-medium">Name of the Applicant (As per valid ID Proof)*</label>
          <input name="name" value={form.name} onChange={handleChange} className="border rounded px-2 py-1 w-full" required />
          <label className="text-gray-700 font-medium">Date of Birth<span className="text-red-600">[DD-MM-YYYY]</span> *</label>
          <input name="dob" value={form.dob} onChange={handleChange} className="border rounded px-2 py-1 w-full" type="date" required />
          <label className="text-gray-700 font-medium">Father/Mother/Guardian Mobile No.*</label>
          <input name="mobile" value={form.mobile} onChange={handleChange} className="border rounded px-2 py-1 w-full" required />
          <label className="text-gray-700 font-medium">Father/Mother/Guardian Email-Id*</label>
          <input name="email" value={form.email} onChange={handleChange} className="border rounded px-2 py-1 w-full" type="email" required />
        </div>
        <div className="flex gap-4 mt-8 justify-center">
          <button type="submit" className="bg-blue-900 text-white px-8 py-2 rounded font-bold">Apply</button>
          <button type="button" className="bg-blue-900 text-white px-8 py-2 rounded font-bold" onClick={handleReset}>Reset</button>
          <button type="button" className="bg-blue-900 text-white px-8 py-2 rounded font-bold" onClick={() => window.history.back()}>Back</button>
        </div>
      </form>
    </div>
  );
};

export default OnlineApplicationForm; 