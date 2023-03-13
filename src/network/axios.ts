import axios from 'axios'

export const instance = axios.create({
  //* baseUrl dev시 ip주소 설정을 하지 않아야지만 package.json proxy가 먹힘
  // baseURL: 'http://192.168.1.90:3000',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    withCredentials: true,
  },
})

instance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem(
      'access-token'
    )}`
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default instance
