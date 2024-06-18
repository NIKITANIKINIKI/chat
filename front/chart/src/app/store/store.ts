// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../../features/auth/model/authSlice'
import chatReducer from '../../features/chat/model/chatSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    chat: chatReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
