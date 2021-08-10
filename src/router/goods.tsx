import React from 'react';
import {
  UserOutlined,
  VideoCameraOutlined,
  DashboardOutlined,
  IssuesCloseOutlined,
  SearchOutlined,
  UnorderedListOutlined,
  CheckSquareOutlined,
  AreaChartOutlined,
	TeamOutlined
} from '@ant-design/icons'

import loadable from '@loadable/component'
const GoodsList = loadable(() => import('@/views/goods/GoodsList'))
const GoodsAdd = loadable(() => import('@/views/goods/GoodsAdd'))
const GoodsUpdate = loadable(() => import('@/views/goods/GoodsUpdate'))
const routes = [
	{
    id: 1000,
    icon: <TeamOutlined />,
    title: 'Goods',
		permission:['editor'],
    children: [
      {
        id: 1001,
        path: '/goods_list',
        component: GoodsList,
        title: '商品列表',
				permission:['admin'],
      },
      {
        id: 1002,
        path: '/goods_add',
        component: GoodsAdd,
        title: '新增商品',
				permission:['editor'],
      },
      {
        id: 1003,
        path: '/goods_update',
        component: GoodsUpdate,
        title: '修改商品',
				permission:['editor'],
      },
    ],
  },
	{
    id: 1100,
    icon: <TeamOutlined />,
    title: 'Goods',
		permission:['admin','editor'],
    children: [
      {
        id: 1101,
        path: '/goods_list',
        component: GoodsList,
        title: '商品列表-admin',
				permission:['admin'],
      },
      {
        id: 1102,
        path: '/goods_add',
        component: GoodsAdd,
        title: '新增商品 admin-editor',
				permission:['admin','editor'],
      },
      {
        id: 1103,
        path: '/goods_update',
        component: GoodsUpdate,
        title: '修改商品editor',
				permission:['editor'],
      },
    ],
  },
]

export default routes