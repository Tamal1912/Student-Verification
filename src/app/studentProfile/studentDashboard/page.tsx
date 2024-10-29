import React from 'react';
import StudentDash from '@/components/StudentDash';

const StudentDashboard = () => {
  return (
      <div className="min-h-screen bg-gradient-to-r from-gray-300 via-teal-100 to-[#20B2AA] flex justify-center items-center">
 <div className="h-[50rem] w-full dark:bg-black   dark:bg-dot-white/[0.2] bg-dot-black/[0.5] relative flex items-center justify-center">
 <StudentDash/>
      
      </div>
    </div>
    
  );
};

export default StudentDashboard;
