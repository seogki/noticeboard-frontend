import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CommonState {
  isLogin: boolean
}

const initialState: CommonState = {
  isLogin: false,
}
export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLoginState(state, action: PayloadAction<boolean>) {
      state.isLogin = action.payload
    },
  },
})

export const { setLoginState } = loginSlice.actions

export default loginSlice
