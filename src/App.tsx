import React from 'react'
import '@/assets/init.css'
import zhCN from 'antd/lib/locale/zh_CN'
import { Provider } from 'react-redux'
import DashBoard from '@/dashboard/'
import { store } from '@/store'
import { HashRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'

const App = ()=> {
	// const useAppSelector()

	return (
		<HashRouter>
			<Provider store={store}>
				<ConfigProvider locale={zhCN}>
					<DashBoard />
				</ConfigProvider>
			</Provider>
		</HashRouter>
	)
}

export default App
