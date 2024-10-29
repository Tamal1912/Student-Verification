import React from 'react'
import Link from 'next/link'

const Profile = () => {
  return (
    <div className="w-full sm:w-64 p-6 bg-gradient-to-br from-slate-400 to-gray-600 shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300">
    <h4 className="font-bold text-xl text-white">

      Profile
    </h4>
    <button className="mt-6 w-full py-2 bg-white text-zinc-900 font-semibold rounded-lg shadow-md hover:bg-black hover:text-white transition-all duration-300">
     Visit
    </button>
  </div>
  )
}

export default Profile