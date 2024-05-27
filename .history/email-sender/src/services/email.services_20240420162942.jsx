import { customAxios } from "./helper";

export async function sendEmail(emailData) {
  const result=(await customAxios.post(`/email/send`, emailData)).data;
    // .then((response) => {   
    //     alert('Email sent successfully:', response.data);
    //     return response.data;
    // })
    // .catch((error) => {
    //     alert('Error sending email:', error);
    //     throw error;
    // })
}