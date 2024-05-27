import { log } from "console";
import { customAxios } from "./helper";

export async function sendEmail(emailData) {
    // console.log(" sendEmail::emailData " + emailData);
  const result=(await customAxios.post(`/send`, emailData)).data;
//   console.log("sendEmail::Result " + result);
    return  result;
  
  // .then((response) => {   
    //     alert('Email sent successfully:', response.data);
    //     return response.data;
    // })
    // .catch((error) => {
    //     alert('Error sending email:', error);
    //     throw error;
    // })
}