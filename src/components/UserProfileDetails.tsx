import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";

const UserProfileDetails = () => {
  return (
    <>
      <div className="profile absolute top-[2rem] lg:top-[2rem] left-3 lg:left-[5rem] h-[70px] w-[90%] sm:w-[40rem] lg:w-[60rem] border-none bg-gray-800 rounded-xl">
        <FaUserCircle className='absolute left-2 top-[10px] h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16'/>
        <FaPencil className='absolute left-[50px] top-[10px] sm:left-[90px] lg:left-[70px]'/>
        <h3 className='text-gray-100 font-mono absolute left-28 sm:left-36 lg:left-44 top-[15px]'>Username</h3>
        <p className='text-gray-100 font-extralight text-sm absolute left-28 sm:left-36 lg:left-44 top-[40px]'>Unique Id</p>
        <button className="btn btn-outline text-white absolute right-2 sm:right-10 lg:right-12 top-[12px] px-2 py-2 ">Log Out</button>
      </div>
    </>
  )
}

export default UserProfileDetails