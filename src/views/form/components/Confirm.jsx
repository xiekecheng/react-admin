/*
 * @Author: your name
 * @Date: 2021-08-17 21:39:33
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-18 12:29:33
 * @FilePath: /react-admin/src/views/form/components/Confirm.jsx
 */
import React from 'react'
import { Alert } from 'antd'
import { Table, Typography } from 'antd'
import { Descriptions, Badge } from 'antd'
import { Steps, Button, message } from 'antd'
const fixedData = []
for (let i = 0; i < 20; i += 1) {
	fixedData.push({
		key: i,
		name: ['Light', 'Bamboo', 'Little'][i % 3],
		description: 'Everything that has a beginning, has an end.',
	})
}
const { Text } = Typography
const Confirm = (props) => {
  const {next,prex} = props
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
						ant-design@alipay.com
					</Descriptions.Item>
					<Descriptions.Item
						contentStyle={{ textAlign: 'left', backgroundColor: '#FFFFFF' }}
						label='收款账户'
					>
						test@example.com
					</Descriptions.Item>
					<Descriptions.Item
						contentStyle={{ textAlign: 'left', backgroundColor: '#FFFFFF' }}
						label='收款人姓名'
					>
						Alex
					</Descriptions.Item>
					<Descriptions.Item
						contentStyle={{ textAlign: 'left', backgroundColor: '#FFFFFF' }}
						label='转账金额'
					>
						500.0元
					</Descriptions.Item>
				</Descriptions>
				<Button>上一步</Button>
				<Button type='primary'>下一步</Button>
			</div>
		</div>
	)
}

export default Confirm
