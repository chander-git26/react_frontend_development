import React, { useState } from 'react'
import { errorText, inpLableSty, inputTextStyles2, inputTextStylesError } from '../../../../utilities/styleclasses';
import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import { phoneRegExp } from '../../../../utilities/constants';

const RequestPassword = ({setAuthOtp}) => {

    const [otp,setOtp]=useState(false)
    const [otpButtonDissable,setOtpButtonDissable]=useState(false)



  return (
    <div className='flex flex-1 items-center justify-center gap-16 '>

            <div className='border px-6 py-3 rounded-2xl border-blue-100 shadow-blue-200 shadow-lg'>

                <Formik
                    initialValues={{
                        
                        mobile: '',

                    }}
                    validationSchema={Yup.object({
                        mobile: Yup.string().required('Phone number is Required').matches(phoneRegExp, 'Phone number is not valid').min(10, 'Phone number is not valid').max(10, 'Phone number is not valid'),


                    })}
                    onSubmit={async (values) => {
                         console.log(values);
                         setOtpButtonDissable(true);
                         setOtp(true)
                         //   setButtonText("Wait for 5 seconds...");
                           setTimeout(() => {
                             setOtpButtonDissable(false);
                             // setButtonText("Click me");
                           }, 10000);

                        
                    }}
                >
                    {formik => (
                        <Form className='flex flex-col p-5 w-96 gap-2'>
                            <h1 className='text-center text-xl font-bold border-b-2 pb-2 self-center px-4 border-b-blue-600'>Forgot Password</h1>


                            <div className=" flex flex-col  relative  border-b-gray-400">
                                <label htmlFor="mobile" className={inpLableSty} >Mobile</label>
                                <Field id="mobile" name="mobile" className={formik.touched.mobile && formik.errors.mobile ? inputTextStylesError : inputTextStyles2} placeholder="Enter Mobile number" {...formik.getFieldProps('mobile')} />
                                {formik.touched.mobile && formik.errors.mobile ? (
                                    <div className={errorText}><i class="bi bi-exclamation-circle"></i> {formik.errors.mobile}</div>
                                ) : null}
                                
                            </div>
                            <button type="submit" disabled={otpButtonDissable}    className='border btnDis border-blue-400 px-5 py-2 mt-5 rounded-full hover:shadow-lg w-full  hover:shadow-blue-200 hover:bg-blue-700 transition-colors bg-blue-600 text-sm font-semibold text-white self-center '> {otpButtonDissable?"OTP Sent":" Request OTP"}</button>
                            
                        </Form>)}
                </Formik>

                {otp&&

               ( <Formik
                    initialValues={{
                        
                        otp: '',

                    }}
                    validationSchema={Yup.object({
                        otp: Yup.number().required()


                    })}
                    onSubmit={async (values) => {
                         console.log(values);
                         setAuthOtp(true)
                        

                        
                    }}
                >
                    {formik => (
                        <Form className='flex flex-col p-5 w-96 gap-2'>


                            <div className=" flex flex-col  relative  border-b-gray-400">
                                <label htmlFor="otp" className={inpLableSty} >Enter OTP</label>
                                <Field id="otp" name="otp" className={formik.touched.otp && formik.errors.otp ? inputTextStylesError : inputTextStyles2} placeholder="Enter OTP" {...formik.getFieldProps('otp')} />
                                {formik.touched.otp && formik.errors.otp ? (
                                    <div className={errorText}><i class="bi bi-exclamation-circle"></i> {formik.errors.otp}</div>
                                ) : null}
                                
                            </div>
                            <button type="submit"  className='border btnDis border-blue-400 px-5 py-2 mt-5 rounded-full hover:shadow-lg w-full  hover:shadow-blue-200 hover:bg-blue-700 transition-colors bg-blue-600 text-sm font-semibold text-white self-center '> Verify</button>
                            
                        </Form>)}
                </Formik>)
                }




            </div>
        </div>
  )
}

export default RequestPassword