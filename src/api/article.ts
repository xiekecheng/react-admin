/*
 * @Author: xiekecheng
 * @Date: 2021-08-14 12:23:01
 * @LastEditTime: 2021-08-14 17:22:49
 * @LastEditors: Please set LastEditors
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

	export const fetchArticleById = (params: any)=>(
		axios({
			url:'/antd/article/getArticleById',
			method:'GET',
			params
		})
	)