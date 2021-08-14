import React, { useEffect } from 'react'
import { Table } from 'antd'
import { Input } from 'antd'
import { Select } from 'antd'
import { Typography } from 'antd'
import { Button } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { articleList } from '@/store/reducer/article'
import { useHistory } from 'react-router-dom'

// const { Title } = Typography

const { Option } = Select
const { Search } = Input

const ArticleList = () => {
	const dispatch = useAppDispatch()
	const data = useAppSelector((state) => state.article.list)
	const history =useHistory()
	console.log('data', data)

	useEffect(() => {
		console.log('查询文章列表')
		dispatch(articleList({ page: 1 }))
	}, [])
	function handleChange(value) {
		console.log(`selected ${value}`)
	}
	// const suffix = (
	// 	<AudioOutlined
	// 		style={{
	// 			fontSize: 16,
	// 			color: '#1890ff',
	// 		}}
	// 	/>
	// )
	const onSearch = (value) => console.log(value)
	const handleEdit = (record)=>{
		console.log(record._id);
		history.replace('/article_update/'+record._id)
	}

const columns = [
	{
		title: '序号',
		key: 'index',
		render: (text, row, index) => <a>{index + 1}</a>,
	},
	{
		title: '作者',
		dataIndex: 'author',
		key: 'age',
	},
	{
		title: '标题',
		dataIndex: 'title',
		key: 'title',
	},
	{
		title: '类别',
		dataIndex: 'type',
		key: 'type',
		
	},
	{
		title: '发布日期',
		key: 'createTime',
		dataIndex: 'createTime',
		render: (tags) => (
			<>
				<span>{tags}</span>
			</>
		),
	},
	{
		title: '状态',
		dataIndex: 'status',
		key: 'status',
	},
	{
		title: '操作',
		key: 'action',
		render: (text, record) => (
			// TODO:  添加删除和编辑功能
			<>
				<Button onClick={()=>handleEdit(record)} shape='round' type='primary' icon={<EditOutlined />}>
					编辑
				</Button>
				<Button shape='round' danger type='primary' icon={<DeleteOutlined />}>
					删除
				</Button>
			</>
		),
	},
]
	return (
		<div>
			<h1>文章列表</h1>
			<div>
				<Search
					placeholder='input search text'
					enterButton='Search'
					size='large'
					style={{ width: 300 }}
					onSearch={onSearch}
				/>
				文章搜索
				<Select
					allowClear
					defaultValue='lucy'
					style={{ width: 200 }}
					onChange={handleChange}
					placeholder='文章类别'
					size='large'
				>
					<Option value='Narration'>记叙文</Option>
					<Option value='Prose'>散文</Option>
					<Option value='Novel'>小说</Option>
					<Option value='Fairy'>童话</Option>
					<Option value='Story'>故事</Option>
					<Option value='Poet'>诗歌</Option>
				</Select>
			</div>
			<div>
				<Table rowKey='_id' columns={columns} dataSource={data} />
			</div>
		</div>
	)
}

export default ArticleList
