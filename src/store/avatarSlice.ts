import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const avatarSlice = createSlice({
  name:'avatar',
  initialState:{
    value:''
  },
  reducers:{
    avatarReducer:(state,action) => {
      state.value = action.payload
    }
  }
})

// actions
export const { avatarReducer } = avatarSlice.actions

// state 获取，用在 useSeletor hook 上
export const selectAvatar= (state:RootState) => state.avatar

// reducer
export default avatarSlice.reducer