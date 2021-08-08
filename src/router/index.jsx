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
} from '@ant-design/icons'
const route = [
  {
    id: 1100,
    icon: <DashboardOutlined />,
    title: 'Dashboard',
    children: [
      {
        id: 1101,
        path: '/about',
        component: '',
        title: '分析页',
      },
      {
        id: 1002,
        path: '/about',
        component: '',
        title: '监控页',
      },
      {
        id: 1003,
        path: '/dashboard',
        component: '',
        title: '工作台',
      },
    ],
  },
  {
    id: 1200,
    icon: <VideoCameraOutlined />,
    title: '表单页',
    children: [
      {
        id: 1201,
        path: '/about',
        component: '',
        title: '基础表单',
      },
      {
        id: 1202,
        path: '/about',
        component: '',
        title: '分步表单',
      },
      {
        id: 1203,
        path: '/about',
        component: '',
        title: '高级表单',
      },
    ],
  },
  {
    id: 1300,
    icon: <UnorderedListOutlined />,
    title: '列表页',
    children: [
      {
        id: 1301,
        path: '/about',
        component: '',
        title: '搜索列表',
      },
      {
        id: 1302,
        path: '/about',
        component: '',
        title: '查询表格',
      },
      {
        id: 1303,
        path: '/about',
        component: '',
        title: '标准列表',
      },
    ],
  },
  {
    id: 1400,
    icon: <SearchOutlined />,
    title: '详情页',
    children: [
      {
        id: 1401,
        path: '',
        component: '',
        title: '基础详情页',
      },
      {
        id: 1402,
        path: '',
        component: '',
        title: '高级详情页',
      },
      {
        id: 1403,
        path: '',
        component: '',
        title: '高级详情页',
      },
    ],
  },
  {
    id: 1500,
    icon: <CheckSquareOutlined />,
    title: '结果页',
    children: [
      {
        id: 1501,
        path: '',
        component: '',
        title: '成功页',
      },
      {
        id: 1502,
        path: '',
        component: '',
        title: '失败页',
      },
      {
        id: 1503,
        path: '',
        component: '',
        title: '工作台',
      },
    ],
  },
  {
    id: 1600,
    icon: <IssuesCloseOutlined />,
    title: '异常页',
    children: [
      {
        id: 1601,
        path: '',
        component: '',
        title: '403',
      },
      {
        id: 1602,
        path: '',
        component: '',
        title: '404',
      },
      {
        id: 1603,
        path: '',
        component: '',
        title: '500',
      },
    ],
  },
  {
    id: 1700,
    icon: <UserOutlined />,
    title: '个人页',
    children: [
      {
        id: 1701,
        path: '',
        component: '',
        title: '个人中心',
      },
      {
        id: 1702,
        path: '',
        component: '',
        title: '个人设置',
      },
      // {
      //     id: 1703,
      //     path: '',
      //     component: '',
      //     title: '工作台'
      // },
    ],
  },
  {
    id: 1800,
    icon: <AreaChartOutlined />,
    title: '图形编辑器',
    children: [
      {
        id: 1801,
        path: '',
        component: '',
        title: '流程编辑器',
      },
      {
        id: 1802,
        path: '',
        component: '',
        title: '脑图编辑器',
      },
      {
        id: 1803,
        path: '',
        component: '',
        title: '拓扑编辑器',
      },
    ],
  },
]

export default route
