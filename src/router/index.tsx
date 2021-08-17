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
	FormOutlined,
	createFromIconfontCN,
} from '@ant-design/icons'
const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
  ],
});

import loadable from '@loadable/component'
// 商品模块
const GoodsList = loadable(() => import('@/views/goods/GoodsList'))
const GoodsAdd = loadable(() => import('@/views/goods/GoodsAdd'))
const GoodsUpdate = loadable(() => import('@/views/goods/GoodsUpdate'))

// 图表模块
const BasicChart = loadable(() => import('@/views/chart/BasicForm'))
const SubstepChart = loadable(() => import('@/views/chart/SubstepForm.jsx'))
const AdvancedChart = loadable(() => import('@/views/chart/AdvancedForm'))

// 表单模块
const StepForm = loadable(() => import('@/views/form/StepForm'))
const BasicForm = loadable(() => import('@/views/form/BasicForm'))
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
		icon: <FormOutlined />,
		title: '文章管理',
		permission: ['editor','admin'],
		children: [
			{
				id: 1001,
				path: '/article_list',
				component: ArticleList,
				title: '文章列表',
				permission: ['editor','admin'],
			},
			{
				id: 1002,
				path: '/article_add',
				component: ArticleAdd,
				title: '发布文章',
				permission: ['editor','admin'],
				children:[
					{
						id: 1003,
						path: '/article_update/:articleId',
						// path: '/article_update',
						component: ArticleEdit,
						title: '修改文章',
						permission: ['editor','admin'],
					},
				]
			},

		],
	},
	{
		id: 1100,
		icon:  <IconFont type="icon-shoppingcart" />,
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
		icon: <UnorderedListOutlined />,
		title: '图表页',
		permission: ['admin', 'editor'],
		children: [
			{
				id: 1201,
				path: '/chart_basic',
				component: BasicChart,
				title: 'Echarts图表',
				permission: ['admin','editor'],
			},
			{
				id: 1202,
				path: '/chart_substep',
				component: SubstepChart,
				title: '地图',
				permission: ['admin', 'editor'],
			},
			{
				id: 1203,
				path: '/chart_advanced',
				component: AdvancedChart,
				title: 'BX Charts图表',
				permission: ['admin','editor'],
			},
		],
	},
	{
		id: 1400,
		icon: <UnorderedListOutlined />,
		title: '表单页',
		permission: ['admin', 'editor'],
		children: [
			{
				id: 1401,
				path: '/form_basic',
				component: BasicForm,
				title: '基础表单',
				permission: ['admin','editor'],
			},
			{
				id: 1402,
				path: '/form_substep',
				component: StepForm,
				title: '分步表单',
				permission: ['admin', 'editor'],
			},
			{
				id: 1403,
				path: '/form_advanced',
				component: AdvancedForm,
				title: '高级表单',
				permission: ['admin','editor'],
			},
		],
	},
]

export default routes
