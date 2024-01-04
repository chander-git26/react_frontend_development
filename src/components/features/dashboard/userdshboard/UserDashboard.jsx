import React from 'react'
import { Outlet } from 'react-router-dom'

const UserDashboard = () => {
  return (
    <div className='flex h-full'>

      <div>
        <div className='border'>
          <img  className='w-28' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="Userprofile pic" />
          <h1>Rakesh</h1>
        </div>
        </div>       
        <div>
          UserMain
        </div>
    </div>
  )
}

export default UserDashboard