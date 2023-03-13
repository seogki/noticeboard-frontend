import { Message } from '@interface/base'
import instance from './axios'

export async function signUp(payload: { path?: any; data?: any }) {
  try {
    const response = await instance.post('/api/auth/signup', payload.data)
    const { data } = response
    return data
  } catch (e) {
    console.error(e)
    return undefined
  }
}
export async function login<T>(payload: {
  path?: any
  data?: any
}): Promise<Message<T> | undefined> {
  try {
    const response = await instance.post('/api/auth/login', payload.data)
    const { data } = response
    return data
  } catch (e) {
    console.error(e)
    return undefined
  }
}
export async function resetPassword<T>(payload: {
  path?: any
  data?: any
}): Promise<Message<T> | undefined> {
  try {
    const response = await instance.post('/api/auth/reset', payload.data)
    const { data } = response
    return data
  } catch (e) {
    console.error(e)
    return undefined
  }
}
export async function changePassword<T>(payload: {
  path?: any
  data?: any
}): Promise<Message<T> | undefined> {
  try {
    const response = await instance.post('/api/auth/change', payload.data)
    const { data } = response
    return data
  } catch (e) {
    console.error(e)
    return undefined
  }
}
