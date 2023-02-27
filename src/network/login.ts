import axios from 'axios'

export async function getUser(payload: { path?: any; data?: any }) {
  try {
    const response = await axios.get('/user', payload)
  } catch (e) {
    console.error(e)
  }
}
export async function postUser(payload: { path?: any; data?: any }) {
  try {
    const response = await axios.post('/user', payload.data)
  } catch (e) {
    console.error(e)
  }
}
