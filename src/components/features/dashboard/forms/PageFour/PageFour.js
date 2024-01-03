import React from "react";
import "./PageFour.css";
import { errorText, inpLableSty, inputTextStyles2, inputTextStylesError } from "../../../../../utilities/styleclasses";
import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import { postMedicalInfo } from "../../userInfoAPI";
import { selectLoggedInUser } from "../../../auth/userSlice";
import { useSelector } from "react-redux";




const PageFour = ({ onButtonClick }) => {
  const user = useSelector(selectLoggedInUser)



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


              bloodGroup: '',
              currentTreatments: '',
              pastSurgeries: '',
              covidStatus: '',


            }}
            validationSchema={Yup.object({

              bloodGroup: Yup.string()
                .required(),
              currentTreatments: Yup.string(),
              pastSurgeries: Yup.string(),
              covidStatus: Yup.string(),


            })}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values));
              const formData = new FormData();
              formData.append("uploadBpReport", values.uploadBpReport?values.uploadBpReport:null);
              formData.append("uploadDiabetesReport", values.uploadDiabetesReport?values.uploadDiabetesReport:null);
              formData.append("uploadHeartStrokeReport", values.uploadHeartStrokeReport?values.uploadHeartStrokeReport:null);
              formData.append("uploadOtherReport", values.uploadOtherReport?values.uploadOtherReport:null);
              formData.append("uploadAsthmaReport", values.uploadAsthmaReport?values.uploadAsthmaReport:null);
              formData.append("id",user.userId );
              formData.append("pastSurgeries",values.pastSurgeries );
              formData.append("pastSurgeries",values.pastSurgeries );
              formData.append("covidStatus",values.covidStatus );
              formData.append("bloodGroup",values.bloodGroup );
              for (const keys of formData.entries()) {
                console.log(keys);
              }
              await postMedicalInfo(formData)
              // onButtonClick("pagethree")


            }}
          >
            {(formik, setFieldValue) => (
              <Form className='flex flex-col p-5 gap-8'>
                <h1 className='text-center text-xl font-bold border-b-2 pb-2 self-center px-4 border-b-blue-600'>
                  Medical Details
                </h1>
                <form onSubmit={formik.handleSubmit}>
                  <div>
                    <div className="ml-4">
                      <div>
                        <label className={inpLableSty} htmlFor="preExistingConditionsLabel">Pre-existing Conditions</label>
                      </div>
                      <div className="checkbox">
                        {['Bp', 'Diabetes', 'HeartStroke', 'Asthma', 'Other'].map((disease) => (
                          <label key={disease} className={inpLableSty} htmlFor={`show${disease}Details`}>
                            <input
                              type="checkbox"
                              id={`show${disease}Details`}
                              name={`show${disease}Details`}
                              onChange={() => showDetails(`show${disease}Details`, !formik.values[`show${disease}Details`], formik)}
                              className="m-1"
                            />
                            {disease}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                  {['Bp', 'Diabetes', 'HeartStroke', 'Asthma', 'Other'].map((disease) => (
                    <div key={`${disease}Details`}>
                      {formik.values[`show${disease}Details`] && (
                        <>
                          <ul className="flex flex-col gap-5 m-2">
                            <li className="flexel mt-3">
                              <div>
                                <label className={inpLableSty} htmlFor={`${disease}`} >
                                  Recent Report of {disease}
                                </label>
                              </div>

                              <div>
                                <input
                                  type="file"
                                  className=""
                                  id={`${disease}`}
                                  name={`upload${disease}Report`}
                                  onChange={(event) => { formik.setFieldValue(`upload${disease}Report`, event.currentTarget.files[0]); console.log(formik.values); }}
                                  defaultValue={formik.values[`${disease}`]}
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

                  <label htmlFor="bloodGroup" className={inpLableSty} >Blood Group</label>
                  <Field id="bloodGroup" name="bloodGroup" as='select' value={formik.values.bloodGroup} className={formik.touched.bloodGroup && formik.errors.bloodGroup ? inputTextStylesError : inputTextStyles2} placeholder="Enter Your City" {...formik.getFieldProps('bloodGroup')} >

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
                  {formik.touched.bloodGroup && formik.errors.bloodGroup ? (
                    <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.bloodGroup}</div>
                  ) : null}

                </div>


                <div className="flex-1">
                  <div className=" flex flex-col  relative  border-b-gray-400">
                    <label htmlFor="currentTreatments" className={inpLableSty} >Current Treatments :</label>
                    <Field id="currentTreatments" name="currentTreatments" value={formik.values.currentTreatments} className={formik.touched.currentTreatments && formik.errors.currentTreatments ? inputTextStylesError : inputTextStyles2} placeholder="Enter about Your current treatments(if any)" {...formik.getFieldProps('currentTreatments')} />
                    {formik.touched.currentTreatments && formik.errors.currentTreatments ? (
                      <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.currentTreatments}</div>
                    ) : null}

                  </div>
                </div>


                <div className="flex-1">
                  <div className=" flex flex-col  relative  border-b-gray-400">
                    <label htmlFor="pastSurgeries" className={inpLableSty} >Past Surgeries :</label>
                    <Field id="pastSurgeries" name="pastSurgeries" value={formik.values.pastSurgeries} className={formik.touched.pastSurgeries && formik.errors.pastSurgeries ? inputTextStylesError : inputTextStyles2} placeholder="Enter about Your past surgeries(if any)" {...formik.getFieldProps('pastSurgeries')} />
                    {formik.touched.pastSurgeries && formik.errors.pastSurgeries ? (
                      <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.pastSurgeries}</div>
                    ) : null}

                  </div>
                </div>


                <div className="flex-1">
                  <div className=" flex flex-col  relative  border-b-gray-400">
                    <label htmlFor="covidStatus" className={inpLableSty} >Covid Status :</label>
                    <Field id="covidStatus" name="covidStatus" value={formik.values.covidStatus} className={formik.touched.covidStatus && formik.errors.covidStatus ? inputTextStylesError : inputTextStyles2} placeholder="Enter about Your covid status(past 3 months)" {...formik.getFieldProps('covidStatus')} />
                    {formik.touched.covidStatus && formik.errors.covidStatus ? (
                      <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.covidStatus}</div>
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
