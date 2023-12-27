import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectLoggedInUser } from '../auth/userSlice'
import InitialDashboard from './InitialDashboard'

const Dashboard = () => {
    const userdata = useSelector(selectLoggedInUser)
 
  return (
    <div className='flex mx-12 flex-1 items-center justify-between '>
      <InitialDashboard/>
        
        {/* <div className='h-full'>
            SideMenu
        </div> */}
        
        {/* <div className='h-full '>
            <RightDashboard/>
        </div> */}

       </div>
  )
}

export default Dashboard