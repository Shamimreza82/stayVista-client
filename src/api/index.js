import axios from "axios";
import { clearCookie } from "./auth";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL, 
    withCredentials: true
})

/// 
axiosSecure.interceptors.response.use((response)=>{
    return response
}, async (err)=> {
    console.log("error tarack in interseptor",err);
    if( err.response && err.response.status === 401 || err.response.status === 403 ){
       await clearCookie()
        window.location.replace('/login')
    }

   return Promise.reject(err)
})


export default axiosSecure; 