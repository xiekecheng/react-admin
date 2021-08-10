import React, { useEffect } from 'react'
import '@/assets/App.css'
import './assets/init.css'
import 'antd/dist/antd.css' // or 'antd/dist/antd.less'
import LayoutPage from '@/views/LayoutPage'
import Login from '@/views/Login'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { getUserInfo } from '@/store/counterSlice'
function App() {
	// const token = localStorage.getItem('token')
	const dispatch = useAppDispatch()
	const token = useAppSelector(state => state.counter.token)
	console.log('token', token)
	// 有token,则用token获取user信息
	useEffect(() => {
		if (token) {
			dispatch(getUserInfo(token))
		}
	}, [token])

		// 没有有token,则用token获取user信息
		// useEffect(() => {
		// 	if (token) {
		// 		dispatch(getUserInfo(token))
		// 	}
		// }, [token])
	return token ? <LayoutPage /> : <Login />
}

export default App
