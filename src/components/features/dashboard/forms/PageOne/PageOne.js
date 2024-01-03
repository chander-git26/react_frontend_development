import React, { useEffect } from "react";
import "./PageOne.css";
import { errorText, inpLableSty, inputTextStyles2, inputTextStylesError } from "../../../../../utilities/styleclasses";
import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { calIcon } from "../../../../../utilities/icons";
import axios from "axios";
import { postPersonalInfo } from "../../userInfoAPI";
import { selectLoggedInUser } from "../../../auth/userSlice";
import { useSelector } from "react-redux";



const PageOne = ({ onButtonClick }) => {
  const userstatus = useSelector(selectLoggedInUser)


 



  return (
    <div className='flex flex-1 items-center justify-center gap-16'>
      {/* Form Section */}
      <div className='h-200px w-[800px]'>
        <div className='border px-6 py-3 rounded-2xl border-blue-100 shadow-blue-200 shadow-lg'>

          <Formik
            initialValues={{

              address: '',
              gender: 'male',
              dateOfBirth: '',
              state: '',
              city: '',
              maritalStatus: '',
              height: '',
              alcohol: '',
              smoking: '',
              weight: '',
              pincode: '',

            }}
            validationSchema={Yup.object({
              address: Yup.string().trim()
                .max(20, 'Must be 15 characters or less'),
              gender: Yup.string()
                .required(),
                dateOfBirth: Yup.date().nullable()
              .test('dob', 'Should be Older than 18', function (value, ctx) {
                const dob = new Date(value);
                const validDate = new Date();
                const valid = validDate.getFullYear() - dob.getFullYear() >= 18;
                return !valid ? ctx.createError() : valid; 
              })
                .required('Date of birth required'),
              state: Yup.string()
                .required(),
              city: Yup.string(),
              height: Yup.number(),
              maritalStatus: Yup.string()
                .required(),
              weight: Yup.number().typeError("Must be a number type"),
              alcohol:Yup.string()
              .required(),
              smoking:Yup.string()
              .required(),
              pincode: Yup.number().integer().typeError("Must be a number type").min(100000,'Invalid Pin').max(899999,'Invalid Pin').required(),

            })}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              
              alert(JSON.stringify(values))
              const temp = {id:userstatus.userId,...values}
              await postPersonalInfo(temp)
              onButtonClick("pagetwo")
            }}
          >
            {formik => (
              <Form className='  flex flex-col p-5  gap-8'>
                <h1 className='text-center text-xl font-bold border-b-2 pb-2 self-center px-4 border-b-blue-600'>Personal Details</h1>

                <div className="flex justify-center gap-10">

                  {/* 
                                  //////////////////
                                  //////////////////  Bio Information
                                  //////////////////

                              */}

                  <div className="flex-1 gap-5 flex flex-col ">
                    <div className=" flex flex-row gap-5  relative h-6 border-b-gray-400">

                      <div id="my-radio-group" className={inpLableSty}>Gender :</div>
                      <div role="group" className="flex flex-row gap-1" aria-labelledby="my-radio-group">
                        <label className={inpLableSty}>
                          <Field type="radio" name="gender" value="male" /> {" "}
                          Male
                        </label>
                        <label className={inpLableSty}>
                          <Field type="radio" name="gender" value="female" /> {" "}
                          Female
                        </label>
                        <label className={inpLableSty}  >
                          <Field type="radio" name="gender" value="other" /> {" "}
                          Other
                        </label>
                      </div>
                      {formik.touched.gender && formik.errors.gender ? (
                        <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.gender}</div>
                      ) : null}

                    </div>
                    <div className=" flex flex-col mb-4 relative  border-b-gray-400">


                      <div id="my-radio-group" className={inpLableSty}>Date of Birth</div>
                      <Field name="dateOfBirth"  type='date'    className={formik.touched.dateOfBirth && formik.errors.dateOfBirth ? inputTextStylesError : inputTextStyles2}  {...formik.getFieldProps('dateOfBirth')}>
               
                      </Field>
                
                      {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
                        <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.dateOfBirth}</div>
                      ) : null}
                    </div>


                    <div className=" flex flex-row gap-5 mb-4 relative h-6 border-b-gray-400">

                      <div id="my-radio-group" className={inpLableSty}>Marital Status :</div>
                      <div role="group" className="flex flex-row gap-1" aria-labelledby="my-radio-group">
                        <label className={inpLableSty}>
                          <Field type="radio" name="maritalStatus" value="married" /> {" "}
                          Married
                        </label>
                        <label className={inpLableSty}>
                          <Field type="radio" name="maritalStatus" value="single" /> {" "}
                          Single
                        </label>


                      </div>
                      {formik.touched.maritalStatus && formik.errors.maritalStatus ? (
                        <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.maritalStatus}</div>
                      ) : null}

                    </div>

               
                    <div className="flex gap-3">

                      <div className=" flex flex-col mb-4 relative  border-b-gray-400">
                        <label htmlFor="height" className={inpLableSty} >Height</label>
                        <Field id="height" name="height" as='select' value={formik.values.height} className={formik.touched.height && formik.errors.height ? inputTextStylesError : inputTextStyles2} placeholder="Enter Your City" {...formik.getFieldProps('height')} >

                          <option disabled value="">Select height</option>
                          <option value={4}>4 ft</option>
                          <option value="4.9">4.9 ft</option>
                          <option value="4.10">4.10 ft</option>
                          <option value="4.11">4.11 ft</option>
                          <option value="5">5 ft</option>
                          <option value="5.1">5.1 ft</option>
                          <option value="5.2">5.2 ft</option>
                          <option value="5.3">5.3 ft</option>
                          <option value="5.4">5.4 ft</option>
                          <option value="5.5">5.5 ft</option>
                          <option value="5.6">5.6 ft</option>
                          <option value="5.7">5.7 ft</option>
                          <option value="5.8">5.8 ft</option>
                          <option value="5.9">5.9 ft</option>
                          <option value="5.10">5.10 ft</option>
                          <option value="5.11">5.11 ft</option>
                          <option value="5.12">6 ft</option>
                          <option value="6.1">6.1 ft</option>
                          <option value="6.2">6.2 ft</option>
                          <option value="6.3">3.3 ft</option>
                          <option value="6.4">6.4 ft</option>

                        </Field>
                        {formik.touched.height && formik.errors.height ? (
                          <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.height}</div>
                        ) : null}
                      </div>
                      <div className=" flex flex-col mb-4 relative  border-b-gray-400">

                        <label htmlFor="weight" className={inpLableSty} >Weight</label>
                        <Field id="weight" name="weight" value={formik.values.weight} className={formik.touched.weight && formik.errors.weight ? inputTextStylesError : inputTextStyles2} placeholder="Enter Your weight in kgs" {...formik.getFieldProps('weight')} >


                        </Field>
                        {formik.touched.weight && formik.errors.weight ? (
                          <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.weight}</div>
                        ) : null}

                      </div>


                    </div>
                   
                      <div className=" flex  gap-5 mb-4 relative h-6 border-b-gray-400">

                        <div id="my-radio-group" className={inpLableSty+'w-20'}>Smoking :</div>
                        <div role="group" className="flex flex-row gap-1" aria-labelledby="my-radio-group">
                          <label className={inpLableSty}>
                            <Field type="radio" name="smoking" value="yes" /> {" "}
                            Yes
                          </label>
                          <label className={inpLableSty}>
                            <Field type="radio" name="smoking" value="no" /> {" "}
                            No
                          </label>


                        </div>
                        {formik.touched.smoking && formik.errors.smoking ? (
                          <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.smoking}</div>
                        ) : null}

                      </div>
                      <div className=" flex  gap-5 mb-4 relative h-6 border-b-gray-400">

                        <div id="my-radio-group" className={inpLableSty+'w-20'}>Alcohol :</div>
                        <div role="group" className="flex flex-row gap-1" aria-labelledby="my-radio-group">
                          <label className={inpLableSty}>
                            <Field type="radio" name="alcohol" value="yes" /> {" "}
                            Yes
                          </label>
                          <label className={inpLableSty}>
                            <Field type="radio" name="alcohol" value="no" /> {" "}
                            No
                          </label>
                          <label className={inpLableSty}>
                            <Field type="radio" name="alcohol" value="occasionally" /> {" "}
                             Occasionally
                          </label>


                        </div>
                        {formik.touched.alcohol && formik.errors.alcohol ? (
                          <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.alcohol}</div>
                        ) : null}

                      </div>
                  

             


                  </div>

                  {/* 
                                  //////////////////
                                  //////////////////  Geo information
                                  //////////////////

                              */}

                  <div className="flex-1">
                    <div className=" flex flex-col  mb-4 relative  border-b-gray-400">
                      <label htmlFor="address" className={inpLableSty} >ADDRESS</label>
                      <Field id="address" name="address" value={formik.values.address} className={formik.touched.address && formik.errors.address ? inputTextStylesError : inputTextStyles2} placeholder="Enter Your Address" {...formik.getFieldProps('address')} />
                      {formik.touched.address && formik.errors.address ? (
                        <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.address}</div>
                      ) : null}

                    </div>

                    <div className=" flex flex-col mb-4 relative  border-b-gray-400">
                      <label htmlFor="state" className={inpLableSty} >State</label>
                      <Field id="state" name="state" as='select' value={formik.values.state} className={formik.touched.state && formik.errors.state ? inputTextStylesError : inputTextStyles2} placeholder="Enter Your State" {...formik.getFieldProps('state')} >
                        <option disabled value="">Select State</option>
                        <option value="telangana">Telangana</option>
                        <option value="andhrapradesh">AndhraPradesh</option>
                        <option value="karnataka">Karnataka</option>

                      </Field>
                      {formik.touched.state && formik.errors.state ? (
                        <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.state}</div>
                      ) : null}

                    </div>
                    <div className=" flex flex-col mb-4  relative  border-b-gray-400">
                      <label htmlFor="city" className={inpLableSty} >City</label>
                      <Field id="city" name="city" as='select' value={formik.values.city} className={formik.touched.city && formik.errors.city ? inputTextStylesError : inputTextStyles2} placeholder="Enter Your City" {...formik.getFieldProps('city')} >

                        <option disabled value="">Select City</option>
                        <option value="hyderabad">Hyderabad</option>
                        <option value="warangal">Warangal</option>
                        <option value="khammam">Khammam</option>

                      </Field>
                      {formik.touched.city && formik.errors.city ? (
                        <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.city}</div>
                      ) : null}

                    </div>
                    <div className=" flex flex-col mb-4  relative  border-b-gray-400">
                      <label htmlFor="country" className={inpLableSty} >Country</label>
                      <Field id="country" name="country" as='select' value={formik.values.country} className={formik.touched.country && formik.errors.country ? inputTextStylesError : inputTextStyles2} placeholder="Select Your Country" {...formik.getFieldProps('country')} >

                        <option value="india">India</option>
                        <option value="srilanka">Srilanka</option>
                        <option value="singapur">Singapur</option>

                      </Field>
                      {formik.touched.country && formik.errors.country ? (
                        <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.country}</div>
                      ) : null}

                    </div>

                    

                    <div className=" flex flex-col  relative  border-b-gray-400">

                        <label htmlFor="pincode" className={inpLableSty} >Pincode</label>
                        <Field id="pincode" name="pincode" value={formik.values.pincode} className={formik.touched.pincode && formik.errors.pincode ? inputTextStylesError : inputTextStyles2} placeholder="Enter Your Pincode" {...formik.getFieldProps('pincode')} >


                        </Field>
                        {formik.touched.pincode && formik.errors.pincode ? (
                          <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.pincode}</div>
                        ) : null}

                      </div>

                  </div>





                </div>

                <button type="submit" className='border border-blue-400 px-5 py-2 mt-5 rounded-full hover:shadow-lg   hover:shadow-blue-200 hover:bg-blue-700 transition-colors bg-blue-600 text-sm font-semibold text-white self-center '>Save</button>
              </Form>)}
          </Formik>
        </div>

      </div>
    </div>
  );
};

export default PageOne;
