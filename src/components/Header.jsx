import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { primarybtn } from '../utilities/styleclasses'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser, selectLoggedInUser } from './features/auth/userSlice'
import './features/dashboard/rightSection/pie.css'
import ProfileCard from './features/dashboard/rightSection/ProfileCard'

function Header() {

    const userstatus = useSelector(selectLoggedInUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logoutHandler = () => {
        dispatch(logoutUser())
        navigate('/')
    }
    const formstatus = '39 61'

    return (
        <div className='border border-l-pink-300 shadow-md mx-auto w-full'>
            <div className="container flex justify-between m-auto h-[100px] items-center ">
                <Link to={'/'}>
                    <div className="logo flex items-center gap-3">
                        <img src="https://cosglobal.in/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-22-at-18.18.56.jpeg" alt="" className='w-12' />
                        <h1 className='text-lg font-bold'>COS INSURANCE</h1>
                    </div>
                </Link>


                {
                    !userstatus ?

                        <div className='flex gap-6'>
                            <Link to={'/login'}>
                                <button className={primarybtn}>Login </button>
                            </Link>
                            <Link to={'/'}>
                                <button className={primarybtn}>Sign Up </button>
                            </Link>
                        </div>
                        :
                        <div className='flex justify-center items-center gap-4 border border-gray-100 p-2 relative  px-5 rounded-lg shadow-lg'>
                            <div className='h-2/6 w-full flex justify-center gap-2 items-center rounded-2xl'>
                               {/* <img src='https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg' className='rounded-full scale-100 w-12'/> */}
                                
                                <svg className="h-11 w-11 flex justify-center items-center ">
                                    <circle className="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#fff"></circle>
                                    <circle className="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="6"></circle>
                                    <circle className="donut-segment" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="6" stroke-dasharray={`${formstatus}`} stroke-dashoffset="25"></circle>
                                    <g className="donut-text">
                                    </g>
                                </svg>
                                <div>
                                    <h1 className='text-sm font-bold'>{userstatus.lastName}</h1>
                                </div>

                            </div>
                            <button className={primarybtn+''} onClick={() => { logoutHandler() }}><i class="bi bi-box-arrow-right"></i></button>
                           
                        </div>

                }


            </div>
        </div>
    )
}

export default Header