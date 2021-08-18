/*
 * @Author: your name
 * @Date: 2021-08-17 23:56:42
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-18 08:54:13
 * @FilePath: /react-admin/src/views/form/components/Success.tsx
 */
import React from 'react'
import { Result, Button } from 'antd'
import { Descriptions, Badge } from 'antd';

const Success = () => {
	return (
		<div className='my-confirm'>
			<Result
				status='success'
				title='操作成功!'
				subTitle='预计两小时内到账'
				extra={[
					<Button type='primary' key='console'>
						再转一笔
					</Button>,
					<Button key='buy'>查看账单</Button>,
				]}
			/>
			<div>
				{/* <span>转账账户: ant-design@alipay.com </span><br />
				<span>收款账户: test@example.com </span><br />
				<span>收款人姓名: Alex </span><br />
				<span>转账金额: 500.00元 </span> */}
				<Descriptions column={1} size="default"  >
    <Descriptions.Item contentStyle={{textAlign:'left'}} label="付款账户">ant-design@alipay.com</Descriptions.Item>
    <Descriptions.Item contentStyle={{textAlign:'left'}}  label="收款账户">test@example.com</Descriptions.Item>
    <Descriptions.Item contentStyle={{textAlign:'left'}}  label="收款人姓名">Alex</Descriptions.Item>
    <Descriptions.Item contentStyle={{textAlign:'left'}}   label="转账金额"><h1>500.0元</h1></Descriptions.Item>
    </Descriptions>
			</div>
		</div>
	)
}

export default Success
