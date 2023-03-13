import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import dateSlice from './dateSlice'
import memberSlice from './memberSlice'

const rootReducers = combineReducers({
  auth: authSlice.reducer,
  date: dateSlice.reducer,
  member: memberSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducers,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
