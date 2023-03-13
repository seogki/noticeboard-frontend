import { Member } from '@interface/member'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import staticMethods from 'antd/es/message'

interface CommonState {
  member?: Member
}

const initialState: CommonState = {}
export const memberSlice = createSlice({
  name: 'member',
  initialState,
  reducers: {
    setMember: (state, action: PayloadAction<Member>) => {
      state.member = action.payload
    },
  },
})

export const { setMember } = memberSlice.actions

export default memberSlice
