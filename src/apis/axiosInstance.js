import axios from 'axios'


const baseURL = import.meta.env.USER_BASE_URL;
const userBaseURL = baseURL
const adminbaseURL = `${baseURL}/admin`

const createInstance = (baseURL) => {
    const instance = axios.create({
        baseURL,
        timeout: 1000,
        // headers: {'X-Custom-Header': 'foobar'}
      });
      return instance
}

export const userAxiosInstance = createInstance(userBaseURL)
export const adminAxiosInstance = createInstance(adminbaseURL)

