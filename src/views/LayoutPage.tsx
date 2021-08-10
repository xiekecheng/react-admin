import './style.scss'
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
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
import goodsArr from '@/router/goods'
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
	console.log(user)

	const toggle = () => {
		setCollapsed(!collapsed)
	}
	const renderMenu = arr => {
		return arr.map(
			item =>
				item.permission.includes(user.roleName) && (
					<SubMenu key={item.id} icon={item.icon} title={item.title}>
						{item.children &&
							item.children.map(
								ele =>
									(ele.permission.includes(user.roleName) && (
										<Menu.Item key={ele.id}>
											<Link to={ele.path}>{ele.title}</Link>
										</Menu.Item>)
									)
							)}
					</SubMenu>
				)
		)
	}
	return (
		<>
			<Router>
				<Layout>
					<Sider trigger={null} collapsible collapsed={collapsed}>
						<div className='logo'>
							<img src='' alt='' />
						</div>
						<Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
							{/* <Menu.Item key="1" icon={<UserOutlined />}>
                <Link to="/counter">商品列表</Link>
              </Menu.Item> */}

							{/* <SubMenu key='sub2' icon={<TeamOutlined />} title='Goods'>
								<Menu.Item key='5'>
									<Link to='/goods_list'>商品列表</Link>
								</Menu.Item>
								<Menu.Item key='6'>
									<Link to='/goods_add'>新增商品</Link>
								</Menu.Item>
								<Menu.Item key='8'>
									<Link to='/goods_update'>修改商品</Link>
								</Menu.Item>
							</SubMenu> */}

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
						</Header>
						<Content className='site-layout-background'>
							{/* <Route exact path='/counter' component={Counter} />
							<Route path='/about' component={About} />
							<Route path='/topics' component={Topics} /> */}
							<Route path='/goods_list' component={GoodsList} />
							<Route path='/goods_update' component={GoodsUpdate} />
							<Route path='/goods_add' component={GoodsAdd} />
						</Content>
					</Layout>
				</Layout>
			</Router>
		</>
	)
}

export default LayoutPage