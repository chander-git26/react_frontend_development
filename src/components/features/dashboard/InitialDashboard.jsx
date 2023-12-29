import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { primarybtn } from '../../../utilities/styleclasses'
import { useSelector } from 'react-redux'
import { selectLoggedInUser } from '../auth/userSlice'
import image from '../../../utilities/images/43282.jpg'


const InitialDashboard = () => {
    const userstatus = useSelector(selectLoggedInUser)


    return (
        <div className=' relative  flex-1 flex flex-col justify-center items-center gap-6'>
            <h1 className='text-2xl' > Hi <span className='font-bold text-blue-600'>{userstatus.firstname}</span></h1>

            <h1 className='text-3xl font-bold  text-center leading-10	'>
                You are at Rightplace to <br /> Get Best <br />
                <span className='text-blue-600 text-5xl'>Insurance policies</span>
            </h1>
            <div className='flex items-center  '>
                <div className='w-96'>
                    <img src={image} alt="" />
                </div>

            </div>
            <div className='flex flex-col flex-1 gap-5'>

                <p className='font-bold text-lg'>Complete your Profile</p>


                <Link to={'/fillform'} className={primarybtn + ' text-center'}> NOW {' >>'}</Link>
            </div>
            {/* <div className='absolute -bottom-  '>

            <svg xmlns="http://www.w3.org/2000/svg" version="1.1"  xlink="http://www.w3.org/1999/xlink"  width="1440" height="237" preserveAspectRatio="none" viewBox="0 0 1440 237">
                <g mask="url(&quot;#SvgjsMask1383&quot;)" fill="none">
                    <path d="M 0,86 C 96,73.4 288,20.6 480,23 C 672,25.4 768,91.2 960,98 C 1152,104.8 1344,65.2 1440,57L1440 237L0 237z" fill="rgba(10, 119, 255, 1)"></path>
                    <path d="M 0,180 C 144,175.4 432,150.4 720,157 C 1008,163.6 1296,201.8 1440,213L1440 237L0 237z" fill="rgba(37, 99, 235, 1)"></path>
                </g>
                <defs>
                    <mask id="SvgjsMask1383">
                        <rect width="1440" height="237" fill="#ffffff"></rect>
                    </mask>
                </defs>
            </svg>
            </div> */}
        </div>
    )
}

export default InitialDashboard