/*
 * @Author: xkccoding@gmail.com
 * @Date: 2021-08-09 18:59:34
 * @LastEditTime: 2021-08-14 13:11:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-admin/src/store/index.ts
 */
import { configureStore } from '@reduxjs/toolkit'
import user from '@/store/reducer/user'
import article from '@/store/reducer/article'
// import logger from 'redux-logger'

export const store = configureStore({
	reducer: {
		user,																																																												
		article
	},

	// middleware: (getDefaultMiddleware => ([...getDefaultMiddleware(), logger]) )
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
