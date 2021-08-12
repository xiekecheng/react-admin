import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store/index'
import { fetchLogin, fetchUserInfo,fetchUserList } from '@/api/user'
// Define a type for the slice state
type UserState = {
	value: number,
	token: string,
	user: any,
	list:any
}

// Define the initial state using that type
// 定义state初始值
const initialState: UserState = {
	value: 0,
	token: localStorage.getItem('token') || '',
	list:'',
	user: {
		roleName: '',
		nickName: '',
		token: '',
	},

}

// 登录
export const login = createAsyncThunk(
	'user/login',
	// Declare the type your function argument here:```````````````````````````````````````
	async (value: any) => {
		// const response = await fetch(`https://reqres.in/api/users/${userId}`)
		// Inferred return type: Promise<MyData>
		// 调接口
		console.log('准备请求fetchLogin')
		const result = await fetchLogin(value)
		console.log('result', result)

		localStorage.setItem('token', result.data.token)
		console.log('token', result.data.token)
		return result.data.token
	}
)

// 用token获取用户信息
export const getUserInfo = createAsyncThunk(
	'user/getUserInfo',
	async (token: string) => {
		const userInfo = await fetchUserInfo({token})
		console.log('userInfo',userInfo)
		const user = userInfo.data.data
		return user
	}
)

// 获取用户列表
export const getUserList = createAsyncThunk(
	'user/getUserList',
	async()=>{
		const userList = await fetchUserList()
		console.log('userList.data',userList.data.data);
		const list = userList.data.data
		return list
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
	extraReducers: builder => {
		builder.addCase(login.fulfilled, (state, action) => {
			state.token = action.payload
		}),
			builder.addCase(getUserInfo.fulfilled, (state, action) => {
				console.log('action.payload', action.payload)
				state.user = action.payload
			}),
			builder.addCase(getUserList.fulfilled, (state, action) => {
				state.list = action.payload
			})

	},
})

// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.user.value

export default counterSlice.reducer
