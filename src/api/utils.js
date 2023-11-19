import axios from "axios";
import axiosSecure from ".";



/// image Uplode fn
 export const imageUplode = async (image) => {
    const fromData = new FormData()
    fromData.append("image", image)

      const {data} = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGEBB_API_KEY}`, fromData)

    return data; 
 }


 /// single room gate
 export const singleRoom = async (id) => {
  const result = await axiosSecure.get(`/room/${id}`)
  return result; 
 }





 