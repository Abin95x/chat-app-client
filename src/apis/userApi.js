import { userAxiosInstance } from "./axiosInstance";

export const userSignup = async (values) => {
    console.log(values)
    const data = await userAxiosInstance.post('/signup',values)
  
    return data
}