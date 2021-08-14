import React from 'react'
import { Table, Tag, Space } from 'antd'
import { Input } from 'antd'
import { AudioOutlined } from '@ant-design/icons'
import { Select } from 'antd'
import { Typography } from 'antd'
import { Button } from 'antd'
import { EditOutlined,DeleteOutlined } from '@ant-design/icons';

const { Title } = Typography

const { Option } = Select
const { Search } = Input
const columns = [
	{
		title: '序号',
		dataIndex: 'name',
		key: 'name',
		render: (text, row, index) => <a>{index + 1}</a>,
	},
	{
		title: '作者',
		dataIndex: 'age',
		key: 'age',
	},
	{
		title: '标题',
		dataIndex: 'address',
		key: 'address',
	},
	{
		title: '类别',
		dataIndex: 'address',
		key: 'address',
	},
	{
		title: '发布日期',
		key: 'tags',
		dataIndex: 'tags',
		render: (tags) => (
			<>
				{tags.map((tag) => {
					let color = tag.length > 5 ? 'geekblue' : 'green'
					if (tag === 'loser') {
						color = 'volcano'
					}
					return (
						<Tag color={color} key={tag}>
							{tag.toUpperCase()}
						</Tag>
					)
				})}
			</>
		),
	},
	{
		title: '状态',
		dataIndex: 'age',
		key: 'age',
	},
	{
		title: '操作',
		key: 'action',
     
		render: (text, record) => (
      // TODO  添加删除和编辑功能
			<>
				<Button  shape="round" type='primary'icon={<EditOutlined />} >编辑</Button>
				<Button  shape="round" danger type='primary' icon={<DeleteOutlined />}>
					删除
				</Button>
			</>
		),
	},
]
const data = [
	{
		key: '1',
		name: 'John Brown',
		age: 32,
		address: 'New York No. 1 Lake Park',
		tags: ['nice', 'developer'],
	},
	{
		key: '2',
		name: 'Jim Green',
		age: 42,
		address: 'London No. 1 Lake Park',
		tags: ['loser'],
	},
	{
		key: '3',
		name: 'Joe Black',
		age: 32,
		address: 'Sidney No. 1 Lake Park',
		tags: ['cool', 'teacher'],
	},
]

const BasicForm = () => {
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
					<Option value='narration'>记叙文</Option>
					<Option value='prose'>散文</Option>
					<Option value='novel'>小说</Option>
					<Option value='fairy'>童话</Option>
					<Option value='story'>故事</Option>
					<Option value='poet'>诗歌</Option>
				</Select>
			</div>
			<div>
				<Table columns={columns} dataSource={data} />
			</div>
		</div>
	)
}

export default BasicForm
