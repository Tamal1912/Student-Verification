import React from 'react'

const page = () => {
  return (
   <>
      <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="bg-black p-8 rounded-lg shadow-md w-96">
        <h2 className="text-white text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your last name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="degree">Degree</label>
            <input
              type="text"
              id="degree"
              className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your degree"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-white mb-2" htmlFor="dateOfBirth">Date of Birth</label>
            <input
              type="date"
              id="dateOfBirth"
              className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-black font-bold py-2 rounded hover:bg-sky-600 hover:text-white transition-colors duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
   </>
  )
}

export default page