import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import UserFamily from './userDetails/UserFamily'
import UserMedical from './userDetails/UserMedical'
import UserProfession from './userDetails/UserProfession'
import UserPersonal from './userDetails/UserPersonal'
import { selectLoggedInUser } from '../../auth/userSlice'
import { useSelector } from 'react-redux'

const UserDashboard = () => {
  const [page, setPage] = useState("personal");
  const userstatus = useSelector(selectLoggedInUser)

  



  const selectPage = (pageName) => {
    switch (pageName) {
      case "family":
        setPage("family");
        break;
      case "medical":
        setPage("medical");
        break;
      case "personal":
        setPage("personal");
        break;
      case "profession":
        setPage("profession");
        break;
      default:
        setPage("personal");
    }
  };

 


 
 
  // console.log(display);

  return (
    <div className='flex-1  container mx-auto'>

    <div className='flex h-full'>

    
      <div className='border px-8'>
        <div className='flex flex-col justify-center items-center  gap-3 m-4'>
        <img className='w-28 rounded-full' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="Userprofile pic" />
        <h1 className='font-bold'>{userstatus.firstname} {userstatus.lastname}</h1>

        </div>
        <div className='flex flex-col font-medium items-start'>
          <button onClick={() => selectPage("personal")} className={page==='personal'?"font-bold text-blue-600":null}> My Profile</button>
          <button onClick={() => selectPage("family")} className={page==='family'?"font-bold text-blue-600":null}> My Family</button>
          <button onClick={() => selectPage("medical")} className={page==='medical'?"font-bold  text-blue-600":null}> My Medical</button>
          <button onClick={() => selectPage("profession")} className={page==='profession'?"font-bold  text-blue-600":null}> My Profession</button>
        </div>
      </div>
    <div>
 
      {
        {
          family: <UserFamily/>,
          medical: <UserMedical />,
          personal: <UserPersonal/>,
          profession: <UserProfession/>,
        }[page]
      }

    </div> 




    </div>
      </div>
  )
}

export default UserDashboard