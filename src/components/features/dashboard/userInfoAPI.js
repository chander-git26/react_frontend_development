import axios from "axios"
const SAVE_PERSONAL_BASEURL = 'http://localhost:8280/user/savePersonalInformation'
const SAVE_PROFESSIONAL_BASEURL = 'http://localhost:8280/user/savePersonalInformation'
const SAVE_FAMILY_BASEURL = 'http://localhost:8280/user/saveFamilyInformation'
const SAVE_MEDICAL_BASEURL = 'http://localhost:8280/user/saveMedicalInformation'


export const postPersonalInfo = async(body)=>{
    await axios(
        {
            method: 'post',
            url: SAVE_PERSONAL_BASEURL,
            headers:{
                'Content-Type': 'application/json'
            },
            data:{...body}
          }
        )
}
export const postProfessionalInfo = async(body)=>{
    await axios(
        {
            method: 'post',
            url: SAVE_PROFESSIONAL_BASEURL,
            headers:{
                'Content-Type': 'application/json'
            },
            data:{...body}
          }
        )
}
 
export const postFamilyInfo = async(body)=>{
    await axios(
        {
            method: 'post',
            url: SAVE_FAMILY_BASEURL,
            headers:{
                'Content-Type': 'application/json'
            },
            data:{...body}
          }
        )
}
 
export const postMedicalInfo = async(body)=>{
    await axios(
        {
            method: 'post',
            url: SAVE_MEDICAL_BASEURL,
            headers:{
                'Content-Type': 'application/json'
            },
            data:{...body}
          }
        )
}
 