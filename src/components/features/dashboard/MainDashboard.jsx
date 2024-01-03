import React from 'react'
import UserDashboard from './userdshboard/UserDashboard'
import { Outlet } from 'react-router-dom'
import UserInfo from './forms/userProfile/UserInfo'

const MainDashboard = () => {
  return (
    <div className=' flex-1  container mx-auto '>
     <UserDashboard/>
        
    
    </div>
  )
}

export default MainDashboard