import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// 国际化 转换中文
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import './assets/init.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

ReactDOM.render(
  
    <ConfigProvider locale={zhCN}>
    <App />
    </ConfigProvider>
    ,
    
  document.getElementById('root')
);

