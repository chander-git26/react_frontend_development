import React from "react";
import "./PageThree.css";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { inpLableSty, inputTextStyles2 } from "../../../../../utilities/styleclasses";
import { postFamilyInfo } from "../../userInfoAPI";
import { selectLoggedInUser } from "../../../auth/userSlice";
import { useSelector } from "react-redux";
 
 
 
 
 
const PageThree = ({ onButtonClick }) => {

  const userstatus = useSelector(selectLoggedInUser)


  const showDetails = (type, value, formik) => {
    formik.setFieldValue(type, value);
    console.log(formik.values);
  };

 
  function updateCheckboxes(checkbox) {
    var checkboxes = document.getElementsByName('relationship');
    var checkedCount = 0;
   
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        checkedCount++;
      }
      // console.log(checkboxes);
    }
   
    if (checkedCount > 2) {
      checkbox.checked = false;
    }
   
    for (var j = 0; j < checkboxes.length; j++) {
      if (!checkboxes[j].checked && checkedCount >= 2) {
        checkboxes[j].disabled = true;
      } else {
        checkboxes[j].disabled = false;
      }
    }
  }
 
  return (
    <div className='flex flex-1 items-center justify-center gap-16'>
      {/* Form Section */}
      <div className='h-200px w-[800px]'>
        <div className='border px-6 py-3 rounded-2xl border-blue-100 shadow-blue-200 shadow-lg'>
 
          <Formik
            initialValues={{
 
              showFatherDetails: false,
              showMotherDetails: false,
              showSpouseDetails: false,
              showOthersDetails: false,
              fatherName: '',
              fatherAge: '',
              fatherOccupation: '',
              motherName: '',
              motherAge: '',
              motherOccupation: '',
              spouseName: '',
              spouseAge: '',
              spouseOccupation: '',
              otherName: '',
              otherAge: '',
              otherOccupation: '',
 
 
            }}
            validationSchema={Yup.object({
 
              fatherName: Yup.string(),
              fatherAge: Yup.number().typeError("Must be a number "),
              fatherOccupation: Yup.string(),
              motherName: Yup.string(),
              motherAge:Yup.number().typeError("Must be a number "),
              motherOccupation: Yup.string(),
              spouseName: Yup.string(),
              spouseAge: Yup.number().typeError("Must be a number "),
              spouseOccupation: Yup.string(),
              otherName: Yup.string(),
              otherAge: Yup.number().typeError("Must be a number "),
              otherOccupation: Yup.string(),
 
 
 
            })}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              const temp = {id:userstatus.userId,...values}
              console.log(temp);

              const formData = new FormData();
              formData.append("fatherName", values.fatherName?values.fatherName:null);
              formData.append("fatherAge", values.fatherAge?values.fatherAge:null);
              formData.append("fatherOccupation", values.fatherOccupation?values.fatherOccupation:null);
              formData.append("motherAge", values.motherAge?values.motherAge:null);
              formData.append("motherName", values.motherName?values.motherName:null);
              formData.append("motherOccupation", values.motherOccupation?values.motherOccupation:null);
              formData.append("spouseName", values.spouseName?values.spouseName:null);
              formData.append("spouseAge", values.spouseAge?values.spouseAge:null);
              formData.append("spouseOccupation", values.spouseOccupation?values.spouseOccupation:null);
              formData.append("otherName", values.otherName?values.otherName:null);
              formData.append("otherAge", values.otherAge?values.otherAge:null);
              formData.append("otherOccupation", values.otherOccupation?values.otherOccupation:null);
              formData.append("id",userstatus.userId );
              for (const keys of formData.entries()) {
                console.log(keys);
              }
              await postFamilyInfo(formData)



              // onButtonClick("pagefour");
            }}
          >
            {(formik) => (
              <Form className='flex flex-col p-5 gap-8'>
                <h1 className='text-center text-xl font-bold border-b-2 pb-2 self-center px-4 border-b-blue-600'>
                  Family Details
                </h1>
 
 
 
 
 
 
                <form onSubmit={formik.handleSubmit}>
                  <div >
                    <div className="mb-4">
                      <div>
                        <label htmlFor="">Select Your Nominees</label>
                      </div>
                      <div className="">
                        {['Father', 'Mother', 'Spouse', 'Other'].map((relationship) => (
                          <label key={relationship} className={inpLableSty} htmlFor={`show${relationship}Details`}>
                            <input
                              type="checkbox"
                              id={`show${relationship}Details`}
                              name="relationship"
                              // disabled={formik.values.showSpouseDetails===true?true:false}
                              onChange={() => {
                                showDetails(`show${relationship}Details`, !formik.values[`show${relationship}Details`], formik);
                                updateCheckboxes(document.getElementById(`show${relationship}Details`));
                              }}
                              className="ml-5 mr-1 mt-5"
                            />
                            {relationship}
                          </label>

                        ))}
                      </div>
                    </div>
                  </div>
 
 
 
 
                          <div className="flex">
 
                {['Father', 'Mother', 'Spouse', 'Other'].map((relationship) => (
                 
                  <div key={`${relationship.toLowerCase()}Details`} >
                    {formik.values[`show${relationship}Details`] && (
                      <>
                      <h1>{relationship}</h1>
                      <ul className=" flex flex-col gap-5" >
                        <li className=" ">
                          <div>
                            <label htmlFor={`${relationship.toLowerCase()}Name`}
                              className={inpLableSty}
                              >
 
                            Name
                            </label>
                            </div>
                            <div>
 
                           
                          <input
 
                            type="text"
                            className={inputTextStyles2+' m-2'}
                           
                            id={`${relationship.toLowerCase()}Name`}
                            name={`${relationship.toLowerCase()}Name`}
                            onChange={formik.handleChange}
                            value={formik.values[`${relationship.toLowerCase()}Name`]}
                            required
                            />

                            </div>
                        </li>
 
 
 
                        <li className=" ">
                          <div>
                          <label htmlFor={`${relationship.toLowerCase()}Name`}
                            className={inpLableSty} >
                            Age
                          </label>
                          </div>
                            <div>
                          <input
                            type="text"
                            className={inputTextStyles2+' m-2'}
                           
                           
                            id={`${relationship.toLowerCase()}Age`}
                            name={`${relationship.toLowerCase()}Age`}
                            onChange={formik.handleChange}
                            value={formik.values[`${relationship.toLowerCase()}Age`]}
                            required
                            />
                             {/* {formik.touched.relationship.toLowerCase()+"age" && formik.errors.relationship.toLowerCase()+"age" ? (
                              <div className={errorText}><i className="bi bi-exclamation-circle"></i> {formik.errors.relationship.toLowerCase()+"age"}</div>
                            ) : null} */}

                            </div>
                        </li>
 
                        <li className=" ">
                        <div>
                          <label htmlFor={`${relationship.toLowerCase()}Occupation`}
                            className={inpLableSty} >
                            Occupation
                          </label>
                          </div>
                          <div>
                          <input
                            className={inputTextStyles2+' m-2'}
                            type="text"
                            id={`${relationship.toLowerCase()}Occupation`}
                            name={`${relationship.toLowerCase()}Occupation`}
                            onChange={formik.handleChange}
                            value={formik.values[`${relationship.toLowerCase()}Occupation`]}
                            required
                            />
                            </div>
                        </li>
 
                        <li  className=" ">
                          <div>
                          <label htmlFor={`${relationship.toLowerCase()}MedicalHistory`}
                            className={inpLableSty} >
                            Medical History
                          </label>
                          </div>
                          <div>
                          <input
                            type="file"
                            className={' m-2'}
                           
                            id={`${relationship.toLowerCase()}MedicalHistory`}
                            name={`${relationship.toLowerCase()}MedicalHistory`}
                            onChange={formik.handleChange}
                            value={formik.values[`${relationship.toLowerCase()}MedicalHistory`]}
                            required
                            />
                            </div>
                        </li>
 
                      </ul>
                      </>
                    )}
                  </div>
                ))}
                </div>
                </form>
 
 
                <button
                  type="submit"
                  className='border border-blue-400 px-5 py-2 mt-5 rounded-full hover:shadow-lg hover:shadow-blue-200 hover:bg-blue-700 transition-colors bg-blue-600 text-sm font-semibold text-white self-center '
                >
                  Save
                </button>
              </Form>
            )}
          </Formik>
        </div>
 
      </div>
    </div>
 
  );
};
 
export default PageThree;