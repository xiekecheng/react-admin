/*
 * @Author: your name
 * @Date: 2021-08-14 12:35:26
 * @LastEditTime: 2021-08-19 00:20:28
 * @LastEditors: xkccoding@gmail.com
 * @Description: In User Settings Edit
 * @FilePath: /react-admin/src/store/reducer/article.ts
 */
import { fetchAddArticle, fetchArticleById, fetchArticleList, fetchPay } from '@/api/article'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index'

export const addArticle = createAsyncThunk(
	'article/addArticle',
	async (data: object) => {
		const result = await fetchAddArticle(data)
		console.log('result.data===>',result.data)
		// return result
	}
)

// TODO: 修改文章
// export const updateArticle = createAsyncThunk(
// 	'article/addArticle',
// 	async () => {}
// )

// TODO: 文章列表
export const articleList = createAsyncThunk(
	'article/articleList',
	async (params: any) => {
		const result = await fetchArticleList()
		console.log('info===>',result.data.data)
		return result.data.data
	}
)

// 根据文章id查找
export const getArticleById = createAsyncThunk(
	'article/getArticleById',
	async (params:object)=>{
		const result = await fetchArticleById(params)
		console.log('result.data.data11111',result.data.data);
		return result.data.data
	}
)

// 处理支付功能
export const pay = createAsyncThunk(
	'article/pay',
	async (data:any)=>{
		const result = await fetchPay(data)
		console.log('result',result.data.data);
		return result.data.data
		
	}
)

interface ArticleState {
	value: Number,
	list: any,
	article:{
		author?:string,
		title?:string,
		type?:any,
		articleImg?:string,
		content?:string
	},
	billForm:any
}
const initialState: ArticleState = {
	value: 0,
	list: [],
	article:{},
	billForm:{}
}

export const articleSlice = createSlice({
	name: 'article',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(addArticle.fulfilled, (state, action) => {
				console.log('添加文章成功')
			})
			.addCase(articleList.fulfilled, (state, action) => {
				state.list = action.payload
			})
			.addCase(getArticleById.fulfilled, (state, action) => {
				state.article = action.payload
			})
			.addCase(pay.fulfilled, (state, action) => {
				state.billForm = action.payload
			})
			// builder
			// .addCase(addArticle.fulfilled, (state, action) => {
			// 	console.log('添加文章成功')
			// })
	},
})

export default articleSlice.reducer
