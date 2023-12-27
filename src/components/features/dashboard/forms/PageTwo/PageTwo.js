// import React from "react";
// import "./PageTwo.css";
// import { Field, Form, Formik } from "formik";
// import * as Yup from 'yup';
// import { errorText, inpLableSty, inputTextStyles2, inputTextStylesError } from "../../../../../utilities/styleclasses";


// const PageTwo = ({ onButtonClick }) => {
//   return (
//     <div className='flex flex-1 items-center justify-center gap-10'>
//       {/* Form Section */}
//       <div className='h-200px w-[500px]'>
//         <div className='border px-6 py-3 rounded-2xl border-blue-100 shadow-blue-200 shadow-lg'>

//           <Formik
// initialValues={{
//   sourse_of_income: '',

//   employment:{
//     company_name: '',
//     spare_amount: '',
//     annual_income: '',

//   },
//   bussiness:{
//     company_name: '',
//     spare_amount: '',
//     annual_income: '',

//   }



//             }}
//             validationSchema={Yup.object({
//               sourse_of_income: Yup.string().required(),
//               employment: Yup.object().shape().when('sourse_of_income', {
//                 is: (sourse_of_income)=>sourse_of_income==='employment',
//                 then:()=>Yup.object({
//                   sourse_of_income: Yup.string().required(),
//                   company_name: Yup.string().required(),
//                   spare_amount: Yup.string().required(),
//                   annual_income:  Yup.string().required(),
//                   }),
//               }),
//               bussiness: Yup.object().shape().when('sourse_of_income', {
//                 is: (sourse_of_income)=>sourse_of_income==='bussiness',
//                 then:()=> Yup.object({
//                   bussiness_name: Yup.string().required(),
//                   bussiness_type: Yup.string().required(),
//                   annual_revenue:  Yup.string().required(),
//                   gst_number: Yup.number().required(),
//                   spare_amount: Yup.number().required(),
//                   }),
//               })
//                 // company  _name: Yup.string().when('sourse_of_income',{is:'employment',then:Yup.string().required()}),

//               // bussiness_name: Yup.string().required(),
//               // bussiness_type: Yup.string().required(),
//               // annual_revenue: Yup.number().required(),
//               // spare_amount: Yup.number().required(),
//               // gst_number: Yup.number().required(),
//               // Annual_income  :Yup.string().when('sourse_of_income',{is:'employment',then:Yup.string().required()}),
//             })}
//             onSubmit={async (values) => {
//               await new Promise((r) => setTimeout(r, 500));
//               alert(JSON.stringify(values))
//               onButtonClick("pagethree")

//             }}
//           >
//             {formik => (
//               <Form className='  flex flex-col p-5  gap-8'>
//                 <h1 className='text-center text-xl font-bold border-b-2 pb-2 self-center px-4 border-b-blue-600'>Professional Details</h1>
//                 <div className=" flex flex-col  relative  border-b-gray-400">
//                   <label htmlFor="sourse_of_income" className={inpLableSty} >Source of Income</label>
//                   <Field id="sourse_of_income" name="sourse_of_income" as='select' value={formik.values.sourse_of_income} className={formik.touched.sourse_of_income && formik.errors.sourse_of_income ? inputTextStylesError : inputTextStyles2} placeholder="Enter Your sourse_of_income" {...formik.getFieldProps('sourse_of_income')} >

//                     <option disabled value="">Select sourse of income</option>
//                     <option value="bussiness">Bussiness</option>
//                     <option value="employment">Employment</option>

//                   </Field>
//                   {formik.touched.sourse_of_income && formik.errors.sourse_of_income ? (
//                     <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.sourse_of_income}</div>
//                   ) : null}

//                 </div>

//                 {
//                   formik.values.sourse_of_income === 'bussiness' && (
//                     <>
//                       <div className=" flex flex-col  relative  border-b-gray-400">
//                         <label htmlFor="bussiness_name" className={inpLableSty} >Business name</label>
//                         <Field id="bussiness_name" name="bussiness_name" value={formik.values.bussiness_name} className={formik.touched.bussiness_name && formik.errors.bussiness_name ? inputTextStylesError : inputTextStyles2} placeholder="Enter Your Company name" {...formik.getFieldProps('bussiness_name')} />
//                         {formik.touched.bussiness_name && formik.errors.bussiness_name ? (
//                           <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.bussiness_name}</div>
//                         ) : null}

