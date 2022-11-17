import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const artSumSlice = createSlice({
  name:'artSum',
  initialState:{
    value:0
  },
  reducers:{
    artSumReducer:(state,action) => {
      state.value = action.payload
    }
  }
})

// actions
export const { artSumReducer } = artSumSlice.actions

// state 获取，用在 useSeletor hook 上
export const selectArtSum = (state:RootState) => state.artSum

// reducer
export default artSumSlice.reducer