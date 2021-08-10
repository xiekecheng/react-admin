import axios from 'axios'
// https://cnodejs.org/api/v1
// const baseUrl = 'https://cnodejs.org'
// const version = 'api/v1'

// const baseURL = 'https://cnodejs.org'
const baseURL='http://localhost:3000'
const version = '/api/v1'

const instance = axios.create({
    baseURL:baseURL+version,
    timeout: 5000,
    headers:{}
});



// 请求拦截器
instance.interceptors.request.use(function (config) {
    console.log('发送请求');
    return config;
}, function (error) {

    return Promise.reject(error);
});

// 响应拦截器
instance.interceptors.response.use(function (response) {
    console.log('响应请求');
    return response;
}, function (error) {

    return Promise.reject(error);
});

export default instance