//                       </div>
//                       <div className=" flex flex-col  relative  border-b-gray-400">
//                         <label htmlFor="annual_revenue" className={inpLableSty} >Annual Revenue</label>
//                         <Field id="annual_revenue" name="annual_revenue" value={formik.values.annual_revenue} className={formik.touched.annual_revenue && formik.errors.annual_revenue ? inputTextStylesError : inputTextStyles2} placeholder="Enter Your Company name" {...formik.getFieldProps('annual_revenue')} />
//                         {formik.touched.annual_revenue && formik.errors.annual_revenue ? (
//                           <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.annual_revenue}</div>
//                         ) : null}

//                       </div>
//                       <div className=" flex flex-col  relative  border-b-gray-400">
//                         <label htmlFor="gst_number" className={inpLableSty} >GST number</label>
//                         <Field id="gst_number" name="gst_number" value={formik.values.gst_number} className={formik.touched.gst_number && formik.errors.gst_number ? inputTextStylesError : inputTextStyles2} placeholder="Enter Your Company name" {...formik.getFieldProps('gst_number')} />
//                         {formik.touched.gst_number && formik.errors.gst_number ? (
//                           <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.gst_number}</div>
//                         ) : null}

//                       </div>
                      // <div className=" flex flex-col  relative  border-b-gray-400">
                      //   <label htmlFor="bussiness_type" className={inpLableSty} >Height</label>
                      //   <Field id="bussiness_type" name="bussiness_type" as='select' value={formik.values.bussiness_type} className={formik.touched.bussiness_type && formik.errors.bussiness_type ? inputTextStylesError : inputTextStyles2} placeholder="Enter Your City" {...formik.getFieldProps('bussiness_type')} >

                      //     <option disabled value="">Select Bussiness type</option>
                      //     <option value="privatelimited">Private Limited</option>
                      //     <option value="llp">LLP</option>
                      //     <option value="propritorship">Propritorship</option>
                      //     <option value="corporation">Corporation</option>

                      //   </Field>
                      //   {formik.touched.bussiness_type && formik.errors.bussiness_type ? (
                      //     <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.weight}</div>
                      //   ) : null}
                      // </div>
                      // <div className=" flex flex-col  relative  border-b-gray-400">
                      //   <label htmlFor="spare_amount" className={inpLableSty} >Spare Amount</label>
                      //   <Field id="spare_amount" name="spare_amount" value={formik.values.spare_amount} className={formik.touched.spare_amount && formik.errors.spare_amount ? inputTextStylesError : inputTextStyles2} placeholder="Enter your annual Spare Amount" {...formik.getFieldProps('spare_amount')} />
                      //   {formik.touched.spare_amount && formik.errors.spare_amount ? (
                      //     <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.spare_amount}</div>
                      //   ) : null}

                      // </div>

//                     </>)

//                 }
//                 {
//                   formik.values.sourse_of_income === 'employment' && (
//                     <>
//                       <div className=" flex flex-col  relative  border-b-gray-400">
//                         <label htmlFor="company_name" className={inpLableSty} >Company Name</label>
//                         <Field id="company_name" name="company_name" value={formik.values.company_name} className={formik.touched.company_name && formik.errors.company_name ? inputTextStylesError : inputTextStyles2} placeholder="Enter Your Company name" {...formik.getFieldProps('company_name')} />
//                         {formik.touched.company_name && formik.errors.company_name ? (
//                           <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.company_name}</div>
//                         ) : null}

//                       </div>
//                     </>)

//                 }

//                 <button type="submit" className='border border-blue-400 px-5 py-2 mt-5 rounded-full hover:shadow-lg   hover:shadow-blue-200 hover:bg-blue-700 transition-colors bg-blue-600 text-sm font-semibold text-white self-center '>Submit</button>
//               </Form>)}
//           </Formik>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default PageTwo;


