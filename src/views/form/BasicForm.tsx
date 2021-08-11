import React, { useState } from 'react'
import { Row, Col } from 'antd'
import { Layout } from 'antd'
import './style.scss'
const { Header, Footer, Sider, Content } = Layout
import { Form, Input, Button, Checkbox } from 'antd'
/* eslint-enable no-template-curly-in-string */
const BasicForm = () => {
	const onFinish = (values: any) => {
		console.log('Success:', values)
	}

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo)
	}
	return (
		<>
			<Row>
				<Col span={20} offset={2}>
					<Form
						name='basic'
						labelCol={{ span: 8 }}
						wrapperCol={{ span: 16 }}
						initialValues={{ remember: true }}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
					>
						<Form.Item
							label='Username'
							name='username'
							rules={[
								{ required: true, message: 'Please input your username!' },
							]}
						>
							<Input />
						</Form.Item>

						<Form.Item
							label='Password'
							name='password'
							rules={[
								{ required: true, message: 'Please input your password!' },
							]}
						>
							<Input.Password />
						</Form.Item>

						<Form.Item
							name='remember'
							valuePropName='checked'
							wrapperCol={{ offset: 8, span: 16 }}
						>
							<Checkbox>Remember me</Checkbox>
						</Form.Item>

						<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
							<Button type='primary' htmlType='submit'>
								Submit
							</Button>
						</Form.Item>
					</Form>
				</Col>
			</Row>
		</>
	)
}

export default BasicForm
