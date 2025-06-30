import React, { useState } from 'react';
import { FileText, Calendar, Users, CheckCircle, Clock, Phone, Mail, MapPin } from 'lucide-react';

const AdmissionsProcedure = () => {
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    school: 'ST. BRITTO`S ACADEMY',
    class: '',
    name: '',
    dob: '',
    mobile: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setForm({
      school: 'ST. BRITTO`S ACADEMY',
      class: '',
      name: '',
      dob: '',
      mobile: '',
      email: '',
    });
  };

  if (showForm) {
    return (
      <div className="w-full max-w-lg mx-auto px-4 py-12 bg-white rounded-lg shadow-md">
        <div className="flex flex-col items-center mb-6">
          <img src="/sba-logo.png" alt="St. Britto's Academy Logo" className="h-24 mb-2" />
          <h2 className="text-xl font-bold text-blue-800 text-center">ONLINE APPLICATION (2025-2026)</h2>
        </div>
        <form className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="font-semibold">School applying for<span className="text-red-500">*</span></label>
            <select name="school" value={form.school} onChange={handleChange} className="border rounded px-2 py-1 w-1/2">
              <option value="ST. BRITTO`S ACADEMY">ST. BRITTO`S ACADEMY</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <label className="font-semibold">Class applying for<span className="text-red-500">*</span></label>
            <select name="class" value={form.class} onChange={handleChange} className="border rounded px-2 py-1 w-1/2">
              <option value="">Select Class</option>
              <option value="Pre-KG">Pre-KG</option>
              <option value="LKG">LKG</option>
              <option value="UKG">UKG</option>
              <option value="I">I</option>
              <option value="II">II</option>
              <option value="III">III</option>
              <option value="IV">IV</option>
              <option value="V">V</option>
              <option value="VI">VI</option>
              <option value="VII">VII</option>
              <option value="VIII">VIII</option>
              <option value="IX">IX</option>
              <option value="XI">XI</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <label className="font-semibold">Name of the Applicant (As per valid ID Proof)<span className="text-red-500">*</span></label>
            <input name="name" value={form.name} onChange={handleChange} className="border rounded px-2 py-1 w-1/2" />
          </div>
          <div className="flex items-center justify-between">
            <label className="font-semibold">Date of Birth<span className="text-red-500">[DD-MM-YYYY]</span> *</label>
            <input name="dob" type="date" value={form.dob} onChange={handleChange} className="border rounded px-2 py-1 w-1/2" />
          </div>
          <div className="flex items-center justify-between">
            <label className="font-semibold">Father/Mother/Guardian Mobile No.<span className="text-red-500">*</span></label>
            <input name="mobile" value={form.mobile} onChange={handleChange} className="border rounded px-2 py-1 w-1/2" />
          </div>
          <div className="flex items-center justify-between">
            <label className="font-semibold">Father/Mother/Guardian Email-Id<span className="text-red-500">*</span></label>
            <input name="email" value={form.email} onChange={handleChange} className="border rounded px-2 py-1 w-1/2" />
          </div>
          <div className="flex justify-center gap-4 pt-4">
            <button type="button" className="bg-blue-900 text-white px-6 py-2 rounded" onClick={() => alert('Application submitted!')}>Apply</button>
            <button type="button" className="bg-blue-900 text-white px-6 py-2 rounded" onClick={handleReset}>Reset</button>
            <button type="button" className="bg-blue-900 text-white px-6 py-2 rounded" onClick={() => setShowForm(false)}>Back</button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-blue-700 mb-4 text-center">ONLINE APPLICATION PORTAL</h1>
      <p className="mb-4 text-center">Dear Applicant, Welcome to St.Britto's Group of Institutions Online Application Portal for the academic year 2025-2026.</p>
      <div className="mb-4 flex justify-center gap-2">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => setShowForm(true)}>NEW APPLICANT</button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">REGISTERED APPLICANT</button>
      </div>
      <h2 className="text-lg font-semibold mb-2 text-center">Steps to procure Online Application Form:</h2>
      <ol className="list-decimal list-inside mb-4 space-y-2">
        <li>
          <strong>Step 1: Register</strong>
          <ul className="list-disc list-inside ml-6">
            <li>Click "New Applicant" and register with your mobile number and email ID</li>
            <li>Ensure Name of the student and Date of Birth is as per valid ID proof</li>
            <li>Mobile Number is mandatory for online Application</li>
          </ul>
          <div className="mt-2">
            <strong>Age Criteria to Register</strong>
            <table className="min-w-full mt-2 mb-2 text-sm border mx-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-2 py-1">Class</th>
                  <th className="border px-2 py-1">Age Criteria</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-2 py-1">Pre-KG</td>
                  <td className="border px-2 py-1">Should complete three years by April 1st of the admission year.</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1">LKG</td>
                  <td className="border px-2 py-1">Should complete four years by April 1st of the admission year.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </li>
        <li>
          <strong>Step 2: Pay online</strong>
          <ul className="list-disc list-inside ml-6">
            <li>Pay the Application fee online using Debit/Credit card/Net banking/UPI</li>
            <li>Application Number, Unique user ID & password will be sent to the registered email ID / mobile number</li>
          </ul>
        </li>
        <li>
          <strong>Step 3: Submit</strong>
          <ul className="list-disc list-inside ml-6">
            <li>Submit the Online Application Form within 3 working days from the date of procurement.</li>
            <li>Log in using your unique user ID & password in the online portal home page or through the link received via email / SMS</li>
            <li>Fill in all the fields. Fields marked with * are mandatory</li>
            <li>Upload the Enclosures/Documents (file size should not exceed 200 KB; upload as .jpg/.gif,.jpeg,.png,.pdf only)</li>
          </ul>
          <div className="mt-2">
            <strong>Note:</strong> The uploaded documents will be auto saved as applicant name_attachment type
            <ul className="list-disc list-inside ml-6 mt-1">
              <li>Recent Passport size photograph*</li>
              <li>Birth Certificate*</li>
              <li>Residential Proof</li>
              <li>Parent's Employment ID Card /Business Card</li>
              <li>Community Certificate (mandatory for communities other than General)</li>
              <li>Applicant Aadhaar Card</li>
              <li>Recent Report card/Mark statement/Equivalence Certificate</li>
              <li>Passport and Visa (For Foreign Nationals only)</li>
              <li>OCI/PIO Card (For Foreign Nationals only)</li>
              <li>Medical Certificate / Doctor's prescription (For medical ailments, if any)</li>
            </ul>
          </div>
          <ul className="list-disc list-inside ml-6 mt-2">
            <li>You may not be allowed to edit the Application after final submission. Print the Application Form for reference</li>
            <li><strong>Note:</strong> Online Application Form is non-transferable, non-refundable and the unique Application number is not valid for any other current year or in future. Incomplete Application Form will not be processed.</li>
          </ul>
          <div className="mt-2">
            <strong>Instructions to Compress Enclosures/Documents</strong>
            <p className="text-xs mt-1">To compress all pictures of Enclosures/Documents of size less than 200KB, Open Microsoft Office Picture Manager &gt; Select Picture &gt; Compress Pictures &gt; Select compress for Web pages and click OK. Save the file.</p>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default AdmissionsProcedure;