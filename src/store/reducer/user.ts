/*
 * @Author: your name
 * @Date: 2021-08-11 11:10:57
 * @LastEditTime: 2021-08-13 20:22:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-admin/src/store/reducer/user.ts
 */
// TODO  
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store/index'
import {
	fetchLogin,
	fetchUserInfo,
	fetchUserList,
	fetchAddUser,
	fetchSearchUser,
	fetchChangeUserStatus,
} from '@/api/user'
// Define a type for the slice state
type UserState = {
	value: number,
	token: string,
	user: any,
	list: any,
	total:number
}
//
// 定义state初始值
const initialState: UserState = {
	value: 0,
	token: localStorage.getItem('token') || '',
	list: '',
	total:0,
	user: {
		roleName: '',
		nickName: '',
		token: '',
	},
}

// 登录
export const login = createAsyncThunk(
	'user/login',
	// 定义传入参数
	async (value: any) => {
		// const response = await fetch(`https://reqres.in/api/users/${userId}`)
		// 调接口
		const result = await fetchLogin(value)
		localStorage.setItem('token', result.data.token)
		return result.data.token
	}
)

// 用token获取用户信息
export const getUserInfo = createAsyncThunk(
	'user/getUserInfo',
	async (token: string) => {
		const userInfo = await fetchUserInfo({ token })
		const user = userInfo.data.data
		return user
	}
)

// 获取用户列表
export const getUserList = createAsyncThunk('user/getUserList', async (params:object) => {
	const userList = await fetchUserList(params)
	console.log('userList',userList.data);
	const list = userList.data.data
	console.log('list',list);
	// return list
	return userList.data.data
})

// 搜索用户
export const getSearchUser = createAsyncThunk('user/getSearchUser',async(username:object)=>{
	const list = await fetchSearchUser(username)
	console.log(list.data.data)
	return list.data.data
	
})

// 添加用户
export const addUser = createAsyncThunk(
	'user/addUser',
	async (user: object) => {
		const data = await fetchAddUser(user)
		console.log('data',data)
		return data.data
	}
)

// 修改用户状态
export const changeUserStatus = createAsyncThunk(
	'user/antd/changeUserStatus',
	async (params:object)=>{
		const result = await fetchChangeUserStatus(params)
		console.log(result);
		
	}
)

export const counterSlice = createSlice({
	name: 'user',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		// GET_USER_INFO: (state, action) => {
		// 	state.user = action.payload
		// },
		// LOGIN_SUCCESS: (state, action) => {
		// 	state.token = action.payload
		// },
	},
	extraReducers: (builder) => {
		builder.addCase(login.fulfilled, (state, action) => {
			state.token = action.payload
		}),
			builder.addCase(getUserInfo.fulfilled, (state, action) => {
				state.user = action.payload
			}),
			builder.addCase(getUserList.fulfilled, (state, action) => {
				console.log('action.payload',action.payload);
				state.list = action.payload.userList
				state.total = action.payload.total
			})
			,
			builder.addCase(addUser.fulfilled, (state, action) => {
				// state.list = action.payload
			})
	},
})

// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.user.value

export default counterSlice.reducer
