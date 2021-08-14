/*
 * @Author: your name
 * @Date: 2021-08-10 12:33:12
 * @LastEditTime: 2021-08-13 20:23:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-admin/src/api/user.ts
 */
import axios from '@/utils/axios'
// TODO 
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
export const fetchUserList = (params: object) =>
	axios({
		url: '/antd/userList',
		method: 'get',
		params,
	})
	//to

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

// 修改用户状态
export const fetchChangeUserStatus = (params) =>
	axios({
		url: '/antd/changeUserStatus',
		method: 'get',
		params,
	})
