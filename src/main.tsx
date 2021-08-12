import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// 国际化 转换中文
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'

// @ts-ignore
// import {store} from './store/index.ts'
// import { Provider } from 'react-redux'
// const render = () =>
ReactDOM.render(
      <App />
  ,document.getElementById('root')
)

// render()
// store.subscribe(render)
