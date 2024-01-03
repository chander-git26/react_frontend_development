import React from 'react'
import UserDashboard from './userdshboard/UserDashboard'
import { Outlet } from 'react-router-dom'

const MainDashboard = () => {
  return (
    <div className=' flex-1  container mx-auto '>
        Hell
        
        <Outlet>
        </Outlet>
                
    </div>
  )
}

export default MainDashboard