import React, { useEffect } from 'react'
import RightDashboard from './rightSection/RightDashboard'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CompleteDetails from './CompleteDetails'
import { selectLoggedInUser } from '../auth/userSlice'
import { primarybtn } from '../../../utilities/styleclasses'

const Dashboard = () => {
    const userdata = useSelector(selectLoggedInUser)
 
  return (
    <div className='flex mx-12 flex-1 items-center justify-between '>
        
        {/* <div className='h-full'>
            SideMenu
        </div> */}
        <div className='  flex-1 flex flex-col justify-center items-center gap-6'>

            <h1 className='text-4xl font-bold '>
              Hello {userdata.firstName}
            </h1>
            Complete your details to get exciting Insurance policies 
            <Link to={'/fillform'} className={primarybtn}>Fill your Details</Link>
        
        </div>
        {/* <div className='h-full '>
            <RightDashboard/>
        </div> */}

       </div>
  )
}

export default Dashboard