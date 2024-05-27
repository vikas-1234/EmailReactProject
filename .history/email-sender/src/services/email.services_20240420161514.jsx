import { customAxios } from "./helper";

export async function sendEmail(emailData) {
  await customAxios.post('/send-email', emailData)
    .then((response) => {   
        alert('Email sent successfully:', response.data);
        return response.data;
    })
    .catch((error) => {
        alert('Error sending email:', error);
        throw error;
    })
}