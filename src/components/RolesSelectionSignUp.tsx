import React from 'react'
import Link from 'next/link'
const RolesSelectionLogin = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-black p-10 rounded-lg shadow-lg w-96 text-center">
        <h1 className="text-white text-3xl font-bold mb-6">Select Your Role</h1>
        <div className="flex flex-col space-y-4">
          <Link href={"/login/studentLogin"}>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105">
            <h2 className="text-white text-xl font-semibold mb-2">Login as Student</h2>
          </div>
            </Link>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105">
            <h2 className="text-white text-xl font-semibold mb-2">Login as Admin</h2>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default RolesSelectionLogin