import React, { useEffect } from 'react'
import RightDashboard from './rightSection/RightDashboard'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Dashboard = () => {
    const userdata = useSelector(state=>state.userdata.userinfo)

    const nav = useNavigate()
    // useEffect(()=>{
    //     if(!userdata){
    //         nav('/')
    //     }
    // },[])
  return (
    <div className='flex mx-12 flex-1 items-center justify-between '>
        
        {/* <div className='h-full'>
            SideMenu
        </div> */}
        <div className='h-full flex-1 '>
            Complete the profile
        </div>
        {/* <div className='h-full '>
            <RightDashboard/>
        </div> */}

       </div>
  )
}

export default Dashboard