/*
 * @Author: your name
 * @Date: 2021-08-06 19:04:20
 * @LastEditTime: 2021-08-14 15:04:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-admin/src/utils/axios.ts
 */
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
    // console.log('发送请求');
    return config;
}, function (error) {

    return Promise.reject(error);
});

// 响应拦截器
instance.interceptors.response.use(function (response) {
    console.log('响应请求:',response);
    return response;
}, function (error) {

    return Promise.reject(error);
});

export default instance