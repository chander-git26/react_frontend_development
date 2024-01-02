import React from 'react'
 
import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
 
import "bootstrap-icons/font/bootstrap-icons.css";
 
import { inpLableSty,errorText, inputTextStyles2, inputTextStylesError } from '../../../../utilities/styleclasses';
import { passwordRegExp } from '../../../../utilities/constants';
 

const CreatePassword = () => {
  return (
    
    <div className='flex flex-1 items-center justify-center  '>

            <div className='border px-6 py-3 rounded-2xl border-blue-100 shadow-blue-200 shadow-lg'>

                <Formik
                    initialValues={{
                        
                      password: '',
                      confirm_password: '',

                    }}
                    validationSchema={Yup.object({
                      password: Yup.string().required('Password is required').matches(
                        passwordRegExp,
                        'Must contain at least 8 Characters, 1 Uppercase, 1 Lowercase, 1 Special Character, and 1 Number'
                      ),
                      confirm_password: Yup.string().required('Please Re-enter the password').oneOf([Yup.ref('password'), null], 'Passwords must match'),
      


                    })}
                    onSubmit={async (values) => {
                         console.log(values);
                      

                        
                    }}
                >
                    {formik => (
                        <Form className='flex flex-col p-5 w-96 gap-8'>
                            <h1 className='text-center text-xl font-bold border-b-2 pb-2 self-center px-4 border-b-blue-600'>Create New Password</h1>

                            <div className="flex flex-col  relative  border-b-gray-400">
                    <label htmlFor="password" className={inpLableSty}>New Password</label>
                    <Field id="password" name="password" placeholder=" Enter password" type='password' className={formik.touched.password && formik.errors.password ? inputTextStylesError : inputTextStyles2} />
                    {formik.touched.password && formik.errors.password ? (
                      <div className={`${errorText} -bottom-9`}><i className="bi bi-exclamation-circle"></i> {formik.errors.password}</div>
                    ) : null}
               
                  </div>

                  <div className="flex flex-col  relative  border-b-gray-400">
                    <label htmlFor="lastname" className={inpLableSty}>Confirm Password</label>
                    <Field id="confirm_password" name="confirm_password" placeholder="Confirm password" type='password' className={formik.touched.confirm_password && formik.errors.confirm_password ? inputTextStylesError : inputTextStyles2} />
                    {formik.touched.confirm_password && formik.errors.confirm_password ? (
                      <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.confirm_password}</div>
                    ) : null}
          
                  </div>
                            <button type="submit"     className='border btnDis border-blue-400 px-5 py-2 mt-5 rounded-full hover:shadow-lg w-full  hover:shadow-blue-200 hover:bg-blue-700 transition-colors bg-blue-600 text-sm font-semibold text-white self-center '> Change Password</button>
                            
                        </Form>)}
                </Formik>

               



            </div>
        </div>
  )
}

export default CreatePassword