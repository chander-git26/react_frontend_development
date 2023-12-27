import React from 'react'

const LoginSidecontent = () => {
  return (
    <div className='hidden lg:flex w-2/5 flex-col gap-6 relative'>
        <h1 className='text-6xl '>Health <br></br>  <span className='font-bold text-blue-600'>Insurance</span> <br /></h1>
        <p className='text-xl text-gray-600'>
           starting at ₹16/Day
        </p>
        <h1 className='font-bold text-white bg-blue-600 w-36 text-center py-1 rounded-full'>Our Services</h1>
        <h1 className='  w-auto  font-semibold text-sm'>
        <i className="bi text-blue-700 bi-check-square-fill mr-2"></i> Free health check-up within 60 days of  Renewal
        </h1>
        <h1 className='  w-auto  font-semibold text-sm'>
        <i className="bi text-blue-700 bi-check-square-fill mr-2"></i> Upto ₹75,000 TAX BENIFIT
        </h1>
        <h1 className='  w-auto  font-semibold text-sm'>
        <i className="bi text-blue-700 bi-check-square-fill mr-2"></i> Nearly 10,000 Cashless Hospitals Network
        </h1>
        <h1 className='  w-auto  font-semibold text-sm'>
        <i className="bi text-blue-700 bi-check-square-fill mr-2"></i> 1 Claim Settled  Per Minute
        </h1>
        <div className="div w-1/2 absolute right-0 -bottom-3 ">
          <img src="https://media.istockphoto.com/id/1457308716/vector/family-health-care-and-life-insurance-concept-group-people-and-shield-protection-with.jpg?s=1024x1024&w=is&k=20&c=a3Ut4Aeo5-WVuWW6xjvgy-spnY0ZgQWUmPilfrNtChI=" alt="Login Bannger" />
        </div>
    </div>
  )
}

export default LoginSidecontent