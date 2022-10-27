import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const artSumSlice = createSlice({
  name:'artSum',
  initialState:{
    artSum:0
  },
  reducers:{
    setArtSum:(state,action) => {
      state.artSum = action.payload
    }
  }
})

// actions
export const { setArtSum } = artSumSlice.actions

// state 获取，用在 useSeletor hook 上
export const selectArtSum = (state:RootState) => state.artSum

// reducer
export default artSumSlice.reducer