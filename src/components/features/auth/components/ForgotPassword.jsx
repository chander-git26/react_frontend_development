
import React, { useEffect, useState } from 'react'
import RequestPassword from './RequestPassword';
import CreatePassword from './CreatePassword';


const ForgotPassword = () => {

    const [authOtp,setAuthOtp]=useState(false)
    
  
 

    return (
        <>
        {
            authOtp?<CreatePassword/>:<RequestPassword setAuthOtp={setAuthOtp}/>
        }
        </>
    )

}

export default ForgotPassword