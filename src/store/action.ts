import { GET_USER_INFO, LOGIN_SUCCESS } from './types'
import { useHistory } from 'react-router-dom'
// let history = useHistory()
// 用于获取用户信息
export function getUserInfo(token) {
	//   let history = useHistory()
	return dispatch => {
		setTimeout(() => {
			const user = {
				roleName: 'admin',
				nickName: '打工人',
				token,
			}
			dispatch({ type: GET_USER_INFO, payload: user })
			//   路由跳转
			//   history.push("/")
		}, 1000)
	}
}

// 用户登录
export function login(params) {
	console.log('login---');
	
	return dispatch => {
		// axios login
		setTimeout(() => {
			const token = 'from api token111'
			console.log('获取token', token)

			// 拿到了token
			// 用token当作入参，再调接口获取用户信息
			dispatch({ type: LOGIN_SUCCESS, payload: token })
			localStorage.setItem('token', token)
			dispatch(getUserInfo(token))
		}, 1000)
	}
}
