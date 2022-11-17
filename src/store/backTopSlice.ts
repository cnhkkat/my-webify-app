import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const backTopSlice = createSlice({
  name:'backTop',
  initialState:{
    value:true
  },
  reducers:{
    backTopReducer:(state,action) => {
      state.value = action.payload
    }
  }
})

// actions
export const { backTopReducer } = backTopSlice.actions

// state 获取，用在 useSeletor hook 上
export const selectBackTop = (state:RootState) => state.backTop

// reducer
export default backTopSlice.reducer