import axios from "axios";



export const postSuccess=(success:boolean)=>{
   return  axios.post('https://neko-cafe-back.herokuapp.com/auth/test',{success:success})
}





