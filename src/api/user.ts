import axios from '@/utils/axios'

// localhost:9999/api/v1/vueadmin/login
const fetchLogin = (data: any) =>
	axios({
		url: '/antd/login',
		method: 'post',
		data,
	})

const fetchUserInfo = (params: object) =>
	axios({
		url: '/antd/userInfo',
		method: 'get',
		params,
	})
const fetchUserList = () =>
	axios({
		url: '/antd/userList',
		method: 'get'
	})
export { fetchLogin, fetchUserInfo,fetchUserList }