import React from "react";
import "./PageTwo.css";
import { Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { errorText, inpLableSty, inputTextStyles2, inputTextStylesError } from "../../../../../utilities/styleclasses";


const PageTwo = ({ onButtonClick }) => {
  return (
    <div className='flex flex-1 items-center justify-center gap-10'>
      {/* Form Section */}
      <div className='h-200px w-[800px]'>
        <div className='border px-6 py-3 rounded-2xl border-blue-100 shadow-blue-200 shadow-lg'>


          <Formik

            initialValues={{
              sourse_of_income: '',

              profession: {
                company_name: '',
                annual_income:'',
                bussiness_name: '',
                bussiness_type: '',
                gst_number: '',
                bussiness_annual_revenue: '',
                employment_spare_amount: '',
                bussiness_spare_amount: '',
              }
            }}


            validationSchema={Yup.object({
              sourse_of_income: Yup.string().required(),
              profession: Yup.object().when('sourse_of_income', {
                is: (sourse_of_income) => sourse_of_income === 'bussiness',
                then: () => Yup.object({
                  bussiness_name: Yup.string().required("Bussiness name is required"),
                  bussiness_annual_revenue: Yup.number().required(),
                  bussiness_type: Yup.string().required(),
                  bussiness_spare_amount: Yup.number().required(),
                  gst_number: Yup.number().required(),
                }),

              }).when('sourse_of_income', {
                is: (sourse_of_income) => sourse_of_income === 'employment',
                then: () => Yup.object({
                  company_name: Yup.string().required(),
                  employment_spare_amount: Yup.string().required(),
                  annual_income:  Yup.string().required(),

                })
              }),
            })}
              onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              if(values.sourse_of_income==="employment"){
                const temp = {
                  sourse_of_income:values.sourse_of_income,
                  company_name: values.profession.company_name,
                  annual_income:values.profession.annual_income,
                  spare_amount:values.profession.employment_spare_amount ,
                }
                alert(JSON.stringify(temp))
                onButtonClick("pagethree")
              }
              if(values.sourse_of_income==="bussiness"){
                const temp = {
                  sourse_of_income:values.sourse_of_income,
                  bussiness_name: values.profession.bussiness_name,
                  bussiness_annual_revenue:values.profession.bussiness_annual_revenue,
                  bussiness_type: values.profession.bussiness_type,
                  bussiness_spare_amount: values.profession.bussiness_spare_amount,
                  gst_number: values.profession.gst_number
                }
                alert(JSON.stringify(temp))
                onButtonClick("pagethree")
              }



            }}
          >
            {formik => (
              <Form className='  flex flex-col p-5  gap-8'>
                <h1 className='text-center text-xl font-bold border-b-2 pb-2 self-center px-4 border-b-blue-600'>Professional Details</h1>

                <div className=" flex flex-col  relative  border-b-gray-400">
                  <label htmlFor="sourse_of_income" className={inpLableSty} >Source of Income</label>
                  <Field id="sourse_of_income" name="sourse_of_income" as='select' value={formik.values.sourse_of_income} className={formik.touched.sourse_of_income && formik.errors.sourse_of_income ? inputTextStylesError : inputTextStyles2} placeholder="Enter Your sourse_of_income" {...formik.getFieldProps('sourse_of_income')} >

                    <option disabled value="">Select sourse of income</option>
                    <option value="bussiness">Bussiness</option>
                    <option value="employment">Employment</option>

                  </Field>
                  {formik.touched.sourse_of_income && formik.errors.sourse_of_income ? (
                    <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.sourse_of_income}</div>
                  ) : null}



                </div>

                {
                  formik.values.sourse_of_income === 'bussiness' && (
                    <>
                      <div className=" flex flex-col  relative  border-b-gray-400">
                        <label htmlFor="profession.bussiness_name" className={inpLableSty} >Bussiness Name</label>
                        <Field id="profession.bussiness_name" name="profession.bussiness_name" value={formik.values.profession.bussiness_name}
                          className={formik.touched?.profession?.bussiness_name && formik.errors?.profession?.bussiness_name ? inputTextStylesError : inputTextStyles2}
                          placeholder="Enter Your Bussiness name" {...formik.getFieldProps('profession.bussiness_name')} />

                        {formik.touched?.profession?.bussiness_name && formik.errors?.profession?.bussiness_name ? (
                          <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors?.profession?.bussiness_name}</div>
                        ) : null}
                      </div>

                      <div className=" flex flex-col  relative  border-b-gray-400">
                        <label htmlFor="bussiness_annual_revenue" className={inpLableSty} >Annual Revenue</label>
                        <Field id="bussiness_annual_revenue" name="profession.bussiness_annual_revenue" value={formik.values.profession.bussiness_annual_revenue} className={formik.touched?.profession?.bussiness_annual_revenue && formik.errors?.profession?.bussiness_annual_revenue ? inputTextStylesError : inputTextStyles2} placeholder="Enter Your Company name" {...formik.getFieldProps('profession.bussiness_annual_revenue')} />
                        {formik.touched?.profession?.bussiness_annual_revenue && formik.errors?.profession?.bussiness_annual_revenue ? (
                          <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors?.profession?.bussiness_annual_revenue}</div>
                        ) : null}

                      </div>

                      <div className=" flex flex-col  relative  border-b-gray-400">
                        <label htmlFor="gst_number" className={inpLableSty} >GST number</label>
                        <Field id="gst_number" name="profession.gst_number" value={formik.values.profession?.gst_number} className={formik.touched.profession?.gst_number && formik.errors.profession?.gst_number ? inputTextStylesError : inputTextStyles2} placeholder="Enter Your Company name" {...formik.getFieldProps('profession.gst_number')} />
                        {formik.touched.profession?.gst_number && formik.errors.profession?.gst_number ? (
                          <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.profession?.gst_number}</div>
                        ) : null}

                      </div>
                      <div className=" flex flex-col  relative  border-b-gray-400">
                        <label htmlFor="bussiness_type" className={inpLableSty} >Business Type</label>
                        <Field id="bussiness_type" name="profession.bussiness_type" as='select' value={formik.values.profession?.bussiness_type} className={formik.touched.profession?.bussiness_type && formik.errors.profession?.bussiness_type ? inputTextStylesError : inputTextStyles2} placeholder="Enter Your City" {...formik.getFieldProps('profession.bussiness_type')} >

                          <option disabled value="">Select Bussiness type</option>
                          <option value="privatelimited">Private Limited</option>
                          <option value="llp">LLP</option>
                          <option value="propritorship">Propritorship</option>
                          <option value="corporation">Corporation</option>

                        </Field>
                        {formik.touched.profession?.bussiness_type && formik.errors.profession?.bussiness_type ? (
                          <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.weight}</div>
                        ) : null}
                      </div>

                      <div className=" flex flex-col  relative  border-b-gray-400">
                        <label htmlFor="bussiness_spare_amount" className={inpLableSty} >Spare Amount</label>
                        <Field id="bussiness_spare_amount" name="bussiness_spare_amount" value={formik.values.profession.bussiness_spare_amount} className={formik.touched.profession?.bussiness_spare_amount && formik.errors.profession?.bussiness_spare_amount ? inputTextStylesError : inputTextStyles2} placeholder="Enter your annual Spare Amount" {...formik.getFieldProps('profession.bussiness_spare_amount')} />
                        {formik.touched.profession?.bussiness_spare_amount && formik.errors.profession?.bussiness_spare_amount ? (
                          <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.profession?.bussiness_spare_amount}</div>
                        ) : null}

                      </div>

                    </>
                  )
                }
                {
                  formik.values.sourse_of_income === 'employment' && (
                    <>
                      <div className=" flex flex-col  relative  border-b-gray-400">
                        <label htmlFor="profession.company_name" className={inpLableSty} >Company Name</label>
                        <Field id="profession.company_name" name="profession.company_name" value={formik.values.profession.company_name}
                          className={formik.touched?.profession?.company_name && formik.errors?.profession?.company_name ? inputTextStylesError : inputTextStyles2}
                          placeholder="Enter Your Company name" {...formik.getFieldProps('profession.company_name')} />

                        {formik.touched?.profession?.company_name && formik.errors?.profession?.company_name ? (
                          <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors?.profession?.company_name}</div>
                        ) : null}
                      </div>

                      <div className=" flex flex-col  relative  border-b-gray-400">
                        <label htmlFor="employment_spare_amount" className={inpLableSty} >Spare Amount</label>
                        <Field id="employment_spare_amount" name="employment_spare_amount" value={formik.values.profession.employment_spare_amount} className={formik.touched.profession?.employment_spare_amount && formik.errors.profession?.employment_spare_amount ? inputTextStylesError : inputTextStyles2} placeholder="Enter your annual Spare Amount" {...formik.getFieldProps('profession.employment_spare_amount')} />
                        {formik.touched.profession?.employment_spare_amount && formik.errors.profession?.employment_spare_amount ? (
                          <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.profession?.employment_spare_amount}</div>
                        ) : null}

                      </div>
                      <div className=" flex flex-col  relative  border-b-gray-400">
                        <label htmlFor="annual_income" className={inpLableSty} >Annual Income</label>
                        <Field id="annual_income" name="profession.annual_income" value={formik.values.profession.annual_income} className={formik.touched?.profession?.annual_income && formik.errors?.profession?.annual_income ? inputTextStylesError : inputTextStyles2} placeholder="Enter Your Company name" {...formik.getFieldProps('profession.annual_income')} />
                        {formik.touched?.profession?.annual_income && formik.errors?.profession?.annual_income ? (
                          <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors?.profession?.annual_income}</div>
                        ) : null}

                      </div>


                    </>
                  )
                }

                <button type="submit" className='border border-blue-400 px-5 py-2 mt-5 rounded-full hover:shadow-lg   hover:shadow-blue-200 hover:bg-blue-700 transition-colors bg-blue-600 text-sm font-semibold text-white self-center '>Next</button>
              </Form>)}
          </Formik>
        </div>

      </div>
    </div>
  );
}

export default PageTwo;