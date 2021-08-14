/*
 * @Author: xkccoding@gmail.com
 * @Date: 2021-08-11 11:30:02
 * @LastEditTime: 2021-08-14 18:00:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-admin/src/views/article/ArticleEdit.tsx
 */
import React, { useEffect } from 'react';
import {  useHistory, useParams } from 'react-router-dom';

import  { useState } from 'react'
import './style.scss'
import {
	Form,
	Input,
	Button,
	Select,
} from 'antd'
// import { Select } from 'antd';
import { Upload } from 'antd'
import ImgCrop from 'antd-img-crop'
const { Option } = Select
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
// import { fetchAddArticle } from '@/api/article'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { addArticle, getArticleById } from '@/store/reducer/article'
import { message, Space } from 'antd';
// TODO: 完成编辑功能 ,获取数据有问题
const ArticleEdit = () => {
	const history = useHistory()
	const dispatch = useAppDispatch()
	// const article =useAppSelector(state=>state.article.)
	const  param:any = useParams()
	const [filter, setFilter] = useState({
		author: '',
		title: '',
		type: '',
		articleImg: '',
		content: '',
	})

	const [fileList, setFileList] = useState([])
	useEffect(()=>{
		console.log('articleId',param.articleId);
		dispatch(getArticleById({_id:param.articleId})).then(res=>{
			console.log('res',res.payload);
			const {author,title,type,articleImg,content} = res.payload
			const param= {
				author,title,type,articleImg,content
			}
			setFilter(param)
			// setFilter({...filter,title})
			// setFilter({...filter,type})
			// setFilter({...filter,articleImg})
			// setFilter({...filter,content})
			console.log(filter);
			
		})
		console.log();
		
	},[])

	const handleContent = (content) => {
		setFilter({ ...filter, content })
	}

	const onPreview = async (file) => {
		let src = file.url
		if (!src) {
			src = await new Promise((resolve) => {
				const reader = new FileReader()
				reader.readAsDataURL(file.originFileObj)
				reader.onload = () => resolve(reader.result)
			})
		}
		const image = new Image()
		image.src = src
		const imgWindow = window.open(src)
		imgWindow && imgWindow.document.write(image.outerHTML)
	}
	// 发布文章
	const publishArticle = () => {
		console.log('发布文章', filter)
		// 调接口
		dispatch(addArticle(filter)).then(() => {
			console.log('发布文章完毕,跳转~')
			message.success('成功发布文章~', 1).then(() => {
				history.push('/article_list')
			})
		})
	}

		// 文件上传后的回调函数
	// TODO: 可优化,文件上传先放在cookie或者内存中中,带提交表单再上传图片至服务器
	const onChange = (e) => {
		console.log('上传成功', e)
		setFileList(e.fileList)
		// 把后端返回的图片访问地址，给到父组件
		// onChange
		if (e.file.status === 'done') {
			console.log(e.file.response.data.imgPath)
			setFilter({ ...filter, articleImg: e.file.response.data.imgPath })
		}
		// 调接口
		// setFileList(newFileList)
	}


	const modules = {
		toolbar: [
			[{ header: [1, 2, false] }],
			['bold', 'italic', 'underline', 'strike', 'blockquote'],
			[
				{ list: 'ordered' },
				{ list: 'bullet' },
				{ indent: '-1' },
				{ indent: '+1' },
			],
			['link', 'image'],
			['clean'],
		],
	},
	formats = [
		'header',
		'bold',
		'italic',
		'underline',
		'strike',
		'blockquote',
		'list',
		'bullet',
		'indent',
		'link',
		'image',
	]

	
	return (
		<div className='my-article-add'>
			<h1>文章新增</h1>
			<div>
				<Form
					labelCol={{ span: 4 }}
					wrapperCol={{ span: 14 }}
					layout='horizontal'
					// onFinish={onFinish}
					// initialValues={{ size: componentSize }}
					// onValuesChange={onFormLayoutChange}
					// size={componentSize as SizeType
					// }
				>
					<Form.Item label='作者'>
						<Input
							value={filter.author}
							onChange={(e) => setFilter({ ...filter, author: e.target.value })}
						/>
					</Form.Item>
					<Form.Item label='标题'>
						<Input
							value={filter.title}
							onChange={(e) => setFilter({ ...filter, title: e.target.value })}
						/>
					</Form.Item>
					<Form.Item label='文章类型'>
						<Select
							defaultValue='请选择'
							style={{ width: 120 }}
							onChange={(value) => setFilter({ ...filter, type: value })}
						>
							<Option value='narration'>记叙文</Option>
							<Option value='prose'>散文</Option>
							<Option value='novel'>小说</Option>
							<Option value='fairy'>童话</Option>
							<Option value='story'>故事</Option>
							<Option value='poet'>诗歌</Option>
						</Select>
					</Form.Item>
					<Form.Item label='文章缩略图'>
						{/* TODO: 文件上传框组件封装 */}
						<ImgCrop rotate>
							<Upload
								action='http://localhost:3000/api/v1/antd/article/UploadImg'
								name='file'
								listType='picture-card'
								fileList={fileList}
								onChange={onChange}
								onPreview={onPreview}
								maxCount={1}
							>
								{fileList.length < 1 && '+ Upload'}
							</Upload>
						</ImgCrop>
					</Form.Item>
					<Form.Item label='内容'>
						{/* react-quill 富文本框 */}
						{/* TODO: 富文本框组件封装 */}
						<ReactQuill
							className='text-editor'
							formats={formats}
							modules={modules}
							theme='snow'
							value={filter.content}
							onChange={handleContent}
							// progress={ strokeWidth: 2, showInfo: false }
						/>
					</Form.Item>
					<Form.Item>
						<Button onClick={publishArticle}>发布文章</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	
	);
};

export default ArticleEdit;