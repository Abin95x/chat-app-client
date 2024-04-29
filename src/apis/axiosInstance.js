import axios from 'axios'
require('dotenv').config()

const baseURL = process.env.USER_BASE_URL
const userBaseURL = baseURL
const adminbaseURL = `${baseURL}/admin`

const createInstance = (baseURL) => {
    const instance = axios.create({
        baseURL,
        timeout: 1000,
        // headers: {'X-Custom-Header': 'foobar'}
      });
}

const userAxiosInstace = createInstance(userBaseURL)

