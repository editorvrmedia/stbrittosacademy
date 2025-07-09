import React from 'react';

const CodeOfConduct = () => (
  <div className="min-h-screen bg-white">
    <div className="bg-blue-900 py-6 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-white text-center" style={{fontFamily: 'sans-serif'}}>Code of Conduct - St.Britto's Academy.</h1>
    </div>
    <div className="max-w-4xl mx-auto mt-16 px-4">
      <div className="flex items-center mb-8">
        <div className="flex-grow border-t border-blue-300"></div>
        <span className="mx-4 font-bold text-blue-800 text-lg" style={{fontFamily: 'sans-serif'}}>CODE OF CONDUCT</span>
        <div className="flex-grow border-t border-blue-300"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-blue-700 text-base" style={{fontFamily: 'sans-serif'}}>
        <ul className="list-disc pl-6 space-y-2">
          <li>Fee will be collected in three terms – April, September and January.</li>
          <li>Swimming is compulsory to every child from Std I. Swimming kit should be brought.</li>
          <li>Students should be punctual to the school.</li>
          <li>All students should come to school in clean and proper uniform on all working days.</li>
          <li>Damage done to buildings, walls, furniture, library books, lab equipment, sports goods etc , must be paid for at the discretion of the Principal / Correspondent.</li>
          <li>Students are advised not to bring any valuable articles to the school. The school will not be responsible for the loss of students belongings.</li>
          <li>All the students are responsible for their behaviour inside / outside the school. Any bad report / remark on the part of the students shall result in disciplinary action.</li>
        </ul>
        <ul className="list-disc pl-6 space-y-2">
          <li>Students suffering from contagious / infectious diseases should avoid coming to the school.</li>
          <li>Regular late – coming, frequent absence, negligence in wearing proper uniform and shoes and carelessness in studies will be viewed seriously.</li>
          <li>Promotion is entirely based on his / her attendance and academic performance.</li>
          <li>Students should bring the prescribed text – books and note – books according to the time table.</li>
          <li>Students should participate actively in all the school activities.</li>
          <li>Students should strictly adhere to the corrections and suggestions of the class teacher and the subject teachers for their own benefit.</li>
          <li>Applying for Transfer Certificate in the middle of the academic year is not encouraged.</li>
          <li>For further details visit: www.stbrittosacademy.edu.in</li>
        </ul>
      </div>
      <div className="mt-12 text-center">
        <div className="font-bold text-blue-700 text-lg mb-2" style={{fontFamily: 'sans-serif'}}>
          For further clarifications, feel free to mail us : Mail id: admin@stbrittosacademy.edu.in
        </div>
        <div className="font-bold text-blue-800 text-lg" style={{fontFamily: 'sans-serif'}}>
          Visit stbrittosacademy.edu.in for updates on events, news and school activities.
        </div>
      </div>
    </div>
  </div>
);

export default CodeOfConduct;