import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const nameSlice = createSlice({
  name:'name',
  initialState:{
    value:''
  },
  reducers:{
    nameReducer:(state,action) => {
      state.value = action.payload
    }
  }
})

// actions
export const { nameReducer } = nameSlice.actions

// state 获取，用在 useSeletor hook 上
export const selectName= (state:RootState) => state.name

// reducer
export default nameSlice.reducer