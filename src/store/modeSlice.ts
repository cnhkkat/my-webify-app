import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const modeSlice = createSlice({
  name:'mode',
  initialState:{
    value:0
  },
  reducers:{
    modeReducer:(state,action) => {
      state.value = action.payload
    }
  }
})

// actions
export const { modeReducer } = modeSlice.actions

// state 获取，用在 useSeletor hook 上
export const selectMode = (state:RootState) => state.mode

// reducer
export default modeSlice.reducer