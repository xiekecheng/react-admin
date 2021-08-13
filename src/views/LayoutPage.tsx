import './style.scss'
import React, { useCallback, useState } from 'react'
import {  Route, Link, Switch } from 'react-router-dom'
import { Layout, Menu } from 'antd'
const { SubMenu } = Menu
import { useAppSelector } from '@/store/hooks'
import goodsArr from '@/router'
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined
} from '@ant-design/icons'
const { Header, Sider, Content } = Layout
// LayoutPage组件
const LayoutPage = () => {
	const [collapsed, setCollapsed] = useState(false)
	const user = useAppSelector(state => state.user.user)
	console.log('user', user)

	const toggle = () => {
		setCollapsed(!collapsed)
	}
	// Sider栏菜单渲染函数
	const renderMenu = arr => {
		console.log('开始渲染菜单', arr)
		return arr.map(
			item =>
				item.permission.includes(user.role) && (
					<SubMenu key={item.id} icon={item.icon} title={item.title}>
						{item.children &&
							item.children.map(
								ele =>
									ele.permission.includes(user.role) && (
										<Menu.Item key={ele.id}>
											<Link to={ele.path}>{ele.title}</Link>
										</Menu.Item>
									)
							)}
					</SubMenu>
				)
		)
	}

	const renderRoute = useCallback((arr, flag) => {
		let result: any = []
		const recursion = arr => {
			console.log('开始渲染路由规则')
			arr.map(ele => {
				if (!flag || ele.permission.includes(user.role)) {
					result.push(
						<Route
							exact
							key={ele.id}
							path={ele.path}
							component={ele.component}
						/>
					)
				}
				if (ele.children) recursion(ele.children)
			})
		}
		arr.map(ele => {
			recursion(ele.children)
		})
		return result
	}, [])

	return (
		<>
				<Layout>
					<Sider trigger={null} collapsible collapsed={collapsed}>
						<div className='logo'>
							<img src='' alt='' />
						</div>
						<Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
							{/* Sider菜单栏渲染 */}
							{/* {user.role&&renderMenu(goodsArr)} */}
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
							用户名: <span>{user.roleName}</span>
						</Header>
						<Content className='site-layout-background'>
							<Switch>
								{/* 组件路由渲染 */}
								{user.role && renderRoute(goodsArr, true)}
							</Switch>
						</Content>
					</Layout>
				</Layout>
		</>
	)
}

export default LayoutPage
