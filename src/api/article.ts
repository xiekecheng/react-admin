/*
 * @Author: xiekecheng
 * @Date: 2021-08-14 12:23:01
 * @LastEditTime: 2021-08-19 00:08:14
 * @LastEditors: xkccoding@gmail.com
 * @Description: article模块API
 * @FilePath: /react-admin/src/api/article.ts
 */

import axios from '@/utils/axios'

// 添加文章
export const fetchAddArticle: any = (data: any) =>
	axios({
		url: '/antd/article/addArticle',
		method: 'POST',
		data,
	})

// 查询文章列表
export const fetchArticleList: any = (params: any) =>
	axios({
		url: '/antd/article/getArticleList',
		method: 'GET',
		params,
	})

// 根据文章id获取文章
export const fetchArticleById = (params: any) =>
	axios({
		url: '/antd/article/getArticleById',
		method: 'GET',
		params,
	})

// 处理支付
export const fetchPay: any = (data) =>
	axios({
		url: '/antd/article/pay',
		method: 'post',
		data,
	})
