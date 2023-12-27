import React, { useState } from 'react'
import './pie.css'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../auth/userSlice'
import { useNavigate } from 'react-router-dom'
import { primarybtn } from '../../../../utilities/styleclasses'

const ProfileCard = () => {
    const[displaycard,setDisplaycard]=useState(true)
    const userdata = useSelector(state=>state.userdata.userinfo)
    const formstatus = '25 75'
    const dispatch = useDispatch()
    const nav = useNavigate()


    const logoutHandler = () => {
        dispatch(logoutUser())
        nav('/')
    }
  return (
    <>
    {
        
        userdata && (<div className='w-64 h-64 p-5 border absolute flex flex-col justify-between z-30 bg-white items-center -bottom-64 rounded-2xl' >
        <div>
            <img className=' w-24' src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png" alt="" />
            <h1 className='text-center font-semibold'>{userdata.firstName}</h1>
        </div>
            {/* <div className='h-2/6 w-full flex justify-center gap-2 items-center border rounded-2xl'>
       
            <svg   className="h-11 w-11 ">
                <circle className="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#fff"></circle>
                <circle className="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="6"></circle>
                <circle className="donut-segment" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="6" stroke-dasharray={`${formstatus}`} stroke-dashoffset="25"></circle>
                <g className="donut-text">

              
                </g>
            </svg>
            <div>
                <h1 className='text-sm font-bold'>25% Completed</h1>
                <p className='text-xs'>Click to complete</p>
            </div>
                
            </div> */}
                            <button className={primarybtn} onClick={()=>{ logoutHandler() }}>Logout</button>
            
    </div>)
    }
    </>
    
  )
}

export default ProfileCard