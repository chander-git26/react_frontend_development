import React from "react";
import "./PageTwo.css";
import { Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { errorText, inpLableSty, inputTextStyles2, inputTextStylesError } from "../../../../../utilities/styleclasses";
import { gstRegExp } from "../../../../../utilities/constants";
import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../../../auth/userSlice";
import { postProfessionalInfo } from "../../userInfoAPI";


const PageTwo = ({ onButtonClick }) => {
  const user =  useSelector(selectLoggedInUser)
  console.log(user.email);




  return (
    <div className='flex flex-1 items-center justify-center gap-10'>
      {/* Form Section */}
      <div className='h-200px w-[800px]'>
        <div className='border px-6 py-3 rounded-2xl border-blue-100 shadow-blue-200 shadow-lg'>


          <Formik

            initialValues={{
              sourceOfIncome: '',

              profession: {
                companyName: '',
                annualIncome:'',
                businessName: '',
                businessType: '',
                gstNumber: '',
                businessAnnualRevenue: '',
                employment_spare_amount: '',
                business_spare_amount: '',
              }
            }}


            validationSchema={Yup.object({
              sourceOfIncome: Yup.string().required('Source of Income is required'),
              profession: Yup.object().when('sourceOfIncome', {
                is: (sourceOfIncome) => sourceOfIncome === 'business',
                then: () => Yup.object({
                  businessName: Yup.string(),
                  businessAnnualRevenue: Yup.number().typeError("Must be a number type").required('Annual revenue is required'),
                  businessType: Yup.string().required('Business type is required'),
                  business_spare_amount: Yup.number().typeError("Must be a number type").required('Spare Amount is required'),
                  gstNumber: Yup.string().required('GST Number is required').matches(
                    gstRegExp,
                    'Invalid GST number'
                  ),
                }),

              }).when('sourceOfIncome', {
                is: (sourceOfIncome) => sourceOfIncome === 'employment',
                then: () => Yup.object({
                  companyName: Yup.string(),
                  employment_spare_amount: Yup.number().typeError("Must be a number type").required(' Spare amount is required'),
                  annualIncome:  Yup.number().typeError("Must be a number type").required("Annual income is required"),
                  
                })
              }),
            })}
              onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              if(values.sourceOfIncome==="employment"){
                const temp = {
                  profession:{
                    id:user.userId,
                    sourceOfIncome:values.sourceOfIncome,
                    companyName: values.profession.companyName,
                    annualIncome:values.profession.annualIncome,
                    investAmount:values.profession.employment_spare_amount ,}
                  }
                  alert(JSON.stringify(temp))
                  await  postProfessionalInfo(temp.profession)
                onButtonClick("pagethree")
              }
              if(values.sourceOfIncome==="business"){
                const temp = {
                  id:user.userId,
                  sourceOfIncome:values.sourceOfIncome,
                  businessName: values.profession.businessName,
                  businessAnnualRevenue:values.profession.businessAnnualRevenue,
                  businessType: values.profession.businessType,
                  investAmount: values.profession.business_spare_amount,
                  gstNumber: values.profession.gstNumber
                }
                alert(JSON.stringify(temp))
                await postProfessionalInfo(temp)
                onButtonClick("pagethree")
              }



            }}
          >
            {formik => (
              <Form className='  flex flex-col p-5  gap-8'>
                <h1 className='text-center text-xl font-bold border-b-2 pb-2 self-center px-4 border-b-blue-600'>Professional Details</h1>

                <div className=" flex flex-col  relative  border-b-gray-400">
                  <label htmlFor="sourceOfIncome" className={inpLableSty} >Source of Income</label>
                  <Field id="sourceOfIncome" name="sourceOfIncome" as='select' value={formik.values.sourceOfIncome} className={formik.touched.sourceOfIncome && formik.errors.sourceOfIncome ? inputTextStylesError : inputTextStyles2} placeholder="Enter Your source Of Income" {...formik.getFieldProps('sourceOfIncome')} >

                    <option disabled value="">Select source of income</option>
                    <option value="business">Business</option>
                    <option value="employment">Employment</option>

                  </Field>
                  {formik.touched.sourceOfIncome && formik.errors.sourceOfIncome ? (
                    <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.sourceOfIncome}</div>
                  ) : null}



                </div>

                {
                  formik.values.sourceOfIncome === 'business' && (
                    <>
                      <div className=" flex flex-col  relative  border-b-gray-400">
                        <label htmlFor="profession.businessName" className={inpLableSty} >Business Name</label>
                        <Field id="profession.businessName" name="profession.businessName" value={formik.values.profession.businessName}
                          className={formik.touched?.profession?.businessName && formik.errors?.profession?.businessName ? inputTextStylesError : inputTextStyles2}
                          placeholder="Enter Your Business name" {...formik.getFieldProps('profession.businessName')} />

                        {formik.touched?.profession?.businessName && formik.errors?.profession?.businessName ? (
                          <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors?.profession?.businessName}</div>
                        ) : null}
                      </div>

                      <div className=" flex flex-col  relative  border-b-gray-400">
                        <label htmlFor="businessAnnualRevenue" className={inpLableSty} >Annual Revenue</label>
                        <Field id="businessAnnualRevenue" name="profession.businessAnnualRevenue" value={formik.values.profession.businessAnnualRevenue} className={formik.touched?.profession?.businessAnnualRevenue && formik.errors?.profession?.businessAnnualRevenue ? inputTextStylesError : inputTextStyles2} placeholder="Enter Your Annual revenue" {...formik.getFieldProps('profession.businessAnnualRevenue')} />
                        {formik.touched?.profession?.businessAnnualRevenue && formik.errors?.profession?.businessAnnualRevenue ? (
                          <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors?.profession?.businessAnnualRevenue}</div>
                        ) : null}

                      </div>

                      <div className=" flex flex-col  relative  border-b-gray-400">
                        <label htmlFor="gstNumber" className={inpLableSty} >GST number</label>
                        <Field id="gstNumber" name="profession.gstNumber" value={formik.values.profession?.gstNumber} className={formik.touched.profession?.gstNumber && formik.errors.profession?.gstNumber ? inputTextStylesError : inputTextStyles2} placeholder="Enter Your Company GST number" {...formik.getFieldProps('profession.gstNumber')} />
                        {formik.touched.profession?.gstNumber && formik.errors.profession?.gstNumber ? (
                          <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.profession?.gstNumber}</div>
                        ) : null}

                      </div>
                      <div className=" flex flex-col  relative  border-b-gray-400">
                        <label htmlFor="businessType" className={inpLableSty} >Business Type</label>
                        <Field id="businessType" name="profession.businessType" as='select' value={formik.values.profession?.businessType} className={formik.touched.profession?.businessType && formik.errors.profession?.businessType ? inputTextStylesError : inputTextStyles2} placeholder="Enter Your City" {...formik.getFieldProps('profession.businessType')} >

                          <option disabled value="">Select Business type</option>
                          <option value="privatelimited">Private Limited</option>
                          <option value="llp">LLP</option>
                          <option value="propritorship">Propritorship</option>
                          <option value="corporation">Corporation</option>

                        </Field>
                        {formik.touched.profession?.businessType && formik.errors.profession?.businessType ? (
                          <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.profession?.businessType}</div>
                        ) : null}
                      </div>

                      <div className=" flex flex-col  relative  border-b-gray-400">
                        <label htmlFor="business_spare_amount" className={inpLableSty} >Spare Amount</label>
                        <Field id="business_spare_amount" name="business_spare_amount" value={formik.values.profession.business_spare_amount} className={formik.touched.profession?.business_spare_amount && formik.errors.profession?.business_spare_amount ? inputTextStylesError : inputTextStyles2} placeholder="Enter your monthly Spare Amount" {...formik.getFieldProps('profession.business_spare_amount')} />
                        {formik.touched.profession?.business_spare_amount && formik.errors.profession?.business_spare_amount ? (
                          <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.profession?.business_spare_amount}</div>
                        ) : null}

                      </div>

                    </>
                  )
                }
                {
                  formik.values.sourceOfIncome === 'employment' && (
                    <>
                      <div className=" flex flex-col  relative  border-b-gray-400">
                        <label htmlFor="profession.companyName" className={inpLableSty} >Company Name</label>
                        <Field id="profession.companyName" name="profession.companyName" value={formik.values.profession.companyName}
                          className={formik.touched?.profession?.companyName && formik.errors?.profession?.companyName ? inputTextStylesError : inputTextStyles2}
                          placeholder="Enter Your Company name" {...formik.getFieldProps('profession.companyName')} />

                        {formik.touched?.profession?.companyName && formik.errors?.profession?.companyName ? (
                          <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors?.profession?.companyName}</div>
                        ) : null}
                      </div>

                      
                      <div className=" flex flex-col  relative  border-b-gray-400">
                        <label htmlFor="annualIncome" className={inpLableSty} >Annual Income</label>
                        <Field id="annualIncome" name="profession.annualIncome" value={formik.values.profession.annualIncome} className={formik.touched?.profession?.annualIncome && formik.errors?.profession?.annualIncome ? inputTextStylesError : inputTextStyles2} placeholder="Enter Your Annual Income" {...formik.getFieldProps('profession.annualIncome')} />
                        {formik.touched?.profession?.annualIncome && formik.errors?.profession?.annualIncome ? (
                          <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors?.profession?.annualIncome}</div>
                        ) : null}

                      </div>

                      <div className=" flex flex-col  relative  border-b-gray-400">
                        <label htmlFor="employment_spare_amount" className={inpLableSty} >Spare Amount</label>
                        <Field id="employment_spare_amount" name="employment_spare_amount" value={formik.values.profession.employment_spare_amount} className={formik.touched.profession?.employment_spare_amount && formik.errors.profession?.employment_spare_amount ? inputTextStylesError : inputTextStyles2} placeholder="Enter your monthly Spare Amount" {...formik.getFieldProps('profession.employment_spare_amount')} />
                        {formik.touched.profession?.employment_spare_amount && formik.errors.profession?.employment_spare_amount ? (
                          <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.profession?.employment_spare_amount}</div>
                        ) : null}

                      </div>


                    </>
                  )
                }

                <button type="submit" className='border border-blue-400 px-5 py-2 mt-5 rounded-full hover:shadow-lg   hover:shadow-blue-200 hover:bg-blue-700 transition-colors bg-blue-600 text-sm font-semibold text-white self-center '>Save</button>
              </Form>)}
          </Formik>
        </div>

      </div>
    </div>
  );
}

export default PageTwo;