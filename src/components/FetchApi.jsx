import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

const FetchApi = () => {
    const name = useRef()
    const lastname = useRef()
    const[data,setdata]=useState()
    const submitHandler = ()=>{
        let temp = {firstname:name.current.value,lastname:lastname.current.value};
        
        setdata(temp)
        posthandler(temp)
    }
    console.log(data);
    const posthandler = async(data)=>{
        
        await axios.post('http://localhost:8080/posts',data).then((res)=>{console.log(res);}) 
    }
    useEffect(async()=>{

    },[])
  return (
    <div className='flex-1 flex justify-center items-center'>
        <input type="text" ref={name} placeholder='name' />
        <input type="text" ref={lastname} placeholder='lastname' />
        <button onClick={()=>{submitHandler()}}className='border border-red-300 py-2 px-10'>Get</button>
    </div>
  )
}

export default FetchApi