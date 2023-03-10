import axios from 'axios'

export const instance = axios.create({
  //* baseURL localhost는 cors 문제로 인해 ip 설정해야함
  baseURL: 'http://192.168.1.90:3000',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    withCredentials: true,
    Authorization: localStorage.getItem('access-token'),
  },
})

export default instance
