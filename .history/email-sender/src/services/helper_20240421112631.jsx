import axios from 'axios'

const baseURL = "http://localhost:8080/api/v1";
//  const baseURL = '/api/v1'; // Use this for production.

export const customAxios=axios.create({
    baseURL: baseURL,
  
});

