import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const linkSlice = createSlice({
  name:'link',
  initialState:{
    value:''
  },
  reducers:{
    linkReducer:(state,action) => {
      state.value = action.payload
    }
  }
})

// actions
export const { linkReducer } = linkSlice.actions

// state 获取，用在 useSeletor hook 上
export const selectLink= (state:RootState) => state.link

// reducer
export default linkSlice.reducer