import React from 'react'

const SideContent = () => {
  return (
    <div className='hidden lg:flex w-2/5 flex-col gap-6 relative'>
        <h1 className='text-6xl font-light '>Get the family <br></br> Health <span className='font-bold text-blue-600'>Insurance</span> <br /> today</h1>
        <p className='text-xl text-gray-600'>
            Family Health Insurance <br /> program starts from only <br /> <span className='font-bold text-black'>Rs. 499</span>  per month
        </p>
        <h1 className=' text-blue-700 w-auto  font-bold text-lg'>
          Register Now <i className='bi animate-pulse font-bold bi-arrow-right'></i>
        </h1>
        <div className="div w-1/3 absolute right-0 -bottom-3 ">
          <img src="https://static.vecteezy.com/system/resources/previews/006/230/322/large_2x/isometric-style-illustration-of-checking-valid-data-free-vector.jpg" alt="Signup Banner" />
        </div>
    </div>
  )
}

export default SideContent