import { configureStore } from '@reduxjs/toolkit'
import backTopReducer from './backTopSlice'
import artSumReducer from './artSumSlice'
import nameReducer  from './nameSlice'
import linkReducer from './linkSlice'
import avatarReducer from './avatarSlice'
import emailReducer from './emailSlice'
const store = configureStore({
  reducer: {
    backTop: backTopReducer,
    artSum: artSumReducer,
    name:nameReducer,
    link:linkReducer,
    avatar:avatarReducer,
    email:emailReducer
  }
})

// 从 store 本身推断出 `RootState` 和 `AppDispatch` 类型
export type RootState = ReturnType<typeof store.getState>
// 推断出类型: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;