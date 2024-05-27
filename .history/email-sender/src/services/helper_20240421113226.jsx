import axios from 'axios'

const baseURL = "http://localhost:8080/api/v1/email";
//  const baseURL = '/api/v1'; // Use this for production.
console.log("Helper::baseURL " + baseURL);
export const customAxios=axios.create({
    baseURL: baseURL,
  
});

