import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CommonState {
  isLogin: boolean
}

const initialState: CommonState = {
  isLogin: false,
}
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoginState(state, action: PayloadAction<boolean>) {
      state.isLogin = action.payload
    },
  },
})

export const { setLoginState } = authSlice.actions

export default authSlice
