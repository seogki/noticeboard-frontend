import { Message } from '@interface/base'
import instance from './axios'

export async function getMember<T>(): Promise<Message<T> | undefined> {
  try {
    const response = await instance.get('/api/members/member')
    const { data } = response
    return data
  } catch (e) {
    console.error(e)
    return undefined
  }
}
