import React from 'react'
import {
	UserOutlined,
	VideoCameraOutlined,
	DashboardOutlined,
	IssuesCloseOutlined,
	SearchOutlined,
	UnorderedListOutlined,
	CheckSquareOutlined,
	AreaChartOutlined,
	TeamOutlined,
} from '@ant-design/icons'

import loadable from '@loadable/component'
// 商品模块
const GoodsList = loadable(() => import('@/views/goods/GoodsList'))
const GoodsAdd = loadable(() => import('@/views/goods/GoodsAdd'))
const GoodsUpdate = loadable(() => import('@/views/goods/GoodsUpdate'))

// 表单模块
const BasicForm = loadable(() => import('@/views/form/BasicForm'))
const SubstepForm = loadable(() => import('@/views/form/SubstepForm'))
const AdvancedForm = loadable(() => import('@/views/form/AdvancedForm'))

// 文章模块
const ArticleList = loadable(() => import('@/views/article/ArticleList'))
const ArticleAdd = loadable(() => import('@/views/article/ArticleAdd'))
const ArticleEdit = loadable(() => import('@/views/article/ArticleEdit'))

// 用户模块
const UserList = loadable(() => import('@/views/user/UserList'))
const routes = [
	{
		id: 1300,
		icon: <TeamOutlined />,
		title: '用户管理',
		permission: ['admin'],
		children: [
			{
				id: 1301,
				path: '/user_list',
				component: UserList,
				title: '用户列表',
				permission: ['admin'],
			},
		],
	},
	{
		id: 1000,
		icon: <TeamOutlined />,
		title: '文章管理',
		permission: ['editor'],
		children: [
			{
				id: 1001,
				path: '/article_list',
				component: ArticleList,
				title: '文章列表',
				permission: ['editor'],
			},
			{
				id: 1002,
				path: '/article_add',
				component: ArticleAdd,
				title: '新增文章',
				permission: ['editor'],
			},
			{
				id: 1003,
				path: '/article_update',
				component: ArticleEdit,
				title: '修改文章',
				permission: ['editor'],
			},
		],
	},
	{
		id: 1100,
		icon: <TeamOutlined />,
		title: '商品管理',
		permission: ['admin', 'editor'],
		children: [
			{
				id: 1101,
				path: '/goods_list',
				component: GoodsList,
				title: '商品列表',
				permission: ['admin','editor'],
			},
			{
				id: 1102,
				path: '/goods_add',
				component: GoodsAdd,
				title: '新增商品',
				permission: ['admin', 'editor'],
			},
			{
				id: 1103,
				path: '/goods_update',
				component: GoodsUpdate,
				title: '修改商品',
				permission: ['admin','editor'],
			},
		],
	},
  {
		id: 1200,
		icon: <TeamOutlined />,
		title: '表单页',
		permission: ['admin', 'editor'],
		children: [
			{
				id: 1201,
				path: '/form_basic',
				component: BasicForm,
				title: '基础表单',
				permission: ['admin','editor'],
			},
			{
				id: 1202,
				path: '/form_substep',
				component: SubstepForm,
				title: '分布表单',
				permission: ['admin', 'editor'],
			},
			{
				id: 1203,
				path: '/form_advanced',
				component: AdvancedForm,
				title: '高级表单',
				permission: ['admin','editor'],
			},
		],
	},
  
]

export default routes
