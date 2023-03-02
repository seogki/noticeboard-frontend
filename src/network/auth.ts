import axios from 'axios'

export async function signUp(payload: { path?: any; data?: any }) {
  try {
    const response = await axios.post('/api/auth/signup', payload.data)
    const { data } = response
    return data
  } catch (e) {
    console.error(e)
  }
}
export async function login(payload: { path?: any; data?: any }) {
  try {
    const response = await axios.post('/api/auth/login', payload.data)
    const { data } = response
    return data
  } catch (e) {
    console.error(e)
  }
}