import { customAxios } from "./helper";

export async function sendEmail(emailData) {
  await customAxios.post('/send-email', emailData)
    .then((response) => {   
        console.log('Email sent successfully:', response.data);
        return response.data;
    })
    .catch((error) => {
        console.error('Error sending email:', error);
        throw error;
    })
}