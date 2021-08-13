import axios from '@/utils/axios'

// localhost:9999/api/v1/vueadmin/login
export const fetchLogin = (data: any) =>
	axios({
		url: '/antd/login',
		method: 'post',
		data,
	})
// 使用token获取用户信息信息
export const fetchUserInfo = (params: object) =>
	axios({
		url: '/antd/userInfo',
		method: 'get',
		params,
	})
// 获取用户列表
export const fetchUserList = (params:object) =>
	axios({
		url: '/antd/userList',
		method: 'get',
		params
	})

// 搜索用户
export const fetchSearchUser = (params: object) =>
	axios({
		url: '/antd/searchUser',
		method: 'get',
		params,
	})

// 添加用户
export const fetchAddUser = (data: object) =>
	axios({
		url: '/antd/addUser',
		method: 'post',
		data,
	})
