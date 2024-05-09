import axios from 'axios'
const baseURL = 'http://localhost:3000';
const userBaseURL = baseURL
const adminbaseURL = `${baseURL}/admin`

const createInstance = (baseURL) => {
  console.log('heloooo')
    const instance = axios.create({
      baseURL,
      timeout: 1000,
      headers: {'Content-Type': 'application/json'},
      withCredentials: true,
      });
      return instance
}

export const userAxiosInstance = createInstance(userBaseURL)
export const adminAxiosInstance = createInstance(adminbaseURL)

