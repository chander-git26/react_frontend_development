import React from 'react'
import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import { errorText, inpLableSty, inputTextStyles2, inputTextStylesError } from '../../../utilities/styleclasses';
import { Link } from 'react-router-dom';

import "bootstrap-icons/font/bootstrap-icons.css";
import LoginSidecontent from '../../content/LoginSidecontent';
import { useGetUserDataQuery } from '../../../services/user';

const Login = () => {

const data = useGetUserDataQuery({email:'pavan@gmail.com',password:"Asdf@1234"})

console.log(data);


    return (
        <div className='flex flex-1 items-center justify-center gap-16 '>
        <LoginSidecontent></LoginSidecontent>
        {/* Form Section */}
        <div className='h-200px'>
          <div className='border px-6 py-3 rounded-2xl border-blue-100 shadow-blue-200 shadow-lg'>

            <Formik
              initialValues={{
                username: '',
                password: '',
              
              }}
              validationSchema={Yup.object({
                username: Yup.string().required()
      

              })}
              onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
               
                alert(JSON.stringify(values, null, 2));
                console.log(values)
              }}
            >
              {formik => (
                <Form className='flex flex-col p-5 w-96 gap-8'>
                  <h1 className='text-center text-xl font-bold border-b-2 pb-2 self-center px-4 border-b-blue-600'>Login</h1>
                

                    <div className=" flex flex-col  relative  border-b-gray-400">
                      <label htmlFor="username" className={inpLableSty} >USERNAME</label>
                      <Field id="username" name="username" className={formik.touched.username && formik.errors.username ? inputTextStylesError : inputTextStyles2} placeholder="Enter username" {...formik.getFieldProps('username')} />
                      {formik.touched.username && formik.errors.username ? (
                        <div className={errorText}><i class="bi bi-exclamation-circle"></i> {formik.errors.username}</div>
                      ) : null}
                      {/* {formik.touched.username && !formik.errors.username ? (
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
                  <div className='text-sm text-center py-2 '>New user? <span className='text-blue-600 font-semibold'><Link to={'/'}>Signup</Link></span></div>
                </Form>)}
            </Formik>
          </div>

        </div>
      </div>
    )
}

export default Login