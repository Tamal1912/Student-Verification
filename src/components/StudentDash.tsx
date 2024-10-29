import React from 'react'
import Profile from './StudentsDashItems/Profile'
import UploadDoc from './StudentsDashItems/UploadDoc'
import VerificationStatus from './StudentsDashItems/VerificationStatus'
import CredUpload from './StudentsDashItems/CredUpload'

const StudentDash = () => {
  return (
    <div className="w-10/12 md:w-8/12 lg:w-7/12 bg-gray-200 shadow-2xl rounded-lg p-6 max-h-[750px] flex flex-col justify-center">
        <h2 className="text-center text-3xl md:text-4xl  text-gray-900 mb-8 font-bold font-mono">Student Dashboard</h2>

        
        <div className="flex flex-wrap gap-8 justify-center">
          
        <Profile/>
        <UploadDoc/>
        <CredUpload/>
        <VerificationStatus/> 

        </div>
      </div>
  )
}

export default StudentDash