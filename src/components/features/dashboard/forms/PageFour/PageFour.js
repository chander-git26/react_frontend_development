import React from "react";
import "./PageFour.css";
import { errorText, inpLableSty, inputTextStyles2, inputTextStylesError } from "../../../../../utilities/styleclasses";
import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';




const PageFour = ({ onButtonClick }) => {

  
  const showDetails = (type, value, formik) => {
    formik.setFieldValue(type, value);
  };

  return (
    <div className='flex flex-1 items-center justify-center gap-16'>
      {/* Form Section */}
      <div className='h-200px w-[800px]'>
        <div className='border px-6 py-3 rounded-2xl border-blue-100 shadow-blue-200 shadow-lg'>

          <Formik
            initialValues={{

             
              blood_group: '',
              current_treatments: '',
              past_surgeries: '',
              covid_status: '',
              

            }}
            validationSchema={Yup.object({
              
				blood_group: Yup.string()
                .required(),
              
				current_treatments: Yup.string(),
				 past_surgeries: Yup.string(),
				covid_status: Yup.string(),
              

            })}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values));
              onButtonClick("pagethree")


            }}
          >
            {formik => (
                  <Form className='flex flex-col p-5 gap-8'>
                    <h1 className='text-center text-xl font-bold border-b-2 pb-2 self-center px-4 border-b-blue-600'>
                      Medical Details
                    </h1>
                    <form onSubmit={formik.handleSubmit}>
                      <div>
                        <div className="">
                          <div>
                            <label  className={inpLableSty} htmlFor="preExistingConditionsLabel">Pre-existing Conditions</label>
                          </div>
                          <div className="checkbox ">
                            {['High Blood Pressure', 'Diabetes', 'Heart Stroke', 'Asthma', 'Other'].map((disease) => (
                              <label key={disease} className={inpLableSty+ ' flex justify-center  items-center'} htmlFor={`show${disease.toLowerCase()}Details`}> 
                                <input
                                  type="checkbox"
                                  id={`show${disease.toLowerCase()}Details`}
                                  name={`show${disease.toLowerCase()}Details`}
                                  onChange={() => showDetails(`show${disease.toLowerCase()}Details`, !formik.values[`show${disease.toLowerCase()}Details`], formik)}
                                  className="option mr-2"
                                />
                                {disease}
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                      {['High Blood Pressure', 'Diabetes', 'Heart Stroke', 'Asthma', 'Other'].map((disease) => (
                        <div key={`${disease.toLowerCase()}Details`}>
                          {formik.values[`show${disease.toLowerCase()}Details`] && (
                            <>
                              <ul className="flex flex-col gap-5 mt-3">
                                <li className="flexel">
                                  <div>
                                    <label  htmlFor={`${disease.toLowerCase()}Name`} >
                                      Recent Report of {disease}
                                    </label>
                                  </div>

                                  <div>
                                    <input
                                      type="file"
                                      className="m-3"
                                      id={`${disease.toLowerCase()}`}
                                      onChange={formik.handleChange}
                                      defaultValue={formik.values[`${disease.toLowerCase()}`]}
                                      required
                                    />
                                  </div>
                                </li>
                              </ul>
                            </>
                          )}
                        </div>
                      ))}
                    </form>

							  
							  
                <div className=" flex flex-col  relative  border-b-gray-400">
                  
                              <label htmlFor="blood_group" className={inpLableSty} >Blood Group</label>
                              <Field id="blood_group" name="blood_group" as='select' value={formik.values.blood_group} className={formik.touched.blood_group && formik.errors.blood_group ? inputTextStylesError : inputTextStyles2} placeholder="Enter Your City" {...formik.getFieldProps('blood_group')} >

                                <option disabled value="">Select Blood group</option>
                                <option value="a+">A+</option>
                                <option value="b+">B+</option>
                                <option value="o+">O+</option>
                                <option value="ab+">AB+</option>
                                <option value="a-">A-</option>
                                <option value="b-">B-</option>
                                <option value="o-">O-</option>
                                <option value="ab-">AB-</option>

                              </Field>
                              {formik.touched.blood_group && formik.errors.blood_group ? (
                                <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.blood_group}</div>
                              ) : null}

                  </div>


                <div className="flex-1">
                        <div className=" flex flex-col  relative  border-b-gray-400">
                          <label htmlFor="current_treatments" className={inpLableSty} >Current Treatments :</label>
                          <Field id="current_treatments" name="current_treatments" value={formik.values.current_treatments} className={formik.touched.current_treatments && formik.errors.current_treatments ? inputTextStylesError : inputTextStyles2} placeholder="Enter about Your current treatments(if any)" {...formik.getFieldProps('current_treatments')} />
                          {formik.touched.current_treatments && formik.errors.current_treatments ? (
                            <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.current_treatments}</div>
                          ) : null}

                        </div>
                </div>


                <div className="flex-1">
                        <div className=" flex flex-col  relative  border-b-gray-400">
                          <label htmlFor="past_surgeries" className={inpLableSty} >Past Surgeries :</label>
                          <Field id="past_surgeries" name="past_surgeries" value={formik.values.past_surgeries} className={formik.touched.past_surgeries && formik.errors.past_surgeries ? inputTextStylesError : inputTextStyles2} placeholder="Enter about Your past surgeries(if any)" {...formik.getFieldProps('past_surgeries')} />
                          {formik.touched.past_surgeries && formik.errors.past_surgeries ? (
                            <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.past_surgeries}</div>
                          ) : null}

                        </div>
                </div>


                <div className="flex-1">
                        <div className=" flex flex-col  relative  border-b-gray-400">
                          <label htmlFor="covid_status" className={inpLableSty} >Covid Status :</label>
                          <Field id="covid_status" name="covid_status" value={formik.values.covid_status} className={formik.touched.covid_status && formik.errors.covid_status ? inputTextStylesError : inputTextStyles2} placeholder="Enter about Your covid status(past 3 months)" {...formik.getFieldProps('covid_status')} />
                          {formik.touched.covid_status && formik.errors.covid_status ? (
                            <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.covid_status}</div>
                          ) : null}

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

export default PageFour;
