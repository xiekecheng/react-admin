import './style.scss'
import React, { useCallback, useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Layout, Menu } from 'antd'
const { SubMenu } = Menu
import loadable from '@loadable/component'
// 路由懒加载
// const Counter = loadable(() => import('./study/Counter'))
// const About = loadable(() => import('./study/About'))
// const Topics = loadable(() => import('./study/Topics'))
const GoodsList = loadable(() => import('./goods/GoodsList'))
const GoodsAdd = loadable(() => import('./goods/GoodsAdd'))
const GoodsUpdate = loadable(() => import('./goods/GoodsUpdate'))
import { useAppSelector } from '@/store/hooks'
import goodsArr from '@/router'
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined,
	TeamOutlined,
} from '@ant-design/icons'
const { Header, Sider, Content } = Layout
// LayoutPage组件
const LayoutPage = () => {
	const [collapsed, setCollapsed] = useState(false)
	const user = useAppSelector(state => state.counter.user)
	console.log('user', user)

	const toggle = () => {
		setCollapsed(!collapsed)
	}
	// Sider栏菜单渲染函数
	const renderMenu = arr => {
		console.log('开始渲染菜单', arr)
		return arr.map(
			item =>
				item.permission.includes(user.roleName) && (
					<SubMenu key={item.id} icon={item.icon} title={item.title}>
						{item.children &&
							item.children.map(
								ele =>
									ele.permission.includes(user.roleName) && (
										<Menu.Item key={ele.id}>
											<Link to={ele.path}>{ele.title}</Link>
										</Menu.Item>
									)
							)}
					</SubMenu>
				)
		)
	}
	// 渲染动态路由
	// const renderRecursion = arr =>{
	// 	return arr.map(ele=>(
	// 		(ele.component&&ele.permission.includes(user.roleName))&&<Route path={ele.path} component={ele.component} />)
	// 		(ele.children&&renderRecursion(ele.children))
	// 		)
	// }

	// let resultArr: any = []
	// const renderRecursion = arr => {
	// 	console.log('开始渲染路由', resultArr)
	// 	arr.map(item => {
	// 		// 含有权限且是路由 则添加进去
	// 		if (item.permission.includes(user.roleName) && item.component) {
	// 			console.log('user.roleName'), user.roleName

	// 			resultArr.push(
	// 				<Route key={item.id} path='/goods_list' component={GoodsList} />
	// 			)
	// 		}
	// 		if (item.children) {
	// 			console.log('item.children', item.children)

	// 			renderRecursion(item.children)
	// 		}
	// 	})
	// }

	// Luyou
	// const renderRoutes = arr => {
	// 	console.log('开始渲染路由', arr,user.roleName)
	// 	return arr.map(item => {
	// 		item.children &&
	// 			item.children.map(
	// 				ele =>
	// 					ele.permission.includes(user.roleName) && (
	// 						<Route exact key={ele.id} path={ele.path} component={ele.component} />
	// 					)
	// 			)
	// 	})
	// }

	// useCallback((arr) => {
	// 	let resultArr: any = []
	// 	const renderRecursion = arr => {
	// 		console.log('开始渲染路由', resultArr)
	// 		arr.map(item => {
	// 			// 含有权限且是路由 则添加进去
	// 			if (item.permission.includes(user.roleName) && item.component) {
	// 				resultArr.push(
	// 					<Route key={item.id} path='/goods_list' component={GoodsList} />
	// 				)
	// 			}
	// 			if (item.children) {
	// 				console.log('item.children', item.children)

	// 				renderRecursion(item.children)
	// 			}
	// 		})
	// 	}
	// }, [])

	const renderRoute = useCallback(
	  (arr, flag) => {
	    let result:any = []
	    const recursion = arr => {
				console.log('开始渲染路由规则');
	      arr.map(ele=>{
	        if(!flag || ele.permission.includes(user.roleName)) {
	          result.push(
	            <Route exact key={ele.id} path={ele.path} component={ele.component} />
	          )
	        }
	        if(ele.children) recursion(ele.children)
	      })
	    }
	    arr.map(ele=>{
	      recursion(ele.children)
	    })
	    return result
	  },
	  []
	)

	return (
		<>
			<Router>
				<Layout>
					<Sider trigger={null} collapsible collapsed={collapsed}>
						<div className='logo'>
							<img src='' alt='' />
						</div>
						<Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
							{/* Sider菜单栏渲染 */}
							{/* {user.roleName&&renderMenu(goodsArr)} */}
							{renderMenu(goodsArr)}
						</Menu>
					</Sider>
					<Layout className='site-layout'>
						<Header className='site-layout-background' style={{ padding: 0 }}>
							{React.createElement(
								collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
								{
									className: 'trigger',
									onClick: toggle,
								}
							)}
							用户名: <span>{user.nickName}</span>
						</Header>
						<Content className='site-layout-background'>
							<Switch>
								{/* [<Route path='/goods_list' component={GoodsList} />,
								<Route path='/goods_update' component={GoodsUpdate} />,
								<Route path='/goods_add' component={GoodsAdd} />] */}

								{user.roleName && renderRoute(goodsArr,true)}
							</Switch>
						</Content>
					</Layout>
				</Layout>
			</Router>
		</>
	)
}

export default LayoutPage
