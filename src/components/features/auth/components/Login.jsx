import React from 'react'
import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
 
import { Link, useNavigate } from 'react-router-dom';

import "bootstrap-icons/font/bootstrap-icons.css";
 import { useLazyGetUserDataQuery } from '../userService';
import { useDispatch, useSelector } from 'react-redux';
import { addUserData, selectLoggedInUser } from '../userSlice';
import { inpLableSty,errorText, inputTextStyles2, inputTextStylesError } from '../../../../utilities/styleclasses';
import LoginSideconent from '../../../content/LoginSidecontent'




const Login = () => {


const userdata = useSelector(selectLoggedInUser)  

 const [authUser] = useLazyGetUserDataQuery()
console.log(userdata);

const dispatch = useDispatch()
const navigate = useNavigate()


 
    return (
        <div className='flex flex-1 items-center justify-center gap-16 '>
     <LoginSideconent/>
        {/* Form Section */}
        <div className='h-200px'>
          <div className='border px-6 py-3 rounded-2xl border-blue-100 shadow-blue-200 shadow-lg'>

            <Formik
              initialValues={{
                email: 'k.preetham@gmail.com',
                password: 'A@sdf1234',
              
              }}
              validationSchema={Yup.object({
                email: Yup.string().required()
      

              })}
              onSubmit={async (values) => {
                console.log(values);
                await authUser(values).then(res=>dispatch(addUserData(res.data.data)))
                
                navigate('/dashboard')
              }}
            >
              {formik => (
                <Form className='flex flex-col p-5 w-96 gap-8'>
                  <h1 className='text-center text-xl font-bold border-b-2 pb-2 self-center px-4 border-b-blue-600'>Login</h1>
                

                    <div className=" flex flex-col  relative  border-b-gray-400">
                      <label htmlFor="email" className={inpLableSty} >USERNAME</label>
                      <Field id="email" name="email" className={formik.touched.email && formik.errors.email ? inputTextStylesError : inputTextStyles2} placeholder="Enter Username" {...formik.getFieldProps('email')} />
                      {formik.touched.email && formik.errors.email ? (
                        <div className={errorText}><i class="bi bi-exclamation-circle"></i> {formik.errors.email}</div>
                      ) : null}
                      {/* {formik.touched.email && !formik.errors.email ? (
                        <div className={successText}><i class="bi bi-check-circle-fill"></i>  </div>
                      ) : null} */}
                    </div>
                  
                 

                   
             
                  <div className="flex flex-col  relative  border-b-gray-400">
                    <label htmlFor="password" className={inpLableSty}>PASSWORD</label>
                    <Field id="password" name="password" placeholder=" Enter password" type='password'  className={formik.touched.password && formik.errors.password ? inputTextStylesError : inputTextStyles2} />
                    {formik.touched.password && formik.errors.password ? (
                      <div className={`${errorText} -bottom-9`}><i class="bi bi-exclamation-circle"></i> {formik.errors.password}</div>
                    ) : null}
                    {/* {formik.touched.password && !formik.errors.password ? (
                      <div className={successText}><i class="bi bi-check-circle-fill"></i>  </div>

                    ) : null} */}
                  </div>

               
                  <button type="submit" className='border border-blue-400 px-5 py-2 mt-5 rounded-full hover:shadow-lg w-full  hover:shadow-blue-200 hover:bg-blue-700 transition-colors bg-blue-600 text-sm font-semibold text-white self-center '>Submit</button>
                    <div className="flex justify-between">

                  <div className='text-sm text-center py-2 '>New user? <span className='text-blue-600 font-semibold'><Link to={'/'}>Signup</Link></span></div>
                  <div className='text-sm text-center py-2 '> <span className='text-blue-600 font-semibold text-xs'><Link to={'/forgotpassword'}>Forgot Password</Link></span></div>
                    </div>
                </Form>)}
            </Formik>
          </div>

        </div>
      </div>
    )
}

export default Login