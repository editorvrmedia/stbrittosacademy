import React from 'react';
import { Link } from 'react-router-dom';

const OnlineAdmissionProcedure = () => (
  <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100 flex flex-col items-center py-12 px-2">
    {/* Card Container */}
    <div className="w-full max-w-5xl rounded-3xl shadow-2xl bg-white border border-yellow-200 overflow-hidden">
      {/* Header Bar */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img src="/LOGOS/SBA LOGO FOR WEBSITE DOWN.png" alt="St. Britto's Academy Logo" className="h-14 drop-shadow" />
        </div>
        <div className="flex gap-2">
          <img src="/public/tuv.png" alt="TUV" className="h-10" />
          <img src="/public/nabcb.png" alt="NABCB" className="h-10" />
          <img src="/public/iaf.png" alt="IAF" className="h-10" />
        </div>
      </div>
      {/* Portal Title & Buttons */}
      <div className="px-8 pt-8 pb-4 text-center">
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-2 tracking-tight">ONLINE APPLICATION PORTAL</h1>
        <p className="text-base text-gray-700 mb-6">Dear Applicant, Welcome to St.Britto's Group of Institutions Online Application Portal for the academic year <span className="font-bold">2025-2026</span>.</p>
        <div className="flex flex-col sm:flex-row w-full gap-4 mb-4 justify-center">
          <Link
            to="/admissions/online-application-form"
            className="flex-1 bg-blue-900 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow transition-all duration-200 text-lg tracking-wide text-center"
          >
            NEW APPLICANT
          </Link>
          <button className="flex-1 bg-blue-900 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow transition-all duration-200 text-lg tracking-wide">REGISTERED APPLICANT</button>
        </div>
      </div>
      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent mb-8" />
      {/* Steps Box */}
      <div className="px-8 pb-10">
        <h2 className="text-xl font-semibold mb-4 text-blue-800">Steps to procure Online Application Form:</h2>
        <ol className="list-decimal list-inside mb-4 space-y-6 text-gray-900">
          <li>
            <span className="font-bold text-blue-900">Step 1: Register</span>
            <ul className="list-disc list-inside ml-6 text-base mt-1">
              <li>Click <span className="font-semibold text-blue-700">"New Applicant"</span> and register with your mobile number and email ID</li>
              <li>Ensure Name of the student and Date of Birth is as per valid ID proof</li>
              <li>Mobile Number is mandatory for online Application</li>
              <li>Age Criteria to Register</li>
            </ul>
            <div className="overflow-x-auto my-3">
              <table className="min-w-[300px] border text-sm rounded-lg overflow-hidden shadow">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="border px-3 py-2 text-blue-900 font-semibold">Class</th>
                    <th className="border px-3 py-2 text-blue-900 font-semibold">Age Criteria</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-yellow-50">
                    <td className="border px-3 py-2">Pre-KG</td>
                    <td className="border px-3 py-2">Should complete three years by April 1st of the admission year.</td>
                  </tr>
                  <tr className="hover:bg-yellow-50">
                    <td className="border px-3 py-2">LKG</td>
                    <td className="border px-3 py-2">Should complete four years by April 1st of the admission year.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
          <li>
            <span className="font-bold text-blue-900">Step 2: Pay online</span>
            <ul className="list-disc list-inside ml-6 text-base mt-1">
              <li>Pay the Application fee online using Debit/Credit card/Net banking/UPI</li>
              <li>Application Number, Unique user ID & password will be sent to the registered email ID / mobile number</li>
            </ul>
          </li>
          <li>
            <span className="font-bold text-blue-900">Step 3: Submit</span>
            <ul className="list-disc list-inside ml-6 text-base mt-1">
              <li>Submit the Online Application Form within 3 working days from the date of procurement.</li>
              <li>Log in using your unique user ID & password in the online portal home page or through the link received via email / SMS</li>
              <li>Fill in all the fields. Fields marked with * are mandatory</li>
              <li>Upload the Enclosures/Documents (file size should not exceed 200 KB; upload as .jpg/.gif,.jpeg,.png,.pdf only)</li>
            </ul>
            <div className="mt-3">
              <span className="font-bold text-blue-800">Note:</span> <span className="text-gray-700">The uploaded documents will be auto saved as applicant name_attachment type</span>
              <ul className="list-disc list-inside ml-6 mt-1 text-base">
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
            <ul className="list-disc list-inside ml-6 mt-2 text-base">
              <li>You may not be allowed to edit the Application after final submission. Print the Application Form for reference</li>
              <li><span className="font-bold text-blue-800">Note:</span> <span className="text-gray-700">Online Application Form is non-transferable, non-refundable and the unique Application number is not valid for any other current year or in future. Incomplete Application Form will not be processed.</span></li>
            </ul>
            <div className="mt-3">
              <span className="font-bold text-blue-800">Instructions to Compress Enclosures/Documents</span>
              <p className="text-xs mt-1 text-gray-600">To compress all pictures of Enclosures/Documents of size less than 200KB, Open Microsoft Office Picture Manager &gt; Select Picture &gt; Compress Pictures &gt; Select compress for Web pages and click OK. Save the file.</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </div>
);

export default OnlineAdmissionProcedure; 