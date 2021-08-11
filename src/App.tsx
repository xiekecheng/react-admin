import React, { useEffect } from 'react'
import '@/assets/App.css'
import './assets/init.css'
// import './app.scss'
import 'antd/dist/antd.css' // or 'antd/dist/antd.less'
import LayoutPage from '@/views/LayoutPage'
import Login from '@/views/Login'
import { BrowserRouter,Route,Switch, useHistory } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { getUserInfo } from '@/store/counterSlice'
function App() {
	const dispatch = useAppDispatch()
	const token = useAppSelector(state => state.counter.token)
	const user = useAppSelector(state => state.counter.user)
	useHistory().replace('/login')
	// 有token,则用token获取user信息
	useEffect(() => {
		if (token) {
			dispatch(getUserInfo(token))
		}
	}, [token])
  useEffect(()=>{
		if(!token){
			
		}
  }, [token])
	return (
		<>
		<BrowserRouter>
			<Switch>
				<Route path='/' component={LayoutPage}/>
				<Route path='/login' component={Login}/>
			</Switch>
		</BrowserRouter>
		</>
	)
}

export default App
