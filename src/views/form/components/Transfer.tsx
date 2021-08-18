/*
 * @Author: your name
 * @Date: 2021-08-17 21:24:03
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-18 12:25:07
 * @FilePath: /react-admin/src/views/form/components/Transfer.tsx
 */
import React from 'react'
import { Form, Input, InputNumber, Button } from 'antd'
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
	const { next } = props.next
	const onFinish = (values: any) => {
		console.log(values)
	}
	const handleChange = (value) => {
		console.log(`selected ${value}`)
	}

	return (
		<div className='my-confirm'>
			<Form
				{...layout}
				name='nest-messages'
				onFinish={onFinish}
				validateMessages={validateMessages}
			>
				<Form.Item name='payment' label='付款账户' rules={[{ required: true }]}>
					<Input />
				</Form.Item>
				<Form.Item
					name='receipt'
					label='收款账户'
					rules={[{ required: true }]}
				>
					<Select
						defaultValue='lucy'
						style={{ width: 120 }}
						onChange={handleChange}
					>
						<Option value='jack'>支付宝</Option>
						<Option value='lucy'>银行账户</Option>
					</Select>
					<Input />
				</Form.Item>
				<Form.Item
        name='name'
					label='收款人姓名'
					rules={[{ required: true }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					name='money'
					label='转账金额'
					rules={[{ required: true }]}
				>
					<Input />
				</Form.Item>
				<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
					<Button type='primary' onClick={next} htmlType='submit'>
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
}

export default Transfer
