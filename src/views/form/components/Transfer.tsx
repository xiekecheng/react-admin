/*
 * @Author: your name
 * @Date: 2021-08-17 21:24:03
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-18 21:18:43
 * @FilePath: /react-admin/src/views/form/components/Transfer.tsx
 */
import React from 'react'
import { Form, Input, InputNumber, Button, Row, Col } from 'antd'
import { Select } from 'antd'
const { Option } = Select

const layout = {
	labelCol: { span: 8 },
	wrapperCol: { span: 16 },
}
/* eslint-disable no-template-curly-in-string */
const validateMessages = {
	required: '请输入${label} !',
	types: {
		email: '${label} is not a valid email!',
		number: '${label} is not a valid number!',
	},
	number: {
		range: '${label} must be between ${min} and ${max}',
	},
}
/* eslint-enable no-template-curly-in-string */
const Transfer = (props) => {
	const { next,userForm, setUserForm } = props

	const onFinish = (values: any) => {
		console.log(values)
    setUserForm({...values})
    console.log(userForm);
    
		next()
	}
	const onFinishFailed = (value) => {
		console.log('failed失败了', value)
	}
	const handleChange = (value) => {
		console.log(`selected ${value}`)
	}
	return (
		<div className='my-confirm'>
			<Form
				{...layout}
        initialValues={{...userForm}}
				name='nest-messages'
				onFinish={onFinish}
				labelCol={{ span: 24 }}
				// layout={'vertical'}
				onFinishFailed={onFinishFailed}
				validateMessages={validateMessages}
			>
				<Form.Item name='payment' label='付款账户' rules={[{ required: true }]}>
					<Input placeholder="请输入付款账户" />
				</Form.Item>
				<Row>
          <Col span={6}>
					<Form.Item  name='method' label='收款账户'>
						<Select style={{width:120}} placeholder="请选择" >
							<Option value='AliPay'>支付宝</Option>
							<Option value='Bank'>银行账户</Option>
						</Select>
					</Form.Item>
          </Col >
          <Col span={12}>
					<Form.Item name='account' label='收款人账户 ' rules={[{ required: true }]}>
						<Input style={{width:216}} placeholder="example@gmial.com" />
					</Form.Item>
          </Col>
				</Row>
				<Form.Item name='name'  label='收款人姓名'>
					<Input placeholder="请输入收款人姓名" />
				</Form.Item>
				<Form.Item name='money' label='转账金额' rules={[{ required: true }]}>
        <InputNumber placeholder="金额"   style={{width:346}} />
        {/* <Input placeholder="请输入收款人姓名" /> */}
				</Form.Item>
				<Form.Item wrapperCol={{ ...layout.wrapperCol, }}>
					<Button type='primary' htmlType='submit'>
						下一步
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
}

export default Transfer
