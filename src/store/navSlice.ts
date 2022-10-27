import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const navSlice = createSlice({
  name:'navShow',
  initialState:{
    navShow:true
  },
  reducers:{
    setNavShow:(state,action) => {
      state.navShow = action.payload
    }
  }
})

// actions
export const { setNavShow } = navSlice.actions

// state 获取，用在 useSeletor hook 上
export const selectNavShow = (state:RootState) => state.nav

// reducer
export default navSlice.reducer