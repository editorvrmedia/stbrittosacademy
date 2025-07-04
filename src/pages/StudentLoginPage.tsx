import React, { useEffect } from 'react';

const StudentLoginPage = () => {
  useEffect(() => {
    window.location.replace('https://erp.stbrittosacademy.edu.in/schoolstudentportal/students/loginManager/youLogin.jsp');
  }, []);
  return null;
};

export default StudentLoginPage; 