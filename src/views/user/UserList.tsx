import React, { useEffect, useState } from 'react'
import { Table, Space, Button, Modal, Form } from 'antd'
import { Input } from 'antd'
import { Row, Col } from 'antd'
import { Radio } from 'antd'
import { DownloadOutlined, PlusSquareOutlined } from '@ant-design/icons'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { addUser, getSearchUser, getUserList } from '@/store/reducer/user'
const { Search } = Input

const UserList = () => {
	const dispatch = useAppDispatch()
	const list = useAppSelector((state) => state.user.list)
	const total = useAppSelector((state) => state.user.total)
	const [count, setCount] = useState(0)
	// 数据列表
	// const [list,setList] = useState([])
	// 页码
	const [page, setPage] = useState(1)
	// 每页显示条数
	const [size, setSize] = useState(10)
	// const [total,setTotal] = useState(0)
	const [selectUsername, setSelectUsername] = useState('')
	const [addUserList, setAddUserList] = useState({
		username: '',
		role: '',
		roleName: '',
		status: '',
	})
	useEffect(() => {
		// 获取用户列表
		dispatch(getUserList({ page, size, selectUsername }))
	}, [count])
	const columns = [
		{
			title: '用户名',
			dataIndex: 'username',
			key: 'name',
			render: (username) => <span>{username}</span>,
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
			title: '状态',
			key: 'status',
			dataIndex: 'status',
			render: (status) => (
				<>{status == 1 ? <span>正常</span> : <span>离职</span>}</>
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
<<<<<<< HEAD
// 搜索 222111
=======
// 搜索 222
>>>>>>> 80a6721db16fdedaca31ec6563541dec1d4090d5
	const onSearchUser = (username) => {
		// dispatch(getSearchUser({username}))
		dispatch(getUserList({ page, size, username }))
		console.log(username)
	}
	// const showAddUserModel = () => {
	// 	console.log('调用添加用户接口')
	// }
	// S添加用户弹框
	const [visible, setVisible] = React.useState(false)
	const [confirmLoading, setConfirmLoading] = React.useState(false)
	const [modalText, setModalText] = React.useState('Content of the modal')

	const onFinish = (values: any) => {
		console.log('Success:', values)
	}

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo)
	}
	const showAddUserModel = () => {
		console.log('展示')

		setVisible(true)
	}

	// 添加用户
	const handleAddUser = () => {
		setModalText('The modal will be closed after two seconds')
		setConfirmLoading(true)
		setCount(count + 1)
		console.log('addUserList', addUserList)

		// 调接口
		dispatch(addUser(addUserList)).then((res) => {
			// console.log('res',res);
			setAddUserList({
				username: '',
				role: '',
				roleName: '',
				status: '',
			})
			setCount(count + 1)
			setVisible(false)
			setConfirmLoading(false)
		})
	}

	const handleCancel = () => {
		console.log('关闭model弹框')
		setVisible(false)
	}
	// E添加用户弹框

	// const handle = value => {
	// 	console.log('handle', value)
	// 	setAddUserList({
	// 		...addUserList,
	// 		username: value,
	// 	})
	// 	console.log(addUserList)
	// }

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
							onSearch={onSearchUser}
						/>
					</Space>
				</Col>
				<Col offset={7} span={4}>
					<Button
						onClick={showAddUserModel}
						type='primary'
						shape='round'
						icon={<PlusSquareOutlined />}
					>
						添加用户
					</Button>
					<Modal
						title='添加用户'
						visible={visible}
						onOk={handleAddUser}
						confirmLoading={confirmLoading}
						onCancel={handleCancel}
					>
						<p>{modalText}</p>
						<Form.Item label='username'>
							<Input
								value={addUserList.username}
								onChange={(e) =>
									setAddUserList({ ...addUserList, username: e.target.value })
								}
							/>
						</Form.Item>
						<Form.Item label='role'>
							<Input
								value={addUserList.role}
								onChange={(e) =>
									setAddUserList({ ...addUserList, role: e.target.value })
								}
							/>
						</Form.Item>
						<Form.Item label='roleName'>
							<Input
								value={addUserList.roleName}
								onChange={(e) =>
									setAddUserList({ ...addUserList, roleName: e.target.value })
								}
							/>
						</Form.Item>
						<Form.Item label='status'>
							<Input
								value={addUserList.status}
								onChange={(e) =>
									setAddUserList({ ...addUserList, status: e.target.value })
								}
							/>
						</Form.Item>
					</Modal>
				</Col>
			</Row>
			<Table
				pagination={{
					//  defaultPageSize: filter.size,
					pageSizeOptions: ['2', '5', '10', '20'],
					//  pageSize:15,
					total,
					defaultCurrent: 1,
					//  current:5
				}}
				rowKey='_id'
				columns={columns}
				dataSource={list}
			/>
		</div>
	)
}

export default UserList
