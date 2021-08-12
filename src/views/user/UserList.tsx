import React, { useEffect, useState } from 'react'
import { Table, Tag, Space, Button } from 'antd'
import { Input } from 'antd'
import { AudioOutlined } from '@ant-design/icons'
import { Row, Col } from 'antd'
import { useAppSelector,useAppDispatch } from '@/store/hooks'
// import { fetchUserList } from '@/api/user'
import {getUserList} from '@/store/reducer/user';
const { Search } = Input

const columns = [
	{
		title: '用户名',
		dataIndex: 'name',
		key: 'name',
		render: text => <a>{text}</a>,
	},
	{
		title: '权限',
		dataIndex: 'role',
		key: 'age',
	},
	{
		title: '角色名',
		dataIndex: 'roleName',
		key: 'address',
	},
	{
		title: '是否在职',
		key: 'status',
		dataIndex: 'tags',
		render: tags => (
			<>
				{tags.map(tag => {
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
		title: '操作',
		key: 'action',
		render: (text, record) => (
			<>
			<Button
				size='small'
				shape='round'
				style={{ marginRight: '10px' }}
				type='primary'
			>
				编辑
			</Button>
			<Button size='small' shape='round' type='primary' danger>
				删除
			</Button>
		</>
		),
	},
]

// const data = [
// 	{
// 		key: '1',
// 		name: 'John Brown',
// 		age: 32,
// 		address: 'New York No. 1 Lake Park',
// 		tags: ['nice', 'developer'],
// 	},
// 	{
// 		key: '2',
// 		name: 'Jim Green',
// 		age: 42,
// 		address: 'London No. 1 Lake Park',
// 		tags: ['loser'],
// 	},
// 	{
// 		key: '3',
// 		name: 'Joe Black',
// 		age: 32,
// 		address: 'Sidney No. 1 Lake Park',
// 		tags: ['cool', 'teacher'],
// 	},
// ]

const UserList = () => {
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(getUserList()).then(res=>{
			console.log(res);
			
		})
	}, [])
	// useAppSelector(state=>state.user.list)
	const list = useAppSelector(state => state.user.list)
	// const list = useSelector((state)=>state.user.list)
	const onSearch = value => {
		console.log(value)
	}
	const [count,setCount] = useState(0)
	// 数据列表
	// const [list,setList] = useState([])
	// 页码
	const [page,setPage] = useState(1)
	// 每页显示条数
	const [size,setSize] = useState(10)
	return (
		<div>
			<h1>用户列表</h1>
			<Row>
				<Col offset={0} span={10}>
					<Space direction='vertical'>
						<Search
							placeholder='请输入用户名...'
							allowClear
							enterButton='搜索'
							size='large'
							onSearch={onSearch}
						/>
					</Space>
				</Col>
			</Row>
{/*   */}
			<Table columns={columns} dataSource={list}/>
		</div>
	)
}

export default UserList
