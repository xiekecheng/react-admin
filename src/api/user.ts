import axios from '@/utils/axios';

// localhost:9999/api/v1/vueadmin/login
const fetchLogin = (data:any)=>(
	axios({
		url:'/vueadmin/login',
		method:'post',
		data
	})
)

export{
	fetchLogin
}