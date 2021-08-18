/*
 * @Author: your name
 * @Date: 2021-08-17 21:39:33
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-19 00:14:32
 * @FilePath: /react-admin/src/views/form/components/Confirm.tsx
 */
import React from 'react'
import { Alert } from 'antd'
import { Table, Typography } from 'antd'
import { Descriptions, Badge } from 'antd'
import { Steps, Button, message } from 'antd'
import { Input, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Form,  Checkbox } from 'antd';
import { useAppDispatch } from '@/store/hooks'
import { pay } from '@/store/reducer/article'

// const fixedData = []
// for (let i = 0; i < 20; i += 1) {
// 	fixedData.push({
// 		key: i,
// 		name: ['Light', 'Bamboo', 'Little'][i % 3],
// 		description: 'Everything that has a beginning, has an end.',
// 	})
// }
const { Text } = Typography
const Confirm = (props) => {
	const dispatch = useAppDispatch()
  const {next,prev,userForm} = props
	console.log('userForm',userForm);
	const onFinish = (values: any) => {
    console.log('Success:', values);
		const form = {...userForm,...values}
		dispatch(pay(form)).then(res=>{
			console.log(res);
			next()
		})
		
  };
	return (
		<div className='my-confirm'>
			<div className='info'>
				<Alert
					message='确认转账后，资金将直接打入对方账户，无法退回。'
					type='info'
					showIcon
					closable
				/>
			</div>
			<div>
				<Descriptions column={1} size='default' bordered>
					<Descriptions.Item
						contentStyle={{ textAlign: 'left', backgroundColor: '#FFFFFF' }}
						label='付款账户'
					>
						 {userForm.payment}
					</Descriptions.Item>
					<Descriptions.Item
						contentStyle={{ textAlign: 'left', backgroundColor: '#FFFFFF' }}
						label='收款账户'
					>
						{userForm.account}
					</Descriptions.Item>
					<Descriptions.Item
						contentStyle={{ textAlign: 'left', backgroundColor: '#FFFFFF' }}
						label='收款人姓名'
					>
						{userForm.name}
					</Descriptions.Item>
					<Descriptions.Item
						contentStyle={{ textAlign: 'left', backgroundColor: '#FFFFFF' }}
						label='转账金额'
					>
						{userForm.money}元
					</Descriptions.Item>
				</Descriptions>
				<Form
      name="basic"
      // labelCol={{ span: 8 }}
      // wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        label="支付密码"
        name="password"
        rules={[{ required: true, message: '请输入支付密码!' }]}
      >
        <Input.Password />

      </Form.Item>
			<Button onClick={prev}>上一步</Button>
				<Button type="primary" htmlType="submit">
          确认支付
        </Button>
    </Form>
				{/* <Button onClick={prev}>上一步</Button>
				<Button type='primary' onClick={next}>下一步</Button> */}
			</div>
		</div>
	)
}

export default Confirm
