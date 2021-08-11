import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store/index'
import { fetchLogin } from '@/api/user'
// const history = useHistory()
// Define a type for the slice state
type CounterState = {
	value: number,
	token: string,
	// user:{
	//   roleName:string,
	//   nickName:string,
	//   token:string
	// }
	user: any
}

// Define the initial state using that type
// 定义state初始值
const initialState: CounterState = {
	value: 0,
	token: localStorage.getItem('token')||'',
	user: {
		roleName: '',
		nickName: '',
		token: '',
	},
}

export const login = createAsyncThunk(
	'counter/login',
	// Declare the type your function argument here:```````````````````````````````````````
	async (value:any) => {
		// const response = await fetch(`https://reqres.in/api/users/${userId}`)
		// Inferred return type: Promise<MyData>
		// 调接口

		// const result = await fetchLogin(value)
		// localStorage.setItem('token', result.data.data.token)
		// console.log('token', result.data.data.token);
		// return result.data.data.token

		localStorage.setItem('token','111')
		return '111'
	}
)

export const getUserInfo = createAsyncThunk('counter/getUserInfo', async (token:any) => {
	const user = await new Promise(resolve => {
		setTimeout(() => {
			const user = {
				roleName: 'editor',
				nickName: '编辑者',
				token,
			}
			resolve(user)
		}, 1000)
	})
	return user
})

export const counterSlice = createSlice({
	name: 'counter',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		GET_USER_INFO: (state, action) => {
			state.user = action.payload
		},
		LOGIN_SUCCESS: (state, action) => {
			state.token = action.payload
		},
	},
	extraReducers: builder => {
		builder.addCase(login.fulfilled, (state, action) => {
			state.token = action.payload
		}),
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
			console.log(action.payload)
			// history.push('/')
			state.user = action.payload
			
		})
	},
})

// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer
