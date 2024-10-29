'use client'

import React, { useState } from 'react'
import Sidebar from "@/components/Sidebar"
import User_info from "@/components/User_info"
import Credentials from "@/components/Credentials"


import UserProfileDetails from "@/components/UserProfileDetails"

const page = () => {
 const [selectedTab,setSelectedTab]=useState<string>("Credentials")

  return (
    <>
    <div className='h-screen'>

  <div className=' border-none h-[50rem] w-3/4 md:h-3/4 md:2/4 lg:h-3/4 lg:w-3/4 rounded-xl absolute lg:top-20 md:left-44 md:top-16 left-12 top-24 flex flex-wrap items-center bg-gray-200 '>
          
         <UserProfileDetails/>

         <div className="settings">
         <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>

         <div className="bar_details border-none bg-gray-700 h-[24rem] sm:h-[24rem] md:h-[26rem] w-[22rem] sm:w-[40rem] md:w-[44rem] absolute left-2 lg:left-[21rem] sm:right-16 md:right-28  lg:top-28 top-[18rem] sm:top-24 md:top-28 rounded-lg">
  {selectedTab === "Your Profile" ? <User_info /> : <Credentials />}
</div>


        
         </div>
         
        </div>
    </div>
    </>
  )
}

export default page