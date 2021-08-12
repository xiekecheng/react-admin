import React, { useEffect } from 'react'
import '@/assets/init.css'
import 'antd/dist/antd.css'
import LayoutPage from '@/views/LayoutPage'
import Login from '@/views/Login'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { getUserInfo } from '@/store/reducer/user'
function DashBoard() {
	const dispatch = useAppDispatch()
	const token = useAppSelector(state => state.user.token)
	const user = useAppSelector(state => state.user.user)
	// 有token,则用token获取user信息
	useEffect(() => {
		if (token) {
			dispatch(getUserInfo(token))
		}
	}, [token])
	// useEffect(() => {
	// 	if (!token) {
	// 	}
	// }, [token])

	return <>{token ? user.roleName ? <LayoutPage /> : '' : <Login />}</>
}

export default DashBoard
