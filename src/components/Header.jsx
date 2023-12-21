import React from 'react'
import { Link } from 'react-router-dom'
import { primarybtn } from '../utilities/styleclasses'

function Header() {
    
    return (
        <div className='border border-l-pink-300 shadow-md mx-auto w-full'>
            <div className="container flex justify-between m-auto h-[100px] items-center ">
                    <Link to={'/'}>
                <div className="logo flex items-center gap-3">
                    <img src="https://cosglobal.in/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-22-at-18.18.56.jpeg" alt="" className='w-12' />
                    <h1 className='text-lg font-bold'>COS INSURANCE</h1>
                </div>
                    </Link>
                <div className='flex gap-6'>
                    <Link to={'/login'}>
                    <button className={primarybtn}>Login </button>
                    </Link>
                    <Link to={'/'}>
                    <button className={primarybtn}>Sign Up </button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Header