import React from 'react'

const User_info = () => {
  return (
    <>
     <div className='user_content py-7 pl-6'>
            <label className='pr-3' >Change Username</label>
            <input className='rounded-md py-3 text-center px-8 relative left-[3rem] lg:left-10 ' type="text" placeholder='Change Username'/>
              
            <label className='pr-3 absolute top-24 left-[1.6rem] mt-2' >Change Password</label>
            <input className='rounded-md py-3 px-8 text-center absolute top-[8rem] lg:top-20 left-[4.5rem] lg:left-[13.1rem]' type="text" placeholder='Change Password'/>

             </div>
    </>
  )
}

export default User_info