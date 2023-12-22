import React from "react";
import "./PageOne.css";
import { errorText, inpLableSty, inputTextStyles2, inputTextStylesError } from "../../../../../utilities/styleclasses";
import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { calIcon } from "../../../../../utilities/icons";



const PageOne = ({ onButtonClick }) => {

  return (
    <div className='flex flex-1 items-center justify-center gap-16'>
      {/* Form Section */}
      <div className='h-200px'>
        <div className='border px-6 py-3 rounded-2xl border-blue-100 shadow-blue-200 shadow-lg'>

          <Formik
            initialValues={{

              address: '',
              gender: 'male',
              date_of_birth: ''

            }}
            validationSchema={Yup.object({
              address: Yup.string().trim()
                .max(20, 'Must be 15 characters or less')
                .required('Address is required'),
              gender: Yup.string()
                .required(),
                date_of_birth:Yup.string()
                .required('Date of birth required')

            })}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values))
              onButtonClick("pagetwo")


            }}
          >
            {formik => (
              <Form className='  flex flex-col p-5  gap-8'>
                <h1 className='text-center text-xl font-bold border-b-2 pb-2 self-center px-4 border-b-blue-600'>Personal Details</h1>


                <div className=" flex flex-col  relative  border-b-gray-400">
                  <label htmlFor="address" className={inpLableSty} >ADDRESS</label>
                  <Field id="address" name="address" value={formik.values.address} className={formik.touched.address && formik.errors.address ? inputTextStylesError : inputTextStyles2} placeholder="Enter Your Address" {...formik.getFieldProps('address')} />
                  {formik.touched.address && formik.errors.address ? (
                    <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.address}</div>
                  ) : null}

                </div>
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
                    {console.log(formik.values)}
                  </div>
                  {formik.touched.gender && formik.errors.gender ? (
                    <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.gender}</div>
                  ) : null}

                </div>
                <div className=" flex flex-col  relative  border-b-gray-400">


                  <div id="my-radio-group" className={inpLableSty}>Date of Birth</div>
                  <Field name="date_of_birth"    {...formik.getFieldProps('date_of_birth')}>
                    {({ field, form }) => (
                      <DatePicker
                        className={formik.touched.address && formik.errors.address ? inputTextStylesError +' w-full' : inputTextStyles2 +' w-full'}
                        id="date"
                        {...field}
                        selected={field.value}
                        dateFormat="dd/MM/yyyy"
                        showIcon
                        icon={calIcon}
                        onChange={(date) => form.setFieldValue(field.name, date)}
                      />
                    )}
                  </Field>
                  {formik.touched.date_of_birth && formik.errors.date_of_birth ? (
                    <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.date_of_birth}</div>
                  ) : null}
                </div>


                <button type="submit" className='border border-blue-400 px-5 py-2 mt-5 rounded-full hover:shadow-lg w-full  hover:shadow-blue-200 hover:bg-blue-700 transition-colors bg-blue-600 text-sm font-semibold text-white self-center '>Submit</button>
              </Form>)}
          </Formik>
        </div>

      </div>
    </div>
  );
};

export default PageOne;
