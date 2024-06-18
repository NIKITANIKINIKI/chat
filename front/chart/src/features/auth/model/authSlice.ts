import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  params: Params | null
}

interface Params {
  name: string
  room: string
}

const initialState: AuthState = {
  params: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setParams: (state, action: PayloadAction<Params>) => {
      state.params = action.payload
    },
  },
})

export const { setParams } = authSlice.actions
export default authSlice.reducer
