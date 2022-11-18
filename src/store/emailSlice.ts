import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const emailSlice = createSlice({
  name:'email',
  initialState:{
    value:''
  },
  reducers:{
    emailReducer:(state,action) => {
      state.value = action.payload
    }
  }
})

// actions
export const { emailReducer } = emailSlice.actions

// state 获取，用在 useSeletor hook 上
export const selectEmail= (state:RootState) => state.email

// reducer
export default emailSlice.reducer