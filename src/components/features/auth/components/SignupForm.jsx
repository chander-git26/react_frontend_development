import React, { useEffect } from 'react'
import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import { passwordRegExp, phoneRegExp } from '../../../../utilities/constants';
import { errorText, inpLableSty, inputTextStyles2, inputTextStylesError } from '../../../../utilities/styleclasses';
import { Link, useNavigate } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import SideContent from '../../../content/SideContent';
import axios from 'axios';
import { useSelector } from 'react-redux';



const SignupForm = () => {

 

const userdata = useSelector(state=>state.userdata.userinfo)  
const navigate = useNavigate()



useEffect(()=>{
  if(userdata){
    navigate('/dashboard')
  }
},[])


const  submitHandler = async(body) =>{
  await axios.post('http://localhost:8280/user/createUser',body,
  {
   headers: {
     cos_app_access_token: "FYy4tuaOC64uv-qZkzdC6jKBQLabF5kqU5JARliSB11_t4P7beK-3wCtbvUqlaa4C9zKU0XxQbjlJahFFxKZX8kBrCNGh4HJ7-UvRE3DdNxVGvvij6RwiiwojEvH1nmu3SC_CA"
   }
 }
 )
 .then(function (response) {

 response.data===200 && alert("New Registration successful")
 })
 .then(function(response) {
   navigate('/login')
 })
 .catch(function (error) {
   console.log(error);
 });
}
 
  return (
    <>
      <div className='flex flex-1 items-center justify-center gap-16'>
        <SideContent></SideContent>
        {/* Form Section */}
        <div className='h-200px'>
          <div className='border px-6 py-3 rounded-2xl border-blue-100 shadow-blue-200 shadow-lg'>

            <Formik
              initialValues={{
                 
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                mobile: '',
                confirm_password: '',
              }}
              validationSchema={Yup.object({
                firstname: Yup.string()
                  .max(20, 'Must be 15 characters or less')
                  .required('Firstname is required'),
                lastname: Yup.string()
                  .max(20, 'Must be 20 characters or less')
                  .required('Lastname is required'),
                email: Yup.string().email('Invalid email address').required('E-mail is required'),
                mobile: Yup.string().required('Phone number is Required').matches(phoneRegExp, 'Phone number is not valid').min(10, 'Phone number is not valid').max(10, 'Phone number is not valid'),
                password: Yup.string().required('Password is required').matches(
                  passwordRegExp,
                  'Must contain at least 8 Characters, 1 Uppercase, 1 Lowercase, 1 Special Character, and 1 Number'
                ),
                confirm_password: Yup.string().required('Please Re-enter the password').oneOf([Yup.ref('password'), null], 'Passwords must match'),



              })}
              onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                 console.log(values);
                //  delete values.confirm_password;

               
                submitHandler(values);
              }}
            >
              {formik => (
                <Form className='  flex flex-col p-5  gap-8'>
                  <h1 className='text-center text-xl font-bold border-b-2 pb-2 self-center px-4 border-b-blue-600'>SIGN UP</h1>
                  <div className='flex gap-4'>

                    <div className=" flex flex-col  relative  border-b-gray-400">
                      <label htmlFor="firstname" className={inpLableSty} >FIRST NAME</label>
                      <Field id="firstname" name="firstname" value={formik.values.firstname} className={formik.touched.firstname && formik.errors.firstname ? inputTextStylesError : inputTextStyles2} placeholder="Enter firstname" {...formik.getFieldProps('firstname')} />
                      {formik.touched.firstname && formik.errors.firstname ? (
                        <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.firstname}</div>
                      ) : null}
                      {/* {formik.touched.firstname && !formik.errors.firstname ? (
                        <div className={successText}><i className="bi bi-check-circle-fill"></i>  </div>
                      ) : null} */}
                    </div>
                    <div className=" flex flex-col  relative  border-b-gray-400">
                      <label htmlFor="lastname " className={inpLableSty}>LASTNAME</label>
                      <Field id="lastname" name="lastname" className={formik.touched.lastname && formik.errors.lastname ? inputTextStylesError : inputTextStyles2} placeholder="Enter Lastname"  {...formik.getFieldProps('lastname')} />
                      {formik.touched.lastname && formik.errors.lastname ? (
                        <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.lastname}</div>
                      ) : null}
                      {/* {formik.touched.lastname && !formik.errors.lastname ? (
                        <div className={successText}><i className="bi bi-check-circle-fill"></i>  </div>

                      ) : null} */}
                    </div>
                  </div>

                  <div className=" flex flex-col  relative  border-b-gray-400">
                    <label htmlFor="email" className={inpLableSty}  >E-Mail</label>
                    <Field
                      id="email"
                      name="email"
                      placeholder="Yourmail@xyz.com"
                      type="email"
                      className={formik.touched.email && formik.errors.email ? inputTextStylesError : inputTextStyles2}
                      {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.email}</div>
                    ) : null}
                    {/* {formik.touched.email && !formik.errors.email ? (
                      <div className={successText}><i className="bi bi-check-circle-fill"></i>  </div>
                    ) : null} */}

                  </div>
                  <div className="flex flex-col  relative  border-b-gray-400">
                    <label htmlFor="mobile" className={inpLableSty}>PHONE</label>
                    <Field id="mobile" name="mobile" placeholder="Enter your phone number" type='text' className={formik.touched.mobile && formik.errors.mobile ? inputTextStylesError : inputTextStyles2} />
                    {formik.touched.mobile && formik.errors.mobile ? (
                      <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.mobile}</div>
                    ) : null}
                    {/* {formik.touched.mobile && !formik.errors.mobile ? (
                      <div className={successText}><i className="bi bi-check-circle-fill"></i>  </div>

                    ) : null} */}
                  </div>
                  <div className="flex flex-col  relative  border-b-gray-400">
                    <label htmlFor="password" className={inpLableSty}>PASSWORD</label>
                    <Field id="password" name="password" placeholder=" Enter password" type='password' className={formik.touched.password && formik.errors.password ? inputTextStylesError : inputTextStyles2} />
                    {formik.touched.password && formik.errors.password ? (
                      <div className={`${errorText} -bottom-9`}><i className="bi bi-exclamation-circle"></i> {formik.errors.password}</div>
                    ) : null}
                    {/* {formik.touched.password && !formik.errors.password ? (
                      <div className={successText}><i className="bi bi-check-circle-fill"></i>  </div>

                    ) : null} */}
                  </div>

                  <div className="flex flex-col  relative  border-b-gray-400">
                    <label htmlFor="lastname" className={inpLableSty}>CONFIRM PASSWORD</label>
                    <Field id="confirm_password" name="confirm_password" placeholder="Confirm password" type='password' className={formik.touched.confirm_password && formik.errors.confirm_password ? inputTextStylesError : inputTextStyles2} />
                    {formik.touched.confirm_password && formik.errors.confirm_password ? (
                      <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.confirm_password}</div>
                    ) : null}
                    {/* {formik.touched.confirm_password && !formik.errors.confirm_password ? (
                      <div className={successText}><i className="bi bi-check-circle-fill"></i>  </div>

                    ) : null} */}
                  </div>

                  <button type="submit" className='border border-blue-400 px-5 py-2 mt-5 rounded-full hover:shadow-lg w-full  hover:shadow-blue-200 hover:bg-blue-700 transition-colors bg-blue-600 text-sm font-semibold text-white self-center '>Submit</button>
                  <div className='text-sm text-center py-2 '>Already Registered? <span className='text-blue-600 font-semibold'><Link to={'/login'}>Login</Link></span></div>
                </Form>)}
            </Formik>
          </div>

        </div>
      </div>
    </>
  )
}

export default SignupForm